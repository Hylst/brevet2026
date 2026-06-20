import React from 'react';
import { motion } from 'motion/react';
import { Flag, Quote, Calendar, Bookmark, Feather } from 'lucide-react';

export const SymbolesRepubliqueSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 text-foreground">
      
      <div className="text-center mb-8">
         <h3 className="text-2xl font-bold text-white mb-2">Les Symboles et Principes de la République</h3>
         <p className="text-muted">La France est une République indivisible, laïque, démocratique et sociale.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <motion.div whileHover={{ y: -5 }} className="bg-red-900/20 border border-red-500/30 p-4 rounded-xl flex flex-col items-center text-center">
          <Flag className="w-8 h-8 text-red-400 mb-3" />
          <h4 className="font-bold text-gray-200">Le Drapeau Tricolore</h4>
          <p className="text-xs text-gray-400 mt-2">Bleu, Blanc, Rouge. Il réunit les couleurs de Paris (bleu et rouge) et la couleur du Roi (blanc).</p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl flex flex-col items-center text-center">
          <Quote className="w-8 h-8 text-blue-400 mb-3" />
          <h4 className="font-bold text-gray-200">La Devise</h4>
          <p className="text-xs text-gray-400 mt-2">"Liberté, Égalité, Fraternité". Elle résume les idéaux de la Révolution française.</p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="bg-orange-900/20 border border-orange-500/30 p-4 rounded-xl flex flex-col items-center text-center">
          <Feather className="w-8 h-8 text-orange-400 mb-3" />
          <h4 className="font-bold text-gray-200">Marianne</h4>
          <p className="text-xs text-gray-400 mt-2">L'allégorie de la République. Elle porte souvent le bonnet phrygien, symbole de la liberté (les esclaves affranchis).</p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="bg-green-900/20 border border-green-500/30 p-4 rounded-xl flex flex-col items-center text-center">
          <Bookmark className="w-8 h-8 text-green-400 mb-3" />
          <h4 className="font-bold text-gray-200">La Marseillaise</h4>
          <p className="text-xs text-gray-400 mt-2">L'hymne national. Composé par Rouget de Lisle en 1792 pour l'Armée du Rhin.</p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-xl flex flex-col items-center text-center lg:col-span-2">
          <Calendar className="w-8 h-8 text-yellow-400 mb-3" />
          <h4 className="font-bold text-gray-200">Le 14 Juillet</h4>
          <p className="text-xs text-gray-400 mt-2">La fête nationale. Elle célèbre la prise de la Bastille (1789) et la Fête de la Fédération (1790).</p>
        </motion.div>

      </div>
    </div>
  );
};
