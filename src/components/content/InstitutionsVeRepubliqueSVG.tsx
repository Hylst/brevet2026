import React from 'react';
import { motion } from 'motion/react';
import { Vote, ArrowDown, Users, Scale } from 'lucide-react';

export const InstitutionsVeRepubliqueSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 text-foreground font-sans">
      
      <div className="text-center mb-8">
         <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2"><Scale className="text-primary"/> La Ve République (Depuis 1958)</h3>
         <p className="text-muted text-sm">Une démocratie où les pouvoirs sont séparés.</p>
      </div>

      <div className="flex flex-col items-center gap-4 relative">
        
        {/* Président */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-900/40 border-2 border-blue-500 p-4 rounded-xl w-64 text-center z-10 shadow-lg">
          <h4 className="font-bold text-white text-lg">Le Président de la République</h4>
          <p className="text-xs text-blue-200 mt-1">Élu pour 5 ans au suffrage universel direct. Chef des armées, il promulgue les lois.</p>
        </motion.div>

        <ArrowDown className="text-gray-500" />

        {/* Gouvernement */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-900/20 border border-blue-400/50 p-4 rounded-xl w-64 text-center z-10 shadow-lg">
          <h4 className="font-bold text-blue-300">Le Gouvernement</h4>
          <p className="text-xs text-gray-300 mt-1">Dirigé par le Premier ministre (nommé par le Président). Applique les lois.</p>
        </motion.div>

        <div className="flex gap-4 items-center">
           <div className="text-xs text-gray-500">Contrôle</div>
           <ArrowDown className="text-gray-500" />
           <div className="text-xs text-gray-500">Dissolution</div>
        </div>

        {/* Parlement */}
        <div className="flex gap-4 w-full max-w-lg">
          <motion.div whileHover={{ scale: 1.05 }} className="flex-1 bg-red-900/30 border border-red-500/50 p-4 rounded-xl text-center shadow-lg">
            <h4 className="font-bold text-red-300">L'Assemblée Nationale</h4>
            <p className="text-xs text-gray-300 mt-1">577 députés élus par le peuple. Votent les lois.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="flex-1 bg-red-900/30 border border-red-500/50 p-4 rounded-xl text-center shadow-lg">
            <h4 className="font-bold text-red-300">Le Sénat</h4>
            <p className="text-xs text-gray-300 mt-1">348 sénateurs élus par les grands électeurs. Votent les lois.</p>
          </motion.div>
        </div>

        {/* Citoyens */}
        <div className="w-full max-w-lg mt-8 pt-4 border-t border-gray-700 text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Users className="text-green-400"/>
            <h4 className="font-bold text-green-300">Les Citoyens Français</h4>
          </div>
          <p className="text-xs text-gray-400">Élisent le Président et les Députés (<Vote className="inline w-3 h-3"/> Suffrage Universel).</p>
        </div>

      </div>

    </div>
  );
};
