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

## 📝 Entraînement

<mini-quiz  question="Deux classes ont 12 de moyenne. La classe A a une étendue de 4, la classe B a une étendue de 15. Quelle classe a les notes les plus regroupées autour de la moyenne ?"  options='["La classe A","La classe B","Impossible à savoir"]'  correctAnswer="0"  explanation="Une petite étendue (4) signifie que la meilleure et la pire note sont proches. Les élèves ont donc des niveaux très similaires."></mini-quiz>

<mini-quiz  question="Quelle est la moyenne de ces 3 notes : 10, 15, 20 ?"  options='["12,5","15","16,5"]'  correctAnswer="1"  explanation="Somme (10 + 15 + 20) = 45. Puis on divise par l'effectif (3 notes). 45 / 3 = 15. La médiane est aussi 15 d'ailleurs !"></mini-quiz>

<mini-quiz  question="Si tu as les notes 14, 5, 18, 12. Quelle est la première étape AVANT de chercher la médiane ?"  options='["Additionner toutes les notes","Barrées les notes inférieures à 10","Les ranger dans l&apos;ordre croissant : 5, 12, 14, 18"]'  correctAnswer="2"  explanation="L'erreur fatale est de chercher la médiane sans d'abord ordonner les valeurs. Toujours les mettre du plus petit au plus grand !"></mini-quiz>

<mini-quiz question="Soit la série de notes : 8, 12, 12, 14, 19. Quelle est la médiane ?" options='["12","13","14","19"]' correctAnswer="0" explanation="L'effectif est de 5 (impair). La médiane est la 3ème valeur de la série ordonnée, soit 12."></mini-quiz>

<mini-quiz question="Comment s'appelle l'effectif total divisé par 2 si l'on cherche la position de la médiane ?" options='["La moyenne","Le rang de la médiane","L&apos;étendue","La fréquence"]' correctAnswer="1" explanation="Pour trouver la médiane dans une série de N valeurs, on regarde la position N/2. C'est l'indice (ou le rang) qui nous intéresse."></mini-quiz>

<brevet-checklist items='[ "Je sais calculer une moyenne pondérée.", "Je n&apos;oublie JAMAIS de ranger les valeurs dans l&apos;ordre avant de chercher la médiane.", "Je sais que l&apos;étendue = Max - Min." ]'></brevet-checklist>
