# Scratch au Brevet

Le logiciel Scratch est présent de manière quasi-systématique dans le sujet de Mathématiques du Brevet. Vous n'aurez pas d'ordinateur pour l'épreuve : vous devrez **lire, compléter ou prévoir le résultat** d'un programme imprimé sur votre copie.

<concept-card title="Le réflexe en Maths" icon="Calculator" description="Au Brevet, toutes les traces de recherche sont prises en compte. **Même si ta démarche n'aboutit pas, écris-la !**" theme="info"></concept-card>

## 1. Se repérer : L'écran et le Lutin 😺

Le programme s'exécute sur une scène assimilable à un **repère orthonormé**.
*   **Le centre de l'écran** correspond aux coordonnées `x: 0` et `y: 0`.
*   L'axe Horizontal (celui des abscisses) correspond aux **x** (droite = positif, gauche = négatif).
*   L'axe Vertical (celui des ordonnées) correspond aux **y** (haut = positif, bas = négatif).

**L'Orientation du lutin :**
Scratch utilise un système d'angles pour l'orientation (différent de celui vu en géométrie classique) :
*   `S'orienter à 90` signifie **regarder vers la droite** ➔ (C'est par défaut)
*   `S'orienter à -90` signifie **regarder vers la gauche** ⬅️
*   `S'orienter à 0` signifie **regarder vers le haut** ⬆️
*   `S'orienter à 180` signifie **regarder vers le bas** ⬇️

<flashcard front="Si le lutin est aux coordonnées `x: 0, y: 0` et qu'il effectue le bloc `ajouter à y 50`, où atterrit-il ?" back="Le lutin se déplace verticalement vers le haut. Ses nouvelles coordonnées seront `x: 0, y: 50`."></flashcard>

## 2. Le Stylo : Tracer des figures géométriques ✏️

Une question très classique du Brevet consiste à deviner la figure tracée par le lutin.
### 2.1. Les blocs de démarrage essentiels :
Toujours vérifier que le lutin est prêt à dessiner :
1.  `effacer tout` (pour commencer sur un écran blanc)
2.  `stylo en position d'écriture` (si ce bloc n'est pas présent, le lutin bouge sans laisser de trace !)
### 2.2. Tourner pour faire des polygones réguliers
Quand le lutin avance, pour dessiner un polygone régulier, il doit tourner d'un angle bien précis !
*   **Tracer un Carré :** C'est un polygone à **4** côtés. Angle = `360 / 4 = 90°`. On lui dit donc : `tourner de 90 degrés`.
*   **Tracer un Triangle équilatéral :** C'est un polygone à **3** côtés. Attention, l'angle extérieur de rotation n'est pas 60° ! Il faut faire le calcul par rapport à un demi-tour supplémentaire : `360 / 3 = 120°`. Le bloc à utiliser est bien `tourner de 120 degrés` !
*   **Tracer un hexagone régulier (6 côtés) :** Angle = `360 / 6 = 60°`. Tourner de 60 degrés.

**La formule magique à mémoriser : `360 / nombre de côtés`.**
## 3. Les Boucles (Répéter) 🔄

Les boucles créent la structure de votre programme :

*   **`répéter (10) fois`** : C'est une boucle fini. Si vous voyez "répéter 4 fois" [Avancer de 50, Tourner de 90], vous ferez un carré.
*   **`répéter jusqu'à ce que < ... >`** : C'est une boucle conditionnelle. Elle tourne tant que la consigne n'est pas remplie, et elle s'arrête UNE FOIS QUE la consigne est vraie.

<callout type="tip" title="Astuce pour les motifs">
Si vous voyez DEUX boucles l'une dans l'autre (boucles imbriquées).
Exemple : 
`Répéter 5 fois` 
  `Répéter 3 fois`
     `Avancer de 50`
     `Tourner de 120`
=> Le programme trace 5 TRIANGLES à la suite. La boucle "intérieure" trace la figure de base, la boucle "extérieure" indique combien de figures au total seront tracées côte à côte.
</callout>
## 4. Les Variables 📦

Une variable est comme une "boîte" qui possède un "nom" et qui contient un "nombre".
Au Brevet, l'exercice fréquent "Programme de calcul" est bien souvent codé en Scratch.

*   `mettre [Longueur] à 5` => La variable "Longueur" vaut maintenant 5. L'ancien nombre est écrasé/supprimé.
*   `ajouter à [Score] 10` => Le tableur vient s'additionner à la valeur existante. Mieux : si le score était de 5, avec bloc il sera de 15.
## 5. Exercices Type Brevet 📝

## 📝 Entraînement

<brevet-exercise  title="Entraînement : Programme de calcul dans Scratch"  question="Lisons ce script :  1. demander 'Choisis un nombre' et attendre 2. mettre [Nombre] à (réponse) 3. mettre [Résultat] à (Nombre * 2) 4. ajouter à [Résultat] 5 5. dire (Résultat) Si je rentre le nombre 3 au début, que va dire le lutin à la fin ?"  draft="1. Ligne 2 : Nombre = 3. 2. Ligne 3: Résultat = Nombre * 2 = 3 * 2 = 6. 3. Ligne 4: ajouter à Résultat 5 =&gt; Résultat devient 6 + 5 = 11. 4. Ligne 5: le lutin dit 11." solution="Le lutin dira le nombre 11. En effet, il double d'abord le nombre de départ (3 x 2 = 6) puis lui ajoute 5 (6 + 5 = 11)."></brevet-exercise>

<mini-quiz  question="Si je veux coder un lutin pour qu'il trace un octogone régulier (un polygone à 8 côtés), de quel angle doit-il tourner à chaque extrémité ?"  options='["80 degrés","60 degrés","45 degrés","30 degrés"]'  correctAnswer="3"  explanation="La formule est 360 divisé par le nombre de côtés. 360 / 8 = 45°. Le lutin doit donc avancer puis tourner de 45 degrés, huit fois de suite."></mini-quiz>

<mini-quiz  question="Laquelle de ces affirmations est FAUSSE concernant les coordonnées du lutin (stylo en position d'écriture) ?"  options='["Si j&apos;ajoute 10 à la coordonnée y, le lutin dessine un trait vers le haut.","Si j&apos;ajoute -10 à la coordonnée x, le lutin dessine un trait vers la gauche.","L&apos;instruction s&apos;orienter à 180 dirige le lutin vers le bas de l&apos;écran.","L&apos;instruction s&apos;orienter à 0 dirige le lutin vers la droite de l&apos;écran."]'  correctAnswer="3"  explanation="S'orienter à 0 dirige le lutin vers le HAUT de l'écran. C'est l'orientation à 90 qui dirige le lutin vers la droite."></mini-quiz>

<brevet-checklist items='[ "Je sais que /&quot;S&apos;orienter à 90/&quot; = regarder vers la droite.", "Je vérifie si le bloc /&quot;stylo en position d&apos;écriture/&quot; est bien présent avant d&apos;estimer un dessin.", "Je connais les angles de rotation classiques : 90°(Carré), 120°(Triangle), 60°(Hexagone), 360/n (Polygone régulier).", "Je fais la différence entre /&quot;mettre la variable à/&quot; (on efface tout et on remplace) et /&quot;ajouter à/&quot; (on additionne)." ]'></brevet-checklist>
