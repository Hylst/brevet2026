# Contexte de Développement 🛠️

Ce fichier a pour but de préserver le contexte de l'état actuel de **Brevet PWA 2026** pour aider les assistants IA et les développeurs à s'y retrouver instantanément dans le cycle de vie du projet.

## État Actuel (version 1.16.0)
L'application est fonctionnelle et prête pour la production. Dernière session : enrichissement SVT couvrant 100% du programme SchoolMouv + amélioration du Profil utilisateur.
- **SVT** : Couverture à 100% du programme SchoolMouv (14 chapitres) — nouvelles fiches Exploitation ressources naturelles (35) et Nutrition plantes (36), fiche 17 enrichie Effort physique + Sport/santé.
- **Maths** : Toutes les lacunes SchoolMouv comblées — Triangles Semblables, quartiles/ECC, grandeurs composées, polygone régulier + angles inscrits, systèmes d'équations 2 inconnues.
- **Technologie** : Couverture à 100% du programme SchoolMouv — nouvelle fiche Mécanismes (34), nouveaux contenus dans 6 fiches existantes (OST, critères de choix, JSON/NAS, Python, procédés fabrication, EPI sécurité).
- **Français** (v1.14.0) : 4 nouvelles fiches (Poésie, Conjonctive, Étymologie, Types de textes) + enrichissement de 8 fiches.
- **Profil amélioré** : Affichage des badges débloqués en grille, barre de progression XP animée, personnalisation d'avatar (7 styles DiceBear), formulaire repliable, statistiques en 4 cartes.
- **Interopérabilité navigateurs** : Audio débloqué après premier geste utilisateur.
- **Gamification / streaks** : Calcul correct en YYYY-MM-DD local.
- **Mascotte** : Gestion fine de chaque sous-matière (SVT, Physique, Tech, Histoire, Géo, EMC, Maths, Français).

## Stack Technique
- React 19, Vite 6, TypeScript 5
- Zustand (persist)
- Tailwind CSS v4 (variables CSS)
- `framer-motion` (import via `motion/react`)
- `react-markdown` + `rehype-raw` + `rehype-katex`
- `lucide-react` pour les icônes
- `vite-plugin-pwa` (Service Worker)
