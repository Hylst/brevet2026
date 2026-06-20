/**
 * useUpdateDetection.ts
 * Détecte deux types de mises à jour :
 * 1. Un nouveau Service Worker en attente d'activation (mise à jour PWA installée)
 * 2. Une nouvelle version de l'app (en comparant APP_VERSION avec la version stockée)
 */

import { useEffect, useState, useCallback } from 'react';
import { APP_VERSION } from '../version';

const VERSION_STORAGE_KEY = 'brevet_app_version';

export interface UpdateState {
  /** Un nouveau SW est en attente — l'utilisateur peut cliquer pour recharger */
  swUpdateAvailable: boolean;
  /** La version a changé depuis la dernière visite — afficher le modal "Nouveautés" */
  newVersionDetected: boolean;
  /** Version précédemment connue par l'utilisateur (null si première visite) */
  previousVersion: string | null;
  /** Active l'installation du nouveau SW et recharge la page */
  applySwUpdate: () => void;
  /** Marque la nouvelle version comme vue (ferme le modal Nouveautés) */
  acknowledgeNewVersion: () => void;
}

export function useUpdateDetection(): UpdateState {
  const [swUpdateAvailable, setSwUpdateAvailable] = useState(false);
  const [newVersionDetected, setNewVersionDetected] = useState(false);
  const [previousVersion, setPreviousVersion] = useState<string | null>(null);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  // --- Détection de nouvelle version applicative ---
  useEffect(() => {
    const stored = localStorage.getItem(VERSION_STORAGE_KEY);
    if (!stored) {
      // Première visite : on enregistre la version, pas de modal
      localStorage.setItem(VERSION_STORAGE_KEY, APP_VERSION);
    } else if (stored !== APP_VERSION) {
      // Version différente → mise à jour détectée
      setPreviousVersion(stored);
      setNewVersionDetected(true);
      // On met à jour immédiatement pour ne pas re-afficher à chaque rechargement
      localStorage.setItem(VERSION_STORAGE_KEY, APP_VERSION);
    }
  }, []);

  // --- Détection de mise à jour Service Worker ---
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    const checkForWaiting = (registration: ServiceWorkerRegistration) => {
      if (registration.waiting) {
        setWaitingWorker(registration.waiting);
        setSwUpdateAvailable(true);
      }
    };

    navigator.serviceWorker.getRegistration().then(registration => {
      if (!registration) return;
      checkForWaiting(registration);

      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (!newWorker) return;

        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            setWaitingWorker(newWorker);
            setSwUpdateAvailable(true);
          }
        });
      });
    }).catch(() => {});

    // Écouter aussi les messages du SW (vite-plugin-pwa envoie un message)
    const handleControllerChange = () => {
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);
    return () => {
      navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
    };
  }, []);

  const applySwUpdate = useCallback(() => {
    if (waitingWorker) {
      // Demande au SW en attente de prendre le contrôle immédiatement
      waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    } else {
      window.location.reload();
    }
  }, [waitingWorker]);

  const acknowledgeNewVersion = useCallback(() => {
    setNewVersionDetected(false);
  }, []);

  return {
    swUpdateAvailable,
    newVersionDetected,
    previousVersion,
    applySwUpdate,
    acknowledgeNewVersion,
  };
}
