import React, { useState } from 'react';
import { motion } from 'motion/react';

export const PythagorasSVG: React.FC = () => {
  const [showSquares, setShowSquares] = useState(false);

  // Triangle dimensions
  const a = 120; // height (AC)
  const b = 160; // base (AB)
  const c = 200; // hypotenuse (BC)

  // Position offsets
  const offsetX = 150;
  const offsetY = 150;

  return (
    <div className="flex flex-col items-center my-8 p-6 bg-surface/50 rounded-2xl border border-border">
      <h4 className="text-lg font-bold text-foreground mb-4">Théorème de Pythagore : a² + b² = c²</h4>
      
      <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-xl">
          <g transform={`translate(${offsetX}, ${offsetY})`}>
            
            {/* Square A (Left) */}
            <motion.rect
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: showSquares ? 1 : 0, scale: showSquares ? 1 : 0.8 }}
              transition={{ duration: 0.5 }}
              x={-a}
              y={0}
              width={a}
              height={a}
              fill="rgba(239, 68, 68, 0.2)"
              stroke="#ef4444"
              strokeWidth="2"
            />
            {showSquares && (
              <text x={-a/2} y={a/2} fill="#ef4444" textAnchor="middle" dominantBaseline="middle" className="font-bold text-xl">
                a²
              </text>
            )}

            {/* Square B (Bottom) */}
            <motion.rect
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: showSquares ? 1 : 0, scale: showSquares ? 1 : 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              x={0}
              y={a}
              width={b}
              height={b}
              fill="rgba(59, 130, 246, 0.2)"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            {showSquares && (
              <text x={b/2} y={a + b/2} fill="#3b82f6" textAnchor="middle" dominantBaseline="middle" className="font-bold text-xl">
                b²
              </text>
            )}

            {/* Square C (Hypotenuse) */}
            <motion.g
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: showSquares ? 1 : 0, scale: showSquares ? 1 : 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <g transform={`translate(0, 0) rotate(${-Math.atan2(a, b) * (180 / Math.PI)})`}>
                <rect
                  x={0}
                  y={-c}
                  width={c}
                  height={c}
                  fill="rgba(16, 185, 129, 0.2)"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                <text 
                  x={c/2} 
                  y={-c/2} 
                  fill="#10b981" 
                  textAnchor="middle" 
                  dominantBaseline="middle" 
                  className="font-bold text-xl"
                >
                  c²
                </text>
              </g>
            </motion.g>

            {/* The Right Triangle */}
            <polygon
              points={`0,0 0,${a} ${b},${a}`}
              fill="rgba(255, 255, 255, 0.1)"
              stroke="#ffffff"
              strokeWidth="3"
            />
            
            {/* Right angle symbol */}
            <polyline
              points={`0,${a-15} 15,${a-15} 15,${a}`}
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
            />

            {/* Labels */}
            <text x={-15} y={a/2} fill="#ef4444" textAnchor="middle" dominantBaseline="middle" className="font-bold text-lg">a</text>
            <text x={b/2} y={a + 20} fill="#3b82f6" textAnchor="middle" dominantBaseline="middle" className="font-bold text-lg">b</text>
            <text x={b/2 + 15} y={a/2 - 15} fill="#10b981" textAnchor="middle" dominantBaseline="middle" className="font-bold text-lg">c</text>

            {/* Vertices */}
            <circle cx="0" cy="0" r="4" fill="#ffffff" />
            <circle cx="0" cy={a} r="4" fill="#ffffff" />
            <circle cx={b} cy={a} r="4" fill="#ffffff" />
            
            <text x="-15" y="-10" fill="#94a3b8" className="text-sm font-bold">C</text>
            <text x="-15" y={a + 15} fill="#94a3b8" className="text-sm font-bold">A</text>
            <text x={b + 15} y={a + 15} fill="#94a3b8" className="text-sm font-bold">B</text>

          </g>
        </svg>
      </div>

      <button
        onClick={() => setShowSquares(!showSquares)}
        className="mt-4 px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full transition-colors"
      >
        {showSquares ? "Masquer les carrés" : "Afficher les carrés (a² + b² = c²)"}
      </button>
    </div>
  );
};
