# État du Projet et Tâches pour la suite du Développement (Passation IA)

Ce fichier est destiné au nouvel agent IA pour lui fournir tout le contexte nécessaire à la poursuite du développement de l'application de révisions du Brevet.

## 🎯 Résumé de l'Application
- **Application** : Une PWA de révisions du brevet (Maths, Français, Histoire-Géo, Sciences).
- **Stack** : React 19, Vite 6, TypeScript 5, Tailwind CSS v4, `react-markdown` + `rehype-raw` + `rehype-katex` pour le rendu, `framer-motion` (importe via `motion/react`), `lucide-react`.
- **Architecture Contenu** : Les cours sont rédigés en Markdown (`src/content/**/*.md`) et chargés via `import.meta.glob`. `react-markdown` + `rehype-raw` convertissent les balises HTML personnalisées (ex: `<callout>`, `<mini-quiz>`, `<concept-card>`) en composants React réutilisables.
- **Version actuelle** : `1.16.0` (2026-06-21)

## ✅ Dernières Sessions (v1.15.0 → v1.16.0)

### SVT — Couverture complète SchoolMouv (v1.16.0)
- **Nouvelle fiche 35** : Exploitation des ressources naturelles (eau, pétrole, minerais)
- **Nouvelle fiche 36** : Nutrition et organisation des plantes (photosynthèse, sève brute/élaborée)
- **Fiche 17 enrichie** : Effort physique (message nerveux moteur, rythme cardiaque, respiration cellulaire) + Sport/santé (bienfaits, échauffement, dopage/EPO)
- **Topics svt-12 et svt-13 ajoutés** dans src/data/svt.ts

### Profil amélioré (v1.16.0)
- **Badges** : grille des badges débloqués avec compteur, bouton Voir tout
- **XP** : barre de progression animée avec seuil du niveau suivant
- **Avatar** : 7 styles DiceBear avec randomisation au clic
- **Formulaire** : champs optionnels repliables, emojis sur objectifs mention
- **Stats** : 4 cartes niveau/série/XP/vies

### Maths — Lacunes SchoolMouv comblées (v1.15.0)
- **Nouvelle fiche** : Triangles Semblables (19-triangles-semblables.md, id maths-24)
- **Statistiques enrichies** : Quartiles Q1/Q3, écart interquartile, effectif cumulé croissant
- **Proportionnalité enrichie** : Grandeurs composées (débit, masse volumique)
- **Transformations enrichies** : Polygone régulier (angle au centre 360/n), angles inscrits/au centre
- **Équations enrichies** : Systèmes à 2 inconnues (substitution + combinaison)

### Technologie — Couverture complète SchoolMouv (v1.15.0)
- **Nouvelle fiche 34** : Mécanismes de transmission et transformation (engrenages, poulies, pignon-crémaillère, bielle-manivelle, came)
- **Fiche 22 enrichie** : OST (définition, évolution), organisation projet (Gantt), modes de représentation (croquis, schéma, plan coté), tester/valider
- **Fiche 23 enrichie** : Critères de choix d'un OST
- **Fiche 25 enrichie** : Structuration données (JSON, CSV), stockage (NAS, cloud, règle 3-2-1)
- **Fiche 26 enrichie** : Python vs Scratch, débogage
- **Fiche 29 enrichie** : 4 familles de procédés, EPI/sécurité
- **Quiz HS fix** : 2 questions SVT/Physique retirées, 6 nouvelles questions Techno

## 🐛 Problèmes Connus (À Surveiller)

- Aucun bug bloquant signalé à ce jour.

## 📁 Structure Clé des Fichiers

- `src/components/LessonContent.tsx` : **LE fichier central**. Assure la configuration `react-markdown` et associe les balises markdown à de vrais Composants React.
- `src/components/content/CourseElements.tsx` : Contient les définitions des composants globaux (ex: `Callout`, `ConceptCard`).
- `src/components/content/*.tsx` : Les composants interactifs et les animations (schémas SVG + interactions react).
- `src/content/` : Tout le contenu structuré Markdown.
- `src/data/content.ts` : Chargeur central — glob les fichiers `.md`, injecte le contenu dans chaque topic.
- `src/services/exportService.ts` : Export/Import JSON versionné des données utilisateur.
- `src/version.ts` : Source unique de vérité pour `APP_VERSION` et `CHANGELOG` intégré.

## 🚀 Recommandations de reprise / Prochaines Étapes

- [ ] Enrichir les fiches marquées comme manquantes par `check-missing-blocks.js` (134 fiches sans "Le saviez-vous ?")
- [ ] Améliorer le rendu du contenu Markdown dans les composants `<faq-item>` — les `**` ne sont pas interprétés comme du gras
- [ ] Envisager le code splitting des routes lourdes (`QuizSession`, parseur Markdown) via `React.lazy()`
- [ ] Migrer vers une architecture Feature-Based (FSD allégé) — agglomérer state, hooks et vues par domaine
