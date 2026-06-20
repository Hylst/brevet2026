import { Subject } from '../types';

export const svt: Subject = {
  id: 'svt',
  folderId: 'sciences',
  name: 'Sciences et Vie de la Terre',
  icon: 'Dna',
  color: 'bg-emerald-600',
  topics: [
  {
    id: 'svt-1',
    category: 'SVT',
    title: 'Système solaire et planète Terre',
    description: 'La Terre dans le système solaire et ses spécificités.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'svt-2',
    category: 'SVT',
    title: 'Climat et météo',
    description: 'Différences entre météo et climat, risques naturels.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'svt-3',
    category: 'SVT',
    title: 'Activité sismique et volcanique',
    description: 'Séismes, volcans et tectonique des plaques.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'svt-4',
    category: 'SVT',
    title: 'Le système immunitaire et la vaccination',
    description: 'Phagocytose, anticorps, mémoire immunitaire et principe du vaccin.',
    type: 'sheet',
    difficulty: 3,
    level: '3eme'
  },
  {
    id: 'svt-5',
    category: 'SVT',
    title: 'Génétique et Hérédité',
    description: 'Chromosomes, ADN, gènes, allèles, mitose et méiose.',
    type: 'sheet',
    difficulty: 3,
    level: '3eme'
  },
  {
    id: 'svt-6',
    category: 'SVT',
    title: 'Nutrition et digestion',
    description: 'Appareil digestif, transformation des aliments, microbiote et hygiène alimentaire.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'svt-7',
    category: 'SVT',
    title: 'Respiration et circulation',
    description: 'Échanges gazeux, appareil respiratoire, système circulatoire et cœur.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'svt-8',
    category: 'SVT',
    title: 'Reproduction sexuée et asexuée',
    description: 'Fécondation, gamètes, développement embryonnaire et méthodes contraceptives.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'svt-9',
    category: 'SVT',
    title: 'Écosystèmes et dynamique de la biodiversité',
    description: 'Chaîne alimentaire, réseaux trophiques, et impact des activités humaines.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'svt-10',
    category: 'SVT',
    title: "L'évolution du vivant",
    description: 'Sélection naturelle, fossiles, parenté entre les espèces et arbre phylogénétique.',
    type: 'sheet',
    difficulty: 3,
    level: '3eme'
  },
  {
    id: 'svt-11',
    category: 'SVT',
    title: 'Système nerveux et comportement',
    description: 'Cerveau, moelle épinière, neurones, synapses, drogues et addictions.',
    type: 'sheet',
    difficulty: 3,
    level: '3eme'
  },
  {
    id: 'svt-12',
    category: 'SVT',
    title: 'Exploitation des ressources naturelles',
    description: 'Eau douce, pétrole, gaz, minerais : exploitation, pollution, gestion durable et alternatives.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'svt-13',
    category: 'SVT',
    title: 'Nutrition et organisation des plantes',
    description: 'Photosynthèse, chloroplastes, chlorophylle, sève brute et élaborée, stomates et respiration végétale.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'svt-1-quiz',
    category: 'SVT',
    title: 'Quiz : Terre et Génétique',
    description: 'Teste tes connaissances en biologie et géologie.',
    type: 'quiz',
    difficulty: 2,
    questions: [
      {
        id: 's3q1',
        text: 'Combien de chromosomes contient un spermatozoïde humain normal ?',
        options: [ '46', '23', '23 paires', '46 paires' ],
        correctAnswer: 1,
        explanation: "Les gamètes (spermatozoïdes et ovules) sont issus de la méiose et contiennent la moitié des chromosomes de l'espèce, soit 23 chromosomes chez l'humain."
      },
      {
        id: 's3q2',
        text: 'Quelle est la différence entre la météorologie et la climatologie ?',
        options: [
          "La météo étudie les océans, le climat étudie l'air",
          'La météo étudie le temps à court terme, le climat étudie les moyennes à long terme',
          "Il n'y a aucune différence",
          'La météo est une science exacte, pas la climatologie'
        ],
        correctAnswer: 1,
        explanation: "La météorologie prévoit le temps qu'il fera demain (court terme), tandis que la climatologie étudie les tendances sur plusieurs décennies (long terme)."
      },
      {
        id: 's3q3',
        text: "Qu'est-ce qu'un allèle ?",
        options: [
          'Une maladie génétique',
          "Une version d'un gène",
          'Un chromosome sexuel',
          'Une cellule reproductrice'
        ],
        correctAnswer: 1,
        explanation: 'Un gène peut exister sous différentes versions, appelées allèles (ex: le gène du groupe sanguin a les allèles A, B et O).'
      },
      {
        id: 's3q4',
        text: "Quel phénomène géologique est à l'origine de la formation des chaînes de montagnes ?",
        options: [
          "L'érosion",
          'La divergence des plaques',
          'La convergence (collision) des plaques lithosphériques',
          'Le volcanisme de point chaud'
        ],
        correctAnswer: 2,
        explanation: "Lorsque deux plaques continentales entrent en collision (convergence), la croûte terrestre s'épaissit et se plisse, formant une chaîne de montagnes (ex: les Alpes, l'Himalaya)."
      },
      {
        id: 's3q5',
        text: "Où se trouve l'information génétique dans une cellule animale ou végétale ?",
        options: [
          'Dans le cytoplasme',
          'Dans la membrane plasmique',
          'Dans le noyau',
          'Dans les mitochondries'
        ],
        correctAnswer: 2,
        explanation: "L'ADN, qui porte l'information génétique sous forme de chromosomes, est contenu dans le noyau de la cellule."
      },
      {
        id: 's3q6',
        text: 'Quelle est la différence entre un gène et un allèle ?',
        options: [
          "Un allèle est une version d'un gène",
          "Un gène est une version d'un allèle",
          "C'est exactement la même chose",
          "Le gène est dans le noyau, l'allèle dans le cytoplasme"
        ],
        correctAnswer: 0,
        explanation: 'Un gène détermine un caractère (ex: groupe sanguin), et un allèle est une version possible de ce gène (ex: allèle A, B ou O).'
      },
      {
        id: 's3q7',
        text: "Combien y a-t-il de chromosomes dans le noyau d'une cellule humaine classique (cellule de la peau, muscle...) ?",
        options: [
          '23 chromosomes',
          '46 chromosomes (23 paires)',
          '46 paires',
          '92 chromosomes'
        ],
        correctAnswer: 1,
        explanation: "Contrairement aux cellules reproductrices qui n'ont que 23 chromosomes, les cellules somatiques du corps humain possèdent toutes 46 chromosomes (soit 23 paires dont une paire sexuelle XX ou XY)."
      },
      {
        id: 's3q8',
        text: 'De quelle nature est chimiquement constituée notre information génétique ?',
        options: [
          'De protéines nerveuses',
          "D'une longue molécule d'Acide DésoxyriboNucléique (ADN)",
          'De glucides solides',
          'De cellules du cerveau'
        ],
        correctAnswer: 1,
        explanation: "C'est la fameuse molécule d'ADN. Telle une longue double-hélice enroulée sur elle-même (le chromosome), chaque section constitue un gène."
      },
      {
        id: 's3q9',
        text: "Quel est le nom du processus permettant à une cellule de se multiplier à l'identique ?",
        options: [
          'La méiose',
          'La mitose',
          'La fécondation',
          'La phagocytose'
        ],
        correctAnswer: 1,
        explanation: 'La mitose est la division cellulaire classique, permettant à une cellule-mère de donner deux cellules-filles génétiquement identiques. La méiose est réservée aux cellules reproductrices.'
      },
      {
        id: 's3q10',
        text: "Comment appelle-t-on l'ensemble des individus de la même espèce vivant dans un milieu donné ?",
        options: [
          'Un écosystème',
          'La biosphère',
          'Une population',
          'Le biotope'
        ],
        correctAnswer: 2,
        explanation: "Une population désigne un groupe d'individus de la même espèce dans un écosystème. Un écosystème entier (la biocénose et le biotope) comprend toutes les espèces animales, végétales et bactériennes."
      },
      {
        id: 's3q11',
        text: 'Quel est le rôle des antibiotiques ?',
        options: [ 'Ils détruisent uniquement les virus', 'Ils détruisent les bactéries pathogènes bloquant leur développement', 'Ils augmentent le nombre d\'anticorps', 'Ils immunisent à vie comme un vaccin' ],
        correctAnswer: 1,
        explanation: 'Les antibiotiques sont des médicaments permettant de combattre les infections d\'origine BACTÉRIENNE uniquement (en perturbant les processus vitaux des bactéries). Ils sont totalement inefficaces contre les virus.'
      },
      {
        id: 's3q12',
        text: 'En génétique, qu\'est-ce qu\'une mutation ?',
        options: [ 'Une modification aléatoire de la séquence d\'ADN', 'L\'échange de gènes entre l\'homme et la femme', 'La destruction du noyau', 'Un super pouvoir' ],
        correctAnswer: 0,
        explanation: 'Une mutation est une altération de la molécule d\'ADN. La plupart du temps elle n\'a aucun effet, parfois elle entraîne une maladie ou, à l\'inverse, un nouveau caractère à la source de l\'évolution des espèces.'
      },
      {
        id: 's3q13',
        text: 'Qu\'est-ce que l\'épicentre d\'un séisme ?',
        options: [ 'Le noyau terrestre', 'L\'endroit sous terrain d\'où part la cassure', 'Le scientifique qui étudie le tremblement', 'Le point en surface situé à la verticale du foyer' ],
        correctAnswer: 3,
        explanation: 'Le foyer (hypocentre) est là où la faille casse en profondeur. L\'épicentre est le point à la surface, juste au-dessus, où les vibrations (ondes sismiques) arriveront en premier.'
      },
      {
        id: 's3q14',
        text: 'De quoi est composée la lithosphère ?',
        options: [ 'Seulement de l\'océan et de la croûte terrestre', 'De la croûte terrestre et de la partie totalement rigide du manteau supérieur', 'Du magma en fusion', 'D\'une couche de gaz atmosphérique' ],
        correctAnswer: 1,
        explanation: 'La lithosphère (plaque tectonique) est l\'enveloppe rigide de la Terre. Sous cette lithosphère solide repose l\'asthénosphère, un manteau plus ductile où la roche se déforme.'
      },
      {
        id: 's3q15',
        text: 'Comment s\'appelle le phénomène de réchauffement naturel de l\'atmosphère (renforcé par l\'homme) ?',
        options: [ 'Le trou de la couche d\'ozone', 'La canicule', 'L\'effet de serre', 'La mousson' ],
        correctAnswer: 2,
        explanation: 'L\'effet de serre est naturel (grâce à lui, la Terre n\'est pas congelée). C\'est l\'augmentation des rejets de GES (gaz à effet de serre : CO2, Méthane) par l\'homme qui le dérègle.'
      }
    ]
  },
  {
    id: 'svt-2-quiz',
    category: 'SVT',
    title: 'Quiz : Corps humain et santé',
    description: "Teste tes connaissances sur l'immunité et le système nerveux.",
    type: 'quiz',
    difficulty: 2,
    questions: [
      {
        id: 's4q1',
        text: 'Quel est le rôle des antibiotiques ?',
        options: [
          'Détruire les virus',
          "Stimuler la production d'anticorps",
          'Détruire les bactéries',
          'Empêcher la contamination'
        ],
        correctAnswer: 2,
        explanation: 'Les antibiotiques sont des molécules qui tuent ou bloquent la croissance des bactéries. Ils sont totalement inefficaces contre les virus (comme la grippe ou le rhume).'
      },
      {
        id: 's4q2',
        text: 'Comment appelle-t-on la zone de communication chimique entre deux neurones ?',
        options: [
          'Le nerf',
          'La synapse',
          'Le neurotransmetteur',
          'Le récepteur'
        ],
        correctAnswer: 1,
        explanation: "La synapse est l'espace entre deux neurones où le message nerveux électrique est transmis sous forme chimique grâce à des neurotransmetteurs."
      },
      {
        id: 's4q3',
        text: 'Quelles cellules du système immunitaire produisent les anticorps ?',
        options: [
          'Les globules rouges',
          'Les lymphocytes B',
          'Les phagocytes',
          'Les plaquettes'
        ],
        correctAnswer: 1,
        explanation: "Les lymphocytes B sont des globules blancs spécialisés dans la production d'anticorps spécifiques pour neutraliser les antigènes."
      },
      {
        id: 's4q4',
        text: 'Quel est le principe de la vaccination ?',
        options: [
          'Injecter des antibiotiques en prévention',
          'Injecter un antigène rendu inoffensif pour créer une mémoire immunitaire',
          'Injecter des anticorps pour guérir immédiatement',
          'Détruire les globules blancs malades'
        ],
        correctAnswer: 1,
        explanation: "Le vaccin stimule le système immunitaire en présentant un agent pathogène inactif. Le corps produit des cellules mémoires prêtes à réagir rapidement lors d'une vraie infection."
      },
      {
        id: 's4q5',
        text: 'Quel organe est le centre de commande du système nerveux ?',
        options: [
          'Le cœur',
          'La moelle épinière',
          "Le cerveau (l'encéphale)",
          'Les nerfs moteurs'
        ],
        correctAnswer: 2,
        explanation: "Le cerveau (qui fait partie de l'encéphale) intègre les informations sensorielles et élabore les messages moteurs."
      },
      {
        id: 's4q6',
        text: "Quelle cellule 'mangeuse' englobe et digère les envahisseurs lors d'une infection ?",
        options: [
          'Le globule rouge',
          'Le mégacaryocyte',
          'Le phagocyte (macrophage)',
          'La moelle osseuse'
        ],
        correctAnswer: 2,
        explanation: "Lors d'une blessure, les phagocytes interviennent rapidement : ils 'mangent' ou phagocytent (englobent) les bactéries pour les détruire."
      },
      {
        id: 's4q7',
        text: "Qu'est-ce que le 'microbiote' humain ?",
        options: [
          'Un vaccin anti-microbes',
          "Un poison que l'on respire",
          'Un insecte vecteur de maladies',
          "L'ensemble des micro-organismes vivant en symbiose dans notre corps"
        ],
        correctAnswer: 3,
        explanation: 'Le microbiote intestinal par exemple regroupe des milliards de bactéries indispensables à notre digestion et à notre propre protection immunitaire !'
      },
      {
        id: 's4q8',
        text: 'À quel niveau du tube digestif les nutriments passent-ils dans le sang ?',
        options: [
          "Dans l'estomac",
          "Dans l'intestin grêle",
          'Dans le gros intestin',
          "Dans l'œsophage"
        ],
        correctAnswer: 1,
        explanation: "Grâce à ses nombreuses villosités intestinales qui augmentent sa surface d'échange, l'intestin grêle est le lieu de l'absorption intestinale où les nutriments rejoignent la circulation sanguine."
      },
      {
        id: 's4q9',
        text: "Quel gaz est rejeté lors de la respiration cellulaire pour produire de l'énergie ?",
        options: [
          'Le dioxygène (O2)',
          "L'azote",
          'Le dioxyde de carbone (CO2)',
          'Le méthane'
        ],
        correctAnswer: 2,
        explanation: "La respiration au niveau des cellules consomme du glucose et du dioxygène (O2) pour produire de l'énergie, et rejette en déchet le dioxyde de carbone (CO2)."
      },
      {
        id: 's4q10',
        text: "Qu'est-ce qu'un mouvement réflexe ?",
        options: [
          'Une action anticipée et planifiée par le cerveau',
          'Une réaction rapide, involontaire et automatique',
          'Un apprentissage de long terme',
          'Un message nerveux qui prend du temps à arriver'
        ],
        correctAnswer: 1,
        explanation: "Le réflexe est une réponse musculaire automatique et très rapide à un stimulus (comme se brûler au contact d'une plaque chaude), souvent géré par la moelle épinière avant même d'atteindre le cerveau."
      }
    ]
  },
  {
      id: 'sciences-extra-quiz-1',
      category: 'Entraînement Intensif',
      title: 'Quiz : Entraînement Brevet Sciences (Avancé)',
      description: '25 questions de niveau 3ème pour réviser la Physique-Chimie, la SVT et la Technologie.',
      type: 'quiz',
      difficulty: 3,
      level: '3eme',
      questions: [
        {
          id: 'sci_ext_1',
          text: "En chimie, quelle est la formule de l'ion hydroxyde, responsable du caractère basique d'une solution ?",
          options: ["$H^+$", "$OH^-$", "$Cl^-$", "$Na^+$"],
          correctAnswer: 1,
          explanation: "Plus une solution contient d'ions hydroxyde $OH^-$, plus elle est basique (pH > 7)."
        },
        {
          id: 'sci_ext_2',
          text: "Lors d'une transformation chimique, que dit la loi de Lavoisier concernant la masse ?",
          options: ["La masse des produits est supérieure à celle des réactifs", "La masse disparaît totalement en énergie", "La masse se conserve", "La masse diminue sous forme de gaz"],
          correctAnswer: 2,
          explanation: "« Rien ne se perd, rien ne se crée, tout se transforme ». La masse totale des réactifs est égale à la masse totale des produits."
        },
        {
          id: 'sci_ext_3',
          text: "Le poids ($P$) et la masse ($m$) sont liés par la relation $P = m \\times g$. En quelle unité s'exprime le poids ?",
          options: ["En kilogrammes (kg)", "En Newtons (N)", "En Joules (J)", "En grammes (g)"],
          correctAnswer: 1,
          explanation: "Puisque le poids est une force d'attraction gravitationnelle, il s'exprime en Newtons (N)."
        },
        {
          id: 'sci_ext_4',
          text: "Que mesure le nombre de masse ($A$) dans la notation symbolique d'un noyau atomique ?",
          options: ["Le nombre de protons uniquement", "Le nombre d'électrons", "Le nombre de nucléons (protons + neutrons)", "La température de l'atome"],
          correctAnswer: 2,
          explanation: "A est le nombre de nucléons. Z est le numéro atomique (nombre de protons)."
        },
        {
          id: 'sci_ext_5',
          text: "En SVT, comment s'appellent les cellules responsables de la production des anticorps ?",
          options: ["Les globules rouges", "Les phagocytes", "Les lymphocytes B", "Les neurones"],
          correctAnswer: 2,
          explanation: "Les lymphocytes B sécrètent des anticorps spécifiques capables de neutraliser un antigène précis dans le sang."
        },
        {
          id: 'sci_ext_6',
          text: "Comment se nomme le phénomène cellulaire où une cellule mère avec 46 chromosomes donne quatre cellules reproductrices (gamètes) à 23 chromosomes ?",
          options: ["La mitose", "La méiose", "La phagocytose", "La digestion"],
          correctAnswer: 1,
          explanation: "La méiose est la division cellulaire qui réduit de moitié le nombre de chromosomes pour former les spermatozoïdes ou les ovules."
        },
        {
          id: 'sci_ext_7',
          text: "Comment appelle-t-on la relation à bénéfices mutuels entre deux êtres vivants d'espèces différentes (ex: algue et champignon dans le lichen) ?",
          options: ["Le parasitisme", "La symbiose", "La prédation", "La compétition"],
          correctAnswer: 1,
          explanation: "La symbiose est une association durable et réciproquement profitable."
        },
        {
          id: 'sci_ext_8',
          text: "Dans une analyse de cycle de vie en Technologie (ACV), quelle étape précède la fabrication ?",
          options: ["L'utilisation", "Le recyclage", "L'extraction des matières premières", "La distribution"],
          correctAnswer: 2,
          explanation: "L'extraction (minerai, pétrole, bois) est toujours la première étape physique avant la conception et fabrication."
        },
        {
          id: 'sci_ext_9',
          text: "Lequel de ces éléments est un capteur thermique (capteur de température) ?",
          options: ["Une diode LED", "Une thermistance", "Un électroaimant", "Un haut-parleur"],
          correctAnswer: 1,
          explanation: "La thermistance a une résistance électrique qui varie selon la température, ce qui permet à la carte de la mesurer."
        },
        {
          id: 'sci_ext_10',
          text: "Qu'est ce qu'un matériau composite ?",
          options: ["Un matériau contenant 100% de bois", "Un assemblage d'au moins deux matériaux non miscibles pour obtenir de nouvelles propriétés", "Un métal pur", "Un plastique recyclable"],
          correctAnswer: 1,
          explanation: "Exemples : le béton armé (béton + acier) ou la fibre de carbone (fibre + résine epoxy)."
        },
        {
          id: 'sci_ext_11',
          text: "Par quelle formule calcule-t-on la vitesse $v$ d'un objet parcourant une distance $d$ en un temps $t$ ?",
          options: ["$v = d + t$", "$v = d \\times t$", "$v = d / t$", "$v = t / d$"],
          correctAnswer: 2,
          explanation: "La vitesse est le rapport de la distance sur le temps ($v = d/t$)."
        },
        {
          id: 'sci_ext_12',
          text: "Quelle est la définition d'un ion ?",
          options: ["Un atome dont le noyau a explosé", "Un atome ou groupe d'atomes ayant gagné ou perdu un ou plusieurs électrons", "Une molécule d'eau", "Un atome neutre avec trop de neutrons"],
          correctAnswer: 1,
          explanation: "S'il a perdu des électrons (charges négatives), il devient positif (cation). S'il en a gagné, il devient négatif (anion)."
        },
        {
          id: 'sci_ext_13',
          text: "En SVT, où ont lieu les échanges gazeux (dioxygène et dioxyde de carbone) entre l'air et le sang ?",
          options: ["Dans la trachée", "Dans l'estomac", "Dans les alvéoles pulmonaires", "Dans les bronches"],
          correctAnswer: 2,
          explanation: "Grâce à leur paroi très fine et leur grande surface, les alvéoles de nos poumons permettent le passage des gaz vers les capillaires sanguins."
        },
        {
          id: 'sci_ext_14',
          text: "Qu'est ce que l'effet de serre additionnel ?",
          options: ["La construction de serres agricoles", "Un refroidissement global de la Terre", "L'augmentation excessive des gaz à effet de serre dans l'atmosphère due aux activités humaines", "La destruction de la couche d'ozone"],
          correctAnswer: 2,
          explanation: "L'effet de serre naturel est vital. C'est son augmentation (souvent liée au rejet de $CO_2$) qui provoque le réchauffement climatique actuel."
        },
        {
          id: 'sci_ext_15',
          text: "Dans un tableur, que fait l'instruction logique '=SI(A1>10; \"Gagné\"; \"Perdu\")' ?",
          options: ["Elle additionne les nombres", "Si A1 est strictement supérieur à 10, affiche Gagné, sinon affiche Perdu", "Elle multiplie A1 par 10", "Elle affiche toujours Perdu"],
          correctAnswer: 1,
          explanation: "C'est une structure conditionnelle classique : `SI(Condition ; Valeur_Si_Vrai ; Valeur_Si_Faux)`."
        },
        {
          id: 'sci_ext_16',
          text: "Comment évolue le pH d'une solution acide si on la dilue avec beaucoup d'eau pure (pH de 7) ?",
          options: ["Il diminue vers 1", "Il augmente et se rapproche de 7", "Il reste constant", "Il monte au-dessus de 10"],
          correctAnswer: 1,
          explanation: "L'acide devient moins concentré. Son pH (inférieur à 7) va donc augmenter jusqu'à se rapprocher de 7, le pH neutre de l'eau."
        },
        {
          id: 'sci_ext_17',
          text: "Sur Terre, qu'est-ce qui est à l'origine du mouvement des masses d'air (les vents) ?",
          options: ["La rotation de la Lune", "Le champ magnétique", "Les différences de pression et de température dans l'atmosphère", "Les courants marins"],
          correctAnswer: 2,
          explanation: "L'air chaud s'élève (basse pression), l'air froid descend (haute pression). Le vent se déplace d'une zone de haute pression vers une basse pression."
        },
        {
          id: 'sci_ext_18',
          text: "Lequel de ces principes est faux concernant la vaccination ?",
          options: ["Elle a un effet curatif immédiat sur le moment (soigne la maladie en cours)", "Elle prépare le système immunitaire à réagir en cas d'infection future", "Elle confère une immunité grâce aux cellules mémoires", "Elle utilise des antigènes atténués ou inactifs"],
          correctAnswer: 0,
          explanation: "La vaccination est préventive (elle prépare le corps *avant* la maladie), contrairement à la sérothérapie qui est curative (injection d'anticorps)."
        },
        {
          id: 'sci_ext_19',
          text: "Dans un diagramme des flux de l'information (technologie), quelle chaîne récupère l'information du bouton poussoir ?",
          options: ["La chaîne d'énergie", "La chaîne d'information (Acquérir)", "La chaîne mécanique", "La source d'alimentation"],
          correctAnswer: 1,
          explanation: "Le bouton poussoir est un composant d'acquisition : il permet à l'intelligence du système de savoir qu'un ordre est donné."
        },
        {
          id: 'sci_ext_20',
          text: "Une molécule d'eau (H2O) compte :",
          options: ["1 atome d'hydrogène et 2 atomes d'oxygène", "2 atomes d'hydrogène et 1 atome d'oxygène", "2 molécules de gaz", "3 atomes d'hydrogène"],
          correctAnswer: 1,
          explanation: "L'indice 2 s'applique au H (Hydrogène), donc on a bien 2 atomes d'H et 1 atome de O."
        },
        {
          id: 'sci_ext_21',
          text: "Quelle est l'intensité du courant dans une boucle simple en série comportant deux lampes différentes ?",
          options: ["Elle est plus forte près de la pile", "Elle est nulle", "Elle est la même en tout point de la boucle", "Elle dépend de la taille du fil"],
          correctAnswer: 2,
          explanation: "C'est la loi d'unicité des intensités dans un circuit en série : l'intensité est la même partout."
        },
        {
          id: 'sci_ext_22',
          text: "Un caractère héréditaire résulte :",
          options: ["D'un apprentissage à l'école", "D'une caractéristique génétique transmise par les parents lors de la reproduction", "De l'alimentation", "Des activités sportives (muscles)"],
          correctAnswer: 1,
          explanation: "Il est contenu dans l'ADN (les gènes) de la cellule-œuf qui provient de la fusion des gamètes parentaux."
        },
        {
          id: 'sci_ext_23',
          text: "Lors d'un effort physique intense, de quoi le muscle a-t-il besoin en plus grande quantité ?",
          options: ["De chaleur et de dioxyde de carbone", "Uniquement d'eau", "De dioxygène et de nutriments (glucose)", "De diazote"],
          correctAnswer: 2,
          explanation: "Le muscle consomme du glucose et du dioxygène pour produire plus d'énergie."
        },
        {
          id: 'sci_ext_24',
          text: "En conception, à quoi sert un cahier des charges fonctionnel ?",
          options: ["À décrire les envies de décoration", "À lister l'ensemble des contraintes, des fonctions de service et des normes qu'un objet devra respecter", "À compter l'argent", "À programmer le code source"],
          correctAnswer: 1,
          explanation: "C'est un document contractuel fondamental qui définit précisément ce que l'on attend du produit final avant de le concevoir."
        },
        {
          id: 'sci_ext_25',
          text: "Quel dispositif convertit l'énergie mécanique du vent en énergie électrique ?",
          options: ["Un panneau photovoltaïque", "Une centrale thermique", "Une éolienne (via son alternateur)", "Une pile à combustible"],
          correctAnswer: 2,
          explanation: "La force du vent fait tourner des pales (rotor), l'alternateur transforme cette rotation mécanique en courant électrique."
        }
      ]
    },
    {
      id: 'sciences-extra-quiz-2',
      category: 'Entraînement Intensif 2',
      title: 'Quiz : Entraînement Brevet Sciences (Très Avancé)',
      description: '25 questions de niveau 3ème pour exceller en Physique, Chimie, SVT et Technologie.',
      type: 'quiz',
      difficulty: 3,
      level: '3eme',
      questions: [
        {
          id: 'sci_ext_26',
          text: "En chimie, quel gaz produit une détonation en présence d'une flamme (le test de l'allumette) ?",
          options: ["Le dioxygène", "Le dihydrogène", "Le dioxyde de carbone", "L'azote"],
          correctAnswer: 1,
          explanation: "Le dihydrogène ($H_2$) produit un « pop » caractéristique en présence d'une flamme."
        },
        {
          id: 'sci_ext_27',
          text: "Pour tester la présence d'ions chlorure ($Cl^-$) dans une solution, quel réactif utilise-t-on ?",
          options: ["La soude", "L'eau de chaux", "Le nitrate d'argent", "Le sulfate de cuivre anhydre"],
          correctAnswer: 2,
          explanation: "Le nitrate d'argent forme un précipité blanc qui noircit à la lumière en présence d'ions chlorure."
        },
        {
          id: 'sci_ext_28',
          text: "Que calcule la formule $E = P \\times t$ en électricité ?",
          options: ["La tension électrique", "La résistance", "L'intensité", "L'énergie électrique"],
          correctAnswer: 3,
          explanation: "L'énergie ($E$ en Joules ou en kWh) est égale à la puissance ($P$ en Watts) multipliée par le temps d'utilisation ($t$)."
        },
        {
          id: 'sci_ext_29',
          text: "Dans un atome neutre, comment sont réparties les charges ?",
          options: ["Autant de protons (+) dans le noyau que d'électrons (-) autour", "Plus de protons que d'électrons", "Plus de neutrons que de protons", "Aucune charge"],
          correctAnswer: 0,
          explanation: "La neutralité de l'atome vient de l'équilibre exact entre les protons nucléaires positifs et les électrons négatifs."
        },
        {
          id: 'sci_ext_30',
          text: "En SVT, qu'est-ce que la dérive des continents (tectonique des plaques) explique principalement ?",
          options: ["La disparition des dinosaures", "La formation des océans, des montagnes et la répartition des séismes", "Le réchauffement climatique", "Les marées"],
          correctAnswer: 1,
          explanation: "Les plaques lithosphériques solides (croûte + manteau supérieur) se déplacent sur l'asthénosphère, expliquant séismes et volcans."
        },
        {
          id: 'sci_ext_31',
          text: "Quelles sont les trois barrières de défenses naturelles de notre corps ?",
          options: ["Les vaccins, les masques, les gants", "La peau, les muqueuses et leur sécrétion (larmes, salive, suc gastrique...)", "Les globules rouges, le plasma, les plaquettes", "Les os, les muscles, les tendons"],
          correctAnswer: 1,
          explanation: "La peau et les muqueuses sont les premières défenses empêchant l'entrée des micro-organismes."
        },
        {
          id: 'sci_ext_32',
          text: "Lequel de ces micro-organismes a absolument besoin d'entrer dans une de nos cellules pour se multiplier ?",
          options: ["Une bactérie", "Un champignon microscopique", "Un virus", "Un parasite"],
          correctAnswer: 2,
          explanation: "Le virus est un parasite intracellulaire obligatoire, il détourne la machinerie de la cellule pour se répliquer."
        },
        {
          id: 'sci_ext_33',
          text: "En Technologie, que décrit la « chaîne d'énergie » d'un système ?",
          options: ["Ses composants logiciels", "L'acquisition et le traitement des données", "L'alimentation, la distribution, la conversion et la transmission de l'énergie", "La couleur du boîtier"],
          correctAnswer: 2,
          explanation: "Ces quatre étapes (Alimenter, Distribuer, Convertir, Transmettre) caractérisent le flux d'énergie de la prise secteur jusqu'au mouvement final."
        },
        {
          id: 'sci_ext_34',
          text: "À quoi sert un engrenage dans un système mécanique ?",
          options: ["Transmettre un mouvement de rotation et modifier la vitesse", "Créer de l'électricité", "Refroidir le moteur", "Stocker de l'énergie"],
          correctAnswer: 0,
          explanation: "En transmettant le mouvement entre deux roues dentées, on peut réduire ou augmenter la vitesse selon le rapport du nombre de dents."
        },
        {
          id: 'sci_ext_35',
          text: "Parmi ces énergies, laquelle n'est PAS renouvelable ?",
          options: ["La biomasse", "L'hydraulique", "Le nucléaire (uranium)", "La géothermie"],
          correctAnswer: 2,
          explanation: "L'uranium est une ressource minière limitée sur Terre, ce n'est donc pas une énergie renouvelable (même si elle est décarbonée)."
        },
        {
          id: 'sci_ext_36',
          text: "Une voiture freine. Quelle conversion d'énergie a lieu au niveau de ses freins ?",
          options: ["Mécanique vers thermique (chaleur)", "Thermique vers électrique", "Potentielle vers chimique", "Électrique vers mécanique"],
          correctAnswer: 0,
          explanation: "Le frottement des plaquettes sur les disques transforme l'énergie cinétique (mécanique) en énergie thermique (chaleur)."
        },
        {
          id: 'sci_ext_37',
          text: "Comment caractérise-t-on la chute libre d'un objet si on néglige les frottements de l'air ?",
          options: ["Son accélération dépend de sa masse", "Sa vitesse est constante", "Son mouvement est accéléré par la gravité quelle que soit sa masse", "Son mouvement est ralenti vers le haut"],
          correctAnswer: 2,
          explanation: "Dans le vide (sans frottement), une plume et un marteau tombent exactement à la même vitesse."
        },
        {
          id: 'sci_ext_38',
          text: "L'énergie cinétique d'un véhicule dépend de :",
          options: ["Sa couleur et sa marque", "Sa masse et sa vitesse", "Son volume et sa hauteur", "Son aérodynamisme uniquement"],
          correctAnswer: 1,
          explanation: "L'énergie cinétique se calcule avec la formule $Ec = \\frac{1}{2} m v^2$. Elle croît proportionnellement à la masse et au carré de la vitesse."
        },
        {
          id: 'sci_ext_39',
          text: "Une solution dont le pH est égal à 2 est :",
          options: ["Très acide", "Légèrement acide", "Neutre", "Basique"],
          correctAnswer: 0,
          explanation: "L'échelle de pH va de 0 à 14. Plus le pH est bas (proche de 0), plus la solution est acide."
        },
        {
          id: 'sci_ext_40',
          text: "Comment la Terre est-elle structurée de la surface vers le centre ?",
          options: ["Noyau interne, noyau externe, manteau, croûte", "Croûte, manteau, noyau externe, noyau interne", "Croûte, noyau, atmosphère", "Lithosphère, stratosphère, ionosphère"],
          correctAnswer: 1,
          explanation: "La croûte terrestre repose sur le manteau, sous lequel se trouve le noyau externe métallique liquide, et enfin le noyau interne solide (graine)."
        },
        {
          id: 'sci_ext_41',
          text: "Laquelle de ces paires est responsable de la détermination génétique du sexe chez la majorité des mammifères ?",
          options: ["Les paires de chromosomes 1 et 2", "Le groupe sanguin (A ou O)", "Les chromosomes X et Y", "L'ADN mitochondrial"],
          correctAnswer: 2,
          explanation: "Un individu avec une paire sexuelle XX sera typiquement femelle, et XY sera mâle."
        },
        {
          id: 'sci_ext_42',
          text: "Lors d'une réaction immunitaire, que font les phagocytes ?",
          options: ["Ils produisent des anticorps", "Ils transportent le dioxygène", "Ils 'mangent' ou englobent les éléments étrangers (phagocytose)", "Ils déclenchent de la fièvre"],
          correctAnswer: 2,
          explanation: "C'est la base de la réaction inflammatoire non spécifique, agissant très rapidement contre toute invasion."
        },
        {
          id: 'sci_ext_43',
          text: "Pourquoi le sang est-il rouge vif à la sortie des poumons (veines pulmonaires) ?",
          options: ["Parce qu'il est riche en dioxyde de carbone", "Parce qu'il est riche en dioxygène fixé sur l'hémoglobine", "Parce que les globules blancs sont morts", "À cause de sa température élevée"],
          correctAnswer: 1,
          explanation: "Le dioxygène se lie à l'hémoglobine des globules rouges, ce qui leur donne cette coloration rouge vif (sang oxygéné)."
        },
        {
          id: 'sci_ext_44',
          text: "En Technologie, le recyclage est abordé dans quelle étape du cycle de vie du produit ?",
          options: ["Conception", "Production", "Distribution", "Fin de vie"],
          correctAnswer: 3,
          explanation: "Le traitement de fin de vie inclut le recyclage, l'incinération ou l'enfouissement."
        },
        {
          id: 'sci_ext_45',
          text: "En algorithmique, qu'est-ce qu'une variable booléenne ?",
          options: ["Une variable qui contient du texte", "Une variable qui ne peut prendre que deux valeurs (Vrai ou Faux, 1 ou 0)", "Une liste de nombres", "Une fonction mathématique"],
          correctAnswer: 1,
          explanation: "L'algèbre de Boole traite les états logiques à deux valeurs (Ex: un interrupteur ouvert ou fermé)."
        },
        {
          id: 'sci_ext_46',
          text: "Quelle particule de l'atome est responsable du courant électrique dans un métal ?",
          options: ["Le proton", "Le neutron", "L'électron (électrons libres)", "L'ion positif"],
          correctAnswer: 2,
          explanation: "Le courant électrique correspond au déplacement d'ordre d'électrons libres de proche en proche dans les matériaux conducteurs."
        },
        {
          id: 'sci_ext_47',
          text: "Sur une étiquette de produit chimique, le pictogramme représentant un feu signale que le produit est :",
          options: ["Toxique", "Corrosif", "Inflammable", "Comburant"],
          correctAnswer: 2,
          explanation: "La flamme indique que le liquide, solide ou gaz peut s'enflammer au contact d'une source de chaleur."
        },
        {
          id: 'sci_ext_48',
          text: "Quel est l'organe du système nerveux central responsable des fonctions cognitives complexes ?",
          options: ["Le nerf sciatique", "La moelle épinière", "Le cerveau / l'encéphale", "Le cœur"],
          correctAnswer: 2,
          explanation: "L'encéphale (qui contient le cerveau) abrite des dizaines de milliards de neurones qui traitent l'information."
        },
        {
          id: 'sci_ext_49',
          text: "À quoi servent les levures (champignons microscopiques) dans la panification (fabrication du pain) ?",
          options: ["À donner le goût salé", "À consommer le sucre pour rejeter du dioxyde de carbone, ce qui fait gonfler la pâte", "À empêcher la moisissure de la farine", "À tuer les bactéries"],
          correctAnswer: 1,
          explanation: "C'est la fermentation alcoolique des sucres par les levures qui dégage le gaz responsable des alvéoles de la mie de pain."
        },
        {
          id: 'sci_ext_50',
          text: "Dans un système domotique, qu'est-ce qu'un « actionneur » (chaîne d'énergie) ?",
          options: ["Un capteur de température", "L'utilisateur qui appuie sur un bouton", "L'élément final qui effectue l'action mécanique attendue (ex: moteur du volet, lampe)", "L'ordinateur central"],
          correctAnswer: 2,
          explanation: "L'actionneur est l'aboutissement de la commande (ex: faire tourner un moteur pour fermer une porte ou allumer un voyant)."
        }
      ]
  }
]
};
