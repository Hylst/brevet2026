import React, { useState } from 'react';

export const PhScaleSVG: React.FC = () => {
  const [ph, setPh] = useState(7);

  const getPhColor = (value: number) => {
    // Simple color mapping for pH 0 to 14
    if (value < 3) return '#ef4444'; // Red
    if (value < 6) return '#f97316'; // Orange
    if (value < 7) return '#eab308'; // Yellow
    if (value === 7) return '#22c55e'; // Green
    if (value < 11) return '#3b82f6'; // Blue
    return '#8b5cf6'; // Purple
  };

  const getPhExample = (value: number) => {
    if (value === 0) return "Acide chlorhydrique";
    if (value <= 2) return "Jus de citron / Estomac";
    if (value <= 3) return "Vinaigre / Cola";
    if (value <= 4) return "Jus de tomate";
    if (value <= 5) return "Café noir";
    if (value <= 6) return "Lait / Salive";
    if (value === 7) return "Eau pure / Sang";
    if (value <= 8) return "Eau de mer";
    if (value <= 9) return "Bicarbonate de soude";
    if (value <= 10) return "Savon";
    if (value <= 12) return "Ammoniaque";
    if (value <= 13) return "Eau de Javel";
    return "Soude caustique";
  };

  const getPhCategory = (value: number) => {
    if (value < 7) return "Acide";
    if (value === 7) return "Neutre";
    return "Basique";
  };

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border flex flex-col items-center">
      <h3 className="text-xl font-bold text-foreground mb-4">L'Échelle des pH</h3>
      
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-between text-sm text-muted mb-2">
          <span>Acide (0)</span>
          <span>Neutre (7)</span>
          <span>Basique (14)</span>
        </div>
        
        {/* Custom Range Slider */}
        <div className="relative h-12 flex items-center">
          <div className="absolute inset-0 rounded-full opacity-80" style={{
            background: 'linear-gradient(to right, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6)'
          }}></div>
          <input 
            type="range" 
            min="0" 
            max="14" 
            step="0.1"
            value={ph} 
            onChange={(e) => setPh(Number(e.target.value))}
            className="w-full absolute inset-0 opacity-0 cursor-pointer"
          />
          {/* Custom Thumb */}
          <div 
            className="absolute h-14 w-4 bg-white rounded-full shadow-lg border-2 border-background pointer-events-none transition-all duration-75"
            style={{ left: `calc(${(ph / 14) * 100}% - 8px)` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
        <div className="bg-background p-4 rounded-xl border border-border text-center flex flex-col items-center justify-center">
          <div className="text-sm text-muted mb-1">Valeur pH</div>
          <div className="text-3xl font-bold" style={{ color: getPhColor(ph) }}>{ph.toFixed(1)}</div>
        </div>
        <div className="bg-background p-4 rounded-xl border border-border text-center flex flex-col items-center justify-center">
          <div className="text-sm text-muted mb-1">Nature</div>
          <div className="text-xl font-bold text-foreground">{getPhCategory(ph)}</div>
        </div>
        <div className="bg-background p-4 rounded-xl border border-border text-center flex flex-col items-center justify-center">
          <div className="text-sm text-muted mb-1">Exemple courant</div>
          <div className="text-base font-medium text-foreground">{getPhExample(Math.round(ph))}</div>
        </div>
      </div>

      {/* Ions visualization */}
      <div className="mt-8 w-full max-w-2xl bg-background p-4 rounded-xl border border-border">
        <h4 className="text-sm font-bold text-muted mb-4 text-center">Concentration relative en ions</h4>
        <div className="flex h-8 rounded-lg overflow-hidden">
          <div 
            className="bg-danger/80 flex items-center justify-center text-xs font-bold text-white transition-all duration-300"
            style={{ width: `${100 - (ph / 14) * 100}%` }}
          >
            {ph < 12 && 'H+'}
          </div>
          <div 
            className="bg-primary/80 flex items-center justify-center text-xs font-bold text-white transition-all duration-300"
            style={{ width: `${(ph / 14) * 100}%` }}
          >
            {ph > 2 && 'HO-'}
          </div>
        </div>
      </div>
    </div>
  );
};
