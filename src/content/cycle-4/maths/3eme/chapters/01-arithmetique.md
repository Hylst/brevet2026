# Arithmétique

<callout type="info" title="Introduction">
L'arithmétique est la branche des mathématiques qui étudie les nombres entiers et leurs propriétés. C'est la science des nombres par excellence ! Elle est essentielle pour simplifier des fractions, résoudre des problèmes de partage ou comprendre le codage informatique.
</callout>

<concept-card title="Le réflexe en Maths" icon="Calculator" description="Au Brevet, toutes les traces de recherche sont prises en compte. **Même si ta démarche n'aboutit pas, écris-la !**" theme="info"></concept-card>

## 1. Les Nombres Premiers : Les briques de l'univers 🧱

Savais-tu que les nombres premiers sont utilisés tous les jours pour sécuriser tes messages WhatsApp ou tes achats en ligne ? Ce sont des nombres "incassables". Découvrons pourquoi !

<arithmetique-svg></arithmetique-svg>

<callout type="info" title="Le saviez-vous ?">
Le plus grand nombre premier connu à ce jour a été découvert fin 2024 et compte plus de 41 millions de chiffres ! Il a fallu des ordinateurs surpuissants tournant pendant des mois pour le trouver.
</callout>

Imagine les nombres premiers comme des blocs de Lego impossibles à casser. Tous les autres nombres sont construits en assemblant ces blocs.

<definition-box term="Nombre premier">

Un nombre est premier s'il possède **exactement deux diviseurs** : 1 et lui-même. <br/>
*Autrement dit : il ne peut être divisé par rien d'autre sans faire de reste.*

</definition-box>

<callout type="warning" title="Le piège classique du Brevet 🚨">

**1 n'est PAS un nombre premier !** Pourquoi ? Parce qu'il n'a qu'un seul diviseur (lui-même). Il lui en faut *exactement* deux. C'est une question piège très fréquente au QCM du Brevet.

</callout>

<flashcard front="Quels sont les nombres premiers jusqu'à 30 ?" back="2, 3, 5, 7, 11, 13, 17, 19, 23, 29. (À connaître par cœur !)"></flashcard>

### 2. Multiples et Diviseurs 🧮

Un nombre entier $a$ est un **multiple** de $b$ s'il existe un entier $k$ tel que $a = k \times b$. On dit alors que $b$ est un **diviseur** de $a$.
*Exemple : 15 est un multiple de 3 car 15 = 5 × 3. Donc 3 est un diviseur de 15.*

<callout type="warning" title="Rappel">
Un nombre pair se termine toujours par 0, 2, 4, 6 ou 8. Tous les nombres pairs (sauf 2) sont divisibles par 2, ils ne peuvent donc **jamais** être des nombres premiers !
</callout>

Pour aller vite au Brevet sans calculatrice, tu dois connaître tes **critères de divisibilité** :

*   **Par 2** : le chiffre des unités est 0, 2, 4, 6 ou 8 (nombre pair).
*   **Par 3** : la somme de ses chiffres est un multiple de 3. *(Ex: 123 -> 1+2+3 = 6, donc divisible par 3)*
*   **Par 4** : le nombre formé par ses deux derniers chiffres est un multiple de 4.
*   **Par 5** : le chiffre des unités est 0 ou 5.
*   **Par 9** : la somme de ses chiffres est un multiple de 9.
*   **Par 10** : le chiffre des unités est 0.

### 3. Décomposition en facteurs premiers 🧩

C'est ici qu'on utilise nos "briques de Lego" ! 
**Théorème** : Tout nombre entier supérieur ou égal à 2 peut se décomposer en un produit de nombres premiers. Et cette décomposition est **unique**.

<method-box  title="Comment décomposer un nombre ?"  steps='["On essaie de diviser le nombre par les nombres premiers dans l&apos;ordre : 2, puis 3, puis 5, etc.", "On continue jusqu&apos;à obtenir 1 comme résultat.", "On écrit le nombre de départ comme la multiplication de tous les diviseurs trouvés."]'  example="Décomposons 60 :<br/>60 ÷ <b>2</b> = 30<br/>30 ÷ <b>2</b> = 15<br/>15 ÷ <b>3</b> = 5<br/>5 ÷ <b>5</b> = 1<br/>Donc : 60 = 2 × 2 × 3 × 5 = <b>2² × 3 × 5</b>"></method-box>

**À quoi ça sert ?** Principalement à rendre une fraction irréductible très facilement en barrant les nombres en commun en haut et en bas !
### 4. Les problèmes d'arithmétique au Brevet 🏆

Dans les sujets du Brevet, l'arithmétique se cache souvent dans des problèmes concrets. Voici les deux grands classiques :

*   **Le problème du partage équitable (PGCD)** : On te demande de faire des lots identiques (ex: des bouquets de fleurs, des sachets de bonbons) en utilisant *tout* le matériel, sans reste. Tu dois chercher le Plus Grand Commun Diviseur.
*   **Le problème de la synchronisation (PPCM)** : On te parle d'engrenages qui tournent, de bus qui partent à des heures différentes, ou de clignotants. On te demande *quand* les événements vont se reproduire en même temps. Tu dois chercher le Plus Petit Commun Multiple.

## 📝 Entraînement

<mini-quiz  question="Le nombre 9 est-il un nombre premier ?"  options='["Oui","Non"]'  correctAnswer="1"  explanation="Non ! 9 peut être divisé par 1 et par 9, MAIS AUSSI par 3 (3 × 3 = 9). Il a donc 3 diviseurs, ce n'est pas un nombre premier."></mini-quiz>

<mini-quiz  question="Le nombre 345 est-il divisible par 3 ?"  options='["Oui","Non"]'  correctAnswer="0"  explanation="Oui ! Faisons la somme : 3 + 4 + 5 = 12. Comme 12 est dans la table de 3, alors 345 est divisible par 3."></mini-quiz>

<mini-quiz  question="Si je veux répartir 24 roses et 36 tulipes dans des bouquets identiques en utilisant TOUTES les fleurs, quel nombre dois-je calculer ?"  options='["Le nombre de pétales","Le Plus Petit Commun Multiple (PPCM)","Le Plus Grand Commun Diviseur (PGCD)"]'  correctAnswer="2"  explanation="Il s'agit d'un problème de partage équitable sans reste pour trouver le plus grand nombre de bouquets possibles : c'est le rôle du PGCD !"></mini-quiz>

<mini-quiz question="Quel est le seul nombre premier qui soit pair ?" options='["2","4","6","8"]' correctAnswer="0" explanation="2 est le seul nombre premier pair. Tous les autres nombres pairs sont divisibles par 2, ils ont donc au moins trois diviseurs : 1, eux-mêmes et 2."></mini-quiz>

<mini-quiz question="Un nombre est divisible par 9 si :" options='["Il se termine par 9","La somme de ses chiffres est un multiple de 3","La somme de ses chiffres est un multiple de 9","Il est impair"]' correctAnswer="2" explanation="Le critère de divisibilité par 9 est identique à celui par 3 : on additionne les chiffres et on vérifie si le résultat est dans la table de 9."></mini-quiz>

<brevet-checklist items='[ "Je connais la liste des nombres premiers jusqu&apos;à 30.", "Je sais justifier pourquoi un nombre n&apos;est pas premier.", "Je connais mes critères de divisibilité (2, 3, 5, 9, 10).", "Je sais décomposer un nombre en produit de facteurs premiers." ]'></brevet-checklist>
