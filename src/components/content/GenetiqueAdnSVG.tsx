import React from 'react';
import { motion } from 'motion/react';

export const GenetiqueAdnSVG: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center my-6">
      <svg viewBox="0 0 800 500" className="w-full max-w-3xl h-auto font-sans" role="img" aria-label="L'ADN, les chromosomes et la cellule">
        {/* Fond */}
        <rect width="800" height="500" rx="20" fill="var(--color-surface)" className="stroke-border" strokeWidth="2" />
        
        {/* Titre */}
        <text x="400" y="50" textAnchor="middle" className="fill-foreground font-bold text-2xl">De la Cellule à l'ADN</text>
        
        {/* Cellule */}
        <motion.g initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <circle cx="150" cy="250" r="100" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="4" />
          <circle cx="150" cy="250" r="40" fill="#bae6fd" stroke="#0284c7" strokeWidth="3" />
          <text x="150" y="380" textAnchor="middle" className="fill-foreground font-semibold text-lg">La Cellule</text>
          <text x="150" y="255" textAnchor="middle" className="fill-primary font-bold text-sm">Noyau</text>
          <path d="M 180 250 Q 250 250 300 250" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" />
        </motion.g>

        {/* Chromosome */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
          {/* Forme X du chromosome */}
          <path d="M 370 180 C 400 180 390 240 400 250 C 390 260 400 320 370 320 C 380 290 390 260 380 250 C 390 240 380 210 370 180 Z" fill="#c084fc" />
          <path d="M 430 180 C 400 180 410 240 400 250 C 410 260 400 320 430 320 C 420 290 410 260 420 250 C 410 240 420 210 430 180 Z" fill="#a855f7" />
          {/* Centromère */}
          <circle cx="400" cy="250" r="8" fill="#facc15" />
          
          <text x="400" y="380" textAnchor="middle" className="fill-foreground font-semibold text-lg">Le Chromosome</text>
          <text x="400" y="150" textAnchor="middle" className="fill-muted text-sm italic">Composé de 2 chromatides</text>
          
          <path d="M 430 250 Q 500 250 550 250" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" />
        </motion.g>

        {/* ADN en double hélice */}
        <motion.g initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.8 }}>
          {/* Brins */}
          <path d="M 580 180 Q 620 215 580 250 T 580 320" fill="none" stroke="#ef4444" strokeWidth="4" />
          <path d="M 620 180 Q 580 215 620 250 T 620 320" fill="none" stroke="#3b82f6" strokeWidth="4" />
          
          {/* Bases (barreaux) */}
          <line x1="586" y1="190" x2="614" y2="190" stroke="#10b981" strokeWidth="3" />
          <line x1="595" y1="205" x2="605" y2="205" stroke="#f59e0b" strokeWidth="3" />
          <line x1="600" y1="215" x2="600" y2="215" stroke="#10b981" strokeWidth="3" />
          <line x1="595" y1="295" x2="605" y2="295" stroke="#f59e0b" strokeWidth="3" />
          <line x1="586" y1="310" x2="614" y2="310" stroke="#8b5cf6" strokeWidth="3" />
          
          {/* Gène (highlight) */}
          <rect x="570" y="180" width="60" height="40" fill="rgba(250, 204, 21, 0.3)" rx="5" />
          <path d="M 640 200 L 680 200" stroke="#facc15" strokeWidth="2" strokeDasharray="2,2" />
          <text x="690" y="205" className="fill-foreground font-bold font-mono text-sm">Un Gène</text>
          
          <text x="600" y="380" textAnchor="middle" className="fill-foreground font-semibold text-lg">L'ADN</text>
          <text x="600" y="405" textAnchor="middle" className="fill-muted text-sm italic">Une double hélice</text>
        </motion.g>
        
        {/* Flèches de zooming */}
        <motion.path d="M 280 430 L 320 430 M 310 420 L 320 430 L 310 440" fill="none" stroke="#94a3b8" strokeWidth="2" />
        <motion.path d="M 480 430 L 520 430 M 510 420 L 520 430 L 510 440" fill="none" stroke="#94a3b8" strokeWidth="2" />
        
        <text x="300" y="460" textAnchor="middle" className="fill-muted text-xs">Zoom</text>
        <text x="500" y="460" textAnchor="middle" className="fill-muted text-xs">Déroulement</text>
      </svg>
    </div>
  );
};
