import React from 'react';
import { motion } from 'motion/react';

export const CnrSecuriteSocialeSVG: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-4 bg-slate-50 dark:bg-slate-900 rounded-xl my-6">
      <svg viewBox="0 0 500 300" className="w-full max-w-2xl h-auto font-sans" role="img" aria-label="Les piliers de la Sécurité Sociale de 1945">
        <defs>
          <linearGradient id="cnrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.15" />
          </filter>
        </defs>

        <rect x="10" y="10" width="480" height="280" rx="16" fill="white" filter="url(#shadow)" className="dark:fill-slate-800" />
        
        {/* Foundation */}
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          d="M 50 250 L 450 250 L 450 270 L 50 270 Z" 
          fill="url(#cnrGrad)" 
        />
        <text x="250" y="265" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">L'ÉTAT-PROVIDENCE : LA SÉCURITÉ SOCIALE (1945)</text>

        {/* Pillars */}
        <motion.g initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
          {/* Maladie */}
          <rect x="70" y="100" width="100" height="150" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" rx="4" className="dark:fill-slate-700" />
          <circle cx="120" cy="140" r="20" fill="#3b82f6" />
          <path d="M 120 130 L 120 150 M 110 140 L 130 140" stroke="white" strokeWidth="4" />
          <text x="120" y="180" textAnchor="middle" fill="#1e3a8a" fontSize="12" fontWeight="bold" className="dark:fill-white">ASSURANCE</text>
          <text x="120" y="195" textAnchor="middle" fill="#1e3a8a" fontSize="12" fontWeight="bold" className="dark:fill-white">MALADIE</text>
          
          {/* Famille */}
          <rect x="200" y="100" width="100" height="150" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" rx="4" className="dark:fill-slate-700" />
          <circle cx="250" cy="140" r="20" fill="#0d9488" />
          <circle cx="240" cy="136" r="6" fill="white" />
          <circle cx="260" cy="142" r="4" fill="white" />
          <path d="M 235 148 Q 240 142 245 148" stroke="white" strokeWidth="2" fill="none" />
          <path d="M 255 150 Q 260 145 265 150" stroke="white" strokeWidth="2" fill="none" />
          <text x="250" y="180" textAnchor="middle" fill="#0f766e" fontSize="12" fontWeight="bold" className="dark:fill-white">ALLOCATIONS</text>
          <text x="250" y="195" textAnchor="middle" fill="#0f766e" fontSize="12" fontWeight="bold" className="dark:fill-white">FAMILIALES</text>

          {/* Retraite */}
          <rect x="330" y="100" width="100" height="150" fill="#fff7ed" stroke="#ea580c" strokeWidth="2" rx="4" className="dark:fill-slate-700" />
          <circle cx="380" cy="140" r="20" fill="#ea580c" />
          <path d="M 370 140 Q 380 130 390 150" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="370" cy="135" r="3" fill="white" />
          <text x="380" y="180" textAnchor="middle" fill="#c2410c" fontSize="12" fontWeight="bold" className="dark:fill-white">ASSURANCE</text>
          <text x="380" y="195" textAnchor="middle" fill="#c2410c" fontSize="12" fontWeight="bold" className="dark:fill-white">VIEILLESSE</text>
        </motion.g>

        {/* Top Roof / CNR */}
        <motion.path 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          d="M 30 100 L 250 30 L 470 100 Z" 
          fill="#cbd5e1" 
          stroke="#94a3b8"
          strokeWidth="2"
          className="dark:fill-slate-600 dark:stroke-slate-500"
        />
        <text x="250" y="80" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="bold" className="dark:fill-white">PROGRAMME DU C.N.R. (1944)</text>
      </svg>
    </div>
  );
};
