# Mécanismes de transmission et transformation de mouvements ⚙️

<callout type="info" title="Introduction">
Dans un objet technique, il faut souvent transmettre un mouvement d'une pièce à une autre, ou transformer un type de mouvement en un autre. Les **mécanismes** sont les solutions techniques qui réalisent ces fonctions.
</callout>

<concept-card title="Transmission ≠ Transformation" icon="ArrowLeftRight" description="La **transmission** conserve le type de mouvement (ex: rotation → rotation). La **transformation** change le type de mouvement (ex: rotation → translation)." theme="primary"></concept-card>

## 1. La transmission de mouvement (rotation → rotation)

### Engrenages

Les engrenages sont des roues dentées qui s'engrènent entre elles. Quand une roue tourne, elle entraîne l'autre en sens inverse.

*   **Engrenage simple** : Deux roues dentées en contact direct. La plus petite s'appelle le **pignon**, la plus grande la **roue**.
*   **Rapport de transmission** $= \frac{\text{Nombre de dents de la roue menée}}{\text{Nombre de dents de la roue menante}}$
*   Si $Z_1 = 20$ dents et $Z_2 = 60$ dents, le rapport est $60/20 = 3$. La roue menée tourne 3 fois moins vite mais avec 3 fois plus de force (**réducteur**).
*   **Engrenage avec chaîne** (vélo) : Les roues dentées sont reliées par une chaîne, ce qui permet d'éloigner les axes.

<formula-box title="Rapport de transmission">
$$R = \frac{Z_{\text{menée}}}{Z_{\text{menante}}} = \frac{N_{\text{menante}}}{N_{\text{menée}}}$$

Avec $Z$ le nombre de dents et $N$ la vitesse de rotation (en tours/minute).

*   $R > 1$ : **Réducteur** (moins vite, plus de force) — ex: un treuil, un vélo en montée.
*   $R < 1$ : **Multiplicateur** (plus vite, moins de force) — ex: un moulin à vent, un vélo en descente.
</formula-box>

<method-box title="Calculer la vitesse en sortie" steps='["Compter (ou relever) le nombre de dents de chaque roue : Z1 (menante) et Z2 (menée).","Calculer le rapport R = Z2 / Z1.","Multiplier la vitesse d&apos;entrée par le rapport : N2 = N1 × R."]' example="Un moteur tourne à 1000 tr/min avec un pignon de 20 dents entraînant une roue de 80 dents.<br/>R = 80/20 = 4<br/>N2 = 1000 / 4 = 250 tr/min<br/>Le couple (force) est multiplié par 4."></method-box>

<callout type="info" title="Sens de rotation">
Avec deux engrenages, la roue menée tourne en sens inverse de la roue menante. Pour qu'elle tourne dans le même sens, on ajoute une **roue intermédiaire** (appelée pignon fou ou renvoi).
</callout>

### Poulies et courroies

Au lieu de dents, on utilise une **courroie** (plate, crantée ou trapézoïdale) qui relie deux **poulies**. Le rapport se calcule avec les diamètres :

$$R = \frac{D_{\text{menée}}}{D_{\text{menante}}}$$

<concept-card title="Courroie crantée" icon="Timer" description="Comme une courroie de distribution de voiture : les crans empêchent le glissement et synchronisent parfaitement les deux poulies." theme="info"></concept-card>

<drag-and-drop-list title="Quel mécanisme pour quelle situation ?" items='[ {"id": "1", "content": "Relier deux arbres éloignés", "match": "Poulies et courroie"}, {"id": "2", "content": "Transmettre avec un rapport précis sans glissement", "match": "Engrenages"}, {"id": "3", "content": "Transmettre sur une longue distance avec glissement possible", "match": "Poulies et courroie lisse"}, {"id": "4", "content": "Changer le sens de rotation", "match": "Ajouter un pignon fou"} ]'></drag-and-drop-list>

## 2. La transformation de mouvement

### Système pignon-crémaillère

Transforme un **mouvement de rotation en mouvement de translation** (ligne droite). Le pignon (roue dentée) tourne et fait avancer la crémaillère (barre dentée).

*   Exemples : Direction d'une voiture (crémaillère de direction), ouverture d'une porte de garage, perceuse à colonne.

<flashcard front="Donne un exemple de transformation rotation → translation." back="Le système **pignon-crémaillère** : le pignon tourne et fait coulisser la crémaillère en ligne droite."></flashcard>

### Système bielle-manivelle

Transforme un **mouvement de rotation en mouvement alternatif** (va-et-vient), ou l'inverse.

*   La **manivelle** (ou vilebrequin) tourne et entraîne la **bielle** qui fait coulisser un piston.
*   Exemples : Moteur à explosion (piston → vilebrequin), machine à vapeur, scie sauteuse, essuie-glaces.

<callout type="tip" title="Astuce pour retenir">
Pense à tes jambes quand tu pédales ! Le pédalier (manivelle) tourne, la bielle (ta cuisse) transmet, le piston (ton genou) fait un mouvement de va-et-vient. C'est exactement le principe bielle-manivelle.
</callout>

<concept-card title="Quiz express" icon="Lightbulb" description="Dans un moteur de voiture, le piston monte et descend (mouvement rectiligne alternatif). La bielle et le vilebrequin transforment ce mouvement en mouvement de rotation pour faire tourner les roues." theme="success"></concept-card>

### Système came / excentrique

Transforme un **mouvement de rotation en mouvement alternatif** grâce à une pièce de forme spéciale (la came).

*   La came pousse un **suiveur** (galet, tige) qui monte et descend.
*   Exemples : Arbre à cames d'un moteur (ouvre les soupapes), machine à coudre (fait monter/descendre l'aiguille).

<flashcard front="Quelle est la différence entre une transmission et une transformation de mouvement ?" back="La **transmission** conserve le type de mouvement (rotation → rotation avec un engrenage). La **transformation** change le type de mouvement : rotation → translation (pignon-crémaillère) ou rotation → alternatif (bielle-manivelle)."></flashcard>

## 3. Les solutions techniques dans la vie quotidienne

| Objet | Mécanisme | Fonction |
|:---|:---|:---|
| Vélo | Chaîne + roues dentées | Transmission rotation → rotation (multiplication) |
| Treuil manuel | Engrenage + manivelle | Transmission (réduction : plus de force) |
| Ouvre-portail | Pignon-crémaillère | Transformation rotation → translation |
| Moteur de voiture | Bielle-manivelle + vilebrequin | Transformation alternatif → rotation |
| Perceuse à colonne | Pignon-crémaillère | Transformation rotation → translation verticale |
| Montre mécanique | Engrenages (rouage) | Transmission avec réduction précise |
| Pompe à vélo | Bielle-manivelle | Transformation rotation → alternatif |
| Essuie-glaces | Bielle-manivelle + renvoi | Transformation rotation → alternatif (va-et-vient) |

## 📝 Entraînement

<mini-quiz question="Un pignon de 20 dents entraîne une roue de 80 dents. Quel est le rapport de transmission ?" options='["0,25","4","80","20"]' correctAnswer="1" explanation="R = Z2 / Z1 = 80 / 20 = 4. C'est un réducteur : la roue menée tourne 4 fois moins vite mais avec 4 fois plus de force."></mini-quiz>

<mini-quiz question="Quel mécanisme transforme un mouvement de rotation en mouvement de translation rectiligne ?" options='["Un engrenage","Un système pignon-crémaillère","Une poulie","Un système bielle-manivelle"]' correctAnswer="1" explanation="Le pignon-crémaillère convertit la rotation du pignon en translation de la crémaillère (ex: direction de voiture, perceuse à colonne)."></mini-quiz>

<mini-quiz question="Quel mécanisme est utilisé dans un moteur de voiture pour transformer le mouvement vertical du piston en rotation du vilebrequin ?" options='["Pignon-crémaillère","Engrenages","Bielle-manivelle","Poulies"]' correctAnswer="2" explanation="Le système bielle-manivelle (piston + bielle + vilebrequin) transforme le mouvement de va-et-vient du piston en mouvement de rotation."></mini-quiz>

<mini-quiz question="Dans un réducteur (R > 1), comment évoluent la vitesse et la force ?" options='["La vitesse augmente, la force diminue","La vitesse diminue, la force augmente","La vitesse et la force augmentent","La vitesse et la force diminuent"]' correctAnswer="1" explanation="Un réducteur diminue la vitesse de rotation mais augmente le couple (la force). C'est le principe du treuil ou du dérailleur de vélo en montée."></mini-quiz>

<brevet-checklist items='[ "Je sais faire la différence entre transmission et transformation de mouvement.", "Je sais calculer un rapport de transmission (engrenages).", "Je connais le principe pignon-crémaillère (rotation → translation).", "Je connais le principe bielle-manivelle (rotation → alternatif).", "Je sais donner des exemples concrets d&apos;application." ]'></brevet-checklist>
