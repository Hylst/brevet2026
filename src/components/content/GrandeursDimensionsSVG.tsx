import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Ruler, Square, Box } from 'lucide-react';
import { playSound } from '../../lib/audio';

export const GrandeursDimensionsSVG: React.FC = () => {
  const [dimension, setDimension] = useState<'1D' | '2D' | '3D'>('1D');

  const handleTabChange = (dim: '1D' | '2D' | '3D') => {
    playSound('click');
    setDimension(dim);
  };

  return (
    <div className="my-8 bg-surface rounded-2xl border border-border overflow-hidden shadow-xl">
      <div className="p-4 bg-background border-b border-border flex justify-between items-center">
        <h3 className="font-bold text-foreground">Dimensions : Longueur, Aire, Volume</h3>
      </div>
      
      {/* Navigation Tabs */}
      <div className="flex px-4 pt-4 gap-2">
         {[
           { id: '1D', label: '1D : Longueur', icon: Ruler, unit: 'm, cm...' },
           { id: '2D', label: '2D : Aire', icon: Square, unit: 'm², cm²...' },
           { id: '3D', label: '3D : Volume', icon: Box, unit: 'm³, cm³...' }
         ].map((tab) => {
           const Icon = tab.icon;
           const isActive = dimension === tab.id;
           return (
             <button
               key={tab.id}
               onClick={() => handleTabChange(tab.id as '1D'|'2D'|'3D')}
               onMouseEnter={() => playSound('hover')}
               className={`flex-1 flex flex-col items-center justify-center p-3 rounded-t-xl border-t border-x transition-colors ${
                 isActive 
                   ? 'bg-surface border-border text-primary' 
                   : 'bg-background border-transparent text-muted hover:text-foreground hover:bg-surface/50'
               }`}
               style={{ borderBottom: isActive ? '2px solid transparent' : '1px solid var(--border)'}}
             >
               <Icon className={`w-6 h-6 mb-2 ${isActive ? 'text-primary' : 'text-muted'}`} />
               <span className="font-bold text-sm">{tab.label}</span>
               <span className="text-xs opacity-70 font-mono mt-1">{tab.unit}</span>
             </button>
           );
         })}
      </div>

      {/* Visual Area */}
      <div className="p-6 relative bg-background flex flex-col items-center justify-center" style={{ minHeight: '350px' }}>
         <AnimatePresence mode="wait">
            {dimension === '1D' && (
              <motion.div
                key="1D"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full flex justify-center items-center h-full"
              >
                 <svg width="400" height="200" viewBox="0 0 400 200" className="drop-shadow-lg font-sans">
                    {/* Grid */}
                    <path d="M 0 100 L 400 100" stroke="#334155" strokeWidth="1" strokeDasharray="5,5" />
                    <path d="M 200 0 L 200 200" stroke="#334155" strokeWidth="1" strokeDasharray="5,5" />

                    <motion.line 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: 'easeInOut'}}
                      x1="100" y1="100" x2="300" y2="100" 
                      stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" 
                    />
                    
                    {/* Measurements */}
                    <motion.path 
                       initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                       d="M 100 120 L 100 130 L 300 130 L 300 120" fill="none" stroke="#94a3b8" strokeWidth="2"
                    />
                    <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} x="200" y="150" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">
                      1 Dimension (Longueur)
                    </motion.text>
                    <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} cx="100" cy="100" r="6" fill="#60a5fa" />
                    <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} cx="300" cy="100" r="6" fill="#60a5fa" />
                 </svg>
              </motion.div>
            )}

            {dimension === '2D' && (
              <motion.div
                key="2D"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full flex justify-center items-center h-full"
              >
                 <svg width="400" height="250" viewBox="0 0 400 250" className="drop-shadow-lg font-sans">
                    {/* Grid Fill */}
                    <motion.rect 
                      initial={{ height: 0, width: 0 }}
                      animate={{ height: 160, width: 160 }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      x="120" y="45" 
                      fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="4" 
                    />
                    
                    <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} x="200" y="125" fill="#60a5fa" fontSize="24" fontWeight="bold" textAnchor="middle">
                       Aire
                    </motion.text>
                    
                    {/* Measurements */}
                    <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} d="M 120 220 L 120 230 L 280 230 L 280 220" fill="none" stroke="#94a3b8" strokeWidth="2" />
                    <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} x="200" y="245" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Largeur</motion.text>

                    <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} d="M 100 45 L 90 45 L 90 205 L 100 205" fill="none" stroke="#94a3b8" strokeWidth="2" />
                    <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} x="80" y="130" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" transform="rotate(-90 80 130)">Hauteur</motion.text>
                 </svg>
              </motion.div>
            )}

            {dimension === '3D' && (
              <motion.div
                key="3D"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full flex justify-center items-center h-full"
              >
                  <svg width="400" height="300" viewBox="0 0 400 300" className="drop-shadow-lg font-sans">
                     {/* 3D Cube Path Drawing */}
                     <g stroke="#3b82f6" strokeWidth="4" fill="rgba(59, 130, 246, 0.2)" strokeLinejoin="round">
                        {/* Back face */}
                        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} d="M 150 70 L 250 70 L 250 170 L 150 170 Z" />
                        {/* Connecting lines */}
                        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.8 }} d="M 100 120 L 150 70" />
                        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.8 }} d="M 200 120 L 250 70" />
                        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.8 }} d="M 200 220 L 250 170" />
                        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.8 }} d="M 100 220 L 150 170" />
                        {/* Front face */}
                        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.3 }} d="M 100 120 L 200 120 L 200 220 L 100 220 Z" />
                     </g>
                     
                     <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }} x="150" y="170" fill="#93c5fd" fontSize="24" fontWeight="bold" textAnchor="middle">
                       Volume
                     </motion.text>
                     <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }} x="150" y="200" fill="#e2e8f0" fontSize="12" fontWeight="normal" textAnchor="middle">
                       (L × l × h)
                     </motion.text>
                  </svg>
              </motion.div>
            )}
         </AnimatePresence>
      </div>

      <div className="p-4 bg-surface text-sm text-muted">
        <p>
          {dimension === '1D' && "Les distances se mesurent en une seule dimension (m). Elles représentent le bout-à-bout, comme un trajet ou un contour (le périmètre)."}
          {dimension === '2D' && "L'aire se calcule en multipliant 2 dimensions (ex: m × m = m²). C'est la surface couverte, comme de la peinture sur un mur ou du gazon sur un terrain."}
          {dimension === '3D' && "Le volume se calcule en multipliant 3 dimensions (ex: m × m × m = m³). Il représente la place qu'occupe un objet dans l'espace, sa contenance."}
        </p>
      </div>
    </div>
  );
};
