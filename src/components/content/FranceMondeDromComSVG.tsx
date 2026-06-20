import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Map, Anchor, Sun, Wind, Globe, Navigation, Search } from 'lucide-react';

export const FranceMondeDromComSVG: React.FC = () => {
  const [selectedID, setSelectedID] = useState<string | null>(null);

  const territories = [
    { id: 'GUAD', name: 'Guadeloupe', type: 'DROM', ocean: 'Océan Atlantique (Antilles)', info: 'Archipel touristique, économie basée sur l\'agriculture (canne à sucre, bananes).' },
    { id: 'MART', name: 'Martinique', type: 'DROM', ocean: 'Océan Atlantique (Antilles)', info: 'Île volcanique (Montagne Pelée), fort rayonnement culturel.' },
    { id: 'GUYA', name: 'Guyane', type: 'DROM', ocean: 'Amérique du Sud', info: 'Seul territoire continental. Héberge le Centre Spatial Guyanais (Kourou).' },
    { id: 'REUN', name: 'La Réunion', type: 'DROM', ocean: 'Océan Indien', info: 'Île intense, volcan actif (Piton de la Fournaise), biodiversité unique.' },
    { id: 'MAY', name: 'Mayotte', type: 'DROM', ocean: 'Océan Indien', info: 'Dernier département créé (2011). Fort enjeux de développement.' },
    { id: 'POLY', name: 'Polynésie fr.', type: 'COM', ocean: 'Océan Pacifique', info: '118 îles réparties sur une surface grande comme l\'Europe.' },
    { id: 'NCAL', name: 'Nlle-Calédonie', type: 'Statut Spécial', ocean: 'Océan Pacifique', info: 'Important gisement de Nickel. Large autonomie politique.' },
    { id: 'WALL', name: 'Wallis-et-Futuna', type: 'COM', ocean: 'Océan Pacifique', info: 'Territoire isolé, culture coutumière très forte.' },
    { id: 'SPM', name: 'St-Pierre-et-Miquelon', type: 'COM', ocean: 'Atlantique Nord', info: 'Près du Canada. Économie liée à la pêche.' },
  ];

  const mapPoints = [
    { id: 'GUAD', x: 45, y: 85 },
    { id: 'MART', x: 48, y: 88 },
    { id: 'GUYA', x: 55, y: 105 },
    { id: 'REUN', x: 135, y: 130 },
    { id: 'MAY', x: 125, y: 125 },
    { id: 'POLY', x: 10, y: 120 },
    { id: 'NCAL', x: 175, y: 135 },
    { id: 'SPM', x: 50, y: 45 },
  ];

  return (
    <div className="w-full bg-surface p-4 sm:p-6 rounded-2xl border border-border shadow-2xl my-8 font-sans overflow-hidden">
      <div className="flex flex-col items-center gap-2 mb-8 text-center">
        <div className="flex items-center gap-3">
          <Globe className="w-8 h-8 text-blue-400" />
          <h3 className="text-2xl font-bold text-white mb-0 mt-0">La France, une Puissance Archipel</h3>
        </div>
        <p className="text-muted text-sm max-w-2xl">Grâce à ses Outre-mer, la France possède la 2ème plus grande ZEE mondiale (11 millions de km²).</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* WORLD MAP SIDE */}
        <div className="lg:col-span-3 relative aspect-[2/1] bg-slate-900/50 rounded-2xl border border-border/50 overflow-hidden flex items-center justify-center p-4">
          <svg viewBox="0 0 200 100" className="w-full h-full opacity-60">
            {/* SIMPLIFIED WORLD MAP */}
            <path d="M 30 20 Q 50 10 70 30 T 90 20 M 10 40 Q 20 60 40 80 T 60 70 M 120 10 Q 150 5 180 20 T 170 50 M 130 60 Q 140 80 160 90 T 180 70" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2 1" />
            
            {/* TERRITORIES ON MAP */}
            {mapPoints.map(p => (
              <motion.g 
                key={p.id}
                onClick={() => setSelectedID(p.id)}
                className="cursor-pointer"
                animate={selectedID === p.id ? { scale: 1.5 } : { scale: 1 }}
              >
                <circle cx={p.x} cy={p.y} r="1.5" fill={selectedID === p.id ? '#fbbf24' : '#60a5fa'} />
                <circle cx={p.x} cy={p.y} r="3" stroke={selectedID === p.id ? '#fbbf24' : '#60a5fa'} fill="none" strokeWidth="0.5" className="animate-pulse" />
              </motion.g>
            ))}
            
            {/* METROPOLE */}
            <rect x="95" y="25" width="4" height="4" fill="#ef4444" rx="1" />
            <text x="100" y="23" fill="#ef4444" fontSize="3" fontWeight="bold" textAnchor="middle">France métropolitaine</text>
          </svg>
          
          <div className="absolute top-4 left-4 flex flex-col gap-1">
             <div className="flex items-center gap-2 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                <Navigation className="w-3 h-3 text-blue-400" />
                <span className="text-[10px] text-blue-300 font-bold uppercase tracking-wider">Projection Mondiale</span>
             </div>
          </div>
        </div>

        {/* DETAILS SIDE */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <AnimatePresence mode="wait">
            {selectedID ? (
              <motion.div
                key={selectedID}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-blue-600/10 border border-blue-400/30 p-5 rounded-2xl h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase">
                    {territories.find(t => t.id === selectedID)?.type}
                  </span>
                  <button onClick={() => setSelectedID(null)} className="text-muted hover:text-white"><Navigation className="w-4 h-4 rotate-45"/></button>
                </div>
                <h4 className="text-2xl font-black text-white mb-1">{territories.find(t => t.id === selectedID)?.name}</h4>
                <p className="text-blue-300 text-xs font-bold mb-4 flex items-center gap-1">
                   <Anchor className="w-3 h-3" /> {territories.find(t => t.id === selectedID)?.ocean}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed grow">
                  {territories.find(t => t.id === selectedID)?.info}
                </p>
                <div className="mt-4 pt-4 border-t border-blue-500/20 flex items-center gap-3">
                   <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] ring-2 ring-surface font-bold">EU</div>
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-[10px] ring-2 ring-surface font-bold">FR</div>
                   </div>
                   <span className="text-[10px] text-muted">Territoire sous souveraineté française</span>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-surface-light border border-border/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Search className="w-4 h-4 text-primary" />
                    <span className="font-bold text-sm">Exploration</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {territories.slice(0, 6).map(t => (
                      <button 
                        key={t.id}
                        onClick={() => setSelectedID(t.id)}
                        className="text-left px-3 py-2 rounded-lg bg-surface border border-border/50 hover:border-primary transition-all text-xs font-bold truncate"
                      >
                        {t.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                  <h5 className="font-bold text-emerald-400 text-xs mb-2 flex items-center gap-2">
                    <Sun className="w-3 h-3" /> Le savez-vous ?
                  </h5>
                  <p className="text-[10px] text-gray-400 leading-relaxed italic">
                    "Le soleil ne se couche jamais sur la République." Grâce au décalage horaire entre ses territoires, il fait toujours jour quelque part en France !
                  </p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
