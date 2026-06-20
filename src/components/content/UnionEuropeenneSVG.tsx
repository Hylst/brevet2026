import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Stars, Building, Globe, Map as MapIcon, Info } from 'lucide-react';

export const UnionEuropeenneSVG: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const countries = [
    { id: 'FR', name: 'France', year: 1951, info: 'Membre fondateur (CECA). Co-moteur de l\'UE.' },
    { id: 'DE', name: 'Allemagne', year: 1951, info: 'Membre fondateur. 1ère puissance économique de l\'UE.' },
    { id: 'IT', name: 'Italie', year: 1951, info: 'Membre fondateur. Signataire du traité de Rome.' },
    { id: 'BE', name: 'Belgique', year: 1951, info: 'Siège de la Commission et du Conseil (Bruxelles).' },
    { id: 'NL', name: 'Pays-Bas', year: 1951, info: 'Membre fondateur. Port de Rotterdam (Porte d\'entrée).' },
    { id: 'LU', name: 'Luxembourg', year: 1951, info: 'Membre fondateur. Siège de plusieurs institutions.' },
    { id: 'ES', name: 'Espagne', year: 1986, info: 'Entrée après la dictature. Agriculture et tourisme.' },
    { id: 'PT', name: 'Portugal', year: 1986, info: 'Entrée avec l\'Espagne. Modernisation rapide.' },
    { id: 'PL', name: 'Pologne', year: 2004, info: 'Grand élargissement à l\'Est. Dynamisme industriel.' },
    { id: 'GR', name: 'Grèce', year: 1981, info: 'Berceau de la démocratie. Enjeux méditerranéens.' },
  ];

  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-xl my-8 font-sans overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
          <Stars className="w-6 h-6 text-yellow-400" />
          L'Espace de l'Union Européenne
        </h3>
        <p className="text-muted text-sm">27 États membres, un marché unique et des valeurs communes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* MAP AREA */}
        <div className="relative aspect-square bg-blue-900/10 rounded-xl border border-blue-500/20 flex items-center justify-center overflow-hidden h-[300px] sm:h-[400px]">
          <svg viewBox="0 0 200 200" className="w-full h-full p-4">
            {/* SIMPLIFIED EUROPE SHAPE */}
            <path d="M 40 40 L 160 30 L 180 160 L 60 180 Z" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            
            {/* BLUE BANANA (MEGALOPOLIS) */}
            <path d="M 60 20 Q 95 80 100 160" stroke="#fbbf24" strokeWidth="20" fill="none" opacity="0.1" strokeLinecap="round" />
            <text x="85" y="60" fill="#fbbf24" fontSize="6" fontWeight="black" transform="rotate(70, 85, 60)" opacity="0.3">DORSALE EUROPÉENNE</text>
            
            {/* COUNTRIES AS DOTS/SHAPES */}
            {countries.map(c => (
              <motion.circle
                key={c.id}
                cx={c.id === 'FR' ? 70 : c.id === 'DE' ? 95 : c.id === 'IT' ? 100 : c.id === 'ES' ? 45 : c.id === 'PL' ? 130 : c.id === 'GR' ? 140 : 85}
                cy={c.id === 'FR' ? 100 : c.id === 'DE' ? 85 : c.id === 'IT' ? 130 : c.id === 'ES' ? 140 : c.id === 'PL' ? 80 : c.id === 'GR' ? 155 : 70}
                r="4"
                fill={selectedCountry === c.id ? '#fbbf24' : '#3b82f6'}
                className="cursor-pointer hover:stroke-white transition-all"
                strokeWidth="1"
                onClick={() => setSelectedCountry(c.id)}
                whileHover={{ scale: 1.5 }}
              />
            ))}
            
            <text x="10" y="20" fill="#475569" fontSize="6" fontStyle="italic">Atlantique</text>
            <text x="150" y="180" fill="#475569" fontSize="6" fontStyle="italic">Méditerranée</text>
          </svg>
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
             <MapIcon className="w-3 h-3 text-blue-400" />
             <span className="text-[10px] text-blue-300 font-bold uppercase">Repères Interactifs</span>
          </div>
        </div>

        {/* INFO AREA */}
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="wait">
            {selectedCountry ? (
              <motion.div
                key={selectedCountry}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-surface-light border border-yellow-500/30 p-5 rounded-xl shadow-lg ring-1 ring-yellow-500/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-yellow-400">{countries.find(c => c.id === selectedCountry)?.name}</h4>
                  <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded text-xs font-bold">Entrée : {countries.find(c => c.id === selectedCountry)?.year}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {countries.find(c => c.id === selectedCountry)?.info}
                </p>
                <button 
                  onClick={() => setSelectedCountry(null)}
                  className="text-xs text-muted hover:text-white transition-colors flex items-center gap-1"
                >
                  <Globe className="w-3 h-3" /> Retour à la vue d'ensemble
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-300 flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4" /> Les 3 piliers de l'UE
                  </h4>
                  <ul className="text-xs text-gray-400 space-y-2">
                    <li>🇪🇺 <strong>Marché Unique :</strong> Libre circulation des biens, services, capitaux et personnes.</li>
                    <li>🕊️ <strong>Paix & Démocratie :</strong> Plus aucun conflit majeur entre membres depuis 1945.</li>
                    <li>💶 <strong>Zone Euro :</strong> Une monnaie commune pour 20 pays (facilitation des échanges).</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-xl">
                  <h4 className="font-bold text-purple-300 flex items-center gap-2 mb-2">
                    <Building className="w-4 h-4" /> Sièges du Pouvoir
                  </h4>
                  <p className="text-xs text-gray-400">
                    Bruxelles (Commission), Strasbourg (Parlement), Luxembourg (Justice) et Francfort (BCE).
                  </p>
                </div>

                <p className="text-xs text-muted text-center italic">Clique sur un pays sur la carte pour explorer son rôle.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
