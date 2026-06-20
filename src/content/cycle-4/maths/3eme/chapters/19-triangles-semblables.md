# Triangles Semblables

<callout type="info" title="Introduction">
Tu as déjà vu des triangles qui se ressemblent : par exemple, un petit triangle et une version agrandie au photoco pieur. En maths, on appelle ça des triangles semblables. C'est l'outil parfait pour calculer des longueurs sans mesure, et c'est un classique du Brevet. Le lien avec Thalès est très fort, et ça rejoint aussi la notion d'agrandissement/réduction que tu as déjà vue.
</callout>

<callout type="info" title="Le saviez-vous ?">
Le principe des triangles semblables est utilisé par les architectes pour créer des maquettes de bâtiments. La maquette et le vrai bâtiment ont des angles identiques, mais des longueurs proportionnelles ! C'est aussi comme ça que fonctionnent les écrans : que tu regardes une vidéo en petit ou en plein écran, les proportions restent les mêmes.
</callout>

<concept-card title="Le réflexe en Maths" icon="Calculator" description="Au Brevet, toutes les traces de recherche sont prises en compte. **Même si ta démarche n'aboutit pas, écris-la !**" theme="info"></concept-card>

## 1. C'est quoi, des triangles semblables ? 🔍

Deux triangles sont dits **semblables** lorsqu'ils ont leurs angles deux à deux de même mesure.

**Exemple :**
Si un triangle a des angles de 30°, 60° et 90°, tout autre triangle avec les mêmes angles (30°, 60°, 90°) lui est semblable, même s'il est 2 fois plus grand ou tout petit.

<callout type="tip" title="Méthode rapide pour prouver">
Pour montrer que deux triangles sont semblables, il suffit de prouver que **deux couples d'angles** sont deux à deux de même mesure. Le troisième couple sera automatiquement égal (car la somme des angles d'un triangle vaut toujours 180°).
</callout>

### 🔑 Vocabulaire important

Quand deux triangles sont semblables :
- Les angles égaux s'appellent les **angles homologues**
- Les sommets des angles égaux s'appellent les **sommets homologues**
- Les côtés opposés aux angles égaux s'appellent les **côtés homologues**

<flashcard front="Comment repérer les côtés homologues dans des triangles semblables ?" back="Les côtés homologues sont toujours ceux qui sont opposés à des angles de même mesure. Si tu identifies les angles égaux, les côtés en face sont homologues !"></flashcard>

## 2. La propriété magique : la proportionnalité ✨

<callout type="info">
Si deux triangles sont semblables, alors les longueurs de leurs côtés sont **proportionnelles** deux à deux. Et réciproquement : si les longueurs des côtés de deux triangles sont proportionnelles, alors ils sont semblables.
</callout>

<formula-box title="Rapport de proportionnalité">

Si $ABC$ et $DEF$ sont semblables avec :
- $\widehat{A} = \widehat{D}$
- $\widehat{B} = \widehat{E}$
- $\widehat{C} = \widehat{F}$

Alors :

$$ \frac{AB}{DE} = \frac{AC}{DF} = \frac{BC}{EF} = k $$

$k$ est le **rapport de similitude** (ou d'agrandissement/réduction).
</formula-box>

<method-box title="Résoudre un problème avec des triangles semblables" steps='["1. Identifier les angles égaux (énoncé, codage, propriétés : alternes-internes, opposés par le sommet...).", "2. Lister les sommets homologues dans le bon ordre : Triangle 1 → Triangle 2.", "3. Écrire les 3 rapports de proportionnalité égaux.", "4. Remplacer par les valeurs connues et utiliser le produit en croix pour trouver la longueur manquante."]' ></method-box>

### Lien avec Thalès 🔗

Deux triangles en configuration de Thalès (triangles emboîtés ou papillon) sont **toujours** semblables. Mais attention : deux triangles semblables ne sont pas forcément en configuration de Thalès ! La réciproque n'est pas vraie.

<callout type="info">
C'est logique : si deux triangles sont en configuration de Thalès, les droites parallèles créent des angles égaux (correspondants ou alternes-internes). Et quand les angles sont égaux, les triangles sont semblables.
</callout>

### Lien avec l'agrandissement/réduction 📏

Si deux triangles sont semblables avec un rapport $k$ :
- Si $k > 1$ : le deuxième est un **agrandissement** du premier
- Si $0 < k < 1$ : le deuxième est une **réduction** du premier
- Les **angles** sont conservés (comme pour l'agrandissement/réduction)

<flashcard front="Quelle est la différence entre des triangles semblables et des triangles égaux ?" back="Les triangles égaux (ou isométriques) ont les mêmes longueurs de côtés. Les triangles semblables ont les mêmes angles mais des côtés proportionnels. Des triangles égaux sont toujours semblables (k=1), mais l'inverse n'est pas vrai !"></flashcard>

## 📝 Entraînement

<mini-quiz question="Deux triangles ont des angles de 40°, 70°, 70°. Un autre triangle a des angles de 40°, 70°, 70°. Sont-ils semblables ?" options='["Oui, car ils ont les mêmes angles","Non, car les longueurs sont différentes","On ne peut pas savoir"]' correctAnswer="0" explanation="Si deux triangles ont leurs angles deux à deux de même mesure, ils sont forcément semblables, quelle que soit la taille de leurs côtés !"></mini-quiz>

<mini-quiz question="Des triangles semblables ont pour côtés : 3, 4, 5 et 6, 8, 10. Quel est le rapport de similitude k ?" options='["k = 2","k = 0,5","k = 1,5","k = 3"]' correctAnswer="0" explanation="6/3 = 2, 8/4 = 2, 10/5 = 2. Tous les rapports valent 2, donc k = 2. Le deuxième triangle est un agrandissement du premier."></mini-quiz>

<mini-quiz question="Combien suffit-il de prouver de couples d'angles égaux pour déclarer deux triangles semblables ?" options='["Un seul couple","Deux couples","Trois couples forcément"]' correctAnswer="1" explanation="Si deux couples d'angles sont égaux, alors le troisième l'est automatiquement (180° - somme des deux premiers). Il suffit donc de 2 couples pour prouver la similitude."></mini-quiz>

<mini-quiz question="Des triangles en configuration de Thalès sont-ils forcément semblables ?" options='["Oui, toujours","Non, jamais","Seulement si les droites sont parallèles"]' correctAnswer="0" explanation="Oui ! Les droites parallèles créent des angles correspondants ou alternes-internes égaux, donc les triangles ont leurs angles deux à deux de même mesure."></mini-quiz>

<brevet-checklist items='[ "Je sais reconnaître deux triangles semblables (angles égaux deux à deux).", "Je sais identifier les sommets homologues et les côtés homologues.", "Je sais écrire les 3 rapports de proportionnalité égaux.", "Je sais utiliser le produit en croix pour trouver une longueur inconnue.", "Je sais que deux triangles en configuration de Thalès sont semblables." ]'></brevet-checklist>
