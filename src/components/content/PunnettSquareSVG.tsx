import React, { useState } from 'react';

export const PunnettSquareSVG: React.FC = () => {
  // A = dominant (e.g., Brown eyes), a = recessive (e.g., Blue eyes)
  const [parent1, setParent1] = useState<'AA' | 'Aa' | 'aa'>('Aa');
  const [parent2, setParent2] = useState<'AA' | 'Aa' | 'aa'>('Aa');

  const p1Alleles = parent1.split('');
  const p2Alleles = parent2.split('');

  const getPhenotype = (genotype: string) => {
    return genotype.includes('A') ? 'Dominant (ex: Yeux marron)' : 'Récessif (ex: Yeux bleus)';
  };

  const getPhenotypeColor = (genotype: string) => {
    return genotype.includes('A') ? 'bg-warning/80' : 'bg-primary/80';
  };

  const results = [
    p1Alleles[0] + p2Alleles[0],
    p1Alleles[0] + p2Alleles[1],
    p1Alleles[1] + p2Alleles[0],
    p1Alleles[1] + p2Alleles[1]
  ].map(g => g === 'aA' ? 'Aa' : g); // Normalize aA to Aa

  const dominantCount = results.filter(g => g.includes('A')).length;
  const recessiveCount = 4 - dominantCount;

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border flex flex-col items-center">
      <h3 className="text-xl font-bold text-foreground mb-6">Échiquier de Croisement (Génétique)</h3>
      
      <div className="flex flex-wrap justify-center gap-8 mb-8 w-full max-w-2xl">
        <div className="flex flex-col items-center gap-2">
          <label className="text-sm font-bold text-muted">Parent 1</label>
          <select 
            value={parent1} 
            onChange={(e) => setParent1(e.target.value as any)}
            className="bg-background border border-border text-foreground rounded-lg px-4 py-2 outline-none focus:border-primary"
          >
            <option value="AA">AA (Homozygote Dominant)</option>
            <option value="Aa">Aa (Hétérozygote)</option>
            <option value="aa">aa (Homozygote Récessif)</option>
          </select>
        </div>
        <div className="flex flex-col items-center gap-2">
          <label className="text-sm font-bold text-muted">Parent 2</label>
          <select 
            value={parent2} 
            onChange={(e) => setParent2(e.target.value as any)}
            className="bg-background border border-border text-foreground rounded-lg px-4 py-2 outline-none focus:border-primary"
          >
            <option value="AA">AA (Homozygote Dominant)</option>
            <option value="Aa">Aa (Hétérozygote)</option>
            <option value="aa">aa (Homozygote Récessif)</option>
          </select>
        </div>
      </div>

      <div className="relative w-full max-w-md aspect-square bg-background rounded-xl border border-border p-4 grid grid-cols-3 grid-rows-3 gap-2">
        {/* Top Left Empty */}
        <div className="flex items-center justify-center">
          <span className="text-muted text-sm rotate-[-45deg]">P1 \ P2</span>
        </div>
        
        {/* Parent 2 Alleles */}
        <div className="flex items-center justify-center text-2xl font-bold text-primary">{p2Alleles[0]}</div>
        <div className="flex items-center justify-center text-2xl font-bold text-primary">{p2Alleles[1]}</div>

        {/* Row 1 */}
        <div className="flex items-center justify-center text-2xl font-bold text-danger">{p1Alleles[0]}</div>
        <div className={`flex flex-col items-center justify-center rounded-lg border border-border/50 ${getPhenotypeColor(results[0])} text-white transition-colors duration-500`}>
          <span className="text-3xl font-bold">{results[0]}</span>
        </div>
        <div className={`flex flex-col items-center justify-center rounded-lg border border-border/50 ${getPhenotypeColor(results[1])} text-white transition-colors duration-500`}>
          <span className="text-3xl font-bold">{results[1]}</span>
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-center text-2xl font-bold text-danger">{p1Alleles[1]}</div>
        <div className={`flex flex-col items-center justify-center rounded-lg border border-border/50 ${getPhenotypeColor(results[2])} text-white transition-colors duration-500`}>
          <span className="text-3xl font-bold">{results[2]}</span>
        </div>
        <div className={`flex flex-col items-center justify-center rounded-lg border border-border/50 ${getPhenotypeColor(results[3])} text-white transition-colors duration-500`}>
          <span className="text-3xl font-bold">{results[3]}</span>
        </div>
      </div>

      <div className="mt-8 flex gap-8 w-full max-w-md justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold text-warning">{dominantCount * 25}%</div>
          <div className="text-sm text-muted mt-1">Phénotype Dominant</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">{recessiveCount * 25}%</div>
          <div className="text-sm text-muted mt-1">Phénotype Récessif</div>
        </div>
      </div>
    </div>
  );
};
