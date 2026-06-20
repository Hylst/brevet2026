import { Subject, Topic } from '../types';

export const francais: Subject = {
  id: 'francais',
  name: 'Français',
  icon: 'BookOpen',
  color: 'bg-red-500',
  topics: [
    {
      id: 'francais-6eme-1',
      category: 'Grammaire',
      title: 'Le groupe nominal',
      description: 'Découvre comment fonctionne le groupe nominal (nom, déterminant, adjectif).',
      type: 'sheet',
      difficulty: 1,
      level: '6eme'
    },
    {
      id: 'francais-1',
      category: 'Grammaire',
      title: 'Classes et Fonctions',
      description: 'Nature des mots, expansions du nom et compléments.',
      type: 'sheet',
      difficulty: 1,
      level: '3eme'
    },
    {
      id: 'francais-2',
      category: 'Grammaire',
      title: 'La phrase complexe',
      description: 'Juxtaposition, coordination et subordination.',
      type: 'sheet',
      difficulty: 2,
      
    },
    {
      id: 'francais-3',
      category: 'Grammaire',
      title: 'Le Verbe et les Temps',
      description: 'Valeurs des temps de l\'indicatif, subjonctif et conditionnel.',
      type: 'sheet',
      difficulty: 2,
      
    },
    {
      id: 'francais-4',
      category: 'Grammaire',
      title: 'Les discours rapportés',
      description: 'Discours direct, indirect et indirect libre.',
      type: 'sheet',
      difficulty: 2,
    },
    {
      id: 'francais-5',
      category: 'Orthographe et Lexique',
      title: 'Accords et Formation des mots',
      description: 'Participe passé, dérivation et composition des mots.',
      type: 'sheet',
      difficulty: 2,
      
    },
    {
      id: 'francais-6',
      category: 'Littérature',
      title: 'Se raconter, se représenter',
      description: 'L\'autobiographie et l\'écriture de soi.',
      type: 'sheet',
      difficulty: 2,
      
    },
    {
      id: 'francais-7',
      category: 'Littérature',
      title: 'Dénoncer les travers de la société',
      description: 'Satire, ironie, fable et argumentation.',
      type: 'sheet',
      difficulty: 3,
      
    },
    {
      id: 'francais-8',
      category: 'Littérature',
      title: 'Visions poétiques et Agir dans la cité',
      description: 'Poésie lyrique/engagée et le Théâtre.',
      type: 'sheet',
      difficulty: 2,
      
    },
    {
      id: 'francais-9',
      category: 'Littérature',
      title: 'Progrès et rêves scientifiques',
      description: 'Science-fiction, utopie et dystopie.',
      type: 'sheet',
      difficulty: 2,
      
    },
    {
      id: 'francais-10',
      category: 'Méthodologie',
      title: 'Méthodologie du Brevet (1/2)',
      description: 'Compréhension de texte, grammaire et dictée.',
      type: 'sheet',
      difficulty: 2,
      
    },
    {
      id: 'francais-11',
      category: 'Méthodologie',
      title: 'Méthodologie du Brevet (2/2)',
      description: 'La Rédaction (Sujet d\'imagination et de réflexion).',
      type: 'sheet',
      difficulty: 3,
      
    },
    {
      id: 'francais-35',
      category: 'Méthodologie',
      title: 'Le Sujet d\'Invention',
      description: 'Méthodologie pour réussir la rédaction d\'invention au Brevet.',
      type: 'sheet',
      difficulty: 2,
    },
    {
      id: 'francais-33',
      category: 'Méthodologie',
      title: 'Méthodologie de la Dictée',
      description: 'Techniques de relecture pour éviter les fautes courantes en dictée.',
      type: 'sheet',
      difficulty: 2,
    },
    {
      id: 'francais-34',
      category: 'Méthodologie',
      title: 'L\'Argumentation et l\'Essai',
      description: 'Construire une argumentation solide pour le sujet de réflexion.',
      type: 'sheet',
      difficulty: 3,
    },
    {
      id: 'francais-12',
      category: 'Orthographe et Lexique',
      title: 'Les Figures de Style',
      description: 'Comparaison, métaphore, personnification, antithèse, etc.',
      type: 'sheet',
      difficulty: 2,
      
    },
    {
      id: 'francais-13',
      category: 'Orthographe et Lexique',
      title: 'Vocabulaire et Champs lexicaux',
      description: 'Synonymes, antonymes, paronymes et champs lexicaux.',
      type: 'sheet',
      difficulty: 1,
      
    },
    {
      id: 'francais-14',
      category: 'Méthodologie',
      title: 'L\'Analyse de l\'image',
      description: 'Décrire, analyser et interpréter une image (méthode DAI).',
      type: 'sheet',
      difficulty: 2,
    },
    {
      id: 'francais-18',
      category: 'Grammaire',
      title: 'Types et Formes de phrases',
      description: 'Déclarative, interrogative, voix passive, forme emphatique.',
      type: 'sheet',
      difficulty: 1,
    },
    {
      id: 'francais-19',
      category: 'Conjugaison',
      title: 'Le Présent de l\'Indicatif',
      description: 'Formation et emploi du présent pour tous les groupes.',
      type: 'sheet',
      difficulty: 1,
      level: '3eme'
    },
    {
      id: 'francais-20',
      category: 'Conjugaison',
      title: 'Passé Simple et Imparfait',
      description: 'Maîtriser la formation des deux temps majeurs du récit.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-21',
      category: 'Orthographe',
      title: 'Les Homophones Grammaticaux',
      description: 'Distinguer à/a, et/est, son/sont, leur/leurs, etc.',
      type: 'sheet',
      difficulty: 1,
      level: '3eme'
    },
    {
      id: 'francais-22',
      category: 'Littérature',
      title: 'Le Genre Épistolaire',
      description: 'L\'art de la correspondance et le roman par lettres.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-23',
      category: 'Littérature',
      title: 'Registres Littéraires',
      description: 'Tragique, comique, lyrique, pathétique, ironique.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-24',
      category: 'Grammaire',
      title: 'La Proposition Subordonnée Relative',
      description: 'Le pronom relatif, l\'antécédent et la fonction de la proposition.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-25',
      category: 'Grammaire',
      title: 'La Ponctuation',
      description: 'Signes de ponctuation et leur rôle dans le sens de la phrase.',
      type: 'sheet',
      difficulty: 1,
      level: '3eme'
    },
    {
      id: 'francais-26',
      category: 'Orthographe',
      title: 'L\'Accord du Participe Passé',
      description: 'Maîtriser les règles d\'accord avec être, avoir et les verbes pronominaux.',
      type: 'sheet',
      difficulty: 3,
      level: '3eme'
    },
    {
      id: 'francais-27',
      category: 'Conjugaison',
      title: 'Le Futur et le Conditionnel',
      description: 'Formation, emploi et valeurs de ces deux temps essentiels.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-28',
      category: 'Littérature',
      title: 'Le Théâtre : Vocabulaire et Procédés',
      description: 'Didascalies, répliques, quiproquos et double énonciation.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-29',
      category: 'Grammaire',
      title: 'Les Fonctions liées au Verbe',
      description: 'Sujet, COD, COI, Attribut du sujet et compléments circonstanciels.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-30',
      category: 'Conjugaison',
      title: 'Le Subjonctif Présent',
      description: 'Formation, verbes irréguliers et emplois (souhait, doute, obligation).',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-31',
      category: 'Grammaire',
      title: 'Les Expansions du Nom',
      description: 'Épithète, complément du nom, apposition et proposition subordonnée relative.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-32',
      category: 'Orthographe',
      title: 'L\'Accord dans le Groupe Nominal',
      description: 'Féminin, pluriel des noms et adjectifs, et cas particuliers.',
      type: 'sheet',
      difficulty: 1,
      level: '3eme'
    },
    {
      id: 'francais-1033',
      category: 'Conjugaison',
      title: 'L\'Impératif Présent',
      description: 'Formation, emplois (ordre, conseil) et particularités orthographiques.',
      type: 'sheet',
      difficulty: 1,
      level: '3eme'
    },
    {
      id: 'francais-1034',
      category: 'Grammaire',
      title: 'La Voix Active et la Voix Passive',
      description: 'Reconnaître et transformer les phrases à la voix passive.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-1035',
      category: 'Orthographe',
      title: 'L\'Accord du Verbe avec son Sujet',
      description: 'Sujets éloignés, sujets inversés et sujets multiples.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-1036',
      category: 'Méthodologie du Brevet',
      title: 'Argumentation écologie et environnement',
      description: 'Convaincre et persuader sur les enjeux climatiques.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-37',
      category: 'Littérature',
      title: 'Vocabulaire de la poésie',
      description: 'Mètres, strophes, rimes, sonorités et rythme du vers.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-38',
      category: 'Grammaire',
      title: 'La proposition subordonnée conjonctive',
      description: 'Conjonctive complétive et circonstancielle, modes indicatif/subjonctif.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-39',
      category: 'Orthographe et Lexique',
      title: 'Étymologie et formation des mots',
      description: 'Préfixes, suffixes, racines grecques/latines, dérivation et composition.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-40',
      category: 'Grammaire',
      title: 'Types de textes et communication',
      description: 'Situation de communication, types de textes, connecteurs et registres de langue.',
      type: 'sheet',
      difficulty: 2,
      level: '3eme'
    },
    {
      id: 'francais-15',
      category: 'Grammaire',
      title: 'Quiz : Grammaire et Conjugaison',
      description: 'Teste tes connaissances sur les classes grammaticales et les temps.',
      type: 'quiz',
      difficulty: 2,
      questions: [
        {
          id: 'f1q1',
          text: "Dans la phrase 'Le petit chat dort profondément', quelle est la nature du mot 'profondément' ?",
          options: ["Adjectif qualificatif", "Adverbe", "Préposition", "Nom commun"],
          correctAnswer: 1,
          explanation: "'Profondément' est un adverbe, il modifie le sens du verbe 'dort'."
        },
        {
          id: 'f1q2',
          text: "Quelle est la fonction de 'une pomme' dans la phrase 'Je mange une pomme' ?",
          options: ["Sujet", "Attribut du sujet", "Complément d'Objet Direct (COD)", "Complément Circonstanciel"],
          correctAnswer: 2,
          explanation: "'une pomme' répond à la question 'Je mange quoi ?' directement après le verbe, c'est donc un COD."
        },
        {
          id: 'f1q3',
          text: "Quel temps est utilisé pour exprimer une action incertaine ou un souhait ?",
          options: ["L'indicatif", "Le conditionnel", "Le subjonctif", "L'impératif"],
          correctAnswer: 2,
          explanation: "Le subjonctif est le mode du doute, du souhait, de l'incertitude (ex: Il faut que je parte)."
        },
        {
          id: 'f1q4',
          text: "Dans la phrase 'Il est médecin', quelle est la fonction de 'médecin' ?",
          options: ["Sujet", "COD", "COI", "Attribut du sujet"],
          correctAnswer: 3,
          explanation: "'médecin' donne une caractéristique du sujet 'Il' par l'intermédiaire du verbe d'état 'être'. C'est un attribut du sujet."
        },
        {
          id: 'f1q5',
          text: "Quel est le temps du verbe dans 'Nous aurions aimé venir' ?",
          options: ["Futur antérieur", "Conditionnel passé", "Plus-que-parfait", "Passé antérieur"],
          correctAnswer: 1,
          explanation: "C'est le conditionnel passé, formé de l'auxiliaire au conditionnel présent ('aurions') et du participe passé ('aimé')."
        },
        {
          id: 'f1q6',
          text: "Identifiez la proposition subordonnée relative dans : 'Le livre que tu m'as prêté est passionnant.'",
          options: ["Le livre est passionnant", "que tu m'as prêté", "tu m'as prêté", "Le livre que"],
          correctAnswer: 1,
          explanation: "La proposition subordonnée relative 'que tu m'as prêté' complète le nom antécédent 'livre' et est introduite par le pronom relatif 'que'."
        },
        {
          id: 'f1q7',
          text: "Quel est le type et la forme de la phrase : 'Ne mangez pas ce gâteau !' ?",
          options: ["Déclarative et négative", "Injonctive et affirmative", "Exclamative et passive", "Injonctive et négative"],
          correctAnswer: 3,
          explanation: "C'est une phrase injonctive (elle donne un ordre/interdiction avec un verbe à l'impératif) et elle est à la forme négative (ne... pas)."
        },
        {
          id: 'f1q8',
          text: "Dans 'Elle lui a parlé', quelle est la fonction de 'lui' ?",
          options: ["Sujet", "COD", "COI", "Complément Circonstanciel"],
          correctAnswer: 2,
          explanation: "Elle a parlé à qui ? 'à elle/lui'. Le pronom remplace un COI."
        },
        {
          id: 'f1q9',
          text: "Quel est le participe passé correct : 'Les leçons qu'il a ___ sont difficiles.'",
          options: ["appris", "apprise", "apprises", "apprisent"],
          correctAnswer: 2,
          explanation: "L'auxiliaire est avoir. Le COD est 'qu' (mis pour 'leçons', fém. pluriel) placé avant le verbe. On accorde : apprises."
        },
        {
          id: 'f1q10',
          text: "À quel temps est conjugué : 'Il entra quand le rideau tomba' ?",
          options: ["Imparfait", "Passé composé", "Passé simple", "Présent"],
          correctAnswer: 2,
          explanation: "C'est le passé simple, utilisé pour des actions brèves et successives dans un récit."
        },
        {
          id: 'f1q11',
          text: "Quelle est la nature de 'dont' dans 'Le livre dont je te parle' ?",
          options: ["Conjonction de coordination", "Préposition", "Pronom relatif", "Adverbe"],
          correctAnswer: 2,
          explanation: "'Dont' est un pronom relatif qui remplace un complément introduit par 'de'."
        },
        {
          id: 'f1q12',
          text: "Identifiez l'attribut du sujet dans : 'Cette solution paraît efficace.'",
          options: ["Cette", "solution", "paraît", "efficace"],
          correctAnswer: 3,
          explanation: "'Efficace' est un adjectif qui donne une caractéristique au sujet via le verbe d'état 'paraître'."
        },
        {
          id: 'f1q13',
          text: "Quel est le mode du verbe dans 'Il faut que nous sachions la vérité' ?",
          options: ["Indicatif", "Conditionnel", "Subjonctif", "Impératif"],
          correctAnswer: 2,
          explanation: "C'est le subjonctif présent du verbe savoir (que nous sachions)."
        },
        {
          id: 'f1q14',
          text: "Transformez à la voix passive : 'Le chat mange la souris.'",
          options: ["La souris mange le chat.", "La souris est mangée par le chat.", "Le chat est mangé par la souris.", "La souris sera mangée par le chat."],
          correctAnswer: 1,
          explanation: "Le COD 'souris' devient sujet, on utilise l'auxiliaire être au présent et on accorde."
        },
        {
          id: 'f1q15',
          text: "Dans 'un fer à repasser', quelle est la fonction de 'à repasser' ?",
          options: ["Épithète", "Complément du nom", "Apposition", "COD"],
          correctAnswer: 1,
          explanation: "C'est un complément du nom 'fer', introduit par la préposition 'à'."
        },
        {
          id: 'f1q16',
          text: "Quel est l'antécédent du pronom relatif dans 'L'oiseau qui chante' ?",
          options: ["L'oiseau", "qui", "chante", "Il n'y en a pas"],
          correctAnswer: 0,
          explanation: "L'antécédent est le nom placé avant le pronom relatif et que celui-ci remplace. Ici, c'est 'L'oiseau'."
        },
        {
          id: 'f1q17',
          text: "Quelle est la fonction de 'hier' dans 'Je suis venu hier' ?",
          options: ["COD", "Complément circonstanciel de temps", "Sujet", "Attribut"],
          correctAnswer: 1,
          explanation: "'Hier' indique le moment de l'action, c'est un complément circonstanciel de temps."
        },
        {
          id: 'f1q18',
          text: "Mettez le verbe au futur simple : 'Je (vouloir) réussir.'",
          options: ["Je voulais", "Je voudrai", "Je voudrais", "Je veuille"],
          correctAnswer: 1,
          explanation: "Le futur simple de vouloir à la 1ère personne du singulier est 'je voudrai' (attention à ne pas confondre avec le conditionnel 'voudrais')."
        },
        {
          id: 'f1q19',
          text: "Dans la phrase 'Je pense que tu viendras', la proposition 'que tu viendras' est une :",
          options: ["Subordonnée relative", "Subordonnée conjonctive complétive COD", "Subordonnée circonstancielle", "Proposition indépendante"],
          correctAnswer: 1,
          explanation: "'que tu viendras' est introduite par 'que' (conjonction) et complète le verbe 'pense' (je pense quoi ?), c'est une conjonctive complétive COD."
        },
        {
          id: 'f1q20',
          text: "Quelle est la fonction de la subordonnée dans : 'Qu'il parte si tôt m'étonne' ?",
          options: ["COD", "Sujet", "Attribut", "CC de cause"],
          correctAnswer: 1,
          explanation: "'Qu'il parte si tôt' est sujet du verbe 'étonne'. On peut dire : Cela m'étonne."
        },
        {
          id: 'f1q21',
          text: "Quel type de texte vise à convaincre le lecteur ?",
          options: ["Le texte narratif", "Le texte argumentatif", "Le texte descriptif", "Le texte injonctif"],
          correctAnswer: 1,
          explanation: "Le texte argumentatif cherche à défendre une thèse et à convaincre par des arguments et des exemples."
        },
        {
          id: 'f1q22',
          text: "Quel mode emploie-t-on après 'bien que' ?",
          options: ["Indicatif", "Subjonctif", "Conditionnel", "Impératif"],
          correctAnswer: 1,
          explanation: "'Bien que' exprime la concession et exige le subjonctif : 'Bien qu'il soit tard...'"
        }
      ]
    },
    {
      id: 'francais-16',
      category: 'Littérature',
      title: 'Quiz : Analyse littéraire et Figures de style',
      description: 'Teste tes connaissances sur les figures de style et les genres littéraires.',
      type: 'quiz',
      difficulty: 2,
      questions: [
        {
          id: 'f2q1',
          text: "Quelle figure de style est utilisée dans 'Cette faucille d'or dans le champ des étoiles' ?",
          options: ["Une comparaison", "Une métaphore", "Une personnification", "Une hyperbole"],
          correctAnswer: 1,
          explanation: "C'est une métaphore."
        },
        {
          id: 'f2q2',
          text: "Comment s'appelle un poème composé de deux quatrains et deux tercets ?",
          options: ["Une ode", "Une ballade", "Un sonnet", "Un rondeau"],
          correctAnswer: 2,
          explanation: "Un sonnet est une forme poétique fixe (14 vers)."
        },
        {
          id: 'f2q3',
          text: "Quelle figure de style consiste à exagérer fortement la réalité ?",
          options: ["L'euphémisme", "La litote", "L'hyperbole", "L'antithèse"],
          correctAnswer: 2,
          explanation: "L'hyperbole est la figure de l'exagération."
        },
        {
          id: 'f2q4',
          text: "Qu'est-ce qu'une autobiographie ?",
          options: ["Le récit de la vie d'une personne par un auteur", "Le récit que fait un auteur de sa propre vie", "Un roman d'aventures", "Une pièce de théâtre"],
          correctAnswer: 1,
          explanation: "Dans une autobiographie, l'auteur raconte sa propre vie."
        },
        {
          id: 'f2q5',
          text: "Dans une pièce de théâtre, comment appelle-t-on les indications scéniques ?",
          options: ["Les répliques", "Les tirades", "Les didascalies", "Les apartés"],
          correctAnswer: 2,
          explanation: "Les didascalies donnent des indications sur le jeu, le décor, etc."
        },
        {
          id: 'f2q6',
          text: "Quelle figure de style rapproche deux termes de sens contraire (ex: 'un clair-obscur') ?",
          options: ["L'oxymore", "L'antithèse", "Le chiasme", "L'antiphrase"],
          correctAnswer: 0,
          explanation: "L'oxymore accole deux mots de sens opposé."
        },
        {
          id: 'f2q7',
          text: "Quelle figure de style utilise un outil de comparaison ?",
          options: ["La métaphore", "La comparaison", "L'allégorie", "La métonymie"],
          correctAnswer: 1,
          explanation: "La comparaison relie deux termes avec un mot-outil (comme, tel...)."
        },
        {
          id: 'f2q8',
          text: "Dire 'Il nous a quittés' pour 'Il est mort' est :",
          options: ["Une litote", "Un euphémisme", "Une antiphrase", "Une périphrase"],
          correctAnswer: 1,
          explanation: "L'euphémisme atténue une réalité brutale."
        },
        {
          id: 'f2q9',
          text: "Un genre littéraire composé uniquement de lettres échangées est :",
          options: ["Le genre autobiographique", "Le genre théâtral", "Le genre épistolaire", "Le genre poétique"],
          correctAnswer: 2,
          explanation: "C'est le genre épistolaire."
        },
        {
          id: 'f2q10',
          text: "Quel registre cherche à provoquer la pitié ?",
          options: ["Le registre épique", "Le registre comique", "Le registre pathétique", "Le registre lyrique"],
          correctAnswer: 2,
          explanation: "Le registre pathétique vise à émouvoir."
        },
        {
          id: 'f2q11',
          text: "Comment appelle-t-on des rimes selon le schéma ABBA ?",
          options: ["Des rimes suivies", "Des rimes croisées", "Des rimes embrassées", "Des rimes pauvres"],
          correctAnswer: 2,
          explanation: "Les rimes embrassées suivent le schéma ABBA."
        },
        {
          id: 'f2q12',
          text: "Quelle figure de style prête des sentiments humains à un objet ?",
          options: ["La comparaison", "La métaphore", "La personnification", "L'allégorie"],
          correctAnswer: 2,
          explanation: "La personnification donne des traits humains à ce qui ne l'est pas."
        },
        {
          id: 'f2q13',
          text: "Qu'est-ce qu'une tirade au théâtre ?",
          options: ["Une courte réplique", "Une longue suite de vers ou de phrases sans interruption", "Un dialogue rapide entre deux personnages", "Le monologue d'un personnage seul sur scène"],
          correctAnswer: 1,
          explanation: "Une tirade est une longue réplique ininterrompue."
        },
        {
          id: 'f2q14',
          text: "Combien de syllabes compte un alexandrin ?",
          options: ["8 syllabes", "10 syllabes", "12 syllabes", "14 syllabes"],
          correctAnswer: 2,
          explanation: "L'alexandrin est un vers de 12 syllabes, divisé en deux hémistiches de 6 syllabes."
        },
        {
          id: 'f2q15',
          text: "Quelle est la disposition des rimes dans le schéma ABBA ?",
          options: ["Rimes plates", "Rimes croisées", "Rimes embrassées", "Rimes alternées"],
          correctAnswer: 2,
          explanation: "Les rimes embrassées suivent le schéma ABBA : la première rime 'embrasse' la seconde."
        },
        {
          id: 'f2q16',
          text: "Identifier la focalisation : 'Jean ignorait que sa femme avait préparé une surprise pour lui.'",
          options: ["Focalisation zéro (omnisciente)", "Focalisation interne", "Focalisation externe", "Focalisation variable"],
          correctAnswer: 0,
          explanation: "Le narrateur connaît les pensées de Jean et ce que sa femme a fait. Il sait plus que le personnage, c'est une focalisation zéro."
        },
        {
          id: 'f2q17',
          text: "Quel est le nom d'une strophe de 3 vers ?",
          options: ["Un distique", "Un tercet", "Un quatrain", "Un sizain"],
          correctAnswer: 1,
          explanation: "Un tercet est une strophe de 3 vers. Un distique = 2, un quatrain = 4, un sizain = 6."
        }
      ]
    },
    {
      id: 'francais-17',
      category: 'Orthographe',
      title: 'Quiz : Orthographe et Vocabulaire',
      description: 'Teste tes connaissances sur les accords et la formation des mots.',
      type: 'quiz',
      difficulty: 1,
      questions: [
        {
          id: 'f3q1',
          text: "Choisissez la bonne orthographe : 'Elles se sont ___ les mains.'",
          options: ["lavé", "lavées", "laver", "lavez"],
          correctAnswer: 0,
          explanation: "Elles se sont lavé quoi ? 'les mains' (COD placé après le verbe). Le participe passé ne s'accorde donc pas."
        },
        {
          id: 'f3q2',
          text: "Quel est le préfixe dans le mot 'intolérable' ?",
          options: ["in-", "into-", "-able", "tolér-"],
          correctAnswer: 0,
          explanation: "Le préfixe est 'in-' (qui marque la négation), ajouté au radical 'tolér-' et au suffixe '-able'."
        },
        {
          id: 'f3q3',
          text: "Comment s'écrit le participe passé dans : 'Les pommes que j'ai ___ étaient délicieuses.' ?",
          options: ["mangé", "mangés", "mangée", "mangées"],
          correctAnswer: 3,
          explanation: "Avec l'auxiliaire avoir, le participe passé s'accorde avec le COD s'il est placé avant le verbe. Ici, le COD est 'que' (mis pour 'les pommes', féminin pluriel)."
        },
        {
          id: 'f3q4',
          text: "Quel mot est un synonyme de 'lugubre' ?",
          options: ["Joyeux", "Lumineux", "Sinistre", "Bruyant"],
          correctAnswer: 2,
          explanation: "Lugubre signifie sombre, triste, qui inspire l'effroi, tout comme 'sinistre'."
        },
        {
          id: 'f3q5',
          text: "Comment appelle-t-on des mots qui se prononcent de la même façon mais s'écrivent différemment (ex: mer, mère, maire) ?",
          options: ["Des synonymes", "Des antonymes", "Des paronymes", "Des homonymes"],
          correctAnswer: 3,
          explanation: "Les homonymes ont la même prononciation (homophones) mais un sens et souvent une orthographe différents."
        },
        {
          id: 'f3q6',
          text: "Choisissez la bonne forme : 'Il ___ passé ses vacances ___ la campagne.'",
          options: ["as / à", "a / a", "a / à", "à / a"],
          correctAnswer: 2,
          explanation: "'a' est le verbe avoir (on peut dire 'avait'). 'à' est la préposition (lieu)."
        },
        {
          id: 'f3q7',
          text: "Dans le mot 'certitude', quel est le suffixe ?",
          options: ["cert-", "-titude", "-ude", "cer-"],
          correctAnswer: 1,
          explanation: "Le suffixe '-titude' permet de former un nom abstrait à partir d'un adjectif (certain)."
        },
        {
          id: 'f3q8',
          text: "Accordez correctement 'tout' : 'Ils sont ___ étonnés.'",
          options: ["tout", "touts", "tous", "toutes"],
          correctAnswer: 0,
          explanation: "Devant un adjectif masculin commençant par une voyelle ou un h muet, 'tout' est un adverbe invariable."
        },
        {
          id: 'f3q9',
          text: "Quel est l'antonyme de 'éphémère' ?",
          options: ["Bref", "Passager", "Éternel", "Fragile"],
          correctAnswer: 2,
          explanation: "Éphémère signifie qui dure peu de temps. Son contraire est éternel ou durable."
        },
        {
          id: 'f3q10',
          text: "Mettez au pluriel : 'Le travail de ce garçon est sérieux.'",
          options: ["Les travails de ces garçons sont sérieux.", "Les travaux de ce garçons sont sérieux.", "Les travaux de ces garçons sont sérieux.", "Les travaux de ces garçons sont sérieux."],
          correctAnswer: 2,
          explanation: "'Travail' devient 'travaux' au pluriel. 'Ce' devient 'ces'. 'Sérieux' est invariable au pluriel (finit par x)."
        },
        {
          id: 'f3q11',
          text: "Quel est le préfixe du mot 'immangeable' ?",
          options: ["-able", "mang-", "im-", "imm-"],
          correctAnswer: 2,
          explanation: "Le préfixe 'im-' (variante de 'in-') indique la négation : 'qui ne peut pas être mangé'."
        },
        {
          id: 'f3q12',
          text: "Que signifie la racine grecque 'bios' ?",
          options: ["Le temps", "La vie", "L'étude", "La terre"],
          correctAnswer: 1,
          explanation: "'Bios' signifie la vie en grec ancien. On la retrouve dans biologie, biographie, antibiotique."
        },
        {
          id: 'f3q13',
          text: "Le mot 'covoiturage' est un exemple de :",
          options: ["Dérivation", "Composition", "Emprunt", "Néologisme"],
          correctAnswer: 3,
          explanation: "C'est un néologisme récent créé pour désigner une pratique nouvelle. Il est formé par composition (co- + voiturage)."
        },
        {
          id: 'f3q14',
          text: "Quel suffixe permet de transformer l'adjectif 'doux' en nom ?",
          options: ["-eux", "-ment", "-eur", "-able"],
          correctAnswer: 2,
          explanation: "Le suffixe '-eur' permet de former un nom abstrait : la douceur."
        }
      ]
    },
    {
      id: 'francais-extra-quiz-1',
      category: 'Entraînement Intensif',
      title: 'Quiz : Entraînement Brevet Français (Avancé)',
      description: '25 questions de niveau 3ème pour réviser tous les chapitres de français.',
      type: 'quiz',
      difficulty: 3,
      level: '3eme',
      questions: [
        {
          id: 'f_ext_1',
          text: "Identifiez la figure de style : *« Il a versé des torrents de larmes »*.",
          options: ["Une métaphore", "Une hyperbole", "Une litote", "Une antiphrase"],
          correctAnswer: 1,
          explanation: "L'hyperbole est une figure d'exagération (« des torrents » pour beaucoup de larmes)."
        },
        {
          id: 'f_ext_2',
          text: "Dans la phrase *« Je ne pense pas qu'il vienne »*, à quel mode est conjugué le verbe souligné ?",
          options: ["Conditionnel présent", "Subjonctif présent", "Indicatif présent", "Impératif"],
          correctAnswer: 1,
          explanation: "« vienne » est le verbe *venir* conjugué au subjonctif présent, ce mode est souvent requis après *je ne pense pas que* ou pour exprimer l'incertitude."
        },
        {
          id: 'f_ext_3',
          text: "Quel est le point commun entre *Zadig*, *Candide* ou *Micromégas* ?",
          options: ["Ce sont des tragédies romaines", "Ce sont des contes philosophiques", "Ce sont des poèmes en prose", "Ce sont des autobiographies"],
          correctAnswer: 1,
          explanation: "Voltaire a écrit ces trois célèbres contes philosophiques au XVIIIe siècle pour diffuser les idées des Lumières."
        },
        {
          id: 'f_ext_4',
          text: "Dans la phrase : *L'élève qui étudie réussira*, comment s'appelle la proposition *« qui étudie »* ?",
          options: ["Proposition indépendante", "Proposition subordonnée conjonctive", "Proposition subordonnée relative", "Proposition principale"],
          correctAnswer: 2,
          explanation: "Elle est introduite par le pronom relatif « qui » et complète le nom antécédent « élève »."
        },
        {
          id: 'f_ext_5',
          text: "Quel mouvement littéraire rejette la raison pour valoriser l'exploration de l'inconscient et du rêve au XXe siècle ?",
          options: ["Le Romantisme", "Le Réalisme", "Le Surréalisme", "Le Classicisme"],
          correctAnswer: 2,
          explanation: "Emmené par André Breton, le Surréalisme cherche à libérer l'inconscient, notamment via l'écriture automatique et les rêves."
        },
        {
          id: 'f_ext_6',
          text: "Complétez la phrase : *Elles se sont ___ les mains.*",
          options: ["lavé", "lavés", "lavées", "lavée"],
          correctAnswer: 0,
          explanation: "Le participe passé d'un verbe pronominal s'accorde avec le COD si celui-ci est placé avant. Ici, le COD est « les mains » (placé après le verbe), donc le participe passé « lavé » reste invariable."
        },
        {
          id: 'f_ext_7',
          text: "Que signifie le mot *éponyme* ?",
          options: ["Qui donne son nom à quelque chose", "Qui est écrit sous un faux nom", "Qui parle de chevaux", "Qui n'a pas de nom (anonyme)"],
          correctAnswer: 0,
          explanation: "Par exemple, Harry Potter est le héros éponyme du livre *Harry Potter* (il donne son nom à l'œuvre)."
        },
        {
          id: 'f_ext_8',
          text: "Identifiez le type de texte qui donne des ordres ou des consignes :",
          options: ["Texte descriptif", "Texte injonctif", "Texte explicatif", "Texte narratif"],
          correctAnswer: 1,
          explanation: "Le texte injonctif (ex: une recette, un manuel d'instructions) prescrit des actions, et utilise souvent l'impératif ou l'infinitif."
        },
        {
          id: 'f_ext_9',
          text: "Dans quel cas utilise-t-on la proposition subordonnée interrogative indirecte ?",
          options: ["Je me demande *s'il viendra*.", "Je pense *qu'il viendra*.", "La ville *où je suis né*.", "Venez *quand vous le souhaitez*."],
          correctAnswer: 0,
          explanation: "« S'il viendra » correspond à la question directe « Viendra-t-il ? » intégrée indirectement dans la phrase (« je me demande... »)."
        },
        {
          id: 'f_ext_10',
          text: "Quelle figure de style oppose deux mots ou idées dans une même phrase (ex: *Certains aiment le jour, d'autres préfèrent la nuit*) ?",
          options: ["L'antithèse", "L'oxymore", "Le chiasme", "La métonymie"],
          correctAnswer: 0,
          explanation: "L'antithèse oppose très fortement deux termes ou deux ensembles de termes (contrairement à l'oxymore, les mots ne sont pas collés l'un à l'autre)."
        },
        {
          id: 'f_ext_11',
          text: "Conjuguez le verbe *savoir* à la première personne du pluriel du conditionnel présent :",
          options: ["Nous saurions", "Nous sachions", "Nous savions", "Nous saurons"],
          correctAnswer: 0,
          explanation: "Le conditionnel présent est formé du radical du futur (saur-) et des terminaisons de l'imparfait (-ions)."
        },
        {
          id: 'f_ext_12',
          text: "Quelle classe grammaticale relie des propositions de même niveau (mais, ou, et, donc, or, ni, car) ?",
          options: ["Les prépositions", "Les pronoms", "Les conjonctions de coordination", "Les adverbes"],
          correctAnswer: 2,
          explanation: "Elles coordonnent des mots ou groupes de mots jouant un même rôle."
        },
        {
          id: 'f_ext_13',
          text: "Qui a écrit la pièce autobiographique *Le Journal d'Anne Frank* ?",
          options: ["Primo Levi", "Simone Veil", "Anne Frank", "Élie Wiesel"],
          correctAnswer: 2,
          explanation: "Anne Frank tenait son journal alors qu'elle vivait cachée avec sa famille à Amsterdam pendant l'occupation nazie."
        },
        {
          id: 'f_ext_14',
          text: "Lequel de ces mots est un néologisme ?",
          options: ["Téléphone", "Courriel", "Cheval", "Internet"],
          correctAnswer: 1,
          explanation: "Un néologisme est un mot nouveau ou forgé récemment (ici, mot-valise créé au Québec à partir de *courrier* et *électronique* pour remplacer *e-mail*)."
        },
        {
          id: 'f_ext_15',
          text: "À quelle famille la forme « nous peignons » appartient-elle ?",
          options: ["Peindre (le mur) et Peigner (les cheveux)", "Uniquement Peindre", "Uniquement Peigner", "Feindre"],
          correctAnswer: 0,
          explanation: "« Nous peignons » peut être l'indicatif de *peigner* (peign-ons) et de *peindre* (peign-ons)."
        },
        {
          id: 'f_ext_16',
          text: "Dans *« Paul donne une pomme à Marie »*, quelle est la fonction de *« à Marie »* ?",
          options: ["Complément d'objet direct (COD)", "Complément d'objet indirect (COI)", "Sujet", "Complément circonstanciel de lieu"],
          correctAnswer: 1,
          explanation: "Paul donne quoi ? « une pomme » (COD). À qui ? « à Marie » (COI ou COS)."
        },
        {
          id: 'f_ext_17',
          text: "Quel est le préfixe du mot *« impossible »* ?",
          options: ["-ible", "im-", "pos-", "impos-"],
          correctAnswer: 1,
          explanation: "« im- » est le préfixe ajouté au radical « possible » pour indiquer le contraire (variante de 'in-' devant un p)."
        },
        {
          id: 'f_ext_18',
          text: "Lequel de ces registres littéraires est utilisé pour dénoncer ou critiquer en se moquant ?",
          options: ["Le registre épique", "Le registre satirique", "Le registre élégiaque", "Le registre lyrique"],
          correctAnswer: 1,
          explanation: "Le registre satirique utilise le rire, la moquerie ou l'ironie pour critiquer les défauts d'une personne ou de la société."
        },
        {
          id: 'f_ext_19',
          text: "Identifiez le procédé : *« Boire un verre »*.",
          options: ["La métaphore", "La métonymie", "La périphrase", "La litote"],
          correctAnswer: 1,
          explanation: "On utilise le contenant (le verre) pour désigner le contenu (le liquide). C'est une métonymie."
        },
        {
          id: 'f_ext_20',
          text: "Si une histoire raconte la vie entière d'un personnage de sa naissance à sa mort, on a recours à :",
          options: ["Un sommaire", "Une scène", "Une ellipse", "Une pause"],
          correctAnswer: 0,
          explanation: "Le sommaire résume de longues périodes (des mois, des années) en quelques phrases. (L'ellipse, elle, saute totalement la période)."
        },
        {
          id: 'f_ext_21',
          text: "Mettez cette phrase à la voix passive : *« Le chat mange la souris. »*",
          options: ["La souris a été mangée par le chat.", "La souris est mangée par le chat.", "La souris sera mangée par le chat.", "Le chat est mangé par la souris."],
          correctAnswer: 1,
          explanation: "Le verbe actif est au présent (« mange »), donc l'auxiliaire être à la voix passive doit être au présent : « est mangée »."
        },
        {
          id: 'f_ext_22',
          text: "Qui est le personnage principal du roman *L'Étranger* d'Albert Camus ?",
          options: ["Jean Valjean", "Julien Sorel", "Meursault", "Gargantua"],
          correctAnswer: 2,
          explanation: "Meursault est ce personnage « étranger » à lui-même et à la société, qui tue un Arabe sur la plage d'Alger."
        },
        {
          id: 'f_ext_23',
          text: "Dans le mot *« Misanthrope »*, que signifie la racine *« mis- »* (ou misos) en grec ?",
          options: ["Amour", "Humain", "Haine", "Lumière"],
          correctAnswer: 2,
          explanation: "« Mis- » signifie rejeter, haïr, tandis qu'« anthropos » signifie l'homme. Un misanthrope déteste donc le genre humain."
        },
        {
          id: 'f_ext_24',
          text: "Quel type de propositions relie le pronom *« dont »* ?",
          options: ["La principale et la subordonnée conjonctive", "La principale et la subordonnée interrogative indirecte", "L'antécédent et la subordonnée relative", "Deux propositions indépendantes coordonées"],
          correctAnswer: 2,
          explanation: "« dont » est un pronom relatif : il introduit une subordonnée relative et remplace un groupe nominal introduit par « de »."
        },
        {
          id: 'f_ext_25',
          text: "Identifiez le temps de : *« J'allais »*.",
          options: ["Passé simple", "Imparfait", "Conditionnel", "Futur"],
          correctAnswer: 1,
          explanation: "C'est le verbe aller à la première personne du singulier de l'imparfait de l'indicatif."
        }
      ]
    },
    {
      id: 'francais-extra-quiz-2',
      category: 'Entraînement Intensif 2',
      title: 'Quiz : Entraînement Brevet Français (Très Avancé)',
      description: '25 questions de niveau 3ème pour exceller au Brevet de Français.',
      type: 'quiz',
      difficulty: 3,
      level: '3eme',
      questions: [
        {
          id: 'f_ext_26',
          text: "Quelle est la valeur du présent dans *« La Terre tourne autour du Soleil »* ?",
          options: ["Présent d'énonciation", "Présent de narration", "Présent de vérité générale", "Présent d'habitude"],
          correctAnswer: 2,
          explanation: "C'est un fait établi et scientifique vrai en tout temps."
        },
        {
          id: 'f_ext_27',
          text: "Lequel de ces mots est un synonyme de « péjoratif » ?",
          options: ["Mélioratif", "Dévalorisant", "Neutre", "Élogieux"],
          correctAnswer: 1,
          explanation: "Un terme péjoratif donne une mauvaise image, contrairement à mélioratif."
        },
        {
          id: 'f_ext_28',
          text: "Si un texte dit *« Le roi des animaux s’avança »*, quel procédé désigne le lion ?",
          options: ["Une anaphore", "Une périphrase", "Une métonymie", "Une allégorie"],
          correctAnswer: 1,
          explanation: "Une périphrase remplace un mot (lion) par une expression qui le décrit."
        },
        {
          id: 'f_ext_29',
          text: "Comment appelle-t-on le retour d'un même son voyelle dans un vers ou une strophe ?",
          options: ["Une allitération", "Une assonance", "Une rime riche", "Un acrostiche"],
          correctAnswer: 1,
          explanation: "L'assonance est la répétition d'un son voyelle (l'allitération est pour les consonnes)."
        },
        {
          id: 'f_ext_30',
          text: "Choisissez la bonne orthographe : *Des ___ bleus*.",
          options: ["chou", "chous", "choux", "chouxs"],
          correctAnswer: 2,
          explanation: "Sept mots en -ou prennent un x au pluriel : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux."
        },
        {
          id: 'f_ext_31',
          text: "Quel est le participe passé du verbe *résoudre* ?",
          options: ["Résous", "Résolu", "Résolvé", "Résoudi"],
          correctAnswer: 1,
          explanation: "On dit que ce problème a été *résolu*."
        },
        {
          id: 'f_ext_32',
          text: "Dans *« Paul, que je connais bien, vient ce soir »*, que remplace le pronom relatif « que » ?",
          options: ["vient", "bien", "soir", "Paul"],
          correctAnswer: 3,
          explanation: "« que » a pour antécédent « Paul »."
        },
        {
          id: 'f_ext_33',
          text: "Le registre qui cherche à provoquer la pitié ou la compassion s'appelle :",
          options: ["Le registre ironique", "Le registre pathétique", "Le registre tragique", "Le registre comique"],
          correctAnswer: 1,
          explanation: "Le registre pathétique (du grec pathos, souffrance) émeut le lecteur jusqu'aux larmes."
        },
        {
          id: 'f_ext_34',
          text: "Quelle est la racine noble (souvent grecque ou latine) du mot « cheval » utilisée dans « équestre » ou « équitation » ?",
          options: ["Hipp-", "Ped-", "Equ-", "Can-"],
          correctAnswer: 2,
          explanation: "Equ- vient du latin *equus* (cheval). Hipp- vient du grec *hippos*."
        },
        {
          id: 'f_ext_35',
          text: "Qui est l'auteur des *Fables* au XVIIe siècle (Classicisme) ?",
          options: ["Molière", "Jean de La Fontaine", "Victor Hugo", "Charles Perrault"],
          correctAnswer: 1,
          explanation: "Jean de La Fontaine a utilisé les fables à visée morale pour « plaire et instruire »."
        },
        {
          id: 'f_ext_36',
          text: "La phrase *« O rage ! O désespoir ! O vieillesse ennemie ! »* est tirée de :",
          options: ["Le Cid (Corneille)", "Les Misérables (Hugo)", "L'Avare (Molière)", "Phèdre (Racine)"],
          correctAnswer: 0,
          explanation: "Célèbre tirade de Don Diègue dans la tragi-comédie *Le Cid*."
        },
        {
          id: 'f_ext_37',
          text: "Dans *« Mon cher ami »*, quelle est la fonction de l'adjectif *« cher »* ?",
          options: ["Attribut du sujet", "Épithète liée", "Apposition", "Sujet"],
          correctAnswer: 1,
          explanation: "Il est directement placé à côté du nom « ami » qu'il qualifie, c'est une épithète (liée)."
        },
        {
          id: 'f_ext_38',
          text: "Quel est le mode (ou le temps) utilisé pour exprimer un ordre strict (ex: *Mange ton repas !*) ?",
          options: ["Futur simple", "Infinitif", "Subjonctif", "Impératif"],
          correctAnswer: 3,
          explanation: "L'impératif sert à donner un ordre, un conseil ou une interdiction (sans pronom personnel apparent)."
        },
        {
          id: 'f_ext_39',
          text: "Identifier le participe présent de *manger* :",
          options: ["Mangeant", "Mangé", "En mangeant", "Manger"],
          correctAnswer: 0,
          explanation: "Le participe présent se termine par -ant. (Le gérondif serait *en mangeant*)."
        },
        {
          id: 'f_ext_40',
          text: "Comment s'appelle le schéma qui structure le récit (Situation initiale, Élément perturbateur, Péripéties, Dénouement, Situation finale) ?",
          options: ["Le schéma actantiel", "Le schéma narratif", "Le schéma descriptif", "La versification"],
          correctAnswer: 1,
          explanation: "Le schéma narratif dresse la chronologie typique d'une histoire."
        },
        {
          id: 'f_ext_41',
          text: "Complétez : *Des mots qui ont la même prononciation mais un sens différent s'appellent des...*",
          options: ["Synonymes", "Antonymes", "Homonymes", "Paronymes"],
          correctAnswer: 2,
          explanation: "Les homonymes se prononcent pareil (ex: ver, verre, vert, vers)."
        },
        {
          id: 'f_ext_42',
          text: "Laquelle de ces formes est correcte (accord) ?",
          options: ["Ils ce sont parlés", "Ils se sont parlé", "Ils se sont parlés", "Ils ce sont parlé"],
          correctAnswer: 1,
          explanation: "« Parler » à la forme pronominale (se parler) n'a jamais de COD direct (on parle *à* quelqu'un). Le participe passé reste invariable."
        },
        {
          id: 'f_ext_43',
          text: "Quel siècle est appelé *« Le Siècle des Lumières »* ?",
          options: ["Le XVIe siècle", "Le XVIIe siècle", "Le XVIIIe siècle", "Le XIXe siècle"],
          correctAnswer: 2,
          explanation: "Le XVIIIe siècle, éclairé par la raison des philosophes (Voltaire, Rousseau, Diderot)."
        },
        {
          id: 'f_ext_44',
          text: "Lorsqu'il y a un décalage entre ce qui est dit et ce qui est pensé (pour se moquer), on parle de :",
          options: ["Mensonge", "Ironie", "Sincérité", "Lyrisme"],
          correctAnswer: 1,
          explanation: "L'ironie (ex: « Quel beau temps ! » sous la pluie battante)."
        },
        {
          id: 'f_ext_45',
          text: "Quel est le contraire d'un suffixe ?",
          options: ["Un préfixe", "Un radical", "Un phonème", "Une désinence"],
          correctAnswer: 0,
          explanation: "Le préfixe est ajouté avant le radical, le suffixe après."
        },
        {
          id: 'f_ext_46',
          text: "Un recueil de poèmes de Charles Baudelaire s'appelle :",
          options: ["Les Contemplations", "Les Fleurs du Mal", "Alcools", "Paroles"],
          correctAnswer: 1,
          explanation: "Publié en 1857, ce recueil célèbre introduit notamment l'idée du « Spleen »."
        },
        {
          id: 'f_ext_47',
          text: "Dans une pièce de théâtre, comment appelle-t-on les indications de jeu (gestes, tons) écrites par l'auteur (souvent en italique) ?",
          options: ["Les répliques", "Les didascalies", "Les tirades", "Les apartés"],
          correctAnswer: 1,
          explanation: "Elles ne sont pas lues à haute voix par l'acteur mais servent au metteur en scène et au lecteur."
        },
        {
          id: 'f_ext_48',
          text: "Quel est le nom générique d'une pièce de théâtre faite pour faire rire ?",
          options: ["Une comédie", "Une tragédie", "Un drame", "Une farce (seulement si courte et grivoise)"],
          correctAnswer: 0,
          explanation: "La comédie vise à divertir et à dénoncer les travers par le rire."
        },
        {
          id: 'f_ext_49',
          text: "Que signifie l'abréviation « c.-à-d. » ?",
          options: ["comme à dire", "c'est-à-dire", "ceux à défaire", "couteau à dents"],
          correctAnswer: 1,
          explanation: "C'est l'abréviation officielle de « c'est-à-dire »."
        },
        {
          id: 'f_ext_50',
          text: "Dans la phrase : *« Bien qu'il pleuve, je sors »*, l'expression exprime :",
          options: ["La cause", "La conséquence", "L'opposition / la concession", "Le but"],
          correctAnswer: 2,
          explanation: "« Bien que » introduit une proposition subordonnée concessive (un obstacle inefficace)."
        }
      ]
    },
    {
      id: 'francais-extra-quiz-3',
      category: 'Entraînement Intensif 3',
      title: 'Quiz : Poésie, Grammaire et Étymologie',
      description: '15 questions sur les nouvelles fiches : poésie, conjonctive, étymologie et types de textes.',
      type: 'quiz',
      difficulty: 2,
      level: '3eme',
      questions: [
        {
          id: 'f_ext_51',
          text: "Qu'est-ce qu'un alexandrin ?",
          options: ["Un vers de 10 syllabes", "Un vers de 12 syllabes", "Une strophe de 14 vers", "Un type de rime"],
          correctAnswer: 1,
          explanation: "L'alexandrin est un vers de 12 syllabes, divisé en deux hémistiches de 6 syllabes par la césure."
        },
        {
          id: 'f_ext_52',
          text: "Dans le poème, 'Pour qui sont ces serpents qui sifflent sur vos têtes' (Racine), quel procédé sonore est utilisé ?",
          options: ["Une assonance en [e]", "Une allitération en [s]", "Un enjambement", "Une diérèse"],
          correctAnswer: 1,
          explanation: "La répétition du son [s] crée une allitération qui imite le sifflement des serpents."
        },
        {
          id: 'f_ext_53',
          text: "Combien de vers compte un sonnet ?",
          options: ["10 vers", "12 vers", "14 vers", "16 vers"],
          correctAnswer: 2,
          explanation: "Un sonnet est composé de 14 vers répartis en 2 quatrains et 2 tercets."
        },
        {
          id: 'f_ext_54',
          text: "Dans la phrase 'Je doute qu'il vienne', pourquoi le verbe 'vienne' est-il au subjonctif ?",
          options: ["Parce que 'douter' exprime la certitude", "Parce que 'douter' exprime l'incertitude", "Parce que c'est une règle arbitraire", "Parce que le verbe est au présent"],
          correctAnswer: 1,
          explanation: "Le verbe 'douter' exprime l'incertitude, ce qui appelle le subjonctif dans la subordonnée."
        },
        {
          id: 'f_ext_55',
          text: "Quelle est la nature de la subordonnée dans 'Bien qu'il soit tard, je reste' ?",
          options: ["Subordonnée relative", "Subordonnée conjonctive complétive", "Subordonnée conjonctive circonstancielle de concession", "Subordonnée interrogative indirecte"],
          correctAnswer: 2,
          explanation: "'Bien qu'il soit tard' est une subordonnée circonstancielle de concession, introduite par 'bien que'."
        },
        {
          id: 'f_ext_56',
          text: "Que signifie la racine grecque 'logos' ?",
          options: ["La vie", "Le temps", "L'étude ou la parole", "La terre"],
          correctAnswer: 2,
          explanation: "'Logos' signifie parole, discours, étude. On la retrouve dans biologie, dialogue, logique."
        },
        {
          id: 'f_ext_57',
          text: "Quel type de texte utilise principalement le passé simple et l'imparfait ?",
          options: ["Le texte argumentatif", "Le texte narratif", "Le texte explicatif", "Le texte injonctif"],
          correctAnswer: 1,
          explanation: "Le texte narratif raconte une histoire et utilise les temps du récit (passé simple, imparfait)."
        },
        {
          id: 'f_ext_58',
          text: "Quel registre de langue utilise-t-on dans une copie de Brevet ?",
          options: ["Familier", "Courant", "Soutenu", "Argotique"],
          correctAnswer: 2,
          explanation: "Au Brevet, on attend un registre soutenu : vocabulaire riche et précis, phrases bien construites."
        },
        {
          id: 'f_ext_59',
          text: "Un mot formé par l'ajout d'un préfixe et/ou d'un suffixe à un radical est le résultat d'un procédé de :",
          options: ["Composition", "Dérivation", "Emprunt", "Néologisme"],
          correctAnswer: 1,
          explanation: "La dérivation consiste à ajouter un préfixe et/ou un suffixe à un radical (ex: im + mang + eable)."
        },
        {
          id: 'f_ext_60',
          text: "Dans un récit, lorsque le narrateur en sait autant qu'un seul personnage, on parle de focalisation :",
          options: ["Zéro (omnisciente)", "Interne", "Externe", "Variable"],
          correctAnswer: 1,
          explanation: "La focalisation interne limite les informations à ce qu'un personnage voit, ressent ou sait."
        },
        {
          id: 'f_ext_61',
          text: "Quel connecteur logique exprime la conséquence ?",
          options: ["Car", "Parce que", "Donc", "Cependant"],
          correctAnswer: 2,
          explanation: "'Donc' (ainsi que 'c'est pourquoi', 'par conséquent') exprime la conséquence."
        },
        {
          id: 'f_ext_62',
          text: "Le mot 'téléphone' est composé des racines grecques 'tele' (loin) et 'phone' (son). Quel procédé de formation est-ce ?",
          options: ["Dérivation", "Composition savante", "Emprunt", "Abréviation"],
          correctAnswer: 1,
          explanation: "C'est une composition savante à partir de racines grecques, très courante pour les mots scientifiques."
        },
        {
          id: 'f_ext_63',
          text: "Quelle est la fonction de la subordonnée dans 'Je tiens à ce que tu viennes' ?",
          options: ["COD", "COI", "CC de but", "Sujet"],
          correctAnswer: 1,
          explanation: "Le verbe 'tenir à' est suivi de la préposition 'à' + 'ce que'. C'est un COI : je tiens à quoi ?"
        },
        {
          id: 'f_ext_64',
          text: "Quelle figure de sonorité répète un son voyelle dans un vers ?",
          options: ["Une allitération", "Une assonance", "Une rime", "Un enjambement"],
          correctAnswer: 1,
          explanation: "L'assonance est la répétition d'un son voyelle (l'allitération répète un son consonne)."
        },
        {
          id: 'f_ext_65',
          text: "Quel type de texte donne des ordres ou des consignes ?",
          options: ["Texte narratif", "Texte descriptif", "Texte injonctif", "Texte explicatif"],
          correctAnswer: 2,
          explanation: "Le texte injonctif donne des ordres, conseils ou consignes (recettes, notices, règlements)."
        }
      ]
    },
    {
      id: 'francais-extra-quiz-4',
      category: 'Entraînement Intensif 4',
      title: 'Quiz : Enrichissement Grammaire et Littérature',
      description: '15 questions sur les contenus enrichis : focalisations, temps composés, verbes pronominaux, subjonctif passé et plus.',
      type: 'quiz',
      difficulty: 3,
      level: '3eme',
      questions: [
        {
          id: 'f_ext_66',
          text: "Quel type de focalisation permet au narrateur de connaître les pensées de tous les personnages ?",
          options: ["Focalisation interne", "Focalisation externe", "Focalisation zéro (omnisciente)", "Focalisation multiple"],
          correctAnswer: 2,
          explanation: "La focalisation zéro est celle du narrateur omniscient qui sait tout sur tous les personnages."
        },
        {
          id: 'f_ext_67',
          text: "Dans 'Les fleurs qu'il a cueillies sont belles', le participe passé 'cueillies' s'accorde avec :",
          options: ["Le sujet 'il'", "Le COD 'que' (mis pour 'fleurs')", "Rien, il est invariable", "Le verbe 'sont'"],
          correctAnswer: 1,
          explanation: "Avec l'auxiliaire 'avoir', le participe passé s'accorde avec le COD si celui-ci est placé avant. Ici 'que' = les fleurs (fém. plur.)."
        },
        {
          id: 'f_ext_68',
          text: "Quelle est la valeur du plus-que-parfait dans 'Il avait déjà mangé quand je suis arrivé' ?",
          options: ["Action simultanée", "Action antérieure", "Action postérieure", "Action habituelle"],
          correctAnswer: 1,
          explanation: "Le plus-que-parfait exprime une action antérieure à une autre action passée (ici : manger avant l'arrivée)."
        },
        {
          id: 'f_ext_69',
          text: "Dans 'Ils se sont regardés', le participe passé 'regardés' s'accorde car :",
          options: ["C'est un verbe essentiellement pronominal", "Le pronom réfléchi est COD (ils ont regardé qui ? eux-mêmes)", "Le pronom réfléchi est COI", "C'est un verbe passif"],
          correctAnswer: 1,
          explanation: "Dans 'se regarder', le pronom 'se' est COD (regarder quelqu'un). Le COD est placé avant, donc on accorde."
        },
        {
          id: 'f_ext_70',
          text: "Quel temps composé est formé de l'auxiliaire au subjonctif présent + participe passé ?",
          options: ["Le plus-que-parfait", "Le subjonctif passé", "Le futur antérieur", "Le conditionnel passé"],
          correctAnswer: 1,
          explanation: "Le subjonctif passé se forme avec l'auxiliaire (être/avoir) au subjonctif présent + participe passé."
        },
        {
          id: 'f_ext_71',
          text: "Identifier la phrase non verbale parmi ces exemples :",
          options: ["Le train arrive à 8 heures.", "Interdit de fumer.", "Il pleut depuis ce matin.", "Nous partons en vacances demain."],
          correctAnswer: 1,
          explanation: "'Interdit de fumer' est une phrase non verbale (ou nominale) car elle n'a pas de verbe conjugué."
        },
        {
          id: 'f_ext_72',
          text: "Dans 'Je considère cette idée intéressante', 'intéressante' est :",
          options: ["Attribut du sujet", "Attribut du COD", "Épithète", "Apposition"],
          correctAnswer: 1,
          explanation: "Le verbe 'considérer' a un COD ('cette idée') et un attribut du COD ('intéressante')."
        },
        {
          id: 'f_ext_73',
          text: "Lequel de ces auteurs a écrit un témoignage sur la Shoah ?",
          options: ["Molière", "Primo Levi", "Victor Hugo", "Voltaire"],
          correctAnswer: 1,
          explanation: "Primo Levi, déporté à Auschwitz, a écrit 'Si c'est un homme' (1947), un témoignage majeur sur la Shoah."
        },
        {
          id: 'f_ext_74',
          text: "Quelle est la différence entre 'pour que' (but) et 'parce que' (cause) ?",
          options: ["Aucune différence", "'Pour que' exprime le but, 'parce que' exprime la cause", "'Pour que' exprime la cause, 'parce que' exprime le but", "Les deux expriment la conséquence"],
          correctAnswer: 1,
          explanation: "'Pour que' indique l'objectif visé (but), 'parce que' indique la raison (cause)."
        },
        {
          id: 'f_ext_75',
          text: "Quel est l'enjambement dans 'Elle voulait aller aux champs / pour cueillir des coquelicots' ?",
          options: ["La phrase continue au vers suivant sans s'arrêter en fin de vers", "Le mot important est rejeté au début du vers", "Il y a une coupe au milieu du vers", "Il n'y a pas d'enjambement"],
          correctAnswer: 0,
          explanation: "L'enjambement se produit quand la phrase déborde sur le vers suivant sans s'arrêter à la fin du vers."
        },
        {
          id: 'f_ext_76',
          text: "Quel est le nom donné à une strophe de 2 vers ?",
          options: ["Un tercet", "Un quatrain", "Un distique", "Un sizain"],
          correctAnswer: 2,
          explanation: "Un distique est une strophe de deux vers. Tercet = 3, quatrain = 4, sizain = 6."
        },
        {
          id: 'f_ext_77',
          text: "Dans la phrase 'Après que tu es parti' et 'Avant que tu partes', pourquoi le mode change-t-il ?",
          options: ["C'est une erreur de grammaire", "'Après que' exprime un fait accompli → indicatif ; 'Avant que' exprime un fait à venir → subjonctif", "Les deux devraient être au conditionnel", "C'est une question de registre de langue"],
          correctAnswer: 1,
          explanation: "'Après que' indique une action réalisée (indicatif), 'avant que' une action non encore réalisée (subjonctif)."
        },
        {
          id: 'f_ext_78',
          text: "Que signifie la racine latine 'manu-' ?",
          options: ["La tête", "Le pied", "La main", "La terre"],
          correctAnswer: 2,
          explanation: "'Manu-' vient du latin 'manus' (main). On la retrouve dans manuel, manufacture, manuscrit."
        },
        {
          id: 'f_ext_79',
          text: "Quels sont les 6 éléments de la situation de communication ?",
          options: ["Émetteur, Récepteur, Message, Code, Canal, Contexte", "Nom, Verbe, Adjectif, Adverbe, Préposition, Conjonction", "Introduction, Développement, Conclusion, Exemple, Argument, Thèse", "Sujet, Verbe, COD, COI, Attribut, CC"],
          correctAnswer: 0,
          explanation: "Les 6 éléments sont : Émetteur, Récepteur, Message, Code, Canal et Contexte."
        },
        {
          id: 'f_ext_80',
          text: "Dans 'Je me lave' et 'Ils se sont parlé', quel verbe pronominal a un accord invariable ?",
          options: ["Je me lave (réfléchi → accord)", "Ils se sont parlé (se est COI → pas d'accord)", "Les deux s'accordent", "Aucun des deux"],
          correctAnswer: 1,
          explanation: "'Se parler' se construit avec 'parler à'. Le pronom 'se' est COI pas COD, donc le participe passé 'parlé' reste invariable."
        }
      ]
    }
  ]
};
