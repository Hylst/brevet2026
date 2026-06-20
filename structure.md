# Structure du Projet 📂

Voici un aperçu de l'architecture du projet **Brevet PWA 2026 v2** (Version 1.16.0) :

```text
/
├── archive/                # Anciens scripts utilitaires
├── docs/                   # Documents de conception et plans détaillés
│   └── plans/              # Plans exhaustifs par matière
├── print-version/          # Fichiers Markdown générés pour l'impression (export)
├── public/                 # Assets statiques et fichiers SEO
├── scripts/                # Scripts utilitaires Node.js de build et d'export
│   ├── build-book.ts
│   ├── copy-assets.ts
│   └── export-to-md.ts
├── src/                    # Code source de l'application React
│   ├── components/         # Composants React (en transition vers une architecture Feature-Based)
│   │   ├── layout/         # Header, BottomNav, PageTransition, ErrorBoundary
│   │   ├── content/        # Rendu Markdown, SVGs interactifs
│   │   ├── dashboard/      # Cartes, statistiques
│   │   ├── gamification/   # UI des niveaux, modales XP, topbar
│   │   ├── quiz/           # Interfaces de QCM et résultats
│   │   └── ui/             # Composants d'interface génériques et atomiques
│   ├── content/            # Contenu pédagogique brut en Markdown (.md)
│   ├── contexts/           # Contextes React locaux (à limiter en faveur de Zustand)
│   ├── data/               # Structuration des répertoires de cours et banques de questions
│   ├── hooks/              # Hooks personnalisés transverses
│   ├── lib/                # Fonctions utilitaires pures (Device, sync)
│   ├── pages/              # Pages principales (Routes) - À lazy-loader
│   ├── services/           # Services externes virtuels (Stockage pur)
│   │   ├── providers/      # Implémentations Repository (Local Storage Provider)
│   ├── store/              # Gestion d'état global Zustand (Auth, Gamification, Scores)
│   ├── types/              # Définitions TypeScript (Interfaces métiers et UI)
│   ├── App.tsx             # Composant racine, configuration du Router
│   ├── constants.ts        # Constantes globales (Clés localStorage, etc.)
│   └── main.tsx            # Point d'entrée de l'application React
├── .env.example            # Exemple de variables d'environnement
├── .gitignore              # Fichiers ignorés par Git
├── README.md               # Présentation globale
├── CHANGELOG.md            # Historique des modifications
├── contexte_dev.md         # Journal et priorités de développement (état actuel)
├── custom_rules.md         # Règles de développement, design et architecture
├── features.md             # Inventaire détaillé des fonctionnalités
├── package.json            # Dépendances et scripts npm
├── vite.config.ts          # Configuration de Vite (bundler)
├── metadata.json           # Métadonnées de l'application AI Studio
└── todo.md                 # Tâches à venir
```

## Axes d'amélioration architecturale proposés :

1. **Architecture Feature-Based (FSD allégé)**
   Évoluer du modèle technique actuel (`components/`, `hooks/`, `store/`) vers une structure par fonctionnalité (`features/quiz`, `features/gamification`, `features/courses`). Cela permettra d'agglomérer le state, les hooks et les vues propres à un domaine métier dans un même dossier.

2. **Optimisation des Performances & du Bundle**
   Implémenter le *Code Splitting* sur les routes dans `App.tsx` via `React.lazy()` et `<Suspense>`. Les ressources lourdes comme `QuizSession` ou le parseur Markdown ne devraient être chargées que si l'utilisateur visite ces pages.

3. **Unification de l'État Global**
   Mettre fin à la redondance entre certains contextes React (`LessonProgressContext`) et `Zustand`. Conserver l'utilisation de Zustand comme source de vérité unique pour la progression globale afin de réduire le "prop-drilling" et les re-renders inutiles.

4. **Automatisation du Contenu (CI/Scripts)**
   Les fichiers bruts markdown et les données (`src/data/*.ts`) doivent être testés et structurés automatiquement. Centraliser la logique de vérification dans `scripts/` (ex: `validate-content.ts`) maintenant que la racine du projet est nettoyée de ces scripts de test épars.

## Points d'entrée clés

- **Données pédagogiques** : Modifiez les fichiers `.md` dans `src/content/cycle-4/` pour éditer le coeur des fiches de cours. L'arborescence est définie dans `src/data/*.ts`.
- **Export Markdown** : Le script `scripts/export-to-md.ts` lit les données et génère les fichiers dans `print-version/`.
- **Règles de développement** : Consultez `custom_rules.md` avant toute modification majeure.
- **Accès aux données** : Ne modifiez pas le `localStorage` directement. Passez toujours par `src/services/dataProvider.ts`.
