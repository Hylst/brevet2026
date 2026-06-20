# L'énergie et la puissance électrique

<electric-circuit-svg></electric-circuit-svg>

<callout type="info" title="Introduction">
L'électricité est au cœur de notre vie quotidienne. Pour la maîtriser et réussir les exercices du Brevet, il faut comprendre le fonctionnement des circuits (série et dérivation), les grandeurs électriques (tension, intensité, résistance) et savoir calculer l'énergie consommée par un appareil.
</callout>

<concept-card title="Démarche Scientifique" icon="FlaskConical" description="Lis toujours l'introduction de l'énoncé. Elle contient le **problème à résoudre** et justifie toutes les questions qui suivent." theme="info"></concept-card>

## 1. Courant électrique et dipôles ⚡

Le **courant électrique** est un déplacement d'électrons (charges négatives) dans un circuit fermé. Par convention, on dit qu'il circule de la borne positive (+) vers la borne négative (-) du générateur.

*   **Conducteurs** : matériaux qui laissent passer le courant (métaux, eau salée, graphite).
*   **Isolants** : matériaux qui ne laissent pas passer le courant (plastique, verre, bois, caoutchouc).

Un **dipôle** est un composant électrique possédant deux bornes. Exemples : générateur (pile), lampe, moteur, diode, résistance, interrupteur.

## 2. Montages en série et en dérivation 🔌

Il existe deux façons de brancher les dipôles dans un circuit.

| Montage | Caractéristique | Exemple |
|---------|----------------|---------|
| **En série** | Une seule boucle. Si un dipôle tombe en panne, tout le circuit s'arrête. | Guirlande de Noël ancienne |
| **En dérivation** | Au moins deux boucles. Chaque récepteur est indépendant. | Prise électrique chez toi |

<callout type="info" title="Astuce pour le Brevet">
Regarde si tu peux allumer/éteindre chaque lampe indépendamment avec un interrupteur. Si oui, le circuit est en dérivation. Si un seul interrupteur coupe tout, il est en série.
</callout>

<flashcard front="Dans un circuit en série, si une lampe grille, que se passe-t-il ?" back="Toutes les autres lampes s'éteignent ! Le circuit est ouvert, le courant ne circule plus car il n'y a qu'une seule boucle."></flashcard>

## 3. Intensité et Tension 📏

*   **L'Intensité ($I$)** : C'est le "débit" des électrons dans le fil. Elle se mesure en **Ampères (A)** avec un **ampèremètre** branché en **série**.
*   **La Tension ($U$)** : C'est la "pression" qui pousse les électrons. Elle se mesure en **Volts (V)** avec un **voltmètre** branché en **dérivation** (parallèle).

**Lois à connaître absolument :**

| Grandeur | Circuit en série | Circuit en dérivation |
|----------|-----------------|----------------------|
| **Tension ($U$)** | Loi d'additivité : $U_G = U_1 + U_2 + \dots$ | Loi d'unicité : $U_G = U_1 = U_2 = \dots$ |
| **Intensité ($I$)** | Loi d'unicité : $I_G = I_1 = I_2 = \dots$ | Loi d'additivité : $I_G = I_1 + I_2 + \dots$ |

<callout type="warning" title="Attention à ne pas inverser !">
Les lois sont inversées entre la tension et l'intensité selon le montage !
*   En série : les tensions s'additionnent, l'intensité est la même partout.
*   En dérivation : les intensités s'additionnent, la tension est la même partout.
</callout>

## 4. La Loi d'Ohm 🔗

Pour un conducteur ohmique (une résistance), la tension à ses bornes est proportionnelle à l'intensité du courant qui le traverse.

<formula-box title="La Loi d'Ohm">
$$U = R \times I$$
$U$ en Volts, $I$ en Ampères, $R$ en **Ohms ($\Omega$)**.
</formula-box>

<mini-quiz question="Une résistance de 100 Ω est traversée par un courant de 0,23 A. Quelle est la tension à ses bornes ?" options='["0,23 V","100 V","23 V","230 V"]' correctAnswer="2" explanation="U = R × I = 100 × 0,23 = 23 V. Facile avec la loi d'Ohm !"></mini-quiz>

## 5. Puissance et Énergie Électrique 💡

La **puissance ($P$)** d'un appareil indique sa capacité à transférer de l'énergie rapidement. Elle se mesure en **Watts (W)**.
$$P = U \times I$$

L'**énergie électrique ($E$)** consommée dépend de la puissance et de la durée d'utilisation.

<formula-box title="Calcul de l'Énergie">
$$E = P \times t$$
Si $P$ en Watts et $t$ en secondes → $E$ en **Joules (J)**.
Si $P$ en kiloWatts (kW) et $t$ en heures (h) → $E$ en **kilowattheures (kWh)**.
</formula-box>

<callout type="info" title="Le saviez-vous ?">
Un appareil en veille continue de consommer de l'énergie ! Une télévision en veille (5 W) consomme environ 44 kWh par an. Pour économiser, débranche ou éteins complètement tes appareils.
</callout>

## 📝 Entraînement

<mini-quiz question="Si un radiateur de 2000 W fonctionne pendant 3 heures, quelle énergie a-t-il consommé ?" options='["6000 Joules","6000 kWh","6 kWh","2003 Watts"]' correctAnswer="2" explanation="2000 W = 2 kW. E = 2 kW × 3 h = 6 kWh."></mini-quiz>

<mini-quiz question="Dans un circuit en dérivation contenant deux lampes, la lampe A grille. Que se passe-t-il ?" options='["La lampe B s&apos;éteint aussi","La lampe B brille plus fort","La lampe B reste allumée normalement","Le générateur explose"]' correctAnswer="2" explanation="En dérivation, chaque lampe a sa propre boucle. Si une lampe grille, les autres continuent de fonctionner normalement."></mini-quiz>

<mini-quiz question="On mesure l'intensité dans un circuit en série : elle vaut 0,5 A. Si on ajoute une deuxième lampe en série, que devient l'intensité ?" options='["Elle reste à 0,5 A","Elle augmente","Elle diminue","Elle devient nulle"]' correctAnswer="2" explanation="Attention, c'est un piège ! En série, l'intensité est la même partout... mais ajouter une lampe augmente la résistance totale du circuit, ce qui fait DIMINUER l'intensité délivrée par le générateur. La loi d'unicité dit que I est la même dans tout le circuit, mais sa valeur dépend de la résistance totale."></mini-quiz>

<brevet-checklist items='[ "Je sais faire la différence entre un montage en série et en dérivation.", "Je connais les lois d&apos;additivité et d&apos;unicité pour U et I.", "Je sais utiliser P = U × I et E = P × t.", "Je connais la loi d&apos;Ohm (U = R × I).", "Je connais les unités : Volts, Ampères, Watts, Joules, kWh, Ohms." ]'></brevet-checklist>
