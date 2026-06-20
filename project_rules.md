# Règles du Projet (Project Rules) 📜

Ce document définit les règles de conception, d'architecture et de développement à respecter pour le projet **Brevet PWA 2026 v2**.

## 1. Design System & UI
- **Thème Unique** : L'application utilise **uniquement un thème sombre**. Il n'y a pas de mode clair (Dark Mode Only).
- **Variables CSS** : Toutes les couleurs principales doivent utiliser les variables CSS définies dans `src/index.css` (ex: `var(--background)`, `var(--primary)`).
- **Tailwind CSS** : Utilisez les classes utilitaires Tailwind mappées sur ces variables (ex: `bg-background`, `text-foreground`, `border-border`). Évitez les couleurs en dur comme `bg-slate-900` dans les nouveaux composants.
- **Accessibilité (a11y)** : Assurez-vous que le contraste des textes est suffisant (WCAG AA minimum) et utilisez des balises sémantiques (`<main>`, `<nav>`, `<article>`).

## 2. Architecture & État (State Management)
- **Zustand** : Utilisez Zustand pour l'état global complexe (ex: `gamificationStore.ts` pour l'XP, les niveaux, les badges).
- **LocalStorage** : La persistance des données (progression, paramètres, erreurs) se fait via `src/lib/storageService.ts`. Ne manipulez pas `localStorage` directement dans les composants.
- **Composants Fonctionnels** : Utilisez uniquement des composants fonctionnels React avec des Hooks (`useState`, `useEffect`, `useMemo`).

## 3. Contenu Pédagogique (Markdown)
- **Source de Vérité** : Les fichiers Markdown dans `src/content/` sont la source unique de vérité pour les cours. Ne codez pas de contenu pédagogique en dur dans les composants React.
- **Composants MDX-like** : Utilisez `ReactMarkdown` avec des composants personnalisés (ex: `<flashcard>`, `<mini-quiz>`, `<thales-svg>`) pour enrichir le contenu.
- **Images & SVGs** : Placez les assets statiques dans le dossier `public/assets/` et référencez-les avec des chemins relatifs dans le Markdown (ex: `../assets/image.svg`).

## 4. Gamification & Progression
- **XP** : L'XP doit être attribuée pour des actions positives (lire une fiche, réussir un quiz).
- **Répétition Espacée** : Les questions échouées doivent être enregistrées via `saveFailedQuestions` et proposées dans le mode "Réviser mes erreurs".

## 5. Performance & PWA
- **Hors-ligne** : L'application doit rester fonctionnelle sans connexion internet. Assurez-vous que les nouvelles routes ou assets sont mis en cache par le Service Worker (`vite-plugin-pwa`).
- **Animations** : Utilisez `framer-motion` pour les transitions fluides, mais gardez-les subtiles pour ne pas surcharger les appareils mobiles.

## 6. Scripts & Outils
- **Export Markdown** : Tout nouveau contenu ajouté dans `src/data/` doit être compatible avec le script d'export `scripts/export-to-md.ts`. Testez l'export avec `npm run export:md` après des modifications majeures du contenu.
