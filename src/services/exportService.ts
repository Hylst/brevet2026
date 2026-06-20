/**
 * exportService.ts
 * Gère l'export et l'import de toutes les données utilisateur.
 * Le format de l'export intègre la version de l'app pour permettre
 * la détection d'incompatibilités et la migration lors des mises à jour.
 */

import { STORAGE_KEYS } from '../constants';
import { APP_VERSION } from '../version';

/** Format du fichier JSON exporté */
export interface ExportPayload {
  /** Version de l'app au moment de l'export */
  appVersion: string;
  /** Timestamp ISO de l'export */
  exportedAt: string;
  /** Clé du format interne — permet de détecter si le format est compatible */
  formatVersion: number;
  /** Toutes les données stockées */
  data: {
    progress: string | null;
    gamification: string | null;
    auth: string | null;
    /** Clés dynamiques (miniquiz_*, checklist_*) */
    uiState: Record<string, string>;
  };
}

/** Version actuelle du format d'export (incrémenter si le schéma change) */
const EXPORT_FORMAT_VERSION = 1;

/**
 * Exporte toutes les données utilisateur dans un objet JSON structuré.
 */
export function exportUserData(): ExportPayload {
  // Collecte toutes les clés dynamiques (état UI des quiz, checklists…)
  const uiState: Record<string, string> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && (key.startsWith('miniquiz_') || key.startsWith('checklist_'))) {
      uiState[key] = localStorage.getItem(key) ?? '';
    }
  }

  return {
    appVersion: APP_VERSION,
    exportedAt: new Date().toISOString(),
    formatVersion: EXPORT_FORMAT_VERSION,
    data: {
      progress: localStorage.getItem(STORAGE_KEYS.PROGRESS),
      gamification: localStorage.getItem(STORAGE_KEYS.GAMIFICATION),
      auth: localStorage.getItem(STORAGE_KEYS.AUTH),
      uiState,
    },
  };
}

/**
 * Déclenche le téléchargement d'un fichier JSON de sauvegarde.
 */
export function downloadUserDataBackup(): void {
  const payload = exportUserData();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const a = document.createElement('a');
  a.href = url;
  a.download = `brevet2026-sauvegarde-${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export type ImportResult =
  | { success: true; warnings: string[] }
  | { success: false; error: string };

/**
 * Importe et restaure les données utilisateur depuis un objet JSON.
 * Retourne un résultat avec succès ou erreur, et des avertissements éventuels.
 */
export function importUserData(rawJson: string): ImportResult {
  let parsed: Record<string, unknown>;

  try {
    parsed = JSON.parse(rawJson);
  } catch {
    return { success: false, error: 'Fichier invalide : ce n\'est pas un JSON valide.' };
  }

  const warnings: string[] = [];
  let payload: ExportPayload;

  // --- Rétrocompatibilité : détection de l'ancien format (dump localStorage à plat) ---
  const storageKeyValues = Object.values(STORAGE_KEYS) as string[];
  const hasOldFormat = typeof parsed === 'object' && !parsed.formatVersion
    && storageKeyValues.some(k => k in parsed);

  if (hasOldFormat) {
    const oldData = parsed as Record<string, string>;
    const knownKeys = storageKeyValues;

    payload = {
      appVersion: 'ancienne (1.9.x)',
      exportedAt: new Date().toISOString(),
      formatVersion: 0, // marqueur "ancien format"
      data: {
        progress: oldData[STORAGE_KEYS.PROGRESS] ?? null,
        gamification: oldData[STORAGE_KEYS.GAMIFICATION] ?? null,
        auth: oldData[STORAGE_KEYS.AUTH] ?? null,
        uiState: {},
      },
    };

    // Extractions des clés UI dynamiques (miniquiz_, checklist_)
    for (const [key, value] of Object.entries(oldData)) {
      if (!knownKeys.includes(key) && (key.startsWith('miniquiz_') || key.startsWith('checklist_'))) {
        payload.data.uiState[key] = value ?? '';
      }
    }

    warnings.push(
      'Sauvegarde au format ancien détectée et convertie automatiquement. Vérifie tes données après l\'import.'
    );
  } else {
    // Nouveau format standard
    payload = parsed as unknown as ExportPayload;

    if (!payload.formatVersion || !payload.appVersion || !payload.data) {
      return {
        success: false,
        error: 'Format non reconnu. Ce fichier ne semble pas être une sauvegarde Brevet 2026.',
      };
    }

    if (payload.formatVersion > EXPORT_FORMAT_VERSION) {
      return {
        success: false,
        error: `Ce fichier a été créé avec une version plus récente de l'app (v${payload.appVersion}). Mets à jour l'application avant d'importer.`,
      };
    }

    if (payload.appVersion !== APP_VERSION) {
      warnings.push(
        `La sauvegarde provient de la version ${payload.appVersion} de l'app (version actuelle : ${APP_VERSION}). La compatibilité est assurée, mais vérifie ta progression après l'import.`
      );
    }
  }

  try {
    const { data } = payload;

    // Restauration des données principales
    if (data.progress) {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, data.progress);
    }
    if (data.gamification) {
      localStorage.setItem(STORAGE_KEYS.GAMIFICATION, data.gamification);
    }
    if (data.auth) {
      localStorage.setItem(STORAGE_KEYS.AUTH, data.auth);
    }

    // Nettoyage des anciennes clés UI dynamiques avant restauration
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith('miniquiz_') || key.startsWith('checklist_'))) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));

    // Restauration des états UI (quiz, checklists)
    if (data.uiState) {
      for (const [key, value] of Object.entries(data.uiState)) {
        localStorage.setItem(key, value);
      }
    }

    return { success: true, warnings };
  } catch (e) {
    return { success: false, error: `Erreur lors de la restauration : ${String(e)}` };
  }
}
