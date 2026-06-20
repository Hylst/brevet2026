import { Subject } from '../types';

export const physique: Subject = {
  id: 'physique',
  folderId: 'sciences',
  name: 'Physique-Chimie',
  icon: 'Atom',
  color: 'bg-purple-600',
  topics: [
  {
    id: 'pc-1',
    category: 'Physique-Chimie',
    title: 'Matière et transformations',
    description: 'Atomes, ions, pH et organisation de la matière. Inclut un atome interactif <interactive-atom />.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'pc-2',
    category: 'Physique-Chimie',
    title: 'Transformations chimiques',
    description: 'Réactifs, produits et conservation de la masse.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'pc-3',
    category: 'Physique-Chimie',
    title: 'Transformations nucléaires',
    description: 'Fission, fusion et radioactivité.',
    type: 'sheet',
    difficulty: 3,
    level: '3eme'
  },
  {
    id: 'pc-4',
    category: 'Physique-Chimie',
    title: 'Mouvements et interactions',
    description: 'Vitesse, forces et interactions gravitionnelles.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'pc-5',
    category: 'Physique-Chimie',
    title: "L'énergie",
    description: "Sources, transferts et conservation de l'énergie.",
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'pc-6',
    category: 'Physique-Chimie',
    title: "L'Univers et la Gravitation",
    description: 'Système solaire, interaction gravitationnelle, différence entre poids et masse.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'pc-7',
    category: 'Physique-Chimie',
    title: "L'énergie et la puissance électrique",
    description: "Circuits série et dérivation, loi d'Ohm, tension, intensité et calcul d'énergie électrique.",
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'pc-8',
    category: 'Physique-Chimie',
    title: 'Les signaux sonores',
    description: 'Propagation du son, fréquence, période, niveau sonore, écho et sonar.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'pc-9',
    category: 'Physique-Chimie',
    title: 'Les signaux lumineux',
    description: 'Signal et information, vitesse de la lumière, spectres lumineux et communication.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'pc-10',
    category: 'Physique-Chimie',
    title: 'Les ions et le pH',
    description: 'Tests de reconnaissance des ions, acidité et basicité des solutions.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'pc-11',
    category: 'Physique-Chimie',
    title: 'La tension alternative',
    description: "Tension, période, fréquence et lecture d'oscillogramme.",
    type: 'sheet',
    difficulty: 3,
    level: '3eme'
  },
  {
    id: 'pc-12',
    category: 'Physique-Chimie',
    title: 'L\'énergie et le développement durable',
    description: 'Pour évaluer l\'impact écologique d\'un produit et le développement durable.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'pc-1-quiz',
    category: 'Physique-Chimie',
    title: 'Quiz : Matière et transformations',
    description: 'Teste tes connaissances sur les atomes, la composition de l\'air, les réactions chimiques et la masse volumique.',
    type: 'quiz',
    difficulty: 2,
    questions: [
      {
        id: 's1q1',
        text: "De quoi est composé le noyau d'un atome ?",
        options: [
          "D'électrons uniquement",
          'De protons et de neutrons',
          "De protons et d'électrons",
          'De neutrons uniquement'
        ],
        correctAnswer: 1,
        explanation: "Le noyau contient les nucléons, c'est-à-dire les protons (charge positive) et les neutrons (charge neutre). Les électrons (charge négative) gravitent autour."
      },
      {
        id: 's1q6',
        text: 'Un atome est électriquement...',
        options: [ 'Positif', 'Négatif', 'Neutre', 'Variable' ],
        correctAnswer: 2,
        explanation: "Un atome est toujours électriquement neutre : il possède autant de protons électriquement positifs dans son noyau que d'électrons négatifs dans son nuage électronique."
      },
      {
        id: 's1q2',
        text: 'Quel test permet de mettre en évidence la présence de gaz dioxyde de carbone (CO2) ?',
        options: [
          "Le test à l'eau de chaux",
          'Le test au sulfate de cuivre anhydre',
          "Le test de l'allumette enflammée (détonation)",
          "Le test au nitrate d'argent"
        ],
        correctAnswer: 0,
        explanation: "L'eau de chaux, initialement limpide, se trouble (blanchit) en présence de dioxyde de carbone."
      },
      {
        id: 's1q7',
        text: 'Quel test permet de mettre en évidence la présence de dihydrogène (H2) ?',
        options: [
          "L'eau de chaux",
          'La buchette incandescente',
          "L'allumette enflammée qui produit une détonation (un 'pop')",
          'Le sulfate de cuivre'
        ],
        correctAnswer: 2,
        explanation: "En approchant une allumette enflammée, le dihydrogène produit une petite détonation caractéristique (un 'aboiement' ou 'pop')."
      },
      {
        id: 's1q3',
        text: "Quelle est la formule chimique de l'eau ?",
        options: [ 'CO2', 'O2', 'H2O', 'NaCl' ],
        correctAnswer: 2,
        explanation: "La molécule d'eau est composée de deux atomes d'hydrogène (H) et d'un atome d'oxygène (O)."
      },
      {
        id: 's1q8',
        text: "Que nous indique l'équation de la réaction C + O2 -> CO2 ?",
        options: [
          "Qu'il y a 2 atomes de C",
          "Qu'un atome de carbone réagit avec une molécule de dioxygène pour former une molécule de dioxyde de carbone",
          "Que la masse n'est pas conservée",
          "Que c'est une réaction nucléaire"
        ],
        correctAnswer: 1,
        explanation: "Il y a un atome de C (Carbone) et une molécule O2 (composée de 2 atomes d'Oxygène) pour former CO2."
      },
      {
        id: 's1q4',
        text: 'Comment appelle-t-on un atome qui a perdu ou gagné un ou plusieurs électrons ?',
        options: [ 'Une molécule', 'Un ion', 'Un isotope', 'Un proton' ],
        correctAnswer: 1,
        explanation: "Un ion est une espèce chimique électriquement chargée. S'il a perdu des électrons (charge négative), il devient positif (cation). S'il en a gagné, il devient négatif (anion)."
      },
      {
        id: 's1q5',
        text: "Quel est le pH d'une solution neutre à 25°C ?",
        options: [ '0', '7', '14', '10' ],
        correctAnswer: 1,
        explanation: "L'échelle de pH va de 0 à 14. Un pH de 7 est neutre. Plus le pH est bas (proche de 0), plus la solution est acide (excès d'ions H+). Plus le pH est élevé (proche de 14), plus elle est basique (excès d'ions HO-)."
      },
      {
        id: 's1q9',
        text: "Qu'est-ce qu'une transformation chimique ?",
        options: [
          "Un changement d'état (ex: solide à liquide)",
          'Le mélange de deux liquides immiscibles',
          'Un réarrangement des atomes pour exister sous de nouvelles molécules',
          'Une explosion nucléaire'
        ],
        correctAnswer: 2,
        explanation: "Lors d'une transformation chimique, les réactifs disparaissent en se recombinant pour former de nouveaux produits. Rien ne se perd, tout se transforme."
      },
      {
        id: 's1q10',
        text: "Quelle est la particularité de deux isotopes d'un même élément ?",
        options: [
          "Ils ont le même nombre d'électrons mais pas de protons",
          'Ils ont le même nombre de protons mais un nombre de neutrons différent',
          'Ils sont toujours radioactifs',
          'Ce sont des ions'
        ],
        correctAnswer: 1,
        explanation: 'Deux atomes isotopes appartiennent au même élément chimique (ex: le Carbone 12 et le Carbone 14) car ils ont le même nombre de protons, mais leur nombre de neutrons diffère, changeant ainsi leur masse.'
      },
      {
        id: 's1q11',
        text: 'Quels sont les deux principaux gaz qui composent l\'air (99 % du volume) ?',
        options: [
          'Dioxygène et vapeur d\'eau',
          'Diazote et dioxygène',
          'Dioxyde de carbone et dioxygène',
          'Diazote et argon'
        ],
        correctAnswer: 1,
        explanation: "L'air est composé d'environ 78 % de diazote (N₂) et 21 % de dioxygène (O₂), soit 99 % du volume total."
      },
      {
        id: 's1q12',
        text: "Un objet a une masse de 200 g et un volume de 100 cm³. Quelle est sa masse volumique en g/cm³ ?",
        options: [ '0,5', '2', '20 000', '100' ],
        correctAnswer: 1,
        explanation: "ρ = m/V = 200 g / 100 cm³ = 2 g/cm³. L'objet est plus dense que l'eau (1 g/cm³), donc il coule."
      }
    ]
  },
  {
    id: 'pc-2-quiz',
    category: 'Physique-Chimie',
    title: 'Quiz : Mouvements, énergie et signaux',
    description: "Teste tes connaissances sur les forces, les circuits électriques, les ondes et le sonar.",
    type: 'quiz',
    difficulty: 2,
    questions: [
      {
        id: 's2q1',
        text: 'Quelle est la relation mathématique entre le poids (P) et la masse (m) sur Terre ?',
        options: [ 'P = m / g', 'P = m + g', 'P = m × g', 'P = g / m' ],
        correctAnswer: 2,
        explanation: "Le poids P (exprimé en Newtons, N) est égal à la masse m (exprimée en kg) multipliée par l'intensité de la pesanteur g (environ 9,8 N/kg sur Terre)."
      },
      {
        id: 's2q6',
        text: 'Dans un circuit en série, si une lampe grille, que se passe-t-il ?',
        options: [
          "Les autres s'allument plus fort",
          'Le courant continue de circuler normalement',
          "Toutes les autres lampes s'éteignent",
          'Seule la lampe grillée est éteinte'
        ],
        correctAnswer: 2,
        explanation: 'Dans un circuit en série (une seule boucle), si un dipôle est défectueux ou retiré, le circuit est ouvert et le courant ne circule plus du tout.'
      },
      {
        id: 's2q2',
        text: 'Dans quel milieu le son ne peut-il PAS se propager ?',
        options: [ "L'air", "L'eau", "L'acier", 'Le vide' ],
        correctAnswer: 3,
        explanation: 'Le son est une onde mécanique de compression de la matière (gaz, liquide, solide) pour vibrer et se propager. Il ne se propage donc pas dans le vide.'
      },
      {
        id: 's2q3',
        text: "Quelle est l'unité de mesure de l'intensité du courant électrique ?",
        options: [ 'Le Volt (V)', "L'Ampère (A)", 'Le Watt (W)', "L'Ohm (Ω)" ],
        correctAnswer: 1,
        explanation: "L'intensité du courant (débit d'électrons) se mesure en Ampères (A) avec un ampèremètre branché en série. La Tension se mesure en Volts (V) et la Puissance en Watts (W)."
      },
      {
        id: 's2q4',
        text: "Quelle est la vitesse de propagation de la lumière dans le vide (et l'air approximativement) ?",
        options: [ '300 000 km/s', '340 m/s', '150 000 km/s', '3 000 000 m/s' ],
        correctAnswer: 0,
        explanation: "La lumière se propage dans le vide et dans l'air à une vitesse d'environ 300 000 kilomètres par seconde (ou 3 × 10⁸ m/s). C'est la limite de vitesse absolue de l'Univers."
      },
      {
        id: 's2q5',
        text: "Comment calcule-t-on l'énergie cinétique (Ec) d'un objet en mouvement ?",
        options: [
          'Ec = m × v',
          'Ec = m × g × h',
          'Ec = 1/2 × m × v²',
          'Ec = P × t'
        ],
        correctAnswer: 2,
        explanation: "L'énergie cinétique dépend de la masse (m, en kg) et de la vitesse au carré (v, en m/s). La formule est Ec = ½ × m × v²."
      },
      {
        id: 's2q7',
        text: "Lorsqu'on freine une voiture, en quoi l'énergie cinétique est-elle principalement transformée ?",
        options: [
          'En énergie potentielle',
          'En énergie lumineuse',
          'En énergie thermique (chaleur)',
          'En énergie électrique'
        ],
        correctAnswer: 2,
        explanation: "Lors d'un freinage, les plaquettes de frein frottent contre les disques : la friction dissipe l'énergie du mouvement sous forme de chaleur."
      },
      {
        id: 's2q8',
        text: "Quelle loi mathématique relie la tension (U), l'intensité (I) et la résistance (R) d'un dipôle ?",
        options: [ 'U = R + I', 'I = U × R', 'U = R × I', 'R = U × I' ],
        correctAnswer: 2,
        explanation: "La loi d'Ohm s'écrit U = R × I. La tension aux bornes d'un conducteur ohmique est proportionnelle à l'intensité du courant qui le traverse."
      },
      {
        id: 's2q9',
        text: "Lorsqu'une pomme tombe d'un arbre, si on néglige les frottements de l'air, que dire de son énergie mécanique ?",
        options: [
          'Elle augmente continuellement',
          'Elle diminue et se dissipe',
          "Elle se conserve (Ec compense la perte de l'Ep)",
          'Elle se transforme en électricité'
        ],
        correctAnswer: 2,
        explanation: "L'énergie mécanique (Em = Ec + Ep) reste constante au cours de la chute. L'énergie potentielle (liée à la hauteur) se convertit intégralement en énergie cinétique (liée à la vitesse)."
      },
      {
        id: 's2q10',
        text: "Dans un circuit en dérivation contenant une lampe et un moteur, que se passe-t-il si la lampe grille ?",
        options: [
          'Le moteur s\'arrête aussi',
          'Le moteur continue de fonctionner normalement',
          'Le moteur grille à son tour',
          'Le courant s\'inverse'
        ],
        correctAnswer: 1,
        explanation: 'En dérivation, chaque récepteur a sa propre boucle. Les récepteurs sont indépendants : si l\'un tombe en panne, les autres continuent de fonctionner.'
      },
      {
        id: 's2q11',
        text: "Un sonar émet une onde qui met 0,5 s à revenir. Quelle est la profondeur de l'eau ? (v = 1500 m/s)",
        options: [ '750 m', '375 m', '1500 m', '3000 m' ],
        correctAnswer: 1,
        explanation: "d = (v × t) / 2 = (1500 × 0,5) / 2 = 375 m. On divise par 2 car le temps est celui de l'aller-retour."
      }
    ]
  },
  {
    id: 'pc-3-quiz',
    category: 'Physique-Chimie',
    title: 'Quiz : États et mélanges',
    description: 'Teste tes connaissances sur les mélanges, les états de la matière et la masse volumique.',
    type: 'quiz',
    difficulty: 1,
    questions: [
      {
        id: 's3q1',
        text: "Quelle est la différence entre un corps pur et un mélange ?",
        options: [
          'Un corps pur contient un seul type de molécule, un mélange en contient plusieurs',
          'Un corps pur est solide, un mélange est liquide',
          'Un corps pur est naturel, un mélange est artificiel',
          'Il n\'y a pas de différence'
        ],
        correctAnswer: 0,
        explanation: 'Un corps pur est constitué d\'une seule espèce chimique (ex : eau distillée). Un mélange contient plusieurs espèces chimiques différentes (ex : eau salée, air).'
      },
      {
        id: 's3q2',
        text: "Quels sont les trois états physiques de la matière ?",
        options: [
          'Solide, liquide, gazeux',
          'Chaud, tiède, froid',
          'Lourd, léger, moyen',
          'Transparent, opaque, translucide'
        ],
        correctAnswer: 0,
        explanation: 'Les trois états de la matière sont solide, liquide et gazeux. Le passage de l\'un à l\'autre s\'appelle un changement d\'état.'
      },
      {
        id: 's3q3',
        text: "Comment s'appelle le passage de l'état solide à l'état liquide ?",
        options: [ 'La solidification', 'La liquéfaction', 'La fusion', 'La vaporisation' ],
        correctAnswer: 2,
        explanation: 'La fusion est le passage de l\'état solide à l\'état liquide (ex : glace qui fond). La solidification est l\'inverse (liquide → solide).'
      },
      {
        id: 's3q4',
        text: "Quel pourcentage du volume de l'air est constitué de dioxygène (O₂) ?",
        options: [ '78 %', '21 %', '50 %', '99 %' ],
        correctAnswer: 1,
        explanation: 'L\'air contient environ 78 % de diazote (N₂), 21 % de dioxygène (O₂) et 1 % d\'autres gaz.'
      },
      {
        id: 's3q5',
        text: "Un bloc de bois a une masse de 300 g pour un volume de 500 cm³. Quelle est sa masse volumique ?",
        options: [ '0,6 g/cm³', '1,67 g/cm³', '600 g/cm³', '150 000 g/cm³' ],
        correctAnswer: 0,
        explanation: 'ρ = m/V = 300 g / 500 cm³ = 0,6 g/cm³. Le bois est moins dense que l\'eau (1 g/cm³), donc il flotte.'
      },
      {
        id: 's3q6',
        text: "Quel test permet de reconnaître le dioxygène (O₂) ?",
        options: [
          "L'eau de chaux se trouble",
          'La buchette incandescente se rallume',
          'Le sulfate de cuivre devient bleu',
          "L'allumette fait 'pop'"
        ],
        correctAnswer: 1,
        explanation: 'En approchant une buchette incandescente (qui rougeoie), le dioxygène la ravive et la rallume.'
      },
      {
        id: 's3q7',
        text: "Dans un mélange hétérogène d'huile et d'eau, que peut-on observer ?",
        options: [
          "On ne voit qu'une seule phase liquide",
          "L'huile et l'eau sont complètement mélangées",
          "On distingue deux phases : l'huile flotte sur l'eau",
          "L'eau flotte sur l'huile"
        ],
        correctAnswer: 2,
        explanation: "L'huile et l'eau sont non miscibles. L'huile (moins dense) flotte sur l'eau, formant deux phases distinctes."
      }
    ]
  },
  {
    id: 'pc-13',
    category: 'Physique-Chimie',
    title: 'Les mélanges, les états et la composition de la matière',
    description: 'Mélanges et corps purs, états de la matière, composition de l\'air et masse volumique.',
    type: 'sheet',
    difficulty: 1,
    level: '3eme'
  },
  {
    id: 'sciences-methodo-1',
    category: 'Méthodologie',
    title: "Méthodologie Scientifique : La Démarche d'Investigation",
    description: 'Formuler une hypothèse, concevoir une expérience et conclure.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'sciences-methodo-2',
    category: 'Méthodologie',
    title: 'Exploitation de Documents : Lire un graphique et justifier',
    description: 'Apprendre à extraire des données et justifier rigoureusement.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  }
]
};
