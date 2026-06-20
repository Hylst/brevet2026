# Pythagore et Thalès

<pythagore-thales-svg></pythagore-thales-svg>

<callout type="info" title="Introduction">
Tu vas rencontrer ici les deux superstars de la géométrie du collège : Pythagore et Thalès ! Leurs théorèmes sont capables de trouver des longueurs invisibles ou de prouver que des murs sont bien droits. Si Pythagore est le spécialiste des triangles rectangles, Thalès est le maître absolu des droites parallèles.
</callout>

<callout type="info" title="Le saviez-vous ?">
Le théorème de Pythagore était connu des Babyloniens plus de 1000 ans avant la naissance de Pythagore ! On a retrouvé des tablettes d'argile avec des listes de "triplets pythagoriciens" (comme 3, 4 et 5).
</callout>

<concept-card title="Le réflexe en Maths" icon="Calculator" description="Au Brevet, toutes les traces de recherche sont prises en compte. **Même si ta démarche n'aboutit pas, écris-la !**" theme="info"></concept-card>

## 1. Le Théorème de Pythagore : Le roi des triangles rectangles 📐

Pythagore ne s'intéresse qu'à une seule chose : les **triangles rectangles** (ceux qui ont un angle droit). Son théorème relie les longueurs des 3 côtés.

<callout type="tip" title="Le vocabulaire indispensable">

**L'hypoténuse**, c'est le côté le plus long du triangle. C'est toujours celui qui est *en face* de l'angle droit. Repère-le toujours en premier !

</callout>

<pythagoras-svg></pythagoras-svg>

Il y a 3 façons d'utiliser Pythagore au Brevet :

1.  **Le Théorème (Calculer une longueur)** : On SAIT que le triangle est rectangle.
    *   *Formule* : $\text{Hypoténuse}^2 = \text{Côté1}^2 + \text{Côté2}^2$
    *   *Exemple* : Si $ABC$ est rectangle en $A$, alors $BC^2 = AB^2 + AC^2$.
2.  **La Réciproque (Prouver qu'il EST rectangle)** : On connaît les 3 longueurs.
    *   On calcule le carré du plus grand côté tout seul.
    *   On calcule la somme des carrés des deux autres côtés.
    *   Si les deux résultats sont **égaux**, alors le triangle est rectangle.
3.  **La Contraposée (Prouver qu'il n'est PAS rectangle)** :
    *   Même méthode que la réciproque.
    *   Si les deux résultats sont **différents**, alors le triangle n'est pas rectangle.

### 2. Le Théorème de Thalès : L'histoire des droites parallèles 🛤️

Thalès, lui, s'intéresse aux **droites parallèles**. Son théorème permet de calculer des longueurs quand on a deux triangles emboîtés (ou en forme de nœud papillon).

<callout type="warning" title="La condition absolue 🚨">

Pour utiliser le théorème de Thalès, il FAUT que l'énoncé te dise que deux droites sont **parallèles**. Sans ça, Thalès reste à la maison !

</callout>

<method-box  title="Écrire l'égalité de Thalès (Calculer une longueur)"  steps='["Repérer le sommet commun (le point où les deux droites se croisent).", "Écrire les rapports : Petit Côté / Grand Côté (ou l&apos;inverse, mais reste cohérent !).", "Remplacer par les valeurs connues.", "Faire un produit en croix pour trouver la longueur manquante."]'  example="Si (MN) // (BC) et que A est le sommet commun :<br/><b>AM / AB = AN / AC = MN / BC</b>"></method-box>

<thales-svg></thales-svg>

Comme pour Pythagore, Thalès a aussi sa réciproque et sa contraposée :
*   **Réciproque (Prouver que c'est parallèle)** : On calcule $\frac{AM}{AB}$ d'un côté, et $\frac{AN}{AC}$ de l'autre. Si c'est **égal** (et que les points sont dans le même ordre), alors les droites sont parallèles.
*   **Contraposée (Prouver que ce n'est pas parallèle)** : Si les deux rapports sont **différents**, les droites ne sont pas parallèles.

<flashcard front="Quelle est la phrase magique à écrire avant d'utiliser la réciproque de Thalès ?" back="Les points A, M, B et A, N, C sont alignés dans le même ordre."></flashcard>

### 3. Les Triangles Semblables : Les frères jumeaux (de tailles différentes) 👯

Deux triangles sont semblables s'ils ont exactement la **même forme**, mais pas forcément la même taille. C'est comme un zoom sur une photo.

*   **Comment les reconnaître ?** Ils ont leurs 3 angles égaux (en fait, 2 suffisent, car la somme fait toujours 180°).
*   **À quoi ça sert ?** Si deux triangles sont semblables, alors les longueurs de leurs côtés sont **proportionnelles**. On peut donc faire un tableau de proportionnalité pour trouver une longueur manquante !

## 📝 Entraînement

<mini-quiz  question="Dans le triangle DEF, le plus grand côté est DF. Je calcule DF² = 100. Puis je calcule DE² + EF² = 95. Que puis-je conclure ?"  options='["Le triangle est rectangle","Le triangle n&apos;est pas rectangle","Il manque des informations"]'  correctAnswer="1"  explanation="Puisque 100 n'est pas égal à 95, l'égalité de Pythagore n'est pas vérifiée. D'après la contraposée, le triangle n'est pas rectangle."></mini-quiz>

<mini-quiz  question="Si on me dit que les droites (AB) et (CD) sont parallèles et qu'on me demande de calculer une longueur, quel théorème dois-je utiliser ?"  options='["Le théorème de Pythagore","La réciproque de Pythagore","Le théorème de Thalès"]'  correctAnswer="2"  explanation="Thalès est le maître des droites parallèles ! Puisque les droites sont parallèles et qu'on cherche une longueur, c'est le théorème direct qu'il faut utiliser."></mini-quiz>

<mini-quiz  question="Pour que deux triangles soient semblables, que faut-il vérifier en priorité ?"  options='["Avoir les mêmes longueurs exactes","Avoir au moins deux angles de même mesure","Être tous deux rectangles"]'  correctAnswer="1"  explanation="Deux triangles sont semblables si leurs trois angles sont égaux, mais en vérifier deux suffit (car la somme des trois vaut toujours 180° !). Leurs longueurs seront proportionnelles."></mini-quiz>

<mini-quiz question="Dans un triangle ABC rectangle en A, AB = 3 cm et AC = 4 cm. Combien vaut BC ?" options='["5 cm","7 cm","12 cm","25 cm"]' correctAnswer="0" explanation="BC² = AB² + AC² = 3² + 4² = 9 + 16 = 25. Donc BC = √25 = 5 cm."></mini-quiz>

<mini-quiz question="Quel théorème permet de prouver que deux droites sont BIEN parallèles ?" options='["Théorème de Pythagore","Réciproque du théorème de Thalès","Réciproque du théorème de Pythagore","Trigonométrie"]' correctAnswer="1" explanation="C'est la réciproque du théorème de Thalès qui sert à démontrer le parallélisme à partir de l'égalité des rapports de longueurs."></mini-quiz>

<brevet-checklist items='[ "Je sais repérer l&apos;hypoténuse (le côté en face de l&apos;angle droit).", "Je sais rédiger la réciproque de Pythagore pour prouver qu&apos;un triangle est rectangle.", "Je sais écrire les 3 fractions de Thalès sans me tromper.", "Je n&apos;oublie pas de vérifier l&apos;ordre des points pour la réciproque de Thalès.", "Je sais que des triangles semblables ont des côtés proportionnels." ]'></brevet-checklist>
