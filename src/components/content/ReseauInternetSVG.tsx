import React from 'react';
import { motion } from 'motion/react';

export const ReseauInternetSVG: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center my-6">
      <svg viewBox="0 0 800 500" className="w-full max-w-3xl h-auto font-sans" role="img" aria-label="Réseaux informatiques et Internet">
        <rect width="800" height="500" rx="15" fill="var(--color-surface)" className="stroke-border" strokeWidth="2" />
        
        <text x="400" y="40" textAnchor="middle" className="fill-foreground font-bold text-2xl">Architecture d'un Réseau</text>
        
        {/* Internet Central */}
        <motion.ellipse cx="400" cy="250" rx="100" ry="70" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="3" strokeDasharray="5,5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1, duration: 0.8 }} />
        <text x="400" y="240" textAnchor="middle" className="fill-primary font-bold text-xl">INTERNET</text>
        <text x="400" y="260" textAnchor="middle" className="fill-muted font-sm italic">Le réseau des réseaux</text>
        
        {/* Serveur Web & DNS */}
        <motion.g initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
          {/* Ligne au serveur */}
          <path d="M 480 200 L 600 120" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
          
          {/* Serveur DNS */}
          <rect x="580" y="60" width="80" height="100" rx="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
          <line x1="600" y1="80" x2="640" y2="80" stroke="#ca8a04" strokeWidth="2" />
          <line x1="600" y1="100" x2="640" y2="100" stroke="#ca8a04" strokeWidth="2" />
          <text x="620" y="140" textAnchor="middle" className="fill-yellow-600 font-bold font-sm">Serveur DNS</text>
          
          {/* Serveur Web */}
          <path d="M 490 280 L 600 380" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
          <rect x="580" y="340" width="80" height="100" rx="5" fill="#a7f3d0" stroke="#059669" strokeWidth="2" />
          <line x1="600" y1="360" x2="640" y2="360" stroke="#059669" strokeWidth="2" />
          <line x1="600" y1="380" x2="640" y2="380" stroke="#059669" strokeWidth="2" />
          <circle cx="620" cy="410" r="10" fill="#10b981" />
          <text x="620" y="460" textAnchor="middle" className="fill-green-600 font-bold font-sm">Serveur Web</text>
        </motion.g>

        {/* Réseau Local - Maison */}
        <motion.g initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.8 }}>
          {/* Cadre Réseau Local */}
          <rect x="50" y="80" width="220" height="340" rx="10" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="10,5" />
          <text x="160" y="110" textAnchor="middle" className="fill-muted font-bold">Réseau Local (LAN)</text>
          
          {/* Routeur (Box) */}
          <rect x="110" y="230" width="100" height="40" rx="5" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" />
          <text x="160" y="255" textAnchor="middle" className="fill-pink-600 font-bold font-sm">Routeur (Box)</text>
          
          {/* Ligne Box <-> Internet */}
          <path d="M 210 250 L 300 250" stroke="#db2777" strokeWidth="3" markerEnd="url(#arrow-pink)" />
          
          {/* Switch */}
          <rect x="110" y="320" width="100" height="30" rx="5" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
          <text x="160" y="340" textAnchor="middle" className="fill-sky-700 font-bold font-sm">Switch</text>
          <line x1="160" y1="270" x2="160" y2="320" stroke="#0284c7" strokeWidth="2" />
          
          {/* Appareils en RJ45 */}
          <rect x="70" y="380" width="50" height="40" rx="2" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
          <text x="95" y="405" textAnchor="middle" className="fill-slate-600 text-[10px] font-bold">PC Fixe</text>
          <path d="M 120 350 L 95 380" stroke="#94a3b8" strokeWidth="2" />
          
          <rect x="190" y="380" width="60" height="30" rx="2" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
          <text x="220" y="400" textAnchor="middle" className="fill-slate-600 text-[10px] font-bold">Imprimante</text>
          <path d="M 200 350 L 220 380" stroke="#94a3b8" strokeWidth="2" />
          
          {/* Appareils en Wifi */}
          <text x="160" y="145" textAnchor="middle" className="fill-pink-500 font-bold text-lg">WIFI</text>
          <path d="M 160 230 L 160 155" stroke="#fbcfe8" strokeWidth="2" strokeDasharray="3,3" />
          
          <rect x="70" y="160" width="60" height="40" rx="2" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
          <text x="100" y="185" textAnchor="middle" className="fill-slate-600 text-[10px] font-bold">Laptop</text>
          <path d="M 100 160 Q 130 140 150 140" fill="none" stroke="#fbcfe8" strokeWidth="2" strokeDasharray="2,2" />
          
          <rect x="230" y="160" width="20" height="40" rx="2" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
          <text x="240" y="180" textAnchor="middle" className="fill-slate-600 text-[8px] font-bold" transform="rotate(-90, 240, 180)">Phone</text>
          <path d="M 230 180 Q 200 140 170 140" fill="none" stroke="#fbcfe8" strokeWidth="2" strokeDasharray="2,2" />
        </motion.g>
        
        <defs>
          <marker id="arrow-pink" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#db2777" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};
