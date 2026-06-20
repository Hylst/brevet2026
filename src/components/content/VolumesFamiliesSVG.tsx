import React, { useState } from 'react';
import { motion } from 'motion/react';
import clsx from 'clsx';

type VolumeType = 'prisme' | 'pyramide' | 'boule';

export const VolumesFamiliesSVG: React.FC = () => {
  const [active, setActive] = useState<VolumeType>('prisme');

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border">
      <h3 className="text-xl font-bold text-foreground mb-6 text-center">Les 3 Familles de Volumes</h3>
      
      <div className="grid grid-cols-3 gap-3 mb-8">
        {(['prisme', 'pyramide', 'boule'] as VolumeType[]).map((v) => (
          <button
            key={v}
            onClick={() => setActive(v)}
            className={clsx(
              "p-3 rounded-xl text-xs font-black transition-all border uppercase tracking-wider",
              active === v 
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105" 
                : "bg-background text-muted border-border hover:bg-surface-hover"
            )}
          >
            {v === 'prisme' && "Prismes / Cylindres"}
            {v === 'pyramide' && "Pyramides / Cônes"}
            {v === 'boule' && "Boules / Sphères"}
          </button>
        ))}
      </div>

      <div className="relative aspect-video bg-background rounded-xl border border-border overflow-hidden flex justify-center items-center">
        <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px]">
          {active === 'prisme' && (
            <g className="text-primary fill-primary/10 stroke-primary">
              {/* Cylinder */}
              <ellipse cx="60" cy="140" rx="30" ry="10" strokeWidth="2" />
              <path d="M 30,60 L 30,140 A 30 10 0 0 0 90 140 L 90,60" strokeWidth="2" />
              <ellipse cx="60" cy="60" rx="30" ry="10" strokeWidth="2" />
              
              {/* Prism */}
              <path d="M 130,140 L 170,140 L 180,120 L 140,120 Z" strokeWidth="2" />
              <path d="M 130,140 L 130,70 L 170,70 L 170,140 M 170,70 L 180,50 L 180,120 M 130,70 L 140,50 L 180,50" strokeWidth="2" fill="none" />
              <text x="100" y="180" textAnchor="middle" fontSize="10" className="fill-muted font-bold">2 bases identiques, face latérale droite</text>
            </g>
          )}

          {active === 'pyramide' && (
            <g className="text-danger fill-danger/10 stroke-danger">
              {/* Cone */}
              <ellipse cx="60" cy="140" rx="30" ry="10" strokeWidth="2" />
              <path d="M 30,140 L 60,40 L 90,140" strokeWidth="2" />
              
              {/* Pyramid */}
              <path d="M 120,140 L 170,140 L 185,125 L 135,125 Z" strokeWidth="2" />
              <path d="M 120,140 L 152,40 L 170,140 M 152,40 L 185,125" strokeWidth="2" fill="none" />
              <text x="100" y="180" textAnchor="middle" fontSize="10" className="fill-muted font-bold">1 base + 1 sommet (Apex)</text>
            </g>
          )}

          {active === 'boule' && (
            <g className="text-warning fill-warning/10 stroke-warning">
              <circle cx="100" cy="100" r="60" strokeWidth="2" />
              <ellipse cx="100" cy="100" rx="60" ry="20" strokeWidth="1" fill="none" strokeDasharray="4 2" />
              <path d="M 40,100 A 60 20 0 0 0 160 100" strokeWidth="2" fill="none" />
              <circle cx="100" cy="100" r="2" fill="var(--color-danger)" stroke="none" />
              <text x="100" y="180" textAnchor="middle" fontSize="10" className="fill-muted font-bold">Tous les points à égale distance du centre</text>
            </g>
          )}
        </svg>
      </div>

      <div className="mt-6 p-4 bg-background/50 rounded-xl border border-border">
         <p className="text-sm text-center leading-relaxed">
           {active === 'prisme' && "Le volume se calcule par : **Aire de la base × Hauteur**."}
           {active === 'pyramide' && "Le volume est un tiers du prisme : **(Aire de la base × Hauteur) / 3**."}
           {active === 'boule' && "Formule unique : **(4/3) × π × Rayon³**."}
         </p>
      </div>
    </div>
  );
};
