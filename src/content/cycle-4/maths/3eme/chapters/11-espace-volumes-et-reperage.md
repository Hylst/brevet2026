# Espace : Volumes et Repérage

<callout type="info" title="Introduction">
Adieu la feuille de papier toute plate, bienvenue dans la 3D ! Dans ce chapitre, tu vas apprendre à calculer la place que prennent les objets (leurs volumes) qu'ils soient pointus, droits ou ronds. Tu vas aussi apprendre à te repérer sur un globe, grâce à la latitude et la longitude.
</callout>

<callout type="info" title="Le saviez-vous ?">
Le méridien de Greenwich (qui sert de point de départ pour la longitude) a été choisi en 1884. Avant cela, la France utilisait le méridien de Paris, qui passe en plein milieu de l'Observatoire de Paris !
</callout>

<concept-card title="Le réflexe en Maths" icon="Calculator" description="Au Brevet, toutes les traces de recherche sont prises en compte. **Même si ta démarche n'aboutit pas, écris-la !**" theme="info"></concept-card>

## 1. Les Volumes : Remplir les solides 📦

Calculer un volume, c'est savoir combien d'eau (ou de petits cubes) on peut mettre à l'intérieur d'une forme 3D.
Il y a 3 grandes familles de formules à retenir pour le Brevet.

<volumes-families-svg></volumes-families-svg>

<formula-box title="La Boule et la Sphère">

$$ \text{Volume d'une boule} = \frac{4}{3} \times \pi \times \text{Rayon}^3 $$
$$ \text{Aire d'une sphère} = 4 \times \pi \times \text{Rayon}^2 $$

</formula-box>

<method-box  title="Les 3 familles de volumes"  steps='["Famille 1 : Les solides droits (Prisme, Cylindre). Ils montent tout droit. Formule : Aire de la base × hauteur.", "Famille 2 : Les solides pointus (Pyramide, Cône). Ils finissent en pointe. Formule : (Aire de la base × hauteur) / 3.", "Famille 3 : La Boule. Formule spéciale : (4 × π × Rayon³) / 3."]' ></method-box>

<callout type="warning" title="Le piège de l'Aire de la base !">

Dans les formules, "Aire de la base" n'est pas un nombre donné directement ! Tu dois d'abord la calculer.
*   Si la base est un **rectangle** : Longueur × largeur
*   Si la base est un **triangle** : (Base du triangle × hauteur du triangle) / 2
*   Si la base est un **disque** (cylindre/cône) : $\pi \times \text{Rayon}^2$

</callout>

### 2. Couper un solide (Les sections) 🔪

Imagine que tu coupes un solide en 3D avec un grand couteau plat (un plan). Quelle forme apparaît sur la tranche ?

*   **Couper un pavé droit** (une boîte à chaussures) : La tranche est toujours un **rectangle**.
*   **Couper un cylindre** (une boîte de conserve) :
    *   Horizontalement (parallèle aux bases) : Un **cercle** (de même taille que la base).
    *   Verticalement (de haut en bas) : Un **rectangle**.
*   **Couper un cône ou une pyramide** (horizontalement) : On obtient une **réduction** de la base (un petit cercle ou un petit carré).
*   **Couper une sphère** (une orange) : La tranche est toujours un **cercle**.

<flashcard front="Si je coupe une sphère de rayon 5 cm en passant pile par son centre, quel est le rayon du cercle obtenu ?" back="Le rayon sera de 5 cm ! C'est ce qu'on appelle un 'grand cercle' (comme l'Équateur sur la Terre)."></flashcard>

### 3. Se repérer dans l'espace 🌍

Sur une feuille (2D), on a besoin de 2 coordonnées $(x ; y)$.
Dans l'espace (3D), on a besoin de **3 coordonnées** $(x ; y ; z)$ : l'abscisse (gauche/droite), l'ordonnée (avant/arrière) et l'altitude (haut/bas).

**Le repérage sur la Terre (Coordonnées géographiques) :**
La Terre est une sphère. Pour s'y repérer, on utilise un quadrillage imaginaire :
1.  **La Latitude** (les lignes horizontales, les parallèles) : C'est l'angle vers le **Nord** ou le **Sud** par rapport à l'Équateur. (De 0° à 90°).
2.  **La Longitude** (les lignes verticales, les méridiens) : C'est l'angle vers l'**Est** ou l'**Ouest** par rapport au méridien de Greenwich. (De 0° à 180°).

*Exemple* : Paris est située à environ (49° Nord ; 2° Est).

## 📝 Entraînement

<mini-quiz  question="Pour calculer le volume d'une pyramide à base carrée de côté 4 cm et de hauteur 6 cm, quel est le bon calcul ?"  options='["(4 × 6) / 3","(4 × 4 × 6) / 3","4 × 4 × 6","(4 + 4 + 4 + 4) × 6 / 3"]'  correctAnswer="1"  explanation="L'aire de la base (un carré) est 4 × 4. On multiplie par la hauteur (6) et on divise par 3 car c'est un solide pointu."></mini-quiz>

<mini-quiz  question="Si je coupe un cylindre verticalement (de haut en bas, perpendiculairement à sa base), quelle forme vais-je voir sur la coupe ?"  options='["Un cercle","Un triangle","Un rectangle"]'  correctAnswer="2"  explanation="Couper de haut en bas un cylindre révèle une face plate rectangulaire à l'intérieur ! (Imagine couper une canette de soda du haut vers le bas)."></mini-quiz>

<mini-quiz  question="Quelle ligne imaginaire sert de repère zéro pour la Longitude (Est / Ouest) ?"  options='["L&apos;Équateur","Le Tropique du Cancer","Le méridien de Greenwich"]'  correctAnswer="2"  explanation="Les longitudes (verticales) se mesurent toujours en degrés vers l'Est ou l'Ouest en partant du méridien de Greenwich (0°). L'Équateur, c'est pour la latitude (Nord/Sud) !"></mini-quiz>

<mini-quiz question="Calculer le volume d'une boule de rayon 3 cm (en gardant π)." options='["12π cm³","24π cm³","36π cm³","108π cm³"]' correctAnswer="2" explanation="Volume = (4/3) × π × R³ = (4/3) × π × 3³ = (4/3) × π × 27 = 4 × π × 9 = 36π cm³."></mini-quiz>

<mini-quiz question="Un point A se trouve à 30° Sud. Il s'agit de sa :" options='["Latitude","Longitude","Altitude","Température"]' correctAnswer="0" explanation="Les mesures d'angle Nord/Sud par rapport à l'Équateur correspondent à la latitude."></mini-quiz>

<brevet-checklist items='[ "Je sais que pour une pyramide ou un cône, il faut DIVISER PAR 3.", "Je sais calculer l&apos;aire d&apos;un disque (π × R²).", "Je sais imaginer la forme obtenue quand on coupe un solide.", "Je sais faire la différence entre Latitude (Nord/Sud) et Longitude (Est/Ouest)." ]'></brevet-checklist>
