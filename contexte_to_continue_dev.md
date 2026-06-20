# État du Projet et Tâches pour la suite du Développement (Passation IA)

Ce fichier est destiné au nouvel agent IA pour lui fournir tout le contexte nécessaire à la poursuite du développement de l'application de révisions du Brevet.

## 🎯 Résumé de l'Application
- **Application** : Une PWA de révisions du brevet (Maths, Français, Histoire-Géo, Sciences).
- **Stack** : React (Vite), TypeScript, Tailwind CSS, `react-markdown` pour le rendu du contenu, `framer-motion` (importe via `motion/react`) pour les animations, `lucide-react` pour les icônes.
- **Architecture Contenu** : Les cours sont rédigés en Markdown (`src/content/**/*.md`) et chargés via `import.meta.glob`. `react-markdown` + `rehype-raw` convertissent les balises HTML personnalisées (ex: `<callout>`, `<mini-quiz>`, `<concept-card>`) en composants React réutilisables.
- **Version actuelle** : `1.11.0` (2026-06-20)

## ✅ Derniers Bugs Corrigés (v1.11.0)

### Accessibilité & Robustesse
- **aria-label** ajouté sur les 3 boutons d'icône de QuizSession
- **console.error** ajouté dans les 7 catches vides des JSON.parse (LessonContent.tsx)
- **13 promesses non gérées** sécurisées : `.catch()` sur tous les `import(...).then()` et `getRegistration()`
- **canvas-confetti** uniformisé : import statique partout, fin des dynamic imports

### Nettoyage de code
- **6 dead imports retirés** : TrendingUp/Sparkles/Tooltip (Dashboard), Zap (QuizSession), BookOpen (Login), useUserStore (SubjectDetail)
- **ChainesInfoActionSVG** supprimé : import, mapping et hasBlock — jamais utilisé dans les .md
- **text-white → text-foreground** sur 3 titres sur fond uni (h1 markdown, titre matières, titre carte)

### Précédents (v1.9.2)

### Chapitre 28 — L'énergie et le développement durable
**Problème** : Plusieurs composants n'apparaissaient pas à l'écran (SVG interactif, callout "Le saviez-vous ?", concept-card, FAQ).

**Causes et corrections** :
1. **Entités HTML non échappées** dans les attributs des balises `<callout>` et `<faq-item>` (`&apos;`, `&quot;`, `&rarr;`) — rehype-raw échouait silencieusement à parser ces nœuds.
2. **Erreur TypeScript** dans le mapping `summary` — `children` n'était pas destructuré, provoquant un crash silencieux du rendu.
3. **FAQ** : passage d'une structure `<details>/<summary>` brute (mal gérée par rehype-raw) à des `<faq-item>` personnalisés.

**Fichiers modifiés** :
- `src/content/cycle-4/sciences/3eme/chapters/28-lenergie-et-le-developpement-durable.md` — remplacement des entités HTML par leurs équivalents Unicode
- `src/components/LessonContent.tsx` — correction du mapping `summary` + ajout des balises manquantes dans la liste `hasBlock`

### Mini-quiz JSON
**Problème** : Les options des mini-quiz dans 4 fiches Sciences contenaient des apostrophes non échappées (`'` au lieu de `&apos;`), cassant le parseur JSON et rendant les quiz invisibles.

**Fichiers corrigés** (chap. 9, 19, 20, 29).

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
