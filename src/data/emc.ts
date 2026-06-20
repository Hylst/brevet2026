import { Subject } from '../types';

export const emc: Subject = {
  id: 'emc',
  folderId: 'histoire-geo-emc',
  name: 'EMC',
  icon: 'Globe',
  color: 'bg-blue-700',
  topics: [
  {
    id: 'hg-9',
    category: 'EMC',
    title: 'La République et la Citoyenneté',
    description: 'Valeurs, principes, symboles et nationalité.',
    type: 'sheet',
    difficulty: 1
  },
  {
    id: 'hg-10',
    category: 'EMC',
    title: 'Démocratie, Justice et Défense',
    description: 'Institutions, parcours citoyen et organisation de la justice.',
    type: 'sheet',
    difficulty: 2
  },
  {
    id: 'hg-32',
    category: 'EMC',
    title: 'La Justice en France et mineurs',
    description: 'Principes de la justice, juge pour enfants et débat.',
    type: 'sheet',
    difficulty: 2
  },
  {
    id: 'hg-33',
    category: 'EMC',
    title: "La Défense et l'action internationale",
    description: "L'armée, le parcours citoyen, l'ONU et missions mondiales.",
    type: 'sheet',
    difficulty: 2
  },
  {
    id: 'hg-25',
    category: 'EMC',
    title: 'La Laïcité dans la République',
    description: 'Histoire, principes et application de la laïcité en France.',
    type: 'sheet',
    difficulty: 2
  },
  {
    id: 'hg-26',
    category: 'EMC',
    title: 'Médias et Opinion publique',
    description: 'Liberté de la presse, information et esprit critique.',
    type: 'sheet',
    difficulty: 2
  },
  {
    id: 'hg-35',
    category: 'EMC',
    title: 'IA et éducation aux médias',
    description: "Deepfakes, infox et impact de l\'IA sur l\'opinion.",
    type: 'sheet',
    difficulty: 2
  },
  {
    id: 'hg-38',
    category: 'EMC',
    title: 'Tous différents mais une seule humanité',
    description: 'Identité, préjugés et humanité commune.',
    type: 'sheet',
    difficulty: 1
  },
  {
    id: 'hg-39',
    category: 'EMC',
    title: "L'égalité et la lutte contre les discriminations",
    description: "Conquête de l'égalité, préjugés, discriminations, sanctions.",
    type: 'sheet',
    difficulty: 2
  },
  {
    id: 'hg-40',
    category: 'EMC',
    title: 'La sécurité pour tous',
    description: 'Sécurité au collège, risques, ASSR, gestes de premiers secours.',
    type: 'sheet',
    difficulty: 1
  },
  {
    id: 'hg-27',
    category: 'EMC',
    title: 'Solidarité et Enjeux mondiaux',
    description: 'Solidarité nationale (impôts) et coopération internationale.',
    type: 'sheet',
    difficulty: 1
  },
  {
    id: 'hg-12',
    category: 'EMC',
    title: "L'engagement civique et social",
    description: "Le vote, les associations, les syndicats, l'engagement politique.",
    type: 'sheet',
    difficulty: 1
  },
  {
    id: 'hg-15',
    category: 'EMC',
    title: 'Quiz : République et Citoyenneté',
    description: 'Teste tes connaissances sur les valeurs et principes de la République.',
    type: 'quiz',
    difficulty: 1,
    questions: [
      {
        id: 'e1q1',
        text: 'Quelle est la devise de la République française ?',
        options: [
          'Liberté, Égalité, Fraternité',
          'Travail, Famille, Patrie',
          'Laïcité, Démocratie, Solidarité',
          'Une et Indivisible'
        ],
        correctAnswer: 0,
        explanation: "La devise officielle est 'Liberté, Égalité, Fraternité'."
      },
      {
        id: 'e1q2',
        text: "Quel principe garantit la liberté de conscience et la neutralité de l'État ?",
        options: [
          "L'indivisibilité",
          'La démocratie',
          'La laïcité',
          'La fraternité'
        ],
        correctAnswer: 2,
        explanation: "La laïcité garantit que l'État ne privilégie aucune religion et que chacun est libre de croire ou non."
      },
      {
        id: 'e1q3',
        text: 'À quel âge obtient-on le droit de vote en France ?',
        options: [ '16 ans', '18 ans', '21 ans', '25 ans' ],
        correctAnswer: 1,
        explanation: 'La majorité politique est à 18 ans.'
      },
      {
        id: 'e1q4',
        text: "Lequel de ces éléments N'EST PAS un symbole de la République ?",
        options: [
          'Marianne',
          'La Marseillaise',
          'La fleur de lys',
          'Le drapeau tricolore'
        ],
        correctAnswer: 2,
        explanation: 'La fleur de lys est un symbole de la royauté.'
      },
      {
        id: 'e1q5',
        text: "Comment un étranger peut-il devenir français par décision de l'État ?",
        options: [
          'Par le droit du sang',
          'Par naturalisation',
          'Par le droit du sol seul',
          'Par simple séjour'
        ],
        correctAnswer: 1,
        explanation: "La naturalisation permet à un étranger d'acquérir la nationalité française sous conditions."
      },
      {
        id: 'e1q6',
        text: 'En France, quel pouvoir vote les lois ?',
        options: [
          'Le pouvoir exécutif',
          'Le pouvoir législatif',
          'Le pouvoir judiciaire',
          'Le pouvoir médiatique'
        ],
        correctAnswer: 1,
        explanation: 'Le pouvoir législatif (Assemblée nationale et Sénat) possède la compétence de voter la loi.'
      },
      {
        id: 'e1q7',
        text: 'Quelle est la dernière étape du Parcours de Citoyenneté ?',
        options: [
          'Le recensement',
          'La JDC',
          'Le vote',
          'Le service militaire'
        ],
        correctAnswer: 1,
        explanation: "La JDC (Journée Défense et Citoyenneté) est l'étape finale obligatoire avant 18 ans."
      },
      {
        id: 'e1q8',
        text: 'Qui est le chef des armées en France ?',
        options: [
          'Le ministre de la Défense',
          'Le Premier ministre',
          'Le Président de la République',
          "Le chef d'état-major"
        ],
        correctAnswer: 2,
        explanation: 'Selon la Constitution de la Ve République, le Président est le chef des armées.'
      },
      {
        id: 'e1q9',
        text: "Qu'est-ce que le suffrage universel ?",
        options: [
          'Le vote réservé aux riches',
          'Le droit de vote pour tous les citoyens majeurs',
          'Le vote uniquement pour les hommes',
          'Le vote des élus'
        ],
        correctAnswer: 1,
        explanation: 'Le suffrage universel signifie que tous les citoyens majeurs (hommes et femmes) peuvent voter.'
      },
      {
        id: 'e1q10',
        text: 'Quel document définit les règles fondamentales du pays ?',
        options: [
          'Le Code Civil',
          'La Constitution',
          'Le Code de la Route',
          'Le règlement intérieur'
        ],
        correctAnswer: 1,
        explanation: 'La Constitution est le texte suprême qui organise les pouvoirs en France.'
      },
      {
        id: 'e1q11',
        text: "Qu'est-ce que l'intérêt général ?",
        options: [
          "L'intérêt d'un seul individu",
          "Le bien-être de l'ensemble de la société",
          "L'intérêt des entreprises",
          "L'intérêt du Président"
        ],
        correctAnswer: 1,
        explanation: "L'intérêt général guide l'action de l'État pour le bien de tous."
      },
      {
        id: 'e1q12',
        text: "Qu'est-ce que la loi de 1905 a établi ?",
        options: [
          "La liberté d'association",
          "La séparation des Églises et de l'État",
          "Le droit de vote des femmes",
          "L'abolition de l'esclavage"
        ],
        correctAnswer: 1,
        explanation: "La loi du 9 décembre 1905 est le texte fondateur de la laïcité : l'État ne reconnaît et ne subventionne aucun culte."
      },
      {
        id: 'e1q13',
        text: 'Qui peut saisir le Défenseur des droits en cas de discrimination ?',
        options: [
          'Seulement les avocats',
          'Tout citoyen, gratuitement',
          'Seulement les personnes majeures',
          'Seulement les élus'
        ],
        correctAnswer: 1,
        explanation: 'Le Défenseur des droits est une autorité indépendante accessible gratuitement à tout citoyen qui estime ses droits bafoués.'
      },
      {
        id: 'e1q14',
        text: "Quel principe garantit que nul n'est coupable tant que sa culpabilité n'est pas prouvée ?",
        options: [
          "Le droit d'appel",
          "La présomption d'innocence",
          'Le contradictoire',
          "L'excuse de minorité"
        ],
        correctAnswer: 1,
        explanation: "La présomption d'innocence est un principe fondamental de la justice française : on est innocent jusqu'à preuve du contraire par un tribunal."
      },
      {
        id: 'e1q15',
        text: "Quelle est la différence entre un délit et un crime ?",
        options: [
          "C'est la même chose",
          "Un crime est plus grave qu'un délit et est jugé par la Cour d'assises",
          "Un délit est jugé par la Cour d'assises",
          "Un crime est puni d'une simple amende"
        ],
        correctAnswer: 1,
        explanation: "Le crime est l'infraction la plus grave (meurtre, viol), jugé par la Cour d'assises. Le délit est moins grave (vol, harcèlement), jugé par le Tribunal correctionnel."
      },
      {
        id: 'e1q16',
        text: "Quel est le numéro d'urgence européen valable dans tous les pays de l'UE ?",
        options: [ '15', '17', '112', '18' ],
        correctAnswer: 2,
        explanation: 'Le 112 est le numéro d\'urgence unique européen, gratuit et joignable depuis n\'importe quel téléphone.'
      },
    ]
  },
  {
    id: 'hg-41',
    category: 'EMC',
    title: 'Quiz EMC - Niveau 2',
    description: '15 questions sur l\'identité, l\'égalité, les discriminations et la sécurité.',
    type: 'quiz',
    difficulty: 1,
    questions: [
      {
        id: 'e2q1',
        text: "Qu'est-ce que l'identité légale ?",
        options: [
          'La personnalité et les goûts',
          "La reconnaissance officielle d'une personne par l'État via l'état civil",
          'La couleur des yeux et des cheveux',
          'La culture familiale'
        ],
        correctAnswer: 1,
        explanation: "L'identité légale est l'enregistrement par l'État (nom, prénom, date de naissance) via les documents d'état civil."
      },
      {
        id: 'e2q2',
        text: "Qu'est-ce qu'un préjugé ?",
        options: [
          'Un fait vérifié scientifiquement',
          'Une opinion adoptée sans examen critique, jugée avant de connaître',
          'Un jugement rendu par un tribunal',
          'Une information vérifiée par un journaliste'
        ],
        correctAnswer: 1,
        explanation: 'Un préjugé est une opinion qu\'on se fait "avant de juger", basée sur des stéréotypes et non sur la connaissance réelle.'
      },
      {
        id: 'e2q3',
        text: 'Pourquoi les races humaines n\'existent-elles pas scientifiquement ?',
        options: [
          "Parce qu'il y en a trop pour les compter",
          'Parce que tous les humains partagent 99,9% de leur ADN',
          'Parce que la science ne s\'y intéresse pas',
          'Parce que c\'est interdit par la loi'
        ],
        correctAnswer: 1,
        explanation: "Les études génétiques prouvent que la diversité génétique entre les humains est infime (0,1%). Le concept de race n'a aucun fondement scientifique."
      },
      {
        id: 'e2q4',
        text: 'Quel événement de 1789 proclame l\'égalité de tous les hommes devant la loi ?',
        options: [
          'La prise de la Bastille',
          "La Déclaration des Droits de l'Homme et du Citoyen",
          'La mort de Louis XVI',
          "L'abolition de l'esclavage"
        ],
        correctAnswer: 1,
        explanation: 'La DDHC du 26 août 1789 abolit les privilèges et proclame l\'égalité de tous les citoyens devant la loi.'
      },
      {
        id: 'e2q5',
        text: 'En quelle année l\'esclavage a-t-il été définitivement aboli en France ?',
        options: [ '1789', '1804', '1848', '1905' ],
        correctAnswer: 2,
        explanation: "Victor Schœlcher a fait adopter le décret d'abolition de l'esclavage dans les colonies françaises le 27 avril 1848."
      },
      {
        id: 'e2q6',
        text: 'Quelle est la sanction maximale pour un acte de discrimination ?',
        options: [
          'Une simple amende de 150€',
          'Jusqu\'à 3 ans de prison et 45 000€ d\'amende',
          'Un travail d\'intérêt général',
          'La prison à perpétuité'
        ],
        correctAnswer: 1,
        explanation: 'La discrimination est un délit puni jusqu\'à 3 ans d\'emprisonnement et 45 000€ d\'amende.'
      },
      {
        id: 'e2q7',
        text: "Quelle autorité indépendante peut être saisie en cas de discrimination ?",
        options: [
          'Le Président de la République',
          'Le Défenseur des droits',
          'Le Préfet',
          'Le Maire'
        ],
        correctAnswer: 1,
        explanation: "Le Défenseur des droits est une autorité indépendante créée en 2011, que tout citoyen peut saisir gratuitement."
      },
      {
        id: 'e2q8',
        text: 'Que signifie l\'acronyme PPMS au collège ?',
        options: [
          'Plan Particulier de Mise en Sécurité',
          'Programme de Protection des Mineurs',
          'Projet Pédagogique pour la Mixité',
          'Plan de Prévention Médicale Scolaire'
        ],
        correctAnswer: 0,
        explanation: 'Le PPMS est le plan d\'urgence de l\'établissement qui définit les consignes face à une intrusion, un attentat ou une catastrophe.'
      },
      {
        id: 'e2q9',
        text: 'Quel diplôme de sécurité routière passe-t-on en 3ème ?',
        options: [
          'Le permis de conduire',
          "L'ASSR2",
          'Le PSC1',
          'Le BIA'
        ],
        correctAnswer: 1,
        explanation: "L'ASSR2 est obligatoire en 3ème pour pouvoir s'inscrire au permis de conduire ou obtenir la BSR pour un scooter."
      },
      {
        id: 'e2q10',
        text: 'Quel est le numéro d\'urgence européen ?',
        options: [ '15', '18', '112', '17' ],
        correctAnswer: 2,
        explanation: 'Le 112 est gratuit et fonctionne dans tous les pays de l\'Union européenne depuis n\'importe quel téléphone.'
      },
      {
        id: 'e2q11',
        text: 'Que garantit la liberté d\'association selon la loi de 1901 ?',
        options: [
          'Le droit de manifester',
          'Le droit de créer une association sans autorisation préalable',
          'Le droit de vote',
          'Le droit de grève'
        ],
        correctAnswer: 1,
        explanation: "La loi du 1er juillet 1901 permet à toute personne de créer librement une association, sans demande d'autorisation à l'État."
      },
      {
        id: 'e2q12',
        text: "Qu'est-ce que le plan Vigipirate ?",
        options: [
          'Un plan d\'entraînement militaire',
          'Un dispositif national de vigilance face aux menaces terroristes',
          'Un plan de sauvetage en montagne',
          'Un exercice d\'évacuation incendie'
        ],
        correctAnswer: 1,
        explanation: "Le plan Vigipirate est le dispositif français de protection contre les menaces terroristes, activé à différents niveaux selon le risque."
      },
      {
        id: 'e2q13',
        text: "Quelles sont les trois grandes réformes sociales du Front Populaire en 1936 ?",
        options: [
          'La retraite, la sécurité sociale, le RSA',
          'La semaine de 40h, les congés payés, la hausse des salaires',
          'Le droit de vote des femmes, l\'IVG, le mariage pour tous',
          'L\'école gratuite, la laïcité, le droit de grève'
        ],
        correctAnswer: 1,
        explanation: 'Le Front Populaire (Léon Blum) a signé les Accords Matignon en juin 1936 : semaine de 40h, 2 semaines de congés payés et hausse des salaires.'
      },
      {
        id: 'e2q14',
        text: "Qu'est-ce que la pyramide de Maslow ?",
        options: [
          'Une pyramide égyptienne',
          'Une classification des besoins humains universels (physiologiques, sécurité, appartenance, estime, accomplissement)',
          "Une hiérarchie des lois dans la Constitution",
          'Un classement des religions dans le monde'
        ],
        correctAnswer: 1,
        explanation: "La pyramide de Maslow montre que tous les humains partagent les mêmes besoins fondamentaux, classés du plus vital au plus spirituel."
      },
      {
        id: 'e2q15',
        text: "Quelle est la mission principale du Défenseur des droits ?",
        options: [
          'Défendre les intérêts du gouvernement',
          'Protéger les droits des citoyens et lutter contre les discriminations',
          'Représenter la France à l\'étranger',
          'Organiser les élections'
        ],
        correctAnswer: 1,
        explanation: "Le Défenseur des droits est chargé de veiller au respect des droits et libertés des citoyens, notamment en matière de discriminations."
      },
    ]
  }
]
};
