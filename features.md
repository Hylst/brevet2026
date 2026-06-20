# Fonctionnalités (Features) 🚀

Ce document liste l'ensemble des fonctionnalités actuellement implémentées dans l'application **Brevet PWA 2026 v2**.

## 1. Contenu Pédagogique
- **Fiches de révision complètes** pour 4 grandes catégories et 8 matières distinctes : Mathématiques, Français, Histoire, Géographie, EMC, Physique-Chimie, SVT (Sciences et Vie de la Terre), et Technologie.
- **Micro-learning** : Contenu structuré en petits chapitres faciles à digérer.
- **Moteur Markdown avancé** : Support des formules mathématiques (KaTeX), des tableaux, et des composants React personnalisés au sein du Markdown.
- **Composants interactifs intégrés** :
  - `<concept-card>` : Encadré thématique avec icône pour souligner des règles d'or ou méthodes clés.
  - `<brevet-checklist>` : Liste de vérification des acquis à la fin de chaque cours.
  - `<method-box>` : Encadré méthodologique étape par étape.
  - `<timeline>` : Frise chronologique animée.
  - `<flashcard>` : Carte recto-verso pour la mémorisation.
  - `<mini-quiz>` : Questions rapides intégrées directement dans les fiches de cours pour la pratique immédiate.
- **Schémas SVG Animés et Interactifs** :
  - Animations internes vectorielles fluides (Framer Motion) : Cycle de la digestion, Circulation sanguine, Circuit électrique, etc.
  - Théorème de Thalès (Maths) avec curseur de proportionnalité.
  - Politique de la ville (Géo) : Schéma animé des 3 couronnes urbaines (centre rénové, banlieue grands ensembles, quartier prioritaire ANRU).
  - Front Populaire (Histoire) : Schéma animé 3 panneaux (crise 1930, Accords Matignon, échec du Front Populaire).
- **Contenu Géographie enrichi** : 12 fiches dont « La politique de la ville » (quartiers prioritaires, loi SRU, ANRU, mixité sociale, écoquartiers).
- **Contenu Histoire enrichi** : 14 fiches — les 10 fiches originales + « La France entre-deux-guerres (1919-1939) » (hg-36) et « Les années de Gaulle (1958-1969) » (hg-37) créés en 1.11.2 pour couvrir l'intégralité du programme SchoolMouv.

## 2. Système d'Évaluation (Quiz)
- **Quiz par matière** : Séries de questions à choix multiples (QCM) couvrant l'ensemble du programme.
- **Entraînement Global (Épreuve Blanche)** : Génération dynamique de sessions mélangeant parfaitement toutes les matières.
  - **Modules Modulables** : Choix entre "Session Courte" (50 questions) pour réviser rapidement, ou "Session Longue" (100 questions) pour une mise en situation d'examen.
  - **Rééquilibrage algorithmique** : Le tirage aléatoire incorpore un algorithme d'entrelacement (interleaving) pour garantir une présence équitable des Mathématiques, du Français, de l'Histoire-Géo et des Sciences peu importe la longueur de la session.
- **Banque de questions massive** : Plus de 400 questions corrigées couvrant précisément le niveau 3ème (Thalès, propositions subordonnées, Vème République, ions, etc.).
- **Minuteur optionnel** : Possibilité d'activer un compte à rebours pour simuler les conditions d'examen (réglable dans les paramètres).
- **Explications détaillées** : Affichage d'une correction expliquée (avec support KaTeX) après chaque réponse.
- **Répétition espacée (Mode Révision)** : Algorithme qui enregistre les questions échouées et permet de générer un quiz personnalisé "Réviser mes erreurs" pour cibler les points faibles.

## 3. Gamification & Motivation
- **Mascotte Contextuelle Haute Résolution** : Une mascotte animée qui s'adapte spécifiquement à *chaque* matière individuelle : 
  - *Physique* (Éprouvette et champs magnétiques)
  - *SVT* (Microscope et biologie)
  - *Tech* (Lunettes geek et circuit)
  - *Histoire* (Casque romain, Sablier)
  - *Géo* (Chapeau d'explorateur, globe)
  - *EMC* (Balance de la justice, colombe de la paix)
  - *Français* & *Mathématiques*.
- **TopBar Tête Haute** : Suivi en direct du niveau, de l'XP, des vies et de la flamme de série (streak).
- **Système d'XP (Expérience)** : Gain de points en lisant des fiches et en réussissant des quiz. Recharger vos coeurs automatiquement après un level up !
- **Niveaux** : Montée en niveau basée sur l'XP accumulée.
- **Badges (Succès)** : Déblocage de badges avec modals festives (confettis).
- **Sons et feed-backs** : API Web Audio adaptative pour valider les actions (hover, clic) et les événements en jeu.
- **Tableau de bord (Dashboard)** : Visualisation claire de la progression globale et par matière.

## 4. Expérience Utilisateur & Technique
- **Feedback & Signalements** : Formulaire intégré permettant de signaler un bug ou proposer une suggestion directement depuis l'interface — envoi par email via Web3Forms (clé injectée à la compilation par la variable d'environnement Coolify `VITE_WEB3FORMS_ACCESS_KEY`, aucune donnée stockée).
- **Personnalisation & Profil** : Renseignez votre classe, votre futur métier/rêve et votre objectif mention pour une expérience toujours plus immersive.
- **Onboarding Interactif** : Tutoriel de bienvenue interactif pour guider l'élève lors du premier démarrage.
- **PWA (Progressive Web App)** : Installation possible sur mobile/desktop et fonctionnement 100% hors-ligne grâce au Service Worker.
- **Sauvegarde Locale** : Toute la progression (XP, scores, erreurs, paramètres) est sauvegardée dans le `localStorage` du navigateur.
- **Design System** : Thème sombre unique et cohérent, basé sur des variables CSS pour faciliter la maintenance et garantir un bon contraste.
- **Architecture évolutive (Backend-Ready)** : La couche de données suit un pattern Repository qui sépare l'UI de la persistance. L'application est 100% offline-first aujourd'hui (localStorage) et pourrait migrer vers un backend distant (API, Supabase, etc.) sans refactorisation de l'interface.
- **Export Impression** : Script Node.js permettant de générer une version papier (Markdown) de l'intégralité du contenu pour des révisions déconnectées.
