# 🎓 Plan d'Action : Application de Révision Brevet 2026

Ce document détaille la stratégie complète pour développer une application de révision du Diplôme National du Brevet (DNB) destinée aux élèves de 3ème en France. L'objectif est de créer une expérience **engageante, interactive et pédagogique**.

---

## 1. 🧠 Approche Pédagogique et Maintien de l'Intérêt

Pour capter l'attention des adolescents (14-15 ans) et maximiser la rétention d'information :

*   **Micro-learning** : Des sessions courtes de 5 à 10 minutes (fiches synthétiques + mini-quiz). L'élève doit avoir le sentiment d'avancer vite.
*   **Répétition Espacée (Spaced Repetition)** : L'algorithme reproposera les questions ratées quelques jours plus tard pour ancrer la mémoire.
*   **Apprentissage Actif** : Moins de texte passif, plus d'interactions (textes à trous, glisser-déposer, schémas à compléter).
*   **Feedback Immédiat et Bienveillant** : Chaque erreur dans un quiz est suivie d'une explication claire et déculpabilisante.

---

## 2. 🎮 Gamification (Ludification)

Transformer la révision en jeu pour booster la motivation :

*   **Système d'XP et Niveaux** : Gagner des points d'expérience à chaque fiche lue ou quiz réussi. Passage de niveaux (ex: *Apprenti -> Collégien Averti -> Maître du Brevet*).
*   **Séries (Streaks)** : Un compteur de jours consécutifs de révision (🔥) pour créer une habitude quotidienne.
*   **Badges et Succès** : 
    *   *Pythagore d'Or* (100% en géométrie)
    *   *Historien Incollable* (Série de 20 bonnes réponses en HG)
    *   *Oiseau de Nuit* (Révision après 20h)
*   **Objectifs Quotidiens** : "Compléter 2 quiz de Maths et lire 1 fiche de Français aujourd'hui".

---

## 3. 🎨 UI/UX et Présentation Graphique

Une interface moderne, fluide et adaptée aux codes actuels (façon Duolingo / TikTok) :

*   **Design System** : Thème sombre (Dark Mode) élégant pour réduire la fatigue visuelle, avec des couleurs néon vibrantes pour différencier les matières (Bleu=Maths, Ambre=Histoire, Émeraude=SVT).
*   **Schémas SVG Animés et Interactifs** :
    *   *Maths* : Un triangle de Pythagore où l'élève peut tirer les sommets pour voir les carrés se mettre à jour en temps réel.
    *   *SVT* : Une cellule animale en SVG où cliquer sur un organite (noyau, membrane) affiche son rôle.
    *   *Physique* : Un circuit électrique interactif (ouvrir/fermer un interrupteur pour voir le courant circuler).
*   **Animations Fluides** : Utilisation de `framer-motion` pour les transitions de pages, l'apparition des questions, et des confettis lors d'un 100%.

---

## 4. 📚 Programme Détaillé par Matière (Exhaustif)

Le programme complet et détaillé pour chaque matière, incluant les rappels des cycles précédents (6e, 5e, 4e) et l'intégralité des notions exigibles pour le Brevet 2026, a été rédigé de manière exhaustive. 

Ces plans détaillés servent de référentiel strict pour la création du contenu de l'application. Ils sont disponibles dans le dossier `docs/plans/` :

*   📐 **Mathématiques** : `docs/plans/maths.md` (Arithmétique, Algèbre, Géométrie, Fonctions, Stats/Probas, Algorithmique Scratch).
*   📖 **Français** : `docs/plans/francais.md` (Grammaire, Orthographe, Lexique, Figures de style, Objets d'étude littéraires, Méthodologie DNB).
*   🌍 **Histoire-Géographie & EMC** : `docs/plans/histoire_geo_emc.md` (Repères chronologiques et spatiaux, concepts clés, chapitres détaillés).
*   🔬 **Sciences** : `docs/plans/sciences.md` (Physique-Chimie, SVT, Technologie avec formules, expériences et schémas fonctionnels).

---

## 5. 🛠️ Roadmap Technique d'Intégration

1.  **Phase 1 : Architecture et Contenu de Base (En cours)**
    *   Structure React / Vite / Tailwind.
    *   Moteur de rendu Markdown pour les fiches de cours (avec support des formules mathématiques KaTeX).
2.  **Phase 2 : Moteur d'Interactivité**
    *   Création de composants React SVG paramétrables (ex: `<InteractiveTriangle />`, `<CircuitBuilder />`).
    *   Nouveaux types de questions (Glisser-déposer, Zone à cliquer sur une image).
3.  **Phase 3 : Gamification Engine**
    *   Mise en place du store global (Zustand ou Context) pour gérer l'XP, les niveaux et les badges.
    *   Animations de récompenses.
4.  **Phase 4 : Production de Contenu Massif**
    *   Intégration des JSON/MDX pour tous les chapitres listés dans la section 4.
5.  **Phase 5 : PWA et Mode Hors-Ligne**
    *   Configuration du Service Worker pour que les élèves puissent réviser dans le bus sans connexion 4G/5G.

