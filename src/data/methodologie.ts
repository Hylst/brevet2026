import { Subject } from '../types';

export const methodologie: Subject = {
  id: 'methodologie',
  name: "Méthodologie & Conseils",
  icon: 'Compass',
  color: 'bg-cyan-500',
  topics: [
    {
      id: 'methode-generale',
      category: 'Conseils Généraux',
      title: 'Réussir son Brevet',
      description: 'Organisation, gestion du stress et matériel pour le jour J.',
      type: 'sheet',
      difficulty: 1
    },
    {
      id: 'methode-maths',
      category: 'Conseils par matière',
      title: 'Conseils pour les Maths',
      description: 'Gérer son temps, utiliser le brouillon et bien rédiger.',
      type: 'sheet',
      difficulty: 1
    },
    {
      id: 'methode-francais',
      category: 'Conseils par matière',
      title: 'Conseils pour le Français',
      description: 'Compréhension, dictée et rédaction : les pièges à éviter.',
      type: 'sheet',
      difficulty: 1
    },
    {
      id: 'methode-hg',
      category: 'Conseils par matière',
      title: 'Conseils pour l\'Histoire-Géo',
      description: 'Le développement construit et l\'analyse de documents.',
      type: 'sheet',
      difficulty: 1
    },
    {
      id: 'methode-sciences',
      category: 'Conseils par matière',
      title: 'Conseils pour les Sciences',
      description: 'La démarche scientifique, les unités et les formules.',
      type: 'sheet',
      difficulty: 1
    }
  ]
};
