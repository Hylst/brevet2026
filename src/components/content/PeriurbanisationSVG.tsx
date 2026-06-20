import React from 'react';
import { motion } from 'motion/react';

export const PeriurbanisationSVG: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto my-8 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
      <h3 className="text-center font-bold text-lg mb-4 text-slate-800 dark:text-slate-200">
        Le phénomène de la Périurbanisation
      </h3>
      <div className="relative w-full aspect-video">
        <svg viewBox="0 0 800 450" className="w-full h-full font-sans">
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
            </marker>
            <linearGradient id="cityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.8"/>
            </linearGradient>
          </defs>

          {/* Rural area (background) */}
          <rect x="0" y="0" width="800" height="450" fill="#ecfdf5" className="dark:fill-slate-800" rx="8" />
          <path d="M 0 350 Q 200 300 400 350 T 800 350 L 800 450 L 0 450 Z" fill="#d1fae5" className="dark:fill-slate-700" />
          
          {/* Centre ville */}
          <circle cx="400" cy="225" r="50" fill="url(#cityGradient)" />
          <text x="400" y="225" textAnchor="middle" dominantBaseline="middle" fill="white" fontWeight="bold" fontSize="14">Centre</text>
          <text x="400" y="240" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10">Ville</text>

          {/* Banlieue */}
          <circle cx="400" cy="225" r="120" fill="none" stroke="#f97316" strokeWidth="4" strokeDasharray="8 4" />
          <text x="400" y="125" textAnchor="middle" fill="#ea580c" className="dark:text-orange-400" fontWeight="bold" fontSize="14">Banlieue</text>
          <path d="M 320 225 A 80 80 0 1 1 480 225" fill="none" />

          {/* Couronne Périurbaine */}
          <circle cx="400" cy="225" r="220" fill="none" stroke="#22c55e" strokeWidth="4" strokeDasharray="12 6" />
          <text x="400" y="25" textAnchor="middle" fill="#166534" className="dark:text-green-400" fontWeight="bold" fontSize="14">Couronne Périurbaine</text>
          
          {/* Maisons individuelles dans la couronne (Néoruraux/Périurbains) */}
          <g fill="#10b981" className="dark:fill-emerald-400">
            <rect x="220" y="100" width="16" height="16" />
            <polygon points="216,100 238,100 228,85" />
            
            <rect x="550" y="150" width="16" height="16" />
            <polygon points="546,150 568,150 558,135" />
            
            <rect x="250" y="350" width="16" height="16" />
            <polygon points="246,350 268,350 258,335" />

            <rect x="500" y="380" width="16" height="16" />
            <polygon points="496,380 518,380 508,365" />
          </g>

          {/* Migrations pendulaires arrows */}
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            d="M 235 110 L 370 200" 
            stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" fill="none" 
          />
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
            d="M 550 160 L 430 210" 
            stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" fill="none" 
          />
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
            d="M 265 350 L 380 250" 
            stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" fill="none" 
          />

          {/* Legend */}
          <rect x="20" y="340" width="180" height="90" fill="white" className="dark:fill-slate-800" rx="4" stroke="#cbd5e1" strokeWidth="1" />
          <text x="30" y="360" fontSize="12" fill="#334155" className="dark:fill-slate-300" fontWeight="bold">Légende</text>
          
          <line x1="30" y1="380" x2="60" y2="380" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="70" y="384" fontSize="11" fill="#475569" className="dark:fill-slate-400">Migrations pendulaires</text>
          
          <circle cx="45" cy="405" r="6" fill="#ef4444" />
          <text x="70" y="409" fontSize="11" fill="#475569" className="dark:fill-slate-400">Pôle Urbain (Densité forte)</text>
          
          <rect x="40" y="420" width="10" height="10" fill="#22c55e" />
          <text x="70" y="429" fontSize="11" fill="#475569" className="dark:fill-slate-400">Habitat pavillonnaire</text>

        </svg>
      </div>
      <p className="mt-4 text-sm text-center text-slate-600 dark:text-slate-400 italic">
        Les flèches jaunes représentent les migrations pendulaires (trajets domicile-travail) qui augmentent avec l'étalement urbain.
      </p>
    </div>
  );
};
