import React, { useState } from 'react';

export const TrigonometrySVG: React.FC = () => {
  const [angle, setAngle] = useState(30);
  
  // Base length
  const adjacent = 200;
  // Calculate opposite and hypotenuse based on angle
  const rad = (angle * Math.PI) / 180;
  const opposite = adjacent * Math.tan(rad);
  const hypotenuse = adjacent / Math.cos(rad);

  // SVG coordinates
  const startX = 50;
  const startY = 250;
  
  const pointC = { x: startX, y: startY }; // Right angle
  const pointA = { x: startX + adjacent, y: startY }; // Angle vertex
  const pointB = { x: startX, y: startY - opposite }; // Top vertex

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border flex flex-col items-center">
      <h3 className="text-xl font-bold text-foreground mb-4">Trigonométrie Interactive</h3>
      
      <div className="w-full max-w-md mb-6">
        <label className="flex justify-between text-sm text-muted mb-2">
          <span>Angle: {angle}°</span>
        </label>
        <input 
          type="range" 
          min="15" 
          max="75" 
          value={angle} 
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-full accent-primary"
        />
      </div>

      <div className="relative w-full max-w-lg aspect-video bg-background rounded-xl border border-border overflow-hidden flex justify-center items-center p-4">
        <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
          {/* Triangle */}
          <polygon 
            points={`${pointA.x},${pointA.y} ${pointB.x},${pointB.y} ${pointC.x},${pointC.y}`} 
            fill="rgba(var(--color-primary-rgb), 0.1)" 
            stroke="var(--color-primary)" 
            strokeWidth="3"
            strokeLinejoin="round"
          />
          
          {/* Right angle symbol */}
          <polyline 
            points={`${pointC.x + 15},${pointC.y} ${pointC.x + 15},${pointC.y - 15} ${pointC.x},${pointC.y - 15}`} 
            fill="none" 
            stroke="var(--color-danger)" 
            strokeWidth="2" 
          />

          {/* Angle Arc */}
          <path 
            d={`M ${pointA.x - 40} ${pointA.y} A 40 40 0 0 1 ${pointA.x - 40 * Math.cos(rad)} ${pointA.y - 40 * Math.sin(rad)}`} 
            fill="none" 
            stroke="var(--color-warning)" 
            strokeWidth="3" 
          />
          <text x={pointA.x - 60} y={pointA.y - 15} fill="var(--color-warning)" fontSize="14" fontWeight="bold">{angle}°</text>

          {/* Labels */}
          <text x={startX + adjacent / 2} y={startY + 20} fill="var(--color-muted)" fontSize="14" textAnchor="middle">Adjacent</text>
          <text x={startX - 10} y={startY - opposite / 2} fill="var(--color-muted)" fontSize="14" textAnchor="end" dominantBaseline="middle">Opposé</text>
          
          {/* Hypotenuse label rotated */}
          <text 
            x={startX + adjacent / 2} 
            y={startY - opposite / 2 - 10} 
            fill="var(--color-primary)" 
            fontSize="14" 
            fontWeight="bold"
            textAnchor="middle"
            transform={`rotate(${-angle}, ${startX + adjacent / 2}, ${startY - opposite / 2})`}
          >
            Hypoténuse
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full max-w-lg mt-6">
        <div className="bg-background p-3 rounded-xl border border-border text-center">
          <div className="text-xs text-muted mb-1">Cosinus</div>
          <div className="font-mono text-primary font-bold">{Math.cos(rad).toFixed(3)}</div>
        </div>
        <div className="bg-background p-3 rounded-xl border border-border text-center">
          <div className="text-xs text-muted mb-1">Sinus</div>
          <div className="font-mono text-danger font-bold">{Math.sin(rad).toFixed(3)}</div>
        </div>
        <div className="bg-background p-3 rounded-xl border border-border text-center">
          <div className="text-xs text-muted mb-1">Tangente</div>
          <div className="font-mono text-warning font-bold">{Math.tan(rad).toFixed(3)}</div>
        </div>
      </div>
    </div>
  );
};
