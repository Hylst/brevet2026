import React from 'react';
import { motion } from 'motion/react';
import { Mountain, TreePine, WifiOff, Car } from 'lucide-react';

export const FaibleDensiteSVG: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto my-8 bg-green-50 dark:bg-slate-900 rounded-xl shadow-lg border border-green-200 dark:border-slate-800 overflow-hidden font-sans">
      <div className="bg-green-100 dark:bg-slate-800 p-4 border-b border-green-200 dark:border-slate-700 font-bold text-center text-green-900 dark:text-green-100">
        Les espaces de Faible Densité en France
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Atouts vs Contraintes Box */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
          <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2 border-b pb-1 dark:border-slate-700">Atouts & Nouvelles Dynamiques</h4>
          <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2"><TreePine className="w-4 h-4 text-emerald-500" /> Cadre de vie (Nature, calme)</li>
            <li className="flex items-center gap-2">👨‍🌾 Agriculture de Qualité (AOC)</li>
            <li className="flex items-center gap-2">🎒 Tourisme Vert / Neige (Parcs Naturels)</li>
            <li className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300">🏡 Arrivée des « Néo-Ruraux »</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
          <h4 className="font-bold text-red-700 dark:text-red-400 mb-2 border-b pb-1 dark:border-slate-700">Contraintes & Vulnérabilités</h4>
          <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2"><Mountain className="w-4 h-4 text-slate-400" /> Relief, Climat (Pentes, Neige)</li>
            <li className="flex items-center gap-2"><Car className="w-4 h-4 text-red-500" /> Enclavement (Transports limités)</li>
            <li className="flex items-center gap-2">🏥 « Déserts Médicaux »</li>
            <li className="flex items-center gap-2"><WifiOff className="w-4 h-4 text-red-500" /> Fracture Numérique (Zones blanches)</li>
          </ul>
        </div>
      </div>

      <div className="relative aspect-video w-full p-4 overflow-hidden bg-white dark:bg-slate-900 border-t border-green-200 dark:border-slate-800 flex justify-center py-6">
        
        <svg viewBox="0 0 400 400" className="w-[80%] max-w-[400px] h-full" style={{ maxHeight: '300px' }}>
          {/* Base shape abstracting France map */}
          <path d="M 200 20 L 340 100 L 340 280 L 200 380 L 60 280 L 60 100 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" className="dark:fill-slate-800 dark:stroke-slate-600" />
          
          {/* Diagonale du vide */}
          <path d="M 260 50 L 300 80 L 150 320 L 100 280 Z" fill="#dcfce7" className="dark:fill-emerald-900/40" />
          <text x="180" y="200" transform="rotate(-55 180,200)" textAnchor="middle" fill="#166534" className="dark:fill-emerald-400" fontSize="16" fontWeight="bold" opacity="0.8">
            « Diagonale du vide »
          </text>
          <text x="180" y="215" transform="rotate(-55 180,215)" textAnchor="middle" fill="#166534" className="dark:fill-emerald-500" fontSize="10" opacity="0.7">
            (Ardennes → Pyrénées)
          </text>

          {/* Massifs montagneux */}
          {/* Alpes */}
          <path d="M 300 250 Q 320 200 340 230 Q 330 280 300 250 Z" fill="#e2e8f0" stroke="#94a3b8" className="dark:fill-slate-700 dark:stroke-slate-500" />
          <text x="325" y="245" fontSize="10" fill="#475569" className="dark:fill-slate-300" fontWeight="bold">Alpes</text>
          
          {/* Massif Central */}
          <path d="M 220 250 Q 250 210 270 250 Q 250 280 220 250 Z" fill="#e2e8f0" stroke="#94a3b8" className="dark:fill-slate-700 dark:stroke-slate-500" />
          <text x="245" y="250" fontSize="10" fill="#475569" className="dark:fill-slate-300" fontWeight="bold">Massif Central</text>

          {/* Pyrénées */}
          <path d="M 120 330 Q 160 300 200 330 Q 160 350 120 330 Z" fill="#e2e8f0" stroke="#94a3b8" className="dark:fill-slate-700 dark:stroke-slate-500" />
          <text x="160" y="335" fontSize="10" fill="#475569" className="dark:fill-slate-300" fontWeight="bold">Pyrénées</text>

          {/* Néo-ruraux markers and animation */}
          {/* Paris to province arrow */}
          <circle cx="160" cy="120" r="8" fill="#ef4444" />
          <text x="140" y="125" fontSize="14" fill="#ef4444" fontWeight="bold">Paris</text>
          
          <motion.path 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            d="M 160 130 Q 180 180 240 230" fill="none" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow-neo)" strokeDasharray="5,5" 
          />
          
          <circle cx="280" cy="300" r="6" fill="#ef4444" />
          <text x="290" y="305" fontSize="12" fill="#ef4444" fontWeight="bold">Marseille</text>
          <motion.path 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            d="M 270 290 Q 230 270 190 280" fill="none" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow-neo)" strokeDasharray="5,5" 
          />

          <defs>
            <marker id="arrow-neo" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
            </marker>
          </defs>

        </svg>
      </div>
      
      <div className="p-3 text-center text-xs text-slate-500 dark:text-slate-400 border-t border-green-200 dark:border-slate-800">
        Les flèches en pointillés représentent l'installation des <strong>« néo-ruraux »</strong> (citadins allant vivre à la campagne, en recherche d'une meilleure qualité de vie).
      </div>
    </div>
  );
};
