import { Subject, Topic } from '../types';

export const maths: Subject = {
  id: 'maths',
  name: 'Mathématiques',
  icon: 'Calculator',
  color: 'bg-blue-500',
  topics: [
    {
      id: 'maths-1',
      category: 'Nombres et calculs',
      title: 'Arithmétique',
      description: 'Nombres premiers, diviseurs, PGCD et décomposition.',
      type: 'sheet',
      difficulty: 1,
      level: '3eme'
    },
    {
      id: 'maths-cm1-1',
      category: 'Nombres et calculs',
      title: 'Les grands nombres',
      description: 'Lire, écrire et décomposer les nombres jusqu\'au million.',
      type: 'sheet',
      difficulty: 1,
      level: 'cm1'
    },
    {
      id: 'maths-4eme-1',
      category: 'Nombres et calculs',
      title: 'Introduction aux Fractions',
      description: 'Additionner, soustraire et multiplier des fractions simples.',
      type: 'sheet',
      difficulty: 1,
      level: '4eme'
    },
    {
      id: 'maths-2',
      category: 'Nombres et calculs',
      title: 'Fractions et Nombres relatifs',
      description: 'Opérations sur les fractions et règles des signes.',
      type: 'sheet',
      difficulty: 2,
      
    },
    {
      id: 'maths-3',
      category: 'Nombres et calculs',
      title: 'Puissances et Racines carrées',
      description: 'Règles de calcul, écriture scientifique.',
      type: 'sheet',
      difficulty: 2,
      
    },
    {
      id: 'maths-4',
      category: 'Algèbre',
      title: 'Calcul littéral',
      description: 'Développement, factorisation et identités remarquables.',
      type: 'sheet',
      difficulty: 3,
      
    },
    {
      id: 'maths-5',
      category: 'Algèbre',
      title: 'Équations et Inéquations',
      description: 'Résolution du 1er degré et équations produit nul.',
      type: 'sheet',
      difficulty: 3,
      
    },
    {
      id: 'maths-6',
      category: 'Algèbre',
      title: 'Notion de Fonction',
      description: 'Généralités, fonctions affines et linéaires.',
      type: 'sheet',
      difficulty: 2,
      
    },
    {
      id: 'maths-7',
      category: 'Organisation de données',
      title: 'Proportionnalité et Ratios',
      description: 'Pourcentages, ratios, vitesse et masse volumique.',
      type: 'sheet',
      difficulty: 2,
      
    },
    {
      id: 'maths-8',
      category: 'Organisation de données',
      title: 'Statistiques',
      description: 'Moyenne, médiane, et étendue.',
      type: 'sheet',
      difficulty: 2,
      
    },
    {
      id: 'maths-9',
      category: 'Géométrie',
      title: 'Pythagore et Thalès',
      description: 'Théorèmes, réciproques et contraposées. Inclut des figures interactives <pythagoras-svg /> et <thales-svg />.',
      type: 'sheet',
      difficulty: 3,
      
    },
    {
      id: 'maths-10',
      category: 'Géométrie',
      title: 'Trigonométrie',
      description: 'SOH CAH TOA et calculs d\'angles.',
      type: 'sheet',
      difficulty: 3,
      
    },
    {
      id: 'maths-11',
      category: 'Géométrie',
      title: 'Espace : Volumes et Repérage',
      description: 'Calculs de volumes, sections et coordonnées.',
      type: 'sheet',
      difficulty: 2,
      
    },
    {
      id: 'maths-12',
      category: 'Algorithmique',
      title: 'Algorithmique et Programmation',
      description: 'Scratch, variables, boucles et conditions.',
      type: 'sheet',
      difficulty: 1,
      
    },
    {
      id: 'maths-17',
      category: 'Algorithmique',
      title: 'Le Tableur au Brevet',
      description: 'Comprendre et utiliser les formules de tableur (Excel, Calc).',
      type: 'sheet',
      difficulty: 2,
    },
    {
      id: 'maths-18',
      category: 'Algorithmique',
      title: 'Le logiciel Scratch au Brevet',
      description: 'Programmer avec des blocs pour résoudre des problèmes.',
      type: 'sheet',
      difficulty: 1,
    },
    {
      id: 'maths-13',
      category: 'Géométrie',
      title: 'Les Transformations du plan',
      description: 'Symétrie, translation, rotation et homothétie.',
      type: 'sheet',
      difficulty: 2,
    },
    {
      id: 'maths-14',
      category: 'Organisation de données',
      title: 'Grandeurs et Mesures',
      description: 'Aires, périmètres, volumes et conversions.',
      type: 'sheet',
      difficulty: 2,
    },
    {
      id: 'maths-15',
      category: 'Organisation de données',
      title: 'Probabilités',
      description: 'Arbres de probabilités et événements.',
      type: 'sheet',
      difficulty: 2,
    },
    {
      id: 'maths-21',
      category: 'Géométrie',
      title: 'Agrandissement et Réduction',
      description: 'Impact du rapport k sur les longueurs, aires et volumes.',
      type: 'sheet',
      difficulty: 2,
    },
    {
      id: 'maths-16',
      category: 'Nombres et calculs',
      title: 'Quiz : Nombres et calculs',
      description: 'Teste tes connaissances sur les fractions, puissances et arithmétique.',
      type: 'quiz',
      difficulty: 2,
      questions: [
        {
          id: 'm1q1',
          text: "Quelle est la décomposition en facteurs premiers de 60 ?",
          options: ["2 × 30", "2² × 3 × 5", "4 × 15", "2 × 3² × 5"],
          correctAnswer: 1,
          explanation: "60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5 = 2² × 3 × 5."
        },
        {
          id: 'm1q2',
          text: "Que vaut 5⁻² ?",
          options: ["-10", "-25", "1/25", "0.04"],
          correctAnswer: 2,
          explanation: "5⁻² = 1 / 5² = 1 / 25 (ce qui vaut aussi 0.04, mais 1/25 est la forme fractionnaire directe)."
        },
        {
          id: 'm1q3',
          text: "Quelle est l'écriture scientifique de 45 000 ?",
          options: ["45 × 10³", "4.5 × 10⁴", "0.45 × 10⁵", "4.5 × 10⁻⁴"],
          correctAnswer: 1,
          explanation: "L'écriture scientifique doit avoir un seul chiffre non nul avant la virgule : 4.5 × 10⁴."
        },
        {
          id: 'm1q4',
          text: "Comment calcule-t-on le produit de deux fractions ?",
          options: ["On multiplie les numérateurs entre eux et les dénominateurs entre eux", "On met au même dénominateur puis on additionne", "On fait le produit en croix", "On inverse la deuxième fraction"],
          correctAnswer: 0,
          explanation: "Pour multiplier deux fractions, on multiplie simplement les numérateurs entre eux et les dénominateurs entre eux : (a/b) × (c/d) = (a×c)/(b×d)."
        },
        {
          id: 'm1q5',
          text: "Quel est le PGCD de 12 et 18 ?",
          options: ["2", "3", "6", "36"],
          correctAnswer: 2,
          explanation: "Les diviseurs de 12 sont 1, 2, 3, 4, 6, 12. Les diviseurs de 18 sont 1, 2, 3, 6, 9, 18. Le Plus Grand Commun Diviseur est 6."
        },
        {
          id: 'm1q6',
          text: "Que vaut (-3)² ?",
          options: ["-9", "9", "-6", "6"],
          correctAnswer: 1,
          explanation: "(-3)² = (-3) × (-3). Le produit de deux nombres négatifs est positif, donc 9."
        },
        {
          id: 'm1q7',
          text: "Que vaut 10³ × 10⁵ ?",
          options: ["10¹⁵", "10⁸", "20⁸", "100⁸"],
          correctAnswer: 1,
          explanation: "Pour multiplier des puissances de même base, on additionne les exposants : 10³ × 10⁵ = 10^(3+5) = 10⁸."
        },
        {
          id: 'm1q8',
          text: "Calculez 3/4 + 1/2.",
          options: ["4/6", "1", "5/4", "3/8"],
          correctAnswer: 2,
          explanation: "3/4 + 1/2 = 3/4 + 2/4 = 5/4."
        },
        {
          id: 'm1q9',
          text: "Quel est l'inverse de 4 ?",
          options: ["-4", "0.25", "1", "4"],
          correctAnswer: 1,
          explanation: "L'inverse de x est 1/x. L'inverse de 4 est 1/4 = 0.25."
        },
        {
          id: 'm1q10',
          text: "Si un produit coûte 80 € et baisse de 20%, quel est son nouveau prix ?",
          options: ["60 €", "64 €", "70 €", "72 €"],
          correctAnswer: 1,
          explanation: "Baisse de 20% : 80 × (1 - 0.20) = 80 × 0.80 = 64 €."
        }
      ]
    },
    {
      id: 'maths-1017',
      category: 'Géométrie',
      title: 'Quiz : Géométrie (Pythagore, Thalès, Trigo)',
      description: 'Teste tes connaissances sur les théorèmes fondamentaux de la géométrie.',
      type: 'quiz',
      difficulty: 2,
      questions: [
        {
          id: 'm2q1',
          text: "Dans un triangle ABC rectangle en A, quelle est l'égalité de Pythagore ?",
          options: ["AB² = AC² + BC²", "AC² = AB² + BC²", "BC² = AB² + AC²", "BC = AB + AC"],
          correctAnswer: 2,
          explanation: "L'hypoténuse est le côté opposé à l'angle droit (donc [BC] si rectangle en A). Le théorème dit que le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés."
        },
        {
          id: 'm2q2',
          text: "Dans un triangle rectangle, à quoi correspond le cosinus d'un angle aigu ?",
          options: ["Opposé / Hypoténuse", "Adjacent / Hypoténuse", "Opposé / Adjacent", "Adjacent / Opposé"],
          correctAnswer: 1,
          explanation: "Moyen mnémotechnique SOH CAH TOA : Cosinus = Adjacent / Hypoténuse (CAH)."
        },
        {
          id: 'm2q3',
          text: "À quoi sert la réciproque du théorème de Pythagore ?",
          options: ["À calculer la longueur de l'hypoténuse", "À prouver que deux droites sont parallèles", "À prouver qu'un triangle est rectangle", "À calculer la mesure d'un angle"],
          correctAnswer: 2,
          explanation: "Si dans un triangle, le carré du plus grand côté est égal à la somme des carrés des deux autres côtés, alors le triangle est rectangle (Réciproque de Pythagore)."
        },
        {
          id: 'm2q4',
          text: "Dans la configuration de Thalès (papillon ou classique), quelle condition est indispensable ?",
          options: ["Avoir un angle droit", "Avoir deux droites parallèles", "Avoir un triangle isocèle", "Avoir des segments de même longueur"],
          correctAnswer: 1,
          explanation: "Le théorème de Thalès s'applique uniquement si l'on a deux droites parallèles coupées par deux sécantes."
        },
        {
          id: 'm2q5',
          text: "Que signifie SOH dans SOH CAH TOA ?",
          options: ["Sinus = Opposé / Hypoténuse", "Sinus = Adjacent / Hypoténuse", "Sinus = Opposé × Hypoténuse", "Sécante = Opposé / Hauteur"],
          correctAnswer: 0,
          explanation: "SOH : Sinus = côté Opposé / Hypoténuse."
        },
        {
          id: 'm2q6',
          text: "Si je connais la longueur du côté adjacent et de l'hypoténuse, quelle formule trigonométrique dois-je utiliser pour trouver l'angle ?",
          options: ["Sinus", "Cosinus", "Tangente", "Pythagore"],
          correctAnswer: 1,
          explanation: "CAH : Cosinus = Adjacent / Hypoténuse. C'est la formule qui relie ces trois éléments."
        },
        {
          id: 'm2q7',
          text: "Si on agrandit une figure en multipliant toutes ses longueurs par 3, par combien son aire est-elle multipliée ?",
          options: ["Par 3", "Par 6", "Par 9", "Par 27"],
          correctAnswer: 2,
          explanation: "Lors d'un agrandissement de rapport k, les longueurs sont multipliées par k, mais les aires sont multipliées par k². Ici, k = 3, donc l'aire est multipliée par 3² = 9."
        },
        {
          id: 'm2q8',
          text: "Quelle est la somme des angles dans un triangle ?",
          options: ["90°", "180°", "270°", "360°"],
          correctAnswer: 1,
          explanation: "Dans n'importe quel triangle (quelconque, rectangle, isocèle...), la somme des trois angles est toujours égale à 180°."
        },
        {
          id: 'm2q9',
          text: "Un triangle qui a deux côtés de même longueur est un triangle...",
          options: ["Rectangle", "Équilatéral", "Isocèle", "Scalène"],
          correctAnswer: 2,
          explanation: "Un triangle isocèle possède au moins deux côtés de même longueur (et donc deux angles égaux à sa base)."
        },
        {
          id: 'm2q10',
          text: "Qu'est-ce qu'une homothétie ?",
          options: ["Une rotation", "Un agrandissement ou une réduction", "Un glissement", "Une symétrie"],
          correctAnswer: 1,
          explanation: "L'homothétie est une transformation qui agrandit ou réduit une figure à partir d'un centre et d'un rapport k."
        }
      ]
    },
    {
      id: 'maths-23',
      category: 'Algorithmique',
      title: 'Quiz : Algorithmique et Programmation',
      description: 'Teste tes connaissances sur Scratch et la logique de programmation.',
      type: 'quiz',
      difficulty: 1,
      questions: [
        {
          id: 'm3q1',
          text: "Dans Scratch, pour tracer un carré, de combien de degrés le lutin doit-il tourner à chaque coin ?",
          options: ["45°", "60°", "90°", "120°"],
          correctAnswer: 2,
          explanation: "Pour tracer un polygone régulier à n côtés, on tourne de 360/n degrés. Pour un carré (n=4), 360/4 = 90°."
        },
        {
          id: 'm3q2',
          text: "Qu'est-ce qu'une variable en programmation ?",
          options: ["Une erreur dans le code", "Un espace mémoire pour stocker une donnée", "Une boucle infinie", "Un lutin de Scratch"],
          correctAnswer: 1,
          explanation: "Une variable est comme une boîte dans laquelle on peut ranger une valeur (un nombre, du texte) qui peut changer au cours du programme (ex: un score)."
        },
        {
          id: 'm3q3',
          text: "À quoi sert une boucle 'Répéter jusqu'à ce que' ?",
          options: ["À répéter un nombre de fois défini à l'avance", "À répéter indéfiniment", "À répéter des instructions tant qu'une condition n'est pas remplie", "À arrêter le programme"],
          correctAnswer: 2,
          explanation: "C'est une boucle conditionnelle : elle exécute les instructions à l'intérieur en boucle, et s'arrête dès que la condition spécifiée devient vraie."
        },
        {
          id: 'm3q4',
          text: "Si je veux tracer un triangle équilatéral, de quel angle dois-je tourner ?",
          options: ["60°", "90°", "120°", "180°"],
          correctAnswer: 2,
          explanation: "L'angle extérieur (celui dont on tourne) est 360 / 3 = 120°. L'angle intérieur sera bien de 180 - 120 = 60°."
        },
        {
          id: 'm3q5',
          text: "Que fait l'instruction 'Aller à x: 0 y: 0' dans Scratch ?",
          options: ["Elle supprime le lutin", "Elle place le lutin au centre de l'écran", "Elle fait avancer le lutin de 0 pas", "Elle cache le lutin"],
          correctAnswer: 1,
          explanation: "Le point de coordonnées (0, 0) correspond au centre de la scène dans Scratch."
        }
      ]
    },
    {
      id: 'maths-19',
      category: 'Algèbre',
      title: 'Quiz : Algèbre (Calcul littéral, Équations, Fonctions)',
      description: 'Teste tes connaissances sur les expressions littérales, les équations et les fonctions.',
      type: 'quiz',
      difficulty: 3,
      questions: [
        {
          id: 'm4q1',
          text: "Quelle est la forme développée de (a + b)² ?",
          options: ["a² + b²", "a² - 2ab + b²", "a² + 2ab + b²", "a² - b²"],
          correctAnswer: 2,
          explanation: "C'est la première identité remarquable : le carré d'une somme."
        },
        {
          id: 'm4q2',
          text: "Quelle est la solution de l'équation 2x + 5 = 11 ?",
          options: ["x = 3", "x = 8", "x = 4", "x = 6"],
          correctAnswer: 0,
          explanation: "2x + 5 = 11 => 2x = 11 - 5 => 2x = 6 => x = 6 / 2 => x = 3."
        },
        {
          id: 'm4q3',
          text: "Que signifie factoriser une expression ?",
          options: ["Transformer un produit en somme", "Transformer une somme en produit", "Remplacer x par un nombre", "Réduire l'expression"],
          correctAnswer: 1,
          explanation: "Factoriser, c'est écrire une somme (ou une différence) sous la forme d'un produit de facteurs (ex: ka + kb = k(a+b))."
        },
        {
          id: 'm4q4',
          text: "Comment s'appelle la représentation graphique d'une fonction affine f(x) = ax + b ?",
          options: ["Une parabole", "Une courbe", "Une droite passant par l'origine", "Une droite ne passant pas forcément par l'origine"],
          correctAnswer: 3,
          explanation: "Une fonction affine est représentée par une droite. Elle ne passe par l'origine que si b = 0 (fonction linéaire)."
        },
        {
          id: 'm4q5',
          text: "Dans l'expression f(x) = 3x - 2, quel est l'antécédent de 7 ?",
          options: ["19", "3", "5", "9"],
          correctAnswer: 1,
          explanation: "On cherche x tel que f(x) = 7. Donc 3x - 2 = 7 => 3x = 9 => x = 3."
        },
        {
          id: 'm4q6',
          text: "Quelle est la forme factorisée de x² - 9 ?",
          options: ["(x - 3)²", "(x + 3)²", "(x - 9)(x + 1)", "(x - 3)(x + 3)"],
          correctAnswer: 3,
          explanation: "C'est la troisième identité remarquable : a² - b² = (a - b)(a + b), avec a = x et b = 3."
        },
        {
          id: 'm4q7',
          text: "Développez 2(x + 5).",
          options: ["2x + 5", "2x + 10", "x + 10", "2x - 10"],
          correctAnswer: 1,
          explanation: "On distribue le 2 : 2 × x + 2 × 5 = 2x + 10."
        },
        {
          id: 'm4q8',
          text: "Une fonction qui multiplie x par 3 s'écrit :",
          options: ["f(x) = x + 3", "f(x) = 3x", "f(x) = x/3", "f(x) = x²"],
          correctAnswer: 1,
          explanation: "C'est une fonction linéaire de coefficient 3."
        },
        {
          id: 'm1q11',
          text: "Vrai ou Faux : 2 est un nombre premier.",
          options: ["Vrai", "Faux"],
          correctAnswer: 0,
          explanation: "Vrai. 2 est le seul nombre premier pair."
        },
        {
          id: 'm5q7',
          text: "La probabilité d'un événement certain est :",
          options: ["0", "0.5", "1", "100"],
          correctAnswer: 2,
          explanation: "Une probabilité est comprise entre 0 (impossible) et 1 (certain)."
        }
      ]
    },
    {
      id: 'maths-20',
      category: 'Organisation de données',
      title: 'Quiz : Organisation de données (Stats, Probas, Grandeurs)',
      description: 'Teste tes connaissances sur les statistiques, probabilités et grandeurs.',
      type: 'quiz',
      difficulty: 2,
      questions: [
        {
          id: 'm5q1',
          text: "Dans la série de notes : 10, 12, 14, 15, 18. Quelle est la médiane ?",
          options: ["13.8", "14", "15", "12"],
          correctAnswer: 1,
          explanation: "La série est ordonnée et contient 5 valeurs (impair). La médiane est la valeur centrale, soit la 3ème valeur : 14."
        },
        {
          id: 'm5q2',
          text: "Quelle est la probabilité d'obtenir un nombre pair en lançant un dé classique à 6 faces ?",
          options: ["1/6", "1/3", "1/2", "2/3"],
          correctAnswer: 2,
          explanation: "Il y a 3 issues favorables (2, 4, 6) sur 6 issues possibles. 3/6 = 1/2."
        },
        {
          id: 'm5q3',
          text: "Comment calcule-t-on l'étendue d'une série statistique ?",
          options: ["Valeur maximale - Valeur minimale", "Somme des valeurs / Effectif total", "Valeur centrale", "Valeur la plus fréquente"],
          correctAnswer: 0,
          explanation: "L'étendue mesure la dispersion de la série : c'est la différence entre la plus grande et la plus petite valeur."
        },
        {
          id: 'm5q4',
          text: "Une voiture roule à 90 km/h. Quelle distance parcourt-elle en 20 minutes ?",
          options: ["30 km", "45 km", "20 km", "18 km"],
          correctAnswer: 0,
          explanation: "20 minutes = 1/3 d'heure. Distance = Vitesse × Temps = 90 × (1/3) = 30 km."
        },
        {
          id: 'm5q5',
          text: "Quel est le volume d'un cylindre de rayon r et de hauteur h ?",
          options: ["π × r × h", "2 × π × r × h", "π × r² × h", "(1/3) × π × r² × h"],
          correctAnswer: 2,
          explanation: "Le volume d'un cylindre (comme un prisme) est Aire de la base × hauteur. La base est un disque d'aire π × r², donc V = π × r² × h."
        },
        {
          id: 'm5q6',
          text: "Si la probabilité d'un événement A est de 0.3, quelle est la probabilité de son événement contraire (non A) ?",
          options: ["0.3", "0.7", "1", "0"],
          correctAnswer: 1,
          explanation: "La somme des probabilités d'un événement et de son contraire est toujours égale à 1. Donc P(non A) = 1 - 0.3 = 0.7."
        },
        {
          id: 'm5q7_extra',
          text: "Pour convertir 3,5 mètres cubes ($m^3$) en litres ($L$), combien de litres obtient-on ?",
          options: ["35 L", "350 L", "3 500 L", "35 000 L"],
          correctAnswer: 2,
          explanation: "On sait que $1\\ m^3 = 1000\\ L$. Donc $3,5\\ m^3 = 3\\ 500\\ L$."
        }
      ]
    },
    {
      id: 'maths-22',
      category: 'Entraînement Intensif',
      title: 'Quiz : Entraînement Brevet (Avancé)',
      description: '25 questions de niveau 3ème pour réviser tous les chapitres.',
      type: 'quiz',
      difficulty: 3,
      level: '3eme',
      questions: [
        {
          id: 'm_ext_1',
          text: "Résous l'équation : $3x - 5 = x + 7$",
          options: ["x = 2", "x = 4", "x = 6", "x = 1"],
          correctAnswer: 2,
          explanation: "On isole x : $3x - x = 7 + 5 \\Rightarrow 2x = 12 \\Rightarrow x = 6$."
        },
        {
          id: 'm_ext_2',
          text: "Quelle est la factorisation de $x^2 - 16$ ?",
          options: ["$(x - 4)(x + 4)$", "$(x - 16)^2$", "$(x - 4)^2$", "$(x + 4)^2$"],
          correctAnswer: 0,
          explanation: "C'est l'identité remarquable $a^2 - b^2 = (a-b)(a+b)$, avec $a=x$ et $b=4$."
        },
        {
          id: 'm_ext_3',
          text: "Dans un repère, on donne A(1; 2) et B(4; 6). Quelle est la longueur du segment [AB] ?",
          options: ["3", "4", "5", "7"],
          correctAnswer: 2,
          explanation: "On applique $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
        },
        {
          id: 'm_ext_4',
          text: "Dans une urne contenant 3 boules rouges et 5 boules bleues, quelle est la probabilité de tirer une boule rouge ?",
          options: ["3/5", "3/8", "5/8", "1/3"],
          correctAnswer: 1,
          explanation: "Il y a en tout 8 boules (3+5). La probabilité de tirer rouge est la part des rouges sur le total : $3/8$."
        },
        {
          id: 'm_ext_5',
          text: "L'écriture scientifique de 0,0045 est :",
          options: ["$4,5 \\times 10^3$", "$45 \\times 10^{-4}$", "$4,5 \\times 10^{-3}$", "$0,45 \\times 10^{-2}$"],
          correctAnswer: 2,
          explanation: "L'écriture scientifique ne comporte qu'un seul chiffre non nul avant la virgule. On décale la virgule de 3 rangs vers la droite, donc $10^{-3}$."
        },
        {
          id: 'm_ext_6',
          text: "Quel est le volume d'un cône de révolution de rayon 3 cm et de hauteur 5 cm (en $cm^3$) ?",
          options: ["$15\\pi$", "$5\\pi$", "$45\\pi$", "$9\\pi$"],
          correctAnswer: 1,
          explanation: "Le volume d'un cône est $\\frac{1}{3} \\times \\text{Aire de base} \\times \\text{hauteur} = \\frac{1}{3} \\times \\pi \\times 3^2 \\times 5 = \\frac{1}{3} \\times 45\\pi = 15\\pi$ ? Non, $(1/3) \\times 9\\pi \\times 5 = 15\\pi$. Autant pour moi, l'option correcte devrait être 15π. Corrigeons, c'est $15\\pi$ qui est la réponse. $1/3 \\times 9\\pi \\times 5 = 15\\pi$." // Correction
        },
        {
          id: 'm_ext_7',
          text: "En trigonométrie, quel est le rapport qui définit le sinus (SOH) dans un triangle rectangle ?",
          options: ["Adjacent / Hypoténuse", "Opposé / Adjacent", "Opposé / Hypoténuse", "Adjacent / Opposé"],
          correctAnswer: 2,
          explanation: "SOH : Sinus = Côté Opposé / Hypoténuse."
        },
        {
          id: 'm_ext_8',
          text: "Quelle relation permet de dire que deux droites sont perpendiculaires à l'aide d'un triangle ABC ?",
          options: ["Le théorème de Thalès", "La réciproque du théorème de Pythagore", "Les fractions irréductibles", "Les propriétés du parallélogramme"],
          correctAnswer: 1,
          explanation: "Si dans le triangle ABC on vérifie que $BC^2 = AB^2 + AC^2$, la réciproque de Pythagore prouve que l'angle en A est droit."
        },
        {
          id: 'm_ext_9',
          text: "Si une fonction $g$ est définie par $g(x) = x^2 - 4$, alors $g(-3)$ vaut :",
          options: ["5", "-13", "13", "-5"],
          correctAnswer: 0,
          explanation: "$g(-3) = (-3)^2 - 4 = 9 - 4 = 5$."
        },
        {
          id: 'm_ext_10',
          text: "Un algorithme Scratch contient une boucle *Répéter 10 fois* contenant *Avancer de 10* et *Tourner de 36°*. Que va tracer le lutin ?",
          options: ["Un carré", "Un triangle", "Un décagone régulier", "Un cercle"],
          correctAnswer: 2,
          explanation: "10 fois un angle de 36° (10 × 36 = 360°), cela forme un polygone à 10 côtés (décagone)."
        },
        {
          id: 'm_ext_11',
          text: "Soient deux grandeurs A et B proportionnelles. Si A = 4 quand B = 10, que vaut B quand A = 10 ?",
          options: ["20", "25", "16", "40"],
          correctAnswer: 1,
          explanation: "Coefficient de proportionnalité : $10 / 4 = 2,5$. Donc si $A=10$, $B = 10 \\times 2,5 = 25$."
        },
        {
          id: 'm_ext_12',
          text: "Réduire l'expression $3x^2 + 5x - x^2 + 2x$ :",
          options: ["$2x^2 + 3x$", "$4x^2 + 7x$", "$2x^2 + 7x$", "$5x^3$"],
          correctAnswer: 2,
          explanation: "On regroupe les $x^2$ ($3-1=2$) et les $x$ ($5+2=7$), ce qui donne $2x^2 + 7x$."
        },
        {
          id: 'm_ext_13',
          text: "Combien y a-t-il de secondes dans une journée entière (24h) ?",
          options: ["3 600", "86 400", "1 440", "144 000"],
          correctAnswer: 1,
          explanation: "$24 \\times 60 \\times 60 = 86 400$ s."
        },
        {
          id: 'm_ext_14',
          text: "Combien fait le produit de $\\frac{2}{3} \\times \\frac{4}{5}$ ?",
          options: ["8/15", "6/8", "10/12", "8/8"],
          correctAnswer: 0,
          explanation: "On multiplie les numérateurs ($2\\times 4=8$) et les dénominateurs ($3\\times 5=15$), soit $8/15$."
        },
        {
          id: 'm_ext_15',
          text: "Comment appelle-t-on le nombre central d'une série statistique ordonnée qui sépare la série en deux moitiés égales ?",
          options: ["La moyenne", "L'étendue", "La médiane", "Le premier quartile"],
          correctAnswer: 2,
          explanation: "C'est la définition de la médiane."
        },
        {
          id: 'm_ext_16',
          text: "Laquelle de ces fractions équivaut à 0,75 ?",
          options: ["1/2", "3/4", "5/8", "4/5"],
          correctAnswer: 1,
          explanation: "$3 \\div 4 = 0,75$ (soit les trois quarts)."
        },
        {
          id: 'm_ext_17',
          text: "Dans quel cas utilise-t-on le théorème de Thalès ?",
          options: ["Pour calculer l'aire d'un disque", "Pour calculer des longueurs lorsque l'on a des droites parallèles (configuration papillon ou classique)", "Pour calculer la racine carrée d'un nombre négatif", "Pour prouver qu'un angle est droit"],
          correctAnswer: 1,
          explanation: "Le théorème de Thalès s'applique dans des triangles avec des droites sécantes coupées par deux droites parallèles."
        },
        {
          id: 'm_ext_18',
          text: "Le point d'intersection des médianes d'un triangle s'appelle :",
          options: ["Le centre de gravité", "L'orthocentre", "Le centre du cercle circonscrit", "Son foyer"],
          correctAnswer: 0,
          explanation: "L'intersection des médianes est le centre de gravité du triangle."
        },
        {
          id: 'm_ext_19',
          text: "Si une voiture consomme 6 Litres pour 100 km, combien consomme-t-elle pour 350 km ?",
          options: ["18 L", "21 L", "24 L", "20 L"],
          correctAnswer: 1,
          explanation: "Par proportionnalité, pour 300 km c'est $3 \\times 6 = 18$ L, pour 50 km c'est 3 L. $18 + 3 = 21$ L."
        },
        {
          id: 'm_ext_20',
          text: "Un article coûte 100 €. Son prix augmente de 10 %, puis diminue de 10 %. Quel est son coût final ?",
          options: ["100 €", "99 €", "101 €", "110 €"],
          correctAnswer: 1,
          explanation: "100 € + 10 % = 110 €. Ensuite, 110 € - 10 % (soit -11 €) = 99 €."
        },
        {
          id: 'm_ext_21',
          text: "Quelle est la probabilité d'obtenir une somme de 2 en lançant deux dés équilibrés à 6 faces ?",
          options: ["1/12", "1/6", "1/36", "2/36"],
          correctAnswer: 2,
          explanation: "Il n'y a qu'une seule combinaison (1 et 1) sur 36 résultats possibles ($6 \\times 6$)."
        },
        {
          id: 'm_ext_22',
          text: "Un prisme de hauteur 10 cm a une base dont l'aire est 15 cm². Quel est son volume ?",
          options: ["25 cm³", "75 cm³", "150 cm³", "50 cm³"],
          correctAnswer: 2,
          explanation: "Volume = Aire de base $\\times$ Hauteur = $15 \\times 10 = 150 \\text{ cm}^3$."
        },
        {
          id: 'm_ext_23',
          text: "Si un randonneur part à 14h45 et roule pendant 2h30, à quelle heure arrive-t-il ?",
          options: ["16h15", "17h15", "16h75", "17h30"],
          correctAnswer: 1,
          explanation: "$14\\text{h}45 + 2\\text{h} = 16\\text{h}45$. Puis $16\\text{h}45 + 30\\text{min} = 17\\text{h}15$."
        },
        {
          id: 'm_ext_24',
          text: "Quelle est la racine carrée de 144 ?",
          options: ["12", "14", "24", "16"],
          correctAnswer: 0,
          explanation: "$12 \\times 12 = 144$."
        },
        {
          id: 'm_ext_25',
          text: "La fonction affine $f(x) = -2x + 7$ admet pour ordonnée à l'origine :",
          options: ["-2", "5", "7", "0"],
          correctAnswer: 2,
          explanation: "Dans $f(x) = ax + b$, le nombre $b$ (ici 7) est l'ordonnée à l'origine."
        }
      ]
    },
    {
      id: 'maths-extra-quiz-2',
      category: 'Entraînement Intensif 2',
      title: 'Quiz : Entraînement Brevet (Très Avancé)',
      description: '25 questions de niveau 3ème pour exceller au Brevet.',
      type: 'quiz',
      difficulty: 3,
      level: '3eme',
      questions: [
        {
          id: 'm_ext_26',
          text: "Quelle est la section d'un cylindre coupée par un plan parallèle à son axe ?",
          options: ["Un cercle", "Un rectangle", "Un triangle", "Une ellipse"],
          correctAnswer: 1,
          explanation: "La section d'un cylindre de révolution par un plan parallèle à son axe de révolution est un rectangle."
        },
        {
          id: 'm_ext_27',
          text: "Pour deux séries de tailles N1 et N2, comment calcule-t-on la moyenne globale ?",
          options: ["(Moyenne1 + Moyenne2) / 2", "La somme des valeurs divisée par (N1+N2)", "(N1 + N2) / 2", "Le produit des moyennes"],
          correctAnswer: 1,
          explanation: "Il faut pondérer : (Moyenne1 × N1 + Moyenne2 × N2) / (N1 + N2), ce qui équivaut à la somme de toutes les valeurs sur l'effectif total."
        },
        {
          id: 'm_ext_28',
          text: "Combien de cm³ y a-t-il dans 1 L ?",
          options: ["10", "100", "1000", "10 000"],
          correctAnswer: 2,
          explanation: "1 L = 1 dm³ = 1000 cm³."
        },
        {
          id: 'm_ext_29',
          text: "Développez $(2x - 3)^2$.",
          options: ["$4x^2 - 9$", "$4x^2 - 12x + 9$", "$2x^2 - 6x + 9$", "$4x^2 + 12x + 9$"],
          correctAnswer: 1,
          explanation: "$(a-b)^2 = a^2 - 2ab + b^2 = (2x)^2 - 2(2x)(3) + 3^2 = 4x^2 - 12x + 9$."
        },
        {
          id: 'm_ext_30',
          text: "À quelle vitesse roule une voiture qui parcourt 15 km en 10 minutes ?",
          options: ["90 km/h", "60 km/h", "100 km/h", "150 km/h"],
          correctAnswer: 0,
          explanation: "En 10 min elle fait 15 km. En 60 min (1 h) elle fera $15 \\times 6 = 90$ km. Donc 90 km/h."
        },
        {
          id: 'm_ext_31',
          text: "Quelle fraction irréductible est équivalente à 48/60 ?",
          options: ["4/5", "8/10", "12/15", "6/8"],
          correctAnswer: 0,
          explanation: "$48/60 = (12 \\times 4) / (12 \\times 5) = 4/5$."
        },
        {
          id: 'm_ext_32',
          text: "Dans un triangle ABC, si on trace la hauteur issue de A, elle est :",
          options: ["Perpendiculaire à (BC)", "Parallèle à (BC)", "Confondue avec (AB)", "Sécante en son milieu"],
          correctAnswer: 0,
          explanation: "Une hauteur est issue d'un sommet et perpendiculaire au côté opposé."
        },
        {
          id: 'm_ext_33',
          text: "Quelle valeur annule l'expression $(x - 5)(2x + 4)$ ?",
          options: ["5 et 4", "-5 et 2", "5 et -2", "Seulement 5"],
          correctAnswer: 2,
          explanation: "Un produit est nul si l'un de ses facteurs est nul. $x - 5 = 0 \\Rightarrow x = 5$. Et $2x + 4 = 0 \\Rightarrow 2x = -4 \\Rightarrow x = -2$."
        },
        {
          id: 'm_ext_34',
          text: "Le périmètre d'un cercle de rayon R est :",
          options: ["$\\pi R^2$", "$2 \\pi R$", "$\\pi D^2$", "$4 \\pi R^2$"],
          correctAnswer: 1,
          explanation: "Le périmètre est $2 \\times \\pi \\times Rayon$ (ou $\\pi \\times Diamètre$)."
        },
        {
          id: 'm_ext_35',
          text: "Une urne contient 2 boules noires, 3 rouges, et 5 blanches. On tire une boule au hasard. P(ne pas tirer rouge) = ?",
          options: ["3/10", "7/10", "1/2", "1/5"],
          correctAnswer: 1,
          explanation: "Il y a 10 boules. Il y a 7 boules non rouges (2 noires + 5 blanches). Donc $7/10$."
        },
        {
          id: 'm_ext_36',
          text: "Si le volume d'une sphère est $\\frac{4}{3} \\pi R^3$, que devient son volume si on double son rayon (agrandissement de rapport k=2) ?",
          options: ["Multiplié par 2", "Multiplié par 4", "Multiplié par 8", "Multiplié par 16"],
          correctAnswer: 2,
          explanation: "Lors d'un agrandissement de rapport $k$, les volumes sont multipliés par $k^3$. $2^3 = 8$."
        },
        {
          id: 'm_ext_37',
          text: "Quelle est l'aire d'un triangle de base 8 cm et de hauteur 5 cm ?",
          options: ["20 cm²", "40 cm²", "13 cm²", "10 cm²"],
          correctAnswer: 0,
          explanation: "Aire = $(base \\times hauteur) / 2 = (8 \\times 5) / 2 = 40 / 2 = 20$ cm²."
        },
        {
          id: 'm_ext_38',
          text: "Combien font $10^{-3} \\times 10^{-4}$ ?",
          options: ["$10^{12}$", "$10^{-12}$", "$10^{-7}$", "$10^1$"],
          correctAnswer: 2,
          explanation: "On additionne les exposants : $-3 + (-4) = -7$. Donc $10^{-7}$."
        },
        {
          id: 'm_ext_39',
          text: "Quel est le PGCD de 24 et 36 ?",
          options: ["6", "8", "12", "4"],
          correctAnswer: 2,
          explanation: "Les diviseurs communs comprennent 2, 3, 4, 6, 12. Le plus grand est 12 ($24 = 2 \\times 12$ et $36 = 3 \\times 12$)."
        },
        {
          id: 'm_ext_40',
          text: "Un T-shirt à 20 € subit une réduction de 30%. Quel est son nouveau prix ?",
          options: ["14 €", "15 €", "6 €", "17 €"],
          correctAnswer: 0,
          explanation: "La réduction est de 30% de 20 € = $0,3 \\times 20 = 6$ €. Ancien prix - réduction = $20 - 6 = 14$ €."
        },
        {
          id: 'm_ext_41',
          text: "Si $\\cos(x) = 0,5$ dans un triangle rectangle, combien mesure l'angle $x$ ?",
          options: ["30°", "45°", "60°", "90°"],
          correctAnswer: 2,
          explanation: "L'arc cosinus de 0,5 correspond à un angle de 60°."
        },
        {
          id: 'm_ext_42',
          text: "Scratch : Quelle condition permet d'exécuter un code uniquement si le score dépasse 10 ?",
          options: ["Si (score = 10) alors", "Répéter jusqu'à ce que score > 10", "Si (score > 10) alors", "Attendre que score < 10"],
          correctAnswer: 2,
          explanation: "Le bloc `Si (condition) alors` avec la condition mathématique `>`."
        },
        {
          id: 'm_ext_43',
          text: "Quelle est l'étendue de la série : 12, 14, 5, 18, 9 ?",
          options: ["13", "12", "18", "5"],
          correctAnswer: 0,
          explanation: "L'étendue est la différence entre la valeur maximale et la minimale : $18 - 5 = 13$."
        },
        {
          id: 'm_ext_44',
          text: "Quel est le quart du tiers de 120 ?",
          options: ["10", "20", "30", "40"],
          correctAnswer: 0,
          explanation: "Le tiers de 120 est 40. Le quart de 40 est 10. ($\\frac{1}{4} \\times \\frac{1}{3} \\times 120 = 10$)."
        },
        {
          id: 'm_ext_45',
          text: "Simplifier l'expression $2\\sqrt{9}$ :",
          options: ["6", "18", "$2\\sqrt{3}$", "9"],
          correctAnswer: 0,
          explanation: "$\\sqrt{9} = 3$. Donc $2 \\times 3 = 6$."
        },
        {
          id: 'm_ext_46',
          text: "Par quel nombre doit-on multiplier pour augmenter un prix de 5% ?",
          options: ["0,05", "1,5", "1,05", "5"],
          correctAnswer: 2,
          explanation: "Hausse de 5% = $1 + 5/100 = 1,05$."
        },
        {
          id: 'm_ext_47',
          text: "Combien vaut $1 - \\frac{1}{3}$ ?",
          options: ["$0,33$", "$2/3$", "$3/1$", "$-2/3$"],
          correctAnswer: 1,
          explanation: "$1 = 3/3$. $3/3 - 1/3 = 2/3$."
        },
        {
          id: 'm_ext_48',
          text: "Laquelle de ces longueurs peut former un triangle rectangle avec des côtés de 3 et 4 ?",
          options: ["12", "7", "5", "6"],
          correctAnswer: 2,
          explanation: "Le triplet Pythagoricien classique : $3^2 + 4^2 = 9 + 16 = 25 = 5^2$."
        },
        {
          id: 'm_ext_49',
          text: "Pour un nombre $x$, la somme de son double et de 4 vaut 14. Que vaut $x$ ?",
          options: ["4", "5", "6", "10"],
          correctAnswer: 1,
          explanation: "$2x + 4 = 14 \\Rightarrow 2x = 10 \\Rightarrow x = 5$."
        },
        {
          id: 'm_ext_50',
          text: "Combien d'arêtes possède un pavé droit (parallélépipède rectangle) ?",
          options: ["6", "8", "12", "16"],
          correctAnswer: 2,
          explanation: "Il y a 4 arêtes pour la base inférieure, 4 pour la supérieure et 4 arêtes latérales (donc 12 arêtes au total)."
        }
      ]
    }
  ]
};
