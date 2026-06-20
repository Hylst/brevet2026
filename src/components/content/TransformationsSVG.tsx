import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, Move, Scaling, FlipHorizontal } from 'lucide-react';
import clsx from 'clsx';
import { playSound } from '../../lib/audio';

type TransformationType = 'symetrie' | 'translation' | 'rotation' | 'homothetie';

export const TransformationsSVG: React.FC = () => {
  const [type, setType] = useState<TransformationType>('symetrie');

  const getTransformProps = (t: TransformationType) => {
     switch(t) {
        case 'symetrie':
           return {
              rotateY: 180,
              x: 120, // move to match the reflection
              y: 0,
              scale: 1,
              rotate: 0,
           };
        case 'translation':
           return {
              x: 80,
              y: -40,
              rotateY: 0,
              scale: 1,
              rotate: 0,
           };
        case 'rotation':
           return {
               rotate: 120,
               x: 80,
               y: 40,
               rotateY: 0,
               scale: 1,
           };
        case 'homothetie':
           return {
               scale: 2,
               x: 0,
               y: 0,
               rotate: 0,
               rotateY: 0,
           };
     }
  };

  const handleSetType = (t: TransformationType) => {
     playSound('click');
     setType(t);
  };

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border shadow-xl">
      <h3 className="text-xl font-bold text-foreground mb-6 text-center">Les Transformations du Plan</h3>
      
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {(['symetrie', 'translation', 'rotation', 'homothetie'] as TransformationType[]).map((t) => (
          <button
            key={t}
            onClick={() => handleSetType(t)}
            onMouseEnter={() => playSound('hover')}
            className={clsx(
              "px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2",
              type === t 
                ? "bg-primary text-white shadow-lg scale-105" 
                : "bg-background text-muted hover:bg-surface-hover border border-border hover:text-white"
            )}
          >
            {t === 'symetrie' && <FlipHorizontal className="w-4 h-4" />}
            {t === 'translation' && <Move className="w-4 h-4" />}
            {t === 'rotation' && <RotateCcw className="w-4 h-4" />}
            {t === 'homothetie' && <Scaling className="w-4 h-4" />}
            <span className="capitalize">{t}</span>
          </button>
        ))}
      </div>

      <div className="relative aspect-video bg-background rounded-xl border border-border overflow-hidden flex justify-center items-center shadow-inner">
        <svg viewBox="-100 -100 300 300" className="w-full h-full max-w-[500px] overflow-visible">
          {/* Grid lines */}
          <g stroke="var(--color-border)" strokeWidth="1" opacity="0.4">
            {Array.from({ length: 31 }).map((_, i) => (
              <React.Fragment key={i}>
                <line x1="-150" y1={-150 + i * 10} x2="250" y2={-150 + i * 10} />
                <line x1={-150 + i * 10} y1="-150" x2={-150 + i * 10} y2="250" />
              </React.Fragment>
            ))}
          </g>

          {/* Axes for symmetry */}
          {type === 'symetrie' && (
            <motion.line 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }}
               x1="80" y1="-150" x2="80" y2="250" stroke="#ef4444" strokeWidth="2" strokeDasharray="6 4" 
            />
          )}

          {/* Vector for translation */}
          {type === 'translation' && (
             <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <path d="M 40,40 L 120,0" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="opacity-50" />
                <path d="M 40,40 L 120,0" fill="none" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
             </motion.g>
          )}

          {/* Center for rotation */}
          {type === 'rotation' && (
             <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                 <circle cx="80" cy="100" r="4" fill="#f59e0b" />
                 <text x="80" y="120" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">Centre</text>
                 <path d="M 40,40 Q 120,60 120,140" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" className="opacity-50" />
             </motion.g>
          )}

          {/* Center for homothety */}
          {type === 'homothetie' && (
             <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                 <circle cx="-40" cy="-40" r="4" fill="#8b5cf6" />
                 <text x="-40" y="-55" fill="#8b5cf6" fontSize="14" textAnchor="middle" fontWeight="bold">Origine</text>
                 <line x1="-40" y1="-40" x2="20" y2="20" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 4" />
             </motion.g>
          )}

          <defs>
             <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
             </marker>
          </defs>

          {/* Original Shape */}
          <g>
            <path d="M 20,20 L 60,20 L 40,60 Z" fill="#475569" opacity="0.5" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
            <text x="40" y="45" fill="white" fontSize="12" textAnchor="middle" fontWeight="bold">F</text>
          </g>

          {/* Transformed Shape */}
          <motion.g
            initial={false}
            animate={getTransformProps(type)}
            transition={{ type: "spring", stiffness: 60, damping: 12 }}
            style={{ transformOrigin: type === 'rotation' ? '80px 100px' : type === 'homothetie' ? '-40px -40px' : type === 'symetrie' ? '80px 0px' : '0px 0px'}}
          >
            <path d="M 20,20 L 60,20 L 40,60 Z" fill="rgba(59, 130, 246, 0.4)" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" />
            <text x="40" y="45" fill="white" fontSize="12" textAnchor="middle" fontWeight="bold">F'</text>
          </motion.g>
        </svg>

        {/* Labels overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none">
          <p className="text-sm font-medium bg-background/90 px-4 py-2 rounded-xl inline-block backdrop-blur-sm border border-border shadow-lg text-foreground">
            {type === 'symetrie' && "Symétrie Axiale : Effet miroir par rapport à l'axe rouge."}
            {type === 'translation' && "Translation : Déplacement rectiligne (glissement) le long d'un vecteur."}
            {type === 'rotation' && "Rotation : Pivotement autour d'un point central fixe."}
            {type === 'homothetie' && "Homothétie : Agrandissement ou réduction depuis un centre."}
          </p>
        </div>
      </div>
    </div>
  );
};
