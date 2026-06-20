import React, { useState } from 'react';

export const AgePyramidSVG: React.FC = () => {
  const [year, setYear] = useState(2020);

  // Fake data generator based on year to simulate baby boom and aging
  const generateData = (currentYear: number) => {
    const data = [];
    for (let age = 0; age <= 100; age += 5) {
      // Base population shape
      let basePop = 100 - age * 0.8;
      
      // Simulate baby boom (born 1945-1965)
      const birthYear = currentYear - age;
      if (birthYear >= 1945 && birthYear <= 1965) {
        basePop += 30;
      }
      
      // Simulate lower birth rates recently
      if (birthYear > 2000) {
        basePop -= 15;
      }
      
      // Simulate war casualties (born ~1910-1920)
      if (birthYear >= 1910 && birthYear <= 1920) {
        basePop -= 20;
      }

      // Ensure no negative population
      basePop = Math.max(2, basePop);

      // Men slightly less than women at older ages
      const men = basePop * (age > 70 ? 0.4 : 0.49);
      const women = basePop * (age > 70 ? 0.6 : 0.51);

      data.push({ age, men, women });
    }
    return data;
  };

  const data = generateData(year);
  const maxPop = 150; // Max scale for x-axis

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border flex flex-col items-center">
      <h3 className="text-xl font-bold text-foreground mb-2">Pyramide des Âges (Simulation)</h3>
      <p className="text-sm text-muted mb-6">Observez l'évolution de la population (Baby-boom, vieillissement)</p>
      
      <div className="w-full max-w-md mb-8">
        <label className="flex justify-between text-sm text-muted mb-2">
          <span>Année : <strong className="text-foreground">{year}</strong></span>
        </label>
        <input 
          type="range" 
          min="1950" 
          max="2050" 
          step="10"
          value={year} 
          onChange={(e) => setYear(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-muted mt-1">
          <span>1950</span>
          <span>2000</span>
          <span>2050</span>
        </div>
      </div>

      <div className="relative w-full max-w-lg bg-background rounded-xl border border-border p-4 flex flex-col">
        <div className="flex justify-between text-sm font-bold mb-4 px-8">
          <span className="text-primary">Hommes</span>
          <span className="text-rose-400">Femmes</span>
        </div>
        
        <div className="flex-1 flex flex-col gap-1 relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border z-0"></div>
          
          {data.map((row, i) => (
            <div key={i} className="flex items-center w-full h-3 relative z-10">
              {/* Men bar (Right to Left) */}
              <div className="w-1/2 flex justify-end pr-1">
                <div 
                  className="h-full bg-primary/80 rounded-l-sm transition-all duration-500"
                  style={{ width: `${(row.men / maxPop) * 100}%` }}
                ></div>
              </div>
              
              {/* Age Label */}
              <div className="absolute left-1/2 -translate-x-1/2 text-[8px] sm:text-[10px] text-muted bg-background px-1 z-20">
                {row.age}
              </div>
              
              {/* Women bar (Left to Right) */}
              <div className="w-1/2 flex justify-start pl-1">
                <div 
                  className="h-full bg-rose-500/80 rounded-r-sm transition-all duration-500"
                  style={{ width: `${(row.women / maxPop) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-xs text-muted mt-4">Âge</div>
      </div>
    </div>
  );
};
