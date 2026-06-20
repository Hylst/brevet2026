import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Eye, Radio, Zap, Activity, Orbit, Settings } from 'lucide-react';

export const ChainesInfoActionSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-4 md:p-6 rounded-2xl border border-border shadow-lg my-8 text-foreground font-sans overflow-hidden">
      <h3 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
        <Cpu className="text-primary"/> Chaînes d'information et d'action
      </h3>

      <div className="flex flex-col items-center max-w-3xl mx-auto space-y-8">
        
        {/* Chaîne d'Information */}
        <div className="w-full bg-blue-900/10 border border-blue-500/30 p-4 rounded-xl relative">
          <div className="absolute -top-3 left-4 bg-blue-900 border border-blue-500/50 px-3 py-1 text-xs font-bold text-blue-200 rounded-full">
            Chaîne d'Information (Le "Cerveau")
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-surface border border-border p-3 rounded-lg flex flex-col items-center text-center shadow-sm">
              <Eye className="w-6 h-6 text-blue-400 mb-2"/>
              <span className="font-bold text-sm">Acquérir</span>
              <span className="text-xs text-muted">(Capteurs)</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-surface border border-border p-3 rounded-lg flex flex-col items-center text-center shadow-sm">
              <Cpu className="w-6 h-6 text-blue-400 mb-2"/>
              <span className="font-bold text-sm">Traiter</span>
              <span className="text-xs text-muted">(Carte mère)</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-surface border border-border p-3 rounded-lg flex flex-col items-center text-center shadow-sm">
              <Radio className="w-6 h-6 text-blue-400 mb-2"/>
              <span className="font-bold text-sm">Communiquer</span>
              <span className="text-xs text-muted">(Ordres)</span>
            </motion.div>
          </div>
          
          {/* Flèches internes info */}
          <div className="hidden md:flex absolute top-1/2 left-0 w-full justify-between px-16 pointer-events-none">
            <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-blue-500/50">⟶</motion.div>
            <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-blue-500/50">⟶</motion.div>
          </div>
        </div>

        {/* Le lien / Ordres */}
        <div className="flex justify-center w-full relative h-10">
           <motion.div 
             animate={{ y: [0, 15] }} 
             transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
             className="absolute flex flex-col items-center text-primary"
           >
             <span className="text-xs font-bold">Ordres</span>
             <span>⬇</span>
           </motion.div>
        </div>

        {/* Chaîne d'Action */}
        <div className="w-full bg-red-900/10 border border-red-500/30 p-4 rounded-xl relative">
          <div className="absolute -top-3 left-4 bg-red-900 border border-red-500/50 px-3 py-1 text-xs font-bold text-red-200 rounded-full">
            Chaîne d'Action (Les "Muscles")
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-surface border border-border p-3 rounded-lg flex flex-col items-center text-center shadow-sm">
              <Zap className="w-6 h-6 text-red-400 mb-2"/>
              <span className="font-bold text-sm">Alimenter</span>
              <span className="text-xs text-muted">(Batterie / Secteur)</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-surface border border-border p-3 rounded-lg flex flex-col items-center text-center shadow-sm">
              <Activity className="w-6 h-6 text-red-400 mb-2"/>
              <span className="font-bold text-sm">Distribuer</span>
              <span className="text-xs text-muted">(Relais)</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-surface border border-border p-3 rounded-lg flex flex-col items-center text-center shadow-sm">
              <Orbit className="w-6 h-6 text-red-400 mb-2"/>
              <span className="font-bold text-sm">Convertir</span>
              <span className="text-xs text-muted">(Moteurs)</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-surface border border-border p-3 rounded-lg flex flex-col items-center text-center shadow-sm">
              <Settings className="w-6 h-6 text-red-400 mb-2"/>
              <span className="font-bold text-sm">Transmettre</span>
              <span className="text-xs text-muted">(Engrenages)</span>
            </motion.div>
          </div>
          
           {/* Flèches internes action */}
           <div className="hidden md:flex absolute top-[60%] left-0 w-full justify-between px-16 pointer-events-none">
            <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-red-500/50">⟶</motion.div>
            <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-red-500/50">⟶</motion.div>
            <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-red-500/50">⟶</motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};
