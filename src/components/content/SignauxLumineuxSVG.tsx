import React from 'react';
import { motion } from 'motion/react';
import { Sun, Eye, BookOpen } from 'lucide-react';

export const SignauxLumineuxSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 text-foreground font-sans overflow-hidden">
      <h3 className="text-xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        <Sun className="text-yellow-500"/> Propagation de la lumière
      </h3>

      <div className="relative flex justify-between items-center max-w-4xl mx-auto p-4 md:p-8 bg-slate-900 rounded-3xl overflow-hidden border border-slate-700">
         
         {/* Source Primaire */}
         <div className="relative z-10 flex flex-col items-center">
             <motion.div
               animate={{ scale: [1, 1.1, 1] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="bg-yellow-400 w-16 h-16 rounded-full shadow-[0_0_50px_rgba(250,204,21,0.8)] flex items-center justify-center border-4 border-yellow-200"
             >
                <Sun className="text-yellow-700 w-8 h-8" />
             </motion.div>
             <div className="mt-4 text-center">
                 <div className="font-bold text-yellow-300">Source Primaire</div>
                 <div className="text-xs text-slate-400">Soleil, Lampe<br/>(Produit sa lumière)</div>
             </div>
         </div>

         {/* Rayon 1 */}
         <div className="flex-1 px-4 relative h-32 flex items-center justify-center">
             <motion.div 
               className="w-full h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full flex items-center justify-end pr-1"
               initial={{ scaleX: 0, transformOrigin: "left" }}
               animate={{ scaleX: 1 }}
               transition={{ repeat: Infinity, duration: 1.5 }}
             >
                 <div className="w-0 h-0 border-t-4 border-t-transparent border-l-[8px] border-l-yellow-600 border-b-4 border-b-transparent"></div>
             </motion.div>
             <span className="absolute -top-4 text-xs font-mono text-yellow-200 whitespace-nowrap">Rayon incident rectiligne</span>
         </div>

         {/* Objet Diffusant */}
         <div className="relative z-10 flex flex-col items-center">
             <motion.div
               whileHover={{ scale: 1.1 }}
               className="bg-emerald-500 w-16 h-20 rounded-lg shadow-lg flex items-center justify-center border-2 border-emerald-400"
             >
                <BookOpen className="text-emerald-900 w-8 h-8" />
             </motion.div>
             <div className="mt-4 text-center">
                 <div className="font-bold text-emerald-300">Objet diffusant</div>
                 <div className="text-xs text-slate-400">Livre, Lune<br/>(Renvoie la lumière)</div>
             </div>
         </div>

         {/* Rayon 2 */}
         <div className="flex-1 px-4 relative h-32 flex items-center justify-center">
             <motion.div 
               className="w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-200 rounded-full border border-dashed border-emerald-300/50 flex items-center justify-end pr-1"
               initial={{ scaleX: 0, transformOrigin: "left" }}
               animate={{ scaleX: 1 }}
               transition={{ repeat: Infinity, duration: 1.5, delay: 0.75 }}
             >
                 <div className="w-0 h-0 border-t-4 border-t-transparent border-l-[8px] border-l-emerald-600 border-b-4 border-b-transparent"></div>
             </motion.div>
             <span className="absolute -bottom-4 text-xs font-mono text-emerald-200 whitespace-nowrap">Lumière diffusée</span>
         </div>

         {/* Récepteur */}
         <div className="relative z-10 flex flex-col items-center">
             <motion.div
               animate={{ y: [0, -5, 0] }}
               transition={{ repeat: Infinity, duration: 3 }}
               className="bg-purple-500 w-16 h-16 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.5)] flex items-center justify-center border-4 border-purple-300"
             >
                <Eye className="text-purple-100 w-8 h-8" />
             </motion.div>
             <div className="mt-4 text-center">
                 <div className="font-bold text-purple-300">Récepteur</div>
                 <div className="text-xs text-slate-400">Oeil, Capteur photo<br/>(Détecte la lumière)</div>
             </div>
         </div>

      </div>
    </div>
  );
};
