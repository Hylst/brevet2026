# Équations et Inéquations

<equations-balance-svg></equations-balance-svg>

<callout type="info" title="Introduction">
Les équations sont le cœur de l'algèbre ! Elles permettent de trouver la valeur d'une inconnue (souvent appelée $x$) pour qu'une égalité soit vérifiée. Résoudre des équations et des inéquations te sera utile non seulement pour le Brevet, mais aussi pour décrypter de nombreux problèmes scientifiques ou économiques.
</callout>

<callout type="info" title="Le saviez-vous ?">
Le signe "=" a été inventé en 1557 par le mathématicien gallois Robert Recorde. Il a choisi deux lignes parallèles car, selon lui, "rien ne peut être plus égal que deux lignes parallèles".
</callout>

<concept-card title="Le réflexe en Maths" icon="Calculator" description="Au Brevet, toutes les traces de recherche sont prises en compte. **Même si ta démarche n'aboutit pas, écris-la !**" theme="info"></concept-card>

## 1. Les Équations : L'art de la balance ⚖️

Une équation, c'est comme une balance à plateaux en parfait équilibre. Le but du jeu est de trouver le poids de la boîte mystère (qu'on appelle $x$). 
Pour garder l'équilibre, **tout ce que tu fais d'un côté, tu dois le faire de l'autre !**

<method-box  title="Résoudre une équation du 1er degré"  steps='["Passer tous les termes avec des x d&apos;un côté (souvent à gauche) en changeant leur signe.", "Passer tous les nombres normaux de l&apos;autre côté en changeant leur signe.", "Réduire (calculer) chaque côté.", "Diviser par le nombre collé à x pour trouver la réponse finale."]' example="Résolvons : <b>3x - 5 = x + 7</b><br/>1. On passe le x à gauche : 3x <b>- x</b> - 5 = 7<br/>2. On passe le -5 à droite : 3x - x = 7 <b>+ 5</b><br/>3. On réduit : <b>2x = 12</b><br/>4. On divise par 2 : x = 12 / 2<br/><b>x = 6</b>"></method-box>

### 2. L'Équation Produit Nul : Le classique du Brevet 🎯

C'est l'équation la plus fréquente au Brevet. Elle ressemble à ça : $(2x - 4)(x + 3) = 0$.
Ne t'amuse **surtout pas** à développer ! C'est un piège. Utilise cette règle magique :

<definition-box term="La règle du produit nul">

Si une multiplication donne zéro, ça veut dire qu'**au moins l'un des morceaux vaut zéro**.

</definition-box>

<method-box  title="Résoudre (2x - 4)(x + 3) = 0"  steps='["On coupe l&apos;équation en deux petites équations très simples.", "On résout la première.", "On résout la deuxième.", "On écrit la phrase de conclusion avec les deux solutions."]' example="Soit <b>2x - 4 = 0</b><br/>2x = 4<br/>x = 4/2 = <b>2</b><br/><br/>Soit <b>x + 3 = 0</b><br/><b>x = -3</b><br/><br/><i>Les solutions de l'équation sont 2 et -3.</i>"></method-box>
### 3. Les Inéquations : Presque comme les équations, MAIS... ⚠️

Une inéquation, c'est quand la balance penche d'un côté ($<, \le, >, \ge$). On la résout exactement comme une équation normale, **sauf à la toute dernière étape**.

<callout type="warning" title="Le piège mortel du Brevet 🚨">

Si, à la fin, tu divises ou multiplies par un nombre **NÉGATIF**, tu DOIS **CHANGER LE SENS** du signe !<br/><br/>
*Exemple* : $-2x > 8$<br/>
Je dois diviser par $-2$ (qui est négatif).<br/>
Donc le $>$ se retourne et devient $<$ :<br/>
$x < \frac{8}{-2}$<br/>
$x < -4$

</callout>

**Représentation sur une droite** :
Au Brevet, on te demandera souvent de dessiner la solution.
1. Hachure la zone qui n'est **pas** la solution (la zone interdite).
2. Place un crochet sur le nombre.
   * Si c'est $\le$ ou $\ge$ (ou égal) : le crochet "mange" la zone solution (il est content).
   * Si c'est $<$ ou $>$ (strict) : le crochet tourne le dos à la zone solution (il est fâché).

<flashcard front="Que se passe-t-il si je divise une inéquation par 3 ?" back="Rien de spécial ! 3 est positif, donc le signe de l'inéquation ne bouge pas. On ne retourne le signe QUE si on divise par un nombre négatif."></flashcard>

### 4. Systèmes d'équations à 2 inconnues 🔗

Un système, c'est deux équations avec **deux inconnues** (souvent $x$ et $y$). On cherche le couple $(x ; y)$ qui vérifie les **deux équations en même temps**.

$$ \begin{cases} 2x + y = 7 \\ x - y = 2 \end{cases} $$

2 méthodes sont possibles au Brevet :

<method-box title="Méthode 1 : Par substitution" steps='["Isolet une inconnue dans une équation (ex: y = 7 - 2x).", "Remplace (substitue) dans l&apos;autre équation.", "Résous l&apos;équation à une inconnue.", "Remplace pour trouver la deuxième inconnue."]' example="Système :<br/>(1) 2x + y = 7<br/>(2) x - y = 2<br/><br/>1. De (1) : y = 7 - 2x<br/>2. Dans (2) : x - (7 - 2x) = 2<br/>3. x - 7 + 2x = 2 → 3x = 9 → x = <b>3</b><br/>4. y = 7 - 2×3 = 7 - 6 = <b>1</b><br/>Solution : (3 ; 1)"></method-box>

<method-box title="Méthode 2 : Par combinaison (addition)" steps='["Multiplie les équations pour avoir le même coefficient devant x ou y.", "Ajoute ou soustrait les deux équations pour éliminer une inconnue.", "Résous l&apos;équation restante.", "Remplace pour trouver la deuxième inconnue."]' example="Même système :<br/>2x + y = 7<br/>x - y = 2<br/><br/>1. On additionne les deux : les y s&apos;annulent<br/>2. (2x + y) + (x - y) = 7 + 2<br/>3. 3x = 9 → x = <b>3</b><br/>4. 2×3 + y = 7 → y = 7 - 6 = <b>1</b><br/>Solution : (3 ; 1)"></method-box>

<callout type="warning" title="Attention à la rédaction !">
Au Brevet, pour un système, **on attend une phrase de conclusion claire** : "Les solutions du système sont $x = ...$ et $y = ...$" ou "Le couple solution est $(... ; ...)$". N'oublie surtout pas de vérifier en remplaçant dans les équations de départ !
</callout>

## 📝 Entraînement

<mini-quiz  question="Si 4x = 20, que vaut x ?"  options='["16","5","24","80"]'  correctAnswer="1"  explanation="On divise les deux côtés par 4. Donc x = 20 / 4 = 5."></mini-quiz>

<mini-quiz  question="Soit l'inéquation -3x < 9. Quelle est la solution ?"  options='["x < -3","x > -3","x > 3"]' 
  correctAnswer="1" 
  explanation="On divise par un nombre négatif (-3), on doit donc retourner le signe ! 9 / -3 = -3. Donc x > -3."></mini-quiz>

<mini-quiz  question="Si le crochet 'tourne le dos' à la zone solution, qu'est-ce que cela signifie ?"  options='["La solution inclut ce nombre (ex: x ≥ 5, donc x peut être 5)","La solution exclut ce nombre (ex: x > 5, donc x ne peut pas être 5)"]' 
  correctAnswer="1" 
  explanation="C'est ce qu'on appelle une inéquation 'stricte'. Si x > 5, x doit être strictement plus grand que 5, 5 n'est pas permis."></mini-quiz>

<mini-quiz question="Quelle est la solution de l'équation 3x + 2 = 11 ?" options='["x = 2","x = 3","x = 4","x = 9"]' correctAnswer="1" explanation="3x = 11 - 2 => 3x = 9 => x = 9/3 = 3."></mini-quiz>

<mini-quiz question="Si on multiplie ou divise une inéquation par un nombre NÉGATIF, alors :" options='["Le signe ne change pas","Le signe change de sens (ex: < devient >)","On ajoute un zéro","Le résultat est forcément négatif"]'
  correctAnswer="1"
  explanation="C'est la règle cruciale des inéquations : multiplier ou diviser par un nombre négatif inverse l'ordre."></mini-quiz>

<mini-quiz question="Résous par substitution : { y = 2x, x + y = 9 }" options='["(3 ; 6)","(2 ; 4)","(6 ; 3)","(4 ; 8)"]' correctAnswer="0" explanation="On remplace y par 2x dans la 2ème : x + 2x = 9 → 3x = 9 → x = 3. y = 2×3 = 6. Solution : (3 ; 6)."></mini-quiz>

<mini-quiz question="Quel est l'avantage de la méthode par combinaison quand les équations sont : x + y = 10 et x - y = 4 ?" options='["On peut les additionner pour éliminer y immédiatement","On doit multiplier par 2","On ne peut pas utiliser la combinaison","On doit d&apos;abord isoler x"]' correctAnswer="0" explanation="En additionnant : (x + y) + (x - y) = 10 + 4 → 2x = 14 → x = 7. Puis y = 10 - 7 = 3. Simple et rapide !"></mini-quiz>

<mini-quiz question="Quel couple vérifie le système { 2x + 3y = 12, x - y = 1 } ?" options='["(3 ; 2)","(2 ; 3)","(5 ; 4)","(4 ; 5)"]' correctAnswer="0" explanation="De la 2ème : x = y + 1. Dans la 1ère : 2(y+1) + 3y = 12 → 2y + 2 + 3y = 12 → 5y = 10 → y = 2. x = 2 + 1 = 3."></mini-quiz>

<brevet-checklist items='[ "Je sais résoudre une équation simple (ax + b = cx + d).", "Je connais la phrase magique pour l&apos;équation produit nul.", "Je n&apos;oublie pas de retourner le signe si je divise une inéquation par un nombre négatif.", "Je sais représenter les solutions d&apos;une inéquation sur une droite graduée.", "Je sais résoudre un système par substitution et par combinaison.", "Je n&apos;oublie pas la phrase de conclusion : Le couple solution est (... ; ...)." ]'></brevet-checklist>
