import React from 'react';
import { motion } from 'motion/react';

export const DesignCycleSVG: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center my-6">
      <svg viewBox="0 0 800 400" className="w-full max-w-3xl h-auto font-sans" role="img" aria-label="La démarche de projet">
        <rect width="800" height="400" rx="15" fill="var(--color-surface)" className="stroke-border" strokeWidth="2" />
        
        <text x="400" y="40" textAnchor="middle" className="fill-foreground font-bold text-2xl">La Démarche de Projet</text>
        
        {/* Etapes */}
        <g transform="translate(50, 100)">
          {/* 1. Besoin */}
          <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <rect x="0" y="0" width="120" height="80" rx="10" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
            <text x="60" y="35" textAnchor="middle" className="fill-foreground font-bold font-sm">1. Besoin</text>
            <text x="60" y="55" textAnchor="middle" className="fill-muted font-sm italic">L'idée</text>
          </motion.g>

          <path d="M 130 40 L 160 40" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* 2. Solutions */}
          <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <rect x="170" y="0" width="120" height="80" rx="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
            <text x="230" y="35" textAnchor="middle" className="fill-foreground font-bold font-sm">2. Solutions</text>
            <text x="230" y="55" textAnchor="middle" className="fill-muted font-sm italic">Recherche</text>
          </motion.g>

          <path d="M 300 40 L 330 40" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* 3. Prototype */}
          <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <rect x="340" y="0" width="120" height="80" rx="10" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" />
            <text x="400" y="35" textAnchor="middle" className="fill-foreground font-bold font-sm">3. Prototypage</text>
            <text x="400" y="55" textAnchor="middle" className="fill-muted font-sm italic">Essai 3D</text>
          </motion.g>

          <path d="M 470 40 L 500 40" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* 4. Tests */}
          <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <rect x="510" y="0" width="120" height="80" rx="10" fill="#a7f3d0" stroke="#059669" strokeWidth="2" />
            <text x="570" y="35" textAnchor="middle" className="fill-foreground font-bold font-sm">4. Tests</text>
            <text x="570" y="55" textAnchor="middle" className="fill-muted font-sm italic">Validation</text>
          </motion.g>

          {/* Boucle retour si test échoue */}
          <path d="M 570 90 Q 570 150 400 150 Q 230 150 230 90" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowReturn)" />
          <text x="400" y="140" textAnchor="middle" className="fill-red-500 font-sm">Si échec</text>

          <path d="M 640 40 L 670 40" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* 5. Production */}
          <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
            <circle cx="710" cy="40" r="40" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
            <text x="710" y="35" textAnchor="middle" className="fill-foreground font-bold font-sm">5.</text>
            <text x="710" y="55" textAnchor="middle" className="fill-foreground font-bold font-sm">Production</text>
          </motion.g>
        </g>
        
        {/* Définition markers (flèches) */}
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
          </marker>
          <marker id="arrowReturn" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
          </marker>
        </defs>

        {/* Aspects du design bas */}
        <g transform="translate(150, 270)">
          <text x="250" y="0" textAnchor="middle" className="fill-foreground font-bold text-xl">L'intervention du Designer</text>
          
          <rect x="0" y="30" width="150" height="50" rx="5" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" />
          <text x="75" y="60" textAnchor="middle" className="fill-foreground font-semibold">Ergonomie</text>
          
          <rect x="175" y="30" width="150" height="50" rx="5" fill="rgba(250, 204, 21, 0.2)" stroke="#facc15" />
          <text x="250" y="60" textAnchor="middle" className="fill-foreground font-semibold">Esthétique</text>
          
          <rect x="350" y="30" width="150" height="50" rx="5" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" />
          <text x="425" y="60" textAnchor="middle" className="fill-foreground font-semibold">Éco-conception</text>
        </g>
      </svg>
    </div>
  );
};
