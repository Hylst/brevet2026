# Puissances et Racines carrées

<callout type="info" title="Introduction">
Comment écrire des nombres gigantesques ou microscopiques sans se perdre dans les zéros ? Les puissances sont le raccourci idéal des mathématiques pour simplifier les calculs. En parallèle, les racines carrées permettent de faire le chemin inverse, des outils indispensables notamment pour le fameux théorème de Pythagore !
</callout>

<concept-card title="Le réflexe en Maths" icon="Calculator" description="Au Brevet, toutes les traces de recherche sont prises en compte. **Même si ta démarche n'aboutit pas, écris-la !**" theme="info"></concept-card>

## 1. Les Puissances : Le raccourci des multiplications 🚀

Imagine que tu doives écrire $2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2$. C'est long, non ? Les puissances ont été inventées par les mathématiciens pour être fainéants (et efficaces) ! On écrit simplement $2^7$.

<callout type="info" title="Le saviez-vous ?">
Le mot "Googol" (qui a inspiré le nom d'un célèbre moteur de recherche) désigne le nombre $10^{100}$, c'est-à-dire un 1 suivi de cent zéros. C'est un nombre plus grand que le nombre d'atomes dans l'univers observable !
</callout>

*   **Définition** : $a^n = a \times a \times ... \times a$ ($n$ fois).
*   **Cas particuliers (à connaître par cœur)** : 
    *   $a^0 = 1$ (N'importe quel nombre à la puissance 0 donne 1 !)
    *   $a^1 = a$

<callout type="warning" title="Le piège classique du Brevet 🚨">

Ne confonds jamais $3^2$ et $3 \times 2$ ! <br/>
$3^2 = 3 \times 3 = 9$<br/>
$3 \times 2 = 6$

</callout>

Et si l'exposant est négatif ? Cela ne veut pas dire que le nombre est négatif ! Cela veut dire qu'on prend **l'inverse**.
*Exemple :* $10^{-3} = \frac{1}{10^3} = \frac{1}{1000} = 0,001$.
### 2. Les 3 règles d'or des calculs 🥇

Quand tu multiplies ou divises des puissances qui ont la **même base** (le même nombre en bas), les exposants (les nombres en haut) interagissent entre eux de manière très simple :

<callout type="warning" title="Rappel">
Ces règles ne fonctionnent QUE si la base est la même ! On ne peut pas simplifier $2^3 \times 5^4$ avec ces formules.
</callout>

<formula-box title="1. Quand on multiplie, on ADDITIONNE les exposants">

$$ a^m \times a^n = a^{m+n} $$

</formula-box>

<formula-box title="2. Quand on divise, on SOUSTRAIT les exposants">

$$ \frac{a^m}{a^n} = a^{m-n} $$

</formula-box>

<formula-box title="3. Puissance de puissance, on MULTIPLIE les exposants">

$$ (a^m)^n = a^{m \times n} $$

</formula-box>

### 3. L'écriture scientifique : Le langage des astronomes 🔭

L'écriture scientifique sert à écrire des nombres gigantesques (la distance Terre-Soleil) ou minuscules (la taille d'un virus) de façon lisible.

<scientific-notation-svg></scientific-notation-svg>

<method-box  title="Comment écrire un nombre en écriture scientifique ?"  steps='["Placer la virgule pour n&apos;avoir qu&apos;UN SEUL chiffre (différent de zéro) avant la virgule.", "Compter de combien de rangs la virgule a été décalée.", "Si on a décalé vers la gauche (grand nombre), l&apos;exposant de 10 est positif. Si on a décalé vers la droite (petit nombre), l&apos;exposant est négatif."]'  example="<b>45 000</b> devient <b>4,5 × 10⁴</b> (la virgule a bougé de 4 crans vers la gauche).<br/><b>0,0032</b> devient <b>3,2 × 10⁻³</b> (la virgule a bougé de 3 crans vers la droite)."></method-box>

<flashcard front="Quels sont les préfixes pour 10³ et 10⁻³ ?" back="10³ = Kilo (mille) et 10⁻³ = Milli (millième)"></flashcard>

### 4. Racines carrées : Le chemin inverse 🔄

La racine carrée, c'est l'opération inverse du carré. Si tu sais que $5^2 = 25$, alors tu sais que la racine carrée de 25 est 5 ! On le note $\sqrt{25} = 5$.

<callout type="tip" title="Les carrés parfaits à connaître par cœur 🧠">

Pour aller vite au Brevet (surtout pour le théorème de Pythagore), connais ces résultats :
$\sqrt{1}=1$, $\sqrt{4}=2$, $\sqrt{9}=3$, $\sqrt{16}=4$, $\sqrt{25}=5$, $\sqrt{36}=6$, $\sqrt{49}=7$, $\sqrt{64}=8$, $\sqrt{81}=9$, $\sqrt{100}=10$, $\sqrt{121}=11$, $\sqrt{144}=12$.

</callout>

## 📝 Entraînement

<mini-quiz  question="Simplifie l'expression : 10⁴ × 10³"  options='["10¹²","10⁷","100⁷","20⁷"]'  correctAnswer="1"  explanation="Quand on multiplie des puissances de même base, on additionne les exposants : 4 + 3 = 7. Donc 10⁷."></mini-quiz>

<mini-quiz  question="Parmi ces nombres, lequel est correctement écrit en écriture scientifique ?"  options='["12,3 × 10²","1,23 × 10³","0,123 × 10⁴"]'  correctAnswer="1"  explanation="L'écriture scientifique n'autorise qu'un seul chiffre (qui ne soit pas un zéro) avant la virgule. 1,23 remplit cette condition parfaitement !"></mini-quiz>

<mini-quiz  question="Si je sais que 15² = 225, que vaut la racine carrée de 225 ?"  options='["15","112,5","450"]'  correctAnswer="0"  explanation="Puisque la racine carrée est le mouvement contraire (ou l'inverse) de la fonction carré, si 15² = 225, alors √(225) est 15."></mini-quiz>

<mini-quiz question="Que vaut 5⁰ ?" options='["0","5","1","50"]' correctAnswer="2" explanation="Toute puissance d'exposant 0 d'un nombre non nul est égale à 1. C'est une règle fondamentale."></mini-quiz>

<mini-quiz question="Quelle est l'écriture scientifique de 0,0045 ?" options='["45 × 10⁻⁴","4,5 × 10⁻³","4,5 × 10³","0,45 × 10⁻²"]' correctAnswer="1" explanation="On déplace la virgule de 3 rangs vers la droite pour avoir 4,5. Comme on va vers la droite (nombre petit), l'exposant est -3."></mini-quiz>

<mini-quiz question="Calculez la racine carrée de 81." options='["7","8","9","40,5"]' correctAnswer="2" explanation="Puisque 9 × 9 = 81 (ou 9² = 81), alors la racine carrée de 81 est 9."></mini-quiz>

<brevet-checklist items='[ "Je sais que n&apos;importe quel nombre à la puissance 0 vaut 1.", "Je connais les 3 formules de calcul sur les puissances.", "Je sais transformer un nombre classique en écriture scientifique.", "Je connais mes carrés parfaits jusqu&apos;à 144." ]'></brevet-checklist>
