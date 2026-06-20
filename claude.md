# Espace Réussite Brevet 2026 — CLAUDE.md

## Vue d'ensemble du projet

PWA de révision pour le Brevet des Collèges 2026. Application React offline-first déployée sur `https://hylst.fr/brevet2026/`. Public cible : élèves de 3ème (14-15 ans). Tutoiement, ton encourageant.

**Version actuelle** : `1.11.0` (définie dans `src/version.ts`)

## Stack technique

| Technologie | Usage |
|---|---|
| React 19 + Vite 6 | Framework UI + bundler |
| TypeScript 5 | Typage strict obligatoire |
| Tailwind CSS v4 | Styling (variables CSS uniquement) |
| Zustand 5 | État global (gamification, progression) |
| react-markdown + rehype-raw + rehype-katex | Rendu des fiches .md |
| `motion/react` (framer-motion v12) | Animations — **import uniquement depuis `motion/react`** |
| lucide-react | Icônes |
| vite-plugin-pwa | Service Worker + précache |

## Architecture des composants markdown

Le fichier **`src/components/LessonContent.tsx`** est le cœur du système : il mappe les balises HTML custom vers des composants React via `react-markdown`.

### Balises supportées dans les `.md`

```markdown
<callout type="info|warning|tip|success" title="…">texte</callout>
<concept-card title="…" icon="NomIconeLucide" description="…" theme="primary|success|warning|info"></concept-card>
<mini-quiz question="…" options='["opt1","opt2"]' correctAnswer="0" explanation="…"></mini-quiz>
<brevet-checklist items='["point 1","point 2"]'></brevet-checklist>
<flashcard front="…" back="…"></flashcard>
<faq-item title="…">contenu markdown</faq-item>
<fill-in-the-blanks text="texte avec [bonne|mauvaise] réponse" title="…"></fill-in-the-blanks>
<drag-and-drop-list title="…" items='[{"id":"1","content":"…","match":"…"}]'></drag-and-drop-list>
<timeline events='[{"year":"…","event":"…"}]'></timeline>
<svg-custom-name></svg-custom-name>  ← SVGs interactifs (thales-svg, water-cycle-svg, etc.)
```

> **⚠️ CRITIQUE** : Dans les attributs entre simples quotes (`options='[…]'`), encoder `'` → `&apos;` et `"` → `&quot;`. Sinon le JSON est cassé silencieusement.

## Règles de code impératives

### 1. Imports framer-motion
```typescript
// ✅ Toujours
import { motion, AnimatePresence } from 'motion/react';
// ❌ Jamais
import { motion } from 'framer-motion';
```

### 2. Design System — jamais de couleurs hardcodées
```typescript
// ✅ Correct
className="bg-background text-foreground border-border text-primary"
// ❌ Interdit dans les nouveaux composants
className="bg-slate-900 text-white border-gray-700 text-blue-500"
```

### 3. Accès aux données — toujours via les services
```typescript
// ✅ Progression
import { getProgress, markSheetRead } from '../services/storageService';
// ✅ Export/Import
import { downloadUserDataBackup, importUserData } from '../services/exportService';
// ✅ Gamification
import { useGamificationStore } from '../store/useGamificationStore';
// ❌ Jamais en direct
localStorage.getItem('brevet_pwa_progress_v1');
```

### 4. Clés localStorage
```typescript
import { STORAGE_KEYS } from '../constants';
// STORAGE_KEYS.PROGRESS     → 'brevet_pwa_progress_v1'
// STORAGE_KEYS.GAMIFICATION → 'gamification-storage'
// STORAGE_KEYS.AUTH         → 'auth-storage'
// STORAGE_KEYS.ONBOARDING   → 'hasSeenOnboarding'
```

## Services principaux

### `src/services/exportService.ts`
- `downloadUserDataBackup()` — télécharge un JSON de toute la progression
- `importUserData(rawJson: string): ImportResult` — restaure les données avec validation de version
- Format export : `{ appVersion, exportedAt, formatVersion: 1, data: { progress, gamification, auth, uiState } }`
- **Si le schéma des données change** : incrémenter `EXPORT_FORMAT_VERSION` ET ajouter une migration dans `importUserData()`

### `src/hooks/useUpdateDetection.ts`
- `swUpdateAvailable` — true quand un nouveau Service Worker attend
- `newVersionDetected` — true quand `APP_VERSION !== localStorage('brevet_app_version')`
- `applySwUpdate()` — poste `SKIP_WAITING` au SW puis recharge
- `acknowledgeNewVersion()` — marque la version comme vue

### `src/version.ts`
- `APP_VERSION` — à mettre à jour à chaque release
- `CHANGELOG` — tableau d'entrées affiché dans le modal "Nouveautés" de Settings
- **Mettre à jour les deux avant `npm run build`**

## Commandes npm

```bash
npm run dev          # http://localhost:3000
npm run build        # Build production (copie assets + Vite + PWA)
npm run lint         # tsc --noEmit — doit passer à 0 erreur avant chaque commit
npm run export:md    # Génère print-version/ (fiches papier)
```

## Scripts de diagnostic (racine du projet)

```bash
node find-real-errors.js      # JSON malformés dans les mini-quiz
node check-tags.js            # Balises ouvertes sans fermeture
node check-missing-blocks.js  # Fiches sans brevet-checklist ni "Le saviez-vous"
```

## Pièges connus

| Problème | Solution |
|---|---|
| Apostrophe dans `options='[…]'` | Encoder `&apos;` |
| Balise `<details>/<summary>` avec contenu markdown | Utiliser `<faq-item>` à la place |
| HTML entities (`&rarr;`, `&quot;`) dans des props custom | Utiliser directement `→`, `«`, `»` ou l'équivalent Unicode |
| Composant SVG qui ne s'affiche pas | Vérifier l'import dans LessonContent.tsx ET l'ajout dans la liste `hasBlock` (ligne ~332) |
| `motion` qui crash | Vérifier que l'import vient de `motion/react` et non `framer-motion` |

## Structure des données utilisateur (UserProgress)

```typescript
interface UserProgress {
  completedTopics: string[];     // IDs des fiches lues
  completedBooks: string[];      // IDs des matières terminées
  quizScores: Record<string, number>;
  failedQuestions: Record<string, string[]>;
  correctQuestions: string[];
  spacedRepetitionItems: Record<string, SpacedRepetitionItem>;
  totalTimeSpent: number;
  streakDays: number;
  lastStudyDate: string;         // ISO string
  settings: { timerEnabled: boolean; soundEnabled: boolean; };
  createdAt: string;
  updatedAt: string;
  deviceId: string;
}
```

## Compatibilité des IDs (migration)

`src/constants.ts` contient `ID_MIGRATION_MAP` — table de correspondance entre les anciens slugs de chapitres et les nouveaux IDs. Toujours ajouter ici si un chapitre est renommé/réorganisé.

## Déploiement

- Base URL : `./` (relatif, pour fonctionner dans le sous-dossier `/brevet2026/`)
- Hébergement : container Docker Nginx sur VPS Hylst.fr via Coolify
- Variable d'env de build : `VITE_WEB3FORMS_ACCESS_KEY` (formulaire de feedback)
- Après `npm run build`, copier `dist/` vers `D:\0CODE\AntiGravity\Cours_Memos\Docker\brevet2026\`
