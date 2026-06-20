import { Subject } from '../types';

export const oral: Subject = {
  id: 'oral',
  name: "L'Oral du Brevet",
  icon: 'Mic',
  color: 'bg-fuchsia-500',
  topics: [
    {
      id: 'oral-comprendre',
      category: 'Méthodologie',
      title: "Comprendre l'épreuve",
      description: "Déroulement, durée, et attentes du jury.",
      type: 'sheet',
      difficulty: 1
    },
    {
      id: 'oral-sujet',
      category: 'Préparation',
      title: 'Choisir et structurer son sujet',
      description: 'EPI, Parcours, Histoire des Arts : comment faire le bon choix.',
      type: 'sheet',
      difficulty: 2
    },
    {
      id: 'oral-diaporama',
      category: 'Préparation',
      title: 'Réussir son diaporama',
      description: 'Les règles d\'or pour un support visuel efficace.',
      type: 'sheet',
      difficulty: 2
    },
    {
      id: 'oral-posture',
      category: 'Le Jour J',
      title: 'Gérer son stress et sa posture',
      description: 'Voix, regard, gestuelle : convaincre le jury.',
      type: 'sheet',
      difficulty: 2
    },
    {
      id: 'oral-entretien',
      category: 'Le Jour J',
      title: 'Maîtriser l\'entretien',
      description: 'Comment répondre aux questions et rebondir.',
      type: 'sheet',
      difficulty: 3
    },
    {
      id: 'oral-quiz',
      category: 'Entraînement',
      title: 'Quiz : Es-tu prêt pour l\'oral ?',
      description: 'Teste tes connaissances sur le déroulement de l\'épreuve.',
      type: 'quiz',
      difficulty: 2,
      questions: [
        {
          id: 'oq1',
          text: 'Combien de temps dure la présentation individuelle (sans l\'entretien) ?',
          options: ['5 minutes', '10 minutes', '15 minutes', '20 minutes'],
          correctAnswer: 0,
          explanation: 'La présentation dure 5 minutes si tu es seul(e), suivie de 10 minutes d\'entretien avec le jury.'
        },
        {
          id: 'oq2',
          text: 'Sur combien de points est notée l\'épreuve orale du Brevet ?',
          options: ['50 points', '100 points', '150 points', '200 points'],
          correctAnswer: 1,
          explanation: 'L\'oral est noté sur 100 points : 50 points pour la maîtrise de l\'expression orale et 50 points pour la maîtrise du sujet présenté.'
        },
        {
          id: 'oq3',
          text: 'Que faut-il faire si on ne connaît pas la réponse à une question du jury ?',
          options: ['Inventer une réponse pour ne pas paraître ignorant', 'Rester silencieux jusqu\'à la prochaine question', 'Dire "Je ne sais pas" et proposer une réflexion ou faire le lien avec ce qu\'on sait', 'Pleurer'],
          correctAnswer: 2,
          explanation: 'Il est tout à fait normal de ne pas tout savoir. L\'honnêteté intellectuelle est valorisée. Dire "Je n\'ai pas la réponse exacte, mais je pense que..." montre ta capacité à réfléchir.'
        },
        {
          id: 'oq4',
          text: 'Combien de mots ou lignes de texte maximum devrait-on mettre par diapositive ?',
          options: ['Autant que possible pour ne rien oublier', 'Environ 10 lignes', 'Seulement des mots-clés (pas de phrases complètes)', 'Aucun texte, que des images'],
          correctAnswer: 2,
          explanation: 'Le diaporama est un support visuel, pas un prompteur. Il ne doit contenir que des mots-clés, des titres, des images ou des schémas pour illustrer ton propos.'
        },
        {
          id: 'oq5',
          text: 'Comment est évaluée la présentation ?',
          options: ['Uniquement sur la qualité du diaporama', 'Sur l\'expression orale et la maîtrise du sujet', 'Uniquement sur le temps de parole respecté', 'Sur le projet final apporté (maquette/objet)'],
          correctAnswer: 1,
          explanation: 'Le jury évalue ta capacité à t\'exprimer clairement, à utiliser un vocabulaire précis, et ta capacité à répondre aux questions pour montrer que tu maîtrises ton sujet.'
        },
        {
          id: 'oq6',
          text: 'Faut-il obligatoirement un diaporama ?',
          options: ['Oui, l\'épreuve est annulée sinon', 'Non, on peut venir sans aucun support', 'Non, on peut aussi apporter une production (affiche, maquette)', 'Oui, avec au moins 15 diapositives'],
          correctAnswer: 2,
          explanation: 'Le diaporama est courant, mais il n\'est pas obligatoire ! Tu peux tout à fait t\'appuyer sur une maquette de ton EPI, une œuvre, une affiche ou un carnet de bord.'
        },
        {
          id: 'oq7',
          text: 'Qu\'est-ce que l\'EPI ?',
          options: ['L\'Épreuve Primaire Individuelle', 'Les Enseignements Pratiques Interdisciplinaires', 'L\'Évaluation de Parcours Inspirant', 'L\'Entretien de Posture et d\'Intonation'],
          correctAnswer: 1,
          explanation: 'Les EPI (Enseignements Pratiques Interdisciplinaires) sont des projets menés pendant l\'année avec plusieurs professeurs. Ils font d\'excellents sujets pour l\'oral !'
        },
        {
          id: 'oq8',
          text: 'Quel objet est strictement autorisé pour la soutenance ?',
          options: ['Le téléphone portable pour le chrono', 'Ses fiches de notes écrites', 'Une bouteille d\'eau opaque', 'Sa montre connectée'],
          correctAnswer: 1,
          explanation: 'Il est tout à fait autorisé (et conseillé) d\'avoir un petit support papier avec ses idées principales ou son plan pendant la présentation individuelle.'
        },
        {
          id: 'oq9',
          text: 'Comment s\'habiller pour l\'oral ?',
          options: ['En costume-cravate obligatoire', 'Une tenue correcte et confortable', 'Comme on veut, même en jogging', 'En uniforme'],
          correctAnswer: 1,
          explanation: 'Une tenue de tous les jours "correcte" est recommandée par l\'Éducation nationale. Le plus important est de se sentir à l\'aise et propre pour faire bonne impression.'
        }
      ]
    }
  ]
};
