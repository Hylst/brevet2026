# Les signaux sonores

<callout type="info" title="Introduction">
Un son est une vibration de la matière. Il permet de communiquer, de sonder les océans et même de voir l'intérieur du corps humain (échographie). Mais comment se propage-t-il ? Comment caractériser un son grave ou aigu, fort ou faible ? Et comment utilise-t-on le son pour mesurer des distances ?
</callout>

<concept-card title="Démarche Scientifique" icon="FlaskConical" description="Lis toujours l'introduction de l'énoncé. Elle contient le **problème à résoudre** et justifie toutes les questions qui suivent." theme="info"></concept-card>

## 1. La production et la propagation d'un son 🔊

Un son est produit par la **vibration** d'un objet (ex : corde vocale, corde de guitare, haut-parleur). Pour se propager de la source vers le récepteur (ex : l'oreille), le son a **besoin d'un milieu matériel**.

*   **Dans le vide, le son ne se propage pas !** (Contrairement à la lumière).
*   La vitesse du son dépend du milieu :

| Milieu | Vitesse du son |
|--------|---------------|
| Air (20°C) | ~340 m/s |
| Eau | ~1 500 m/s |
| Acier | ~5 000 m/s |

Plus le milieu est dense, plus le son se propage vite. C'est pour ça que dans les films de western, on collait l'oreille sur les rails pour entendre le train arriver de loin !

<callout type="info" title="Le saviez-vous ?">
Quand tu vois un éclair, tu vois la lumière presque instantanément, mais le tonnerre arrive quelques secondes après. En comptant les secondes entre l'éclair et le tonnerre, puis en divisant par 3, tu obtiens la distance en kilomètres qui te sépare de l'orage ! (car 340 m/s × 3 s ≈ 1 km)
</callout>

## 2. Période, Fréquence et Hauteur 🎵

Un son musical produit un signal périodique (qui se répète identique à lui-même).

*   **La période ($T$)** : durée (en secondes) d'un motif élémentaire.
*   **La fréquence ($f$)** : nombre de motifs par seconde, en **Hertz (Hz)**.
$$f = \\frac{1}{T}$$

<signaux-sonores-svg></signaux-sonores-svg>

<definition-box term="Hauteur d'un son">
<ul>
  <li>Un son <strong>grave</strong> a une fréquence faible (ex : contrebasse, voix grave).</li>
  <li>Un son <strong>aigu</strong> a une fréquence élevée (ex : flute, voix aiguë).</li>
</ul>
L'oreille humaine perçoit les sons dont la fréquence est comprise entre <strong>20 Hz et 20 000 Hz</strong>.
En dessous de 20 Hz → infrasons. Au-dessus de 20 000 Hz → ultrasons.
</definition-box>

## 3. La réflexion du son : écho et sonar 📡

Le son peut se réfléchir sur un obstacle, comme la lumière sur un miroir. C'est le phénomène d'**écho** : le son rebondit et revient vers l'émetteur après un certain temps.

**Application : le sonar** (Sound Navigation And Ranging)
Un sonar émet des ultrasons vers le fond marin. Les ondes rebondissent et reviennent au navire. En mesurant le temps $t$ entre l'émission et la réception, on calcule la profondeur $d$ :

<formula-box title="Calcul de profondeur (sonar)">
$$d = \\frac{v \\times t}{2}$$
<ul>
  <li>$d$ : profondeur (en m)</li>
  <li>$v$ : vitesse du son dans l'eau (~1500 m/s)</li>
  <li>$t$ : temps aller-retour (en s)</li>
  <li>On divise par 2 car le son fait l'aller-retour !</li>
</ul>
</formula-box>

<flashcard front="Un sonar émet une onde qui met 0,4 s à revenir. Quelle est la profondeur de l'eau ? (v = 1500 m/s)" back="d = (1500 × 0,4) / 2 = 300 m. Le son a parcouru 600 m (aller-retour), donc le fond est à 300 m."></flashcard>

## 4. Le Niveau Sonore 📊

Le niveau d'intensité sonore mesure le "volume" ou la "force" du son. Il se mesure en **décibels (dB)** avec un sonomètre.

| Niveau sonore | Exemple | Risque |
|--------------|---------|--------|
| 0 dB | Seuil d'audition | Aucun |
| 30 dB | Chuchotement | Aucun |
| 60 dB | Conversation normale | Aucun |
| 85 dB | Circulation intense | Seuil de danger (protection recommandée) |
| 120 dB | Concert, marteau-piqueur | Seuil de douleur, risques immédiats |

<callout type="warning" title="Protège tes oreilles !">
Au-dessus de 85 dB, une exposition prolongée peut détruire irrémédiablement les cellules de l'oreille interne. Porte des protections (bouchons, casque) en concert ou au travail. Et baisse le volume de tes écouteurs !
</callout>

## 📝 Entraînement

<mini-quiz question="Quelle est la vitesse approximative du son dans l'air ?" options='["300 000 km/s","340 m/s","34 m/s","1500 m/s"]' correctAnswer="1" explanation="Le son se propage à 340 m/s dans l'air (et beaucoup plus vite dans l'eau : environ 1500 m/s)."></mini-quiz>

<mini-quiz question="Un sonar émet une onde qui met 0,6 s à revenir. Quelle est la profondeur de l'eau ? (v = 1500 m/s)" options='["900 m","450 m","300 m","45 m"]' correctAnswer="1" explanation="d = (1500 × 0,6) / 2 = 450 m. On divise par 2 car le temps mesuré est celui de l'aller-retour."></mini-quiz>

<mini-quiz question="Quelle est la fréquence d'un son dont la période est de 0,005 s ?" options='["0,005 Hz","5 Hz","200 Hz","5000 Hz"]' correctAnswer="2" explanation="f = 1 / T = 1 / 0,005 = 200 Hz. C'est un son audible (entre 20 Hz et 20 000 Hz)."></mini-quiz>

<brevet-checklist items='[ "Je sais que le son ne se propage pas dans le vide.", "Je connais la formule f = 1/T et je sais l&apos;appliquer.", "Je sais que la fréquence (en Hertz) indique si un son est grave ou aigu.", "Je connais la vitesse du son dans l&apos;air (340 m/s) et dans l&apos;eau (1500 m/s).", "Je sais utiliser la formule du sonar : d = (v × t) / 2.", "Je sais que le niveau sonore se mesure en décibels (dB)." ]'></brevet-checklist>
