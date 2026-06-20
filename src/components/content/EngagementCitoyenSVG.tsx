import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, FileText, Megaphone, Shield } from 'lucide-react';

export const EngagementCitoyenSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 text-foreground">
      
      <div className="text-center mb-8">
         <h3 className="text-2xl font-bold text-white mb-2">L'Engagement Citoyen et Social</h3>
         <p className="text-muted text-sm">Comment participer à la vie de la cité et défendre ses valeurs ?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <motion.div whileHover={{ scale: 1.02 }} className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl flex gap-4 items-start">
          <FileText className="w-8 h-8 text-blue-400 mt-1 shrink-0" />
          <div>
            <h4 className="font-bold text-gray-200">L'Engagement Politique</h4>
            <p className="text-xs text-gray-400 mt-1">Voter aux élections (le vote est un droit et un devoir moral), se présenter à une élection, ou adhérer à un parti politique.</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-red-900/20 border border-red-500/30 p-4 rounded-xl flex gap-4 items-start">
          <HeartHandshake className="w-8 h-8 text-red-400 mt-1 shrink-0" />
          <div>
            <h4 className="font-bold text-gray-200">L'Engagement Associatif</h4>
            <p className="text-xs text-gray-400 mt-1">Devenir bénévole dans une association (loi 1901) pour aider les autres (Restos du Coeur, Croix-Rouge) ou défendre une cause (écologie).</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-xl flex gap-4 items-start">
          <Megaphone className="w-8 h-8 text-yellow-400 mt-1 shrink-0" />
          <div>
            <h4 className="font-bold text-gray-200">L'Engagement Syndical</h4>
            <p className="text-xs text-gray-400 mt-1">Rejoindre un syndicat pour défendre les droits des travailleurs (salaires, conditions de travail) au sein d'une entreprise.</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-green-900/20 border border-green-500/30 p-4 rounded-xl flex gap-4 items-start">
          <Shield className="w-8 h-8 text-green-400 mt-1 shrink-0" />
          <div>
            <h4 className="font-bold text-gray-200">La Défense Nationale</h4>
            <p className="text-xs text-gray-400 mt-1">Le Parcours de citoyenneté : enseignement de défense en 3ème, recensement à 16 ans, et JDC (Journée Défense et Citoyenneté).</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
