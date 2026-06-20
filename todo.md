# Plan d'Amélioration et d'Extension des Questions d'Entraînement Global (Brevet)

## Objectif
Passer de ~200 questions actuelles (Mock Exam / Mise en situation) à **400+ questions** au total, tout en corrigeant, améliorant et diversifiant les questions existantes pour s'adapter au niveau 3ème (Brevet 2026).

---

## Phase 1 : Analyse et audit des questions existantes (1-200)
- [x] **Audit Mathématiques** : Vérifier la justesse des calculs, la cohérence des explications et l'alignement avec le programme (Thalès, Pythagore, fonctions, probabilités, arithmétique).
- [x] **Audit Français** : Relire les questions de grammaire, conjugaison, orthographe, figures de style et compréhension de texte pour s'assurer que les réponses et explications sont irréprochables.
- [x] **Audit Histoire-Géo & EMC** : Vérifier les dates, les événements (Première/Seconde Guerre mondiale, Guerre froide), les concepts géographiques (mondialisation, aménagement du territoire) et les principes de l'EMC.
- [x] **Audit Sciences (Physique-Chimie, SVT, Techno)** : Contrôler les formules (vitesse, poids), les concepts génétiques, immunitaires, et les algorithmes/mécanique.
- [x] **Homogénéisation** : S'assurer du formatage (Markdown), de la présence d'explications claires et de la gestion de la difficulté.

## Phase 2 : Rédaction de nouvelles questions (201-300)
- [x] **Création - Transversal (85 Q dans mock-questions)** : Ajouts de questions variées (maths, français, histoire, svt, etc.) pour gonfler la banque d'extra Mocks.
- [x] **Création - Mathématiques** : Focus sur l'algorithmique (Scratch), les équations/inéquations, la trigonométrie et des problèmes concrets.
- [x] **Création - Français** : Focus sur l'analyse logique, les propositions (subordonnées, relatives), la formation des mots et la syntaxe complexe.
- [x] **Création - Histoire-Géo** : Focus sur la construction européenne, l'évolution de la Vème République, les espaces de faible densité, et la France dans le monde.
- [x] **Création - Sciences** : Focus sur les ions, le pH, la dynamique des masses d'air, les énergies renouvelables et les capteurs en technologie.

## Phase 3 : Rédaction finale (301-400+)
- [x] **Création - Mathématiques (25 Q)** : Géométrie dans l'espace, statistiques à deux variables, conversions d'unités complexes.
- [x] **Création - Français (25 Q)** : Figures de style complexes (chiasme, litote), littérature (mouvements littéraires), et nuances de vocabulaire.
- [x] **Création - EMC et Actualité (25 Q)** : Médias et information, engagement citoyen, droits sociaux et justice.
- [x] **Création - Sciences & Transversal (25 Q)** : Interprétation de graphiques complexes, démarche scientifique, et questions croisant SVT/Physique.

## Phase 4 : Amélioration du système de Quiz
- [x] **Implémentation Session Courte / Longue** : Modifier `QuizSession.tsx` pour permettre une expérience modulable.
  - Session courte : 50 questions aléatoires.
  - Session longue (Mise en situation) : 100 questions.
- [x] **Rééquilibrage de la sélection** : S'assurer que le tirage aléatoire sélectionne des questions de manière homogène entre les matières (Maths, Français, HG, Sciences).

## Phase 5 : Tests et Validation
- [x] Lancer les tests TypeScript et le linter pour vérifier que le format des données est respecté.
- [x] Vérifier la bonne prise en compte du nouveau format dans l'UI.
- [x] Validation Q/A globale.

## Phase 6 : Debugging, Robustesse & Finitions Administratives
- [x] **Web Audio API** : Intercepter l'erreur `AudioContext was not allowed to start` des navigateurs liés aux règles d'Auto-Play strictes en exigeant une action d'utilisateur (`click`, `touchstart`) avant montage.
- [x] **Mise à jour SVT** : Rectifier les libellés de la matière "La planète Terre" en "Sciences et Vie de la Terre (SVT)" pour des raisons de conformité curriculaire.
- [x] **Logique des Séries (Streaks)** : Corriger le bug du passage de minuit et des Timezones liés au standard `toISOString` via une isolation de la Date (YYYY-MM-DD local).
- [x] **Correction UI/Animations** : Adapter `Framer Motion` pour ne pas envoyer des valeurs tableaux dans des layout properties sans type `keyframes`.
- [x] **Mascotte** : Subdiviser les accessoires par sous-spécialité (ex: distinguer Histoire de Géo ou de l'EMC, et séparer complètement Physique, SVT et Techno).
- [x] **Restitution d'XP** : Rajouter le rechargement full HP (`MAX_LIVES`) lors de la montée de niveau pour récompenser l'effort.
- [x] Mise à jour des documents de contexte (`CHANGELOG.md`, `structure.md`, `contexte_dev.md`).

## Phase 7 : Correction des erreurs, incohérences et oublis dans les fiches
- [x] **Balise erronée corrigée** : Rement de `</equations-balance-svg>` (utilisé à tort comme balise de fermeture) par `</mini-quiz>` dans le chapitre sur les *Équations et Inéquations* (Maths).
- [x] **Fiches orphelines (Non référencées)** : Intégrées aux sommaires TypeScript
- [x] **Données défectueuses et index hors limites** : Corrigés dans les quiz
- [x] **Défaillances syntaxiques JSON (Guillemets)** : Résolues (options et entités HTML)
- [x] **Balises auto-fermantes cassées** : Nettoyées pour `<brevet-exercise>` et `<method-box>`
- [x] **Omissions méthodologiques** : Ajoutées pour les 4 fichiers manquants (ex: le groupe nominal)
- [x] **Inspection des images vectorielles (SVG)** : Modifié le composant `<ZoomableImage>` pour corriger les SVGs coupés lors du clic
- [x] **Revue de complétude (Contenu trop court)** : Allongé les fiches (SVT, Physique, et Fractions) et intégré les formules clés (vitesse, P=m*g, immunité, génétique).
- [x] **Enrichissement structurel systématique** : Vérifié et/ou intégré via script les encarts "💡 Le savais-tu ?" et `<brevet-checklist>`.

## Phase 8 : Correction Chapitre 28 (Énergie & Développement durable)
- [x] **Correction entités HTML** : Remplacement des `&apos;`, `&quot;`, `&rarr;` dans les attributs des balises `<callout>` et `<faq-item>` qui empêchaient rehype-raw de rendre les composants.
- [x] **LessonContent.tsx** : Correction erreur TypeScript sur `summary` — `children` non destructuré.
- [x] **FAQ** : Remplacement des `<details>/<summary>` bruts par des composants `<faq-item>` personnalisés compatibles rehype-raw.
- [x] **Mini-quiz JSON** : Échappement des apostrophes dans les attributs `options='[…]'` de 4 fiches Sciences.
- [x] **Vérification finale** : Lint TypeScript passe, scripts `find-real-errors.js` et `check-tags.js` OK.
