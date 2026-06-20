import React, { useState } from 'react';
import { motion } from 'motion/react';

export const ProbabilityTreeSVG: React.FC = () => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  // Un arbre simple pour 2 lancers de pièce truquée (Pile 2/3, Face 1/3)
  const paths = [
    { id: 'PP', name: 'Pile, Pile', calc: '2/3 × 2/3 = 4/9', nodes: ['P1', 'P21'], p: '4/9' },
    { id: 'PF', name: 'Pile, Face', calc: '2/3 × 1/3 = 2/9', nodes: ['P1', 'F21'], p: '2/9' },
    { id: 'FP', name: 'Face, Pile', calc: '1/3 × 2/3 = 2/9', nodes: ['F1', 'P22'], p: '2/9' },
    { id: 'FF', name: 'Face, Face', calc: '1/3 × 1/3 = 1/9', nodes: ['F1', 'F22'], p: '1/9' },
  ];

  return (
    <div className="my-8 p-6 bg-surface border border-border rounded-2xl shadow-xl overflow-x-auto">
       <h3 className="text-xl font-bold text-white mb-4 text-center">Arbre de Probabilités Interactif</h3>
       <p className="text-sm text-subtle text-center mb-8 max-w-lg mx-auto">
         Survole les options à droite pour mettre en surbrillance le chemin correspondant sur l'arbre d'une pièce déséquilibrée.
       </p>

       <div className="flex flex-col lg:flex-row items-center justify-center gap-10 min-w-[600px]">
         {/* The Tree */}
         <div className="relative w-[400px] h-[300px]">
            <svg width="400" height="300" viewBox="0 0 400 300" className="drop-shadow-lg font-sans">
              
              {/* Level 1 branches */}
              <motion.path 
                d="M 50 150 L 150 75" 
                fill="none" 
                stroke={hoveredPath && paths.find(p => p.id === hoveredPath)?.nodes.includes('P1') ? "#3b82f6" : "#475569"} 
                strokeWidth={hoveredPath && paths.find(p => p.id === hoveredPath)?.nodes.includes('P1') ? "4" : "2"} 
              />
              <text x="85" y="100" fill="#94a3b8" fontSize="12" fontWeight="bold">2/3</text>

              <motion.path 
                d="M 50 150 L 150 225" 
                fill="none" 
                stroke={hoveredPath && paths.find(p => p.id === hoveredPath)?.nodes.includes('F1') ? "#ef4444" : "#475569"} 
                strokeWidth={hoveredPath && paths.find(p => p.id === hoveredPath)?.nodes.includes('F1') ? "4" : "2"} 
              />
              <text x="85" y="210" fill="#94a3b8" fontSize="12" fontWeight="bold">1/3</text>


              {/* Level 2 branches (from P1) */}
              <motion.path 
                d="M 180 75 L 280 40" 
                fill="none" 
                stroke={hoveredPath === 'PP' ? "#3b82f6" : "#475569"} 
                strokeWidth={hoveredPath === 'PP' ? "4" : "2"} 
              />
              <text x="210" y="45" fill="#94a3b8" fontSize="12" fontWeight="bold">2/3</text>

              <motion.path 
                d="M 180 75 L 280 110" 
                fill="none" 
                stroke={hoveredPath === 'PF' ? "#ef4444" : "#475569"} 
                strokeWidth={hoveredPath === 'PF' ? "4" : "2"} 
              />
              <text x="210" y="115" fill="#94a3b8" fontSize="12" fontWeight="bold">1/3</text>


              {/* Level 2 branches (from F1) */}
              <motion.path 
                d="M 180 225 L 280 190" 
                fill="none" 
                stroke={hoveredPath === 'FP' ? "#3b82f6" : "#475569"} 
                strokeWidth={hoveredPath === 'FP' ? "4" : "2"} 
              />
              <text x="210" y="195" fill="#94a3b8" fontSize="12" fontWeight="bold">2/3</text>

              <motion.path 
                d="M 180 225 L 280 260" 
                fill="none" 
                stroke={hoveredPath === 'FF' ? "#ef4444" : "#475569"} 
                strokeWidth={hoveredPath === 'FF' ? "4" : "2"} 
              />
              <text x="210" y="265" fill="#94a3b8" fontSize="12" fontWeight="bold">1/3</text>


              {/* Nodes */}
              {/* Start */}
              <circle cx="50" cy="150" r="6" fill="#cbd5e1" />
              
              {/* L1 */}
              <circle cx="165" cy="75" r="16" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
              <text x="165" y="80" fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">P</text>
              
              <circle cx="165" cy="225" r="16" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
              <text x="165" y="230" fill="#ef4444" fontSize="14" fontWeight="bold" textAnchor="middle">F</text>

              {/* L2 */}
              <circle cx="295" cy="40" r="16" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
              <text x="295" y="45" fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">P</text>
              <text x="325" y="45" fill="white" fontSize="14" fontWeight="bold" opacity={hoveredPath === 'PP' ? 1 : 0.5}>4/9</text>

              <circle cx="295" cy="110" r="16" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
              <text x="295" y="115" fill="#ef4444" fontSize="14" fontWeight="bold" textAnchor="middle">F</text>
              <text x="325" y="115" fill="white" fontSize="14" fontWeight="bold" opacity={hoveredPath === 'PF' ? 1 : 0.5}>2/9</text>

              <circle cx="295" cy="190" r="16" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
              <text x="295" y="195" fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">P</text>
              <text x="325" y="195" fill="white" fontSize="14" fontWeight="bold" opacity={hoveredPath === 'FP' ? 1 : 0.5}>2/9</text>

              <circle cx="295" cy="260" r="16" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
              <text x="295" y="265" fill="#ef4444" fontSize="14" fontWeight="bold" textAnchor="middle">F</text>
              <text x="325" y="265" fill="white" fontSize="14" fontWeight="bold" opacity={hoveredPath === 'FF' ? 1 : 0.5}>1/9</text>
              
            </svg>
         </div>

         {/* Interactive Legend */}
         <div className="flex flex-col gap-3">
            <div className="text-xs text-muted mb-2 font-medium uppercase tracking-wider">Chemins possibles</div>
            {paths.map(path => (
              <div 
                key={path.id}
                onMouseEnter={() => setHoveredPath(path.id)}
                onMouseLeave={() => setHoveredPath(null)}
                className={`p-3 rounded-xl border cursor-default transition-all flex flex-col gap-1 ${
                  hoveredPath === path.id 
                    ? 'bg-primary/20 border-primary shadow-lg shadow-primary/20 scale-105' 
                    : 'bg-background border-border hover:border-white/20'
                }`}
              >
                <div className="flex justify-between items-center gap-4">
                  <span className="font-bold text-foreground">{path.name}</span>
                  <span className="text-white font-mono bg-surface px-2 py-0.5 rounded text-sm font-bold border border-white/10">{path.p}</span>
                </div>
                <div className={`text-xs font-mono transition-opacity ${hoveredPath === path.id ? 'text-primary-hover opacity-100' : 'text-muted opacity-0 hidden'}`}>
                  Calcul: {path.calc}
                </div>
              </div>
            ))}
         </div>

       </div>
    </div>
  );
};
