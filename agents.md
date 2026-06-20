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

## 📘 Contenu SVT enrichi (v1.16.0)
- **Nouvelle fiche 35** : « Exploitation des ressources naturelles » (svt-12) — eau douce (rareté, nappes, pollution, épuration), pétrole (formation fossile, raffinage, marées noires, CO₂), minerais/recyclage. 4 mini-quiz, method-box, drag-and-drop.
- **Nouvelle fiche 36** : « Nutrition et organisation des plantes » (svt-13) — photosynthèse (6CO₂+6H₂O→C₆H₁₂O₆+6O₂), chloroplastes, stomates, sève brute vs élaborée, respiration végétale. 4 mini-quiz, method-box, drag-and-drop.
- **Fiche 17 enrichie** : Effort physique (message nerveux moteur, rythme cardiaque/respiratoire, respiration cellulaire). Sport/santé (bienfaits, échauffement, dopage/EPO). 4 mini-quiz, method-box, fill-in-the-blanks.
- **Profil amélioré** : badges en grille, barre XP animée, avatar DiceBear (7 styles), formulaire repliable, 4 cartes stats.
- Couverture SchoolMouv SVT 100% (14 chapitres).

## 📘 Contenu Techno enrichi (v1.15.0)
- **Nouvelle fiche 34** : « Mécanismes de transmission et transformation » — engrenages (rapport R = Z₂/Z₁), poulies/courroies, pignon-crémaillère, bielle-manivelle, came/excentrique. 4 mini-quiz, formula-box, method-box.
- **Fiche 22 enrichie** : OST (définition, évolution, fonction technique vs principe technique), organisation projet (Gantt, rétroplanning), modes de représentation (croquis, schéma, plan coté), tester/valider (vérification vs validation).
- **Fiche 23 enrichie** : Critères de choix d'un OST (fonctionnels, économiques, esthétiques, environnementaux, ergonomiques).
- **Fiche 25 enrichie** : Structuration données (JSON, CSV), stockage (NAS, cloud, règle 3-2-1).
- **Fiche 26 enrichie** : Programmation textuelle Python vs Scratch graphique, débogage (syntaxe vs logique).
- **Fiche 29 enrichie** : 4 familles de procédés de fabrication (additif, soustractif, déformation, moulage), EPI et règles de sécurité.
- **Quiz Techno** : 2 questions HS retirées, 6 nouvelles questions.

## 📘 Contenu Maths enrichi (v1.15.0)
- **Nouvelle fiche 19** : « Triangles Semblables » (id: maths-24) — rapport de proportionnalité, lien Thalès.
- **Fiche 08 enrichie** : Quartiles Q1/Q3, écart interquartile, effectif cumulé croissant.
- **Fiche 07 enrichie** : Grandeurs composées (débit, masse volumique).
- **Fiche 13 enrichie** : Polygone régulier (angle au centre 360/n), angles inscrits = moitié angle au centre.
- **Fiche 05 enrichie** : Systèmes d'équations à 2 inconnues (substitution + combinaison).

## 🐛 Bugs corrigés récents (v1.15.0)
1. **Quiz Techno HS** : 2 questions SVT/Physique retirées du quiz Techno, remplacées par des questions Techno.
2. **ID maths-19 dupliqué** : Triangles Semblables renommé maths-24 (conflit avec quiz existant).
3. **(v1.14.0) 4 nouvelles fiches Français** : Poésie, Conjonctive, Étymologie, Types de textes + enrichissements de 8 fiches FR.
4. **(v1.11.0) BUG-A : `faq-item question=` au lieu de `title=`** : 15 occurrences dans 5 fichiers.
5. **(v1.11.0) BUG-B : Trailing `&apos;` dans `method-box steps`** : 7 occurrences dans 5 fichiers français.
6. **(v1.11.0) Dead entries dans `hasBlock`** + **periurbanisation-svg** manquant.
7. **(v1.9.2) Chapter 28** : entités HTML dans attributs, erreur TS `summary`, mini-quiz JSON.
8. **Promesses non gérées** : 13 `.catch()` ajoutés.
9. **Ménage** : 6 dead imports, ChainesInfoActionSVG mort, canvas-confetti uniformisé.

## 🆕 Fonctionnalités clés
- **Fiches Md interactives** : callout, concept-card, mini-quiz, flashcard, fill-in-the-blanks, drag-and-drop, method-box, formula-box, brevet-checklist, faq-item, brevet-exercise
- **SVG interactifs** : 40+ composants animés Thalès, cycle eau, digestion, etc.
- **Zustand persist** : gamification, progression, streaks, badges, niveaux
- **PWA offline** : précache Service Worker, installation mobile
- **Export/Import JSON** : sauvegarde versionnée des données (Settings)
- **Détection mise à jour** : toast de nouveau SW disponible

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
