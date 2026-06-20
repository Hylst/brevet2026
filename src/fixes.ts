export interface FixEntry {
  date: string;
  description: string;
  type: 'bug' | 'improvement';
}

export const FIXES: FixEntry[] = [
  {
    date: '2026-06-20 21:00',
    description: 'Correction bulle mascotte tronquée sur la carte d\'accueil (retrait overflow-hidden sur le container du Dashboard).',
    type: 'bug',
  },
  {
    date: '2026-06-20 21:00',
    description: 'Correction casque Histoire trop petit : SVG du casque romain agrandi (48×40 → 72×56) + position ajustée.',
    type: 'bug',
  },
  {
    date: '2026-06-20 21:00',
    description: 'Mock exam : bouton croix utilisait navigate(-1) → navigate("/") pour toujours revenir au tableau de bord.',
    type: 'bug',
  },
  {
    date: '2026-06-20 21:00',
    description: 'InfoModal : "1 vie toutes les 30 minutes" → "1 vie par heure" (cohérent avec le code LIFE_REFILL_TIME_MS=1h).',
    type: 'bug',
  },
  {
    date: '2026-06-20 21:00',
    description: 'XP quiz complet : base 10→15 + 5 par bonne réponse, game over XP partiel (5 + 3×score).',
    type: 'improvement',
  },
  {
    date: '2026-06-20 21:00',
    description: 'Login : ancien import/export localStorage direct remplacé par exportService.ts versionné (identique à Settings).',
    type: 'improvement',
  },
  {
    date: '2026-06-20 21:00',
    description: 'HG 9 : typo "Julliet" → "Juillet" dans le schéma SymbolesRepubliqueSVG.',
    type: 'bug',
  },
  {
    date: '2026-06-20 21:00',
    description: 'HG 5 : ajout de la CECA (1951) et Déclaration Schuman (1950) dans la construction européenne.',
    type: 'improvement',
  },
  {
    date: '2026-06-20 21:00',
    description: 'HG 3 : chronologie enrichie (armistice 22 juin 1940, Vichy), drag-and-drop mode matching, exercice Shoah, 2 nouveaux quiz dates.',
    type: 'improvement',
  },
  {
    date: '2026-06-20 20:00',
    description: 'Correction du chapitre Français 8 (visions poétiques) : le premier mini-quiz validait "hyperbole" au lieu de "allitération" (correctAnswer="2" → "1").',
    type: 'bug',
  },
  {
    date: '2026-06-20 19:00',
    description: 'Correction du chapitre Maths 10 (trigonométrie) : remplacement du HTML brut avec `className` par du Markdown standard. Le HTML React ne passait pas correctement par rehype-raw et les expressions LaTeX (`$cos(30^\circ)$`) étaient visibles en texte brut.',
    type: 'bug',
  },
  {
    date: '2026-06-20 18:30',
    description: 'Correction des index `correctAnswer` erronés dans les mini-quiz du chapitre 26 Histoire (repères historiques) — les réponses "Loi de 1905" et "Écart 1789→1918" pointaient vers la mauvaise option.',
    type: 'bug',
  },
  {
    date: '2026-06-20 18:30',
    description: 'Correction de l\'import `framer-motion` → `motion/react` dans `QuizQuestion.tsx` (convention du projet, évite les warnings à l\'avenir).',
    type: 'bug',
  },
  {
    date: '2026-06-20 18:30',
    description: 'Amélioration de l\'affichage mobile des options de quiz : `overflow-hidden` retiré, ajout de `items-start` et `gap-3` pour que les textes longs passent à la ligne sans être tronqués.',
    type: 'improvement',
  },
  {
    date: '2026-06-20 16:00',
    description: 'BUG-A : 15 balises `<faq-item>` utilisaient `question=` au lieu de `title=` — FAQ entièrement invisibles dans les chapitres Sciences 11/12/13 et HG 22/23.',
    type: 'bug',
  },
  {
    date: '2026-06-20 16:00',
    description: 'BUG-B : 7 attributs `steps` de `<method-box>` contenaient un `&apos;` après le `]` du JSON — tableau de steps vide, méthode invisible dans les chapitres Français 18/23/24/26/27.',
    type: 'bug',
  },
  {
    date: '2026-06-20 16:00',
    description: 'Ajout de `periurbanisation-svg` dans le tableau hasBlock de LessonContent.tsx (évite un wrapping `<p>` inattendu).',
    type: 'bug',
  },
  {
    date: '2026-06-20 16:00',
    description: 'Suppression des dead entries `systeme-solaire-svg` et `experience-lumiere-svg` du tableau hasBlock (non utilisées dans les fiches .md).',
    type: 'improvement',
  },
  {
    date: '2026-06-20 16:00',
    description: 'Mise à jour de `package.json` version 1.9.1 → 1.10.0, synchronisation de `version.ts` + changelog intégré.',
    type: 'improvement',
  },
  {
    date: '2026-06-20 12:00',
    description: 'Correction des entités HTML (`&apos;`, `&quot;`, `&rarr;`) dans les attributs `<callout>` et `<faq-item>` du chapitre 28 Français qui cassaient le parseur rehype-raw.',
    type: 'bug',
  },
  {
    date: '2026-06-20 12:00',
    description: 'Correction d\'une erreur TypeScript dans `LessonContent.tsx` — `children` non destructuré dans le rendu `summary`.',
    type: 'bug',
  },
  {
    date: '2026-06-20 12:00',
    description: 'Échappement des apostrophes non encodées dans les attributs `options` des mini-quiz (4 fichiers Sciences chapitres 9/19/20/29).',
    type: 'bug',
  },
  {
    date: '2026-06-20 12:00',
    description: 'Ajout du modal "Nouveautés" avec défilement latéral des versions, conseil export, bouton "C\'est parti !".',
    type: 'improvement',
  },
  {
    date: '2026-06-20 12:00',
    description: 'Implémentation du toast flottant global pour Service Worker en attente avec bouton "Appliquer" dans l\'en-tête et bannière dans Paramètres.',
    type: 'improvement',
  },
  {
    date: '2026-06-20 12:00',
    description: 'Implémentation du hook `useUpdateDetection` pour détection automatique SW + nouvelle version avec stockage en localStorage.',
    type: 'improvement',
  },
  {
    date: '2026-06-20 12:00',
    description: 'Refonte de la page Paramètres avec section "Mes Données" (export/import JSON versionné, callouts explicatifs, feedback visuel).',
    type: 'improvement',
  },
  {
    date: '2026-06-20 22:00',
    description: 'Ajout d\'aria-label sur les 3 boutons d\'icône de QuizSession (Fermer quiz, Fermer résultats, Fermer brouillon).',
    type: 'improvement',
  },
  {
    date: '2026-06-20 22:00',
    description: 'Ajout de console.error() dans les 7 catches vides des JSON.parse() de LessonContent.tsx (method-box, brevet-checklist, timeline, mini-quiz).',
    type: 'improvement',
  },
  {
    date: '2026-06-20 22:00',
    description: 'Retrait des dead imports TrendingUp (Dashboard) et Zap (QuizSession).',
    type: 'improvement',
  },
  {
    date: '2026-06-20 22:00',
    description: 'text-white → text-foreground sur 3 titres sur fond uni (h1 markdown, titre matières, titre carte sujet).',
    type: 'improvement',
  },
  {
    date: '2026-06-20 22:30',
    description: 'Ajout de .catch() sur 13 promesses non gérées : import() audio (SubjectDetail x6, SubjectBook x4), canvas-confetti (BadgeUnlocked, BadgeList), serviceWorker.getRegistration() (useUpdateDetection).',
    type: 'bug',
  },
  {
    date: '2026-06-20 23:00',
    description: 'Uniformisation des imports canvas-confetti : BadgeList et BadgeUnlockedModal passent en import statique, fin des dynamic imports.',
    type: 'improvement',
  },
  {
    date: '2026-06-20 23:00',
    description: 'Retrait du composant ChainesInfoActionSVG (import, mapping, hasBlock) — jamais utilisé dans les fiches .md.',
    type: 'improvement',
  },
  {
    date: '2026-06-20 23:00',
    description: 'Retrait de 3 imports inutilisés : Tooltip/Sparkles (Dashboard), BookOpen (Login), useUserStore/level (SubjectDetail).',
    type: 'improvement',
  },
  {
    date: '2026-06-20 23:30',
    description: 'Rétrocompatibilité importExport : détection et conversion automatique de l\'ancien format d\'export (dump localStorage à plat v1.9.x) vers le nouveau format ExportPayload.',
    type: 'bug',
  },
];
