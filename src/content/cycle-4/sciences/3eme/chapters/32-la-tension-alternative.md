# La tension alternative et périodique

![La tension alternative](../assets/tension-alternative.svg)

<callout type="info" title="Introduction">
Le courant qui arrive dans nos maisons via les prises de courant n'est pas le même que celui sorti d'une pile. Une pile fournit une tension **continue**, alors que la prise secteur fournit une tension **alternative**. Découvrons les caractéristiques de ce type de courant particulier !
</callout>

## 1. Différence entre Continu et Alternatif ⚡

*   **Tension Continue (ex: une pile, une batterie) :** Les électrons circulent toujours dans **le même sens**. La valeur de la tension reste constante au cours du temps (elle forme une ligne horizontale sur un graphique plat ou un oscilloscope).
*   **Tension Alternative (ex: prise du secteur 230V) :** Les électrons font du sur-place mais **vibrent d'avant en arrière**. La valeur de la tension varie en permanence : elle monte (devient positive), descend (devient négative), passe par zéro, et ainsi de suite.
## 2. Allure d'une Tension Alternative Périodique

Sur l'écran d'un oscilloscope (appareil qui trace l'évolution de la tension en fonction du temps), une tension alternative classique trace une courbe en forme de vagues régulières, appelée **sinusoïde**.
### Les grandeurs caractéristiques :

1.  **La Tension maximale ($U_{max}$)** : C'est la valeur de la tension au sommet de la "vague". Elle s'exprime en **Volts (V)**.
2.  **La Période ($T$)** : C'est la durée du plus petit "motif" qui se répète (ex: la durée entre deux sommets consécutifs). Elle s'exprime en **Secondes (s)**.
3.  **La Fréquence ($f$)** : C'est le nombre de périodes complètes qui se répètent en 1 seule seconde. Elle s'exprime en **Hertz (Hz)**.

<formula-box title="Relation entre Période et Fréquence">
$$f = \frac{1}{T}$$
**Attention :** $T$ doit être absolument en Secondes (s) pour que la fréquence $f$ soit calculée en Hertz (Hz).
*(Exemple: Si $T$ = 0,02 s, alors $f = 1 / 0,02 = 50$ Hz)*
</formula-box>
## 3. Tension efficace ($U_{eff}$)

La tension maximale ($U_{max}$) est la valeur "crête". Mais on utilise plus souvent la **tension efficace ($U_{eff}$)**. C'est la valeur affichée par un voltmètre traditionnel (en mode "Alternatif" $AC$ ou $\sim$).

*La tension efficace correspond à la tension "continue" qui produirait le même effet d'échauffement sur une résistance.*

<formula-box title="Relation $U_{max}$ et $U_{eff}$">
$$U_{max} = U_{eff} \times \sqrt{2}$$
(soit environ $U_{max} \approx U_{eff} \times 1,41$)
</formula-box>

<flashcard front="Quelle est la tension efficace et la fréquence du secteur en France ?" back="En France, la tension d'une prise de courant est U_eff = 230 V. Sa fréquence est f = 50 Hz."></flashcard>

## 4. Analysons un oscillogramme 📺

Un écran d'oscilloscope utilise deux axes :
*   **Axe horizontal :** Mesure le temps (la durée). L'échelle s'appelle le *balayage temporel* (ex: 5 millisecondes par division/carreau).
*   **Axe vertical :** Mesure la tension. L'échelle s'appelle la *sensibilité verticale* (ex: 2 Volts par division/carreau).

*Méthode (Lecture T) :* Si un motif (une période) fait 4 carreaux de large, et que le balayage est de 5 ms / carreau : 
$T = 4 \times 5 = 20\ ms$ (soit $0,02\ s$). 
$f = 1 / 0,02 = 50\ Hz$.

## 📝 Entraînement

<mini-quiz question="Combien de fois la tension s'annule-t-elle par période dans une tension sinusoïdale ?" options='["1 fois","2 fois","Jamais","Ça dépend de la fréquence"]' correctAnswer="1" explanation="Sur un motif complet (une période), la vague part de zéro, monte au max, repasse par zéro, descend au min, et remonte à zéro. Elle traverse donc l'axe zéro 2 fois à l'intérieur du motif (+ le début et la fin)."></mini-quiz>

<mini-quiz question="Si la fréquence est de 100 Hz, quelle est la période en secondes ?" options='["100 s","0,1 s","0,01 s","10 s"]' correctAnswer="2" explanation="Si f = 100, alors T = 1 / 100 = 0,01 s."></mini-quiz>

<brevet-checklist items='[ "Je sais différencier tension continue et alternative.", "Sur un graphique, je sais repérer la période T et la grandeur Umax.", "Je sais utiliser f = 1 / T (avec T en secondes).", "Je connais la particularité de U_eff mesurée par un voltmètre." ]'></brevet-checklist>
