# Mathématiques

## Nombres et calculs


### Fiche de Révision : Arithmétique

*Nombres premiers, diviseurs, PGCD et décomposition.*

### 1. Multiples et diviseurs
*   Un nombre entier $a$ est un **multiple** de $b$ s'il existe un entier $k$ tel que $a = k \times b$. On dit alors que $b$ est un **diviseur** de $a$.
*   **Critères de divisibilité** :
    *   Par 2 : le chiffre des unités est 0, 2, 4, 6 ou 8 (nombre pair).
    *   Par 3 : la somme de ses chiffres est un multiple de 3.
    *   Par 4 : le nombre formé par ses deux derniers chiffres est un multiple de 4.
    *   Par 5 : le chiffre des unités est 0 ou 5.
    *   Par 9 : la somme de ses chiffres est un multiple de 9.
    *   Par 10 : le chiffre des unités est 0.

### 2. Nombres premiers
*   **Définition** : Un nombre est premier s'il possède **exactement deux diviseurs** : 1 et lui-même.
*   *Attention* : 1 n'est pas premier (il n'a qu'un seul diviseur).
*   **Liste à connaître (jusqu'à 30)** : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.

### 3. Décomposition en facteurs premiers
*   **Théorème** : Tout nombre entier supérieur ou égal à 2 peut se décomposer en un produit de facteurs premiers. Cette décomposition est unique.
*   *Exemple* : $60 = 2 \times 30 = 2 \times 2 \times 15 = 2 \times 2 \times 3 \times 5 = 2^2 \times 3 \times 5$.
*   **Utilité** : Rendre une fraction irréductible en simplifiant les facteurs communs au numérateur et au dénominateur.

### 4. Problèmes d'arithmétique
*   **Partage équitable** : Chercher le plus grand diviseur commun (PGCD) pour faire des lots identiques sans reste.
*   **Synchronisation (engrenages, clignotants)** : Chercher le plus petit multiple commun (PPCM) pour savoir quand deux événements se reproduiront en même temps.

---


### Fiche de Révision : Fractions et Nombres relatifs

*Opérations sur les fractions et règles des signes.*

### 1. Nombres relatifs
*   **Addition** :
    *   Même signe : on garde le signe et on ajoute les distances à zéro (ex: $-3 + (-4) = -7$).
    *   Signes contraires : on prend le signe de celui qui a la plus grande distance à zéro et on soustrait les distances (ex: $-5 + 2 = -3$).
*   **Soustraction** : Soustraire un nombre revient à ajouter son opposé (ex: $5 - (-3) = 5 + 3 = 8$).
*   **Multiplication et Division (Règle des signes)** :
    *   $+\times+ = +$
    *   $-\times- = +$
    *   $+\times- = -$
    *   $-\times+ = -$

### 2. Fractions
*   **Addition et Soustraction** : Il faut **OBLIGATOIREMENT** mettre les fractions au même dénominateur.
    *   $\frac{a}{c} + \frac{b}{c} = \frac{a+b}{c}$
*   **Multiplication** : On multiplie les numérateurs entre eux et les dénominateurs entre eux.
    *   $\frac{a}{b} \times \frac{c}{d} = \frac{a \times c}{b \times d}$
*   **Division** : Diviser par une fraction revient à multiplier par son inverse.
    *   $\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}$

### 3. Priorités opératoires
1.  Parenthèses (les plus intérieures d'abord)
2.  Puissances
3.  Multiplications et Divisions (de gauche à droite)
4.  Additions et Soustractions (de gauche à droite)

---


### Fiche de Révision : Puissances et Racines carrées

*Règles de calcul, écriture scientifique.*

### 1. Puissances d'un nombre
*   **Définition** : $a^n = a \times a \times ... \times a$ ($n$ facteurs).
*   **Cas particuliers** : $a^0 = 1$ (pour $a \neq 0$) et $a^1 = a$.
*   **Exposant négatif** : $a^{-n} = \frac{1}{a^n}$ (c'est l'inverse de $a^n$).

### 2. Règles de calcul
*   Produit : $a^m \times a^n = a^{m+n}$
*   Quotient : $\frac{a^m}{a^n} = a^{m-n}$
*   Puissance de puissance : $(a^m)^n = a^{m \times n}$

### 3. Écriture scientifique
*   **Définition** : Écrire un nombre sous la forme $a \times 10^n$ où :
    *   $a$ est un nombre décimal tel que $1 \le a < 10$ (un seul chiffre non nul avant la virgule).
    *   $n$ est un entier relatif.
*   *Exemple* : $45\,000 = 4.5 \times 10^4$ et $0.0032 = 3.2 \times 10^{-3}$.
*   **Préfixes** : Giga ($10^9$), Méga ($10^6$), Kilo ($10^3$), Milli ($10^{-3}$), Micro ($10^{-6}$), Nano ($10^{-9}$).

### 4. Racines carrées
*   **Définition** : La racine carrée d'un nombre positif $a$, notée $\sqrt{a}$, est le nombre positif dont le carré vaut $a$.
*   **Carrés parfaits à connaître** : $\sqrt{1}=1$, $\sqrt{4}=2$, $\sqrt{9}=3$, $\sqrt{16}=4$, $\sqrt{25}=5$, $\sqrt{36}=6$, $\sqrt{49}=7$, $\sqrt{64}=8$, $\sqrt{81}=9$, $\sqrt{100}=10$, $\sqrt{121}=11$, $\sqrt{144}=12$.

---

## Algèbre


### Fiche de Révision : Calcul littéral

*Développement, factorisation et identités remarquables.*

### 1. Développer et Réduire
*   **Développer** : Transformer un produit en une somme ou une différence.
*   **Simple distributivité** : $k(a+b) = ka + kb$ et $k(a-b) = ka - kb$.
*   **Double distributivité** : $(a+b)(c+d) = ac + ad + bc + bd$.
*   **Réduire** : Regrouper les termes de même nature (les $x^2$ avec les $x^2$, les $x$ avec les $x$, les nombres avec les nombres).
*   *Attention au signe moins devant une parenthèse* : $-(a+b) = -a-b$ et $-(a-b) = -a+b$.

### 2. Factoriser
*   **Factoriser** : Transformer une somme ou une différence en un produit.
*   **Facteur commun** : $ka + kb = k(a+b)$.
    *   *Exemple* : $3x^2 + 6x = 3x(x) + 3x(2) = 3x(x+2)$.

### 3. Identités remarquables
À connaître par cœur dans les deux sens (développement $\rightarrow$ et factorisation $\leftarrow$) :
1.  **Carré d'une somme** : $(a+b)^2 = a^2 + 2ab + b^2$
2.  **Carré d'une différence** : $(a-b)^2 = a^2 - 2ab + b^2$
3.  **Différence de deux carrés** : $(a+b)(a-b) = a^2 - b^2$
    *   *Exemple de factorisation* : $x^2 - 25 = x^2 - 5^2 = (x-5)(x+5)$.

---


### Fiche de Révision : Équations et Inéquations

*Résolution du 1er degré et équations produit nul.*

### 1. Équations du 1er degré
*   **Principe** : Trouver la valeur de l'inconnue ($x$) qui rend l'égalité vraie.
*   **Règles** : On peut additionner, soustraire, multiplier ou diviser par un même nombre (non nul) les deux membres de l'équation.
*   *Méthode* : Regrouper les termes en $x$ d'un côté, les nombres de l'autre.
    *   $3x - 5 = x + 7$
    *   $3x - x = 7 + 5$
    *   $2x = 12$
    *   $x = 6$

### 2. Équations produit nul
*   **Propriété** : Un produit de facteurs est nul si et seulement si au moins l'un des facteurs est nul.
*   **Forme** : $(ax+b)(cx+d) = 0$
*   **Résolution** :
    *   Soit $ax+b = 0 \Rightarrow x = -\frac{b}{a}$
    *   Soit $cx+d = 0 \Rightarrow x = -\frac{d}{c}$
    *   L'équation admet deux solutions.

### 3. Inéquations du 1er degré
*   **Principe** : Trouver toutes les valeurs de $x$ qui vérifient l'inégalité ($<, \le, >, \ge$).
*   **Règle d'or (ATTENTION)** : Si on multiplie ou divise les deux membres d'une inéquation par un nombre **NÉGATIF**, on doit **CHANGER LE SENS** de l'inégalité.
    *   *Exemple* : $-2x > 8 \Rightarrow x < \frac{8}{-2} \Rightarrow x < -4$.
*   **Représentation** : Les solutions sont représentées sur une droite graduée. On hachure la partie qui n'est pas solution. Le crochet tourne le dos aux solutions si l'inégalité est stricte ($<$ ou $>$).

---


### Fiche de Révision : Notion de Fonction

*Généralités, fonctions affines et linéaires.*

### 1. Vocabulaire et Notations
*   Une fonction $f$ associe à un nombre de départ $x$ (l'**antécédent**) un unique nombre d'arrivée noté $f(x)$ (l'**image**).
*   **Notation** : $f : x \mapsto f(x)$ (se lit "$f$ qui à $x$ associe $f(x)$").
*   Un nombre $x$ n'a qu'une seule image. Mais une image peut avoir plusieurs antécédents.

### 2. Représentations
*   **Expression algébrique** : Formule de calcul (ex: $f(x) = x^2 - 3$).
*   **Tableau de valeurs** : Ligne du haut pour les antécédents ($x$), ligne du bas pour les images ($f(x)$).
*   **Représentation graphique** : Courbe formée par l'ensemble des points de coordonnées $(x ; f(x))$.
    *   Axe des abscisses (horizontal) = Antécédents ($x$).
    *   Axe des ordonnées (vertical) = Images ($f(x)$).

### 3. Fonctions Affines et Linéaires
*   **Fonction affine** : $f(x) = ax + b$.
    *   $a$ = coefficient directeur (pente).
    *   $b$ = ordonnée à l'origine (point d'intersection avec l'axe vertical).
    *   Représentation : une **droite**.
*   **Fonction linéaire** : $f(x) = ax$ (cas particulier où $b=0$).
    *   Traduit une situation de **proportionnalité**.
    *   Représentation : une **droite qui passe par l'origine** $(0;0)$.
*   **Fonction constante** : $f(x) = b$ (cas où $a=0$).
    *   Représentation : une droite horizontale.

---

## Organisation de données


### Fiche de Révision : Proportionnalité et Grandeurs

*Pourcentages, ratios, vitesse et masse volumique.*

### 1. Proportionnalité
*   Deux grandeurs sont proportionnelles si on passe de l'une à l'autre en multipliant par un même nombre (le coefficient de proportionnalité).
*   **Produit en croix** : Si $\frac{a}{b} = \frac{c}{d}$, alors $a \times d = b \times c$.

### 2. Pourcentages
*   **Appliquer un pourcentage** : Prendre $t\%$ d'une quantité, c'est la multiplier par $\frac{t}{100}$.
*   **Évolution (Augmentation / Réduction)** :
    *   Augmenter de $t\%$ revient à multiplier par $(1 + \frac{t}{100})$.
    *   Réduire de $t\%$ revient à multiplier par $(1 - \frac{t}{100})$.

### 3. Ratios
*   Partager une quantité selon un ratio $a:b:c$ signifie la diviser en $(a+b+c)$ parts égales.
    *   *Exemple* : Partager 100€ selon le ratio 2:3. Total des parts = 5. Une part = 100/5 = 20€. Le premier a $2 \times 20 = 40$€, le second a $3 \times 20 = 60$€.

### 4. Grandeurs composées
*   **Vitesse moyenne** : $v = \frac{d}{t}$.
    *   Conversions : Pour passer de m/s à km/h, on multiplie par 3.6.
*   **Masse volumique** : $\rho = \frac{m}{V}$. (ex: en kg/m³ ou g/cm³).
*   **Énergie** : $E = P \times t$ (Puissance $\times$ temps).

---


### Fiche de Révision : Statistiques et Probabilités

*Moyenne, médiane, étendue et calculs de probabilités.*

### 1. Statistiques
*   **Moyenne** : $\frac{\text{Somme des valeurs}}{\text{Effectif total}}$.
    *   *Moyenne pondérée* : $\frac{\text{Somme des (Valeur } \times \text{ Effectif)}}{\text{Effectif total}}$.
*   **Médiane** : Valeur qui partage la série **ordonnée** en deux groupes de même effectif (50% des valeurs sont inférieures ou égales à la médiane).
    *   *Effectif impair* (ex: 11) : la médiane est la valeur centrale (la 6ème).
    *   *Effectif pair* (ex: 10) : la médiane est la moyenne des deux valeurs centrales (entre la 5ème et la 6ème).
*   **Étendue** : Différence entre la plus grande et la plus petite valeur. Mesure la dispersion.
*   **Fréquence** : $\frac{\text{Effectif de la valeur}}{\text{Effectif total}}$. Souvent exprimée en pourcentage.

### 2. Probabilités
*   **Vocabulaire** :
    *   *Expérience aléatoire* : On connaît les issues possibles mais on ne peut pas prévoir le résultat.
    *   *Événement* : Ensemble d'issues.
*   **Calcul** : En situation d'équiprobabilité, $P(A) = \frac{\text{Nombre d'issues favorables}}{\text{Nombre total d'issues}}$.
*   **Propriétés** :
    *   $0 \le P(A) \le 1$.
    *   Événement certain : $P = 1$. Événement impossible : $P = 0$.
    *   Événement contraire ($\bar{A}$) : $P(\bar{A}) = 1 - P(A)$.
*   **Expériences à plusieurs épreuves** : Utilisation d'un arbre de probabilités.
    *   La probabilité d'un chemin est le produit des probabilités de ses branches.
    *   La probabilité d'un événement est la somme des probabilités des chemins qui y conduisent.

---

## Géométrie


### Fiche de Révision : Pythagore et Thalès

*Théorèmes, réciproques et contraposées.*

### 1. Théorème de Pythagore
*   **Condition** : S'applique uniquement dans un **triangle rectangle**.
*   **Théorème (Calculer une longueur)** : Le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.
    *   Si ABC est rectangle en A, alors $BC^2 = AB^2 + AC^2$.
*   **Réciproque (Prouver qu'un triangle est rectangle)** : Si le carré du plus grand côté est égal à la somme des carrés des deux autres côtés, alors le triangle est rectangle.
*   **Contraposée (Prouver qu'il n'est pas rectangle)** : Si l'égalité n'est pas vérifiée, le triangle n'est pas rectangle.

### 2. Théorème de Thalès
*   **Condition** : Deux droites sécantes coupées par deux droites **parallèles** (configuration classique ou papillon).
*   **Théorème (Calculer une longueur)** : Si (BM) et (CN) sont sécantes en A et si (MN) // (BC), alors les côtés des triangles AMN et ABC sont proportionnels :
    *   $\frac{AM}{AB} = \frac{AN}{AC} = \frac{MN}{BC}$ (Petit triangle / Grand triangle).
*   **Réciproque (Prouver que des droites sont parallèles)** : Si les points A, M, B et A, N, C sont alignés dans le même ordre, et si $\frac{AM}{AB} = \frac{AN}{AC}$, alors les droites (MN) et (BC) sont parallèles.
*   **Contraposée** : Si les rapports ne sont pas égaux, les droites ne sont pas parallèles.

### 3. Triangles semblables
*   **Définition** : Deux triangles sont semblables si leurs angles sont deux à deux de même mesure.
*   **Propriété** : Si deux triangles sont semblables, alors les longueurs de leurs côtés homologues sont proportionnelles.

---


### Fiche de Révision : Trigonométrie et Transformations

*SOH CAH TOA et isométries/homothéties.*

### 1. Trigonométrie
*   **Condition** : S'applique uniquement dans un **triangle rectangle**.
*   **Formules (Moyen mnémotechnique : SOH CAH TOA)** :
    *   **S**in(angle) = **O**pposé / **H**ypoténuse
    *   **C**os(angle) = **A**djacent / **H**ypoténuse
    *   **T**an(angle) = **O**pposé / **A**djacent
*   **Utilisation** :
    *   *Calculer une longueur* : On connaît un angle et une longueur. On utilise un produit en croix.
    *   *Calculer un angle* : On connaît deux longueurs. On utilise les fonctions inverses de la calculatrice ($\arcsin, \arccos, \arctan$ ou $sin^{-1}, cos^{-1}, tan^{-1}$).

### 2. Transformations du plan
*   **Isométries (conservent les longueurs, angles, aires)** :
    *   *Symétrie axiale* : Effet miroir par rapport à une droite. Inverse l'orientation.
    *   *Symétrie centrale* : Demi-tour (180°) autour d'un point.
    *   *Translation* : Glissement défini par une direction, un sens et une longueur (vecteur).
    *   *Rotation* : Tourniquet défini par un centre, un angle et un sens (horaire ou anti-horaire).
*   **Homothétie (Agrandissement / Réduction)** :
    *   Définie par un centre $O$ et un rapport $k$.
    *   Si $k > 1$ : Agrandissement. Si $0 < k < 1$ : Réduction. Si $k < 0$ : Figure inversée de l'autre côté du centre.
    *   *Propriétés* : Les longueurs sont multipliées par $|k|$, les aires par $k^2$, les volumes par $|k|^3$. Les angles sont conservés.

---


### Fiche de Révision : Espace : Volumes et Repérage

*Calculs de volumes, sections et coordonnées.*

### 1. Volumes des solides
*   **Solides droits (Prisme droit, Cylindre)** :
    *   $V = \text{Aire de la base} \times \text{hauteur}$
*   **Solides "pointus" (Pyramide, Cône de révolution)** :
    *   $V = \frac{\text{Aire de la base} \times \text{hauteur}}{3}$
*   **Sphère et Boule** :
    *   Aire de la sphère = $4 \times \pi \times R^2$
    *   Volume de la boule = $\frac{4}{3} \times \pi \times R^3$

### 2. Sections de solides
*   **Pavé droit** : Section parallèle à une face = rectangle identique. Section parallèle à une arête = rectangle.
*   **Cylindre** : Section parallèle à l'axe = rectangle. Section perpendiculaire à l'axe = disque de même rayon.
*   **Cône et Pyramide** : Section parallèle à la base = réduction de la base.
*   **Sphère** : Section par un plan = cercle.

### 3. Repérage dans l'espace
*   **Dans un pavé droit** : 3 axes (abscisse $x$, ordonnée $y$, altitude $z$). Coordonnées : $(x; y; z)$.
*   **Sur une sphère (Terre)** :
    *   *Latitude* : Angle Nord ou Sud par rapport à l'équateur (de 0° à 90°).
    *   *Longitude* : Angle Est ou Ouest par rapport au méridien de Greenwich (de 0° à 180°).
    *   Coordonnées géographiques : $(\text{Latitude} ; \text{Longitude})$.

---

## Algorithmique


### Fiche de Révision : Algorithmique et Programmation

*Scratch, variables, boucles et conditions.*

### 1. Concepts de base
*   **Algorithme** : Suite logique d'instructions pour résoudre un problème.
*   **Programme** : Traduction de l'algorithme dans un langage (Scratch, Python).
*   **Variable** : Espace mémoire qui stocke une donnée (nombre, texte) pouvant varier (ex: score, temps, compteur).

### 2. Structures de contrôle (Scratch)
*   **Séquence** : Les blocs s'exécutent les uns après les autres, de haut en bas.
*   **Boucles (Itérations)** :
    *   *Répéter X fois* : Boucle inconditionnelle (nombre de tours connu).
    *   *Répéter jusqu'à ce que...* : Boucle conditionnelle (s'arrête quand la condition est vraie).
    *   *Répéter indéfiniment* : Boucle infinie.
*   **Conditions (Tests)** :
    *   *Si [condition] alors [actions]*
    *   *Si [condition] alors [actions 1] sinon [actions 2]*

### 3. Repérage et Géométrie dans Scratch
*   **Repère** : L'écran est un plan cartésien. Le centre est $(0;0)$. L'axe horizontal est $x$ (-240 à 240), l'axe vertical est $y$ (-180 à 180).
*   **Orientation** : 90 = droite, -90 = gauche, 0 = haut, 180 = bas.
*   **Tracé de polygones réguliers** :
    *   Pour tracer un polygone à $n$ côtés, il faut répéter $n$ fois : (Avancer de $L$ ; Tourner de $\frac{360}{n}$ degrés).
    *   *Exemple (Triangle équilatéral)* : Répéter 3 fois (Avancer ; Tourner de 120°).

---

