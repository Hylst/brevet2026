import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const InteractiveAtom: React.FC = () => {
  const [electrons, setElectrons] = useState(6); // Carbon by default
  
  return (
    <div className="my-8 p-6 rounded-2xl bg-surface/50 border border-border shadow-lg flex flex-col items-center justify-center">
      <h3 className="text-xl font-bold text-primary mb-4 text-center">Structure de l'Atome (Carbone)</h3>
      <div className="relative w-64 h-64 mb-6">
        {/* Noyau */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="relative w-12 h-12 flex flex-wrap items-center justify-center bg-danger/20 rounded-full shadow-[0_0_20px_theme(colors.danger)]"
          >
            {/* Protons et Neutrons (simplifiés) */}
            <div className="w-4 h-4 bg-danger rounded-full absolute -ml-2 -mt-2 shadow-sm text-[8px] flex items-center justify-center text-white font-bold">+</div>
            <div className="w-4 h-4 bg-muted rounded-full absolute ml-3 -mt-3 shadow-sm"></div>
            <div className="w-4 h-4 bg-danger rounded-full absolute -ml-3 mt-2 shadow-sm text-[8px] flex items-center justify-center text-white font-bold">+</div>
            <div className="w-4 h-4 bg-danger rounded-full absolute ml-2 mt-3 shadow-sm text-[8px] flex items-center justify-center text-white font-bold">+</div>
            <div className="w-4 h-4 bg-muted rounded-full absolute ml-4 mt-0 shadow-sm"></div>
            <div className="w-4 h-4 bg-muted rounded-full absolute -ml-1 mt-4 shadow-sm"></div>
          </motion.div>
        </div>

        {/* Orbites et électrons */}
        {/* Couche K (n=1) - 2 électrons */}
        <div className="absolute inset-0 m-auto w-24 h-24 rounded-full border border-primary/30" />
        {[0, 1].map((i) => (
          <motion.div
            key={`k-elec-${i}`}
            className="absolute inset-0 m-auto w-24 h-24"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: i * 1.5 }}
          >
            <div className="w-3 h-3 bg-info rounded-full absolute -top-1.5 left-1/2 -ml-1.5 shadow-[0_0_10px_theme(colors.info)] text-[6px] flex items-center justify-center text-white">-</div>
          </motion.div>
        ))}

        {/* Couche L (n=2) - 4 électrons (pour le carbone) */}
        <div className="absolute inset-0 m-auto w-48 h-48 rounded-full border border-primary/20" />
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`l-elec-${i}`}
            className="absolute inset-0 m-auto w-48 h-48"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear", delay: i * 1.5 }}
          >
            <div className="w-3 h-3 bg-info rounded-full absolute -top-1.5 left-1/2 -ml-1.5 shadow-[0_0_10px_theme(colors.info)] text-[6px] flex items-center justify-center text-white">-</div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-sm text-muted text-center max-w-md">
        <p className="mb-2">Le <b>noyau</b> (au centre) contient les <b>protons</b> (positifs) et les <b>neutrons</b>.</p>
        <p>Les <b>électrons</b> (négatifs) tournent autour du noyau sur des couches électroniques constituées de vide.</p>
      </div>
    </div>
  );
};
