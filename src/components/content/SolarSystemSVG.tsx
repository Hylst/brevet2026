import React from 'react';
import { motion } from 'motion/react';

export const SolarSystemSVG: React.FC = () => {
  const planets = [
    { name: "Mercure", color: "bg-orange-400", size: "w-2 h-2", orbit: "w-16 h-16", duration: 2, labelOffset: "-left-4 text-orange-400" },
    { name: "Vénus", color: "bg-yellow-200", size: "w-3 h-3", orbit: "w-24 h-24", duration: 3.5, labelOffset: "-left-4 text-yellow-200" },
    { name: "Terre", color: "bg-info", size: "w-3.5 h-3.5", orbit: "w-36 h-36", duration: 5, labelOffset: "-left-6 text-info" },
    { name: "Mars", color: "bg-danger", size: "w-2.5 h-2.5", orbit: "w-48 h-48", duration: 6.5, labelOffset: "-left-4 text-danger" },
  ];

  return (
    <div className="my-8 p-6 rounded-2xl bg-slate-900 border border-slate-700 shadow-xl flex flex-col items-center justify-center overflow-hidden relative">
      <h3 className="text-xl font-bold text-white mb-6 z-20">Le Système Solaire Interne</h3>
      
      {/* Étoiles en arrière-plan */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div key={`star-${i}`} className="absolute w-1 h-1 bg-white rounded-full" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, opacity: Math.random() }} />
        ))}
      </div>

      <div className="relative w-64 h-64 flex items-center justify-center my-4">
        {/* Soleil */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 20px #fbbf24", "0 0 40px #fbbf24", "0 0 20px #fbbf24"] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute z-10 w-10 h-10 bg-yellow-400 rounded-full"
        />

        {/* Orbites et Planètes */}
        {planets.map((planet, idx) => (
          <div key={`orbit-${idx}`} className={`absolute ${planet.orbit} border border-slate-500/30 rounded-full`}>
            <motion.div
              className="absolute inset-0 m-auto w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: planet.duration, ease: "linear" }}
            >
              {/* Planète */}
              <div className={`absolute -top-1 left-1/2 -ml-1 ${planet.color} ${planet.size} rounded-full shadow-lg relative`}>
                <span className={`absolute -top-4 text-[9px] font-bold opacity-0 hover:opacity-100 transition-opacity ${planet.labelOffset}`}>
                  {planet.name}
                </span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      
      <p className="text-sm text-slate-300 text-center mt-6 z-20 max-w-sm">
        Le système solaire est composé d'une étoile (le <b>Soleil</b>) autour de laquelle gravitent des planètes. Ici, les 4 planètes rocheuses : Mercure, Vénus, la Terre et Mars.
      </p>
    </div>
  );
};
