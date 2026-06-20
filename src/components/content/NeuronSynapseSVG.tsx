import React from 'react';
import { motion } from 'motion/react';

export const NeuronSynapseSVG: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center my-6">
      <svg viewBox="0 0 800 450" className="w-full max-w-3xl h-auto font-sans" role="img" aria-label="Fonctionnement des neurones et de la synapse">
        <rect width="800" height="450" rx="15" fill="var(--color-surface)" className="stroke-border" strokeWidth="2" />
        
        <text x="400" y="40" textAnchor="middle" className="fill-foreground font-bold text-2xl">Le Cerveau et les Synapses</text>
        
        {/* Neurone 1 (Emetteur) */}
        <g transform="translate(150, 150)">
          {/* Dendrites */}
          <path d="M 0 0 L -30 -30 M 0 0 L -40 10 M 0 0 L -20 40 M 0 0 L 20 -40" stroke="#94a3b8" strokeWidth="3" />
          
          {/* Corps cellulaire */}
          <motion.circle cx="0" cy="0" r="30" fill="#bae6fd" stroke="#0284c7" strokeWidth="3" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} />
          <circle cx="0" cy="0" r="10" fill="#0284c7" />
          
          <text x="0" y="50" textAnchor="middle" className="fill-foreground font-bold text-sm">Corps Cellulaire</text>
          
          {/* Axone */}
          <path d="M 30 0 L 150 0" stroke="#bae6fd" strokeWidth="10" />
          
          {/* Gaine de Myéline */}
          <rect x="50" y="-8" width="25" height="16" rx="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
          <rect x="85" y="-8" width="25" height="16" rx="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
          <rect x="120" y="-8" width="25" height="16" rx="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
          
          <text x="100" y="-20" textAnchor="middle" className="fill-muted font-sm italic text-xs">Axone</text>
          
          {/* Signal électrique */}
          <motion.path d="M 40 -15 L 50 -25 L 60 -15 L 70 -30 L 80 -15 L 100 -25 L 120 -15 M 40 15 L 50 25 L 60 15 L 70 30 L 80 15 L 100 25 L 120 15" stroke="#facc15" strokeWidth="2" fill="none" animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }} />
          
          <text x="100" y="30" textAnchor="middle" className="fill-yellow-600 font-bold text-[10px]">Message Électrique</text>
        </g>
        
        {/* Synapse (Zoom) */}
        <g transform="translate(380, 200)">
          <path d="M -80 -50 C -40 -50 0 -80 0 -80 L 10 10 L -80 10 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="3" />
          
          <path d="M -80 -50 Q -50 -50 -20 0" fill="none" stroke="#ca8a04" strokeWidth="2" strokeDasharray="3,3" />
          
          {/* Vésicules */}
          <circle cx="-40" cy="-20" r="8" fill="#a7f3d0" stroke="#059669" />
          <circle cx="-25" cy="-35" r="8" fill="#a7f3d0" stroke="#059669" />
          <circle cx="-55" cy="-40" r="8" fill="#a7f3d0" stroke="#059669" />
          <circle cx="-20" cy="-10" r="8" fill="#a7f3d0" stroke="#059669" />
          
          <text x="-40" y="-60" textAnchor="middle" className="fill-muted text-[10px] italic">Vésicules</text>
          
          {/* Fente synaptique et Neurotransmetteurs */}
          <motion.circle cx="10" cy="-20" r="3" fill="#10b981" initial={{ x: -25, y: 15, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} />
          <motion.circle cx="15" cy="-10" r="3" fill="#10b981" initial={{ x: -30, y: 5, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }} />
          <motion.circle cx="8" cy="-30" r="3" fill="#10b981" initial={{ x: -20, y: 20, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }} />
          <motion.circle cx="20" cy="-40" r="3" fill="#10b981" initial={{ x: -30, y: 30, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.9 }} />
          
          {/* Neurone 2 (Récepteur) */}
          <path d="M 30 -80 Q 20 -30 30 10 L 80 10 L 80 -80 Z" fill="#fbcfe8" stroke="#db2777" strokeWidth="3" />
          
          {/* Récepteurs */}
          <path d="M 27 -20 L 23 -20 C 23 -23 20 -25 20 -25 C 20 -25 17 -23 17 -20 L 13 -20" stroke="#db2777" strokeWidth="2" fill="none" transform="rotate(-90 20 -20)" />
          <path d="M 28 -40 L 24 -40 C 24 -43 21 -45 21 -45 C 21 -45 18 -43 18 -40 L 14 -40" stroke="#db2777" strokeWidth="2" fill="none" transform="rotate(-75 21 -40)" />
          <path d="M 28 -10 L 24 -10 C 24 -13 21 -15 21 -15 C 21 -15 18 -13 18 -10 L 14 -10" stroke="#db2777" strokeWidth="2" fill="none" transform="rotate(-100 21 -10)" />
          
          <text x="60" y="-95" textAnchor="middle" className="fill-pink-600 font-bold text-sm">Neurone</text>
          <text x="60" y="-80" textAnchor="middle" className="fill-pink-600 font-bold text-sm">suivant</text>
        </g>
        
        {/* Légende Bas */}
        <rect x="500" y="270" width="220" height="130" rx="10" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="5,5" />
        <text x="610" y="295" textAnchor="middle" className="fill-primary font-bold">La Synapse</text>
        
        <circle cx="530" cy="320" r="4" fill="#10b981" />
        <text x="545" y="324" className="fill-foreground text-xs font-semibold">Neurotransmetteurs</text>
        
        <path d="M 530 350 L 526 350 C 526 347 523 345 523 345 C 523 345 520 347 520 350 L 516 350" stroke="#db2777" strokeWidth="2" fill="none" transform="rotate(-90 523 348)" />
        <text x="545" y="352" className="fill-foreground text-xs font-semibold">Récepteurs spécifiques</text>
        
        <text x="610" y="385" textAnchor="middle" className="fill-muted text-xs italic">Passage CHIMIQUE</text>
        <text x="610" y="370" textAnchor="middle" className="fill-muted text-xs italic">(plus électrique ici)</text>
      </svg>
    </div>
  );
};
