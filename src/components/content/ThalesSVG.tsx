import React, { useState } from 'react';
import { motion } from 'motion/react';

export const ThalesSVG: React.FC = () => {
  const [ratio, setRatio] = useState(0.5); // Slider from 0.2 to 0.8

  // Base triangle ABC
  const A = { x: 250, y: 50 };
  const B = { x: 100, y: 350 };
  const C = { x: 450, y: 350 };

  // Points M and N based on ratio
  const M = {
    x: A.x + (B.x - A.x) * ratio,
    y: A.y + (B.y - A.y) * ratio,
  };
  
  const N = {
    x: A.x + (C.x - A.x) * ratio,
    y: A.y + (C.y - A.y) * ratio,
  };

  // Calculate lengths (proportional to screen pixels for display)
  const lengthAB = Math.round(Math.sqrt(Math.pow(B.x - A.x, 2) + Math.pow(B.y - A.y, 2)));
  const lengthAC = Math.round(Math.sqrt(Math.pow(C.x - A.x, 2) + Math.pow(C.y - A.y, 2)));
  const lengthBC = Math.round(Math.sqrt(Math.pow(C.x - B.x, 2) + Math.pow(C.y - B.y, 2)));
  
  const lengthAM = Math.round(lengthAB * ratio);
  const lengthAN = Math.round(lengthAC * ratio);
  const lengthMN = Math.round(lengthBC * ratio);

  return (
    <div className="flex flex-col items-center my-8 p-6 bg-surface/50 rounded-2xl border border-border">
      <h4 className="text-lg font-bold text-foreground mb-2">Théorème de Thalès</h4>
      <p className="text-sm text-muted mb-6 text-center">
        Déplacez le curseur pour modifier la position de la droite (MN) parallèle à (BC).
      </p>
      
      <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center overflow-hidden bg-background rounded-xl border border-border mb-6">
        <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-xl">
          {/* Triangle ABC */}
          <polygon
            points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
            fill="rgba(59, 130, 246, 0.1)"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          
          {/* Triangle AMN */}
          <polygon
            points={`${A.x},${A.y} ${M.x},${M.y} ${N.x},${N.y}`}
            fill="rgba(239, 68, 68, 0.2)"
            stroke="#ef4444"
            strokeWidth="2"
          />

          {/* Line MN extended slightly to show it's a line */}
          <line
            x1={M.x - 20}
            y1={M.y}
            x2={N.x + 20}
            y2={N.y}
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Points */}
          <circle cx={A.x} cy={A.y} r="5" fill="#ffffff" />
          <circle cx={B.x} cy={B.y} r="5" fill="#ffffff" />
          <circle cx={C.x} cy={C.y} r="5" fill="#ffffff" />
          <circle cx={M.x} cy={M.y} r="5" fill="#ef4444" />
          <circle cx={N.x} cy={N.y} r="5" fill="#ef4444" />

          {/* Labels */}
          <text x={A.x} y={A.y - 15} fill="#ffffff" textAnchor="middle" className="font-bold text-lg">A</text>
          <text x={B.x - 15} y={B.y + 15} fill="#ffffff" textAnchor="middle" className="font-bold text-lg">B</text>
          <text x={C.x + 15} y={C.y + 15} fill="#ffffff" textAnchor="middle" className="font-bold text-lg">C</text>
          <text x={M.x - 15} y={M.y - 5} fill="#ef4444" textAnchor="middle" className="font-bold text-lg">M</text>
          <text x={N.x + 15} y={N.y - 5} fill="#ef4444" textAnchor="middle" className="font-bold text-lg">N</text>
        </svg>
      </div>

      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm text-muted font-medium">
            <span>Proche de A</span>
            <span>Rapport : {ratio.toFixed(2)}</span>
            <span>Proche de BC</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="0.9"
            step="0.01"
            value={ratio}
            onChange={(e) => setRatio(parseFloat(e.target.value))}
            className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>

        <div className="bg-surface/50 rounded-xl p-4 border border-border">
          <div className="flex justify-center items-center gap-4 text-lg font-mono text-foreground">
            <div className="flex flex-col items-center">
              <span className="border-b-2 border-border px-2 text-danger">AM</span>
              <span className="px-2 text-primary">AB</span>
            </div>
            <span>=</span>
            <div className="flex flex-col items-center">
              <span className="border-b-2 border-border px-2 text-danger">AN</span>
              <span className="px-2 text-primary">AC</span>
            </div>
            <span>=</span>
            <div className="flex flex-col items-center">
              <span className="border-b-2 border-border px-2 text-danger">MN</span>
              <span className="px-2 text-primary">BC</span>
            </div>
            <span className="ml-2 font-bold text-foreground">= {ratio.toFixed(2)}</span>
          </div>
          
          <div className="mt-4 flex justify-center items-center gap-4 text-sm font-mono text-muted">
            <div className="flex flex-col items-center">
              <span className="border-b border-border px-2">{lengthAM}</span>
              <span className="px-2">{lengthAB}</span>
            </div>
            <span>=</span>
            <div className="flex flex-col items-center">
              <span className="border-b border-border px-2">{lengthAN}</span>
              <span className="px-2">{lengthAC}</span>
            </div>
            <span>=</span>
            <div className="flex flex-col items-center">
              <span className="border-b border-border px-2">{lengthMN}</span>
              <span className="px-2">{lengthBC}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
