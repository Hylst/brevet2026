# Programmation et algorithmique

![Blocs de programmation](../assets/blocs-programmation.svg)

<callout type="info" title="Introduction">
Un ordinateur ne sait faire que ce qu'on lui demande ! Pour lui donner des ordres, on écrit d'abord un **algorithme** (une méthode en français), puis on le traduit dans un langage de programmation qu'il peut exécuter.
</callout>

<concept-card title="Démarche Scientifique" icon="FlaskConical" description="Lis toujours l'introduction de l'énoncé. Elle contient le **problème à résoudre** et justifie toutes les questions qui suivent." theme="info"></concept-card>

## 1. Qu'est-ce qu'un algorithme ?
C'est une suite d'instructions logiques permettant de résoudre un problème (ex: calculer une trajectoire, trier des mots). 
On le représente souvent sous forme de schéma (organigramme (logigramme)) avec des cases :
*   Ovale : Début / Fin
*   Rectangle : Action
*   Losange : Condition (Si... Alors...)

<algorithmique-blocs-svg></algorithmique-blocs-svg>

<callout type="warning" title="Rappel de lecture">
L'ordinateur est "bête et discipliné". À moins d'une instruction spéciale (boucle, saut), tes instructions (les blocs imbriqués) seront toujours lues strictement de manière **séquentielle**, c'est-à-dire l'une après l'autre, de haut en bas.
</callout>
### 2. Les éléments de base en programmation (Scratch / Python)
*   **Les variables** : Des "boîtes" avec un nom dans lesquelles l'ordinateur stocke une valeur qui peut changer (un score, une température, la position X).
*   **Les boucles (Répétition)** : Elles permettent de répéter un bloc d'instructions indéfiniment ("Répéter indéfiniment") ou un nombre précis de fois ("Répéter 10 fois").
*   **Les conditions (Test)** : Elles permettent de faire des choix. (`SI {condition} ALORS {faire ceci} SINON {faire cela}`).

<fill-in-the-blanks text="Pour conserver le pseudonyme d'un joueur, j'utilise une [variable|fonction|boucle]. Pour dire que j'ai perdu [Si|Quand|Alors] ma jauge est à 0, j'utilise une [condition|variable|boucle]. Pour faire clignoter un voyant encore et encore, j'utilise une [boucle|condition|variable]." title="Vérification 1 : Logique" ></fill-in-the-blanks>

### 3. Les événements
Un programme réagit souvent à des éléments extérieurs : on appelle cela la programmation événementielle.
*(Exemple : "QUAND le drapeau vert est cliqué", ou "QUAND le capteur détecte un obstacle").*

<drag-and-drop-list title="Associe chaque principe de programmation" items='[ {"id": "1", "content": "Une boîte stockant une valeur", "match": "La variable"}, {"id": "2", "content": "Répéter 10 fois", "match": "La boucle"}, {"id": "3", "content": "Si... Alors...", "match": "La condition"} ]' ></drag-and-drop-list>

<flashcard front="Qu'est-ce qu'une variable en informatique ?" back="C'est un espace de stockage en mémoire pour retenir une valeur qui peut changer (ex : un score de jeu) !"></flashcard>

## 📝 Entraînement

<mini-quiz question="Que fait le bloc de boucle 'Répéter 4 fois : (Avancer de 50, Tourner à droite de 90°)' en Scratch ?" options='["Dessiner un cercle", "Dessiner un carré", "Dessiner un triangle", "Rien du tout"]' correctAnswer="1" explanation="En avançant puis en tournant à angle droit (90 degrés) 4 fois de suite, le lutin revient à son point de départ après avoir tracé un carré parfait."></mini-quiz>

<mini-quiz question="Comment appelle-t-on le concept qui permet à un programme de faire un choix (ex: SI la touche Espace est pressée ALORS sauter, SINON avancer) ?" options='["Une boucle", "Une variable", "L&apos;état mémoire", "Une condition (ou Test)"]' correctAnswer="3" explanation="Les blocs 'Si... Alors... Sinon' sont des conditions. Ils permettent au programme de s'adapter à la situation."></mini-quiz>

<brevet-checklist items='[ "Je sais lire un algorithme simple (en blocs type Scratch).", "Je fais la différence entre une boucle (répétition) et un test (Si... Alors...).", "Je comprends l&apos;utilité d&apos;une variable." ]'></brevet-checklist>
