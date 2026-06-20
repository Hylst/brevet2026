import React from 'react';
import { motion } from 'motion/react';
import { Radiation } from 'lucide-react';

export const FissionFusionSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 font-sans">
      
      <div className="text-center mb-8">
         <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2"><Radiation className="text-yellow-500"/> Fission et Fusion Nucléaires</h3>
         <p className="text-muted text-sm">Modification du noyau atomique et libération d'énergie.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-center relative">
        
        {/* Fission */}
        <motion.div whileHover={{ scale: 1.02 }} className="bg-red-900/20 border border-red-500/30 p-4 rounded-xl flex-1 text-center w-full">
          <h4 className="font-bold text-red-300 text-lg mb-2">La Fission</h4>
          <p className="text-xs text-red-100 mb-4 h-8">Casse d'un noyau très lourd par un neutron (Centrales nucléaires).</p>
          <div className="flex items-center justify-center gap-2 relative mt-6 h-24">
             <motion.div animate={{ x: [0, 40] }} transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }} className="w-3 h-3 bg-gray-400 rounded-full z-20" />
             <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-xs text-white border-2 border-red-400 z-10 absolute left-[40px]">Noyau<br/>Lourd</div>
             <div className="absolute right-0 flex flex-col gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-orange-300" />
                <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-orange-300" />
             </div>
             <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute right-4 w-12 h-12 bg-yellow-400 blur-xl opacity-50 rounded-full" />
          </div>
          <p className="text-xs text-yellow-300 mt-2 font-bold uppercase tracking-widest">+ Énergie</p>
        </motion.div>

        {/* Fusion */}
        <motion.div whileHover={{ scale: 1.02 }} className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl flex-1 text-center w-full">
          <h4 className="font-bold text-blue-300 text-lg mb-2">La Fusion</h4>
          <p className="text-xs text-blue-100 mb-4 h-8">Union de deux noyaux légers (Le Soleil, les étoiles).</p>
          <div className="flex items-center justify-between gap-2 relative mt-6 h-24">
             <div className="flex flex-col gap-4 absolute left-0">
               <motion.div animate={{ x: [0, 30], y: [0, 20] }} transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }} className="w-6 h-6 bg-blue-400 rounded-full border-2 border-blue-200" />
               <motion.div animate={{ x: [0, 30], y: [0, -20] }} transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }} className="w-6 h-6 bg-cyan-400 rounded-full border-2 border-cyan-200" />
             </div>
             <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-xs text-white border-2 border-purple-400 absolute right-4">Noyau<br/>Plus Lourd</div>
             <motion.div animate={{ scale: [1, 2, 1], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute right-4 w-16 h-16 bg-yellow-400 blur-xl opacity-50 rounded-full" />
          </div>
          <p className="text-xs text-yellow-300 mt-2 font-bold uppercase tracking-widest">+ Énergie Gigantesque</p>
        </motion.div>

      </div>

    </div>
  );
};
