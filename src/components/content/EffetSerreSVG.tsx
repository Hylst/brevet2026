import React from 'react';
import { motion } from 'motion/react';

export const EffetSerreSVG: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center my-6">
      <svg viewBox="0 0 800 500" className="w-full max-w-3xl h-auto font-sans" role="img" aria-label="L'effet de serre naturel et additionnel">
        <rect width="800" height="500" rx="15" fill="#bae6fd" className="stroke-border" strokeWidth="2" />
        
        {/* Soleil */}
        <motion.circle cx="100" cy="100" r="50" fill="#facc15" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }} />
        <motion.circle cx="100" cy="100" r="60" fill="rgba(250, 204, 21, 0.3)" initial={{ scale: 1 }} animate={{ scale: 1.2 }} transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }} />
        
        <text x="100" y="105" textAnchor="middle" className="fill-yellow-700 font-bold">Soleil</text>
        
        {/* Atmosphère (Effet de Serre) */}
        <path d="M 0 250 Q 400 230 800 250 L 800 500 L 0 500 Z" fill="rgba(255, 255, 255, 0.4)" stroke="#cbd5e1" strokeDasharray="10,5" strokeWidth="3" />
        <text x="650" y="220" textAnchor="middle" className="fill-slate-600 font-bold">Atmosphère (Gaz à effet de serre)</text>
        
        {/* Terre */}
        <path d="M 0 400 Q 400 350 800 400 L 800 500 L 0 500 Z" fill="#4ade80" />
        <text x="400" y="450" textAnchor="middle" className="fill-green-900 font-bold text-xl">Surface de la Terre</text>
        
        {/* Usines */}
        <rect x="500" y="350" width="40" height="40" fill="#94a3b8" />
        <polygon points="500,350 515,330 515,350" fill="#64748b" />
        <polygon points="515,350 530,330 530,350" fill="#475569" />
        <rect x="540" y="340" width="30" height="50" fill="#94a3b8" />
        <rect x="545" y="300" width="10" height="40" fill="#cbd5e1" />
        
        <motion.circle cx="550" cy="270" r="15" fill="rgba(100, 116, 139, 0.5)" initial={{ y: 0, opacity: 1 }} animate={{ y: -50, opacity: 0 }} transition={{ repeat: Infinity, duration: 2 }} />
        <motion.circle cx="555" cy="280" r="10" fill="rgba(100, 116, 139, 0.5)" initial={{ y: 0, opacity: 1 }} animate={{ y: -50, opacity: 0 }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
        
        <text x="540" y="470" textAnchor="middle" className="fill-green-900 font-sm italic text-xs">Émissions Humaines</text>
        
        {/* Rayons solaires (entrants) */}
        <motion.path d="M 140 140 L 350 350" stroke="#facc15" strokeWidth="4" markerEnd="url(#arrow-yellow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.path d="M 160 110 L 450 400" stroke="#facc15" strokeWidth="4" markerEnd="url(#arrow-yellow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }} />
        <text x="250" y="240" textAnchor="middle" className="fill-yellow-700 font-bold bg-white/50 text-[10px]" transform="rotate(45, 250, 240)">Rayonnement Solaire Entrant</text>
        
        {/* Rayons infrarouges (réfléchis / retenus) */}
        <motion.path d="M 370 350 L 450 250" stroke="#ef4444" strokeWidth="4" markerEnd="url(#arrow-red)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.5, repeat: Infinity }} />
        <text x="440" y="290" textAnchor="middle" className="fill-red-700 font-bold text-[10px]" transform="rotate(-50, 440, 290)">Infrarouges (Chaleur) réémis</text>
        
        {/* Rayon qui rebondit sur l'atmosphère (effet de serre) */}
        <motion.path d="M 450 250 Q 480 230 510 270 L 530 310" stroke="#ef4444" strokeWidth="4" strokeDasharray="5,5" markerEnd="url(#arrow-red)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 3, repeat: Infinity }} />
        <text x="560" y="240" textAnchor="middle" className="fill-red-700 font-bold text-[10px]">Chaleur retenue !</text>
        
        {/* Rayon qui s'échappe */}
        <motion.path d="M 350 380 L 250 180" stroke="#ef4444" strokeWidth="2" strokeDasharray="2,2" markerEnd="url(#arrow-red-small)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 2, repeat: Infinity }} />
        <text x="260" y="270" textAnchor="middle" className="fill-red-700 font-sm text-[8px]" transform="rotate(-60, 260, 270)">Une petite partie s'échappe</text>
        
        {/* Title */}
        <text x="400" y="40" textAnchor="middle" className="fill-slate-800 font-bold text-2xl">L'Effet de Serre</text>
        
        <defs>
          <marker id="arrow-yellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#facc15" />
          </marker>
          <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
          </marker>
          <marker id="arrow-red-small" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};
