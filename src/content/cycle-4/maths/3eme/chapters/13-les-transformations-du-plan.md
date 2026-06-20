# Les Transformations du plan

<callout type="info" title="Introduction">
Comment faire bouger une figure géométrique sans la déformer ? En mathématiques, on utilise les "transformations du plan". Qu'il s'agisse de plier, de faire glisser, de faire tourner ou de zoomer sur un dessin, ces techniques te permettront d'analyser des pavages ou des figures symétriques complexes.
</callout>

<callout type="info" title="Le saviez-vous ?">
Les pavages (utiliser des transformations pour recouvrir une surface sans laisser de vide) sont très utilisés dans l'art islamique, notamment dans les magnifiques mosaïques de l'Alhambra en Espagne. Le mathématicien M.C. Escher s'en est beaucoup inspiré pour ses œuvres !
</callout>

<concept-card title="Le réflexe en Maths" icon="Calculator" description="Au Brevet, toutes les traces de recherche sont prises en compte. **Même si ta démarche n'aboutit pas, écris-la !**" theme="info"></concept-card>

## 1. Le jeu vidéo des maths 🕹️

Au Brevet, on te donne souvent un pavage (un dessin avec plein de petits motifs) et on te demande de trouver quelle transformation permet de passer du motif 1 au motif 2.

**Les 4 mouvements de base (la figure garde la même taille et la même forme) :**

<transformations-svg></transformations-svg>

*   **La Symétrie axiale** : C'est l'effet **miroir** (par rapport à une ligne/un axe).

<flashcard front="Quelle est la différence entre une symétrie centrale et une rotation de 180° ?" back="Aucune ! C'est exactement la même chose. Faire un demi-tour, c'est tourner de 180°."></flashcard>

### 2. Les polygones réguliers 🔷

Un **polygone régulier** a tous ses côtés de même longueur ET tous ses angles de même mesure. Il peut être inscrit dans un cercle.

**Exemples :** triangle équilatéral (3 côtés), carré (4), pentagone régulier (5), hexagone régulier (6).

<callout type="info" title="Lien avec la rotation">
Si tu fais tourner un polygone régulier autour de son centre d'un angle de 360°/n, il se superpose exactement à lui-même ! C'est ce qu'on appelle la **symétrie de rotation**.
</callout>

*   **Angle au centre** : $\frac{360}{n}$ degrés (où $n$ est le nombre de côtés).
*   **Angle intérieur** : $\frac{(n-2) \times 180}{n}$ degrés.

<method-box  title="Calculer l'angle au centre et l'angle intérieur"  steps='["Pour l&apos;angle au centre : diviser 360 par le nombre de côtés (n).", "Pour l&apos;angle intérieur : (n-2) × 180 ÷ n."]'  example="Pour un pentagone régulier (n=5) :<br/>Angle au centre = 360/5 = <b>72°</b>.<br/>Angle intérieur = (5-2)×180/5 = 3×180/5 = <b>108°</b>."></method-box>

<callout type="info">
Dans Scratch, pour tracer un polygone régulier, on utilise l'angle au centre (360/n) comme angle de rotation à chaque étape de la boucle !
</callout>

<flashcard front="Un hexagone régulier a combien de côtés et quel est son angle au centre ?" back="6 côtés. Angle au centre = 360 / 6 = 60°. Chaque rotation de 60° autour de son centre le fait se superposer à lui-même."></flashcard>

### 4. Angles inscrits et angles au centre ⭕

Quand on travaille avec un **cercle**, deux types d'angles sont liés par une règle très utile.

*   **Angle inscrit** : son sommet est **sur** le cercle et ses côtés coupent le cercle.
*   **Angle au centre** : son sommet est **au centre** du cercle.

<formula-box title="Propriété fondamentale">

$$ \text{Angle inscrit} = \frac{\text{Angle au centre correspondant}}{2} $$

Deux angles inscrits qui interceptent le même arc sont égaux.

</formula-box>

<callout type="info" title="Lien avec les polygones réguliers">
Dans un polygone régulier inscrit dans un cercle, l'angle au centre est 360°/n. Chaque côté du polygone correspond à un angle inscrit qui vaut la moitié : 180°/n.
</callout>

<flashcard front="Un angle au centre mesure 80°. Que vaut l'angle inscrit qui intercepte le même arc ?" back="L'angle inscrit vaut la moitié : 80 / 2 = 40°."></flashcard>

### 5. Le mouvement qui change la taille : L'Homothétie 🔍

C'est l'effet **zoom** (agrandissement ou réduction). Elle est définie par un centre (le point de fuite) et un rapport $k$ (le coefficient de zoom).

*   Si $k = 2$ : La figure est 2 fois plus grande (Agrandissement).
*   Si $k = 0,5$ : La figure est 2 fois plus petite (Réduction).
*   Si $k$ est **négatif** (ex: $k = -2$) : La figure est agrandie ET elle passe de l'autre côté du centre (elle fait un demi-tour, comme une symétrie centrale combinée à un zoom).

<callout type="warning" title="Le piège des aires et des volumes !">

Si j'agrandis une figure avec un rapport $k = 3$ (les longueurs sont multipliées par 3) :
*   L'aire n'est PAS multipliée par 3, mais par **$3^2$** (donc par 9).
*   Le volume n'est PAS multiplié par 3, mais par **$3^3$** (donc par 27).

</callout>

## 📝 Entraînement

<mini-quiz question="Quelle transformation géométrique correspond à un glissement sans tourner ni déformer la figure ?" options='["Une symétrie axiale","Une rotation","Une translation","Une homothétie"]' correctAnswer="2" explanation="La translation correspond à un glissement rectiligne. La figure garde la même orientation et la même taille." ></mini-quiz>

<mini-quiz question="Quel est l'angle au centre d'un pentagone régulier (5 côtés) ?" options='["60°","72°","90°","108°"]' correctAnswer="1" explanation="Angle au centre = 360 / n = 360 / 5 = 72°. C'est aussi l'angle dont il faut faire tourner le pentagone pour qu'il se superpose à lui-même."></mini-quiz>

<mini-quiz question="Quel est l'angle intérieur d'un carré ?" options='["60°","90°","120°","180°"]' correctAnswer="1" explanation="Angle intérieur = (n-2) × 180 / n = (4-2) × 180 / 4 = 2 × 180 / 4 = 90°."></mini-quiz>

<mini-quiz question="Dans Scratch, quel angle de rotation faut-il pour tracer un triangle équilatéral ?" options='["60°","90°","120°","180°"]' correctAnswer="2" explanation="L'angle de rotation dans Scratch pour un polygone régulier est l'angle au centre : 360 / 3 = 120°."></mini-quiz>

<mini-quiz question="Un angle au centre mesure 120°. Que vaut l'angle inscrit qui intercepte le même arc ?" options='["240°","60°","120°","30°"]' correctAnswer="1" explanation="L'angle inscrit vaut toujours la moitié de l'angle au centre correspondant : 120 / 2 = 60°."></mini-quiz>

<mini-quiz question="Deux angles inscrits qui interceptent le même arc sont :" options='["Complémentaires","Égaux","Supplémentaires","Opposés"]' correctAnswer="1" explanation="C'est une propriété clé : tous les angles inscrits qui interceptent le même arc ont la même mesure."></mini-quiz>

<brevet-checklist items='[ "Je sais identifier une symétrie axiale (miroir) et centrale (demi-tour).", "Je sais définir une translation (glissement) et une rotation (tourner autour d&apos;un point).", "Je connais l&apos;effet de l&apos;homothétie sur les longueurs, les aires et les volumes.", "Je sais qu&apos;un polygone régulier a tous ses côtés et angles égaux.", "Je sais calculer l&apos;angle au centre (360/n) et l&apos;angle intérieur.", "Je sais que l&apos;angle inscrit = angle au centre / 2.", "Je sais que deux angles inscrits interceptant le même arc sont égaux." ]'></brevet-checklist>
