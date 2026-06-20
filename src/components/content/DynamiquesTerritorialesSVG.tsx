import React from 'react';
import { motion } from 'motion/react';
import { Building2, Home, TreePine, Car } from 'lucide-react';

export const DynamiquesTerritorialesSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 font-sans">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white">Schéma Inside d'une Aire Urbaine</h3>
        <p className="text-muted text-sm">Comprendre l'organisation et l'étalement urbain.</p>
      </div>

      <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900/40 rounded-xl border border-white/5">
        
        {/* Ville-centre */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute z-30 w-24 h-24 bg-red-600 rounded-full flex flex-col items-center justify-center border-4 border-red-400 shadow-[0_0_30px_rgba(220,38,38,0.5)]"
        >
          <Building2 className="text-white w-8 h-8" />
          <span className="text-[10px] font-bold text-white">Ville-centre</span>
        </motion.div>

        {/* Banlieue (Pôle urbain) */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute z-20 w-48 h-48 bg-orange-600/30 rounded-full border-2 border-dashed border-orange-500/50 flex items-start justify-center pt-2"
        >
          <span className="text-[10px] font-bold text-orange-200">BANLIEUE</span>
        </motion.div>

        {/* Couronne Périurbaine */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute z-10 w-[320px] h-[320px] bg-yellow-600/10 rounded-full border border-yellow-500/30 flex items-start justify-center pt-2"
        >
          <span className="text-[10px] font-bold text-yellow-200 uppercase tracking-widest">Couronne Périurbaine</span>
        </motion.div>

        {/* Espace Rural / Limite de l'aire */}
        <div className="absolute inset-0 border-2 border-emerald-900/50 rounded-xl pointer-events-none">
           <div className="absolute top-4 left-4 flex gap-1 items-center text-emerald-500 opacity-40">
             <TreePine size={16} /> <span>Espace Rural</span>
           </div>
        </div>

        {/* Flèches de migrations pendulaires */}
        <motion.div 
          animate={{ x: [0, -40, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[20%] text-yellow-400 flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded-full border border-yellow-500/30 shadow-lg"
        >
           <Car size={14} />
           <span className="text-[9px] font-bold">MIGRATIONS PENDULAIRES</span>
        </motion.div>

        {/* Légende flottante */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10 text-[10px] space-y-1">
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-red-600"></div>
             <span className="text-gray-300 font-medium">Bâti dense, commerces, emplois</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-orange-500"></div>
             <span className="text-gray-300 font-medium">Zones résidentielles, pavillons</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
             <span className="text-gray-300 font-medium">Villages, lotissements récents</span>
           </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl flex gap-4 items-center">
         <Home className="w-12 h-12 text-blue-400 shrink-0" />
         <p className="text-xs leading-relaxed">
           <strong className="text-blue-300">Le saviez-vous ?</strong> L'étalement urbain (la ville qui grignote la campagne) est dû à la recherche d'une meilleure qualité de vie et de prix immobiliers plus bas, mais il augmente les temps de transport.
         </p>
      </div>
    </div>
  );
};
