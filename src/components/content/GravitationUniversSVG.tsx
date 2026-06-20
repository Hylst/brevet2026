import React from 'react';
import { motion } from 'motion/react';
import { Rocket, ArrowRight, ArrowLeft } from 'lucide-react';

export const GravitationUniversSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 text-foreground font-sans overflow-hidden">
      <h3 className="text-xl font-bold text-center mb-10 flex items-center justify-center gap-2">
        <Rocket className="text-indigo-400"/> L'interaction gravitationnelle
      </h3>

      <div className="relative flex justify-between items-center max-w-lg mx-auto py-12 px-4 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] bg-slate-900 rounded-3xl overflow-hidden border border-slate-700">
         {/* Etoiles en fond */}
         <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]"></div>

         {/* Terre */}
         <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="w-24 h-24 rounded-full bg-blue-500 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5)] border-2 border-blue-400" 
            />
            <span className="mt-4 font-bold text-blue-300">Terre (T)</span>
            <span className="text-xs text-slate-400">Objet très massif</span>
         </div>

         {/* Vecteurs de force */}
         <div className="flex-1 flex flex-col justify-center items-center relative z-10 h-32 px-4">
             {/* Force exercée par la Lune sur la Terre */}
             <div className="w-full relative flex items-center mb-4">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono text-cyan-300 text-center whitespace-nowrap">Force de L sur T</span>
                <motion.div animate={{ x: [10, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="h-1 bg-cyan-400 w-full rounded-r-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <ArrowRight className="text-cyan-400 -ml-2 w-6 h-6 shrink-0"/>
             </div>

             {/* Force exercée par la Terre sur la Lune */}
             <div className="w-full relative flex items-center">
                <ArrowLeft className="text-purple-400 -mr-2 w-6 h-6 shrink-0"/>
                <motion.div animate={{ x: [-10, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="h-1 bg-purple-400 w-full rounded-l-full shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-purple-300 text-center whitespace-nowrap">Force de T sur L</span>
             </div>

             <span className="absolute mt-16 text-xs text-slate-400 font-bold whitespace-nowrap bg-slate-900/80 px-2 rounded">Action Mutuelle (Même valeur)</span>
         </div>

         {/* Lune */}
         <div className="relative z-10 flex flex-col items-center">
            <motion.div 
               animate={{ rotate: -360 }} 
               transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
               className="w-12 h-12 rounded-full bg-slate-300 shadow-[inset_-5px_-5px_10px_rgba(0,0,0,0.5)] border border-slate-400" 
            />
            <span className="mt-4 font-bold text-slate-200">Lune (L)</span>
            <span className="text-xs text-slate-400">Objet massif</span>
         </div>
      </div>
    </div>
  );
};
