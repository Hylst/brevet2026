# Espace Réussite Brevet 2026 — Contexte Agent (opencode)

## 🎯 Projet
PWA de révision du Brevet des Collèges 2026 — 100% offline-first, déployée sur `https://hylst.fr/brevet2026/`.
Élèves cibles : 3ème (14-15 ans). Ton : tutoyement, encourageant, avec emojis parsimés.

## 🏗️ Stack
- **React 19** + **Vite 6** + **TypeScript 5**
- **Tailwind CSS v4** (variables CSS — jamais de couleurs en dur `bg-[#…]`)
- **Zustand** (état global gamification + progression)
- **react-markdown** + **rehype-raw** + **rehype-katex** (rendu des fiches)
- **framer-motion** (`import { motion } from 'motion/react'` — **pas** de `framer-motion` direct)
- **lucide-react** pour les icônes
- **vite-plugin-pwa** (Service Worker, précache)

## 📁 Répertoires clés
```
src/
├── components/
│   ├── LessonContent.tsx   ← mapping react-markdown → composants React (fichier central)
│   ├── content/            ← SVGs interactifs + composants pédagogiques
│   └── gamification/       ← modals XP, badges
├── content/cycle-4/        ← Fiches Markdown (.md) — source de vérité du contenu
├── data/                   ← Index TypeScript des matières/chapitres
├── pages/                  ← Routes (Dashboard, Settings, QuizSession…)
├── services/               ← storageService, exportService, dataProvider
├── store/                  ← useGamificationStore (Zustand + persist)
├── hooks/                  ← useUpdateDetection, useUIState…
├── version.ts              ← APP_VERSION + CHANGELOG intégré
└── constants.ts            ← STORAGE_KEYS, ID_MIGRATION_MAP
```

## ⚙️ Règles de développement impératives

### Design System
- **Jamais** de couleurs hardcodées : utiliser `bg-background`, `text-foreground`, `border-border`, `text-primary`, `text-muted`, etc.
- Thème sombre uniquement (`src/index.css` définit toutes les variables CSS).
- Mobile-first (`max-w-lg`), responsive tablet/desktop (`max-w-4xl`).

### Contenu Markdown
Les fiches `.md` dans `src/content/` utilisent des **balises HTML personnalisées** :
- `<callout type="info|warning|tip|success" title="…">…</callout>`
- `<concept-card title="…" icon="LucideIconName" description="…" theme="primary|success|warning|info"></concept-card>`
- `<mini-quiz question="…" options='["…","…"]' correctAnswer="0" explanation="…"></mini-quiz>`
- `<brevet-checklist items='["…","…"]'></brevet-checklist>`
- `<fill-in-the-blanks text="…[mot1|mot2]…" title="…"></fill-in-the-blanks>`
- `<faq-item title="…">contenu</faq-item>`
- `<drag-and-drop-list title="…" items='[{"id":"1","content":"…","match":"…"}]'></drag-and-drop-list>`
- `<flashcard front="…" back="…"></flashcard>`
- SVGs interactifs : `<thales-svg>`, `<water-cycle-svg>`, `<energie-dev-durable-svg>`, etc.

**⚠️ Règle critique Markdown** : dans les attributs JSON (`options='[…]'`), les apostrophes doivent être encodées en `&apos;` pour ne pas casser le parseur (ex: `"C&apos;est correct"`).

### Import framer-motion
```typescript
// ✅ Correct
import { motion, AnimatePresence } from 'motion/react';
// ❌ Incorrect
import { motion } from 'framer-motion';
```

### Données utilisateur
- Ne jamais accéder à `localStorage` directement depuis les composants.
- Passer par `src/services/storageService.ts` (pour la progression) ou `src/services/exportService.ts`.
- La gamification passe par `useGamificationStore` (Zustand persist).

## 🐛 Bugs corrigés récemment (v1.11.0)
1. **BUG-A : `faq-item question=` au lieu de `title=`** : 15 occurrences dans 5 fichiers (sciences chap. 11, 12, 13 ; HG chap. 22, 23). L'attribut `question=` rendait `{title}` undefined → en-tête FAQ vide.
2. **BUG-B : Trailing `&apos;` dans `method-box steps`** : 7 occurrences dans 5 fichiers français (chap. 18, 23, 24, 26, 27). Le `&apos;` après le `]` du JSON cassait `JSON.parse` silencieusement → tableau steps vide.
3. **Dead entries dans `hasBlock`** : `systeme-solaire-svg`, `experience-lumiere-svg` supprimées (jamais utilisées dans les .md).
4. **`periurbanisation-svg` manquant dans `hasBlock`** : ajouté pour éviter l'hydration error par wrapping `<p>`.
5. **(v1.9.2) Chapter 28** : entités HTML (`&apos;`, `&quot;`, `&rarr;`) dans les attributs `<callout>` et `<faq-item>` cassaient rehype-raw.
6. **(v1.9.2) LessonContent.tsx** : erreur TS sur `summary` — `children` n'était pas destructuré.
7. **(v1.9.2) Mini-quiz JSON** : apostrophes non échappées dans `options='[…]'` dans 4 fichiers sciences (chap. 9, 19, 20, 29).
8. **Promesses non gérées** : 13 `.catch()` ajoutés sur des `import(...).then()` et `getRegistration()` — élimination des unhandled promise rejections.
9. **`ChainesInfoActionSVG` mort** : import, mapping et `hasBlock` retirés — jamais utilisé dans les fiches `.md`.
10. **Imports inutilisés** : `TrendingUp`/`Sparkles`/`Tooltip` (Dashboard), `Zap` (QuizSession), `BookOpen` (Login), `useUserStore` (SubjectDetail) retirés.

## 🆕 Fonctionnalités ajoutées récemment
- `src/services/exportService.ts` — export/import JSON versionné de toutes les données
- `src/version.ts` — `APP_VERSION`, `CHANGELOG` (modal "Nouveautés")  
- `src/hooks/useUpdateDetection.ts` — détection SW en attente + détection de nouvelle version
- `src/pages/Settings.tsx` refonte — section « Mes Données » (export/import) + modal changelog + bandeau SW
- `src/App.tsx` — toast flottant global quand un nouveau SW est en attente
- `♿ Accessibilité` — aria-label sur les 3 boutons d'icône de QuizSession
- `📝 Robustesse` — logs console.error dans les 7 catches vides des JSON.parse
- `🔒 Sécurité promesses` — 13 `.catch()` sur les import() et getRegistration()
- `♻️ Ménage` — 6 dead imports retirés, canvas-confetti uniformisé, ChainesInfoActionSVG mort supprimé

## 🚀 Commandes
```bash
npm run dev        # Serveur de développement (http://localhost:3000)
npm run build      # Build production (copie assets + vite build)
npm run lint       # tsc --noEmit (vérification TypeScript)
npm run export:md  # Export Markdown pour impression
node find-real-errors.js    # Détecte les JSON malformés dans les mini-quiz
node check-tags.js          # Vérifie les balises HTML ouvertes/fermées
node check-missing-blocks.js # Vérifie les fiches sans checklist ni "Le saviez-vous"
```

## 📐 Architecture Export/Import (pérennité)
Le fichier `exportService.ts` utilise `EXPORT_FORMAT_VERSION = 1`.  
À chaque changement de schéma de données, incrémenter cette constante ET ajouter une migration dans `importUserData()`.  
Le format JSON exporté contient :
```json
{
  "appVersion": "1.9.2",
  "exportedAt": "2026-05-10T…",
  "formatVersion": 1,
  "data": {
    "progress": "…JSON stringifié…",
    "gamification": "…JSON stringifié…",
    "auth": "…JSON stringifié…",
    "uiState": { "miniquiz_abc": "…", "checklist_xyz": "…" }
  }
}
```
