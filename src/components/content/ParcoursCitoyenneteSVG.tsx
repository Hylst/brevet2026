import React from 'react';
import { motion } from 'motion/react';

export const ParcoursCitoyenneteSVG: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-4 bg-white dark:bg-slate-900 rounded-xl my-6 border border-slate-200 dark:border-slate-800">
      <svg viewBox="0 0 600 250" className="w-full max-w-3xl h-auto font-sans" role="img" aria-label="Le Parcours de Citoyenneté">
        
        {/* Main Line */}
        <motion.line 
          x1="50" y1="125" x2="550" y2="125" 
          stroke="#94a3b8" strokeWidth="4" 
          initial={{ pathLength: 0 }} 
          animate={{ pathLength: 1 }} 
          transition={{ duration: 1.5 }} 
        />
        
        {/* Arrows for timeline */}
        <motion.polygon points="540,115 560,125 540,135" fill="#94a3b8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} />

        {/* Step 1: Enseignement */}
        <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
          <circle cx="150" cy="125" r="24" fill="#3b82f6" stroke="white" strokeWidth="4" />
          <text x="150" y="130" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">1</text>
          
          <rect x="90" y="30" width="120" height="50" rx="8" fill="#eff6ff" stroke="#bfdbfe" className="dark:fill-slate-800 dark:stroke-slate-600" />
          <text x="150" y="50" textAnchor="middle" fill="#1e3a8a" fontSize="12" fontWeight="bold" className="dark:fill-blue-300">ENSEIGNEMENT</text>
          <text x="150" y="65" textAnchor="middle" fill="#475569" fontSize="10" className="dark:fill-slate-400">Au collège (EMC)</text>
          
          <path d="M 150 80 L 150 100" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4" />
        </motion.g>

        {/* Step 2: Recensement */}
        <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
          <circle cx="300" cy="125" r="24" fill="#f59e0b" stroke="white" strokeWidth="4" />
          <text x="300" y="130" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">2</text>
          
          <rect x="240" y="160" width="120" height="60" rx="8" fill="#fffbeb" stroke="#fde68a" className="dark:fill-slate-800 dark:stroke-slate-600" />
          <text x="300" y="180" textAnchor="middle" fill="#b45309" fontSize="12" fontWeight="bold" className="dark:fill-amber-300">RECENSEMENT</text>
          <text x="300" y="195" textAnchor="middle" fill="#475569" fontSize="10" className="dark:fill-slate-400">À 16 ans</text>
          <text x="300" y="208" textAnchor="middle" fill="#475569" fontSize="10" className="dark:fill-slate-400">En mairie / internet</text>
          
          <path d="M 300 150 L 300 160" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4" />
        </motion.g>

        {/* Step 3: JDC */}
        <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.5 }}>
          <circle cx="450" cy="125" r="24" fill="#ef4444" stroke="white" strokeWidth="4" />
          <text x="450" y="130" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">3</text>
          
          <rect x="390" y="30" width="120" height="60" rx="8" fill="#fef2f2" stroke="#fecaca" className="dark:fill-slate-800 dark:stroke-slate-600" />
          <text x="450" y="50" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold" className="dark:fill-red-300">LA JDC</text>
          <text x="450" y="65" textAnchor="middle" fill="#475569" fontSize="10" className="dark:fill-slate-400">Entre 16 et 18 ans</text>
          <text x="450" y="78" textAnchor="middle" fill="#475569" fontSize="10" className="dark:fill-slate-400">Journée Défense...</text>
          
          <path d="M 450 90 L 450 100" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4" />
        </motion.g>

      </svg>
    </div>
  );
};
