# Algorithmique et Programmation

<callout type="info" title="Introduction">
Aujourd'hui, tout fonctionne avec du code : ton téléphone, tes jeux vidéo, et même la machine à laver ! L'algorithmique t'apprend à parler le langage des machines en utilisant une logique implacable. Avec Scratch, la programmation devient un jeu de construction où l'on assemble des blocs.
</callout>

<callout type="info" title="Le saviez-vous ?">
Le mot "algorithme" vient du nom du mathématicien perse Al-Khwârizmî, qui a vécu au 9ème siècle. C'est aussi lui qui a introduit les chiffres arabes (dont le zéro) en Occident !
</callout>

<concept-card title="Le réflexe en Maths" icon="Calculator" description="Au Brevet, toutes les traces de recherche sont prises en compte. **Même si ta démarche n'aboutit pas, écris-la !**" theme="info"></concept-card>

## 1. Le vocabulaire du codeur 💻

Un algorithme, c'est comme une recette de cuisine. C'est une liste d'instructions précises pour arriver à un résultat. Quand on traduit cette recette dans un langage que l'ordinateur comprend (comme Scratch), ça devient un **programme**.

<definition-box term="Une Variable">

Imagine une variable comme une **boîte** avec une étiquette dessus. Dans cette boîte, tu peux ranger un nombre ou un mot, et tu peux changer ce qu'il y a dedans à tout moment. 
*Exemples : le score d'un jeu, le nombre de vies, le résultat d'un calcul.*

</definition-box>
### 2. Les blocs Scratch à connaître par cœur 🧩

Au Brevet, tu auras souvent des scripts Scratch à lire, à compléter ou à comprendre.

*   **Les Boucles (pour répéter)** :
    *   `Répéter 10 fois` : Quand tu sais exactement combien de fois il faut faire l'action (ex: tracer un carré = répéter 4 fois).
    *   `Répéter jusqu'à ce que...` : La boucle tourne tant que la condition n'est pas remplie. Dès qu'elle est vraie, la boucle s'arrête.

*   **Les Conditions (pour faire des choix)** :
    *   `Si [condition] alors...` : L'ordinateur vérifie la condition. Si c'est vrai, il fait l'action. Si c'est faux, il l'ignore et passe à la suite.
    *   `Si [condition] alors... sinon...` : C'est un embranchement. Si c'est vrai, il fait l'action 1. Si c'est faux, il fait l'action 2.

### 3. Dessiner avec Scratch 🎨

C'est le grand classique du Brevet : on te donne un script et tu dois trouver quel dessin il va tracer.

<scratch-algorithm-svg></scratch-algorithm-svg>

*   **L'écran est un repère** : Le centre est à $(0;0)$. L'axe horizontal est $x$, l'axe vertical est $y$.
*   **L'orientation** : 
    *   S'orienter à 90 = Regarder vers la **droite** ➡️
    *   S'orienter à -90 = Regarder vers la **gauche** ⬅️
    *   S'orienter à 0 = Regarder vers le **haut** ⬆️
    *   S'orienter à 180 = Regarder vers le **bas** ⬇️

<method-box  title="Tracer un polygone régulier (carré, triangle, hexagone...)"  steps='["Trouver le nombre de côtés du polygone (n).", "Utiliser une boucle : Répéter n fois.", "Mettre un bloc Avancer (pour tracer le côté).", "Mettre un bloc Tourner. L&apos;angle de rotation est TOUJOURS égal à 360 / n."]'  example="Pour un triangle équilatéral (3 côtés) :<br/>Répéter <b>3</b> fois :<br/>- Avancer de 50<br/>- Tourner de <b>120°</b> (car 360 / 3 = 120)."></method-box>

<callout type="warning" title="Le piège de l'angle de rotation !">

L'angle dont le lutin doit tourner n'est **PAS** l'angle à l'intérieur de la figure ! C'est l'angle *extérieur*. C'est pour ça qu'on utilise la formule magique : **360 / nombre de côtés**.

</callout>

<flashcard front="Quelle est la règle d'or pour tracer un polygone régulier à 'n' côtés ?" back="Il faut répéter 'n' fois : [Avancer de la longueur] puis [Tourner de (360 / n) degrés]."></flashcard>

### 4. Exercice Type Brevet 📝

<callout type="tip" title="Exercice Corrigé : Traduire un bloc Scratch">
**Exercice :**  
Voici un script Scratch :
*   Quand [drapeau vert] cliqué
*   Mettre [Total] à 0
*   Répéter 3 fois :
    *   Ajouter à [Total] 4
*   Dire [Total] pendant 2 secondes.

**Question 1 :** Quelle sera la valeur de la variable "Total" à la fin de l'exécution ?  
**Question 2 :** Que dit le lutin à la fin ?

**Correction :**  
1. **Suivons l'algorithme pas à pas :**
   * Au départ : `Total = 0`.
   * **Boucle (tour 1)** : `Total` = 0 + 4 = **4**.
   * **Boucle (tour 2)** : `Total` = 4 + 4 = **8**.
   * **Boucle (tour 3)** : `Total` = 8 + 4 = **12**.
   * La boucle est finie (elle a tourné 3 fois). La valeur finale est `Total = 12`.
2. Le lutin dit la valeur finale de Total, donc **le lutin dira "12"**.
</callout>

## 📝 Entraînement

<mini-quiz  question="Dans Scratch, j'ai une variable 'Score' qui vaut 5. Le bloc dit : 'Ajouter à Score 2'. Que vaut la variable 'Score' maintenant ?"  options='["2","5","7","10"]'  correctAnswer="2"  explanation="Le bloc 'Ajouter à' additionne la valeur. Donc 5 + 2 = 7. Attention, c'est différent du bloc 'Mettre Score à 2' qui remplacerait le 5 par un 2."></mini-quiz>

<mini-quiz  question="Si je veux tracer un Hexagone régulier (6 côtés), de combien de degrés mon lutin doit-il tourner à chaque sommet ?"  options='["60°","120°","90°","360°"]'  correctAnswer="0"  explanation="L'angle de rotation est toujours 360 / nombre de côtés. Ici, 360 / 6 = 60°. Le lutin doit tourner de 60° !"></mini-quiz>

<mini-quiz  question="Quelle est l'utilité du bloc 'Si... Alors... Sinon...' ?"  options='["Répéter la même action à l&apos;infini","Mettre une variable à zéro","Créer un embranchement (choix) selon qu&apos;une condition est vraie ou fausse"]'  correctAnswer="2"  explanation="Le bloc 'Si... Sinon...' permet au programme de prendre une décision. S'il pleut, le lutin prend un parapluie, sinon, il met des lunettes de soleil !"></mini-quiz>

<mini-quiz question="Quel bloc Scratch permet de demander une valeur à l'utilisateur ?" options='["Dire [...]","Penser à [...]","Demander [...] et attendre","Ajouter [...] à la liste"]' correctAnswer="2" explanation="Le bloc 'Demander [...] et attendre' affiche une zone de saisie. La réponse de l'utilisateur est ensuite rangée dans le bloc 'réponse'."></mini-quiz>

<mini-quiz question="Que fait le bloc 'Aller à x: 0 y: 0' ?" options='["Le lutin s&apos;efface","Le lutin va au centre de l&apos;écran","Le lutin s&apos;oriente vers le haut","Le lutin s&apos;arrête"]' correctAnswer="1" explanation="Le centre de la scène Scratch a pour coordonnées (0, 0)."></mini-quiz>

<brevet-checklist items='[ "Je sais ce qu&apos;est une variable et comment sa valeur change.", "Je sais faire la différence entre une boucle &apos;Répéter 10 fois&apos; et &apos;Répéter jusqu&apos;à&apos;.", "Je connais la formule de l&apos;angle pour tracer un polygone régulier (360 / n).", "Je sais que s&apos;orienter à 90 veut dire aller vers la droite." ]'></brevet-checklist>
