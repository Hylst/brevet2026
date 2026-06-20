import React, { useState } from 'react';

export const AffineFunctionSVG: React.FC = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);

  // Grid and coordinate system
  const size = 300;
  const center = size / 2;
  const scale = 20; // 20px per unit
  const minUnit = -7;
  const maxUnit = 7;

  // Calculate line points
  // y = ax + b
  // SVG y is inverted, so svgY = center - (y * scale)
  const getSvgY = (x: number) => center - ((a * x + b) * scale);
  const getSvgX = (x: number) => center + (x * scale);

  const x1 = minUnit;
  const y1 = getSvgY(x1);
  const x2 = maxUnit;
  const y2 = getSvgY(x2);

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border flex flex-col items-center">
      <h3 className="text-xl font-bold text-foreground mb-4">Fonction Affine : <span className="text-primary font-mono">f(x) = {a}x {b >= 0 ? '+' : '-'} {Math.abs(b)}</span></h3>
      
      <div className="w-full max-w-md space-y-4 mb-6">
        <div>
          <label className="flex justify-between text-sm text-muted mb-2">
            <span>Coefficient directeur (a) : <strong className="text-primary">{a}</strong></span>
          </label>
          <input 
            type="range" 
            min="-5" 
            max="5" 
            step="0.5"
            value={a} 
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full accent-primary"
          />
        </div>
        <div>
          <label className="flex justify-between text-sm text-muted mb-2">
            <span>Ordonnée à l'origine (b) : <strong className="text-success">{b}</strong></span>
          </label>
          <input 
            type="range" 
            min="-5" 
            max="5" 
            step="1"
            value={b} 
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-success"
          />
        </div>
      </div>

      <div className="relative w-full max-w-md aspect-square bg-background rounded-xl border border-border overflow-hidden flex justify-center items-center p-4">
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
          {/* Grid */}
          {Array.from({ length: maxUnit - minUnit + 1 }).map((_, i) => {
            const pos = center + (minUnit + i) * scale;
            return (
              <g key={i}>
                <line x1={pos} y1="0" x2={pos} y2={size} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="0" y1={pos} x2={size} y2={pos} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </g>
            );
          })}

          {/* Axes */}
          <line x1="0" y1={center} x2={size} y2={center} stroke="#64748b" strokeWidth="2" />
          <line x1={center} y1="0" x2={center} y2={size} stroke="#64748b" strokeWidth="2" />

          {/* Function Line */}
          <line 
            x1={getSvgX(x1)} 
            y1={y1} 
            x2={getSvgX(x2)} 
            y2={y2} 
            stroke="var(--color-primary)" 
            strokeWidth="3" 
            strokeLinecap="round"
          />

          {/* Origin point */}
          <circle cx={center} cy={center} r="3" fill="var(--color-danger)" />
          
          {/* y-intercept point */}
          <circle cx={center} cy={getSvgY(0)} r="5" fill="var(--color-success)" />
        </svg>
      </div>
    </div>
  );
};
