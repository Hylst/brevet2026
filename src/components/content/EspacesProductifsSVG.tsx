import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Tractor, Factory, Building2, Plane, ShoppingBag, SunSnow, Ship } from 'lucide-react';

export const EspacesProductifsSVG: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'all' | 'agricole' | 'industriel' | 'tertiaire'>('all');

  return (
    <div className="w-full max-w-3xl mx-auto my-8 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden font-sans">
      <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-center text-slate-800 dark:text-slate-200">
        Les Espaces Productifs en France
      </div>
      
      <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-slate-100 dark:border-slate-800">
        <button 
          onClick={() => setActiveLayer('all')}
          className={`px-3 py-2 text-sm rounded-md transition-colors ${activeLayer === 'all' ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300'}`}
        >
          Carte Complète
        </button>
        <button 
          onClick={() => setActiveLayer('agricole')}
          className={`px-3 py-2 text-sm rounded-md transition-colors flex items-center justify-center gap-2 ${activeLayer === 'agricole' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:hover:bg-emerald-900/50 dark:text-emerald-400'}`}
        >
          <Tractor className="w-4 h-4" /> Agricole
        </button>
        <button 
          onClick={() => setActiveLayer('industriel')}
          className={`px-3 py-2 text-sm rounded-md transition-colors flex items-center justify-center gap-2 ${activeLayer === 'industriel' ? 'bg-amber-600 text-white' : 'bg-amber-50 hover:bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:hover:bg-amber-900/50 dark:text-amber-400'}`}
        >
          <Factory className="w-4 h-4" /> Industriel
        </button>
        <button 
          onClick={() => setActiveLayer('tertiaire')}
          className={`px-3 py-2 text-sm rounded-md transition-colors flex items-center justify-center gap-2 ${activeLayer === 'tertiaire' ? 'bg-blue-600 text-white' : 'bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 dark:text-blue-400'}`}
        >
          <Building2 className="w-4 h-4" /> Services (Tertiaire)
        </button>
      </div>

      <div className="relative aspect-video w-full p-4 overflow-hidden bg-sky-50 dark:bg-slate-900/50">
        
        {/* Hexagon / France outline base */}
        <svg viewBox="0 0 100 100" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 opacity-30 dark:opacity-20 pointer-events-none">
          <path d="M 50 5 L 85 25 L 85 70 L 50 95 L 15 70 L 15 25 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
        </svg>

        <AnimatePresence mode="popLayout">
          {/* AGRICOLE LAYER */}
          {(activeLayer === 'all' || activeLayer === 'agricole') && (
            <motion.div 
              key="agricole"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Bassin Parisien - Céréaliculture */}
              <div className="absolute top-[25%] left-[45%] bg-emerald-100/80 dark:bg-emerald-900/50 p-2 rounded-full border-2 border-emerald-500 shadow-sm flex flex-col items-center justify-center w-24 h-24">
                <Tractor className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                <span className="text-[10px] font-bold text-center mt-1 text-emerald-800 dark:text-emerald-300">Bassin Parisien<br/>(Céréales)</span>
              </div>
              
              {/* Bretagne - Elevage intensif */}
              <div className="absolute top-[35%] left-[20%] bg-emerald-100/80 dark:bg-emerald-900/50 p-2 rounded-full border-2 border-emerald-500 shadow-sm flex flex-col items-center justify-center w-20 h-20">
                <span className="text-xl">🐄</span>
                <span className="text-[9px] font-bold text-center mt-1 text-emerald-800 dark:text-emerald-300">Bretagne<br/>(Élevage int.)</span>
              </div>

               {/* Bordelais - Viticulture */}
               <div className="absolute top-[60%] left-[30%] bg-emerald-200/80 dark:bg-emerald-800/50 p-2 rounded-full border-2 border-emerald-600 shadow-sm flex flex-col items-center justify-center w-20 h-20">
                <span className="text-xl">🍇</span>
                <span className="text-[9px] font-bold text-center mt-1 text-emerald-900 dark:text-emerald-300">Bordelais<br/>(Vin AOC)</span>
              </div>
            </motion.div>
          )}

          {/* INDUSTRIEL LAYER */}
          {(activeLayer === 'all' || activeLayer === 'industriel') && (
            <motion.div 
              key="industriel"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Lyon - Pharmacie / Chimie */}
              <div className="absolute top-[50%] left-[65%] bg-amber-100/80 dark:bg-amber-900/50 p-2 rounded-full border-2 border-amber-500 shadow-sm flex flex-col items-center justify-center w-20 h-20">
                <Factory className="w-6 h-6 text-amber-700 dark:text-amber-400" />
                <span className="text-[9px] font-bold text-center mt-1 text-amber-800 dark:text-amber-300">Lyon<br/>(Pharmacie)</span>
              </div>

              {/* Toulouse - Aéronautique (Technopôle) */}
              <div className="absolute top-[75%] left-[45%] bg-amber-100/80 dark:bg-amber-900/50 p-2 rounded-full border-2 border-amber-500 shadow-sm flex flex-col items-center justify-center w-20 h-20 z-10">
                <Plane className="w-6 h-6 text-amber-700 dark:text-amber-400" />
                <span className="text-[9px] font-bold text-center mt-1 text-amber-800 dark:text-amber-300">Toulouse<br/>(Aéro.)</span>
              </div>

              {/* Le Havre / Marseille - ZIPs */}
              <div className="absolute top-[20%] left-[35%] bg-slate-200/80 dark:bg-slate-700/80 p-2 rounded-full border-2 border-slate-500 shadow-sm flex flex-col items-center justify-center w-[70px] h-[70px]">
                <Ship className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                <span className="text-[8px] font-bold text-center mt-1 text-slate-800 dark:text-slate-300">ZIP<br/>Nord</span>
              </div>
              <div className="absolute top-[80%] left-[60%] bg-slate-200/80 dark:bg-slate-700/80 p-2 rounded-full border-2 border-slate-500 shadow-sm flex flex-col items-center justify-center w-[70px] h-[70px]">
                <Ship className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                <span className="text-[8px] font-bold text-center mt-1 text-slate-800 dark:text-slate-300">Fos-sur-Mer</span>
              </div>
            </motion.div>
          )}

          {/* TERTIAIRE LAYER */}
          {(activeLayer === 'all' || activeLayer === 'tertiaire') && (
            <motion.div 
              key="tertiaire"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Paris - Quartier Affaires / Tourisme */}
              <div className="absolute top-[18%] left-[55%] bg-blue-100/90 dark:bg-blue-900/60 p-2 rounded-full border-2 border-blue-500 shadow-lg flex flex-col items-center justify-center w-28 h-28 z-20">
                <Building2 className="w-8 h-8 text-blue-700 dark:text-blue-400 mb-1" />
                <span className="text-[11px] font-bold text-center mt-1 text-blue-800 dark:text-blue-300">Paris (IdF)<br/>Quartier d'Affaires & Décision</span>
              </div>

              {/* Côte d'Azur - Tourisme littoral */}
              <div className="absolute top-[70%] right-[10%] bg-sky-200/90 dark:bg-sky-800/60 p-2 rounded-full border-2 border-sky-400 shadow-sm flex flex-col items-center justify-center w-[85px] h-[85px] z-10">
                <span className="text-xl">🏖️</span>
                <span className="text-[8px] font-bold text-center mt-1 text-sky-900 dark:text-sky-200">Côte d'Azur<br/>Tourisme</span>
              </div>

               {/* Alpes - Tourisme hivernal */}
               <div className="absolute top-[48%] right-[15%] bg-blue-50/90 dark:bg-blue-900/40 p-2 rounded-full border-2 border-blue-300 shadow-sm flex flex-col items-center justify-center w-[75px] h-[75px] z-10">
                <SunSnow className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-[8px] font-bold text-center mt-1 text-blue-800 dark:text-blue-300">Alpes<br/>Stations ski</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
        <p><strong>Note :</strong> La carte montre la spécialisation des espaces productifs français intégrés dans la mondialisation. Cliquez sur les catégories en haut pour les isoler.</p>
      </div>

    </div>
  );
};
