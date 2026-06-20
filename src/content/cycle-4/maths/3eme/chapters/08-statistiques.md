# Statistiques

![Moyenne vs Médiane](../assets/moyenne-mediane.svg)

<callout type="info" title="Introduction">
Chaque jour, nous sommes bombardés de chiffres, sondages et graphiques. Les statistiques sont les outils qui nous permettent d'organiser ces données de façon claire pour pouvoir les analyser, mieux les comprendre et prendre les bonnes décisions. Savoir lire la moyenne ou la médiane, c'est s'assurer d'avoir un esprit critique !
</callout>

<callout type="info" title="Le saviez-vous ?">
La médiane est souvent plus représentative que la moyenne pour parler des salaires. En effet, un seul milliardaire dans une pièce fait exploser le salaire "moyen" de tout le monde, alors que le salaire "médian" ne bougera presque pas !
</callout>

<concept-card title="Le réflexe en Maths" icon="Calculator" description="Au Brevet, toutes les traces de recherche sont prises en compte. **Même si ta démarche n'aboutit pas, écris-la !**" theme="info"></concept-card>

## 1. Statistiques : Faire parler les nombres 📊

Les statistiques, c'est l'art de résumer une grande liste de nombres pour en tirer des conclusions.

<stats-comparator></stats-comparator>

<formula-box title="La Moyenne">

$$ \text{Moyenne} = \frac{\text{Somme de toutes les valeurs}}{\text{Effectif total}} $$

</formula-box>

*   **La Moyenne** : C'est le point d'équilibre. On additionne tout et on divise par le nombre total.
    *   *Moyenne pondérée* : Quand certaines valeurs comptent plus que d'autres (comme les coefficients des notes). On multiplie chaque note par son coefficient, on additionne tout, et on divise par la *somme des coefficients*.

*   **La Médiane** : C'est la valeur du milieu. Elle coupe la classe en deux : 50% ont moins, 50% ont plus.

<callout type="warning" title="L'erreur fatale pour la médiane !">

Avant de chercher le milieu, tu DOIS absolument **ranger les nombres dans l'ordre croissant** (du plus petit au plus grand). Sinon, ton résultat sera faux !

</callout>

<method-box  title="Trouver la médiane"  steps='["Ranger toutes les valeurs dans l&apos;ordre croissant.", "Compter l&apos;effectif total (combien il y a de nombres en tout).", "Si l&apos;effectif est IMPAIR : c&apos;est la valeur pile au milieu.", "Si l&apos;effectif est PAIR : c&apos;est la moyenne des deux valeurs du milieu."]'  example="Série : 12, 8, 15, 10, 14<br/>1. On range : 8, 10, <b>12</b>, 14, 15<br/>2. Il y a 5 valeurs (impair).<br/>3. La médiane est la 3ème valeur : <b>12</b>."></method-box>

*   **L'Étendue** : C'est l'écart entre le premier et le dernier. (Valeur Max - Valeur Min). Plus l'étendue est grande, plus les résultats sont dispersés (hétérogènes).

<flashcard front="Que signifie une étendue très grande ?" back="Cela signifie que les valeurs sont très dispersées (très hétérogènes). Il y a un grand écart entre la plus petite et la plus grande valeur."></flashcard>

## 2. Les Quartiles : Découper la série en 4 🎯

Les quartiles sont comme la médiane, mais ils coupent la série en **4 parts égales** au lieu de 2.

*   **Q1 (1er quartile)** : C'est la plus petite valeur qui est supérieure ou égale à **au moins 25%** des données.
*   **Q3 (3ème quartile)** : C'est la plus petite valeur qui est supérieure ou égale à **au moins 75%** des données.

<method-box  title="Trouver Q1 et Q3"  steps='["1. Ranger les valeurs dans l&apos;ordre croissant.", "2. Calculer le rang : pour Q1, c&apos;est (Effectif total × 25) / 100. Pour Q3 : (Effectif total × 75) / 100.", "3. Si le rang tombe pile sur une valeur, cette valeur est Q1 ou Q3.", "4. Si le rang n&apos;est pas entier, on arrondit à l&apos;entier supérieur pour trouver la position de Q1 ou Q3."]'  example="Série : 5, 8, 10, 12, 14, 15, 18, 20<br/>Effectif total = 8.<br/>Rang de Q1 = 8 × 0,25 = 2 (position 2 → Q1 = 8).<br/>Rang de Q3 = 8 × 0,75 = 6 (position 6 → Q3 = 15).<br/>**Écart interquartile = Q3 - Q1 = 15 - 8 = 7.**"></method-box>

*   **L'Écart interquartile (Q3 - Q1)** : Il mesure la dispersion des 50% du milieu de la série. Plus il est petit, plus les valeurs centrales sont regroupées.

<callout type="info" title="Pourquoi les quartiles sont utiles ?">
La médiane et les quartiles sont des indicateurs plus robustes que la moyenne et l'écart-type car ils ne sont pas influencés par les valeurs extrêmes (les "outliers"). C'est pour ça qu'on utilise les quartiles en économie pour parler des inégalités de salaires !
</callout>

## 3. L'Effectif Cumulé Croissant (ECC) 📈

L'effectif cumulé croissant permet de voir, au fur et à mesure, combien de personnes (ou d'éléments) se trouvent en dessous d'une certaine valeur.

<method-box  title="Construire un ECC"  steps='["1. Ranger les valeurs dans l&apos;ordre croissant (comme toujours !).", "2. Partir de la plus petite valeur : son effectif cumulé = son effectif (nombre de fois qu&apos;elle apparaît).", "3. Pour chaque valeur suivante, ajouter son effectif à l&apos;effectif cumulé précédent.", "4. Le dernier ECC doit toujours être égal à l&apos;effectif total."]'  example="Notes : 8 (x2), 10 (x3), 12 (x4), 14 (x1)<br/>ECC : 8→2, 10→2+3=5, 12→5+4=9, 14→9+1=10.<br/>Cela signifie que 5 élèves ont 10 ou moins, 9 élèves ont 12 ou moins, etc."></method-box>

L'ECC est très utile pour trouver rapidement **la médiane et les quartiles** quand on a beaucoup de données :

*   **Médiane** : On cherche l'effectif total / 2 dans l'ECC. La valeur correspondante est la médiane.
*   **Q1** : On cherche l'effectif total × 0,25 dans l'ECC.
*   **Q3** : On cherche l'effectif total × 0,75 dans l'ECC.

<flashcard front="Quelle est la différence entre l'effectif et l'effectif cumulé ?" back="L'effectif, c'est le nombre de fois qu'une valeur apparaît. L'effectif cumulé, c'est le nombre total de données qui sont inférieures ou égales à cette valeur. Le dernier ECC doit toujours être égal à l'effectif total !"></flashcard>

## 📝 Entraînement

<mini-quiz  question="Deux classes ont 12 de moyenne. La classe A a une étendue de 4, la classe B a une étendue de 15. Quelle classe a les notes les plus regroupées autour de la moyenne ?"  options='["La classe A","La classe B","Impossible à savoir"]'  correctAnswer="0"  explanation="Une petite étendue (4) signifie que la meilleure et la pire note sont proches. Les élèves ont donc des niveaux très similaires."></mini-quiz>

<mini-quiz  question="Quelle est la moyenne de ces 3 notes : 10, 15, 20 ?"  options='["12,5","15","16,5"]'  correctAnswer="1"  explanation="Somme (10 + 15 + 20) = 45. Puis on divise par l'effectif (3 notes). 45 / 3 = 15. La médiane est aussi 15 d'ailleurs !"></mini-quiz>

<mini-quiz  question="Si tu as les notes 14, 5, 18, 12. Quelle est la première étape AVANT de chercher la médiane ?"  options='["Additionner toutes les notes","Barrées les notes inférieures à 10","Les ranger dans l&apos;ordre croissant : 5, 12, 14, 18"]'  correctAnswer="2"  explanation="L'erreur fatale est de chercher la médiane sans d'abord ordonner les valeurs. Toujours les mettre du plus petit au plus grand !"></mini-quiz>

<mini-quiz question="Soit la série de notes : 8, 12, 12, 14, 19. Quelle est la médiane ?" options='["12","13","14","19"]' correctAnswer="0" explanation="L'effectif est de 5 (impair). La médiane est la 3ème valeur de la série ordonnée, soit 12."></mini-quiz>

<mini-quiz question="Comment s'appelle l'effectif total divisé par 2 si l'on cherche la position de la médiane ?" options='["La moyenne","Le rang de la médiane","L&apos;étendue","La fréquence"]' correctAnswer="1" explanation="Pour trouver la médiane dans une série de N valeurs, on regarde la position N/2. C'est l'indice (ou le rang) qui nous intéresse."></mini-quiz>

<mini-quiz question="Pour la série : 5, 8, 10, 12, 15, 18, 20. Quel est le 1er quartile (Q1) ?" options='["5","8","10","12"]' correctAnswer="1" explanation="Effectif = 7. Rang de Q1 = 7 × 0,25 = 1,75. On arrondit à 2. La 2ème valeur est 8."></mini-quiz>

<mini-quiz question="Une série a Q1 = 12 et Q3 = 30. Que vaut l'écart interquartile ?" options='["18","12","30","42"]' correctAnswer="0" explanation="L'écart interquartile = Q3 - Q1 = 30 - 12 = 18. Cela signifie que les 50% du milieu de la série sont étalés sur 18 unités."></mini-quiz>

<mini-quiz question="Dans une série, l'ECC de la valeur 14 est 18. Cela signifie quoi ?" options='["18 personnes ont exactement 14","14 personnes ont 18 ou moins","18 personnes ont 14 ou moins","Il y a 18 valeurs différentes"]' correctAnswer="2" explanation="L'effectif cumulé croissant est le nombre total de données qui sont inférieures ou égales à cette valeur. Donc 18 personnes ont une note de 14 ou moins."></mini-quiz>

<mini-quiz question="J'ai les ECC : 10→3, 12→7, 14→12, 16→15. L'effectif total est :" options='["15","12","7","4"]' correctAnswer="0" explanation="Le dernier ECC est toujours égal à l'effectif total. Ici c'est 15."></mini-quiz>

<brevet-checklist items='[ "Je sais calculer une moyenne pondérée.", "Je n&apos;oublie JAMAIS de ranger les valeurs dans l&apos;ordre avant de chercher la médiane.", "Je sais que l&apos;étendue = Max - Min.", "Je sais trouver Q1 (25% des données) et Q3 (75% des données).", "Je sais que l&apos;écart interquartile = Q3 - Q1.", "Je sais lire et compléter un tableau d&apos;effectifs cumulés croissants." ]'></brevet-checklist>
