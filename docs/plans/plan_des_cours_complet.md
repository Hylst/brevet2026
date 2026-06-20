# Plan des Cours Complet (Brevet 2026) 📚

L'application couvre l'intégralité du programme du cycle 4 (3ème) avec de nombreuses fiches pour réviser toutes les matières. Ce fichier regroupe le plan actuel et liste les futures évolutions en termes **d'ingénierie et de contenus** (Enrichissements).

## 🧮 Mathématiques
### Actuellement :
1. Nombres et calculs (Arithmétique, Fractions, Puissances)
2. Algèbre (Calcul littéral, Équations, Inéquations)
3. Grandeurs et Mesures (Aires, volumes, conversions)
4. Espace et Géométrie (Thalès, Pythagore, Trigonométrie, Transformations, Agrandissement/Réduction)
5. Algorithmique et programmation (Scratch)
6. Statistiques et probabilités

**💡 Suggestions d'enrichissement :**
- **Tableurs** : Introduction pratique à l'utilisation des tableurs (utilisation des formules `=` au Brevet).
- **Problèmes complexes** : Un chapitre de méthodologie dédié et scénarisé ouvert avec tâches complexes interactives.
- **Figures SVGs générées** : Remplacement des vieilles images png par des figures géométriques SVG dynamiques que l'élève peut paramétrer.

## 📝 Français
### Actuellement :
1. Grammaire et syntaxe (Classes de mots, Fonctions, Types et formes de phrases, Propositions)
2. Conjugaison (Présent, Imparfait, Passé simple, Subjonctif, Conditionnel, Voix passive)
3. Littérature (Poésie, Roman, Théâtre, Autobiographie, Dénoncer les travers de la société)
4. Stylistique (Les figures de style)
5. Méthodologie (Rédaction, Sujet d'invention, Sujet de réflexion)

**💡 Suggestions d'enrichissement :**
- **Étude d’œuvres intégrales** : Créer des fiches résumées sur des classiques étudiés en 3ème (ex: *Antigone*, *Des souris et des hommes*, poèmes engagés).
- **Histoire de la langue** : Fiches sur l'origine du français et l'étymologie (Grec/Latin).
- **Correction IA (Local-first)** : Interface simulée de notation des rédactions basée sur des mots-clés sans recourir à un backend lourd.

## 🌍 Histoire-Géo & EMC
### Actuellement :
1. Histoire : Guerres Mondiales, Entre-deux-guerres, Guerre Froide, Décolonisation, Construction européenne, Le monde depuis 1989.
2. Géographie : Espaces productifs, Aires urbaines, Faibles densités, Outre-mer, France dans l'UE et le monde.
3. EMC : République, Laïcité, Engagements, Défense et paix.

**💡 Suggestions d'enrichissement :**
- **Analyse de Caricature** : Fiches très spécifiques sur comment déchiffrer une image de propagande ou une caricature de presse en Histoire.
- **Cartes interactives** : Apprentissage des fleuves, montagnes, de la géographie de la France sur une map SVG cliquable avec feedback.

## 🔬 Sciences (PC, SVT, Techno)
### Actuellement :
1. Physique-Chimie : L'Univers, La matière (atomes, ions, pH), Cinématique (vitesse, forces, poids), L'énergie.
2. SVT : Génétique et hérédité, Évolution du vivant, Nutrition/Digestion, Système nerveux, Séisme/Volcan, Système immunitaire, Écosystèmes.
3. Technologie : Chaîne d'information/action, Informatique et Réseaux, Matériaux/Innovation, Énergie/Développement durable.

**💡 Suggestions d'enrichissement :**
- **Simulations interactives** : Circuits électriques simples drag-and-drop.
- **Lecture de graphiques scientifiques** : Exercices de méthode sur l'interprétation de courbes (taux d'anticorps, vitesse fonction du temps).

---

## 🛠 Prochaines Évolutions Logiques / Architectures

1. **Orientation Offline First (100% Locale)** :
   Le parti pris du projet est de ne **pas** intégrer Firebase/Supabase ou de coûteux backends. L'application évoluera vers une isolation et un respect de la vie privée total avec stockages et options de sauvegardes chiffrées en export (Fichier `.json` manuel import/export - *"Bring your own data"*).

2. **Routage et Splitting** :
   Les révisions et quizz génèrent une charge importante lors du chargement. L'application implémentera systématiquement le Lazy Loading (`React.lazy`) pour découper le bundle initial.

3. **Modélisation Pédagogique par Features** :
   Les composants seront progressivement refactorisés en architecture structurée : le rendu Markdown sera encapsulé, dé-couplé des `stores` globaux via des props claires pour permettre des tests unitaires rapides.