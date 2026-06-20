import React from 'react';
import { motion } from 'motion/react';
import { Navigation, Timer, Activity } from 'lucide-react';

export const MouvementsInteractionsSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 font-sans">
      
      <div className="text-center mb-8">
         <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2"><Navigation className="text-blue-400 rotate-45"/> Mouvements & Trajectoires</h3>
         <p className="text-muted text-sm">Description du mouvement d'un point au cours du temps.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        
        {/* Uniforme */}
        <motion.div whileHover={{ y: -5 }} className="bg-gray-800/50 p-4 rounded-xl border border-gray-600">
          <h4 className="font-bold text-gray-200 mb-2">Mouvement Uniforme</h4>
          <p className="text-xs text-gray-400 mb-4 items-center flex justify-center gap-1"><Timer className="w-3 h-3"/> Vitesse constante</p>
          <div className="flex items-center justify-center gap-4 py-4">
             <div className="w-3 h-3 bg-blue-400 rounded-full" />
             <div className="w-3 h-3 bg-blue-400 rounded-full" />
             <div className="w-3 h-3 bg-blue-400 rounded-full" />
             <div className="w-3 h-3 bg-blue-400 rounded-full" />
          </div>
          <p className="text-xs text-blue-300 mt-2">La distance entre les points est égale.</p>
        </motion.div>

        {/* Accéléré */}
        <motion.div whileHover={{ y: -5 }} className="bg-red-900/20 p-4 rounded-xl border border-red-500/30">
          <h4 className="font-bold text-red-300 mb-2">Mouvement Accéléré</h4>
          <p className="text-xs text-red-200 mb-4 items-center flex justify-center gap-1"><Activity className="w-3 h-3"/> Vitesse augmente</p>
          <div className="flex items-center justify-center py-4 relative h-10 w-full">
             <div className="w-3 h-3 bg-red-400 rounded-full absolute left-4" />
             <div className="w-3 h-3 bg-red-400 rounded-full absolute left-12" />
             <div className="w-3 h-3 bg-red-400 rounded-full absolute left-24" />
             <div className="w-3 h-3 bg-red-400 rounded-full absolute left-40" />
          </div>
          <p className="text-xs text-red-300 mt-2">Les points s'écartent.</p>
        </motion.div>

        {/* Ralenti */}
        <motion.div whileHover={{ y: -5 }} className="bg-orange-900/20 p-4 rounded-xl border border-orange-500/30">
          <h4 className="font-bold text-orange-300 mb-2">Mouvement Ralenti</h4>
          <p className="text-xs text-orange-200 mb-4 items-center flex justify-center gap-1"><Timer className="w-3 h-3"/> Vitesse diminue</p>
          <div className="flex items-center justify-center py-4 relative h-10 w-full">
             <div className="w-3 h-3 bg-orange-400 rounded-full absolute left-4" />
             <div className="w-3 h-3 bg-orange-400 rounded-full absolute left-24" />
             <div className="w-3 h-3 bg-orange-400 rounded-full absolute left-36" />
             <div className="w-3 h-3 bg-orange-400 rounded-full absolute left-44" />
          </div>
          <p className="text-xs text-orange-300 mt-2">Les points se rapprochent.</p>
        </motion.div>

      </div>

      <div className="mt-8 bg-blue-900/10 p-4 rounded-lg flex items-center justify-center gap-4 text-center border border-blue-500/20">
        <div>
           <h4 className="font-bold text-blue-300">Rappels de calcul : <span className="font-mono text-white bg-blue-900/50 px-2 py-1 rounded">v = d / t</span></h4>
           <p className="text-sm text-gray-300 mt-1">Exprimez la distance (d) en <strong>mètres</strong>, et le temps (t) en <strong>secondes</strong>, pour obtenir une vitesse en <strong>m/s</strong>.</p>
        </div>
      </div>

    </div>
  );
};
