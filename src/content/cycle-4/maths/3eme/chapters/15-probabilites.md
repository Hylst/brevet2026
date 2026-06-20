# Probabilités

<callout type="info" title="Introduction">
Peut-on prévoir le hasard ? Oui, grâce aux mathématiques ! Les probabilités sont la boussole qui permet de calculer nos chances de gagner à un jeu, les risques d'une maladie, ou les prévisions météorologiques. Prépare-toi à jouer avec des dés, des urnes et des arbres de choix.
</callout>

<callout type="info" title="Le saviez-vous ?">
La théorie des probabilités est née au 17ème siècle d'une discussion entre les mathématiciens Blaise Pascal et Pierre de Fermat... pour résoudre un problème de jeu de dés et de paris d'argent !
</callout>

<concept-card title="Le réflexe en Maths" icon="Calculator" description="Au Brevet, toutes les traces de recherche sont prises en compte. **Même si ta démarche n'aboutit pas, écris-la !**" theme="info"></concept-card>

## 1. Le vocabulaire des probabilités 🎲

La probabilité, c'est la chance qu'un événement se produise. Elle est toujours comprise entre **0** (impossible) et **1** (certain).

*   **Une expérience aléatoire** : C'est une action dont on connaît tous les résultats possibles, mais dont on ne peut pas prévoir le résultat exact (ex: lancer un dé).
*   **Les issues** : Ce sont tous les résultats possibles (ex: 1, 2, 3, 4, 5, 6).
*   **Un événement** : C'est une condition qui peut être réalisée par une ou plusieurs issues (ex: "Obtenir un nombre pair").
*   **L'événement contraire** : C'est l'inverse de l'événement. Si $A$ est "Obtenir un nombre pair", alors $\bar{A}$ (non-A) est "Obtenir un nombre impair".

<callout type="tip" title="La formule magique">

$P(A) = \frac{\text{Nombre d'issues favorables}}{\text{Nombre total d'issues possibles}}$

</callout>

<method-box  title="Comment calculer une probabilité simple ?"  steps='["Identifie l&apos;expérience et compte le nombre total d&apos;issues possibles.", "Identifie l&apos;événement et compte le nombre d&apos;issues qui le réalisent.", "Applique la formule et simplifie la fraction si possible."]'  example="Lancer un dé à 6 faces.<br/>Événement A : Obtenir un multiple de 3.<br/>Issues favorables : 3 et 6 (donc 2 issues).<br/>Total : 6 issues.<br/>P(A) = 2/6 = 1/3."></method-box>
### 2. Expériences à plusieurs épreuves 🌳

Quand on fait plusieurs actions à la suite (ex: lancer deux pièces, ou tirer deux boules dans une urne), on utilise un **arbre de probabilités**.

<probability-tree-svg></probability-tree-svg>

**Règles de l'arbre :**
1.  La somme des probabilités sur les branches issues d'un même nœud est toujours égale à **1**.
2.  Pour trouver la probabilité d'un chemin complet, on **multiplie** les probabilités rencontrées sur ce chemin.
3.  Pour trouver la probabilité d'un événement qui regroupe plusieurs chemins, on **additionne** les probabilités de ces chemins.

<probability-urn-svg></probability-urn-svg>

<flashcard front="Que se passe-t-il si on tire une boule 'sans remise' ?" back="Le nombre total de boules dans l'urne diminue de 1 pour le deuxième tirage ! Il faut bien faire attention aux dénominateurs sur les branches de l'arbre."></flashcard>

## 📝 Entraînement

<mini-quiz  question="Si la probabilité qu'il pleuve demain est de 0,3. Quelle est la probabilité qu'il NE PLEUVE PAS ?"  options='["0,3","1,3","0,7","0"]'  correctAnswer="2"  explanation="C'est l'événement contraire ! La somme des deux doit faire 1. Donc P(Non-Pluie) = 1 - 0,3 = 0,7."></mini-quiz>

<mini-quiz  question="Dans mon arbre de probabilités avec 2 lancers de pièce, je veux la probabilité de faire Face PUIS Face. Quelle opération mathématique dois-je faire entre les deux probabilités de mes branches ?"  options='["Une addition","Une multiplication","Une division"]'  correctAnswer="1"  explanation="Pour trouver la probabilité d'un chemin complet le long des branches d'un arbre, on MULTIPLIE toujours les probabilités rencontrées (1/2 × 1/2 = 1/4)."></mini-quiz>

<mini-quiz  question="Dans une urne, il y a 3 boules rouges et 2 boules bleues. On tire une boule au hasard. Quelle est la probabilité de tirer une rouge ?"  options='["3/2","3/5","2/5","1/3"]'  correctAnswer="1"  explanation="Il y a 3 boules rouges (issues favorables) sur un total de 5 boules (3+2). Donc P(Rouge) = 3/5."></mini-quiz>

<mini-quiz question="On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?" options='["1/6","1/4","1/2","2/3"]' correctAnswer="2" explanation="Il y a 3 nombres pairs (2, 4, 6) sur 6 faces au total. La probabilité est donc 3/6, ce qui se simplifie en 1/2."></mini-quiz>

<mini-quiz question="La probabilité qu'un événement A se produise est de 0,3. Quelle est la probabilité que cet événement ne se produise PAS ?" options='["0,3","0,7","1,3","0"]' correctAnswer="1" explanation="La somme des probabilités d'un événement et de son contraire est toujours égale à 1. Donc P(non-A) = 1 - 0,3 = 0,7."></mini-quiz>

<mini-quiz question="Dans une urne, il y a 2 boules noires et 8 boules blanches. On tire une boule au hasard. Quelle est la probabilité d'obtenir une boule noire ?" options='["2/8","2/10","8/10","1/2"]' correctAnswer="1" explanation="Il y a 2 boules noires (cas favorables) sur un total de 10 boules (2+8, cas possibles). P = 2/10 (soit 0,2 ou 20%)."></mini-quiz>

<brevet-checklist items='[ "Je sais qu&apos;une probabilité est toujours comprise entre 0 et 1.", "Je sais que P(A) + P(non-A) = 1.", "Je sais construire un arbre de probabilités à deux épreuves.", "Je sais multiplier les probabilités sur un chemin d&apos;arbre." ]'></brevet-checklist>
