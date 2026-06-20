import React from 'react';
import { motion } from 'motion/react';

export const FriseChrono1GMSVG: React.FC = () => {
  const events = [
    { year: '1914', title: 'Attentat de Sarajevo', desc: 'Déclenchement du conflit', color: 'bg-red-500' },
    { year: '1915', title: 'Génocide Arménien', desc: 'Début des massacres', color: 'bg-red-600' },
    { year: '1916', title: 'Bataille de Verdun', desc: 'Guerre de position intense', color: 'bg-orange-500' },
    { year: '1917', title: 'Révolutions russes', desc: 'Entrée en guerre des USA', color: 'bg-blue-500' },
    { year: '1918', title: 'Armistice', desc: 'Fin des combats (11 nov.)', color: 'bg-green-500' }
  ];

  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 overflow-hidden">
      <div className="text-lg font-bold mb-8 text-center text-white">Repères : La Première Guerre mondiale</div>
      
      <div className="relative pt-12 pb-8 px-4">
        {/* Ligne centrale */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 rounded-full"></div>
        
        <div className="flex justify-between items-center relative z-10">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 relative"
            >
              <div className={`absolute -top-16 w-32 left-1/2 -translate-x-1/2 p-2 rounded-lg border border-white/10 ${event.color}/20 text-center`}>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${event.color.replace('bg-', 'text-')}`}>{event.title}</p>
                <p className="text-[9px] text-muted leading-tight mt-1">{event.desc}</p>
              </div>
              
              <div className={`w-4 h-4 rounded-full ${event.color} border-4 border-surface shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></div>
              
              <div className="text-xs font-bold text-white mt-1 bg-surface/80 px-2 py-0.5 rounded border border-border">
                {event.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
