import React from 'react';
import { motion } from 'motion/react';
import { FlaskConical, Atom } from 'lucide-react';

export const TransformationsChimiquesSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 font-sans">
      
      <div className="text-center mb-8">
         <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2"><FlaskConical className="text-pink-500"/> La Transformation Chimique</h3>
         <p className="text-muted text-sm">Réactifs ➔ Produits (La matière se réorganise)</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative">
        
        {/* Reactifs */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-red-900/30 border-2 border-red-500 p-6 rounded-xl flex-1 text-center shadow-lg relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Avant</div>
          <h4 className="font-bold text-red-300 text-xl">Les Réactifs</h4>
          <p className="text-xs text-red-100 mt-2">Ceux qui disparaissent.</p>
          <div className="flex justify-center gap-2 mt-4">
             <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-red-400 flex items-center justify-center text-xs">C</div>
             <span className="text-xl font-bold text-gray-500">+</span>
             <div className="flex">
               <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-red-700 flex items-center justify-center text-xs text-white">O</div>
               <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-red-700 flex items-center justify-center text-xs text-white -ml-2">O</div>
             </div>
          </div>
          <p className="text-sm font-mono mt-2 text-gray-400">C + O₂</p>
        </motion.div>

        <div className="text-3xl font-bold text-blue-500">➔</div>

        {/* Produits */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-emerald-900/30 border-2 border-emerald-500 p-6 rounded-xl flex-1 text-center shadow-lg relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Après</div>
          <h4 className="font-bold text-emerald-300 text-xl">Les Produits</h4>
          <p className="text-xs text-emerald-100 mt-2">Ceux qui apparaissent.</p>
          <div className="flex justify-center mt-4">
             <div className="flex items-center justify-center">
               <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-red-700 flex items-center justify-center text-xs text-white z-10">O</div>
               <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-red-400 flex items-center justify-center text-xs -ml-2 z-20">C</div>
               <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-red-700 flex items-center justify-center text-xs text-white -ml-2 z-10">O</div>
             </div>
          </div>
          <p className="text-sm font-mono mt-2 text-gray-400">CO₂</p>
        </motion.div>

      </div>

      <div className="mt-8 bg-blue-900/10 p-4 rounded-lg flex items-center justify-center gap-4 text-center border border-blue-500/20">
        <Atom className="w-8 h-8 text-blue-400" />
        <div>
           <h4 className="font-bold text-blue-300">Loi de Lavoisier (Conservation de la masse)</h4>
           <p className="text-sm text-gray-300">"Rien ne se perd, rien ne se crée, tout se transforme." (Masse Réactifs = Masse Produits)</p>
        </div>
      </div>

    </div>
  );
};
