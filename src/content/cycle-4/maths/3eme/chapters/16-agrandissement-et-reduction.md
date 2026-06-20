# Agrandissement et Réduction

<resizing-svg></resizing-svg>

<callout type="info" title="Introduction">
Lorsqu'on zoome sur une photo sur son téléphone ou qu'on utilise une maquette pour construire une maison, on fait appel aux mathématiques de l'agrandissement et de la réduction. Mais attention, si une longueur double, l'aire ou le volume ne doublent pas de la même manière. Il y a un piège à connaître absolument !
</callout>

<callout type="info" title="Le saviez-vous ?">
C'est à cause du rapport k³ que les géants des films (comme King Kong) ne pourraient pas exister en vrai ! Si on multiplie la taille d'un gorille par 10 (k=10), son poids (volume) est multiplié par 1000 (k³). Ses os se briseraient sous son propre poids !
</callout>

En géométrie, lorsqu'on agrandit ou qu'on réduit une figure ou un solide, on multiplie toutes ses longueurs par un même nombre $k$, appelé le **rapport d'agrandissement ou de réduction**.

<concept-card title="Le réflexe en Maths" icon="Calculator" description="Au Brevet, toutes les traces de recherche sont prises en compte. **Même si ta démarche n'aboutit pas, écris-la !**" theme="info"></concept-card>

## 📏 1. Le rapport $k$ (Longueurs)

Si on multiplie toutes les dimensions (longueurs, largeurs, rayons, hauteurs) par un nombre $k$ :
*   Si **$k > 1$**, c'est un **agrandissement**. (ex: $k = 2$, on double les longueurs).
*   Si **$0 < k < 1$**, c'est une **réduction**. (ex: $k = 0,5$ ou $1/2$, on divise les longueurs par 2).

**Formule :**
$$ \text{Nouvelle Longueur} = \text{Ancienne Longueur} \times k $$

<callout type="info" title="Attention aux angles !">
Lors d'un agrandissement ou d'une réduction, **les mesures des angles ne changent pas**. Les droites parallèles restent parallèles et les droites perpendiculaires restent perpendiculaires.
</callout>
## 🟦 2. Impact sur les Aires (Surfaces)

C'est le piège classique du Brevet ! Si on multiplie les longueurs par $k$, l'aire n'est PAS multipliée par $k$.

**Règle :** Lors d'un agrandissement ou d'une réduction de rapport $k$, **les aires sont multipliées par $k^2$**.

**Formule :**
$$ \text{Nouvelle Aire} = \text{Ancienne Aire} \times k^2 $$

*Exemple :* Si je double les côtés d'un carré ($k=2$), son aire est multipliée par $2^2 = 4$.
## 🧊 3. Impact sur les Volumes

De la même manière, pour les objets en 3D (cubes, cylindres, cônes...) :

**Règle :** Lors d'un agrandissement ou d'une réduction de rapport $k$, **les volumes sont multipliés par $k^3$**.

**Formule :**
$$ \text{Nouveau Volume} = \text{Ancien Volume} \times k^3 $$

*Exemple :* Si je réduis les dimensions d'un cône de moitié ($k = 1/2$), son volume est multiplié par $(1/2)^3 = 1/8$. Le nouveau cône est 8 fois moins volumineux !
## 📝 Résumé à retenir par cœur

| Dimension | Unité type | Multiplié par |
| :--- | :--- | :--- |
| **Longueurs** (Périmètre, rayon...) | cm, m | **$k$** |
| **Aires** (Surface) | cm², m² | **$k^2$** |
| **Volumes** (Capacité) | cm³, m³, Litres | **$k^3$** |

<method-box  title="Comment résoudre un problème d'agrandissement/réduction au brevet ?"  steps='["1. Identifie ou calcule le rapport k ( k = Nouvelle longueur / Ancienne correspondante ).", "2. Détermine si tu cherches une nouvelle Longueur (utilise k), une Aire (utilise k²) ou un Volume (utilise k³).", "3. Applique la formule : Nouveau = Ancien × coefficient.", "4. Conclus avec la bonne unité (cm, cm² ou cm³)."]' ></method-box>

<flashcard front="Si les longueurs d'une figure sont multipliées par k, que deviennent l'aire et le volume ?" back="L'aire est multipliée par k² (k au carré). Le volume est multiplié par k³ (k au cube). C'est le piège numéro 1 du brevet !"></flashcard>

### 4. Exercice Type Brevet 📝

<callout type="tip" title="Exercice Corrigé : Trouver et utiliser un coefficient d'agrandissement">
**Exercice :**  
Dans une pizzeria, la petite pizza a un diamètre de 20 cm et une aire de $314 \text{ cm}^2$.
La grande pizza est un agrandissement de la petite pizza. Son diamètre est de 30 cm.

1.  Calculer le rapport d'agrandissement $k$.
2.  En déduire l'aire de la grande pizza.

**Correction :**  
1.  **Le rapport $k$ :**
    On connaît les longueurs correspondantes (les diamètres). 
    $k = \frac{\text{Nouvelle Longueur (grande)}}{\text{Ancienne Longueur (petite)}} = \frac{30}{20} = 1,5$.
    *Le rapport d'agrandissement est de 1,5.*

2.  **L'aire de la grande pizza :**
    Attention au piège : l'aire n'est pas multipliée par $k$, mais par **$k^2$** !
    $\text{Aire grande} = \text{Aire petite} \times k^2$
    $\text{Aire grande} = 314 \times 1,5^2$
    $\text{Aire grande} = 314 \times 2,25 = 706,5 \text{ cm}^2$.
    *L'aire de la grande pizza est de $706,5 \text{ cm}^2$.*
</callout>

## 📝 Entraînement

<mini-quiz  question="Soit un cube de volume 10 cm³. Si je multiplie la longueur de ses arêtes par 3, quel sera le volume du nouveau cube ?"  options='["30 cm³","60 cm³","90 cm³","270 cm³"]'  correctAnswer="3"  explanation="Le rapport d'agrandissement est k = 3. Le volume est donc multiplié par k³, c'est-à-dire 3³ = 3 × 3 × 3 = 27. L'ancien volume était de 10 cm³, donc 10 × 27 = 270 cm³ !"></mini-quiz>

<mini-quiz  question="J'ai une figure d'aire 100 cm². Je lui applique une réduction de rapport k = 0,1. Quelle sera sa nouvelle aire ?"  options='["10 cm²","1 cm²","0,1 cm²","0,01 cm²"]'  correctAnswer="1"  explanation="L'aire est multipliée par k². k² = 0,1² = 0,01. Et 100 × 0,01 = 1 cm² !"></mini-quiz>

<mini-quiz  question="Si le volume d'un cube est multiplié par 8, par combien ses longueurs ont-elles été multipliées ?"  options='["Par 2","Par 3","Par 4","Par 8"]'  correctAnswer="0"  explanation="Le volume est multiplié par k³. On cherche donc un nombre k dont le cube donne 8. Ce nombre est 2, car 2³ = 2 × 2 × 2 = 8 ! Les longueurs ont doublé."></mini-quiz>

<mini-quiz  question="Si on multiplie le rayon d'une sphère par 4, par combien son volume est-il multiplié ?"  options='["4","16","64","40"]'  correctAnswer="2"  explanation="Le volume est multiplié par k³. Ici k=4, donc 4³ = 4 × 4 × 4 = 64."></mini-quiz>

<mini-quiz  question="Une piscine olympique est une réduction d'un lac à l'échelle k=0,01. Si le lac fait 1 000 000 m², quelle est l'aire de la piscine ?"  options='["10 000 m²","1 000 m²","100 m²","50 m²"]'  correctAnswer="2"  explanation="L'aire est multipliée par k². k² = 0,01² = 0,0001. 1 000 000 × 0,0001 = 100 m²."></mini-quiz>

<brevet-checklist items='[ "Je sais calculer un rapport k (Nouvelle longueur / Ancienne longueur).", "Je sais que les angles sont conservés.", "Je multiplie l&apos;aire par k².", "Je multiplie le volume par k³." ]'></brevet-checklist>
