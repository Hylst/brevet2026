/**
 * version.ts
 * Source unique de vérité pour la version de l'application.
 * Mettre à jour à chaque release avant `npm run build`.
 */
export const APP_VERSION = '1.14.0';

/** Format YYYY-MM-DD de la dernière release */
export const APP_RELEASE_DATE = '2026-06-21';

/**
 * Entrées du changelog intégrées à l'app pour le modal "Nouveautés".
 * Ajouter une entrée en tête de tableau à chaque release.
 */
export interface ChangelogEntry {
  version: string;
  date: string;
  highlights: string[];
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: '1.14.0',
    date: '2026-06-21',
    highlights: [
      '📘 Nouvelle fiche : « Vocabulaire de la poésie » (FR-37) — mètres, strophes, rimes, sonnet, allitération/assonance, enjambement/rejet/contre-rejet',
      '📘 Nouvelle fiche : « La proposition subordonnée conjonctive » (FR-38) — conjonctive complétive/circonstancielle, modes indicatif/subjonctif, locutions conjonctives',
      '📘 Nouvelle fiche : « Étymologie et formation des mots » (FR-39) — préfixes/suffixes, racines grecques/latines, dérivation, composition, emprunts, néologismes',
      '📘 Nouvelle fiche : « Types de textes et communication » (FR-40) — 5 types de textes, situation de communication, registres de langue, connecteurs',
      '🎬 FR-4 enrichie : section « Point de vue narratif » — focalisations zéro/interne/externe avec exemples concrets',
      '🔗 FR-2 enrichie : tableau des subordonnées circonstancielles étendu (conséquence, comparaison ajoutées) + piège cause/conséquence',
      '📖 FR-7 enrichie : section « Littérature de témoignage » (Anne Frank, Primo Levi, Simone Veil)',
      '🔄 FR-31 enrichie : section « Verbes pronominaux » (4 types, accord participe passé)',
      '⏳ FR-3 enrichie : tableau des 4 temps composés avec leurs valeurs (passé antérieur ajouté)',
      '⌛ FR-27 enrichie : section « Subjonctif passé » — formation et emploi (antériorité vs simultanéité)',
      '🗣️ FR-15 enrichie : section « Phrase non verbale (nominale) » avec exemples',
      '🎯 FR-26 enrichie : section « Attribut du COD » avec différence attribut sujet/COD',
      '🧩 4 questions ajoutées quiz FR-15 (conjonctive, types textes, modes)',
      '🧩 4 questions ajoutées quiz FR-16 (alexandrin, rimes, focalisation, strophes)',
      '🧩 4 questions ajoutées quiz FR-17 (préfixes, racines grecques, néologismes, suffixes)',
      '🧩 Nouveau quiz FR Extra 3 : 15 questions sur poésie, conjonctive, étymologie, types de textes',
      '🧩 Nouveau quiz FR Extra 4 : 15 questions sur focalisations, temps composés, verbes pronominaux, subjonctif passé',
    ],
  },
  {
    version: '1.13.0',
    date: '2026-06-21',
    highlights: [
      '📘 Nouvelle fiche PC-13 : « Les mélanges, les états et la composition de la matière » — mélanges/corps purs, états de la matière, changements d\'état, composition de l\'air, masse volumique (ρ = m/V)',
      '🔌 PC-7 enrichie : circuits série et dérivation, courant/dipôles, lois d\'additivité et d\'unicité pour U et I, 2 mini-quiz, 1 flashcard',
      '📡 PC-8 enrichie : écho, sonar (d = v×t/2), vitesse du son dans l\'air/eau/acier, tableau niveaux dB, 1 flashcard, 2 mini-quiz',
      '💡 PC-9 enrichie : section « Signal et information » — émetteur/récepteur/code, sources primaires/secondaires, code Morse, 1 flashcard, 1 mini-quiz',
      '🧩 Nouveau quiz PC-3 (« États et mélanges ») : 7 questions (mélanges, changements d\'état, air, masse volumique, tests)',
      '➕ 2 questions ajoutées à PC-1 (composition air, masse volumique), 2 questions ajoutées à PC-2 (dérivation, sonar)',
    ],
  },
  {
    version: '1.12.0',
    date: '2026-06-21',
    highlights: [
      '📘 Nouvelle fiche EMC : « Tous différents mais une seule humanité » (HG-38) — identité, préjugés, humanité commune, pyramide de Maslow',
      '📗 Nouvelle fiche EMC : « L\'égalité et la lutte contre les discriminations » (HG-39) — conquête historique, DDHC, discriminations, sanctions, Défenseur des droits',
      '📕 Nouvelle fiche EMC : « La sécurité pour tous » (HG-40) — sécurité collège, Vigipirate, PPMS, ASSR2, risques, gestes d\'urgence',
      '🧩 Quiz EMC Niveau 2 (HG-41) : 15 questions sur identité, égalité, discriminations et sécurité',
      '📘 HG-15 nettoyé : 4 questions hors-sujet retirées (histoire/géo), 5 nouvelles questions EMC ajoutées',
      '🤝 HG-27 enrichie : solidarité associative détaillée (loi 1901, Restos du Cœur Coluche, bénévolat, mécénat), 2 mini-quiz, fill-in-the-blanks, flashcard',
      '📘 HG-9 enrichie : nouvelle section libertés collectives (circulation Schengen, réunion 1881), 3 mini-quiz, fill-in-the-blanks, +2 items checklist',
      '⚖️ HG-32 enrichie : 2 mini-quiz supplémentaires et fill-in-the-blanks sur la justice des mineurs',
      '🛡️ HG-33 enrichie : 2 mini-quiz (Sentinelle, dissuasion nucléaire), fill-in-the-blanks défense',
      '🤖 HG-35 enrichie : 2 mini-quiz (deepfake, vérification info), flashcard vérification d\'images IA',
    ],
  },
  {
    version: '1.11.2',
    date: '2026-06-20',
    highlights: [
      '🗺️ Nouvelle fiche : « La politique de la ville » (HG-35) — quartiers prioritaires, loi SRU, ANRU, mixité sociale',
      '📐 Nouveau SVG interactif : PolitiqueVilleSVG (3 couronnes : centre rénové, banlieue, QPV ANRU)',
      '🧩 Quiz géant g-quiz-4 : 15 questions sur la politique de la ville',
      '📘 Nouvelle fiche : « La France entre-deux-guerres 1919-1939 » (HG-36) — Front Populaire, FrontPopulaireSVG',
      '📗 Nouvelle fiche : « Les années de Gaulle 1958-1969 » (HG-37) — Ve République, Mai 68',
      '🧩 Quiz géant h-quiz-4 : 15 questions sur l\'entre-deux-guerres et les années de Gaulle',
      '📘 HG-11 enrichie : sections « L\'UE dans le monde » et « Défis du XXIe siècle », 4 mini-quiz, fill-in-the-blanks, 2 flashcards',
      '🗺️ HG-27 réécrite : repères géographiques en français clair, tableaux fleuves/DROM/métropoles, 4 mini-quiz, flashcards, fill-in-the-blanks',
      '🏗️ HG-8 enrichie : ANCT, loi NOTRe, compétences détaillées Région/Département/Commune, 2 mini-quiz, fill-in-the-blanks',
      '📈 HG-6 enrichie : Trente Glorieuses — croissance, conso, émancipation femmes, Mai 68, 3 mini-quiz, fill-in-the-blanks, flashcards',
      '🌍 HG-20 enrichie : géopolitique monde actuel — hégémonie US, CPI, ONG, 4 mini-quiz, fill-in-the-blanks, 6 items checklist',
      '🐛 PolitiqueVilleSVG : markers SVG ajoutés (flèches bleue/orange manquantes), fill-in-the-blanks UE corrigé (Euro/dollar)',
    ],
  },
  {
    version: '1.11.1',
    date: '2026-06-20',
    highlights: [
      '♿ QuizSession : ajout aria-label sur les 3 boutons d\'icône (Fermer quiz, Fermer résultats, Fermer brouillon)',
      '🎨 text-white → text-foreground sur les titres h1 markdown, titres de page et cartes (fond uni)',
      '🔒 13 promesses non gérées sécurisées : .catch() sur tous les import(...).then() et getRegistration()',
      '📝 LessonContent : les 7 catches vides des JSON.parse loggent désormais l\'erreur dans la console',
      '🧹 Dead imports retirés : TrendingUp/Sparkles/Tooltip (Dashboard), Zap (QuizSession), BookOpen (Login), useUserStore (SubjectDetail)',
      '🧹 ChainesInfoActionSVG retiré : import mort jamais utilisé dans les fiches .md',
      '♻️ canvas-confetti : uniformisation des imports (statiques, fin des dynamic imports)',
      '🐛 Rétrocompatibilité importExport : détection auto de l\'ancien format v1.9.x (dump localStorage à plat)',
    ],
  },
  {
    version: '1.10.0',
    date: '2026-06-20',
    highlights: [
      '🐛 Correction des balises <faq-item> qui utilisaient "question=" au lieu de "title=" (FAQ invisibles dans 15 fiches Sciences & HG)',
      '🐛 Correction des <method-box> avec "steps" cassés par un &apos; orphelin (7 fiches Français)',
      '🧹 Nettoyage des entrées mortes dans le tableau hasBlock (systeme-solaire-svg, experience-lumiere-svg)',
      '🧩 Ajout de periurbanisation-svg dans le tableau hasBlock',
    ],
  },
  {
    version: '1.9.2',
    date: '2026-06-20',
    highlights: [
      '💾 Sauvegarde & Export JSON de la progression (Section "Mes Données" dans Paramètres)',
      '🔔 Détection automatique des mises à jour & nouvelles versions avec toast d\'action rapide',
      '🐛 Correction des mini-quizz cassés par des apostrophes non encodées dans les fiches de Sciences',
      '🐛 Correction du rendu des balises method-box, brevet-checklist et drag-and-drop-list dans 12 fiches (Histoire et Français)',
      '🐛 Correction de la navigation par Sommaire du Livre Numérique (évite l\'écran noir causé par le HashRouter)',
      '✨ Modal "Nouveautés" affiché au premier lancement après mise à jour',
    ],
  },
  {
    version: '1.9.1',
    date: '2026-05-10',
    highlights: [
      '🔧 Correction du formulaire de feedback (clé Web3Forms requise au build)',
      '📖 Documentation exhaustive mise à jour (README, about, structure, features)',
      '🧹 Nettoyage du dossier racine et des scripts de test épars',
    ],
  },
  {
    version: '1.9.0',
    date: '2026-04-30',
    highlights: [
      '📚 Enrichissement pédagogique massif : 120+ fiches retravaillées',
      '🃏 Nouveaux composants : concept-card, timeline, fill-in-the-blanks',
      '👤 Profil utilisateur enrichi (Classe, Futur métier, Objectif mention)',
      '🔄 Migration complète du contenu vers Markdown (Backend-Ready)',
    ],
  },
  {
    version: '1.8.0',
    date: '2026-04-25',
    highlights: [
      '🧙 Mascotte contextuelle avec tenues spécifiques à chaque matière',
      '✨ Animations Framer Motion dans les schémas SVG interactifs',
      '🏅 Système de badges et modal de félicitations',
      '🎮 TopBar gamification, onboarding en 3 panneaux',
      '🗺️ Refonte de 48 schémas SVG en composants React interactifs',
    ],
  },
  {
    version: '1.6.0',
    date: '2026-04-14',
    highlights: [
      '📜 Création de custom_rules.md (conventions d\'architecture et design)',
      '🔍 Optimisation SEO : meta, Open Graph, Twitter Cards, sitemap, robots.txt',
    ],
  },
];
