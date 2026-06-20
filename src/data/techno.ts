import { Subject } from '../types';

export const techno: Subject = {
  id: 'techno',
  folderId: 'sciences',
  name: 'Technologie',
  icon: 'Cpu',
  color: 'bg-slate-700',
  topics: [
  {
    id: 'tech-1-design',
    category: 'Technologie',
    title: 'Design, innovation et créativité',
    description: "Découvre comment naissent les objets technologiques, de l'idée au prototype.",
    type: 'sheet',
    difficulty: 1,
    level: '3eme'
  },
  {
    id: 'tech-2-analyse-fonctionnelle',
    category: 'Technologie',
    title: 'Analyse fonctionnelle et cahier des charges',
    description: "Apprends à définir le besoin et les fonctions d'un objet technique.",
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'tech-3-chaine-info-action',
    category: 'Technologie',
    title: "Chaînes d'information et d'action",
    description: 'Comprendre comment un système automatisé réfléchit et agit.',
    type: 'sheet',
    difficulty: 3,
    level: '3eme'
  },
  {
    id: 'tech-4-reseaux',
    category: 'Technologie',
    title: 'Réseaux informatiques et Internet',
    description: "L'architecture des réseaux, les adresses IP et le rôle des routeurs.",
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'tech-5-programmation',
    category: 'Technologie',
    title: 'Programmation et algorithmique',
    description: 'Les variables, boucles, conditions et le langage Scratch.',
    type: 'sheet',
    difficulty: 3,
    level: '3eme'
  },
  {
    id: 'tech-6-materiaux',
    category: 'Technologie',
    title: 'Matériaux et propriétés',
    description: 'Familles de matériaux, caractéristiques et impact environnemental.',
    type: 'sheet',
    difficulty: 1,
    level: '3eme'
  },
  {
    id: 'tech-7-energie',
    category: 'Technologie',
    title: "L'énergie et le développement durable",
    description: "Cycle de vie d'un produit, recyclage et énergies renouvelables.",
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'tech-8-modelisation',
    category: 'Technologie',
    title: 'Modélisation et simulation 3D',
    description: 'CAO, prototypes virtuels et impression 3D.',
    type: 'sheet',
    difficulty: 2,
    level: '3eme'
  },
  {
    id: 'tech-9-objets-connectes',
    category: 'Technologie',
    title: 'Objets connectés et domotique',
    description: 'IoT, domotique environnementale et capteurs algorithmiques.',
    type: 'sheet',
    difficulty: 3,
    level: '3eme'
  },
  {
    id: 'tech-1-quiz',
    category: 'Technologie',
    title: 'Quiz : Systèmes et réseaux',
    description: 'Teste tes connaissances en technologie.',
    type: 'quiz',
    difficulty: 1,
    questions: [
      {
        id: 's5q1',
        text: "Dans une chaîne d'information, quel composant réalise la fonction 'Acquérir' ?",
        options: [
          'Le moteur',
          'Le microcontrôleur',
          'Le capteur',
          'La batterie'
        ],
        correctAnswer: 2,
        explanation: "La fonction 'Acquérir' consiste à prélever une information sur l'environnement physique. C'est le rôle des capteurs (température, présence, lumière...)."
      },
      {
        id: 's5q2',
        text: 'À quoi sert un serveur DNS dans un réseau informatique ?',
        options: [
          'À relier plusieurs ordinateurs entre eux',
          'À traduire un nom de domaine (URL) en adresse IP',
          'À protéger le réseau contre les virus',
          "À fournir de l'énergie aux composants"
        ],
        correctAnswer: 1,
        explanation: 'Le DNS (Domain Name System) agit comme un annuaire : il traduit les noms de domaine compréhensibles par les humains (ex: wikipedia.org) en adresses IP compréhensibles par les machines.'
      },
      {
        id: 's5q3',
        text: "Dans la chaîne d'énergie, quelle est la fonction d'une batterie ?",
        options: [ 'Alimenter', 'Distribuer', 'Convertir', 'Transmettre' ],
        correctAnswer: 0,
        explanation: "La batterie stocke et fournit l'énergie électrique au système, elle réalise donc la fonction 'Alimenter'."
      },
      {
        id: 's5q4',
        text: 'Quel composant permet de relier plusieurs réseaux informatiques entre eux (ex: le réseau local à Internet) ?',
        options: [
          'Le commutateur (switch)',
          'Le routeur',
          'La carte réseau',
          'Le câble Ethernet'
        ],
        correctAnswer: 1,
        explanation: 'Le routeur (comme la box internet de la maison) dirige les paquets de données entre différents réseaux.'
      },
      {
        id: 's5q5',
        text: "Qu'est-ce qu'un algorithme ?",
        options: [
          'Un langage de programmation',
          'Un composant électronique',
          "Une suite logique d'instructions pour résoudre un problème",
          'Un type de réseau sans fil'
        ],
        correctAnswer: 2,
        explanation: "Un algorithme est une méthode, une suite d'étapes logiques (comme une recette de cuisine) qui permet d'obtenir un résultat. Il est ensuite traduit en programme informatique."
      },
      {
        id: 's5q6',
        text: 'Quel matériau est un bon isolant électrique ?',
        options: [ "L'aluminium", 'Le cuivre', 'Le plastique', "L'acier" ],
        correctAnswer: 2,
        explanation: 'Le plastique ne laisse pas passer le courant électrique, contrairement aux métaux.'
      },
      {
        id: 's5q7',
        text: 'Dans quel organe se déroule la photosynthèse ?',
        options: [ 'La racine', 'La fleur', 'La feuille', 'Le tronc' ],
        correctAnswer: 2,
        explanation: 'La photosynthèse a lieu dans les chloroplastes des cellules des feuilles, en présence de lumière.'
      },
      {
        id: 's5q8',
        text: "Quelle est la principale source d'énergie d'un panneau solaire ?",
        options: [ 'Le vent', 'Le soleil', 'La chaleur du sol', "L'eau" ],
        correctAnswer: 1,
        explanation: 'Les panneaux photovoltaïques transforment le rayonnement solaire en électricité.'
      },
      {
        id: 's5q9',
        text: "Comment appelle-t-on le passage de l'état liquide à l'état gazeux ?",
        options: [
          'La fusion',
          'La solidification',
          'La vaporisation',
          'La condensation'
        ],
        correctAnswer: 2,
        explanation: "La vaporisation est le passage de l'état liquide à l'état gazeux (ex: l'eau qui bout)."
      },
      {
        id: 's5q10',
        text: 'Qu\'est-ce qu\'une adresse IP ?',
        options: [ 'L\'adresse physique du matériel', 'Une adresse postale pour la fibre', 'L\'identifiant unique d\'un appareil sur un réseau', 'Un type de mot de passe' ],
        correctAnswer: 2,
        explanation: 'Une adresse IP (Internet Protocol) est un numéro unique attribué à chaque appareil connecté (ordinateur, smartphone...) sur un réseau, lui permettant de communiquer avec les autres.'
      },
      {
        id: 's5q11',
        text: 'Sur un réseau informatique, que fait précisément le commutateur (switch) ?',
        options: [ 'Il relie les appareils d\'un même réseau local', 'Il relie le réseau local à Internet', 'Il protège des virus', 'Il sert à imprimer sans fil' ],
        correctAnswer: 0,
        explanation: 'Le commutateur (switch) est le nœud central d\'un réseau local (LAN). Il lit l\'adresse MAC pour distribuer habilement les informations uniquement au bon appareil, contrairement à un simple "hub".'
      },
      {
        id: 's5q12',
        text: 'Que signifie l\'abréviation LAN ?',
        options: [ 'Local Area Network', 'Large Anonymous Node', 'Link Access Number', 'Location Area Name' ],
        correctAnswer: 0,
        explanation: 'LAN signifie Local Area Network, c\'est-à-dire un réseau informatique à l\'échelle locale (maison, collège, petite entreprise).'
      },
      {
        id: 's5q13',
        text: 'En technologie, qu\'est-ce qu\'un protocole ?',
        options: [ 'Une règle de politesse', 'Un langage ou un ensemble de règles permettant la communication entre des appareils', 'Un antivirus très puissant', 'L\'endroit où on stocke les données' ],
        correctAnswer: 1,
        explanation: 'Le protocole (comme le TCP/IP, ou le HTTP) agit comme une "langue commune". Si deux ordinateurs utilisent le même protocole, ils peuvent échanger des données sans se tromper.'
      },
      {
        id: 's5q14',
        text: 'À quoi sert un pare-feu (firewall) ?',
        options: [ 'À éteindre l\'ordinateur en cas de surchauffe', 'À détruire les ondes Wi-Fi nocives', 'À surveiller et bloquer les échanges suspects pour protéger le réseau', 'À accélérer la connexion internet' ],
        correctAnswer: 2,
        explanation: 'Le pare-feu analyse les données (les paquets) qui entrent et qui sortent du réseau et bloque celles qui ne respectent pas les règles de sécurité afin de se protéger des pirates.'
      }
    ]
  }
]
};
