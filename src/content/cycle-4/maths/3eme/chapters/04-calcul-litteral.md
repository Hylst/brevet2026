# Calcul littéral

<literal-math-svg></literal-math-svg>

<callout type="info" title="Introduction">
Le calcul littéral remplace les nombres par des lettres (comme $x$ ou $y$). Cela peut paraître abstrait, mais c'est le seul moyen d'écrire des formules générales, de prouver des théories mathématiques et de résoudre des équations. Bienvenue dans la cour des grands de l'algèbre !
</callout>

<callout type="info" title="Le saviez-vous ?">
Le mathématicien français François Viète (au 16ème siècle) est l'un des premiers à avoir utilisé des lettres pour représenter des nombres inconnus. Avant lui, les mathématiciens écrivaient toutes les équations avec des phrases entières !
</callout>

<concept-card title="Le réflexe en Maths" icon="Calculator" description="Au Brevet, toutes les traces de recherche sont prises en compte. **Même si ta démarche n'aboutit pas, écris-la !**" theme="info"></concept-card>

## 1. Développer et Réduire : Le grand déballage 📦

Le calcul littéral (avec des lettres comme $x$) sert à écrire des formules qui marchent tout le temps. 
**Développer**, c'est comme ouvrir des paquets cadeaux : on transforme une multiplication (les paquets) en une grande addition (le contenu étalé sur la table).

*   **Simple distributivité (Le facteur distribue le courrier)** : 
    $k(a+b) = k \times a + k \times b$
*   **Double distributivité (Tout le monde serre la main à tout le monde)** : 
    $(a+b)(c+d) = a \times c + a \times d + b \times c + b \times d$

<callout type="warning" title="Le piège classique du Brevet 🚨">

**Le signe MOINS devant une parenthèse !** <br/>
Quand il y a un $-$ devant une parenthèse, il change TOUS les signes à l'intérieur quand on l'enlève.<br/>
$-(x + 3) = -x - 3$<br/>
$-(x - 5) = -x + 5$

</callout>

**Réduire**, c'est ranger sa chambre après avoir tout déballé : on met les $x^2$ dans le tiroir des $x^2$, les $x$ dans le tiroir des $x$, et les nombres normaux ensemble. On ne mélange jamais les $x^2$ et les $x$ !

<callout type="warning" title="Rappel">
$x + x = 2x$ (une pomme plus une pomme font deux pommes).
Mais $x \times x = x^2$ (c'est l'aire d'un carré de côté x). Ne confonds pas les deux !
</callout>

### 2. Factoriser : Faire les paquets cadeaux 🎁

Factoriser, c'est l'inverse de développer. On a une grande addition étalée sur la table, et on veut la ranger dans des paquets (des parenthèses) avec une multiplication devant.

<method-box  title="Comment factoriser avec un facteur commun ?"  steps='["Chercher le &quot;facteur commun&quot; (la chose qui est présente dans chaque terme de l&apos;addition).", "L&apos;écrire une seule fois au début et ouvrir une grande parenthèse.", "Mettre tout ce qui reste à l&apos;intérieur de la parenthèse."]'  example="Factorisons : $3x^2 + 6x$<br/>1. Le facteur commun est $3x$ car $3x^2 = \mathbf{3x} \times x$ et $6x = \mathbf{3x} \times 2$.<br/>2. On écrit $\mathbf{3x}(...)$<br/>3. On met le reste : $\mathbf{3x}(x + 2)$"></method-box>

### 3. Les Identités Remarquables : Les raccourcis secrets 🕵️‍♂️

Parfois, on n'a pas de facteur commun visible. C'est là qu'interviennent les identités remarquables. Ce sont 3 formules magiques à connaître **par cœur** pour le Brevet. Elles marchent dans les deux sens (pour développer vite, ou pour factoriser).

<formula-box title="1. Carré d'une somme">

$$ (a+b)^2 = a^2 + 2ab + b^2 $$

</formula-box>

<formula-box title="2. Carré d'une différence">

$$ (a-b)^2 = a^2 - 2ab + b^2 $$

</formula-box>

<formula-box title="3. Différence de deux carrés (La plus fréquente !)">

$$ (a+b)(a-b) = a^2 - b^2 $$

</formula-box>

<flashcard front="Comment factoriser x² - 25 ?" back="C'est la 3ème identité remarquable ! x² - 25 = x² - 5². Donc ça donne (x - 5)(x + 5)."></flashcard>

## 📝 Entraînement

<mini-quiz  question="Réduis l'expression : 3x² + 2x - x² + 5"  options='["5x² + 5","2x² + 2x + 5","4x² + 7x","9x"]'  correctAnswer="1"  explanation="On regroupe les x² : 3x² - 1x² = 2x². Le reste ne change pas car on ne peut pas les mélanger. Résultat : 2x² + 2x + 5."></mini-quiz>

<mini-quiz  question="Quelle est cette expression sous sa forme factorisée : 5x + 15 ?"  options='["5(x + 3)","15x","5(x + 15)"]'  correctAnswer="0"  explanation="Le chiffre 5 et le nombre 15 se trouvent tous les deux dans la table de 5. 5 est donc notre facteur commun commun. Il nous reste x et 3 à remettre dans la parenthèse : 5(x + 3) !"></mini-quiz>

<mini-quiz  question="En utilisant les identités remarquables, quel est le développement direct de (x + 4)² ?"  options='["x² + 16","x² + 4x + 16","x² + 8x + 16"]'  correctAnswer="2"  explanation="C'est la première identité ! a² + 2ab + b². Ici, a=x et b=4. Cela donne x² + 2(x)(4) + 4² = x² + 8x + 16."></mini-quiz>

<mini-quiz question="Développez l'expression : 3(x - 4)" options='["3x - 4","3x - 12","3x + 12","x - 12"]' correctAnswer="1" explanation="On distribue le 3 : 3 × x - 3 × 4 = 3x - 12."></mini-quiz>

<mini-quiz question="Réduisez l'expression : 2x + 5 + 4x - 2" options='["6x + 3","6x + 7","8x - 3","2x + 3"]' correctAnswer="0" explanation="On regroupe les termes semblables : 2x + 4x = 6x et 5 - 2 = 3. Le résultat est 6x + 3."></mini-quiz>

<mini-quiz question="Quelle est la forme développée de (x + 3)² ?" options='["x² + 9","x² + 6x + 9","x² + 3x + 9","2x + 6"]' correctAnswer="1" explanation="On utilise l'identité remarquable (a+b)² = a² + 2ab + b². Ici a=x et b=3, donc x² + 2×x×3 + 3² = x² + 6x + 9."></mini-quiz>

<brevet-checklist items='[ "Je sais développer avec la double distributivité.", "Je sais réduire une expression sans mélanger les x² et les x.", "Je sais changer les signes quand il y a un moins devant une parenthèse.", "Je connais mes 3 identités remarquables par cœur." ]'></brevet-checklist>
