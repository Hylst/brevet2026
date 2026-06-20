import React from 'react';
import { motion } from 'motion/react';

export const AnalysePieuvreSVG: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center my-6">
      <svg viewBox="0 0 800 500" className="w-full max-w-3xl h-auto font-sans" role="img" aria-label="Le diagramme pieuvre et la bête à cornes">
        <rect width="800" height="500" rx="15" fill="var(--color-surface)" className="stroke-border" strokeWidth="2" />
        
        <text x="400" y="40" textAnchor="middle" className="fill-foreground font-bold text-2xl">L'Analyse Fonctionnelle</text>
        
        {/* Bête à cornes */}
        <g transform="translate(150, 100)">
          <text x="100" y="-10" textAnchor="middle" className="fill-primary font-bold">1. Le Besoin (Bête à cornes)</text>
          
          {/* Bulles haut */}
          <motion.ellipse cx="0" cy="40" rx="60" ry="30" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} />
          <text x="0" y="35" textAnchor="middle" className="fill-foreground text-xs font-semibold">À qui rend-il</text>
          <text x="0" y="50" textAnchor="middle" className="fill-foreground text-xs font-semibold">service ?</text>
          <text x="0" y="10" textAnchor="middle" className="fill-muted text-xs italic">A l'utilisateur</text>
          
          <motion.ellipse cx="200" cy="40" rx="60" ry="30" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} />
          <text x="200" y="35" textAnchor="middle" className="fill-foreground text-xs font-semibold">Sur quoi</text>
          <text x="200" y="50" textAnchor="middle" className="fill-foreground text-xs font-semibold">agit-il ?</text>
          <text x="200" y="10" textAnchor="middle" className="fill-muted text-xs italic">Sujet d'action</text>
          
          {/* Produit */}
          <motion.rect x="50" y="100" width="100" height="40" rx="10" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <text x="100" y="125" textAnchor="middle" className="fill-foreground font-bold font-sm">PRODUIT</text>
          
          {/* Lignes */}
          <path d="M 30 70 L 80 100" stroke="#94a3b8" strokeWidth="2" />
          <path d="M 170 70 L 120 100" stroke="#94a3b8" strokeWidth="2" />
          <path d="M 100 140 L 100 180" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          
          {/* Bulle bas */}
          <motion.ellipse cx="100" cy="210" rx="80" ry="30" fill="#a7f3d0" stroke="#059669" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
          <text x="100" y="205" textAnchor="middle" className="fill-foreground text-xs font-semibold">Dans quel but ?</text>
          <text x="100" y="225" textAnchor="middle" className="fill-muted text-xs italic">(Le besoin)</text>
        </g>
        
        {/* Diagramme Pieuvre */}
        <g transform="translate(550, 250)">
          <text x="0" y="-120" textAnchor="middle" className="fill-primary font-bold">2. Le Diagramme Pieuvre</text>
          
          {/* Produit central */}
          <motion.ellipse cx="0" cy="0" rx="50" ry="30" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }} />
          <text x="0" y="5" textAnchor="middle" className="fill-foreground font-bold text-sm">PRODUIT</text>
          
          {/* Eléments extérieurs */}
          <motion.circle cx="-120" cy="-60" r="30" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
          <text x="-120" y="-55" textAnchor="middle" className="fill-foreground text-xs">Élément 1</text>
          
          <motion.circle cx="120" cy="-40" r="30" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} />
          <text x="120" y="-35" textAnchor="middle" className="fill-foreground text-xs">Élément 2</text>
          
          <motion.circle cx="0" cy="100" r="30" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} />
          <text x="0" y="105" textAnchor="middle" className="fill-foreground text-xs">Élément 3</text>
          
          <motion.circle cx="-100" cy="80" r="30" fill="#e2e8f0" stroke="#475569" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} />
          <text x="-100" y="85" textAnchor="middle" className="fill-foreground text-xs">Élément 4</text>
          
          {/* Fonctions Principales (traversent) */}
          <path d="M -90 -60 Q 0 -60 0 0 Q 0 -40 90 -40" fill="none" stroke="#ef4444" strokeWidth="3" />
          <rect x="-30" y="-45" width="25" height="15" rx="5" fill="white" stroke="#ef4444" strokeWidth="1" />
          <text x="-17" y="-35" textAnchor="middle" className="fill-red-500 font-bold text-[10px]">FP1</text>
          
          <text x="-40" y="-60" textAnchor="middle" className="fill-red-500 text-[10px]">Relie 2 élts</text>
          
          {/* Fonctions Contraintes (vers le produit) */}
          <path d="M 0 70 L 0 30" stroke="#059669" strokeWidth="2" />
          <rect x="-12" y="45" width="25" height="15" rx="5" fill="white" stroke="#059669" strokeWidth="1" />
          <text x="0" y="55" textAnchor="middle" className="fill-green-600 font-bold text-[10px]">FC1</text>
          
          <path d="M -80 60 L -30 20" stroke="#059669" strokeWidth="2" />
          <rect x="-65" y="30" width="25" height="15" rx="5" fill="white" stroke="#059669" strokeWidth="1" transform="rotate(-38, -52, 37)" />
          <text x="-52" y="40" textAnchor="middle" className="fill-green-600 font-bold text-[10px]" transform="rotate(-38, -52, 37)">FC2</text>
          
          {/* Légende */}
          <g transform="translate(-80, 160)">
             <line x1="0" y1="0" x2="30" y2="0" stroke="#ef4444" strokeWidth="3" />
             <text x="40" y="4" className="fill-muted text-xs">Fonction Principale (FP)</text>
             
             <line x1="0" y1="20" x2="30" y2="20" stroke="#059669" strokeWidth="3" />
             <text x="40" y="24" className="fill-muted text-xs">Fonction Contrainte (FC)</text>
          </g>
        </g>
        
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};
