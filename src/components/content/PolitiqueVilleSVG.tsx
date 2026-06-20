import React from 'react';
import { motion } from 'motion/react';

export const PolitiqueVilleSVG: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto my-8 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
      <h3 className="text-center font-bold text-lg mb-4 text-slate-800 dark:text-slate-200">
        La politique de la ville : réduire les inégalités
      </h3>
      <div className="relative w-full aspect-video">
        <svg viewBox="0 0 800 450" className="w-full h-full font-sans">
          <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="gradCenter" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.9"/>
            </linearGradient>
            <linearGradient id="gradBanlieue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="#c2410c" stopOpacity="0.7"/>
            </linearGradient>
            <linearGradient id="gradPrioritaire" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.6"/>
            </linearGradient>
            <filter id="shadow1" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.2" />
            </filter>
            <marker id="arrowBlue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
            </marker>
            <marker id="arrowOrange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#f97316" />
            </marker>
          </defs>

          <rect x="0" y="0" width="800" height="450" fill="url(#bgGrad)" className="dark:fill-slate-900" rx="8" />

          {/* City background silhouette */}
          <path d="M 0 380 Q 100 360 200 380 T 400 370 T 600 380 T 800 370 L 800 450 L 0 450 Z" fill="#cbd5e1" className="dark:fill-slate-800" />

          {/* Centre-ville rénové */}
          <g filter="url(#shadow1)">
            <rect x="280" y="160" width="240" height="160" rx="8" fill="url(#gradCenter)" />
            <rect x="310" y="180" width="40" height="60" rx="4" fill="#93c5fd" />
            <rect x="360" y="190" width="30" height="50" rx="4" fill="#bfdbfe" />
            <circle cx="400" cy="210" r="12" fill="#fbbf24" /> {/* Horloge */}
            <rect x="430" y="170" width="50" height="70" rx="4" fill="#60a5fa" />
          </g>
          <text x="400" y="350" textAnchor="middle" fill="#1e3a8a" className="dark:text-blue-300" fontWeight="bold" fontSize="14">Centre-ville rénové</text>
          <text x="400" y="365" textAnchor="middle" fill="#1e3a8a" className="dark:text-blue-300" fontSize="11">(Réhabilitation, piétonisation, services)</text>

          {/* Banlieue grands ensembles */}
          <g>
            <rect x="30" y="200" width="100" height="120" rx="4" fill="url(#gradBanlieue)" />
            <rect x="145" y="220" width="80" height="100" rx="4" fill="url(#gradBanlieue)" />
            <rect x="620" y="210" width="90" height="110" rx="4" fill="url(#gradBanlieue)" />
            <rect x="720" y="230" width="60" height="90" rx="4" fill="url(#gradBanlieue)" />
            {/* Fenêtres */}
            {[45, 60, 75, 90].map(x => [220, 235, 250, 265].map(y => (
              <rect key={`w1_${x}_${y}`} x={x} y={y} width="8" height="8" fill="#fed7aa" rx="1" />
            )))}
            {[160, 175, 190].map(x => [235, 250, 265].map(y => (
              <rect key={`w2_${x}_${y}`} x={x} y={y} width="8" height="8" fill="#fed7aa" rx="1" />
            )))}
            {[635, 650, 665, 680].map(x => [225, 240, 255, 270].map(y => (
              <rect key={`w3_${x}_${y}`} x={x} y={y} width="8" height="8" fill="#fed7aa" rx="1" />
            )))}
          </g>
          <text x="180" y="370" textAnchor="middle" fill="#9a3412" className="dark:text-orange-300" fontWeight="bold" fontSize="13">Banlieues</text>
          <text x="180" y="385" textAnchor="middle" fill="#9a3412" className="dark:text-orange-300" fontSize="11">(Grands ensembles, barres)</text>

          {/* Quartier prioritaire ANRU */}
          <motion.g
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <rect x="560" y="100" width="180" height="80" rx="6" fill="url(#gradPrioritaire)" stroke="#dc2626" strokeWidth="2" strokeDasharray="6 3" />
            <text x="650" y="130" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13">Quartier Prioritaire</text>
            <text x="650" y="150" textAnchor="middle" fill="#fecaca" fontSize="10">Rénovation urbaine (ANRU)</text>
            <text x="650" y="165" textAnchor="middle" fill="#fecaca" fontSize="10">Logements sociaux + mixité</text>
            <rect x="580" y="130" width="20" height="20" rx="3" fill="#fbbf24" />
            <rect x="680" y="125" width="20" height="30" rx="3" fill="#fbbf24" />
          </motion.g>

          {/* Connection arrows */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M 370 200 Q 370 150 560 140"
            stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="5 3"
            markerEnd="url(#arrowBlue)"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            d="M 130 250 Q 200 150 570 145"
            stroke="#f97316" strokeWidth="2" fill="none" strokeDasharray="5 3"
            markerEnd="url(#arrowOrange)"
          />

          {/* Legend */}
          <rect x="20" y="400" width="280" height="40" fill="white" className="dark:fill-slate-800" rx="4" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="28" y="410" width="12" height="12" rx="2" fill="#3b82f6" />
          <text x="44" y="421" fontSize="11" fill="#475569" className="dark:fill-slate-400">Centre rénové — Réhabilitation, commerces</text>
          <polygon points="200,412 212,416 200,420" fill="#3b82f6" />

          <rect x="28" y="425" width="12" height="12" rx="2" fill="#f97316" />
          <text x="44" y="436" fontSize="11" fill="#475569" className="dark:fill-slate-400">Banlieue — Grands ensembles</text>
          <rect x="200" y="425" width="12" height="12" rx="2" fill="#ef4444" stroke="#dc2626" strokeWidth="1" strokeDasharray="2 1" />
          <text x="216" y="436" fontSize="11" fill="#475569" className="dark:fill-slate-400">Quartier prioritaire ANRU</text>
        </svg>
      </div>
      <p className="mt-4 text-sm text-center text-slate-600 dark:text-slate-400 italic">
        La politique de la ville agit sur les trois couronnes : rénovation des centres, réhabilitation des banlieues, et transformation des quartiers prioritaires (ANRU).
      </p>
    </div>
  );
};
