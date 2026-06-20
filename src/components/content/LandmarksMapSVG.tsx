import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Map, Mountain, Waves, Building2, Globe, Users } from 'lucide-react';

export const LandmarksMapSVG: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'none' | 'relief' | 'rivers' | 'cities' | 'regions' | 'demographics'>('none');

  const layers = [
    { id: 'regions', label: 'Régions', icon: Globe, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { id: 'relief', label: 'Reliefs', icon: Mountain, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { id: 'rivers', label: 'Fleuves', icon: Waves, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { id: 'cities', label: 'Métropoles', icon: Building2, color: 'text-red-500', bg: 'bg-red-500/10' },
    { id: 'demographics', label: 'Démographie', icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  ];

  return (
    <div className="w-full bg-surface p-4 sm:p-6 rounded-2xl border border-border shadow-xl my-8 font-sans overflow-hidden">
      <div className="flex items-center gap-3 mb-6 justify-center text-center px-4">
        <Map className="w-6 h-6 text-primary shrink-0" />
        <h3 className="text-xl font-bold text-white mb-0 mt-0">Carte de Référence de la France</h3>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6 px-2">
        <button 
          onClick={() => setActiveLayer('none')}
          className={`px-3 py-1.5 text-[10px] sm:text-xs font-bold rounded-lg border transition-all ${activeLayer === 'none' ? 'bg-white text-black border-white' : 'bg-surface border-border text-muted hover:border-muted'}`}
        >
          Carte Muette
        </button>
        {layers.map(layer => {
          const Icon = layer.icon;
          return (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id as any)}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs font-bold rounded-lg border transition-all ${
                activeLayer === layer.id ? `${layer.bg} ${layer.color} border-current` : 'bg-surface border-border text-muted hover:border-muted'
              }`}
            >
              <Icon className="w-3 h-3" />
              {layer.label}
            </button>
          );
        })}
      </div>

      <div className="relative aspect-square max-w-[500px] mx-auto bg-slate-900/50 rounded-xl border border-border/30 overflow-hidden">
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-3xl filter">
          {/* FRANCE OUTLINE (Highly Realistic) */}
          <path 
            d="M 230 30 L 210 40 L 160 45 L 130 50 L 100 65 L 60 75 L 30 110 L 15 130 
               L 30 150 L 50 165 L 80 175 L 75 195 L 85 220 L 75 250 L 75 285 L 80 315 L 80 340 
               L 120 355 L 170 365 L 205 350 L 245 360 L 265 345 
               L 275 330 L 305 335 L 340 330 L 355 345 
               L 350 300 L 360 250 L 340 220 L 345 190 L 325 170 L 340 140 L 360 110 
               L 340 85 L 310 70 L 280 60 L 260 40 Z" 
            fill="#1e293b" 
            stroke="#4b5563" 
            strokeWidth="1.5"
            strokeLinejoin="round" 
            className="transition-colors duration-500 ease-in-out"
          />
          {/* CORSE */}
          <path
            d="M 345 355 L 355 355 L 365 375 L 360 395 L 345 385 L 340 370 Z"
            fill="#1e293b"
            stroke="#4b5563"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          
          <AnimatePresence>
            {/* REGIONS LAYER */}
            {activeLayer === 'regions' && (
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Simplified region boundaries */}
                <path d="M 130 50 Q 150 90 140 120 Q 180 120 200 125" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" fill="none" />
                <path d="M 60 75 Q 80 110 80 175" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" fill="none" />
                <path d="M 230 30 Q 210 80 200 125" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" fill="none" />
                <path d="M 220 160 Q 280 160 340 140" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" fill="none" />
                <path d="M 85 220 Q 160 240 200 280" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" fill="none" />
                <path d="M 200 280 Q 250 280 275 330" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" fill="none" />
                <path d="M 275 330 Q 300 280 350 300" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" fill="none" />
                
                <text x="130" y="85" fill="#d8b4fe" fontSize="8" fontWeight="bold" opacity="0.9">Normandie</text>
                <text x="210" y="100" fill="#d8b4fe" fontSize="8" fontWeight="bold" opacity="0.9">Île-de-France</text>
                <text x="50" y="120" fill="#d8b4fe" fontSize="8" fontWeight="bold" opacity="0.9">Bretagne</text>
                <text x="110" y="180" fill="#d8b4fe" fontSize="8" fontWeight="bold" opacity="0.9">Pays de la Loire</text>
                <text x="290" y="105" fill="#d8b4fe" fontSize="8" fontWeight="bold" opacity="0.9">Grand Est</text>
                <text x="280" y="145" fill="#d8b4fe" fontSize="8" fontWeight="bold" opacity="0.9">Bourgogne-FC</text>
                <text x="130" y="270" fill="#d8b4fe" fontSize="8" fontWeight="bold" opacity="0.9">Nouvelle-Aquitaine</text>
                <text x="270" y="240" fill="#d8b4fe" fontSize="8" fontWeight="bold" opacity="0.9">Auvergne-Rhône-Alpes</text>
                <text x="180" y="320" fill="#d8b4fe" fontSize="8" fontWeight="bold" opacity="0.9" textAnchor="middle">Occitanie</text>
                <text x="315" y="315" fill="#d8b4fe" fontSize="8" fontWeight="bold" opacity="0.9">PACA</text>
                <text x="355" y="375" fill="#d8b4fe" fontSize="7" fontWeight="bold" opacity="0.9" textAnchor="middle">Corse</text>
              </motion.g>
            )}

            {/* RELIEF LAYER */}
            {activeLayer === 'relief' && (
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Pyrenees */}
                <path d="M 85 345 Q 160 365 260 345" stroke="#b45309" strokeWidth="10" fill="none" opacity="0.5" strokeLinecap="round" filter="drop-shadow(0px 4px 4px rgba(0,0,0,0.3))" />
                <path d="M 95 348 Q 160 360 250 348" stroke="#f59e0b" strokeWidth="4" fill="none" opacity="0.8" strokeLinecap="round" />
                <text x="170" y="360" fill="#fcd34d" fontSize="9" fontWeight="black" textAnchor="middle" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>PYRÉNÉES</text>
                
                {/* Alpes */}
                <path d="M 330 200 Q 300 270 345 330" stroke="#b45309" strokeWidth="14" fill="none" opacity="0.5" strokeLinecap="round" filter="drop-shadow(0px 4px 4px rgba(0,0,0,0.3))" />
                <path d="M 335 210 Q 310 270 345 320" stroke="#f59e0b" strokeWidth="6" fill="none" opacity="0.8" strokeLinecap="round" />
                <text x="315" y="275" fill="#fcd34d" fontSize="9" fontWeight="black" textAnchor="end" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>ALPES</text>
                
                {/* Massif Central */}
                <path d="M 180 230 Q 230 250 250 290 Q 230 300 180 280 Z" fill="#b45309" opacity="0.4" filter="drop-shadow(0px 4px 4px rgba(0,0,0,0.3))" />
                <path d="M 180 250 Q 220 260 240 280" stroke="#f59e0b" strokeWidth="5" fill="none" opacity="0.7" strokeLinecap="round" />
                <text x="215" y="270" fill="#fcd34d" fontSize="9" fontWeight="bold" textAnchor="middle" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>Massif Central</text>

                {/* Jura / Vosges */}
                <path d="M 315 160 Q 330 180 325 200" stroke="#f59e0b" strokeWidth="4" fill="none" opacity="0.7" strokeLinecap="round" />
                <text x="330" y="185" fill="#fcd34d" fontSize="7" fontWeight="bold" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>Jura</text>
                
                <path d="M 335 95 L 325 140" stroke="#f59e0b" strokeWidth="4" fill="none" opacity="0.7" strokeLinecap="round" />
                <text x="340" y="125" fill="#fcd34d" fontSize="7" fontWeight="bold" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>Vosges</text>

                {/* Corse relief */}
                <path d="M 350 365 L 355 385" stroke="#f59e0b" strokeWidth="3" fill="none" opacity="0.7" strokeLinecap="round" />
              </motion.g>
            )}

            {/* RIVERS LAYER */}
            {activeLayer === 'rivers' && (
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Seine */}
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M 320 115 Q 260 140 200 110 Q 150 90 140 50" stroke="#3b82f6" strokeWidth="2" fill="none" filter="drop-shadow(0px 0px 2px #60a5fa)" />
                <text x="170" y="90" fill="#93c5fd" fontSize="8" fontWeight="bold" style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.8)" }}>Seine</text>
                
                {/* Loire */}
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M 230 250 Q 210 140 160 160 Q 110 180 75 195" stroke="#3b82f6" strokeWidth="2" fill="none" filter="drop-shadow(0px 0px 2px #60a5fa)" />
                <text x="120" y="165" fill="#93c5fd" fontSize="8" fontWeight="bold" style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.8)" }}>Loire</text>
                
                {/* Garonne */}
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M 150 350 Q 155 300 130 260 Q 110 240 85 220" stroke="#3b82f6" strokeWidth="2" fill="none" filter="drop-shadow(0px 0px 2px #60a5fa)" />
                <text x="120" y="295" fill="#93c5fd" fontSize="8" fontWeight="bold" style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.8)" }}>Garonne</text>
                
                {/* Rhone */}
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M 335 185 Q 285 190 270 230 Q 265 280 270 335" stroke="#3b82f6" strokeWidth="2" fill="none" filter="drop-shadow(0px 0px 2px #60a5fa)" />
                <text x="275" y="290" fill="#93c5fd" fontSize="8" fontWeight="bold" style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.8)" }}>Rhône</text>

                {/* Rhin */}
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M 360 110 L 340 140 L 325 170" stroke="#3b82f6" strokeWidth="2.5" fill="none" filter="drop-shadow(0px 0px 2px #60a5fa)" />
                <text x="350" y="145" fill="#93c5fd" fontSize="8" fontWeight="bold" transform="rotate(55, 350, 145)" style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.8)" }}>Rhin</text>
              </motion.g>
            )}

            {/* CITIES LAYER */}
            {activeLayer === 'cities' && (
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Paris */}
                <circle cx="200" cy="110" r="4.5" fill="#ef4444" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))" />
                <motion.circle initial={{ scale: 0 }} animate={{ scale: [1, 2.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} cx="200" cy="110" r="5" stroke="#ef4444" fill="none" strokeWidth="1" />
                <text x="208" y="105" fill="white" fontSize="10" fontWeight="black" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>Paris</text>
                
                {/* Lyon */}
                <circle cx="270" cy="230" r="3.5" fill="#ef4444" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))" />
                <text x="278" y="234" fill="white" fontSize="9" fontWeight="bold">Lyon</text>
                
                {/* Marseille */}
                <circle cx="280" cy="335" r="3.5" fill="#ef4444" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))" />
                <text x="288" y="339" fill="white" fontSize="9" fontWeight="bold">Marseille</text>
                
                {/* Toulouse */}
                <circle cx="160" cy="325" r="3.5" fill="#ef4444" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))" />
                <text x="160" y="340" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">Toulouse</text>
                
                {/* Bordeaux */}
                <circle cx="110" cy="250" r="3.5" fill="#ef4444" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))" />
                <text x="102" y="254" fill="white" fontSize="9" fontWeight="bold" textAnchor="end">Bordeaux</text>
                
                {/* Lille */}
                <circle cx="215" cy="45" r="3.5" fill="#ef4444" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))" />
                <text x="215" y="37" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">Lille</text>
                
                {/* Strasbourg */}
                <circle cx="340" cy="105" r="3.5" fill="#ef4444" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))" />
                <text x="335" y="100" fill="white" fontSize="9" fontWeight="bold" textAnchor="end">Strasbourg</text>

                {/* Nantes */}
                <circle cx="85" cy="180" r="3.5" fill="#ef4444" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))" />
                <text x="77" y="184" fill="white" fontSize="9" fontWeight="bold" textAnchor="end">Nantes</text>

                {/* Nice */}
                <circle cx="345" cy="330" r="3.5" fill="#ef4444" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))" />
                <text x="350" y="325" fill="white" fontSize="9" fontWeight="bold">Nice</text>

                {/* Ajaccio (Corse) */}
                <circle cx="345" cy="375" r="2.5" fill="#ef4444" />
                <text x="338" y="380" fill="white" fontSize="7" fontWeight="bold" textAnchor="end">Ajaccio</text>
              </motion.g>
            )}

            {/* DEMOGRAPHICS LAYER */}
            {activeLayer === 'demographics' && (
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Diagonale du vide */}
                <motion.path 
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M 180 70 Q 210 150 160 230 Q 140 280 180 340" 
                  stroke="#10b981" strokeWidth="40" opacity="0.15" fill="none" strokeLinecap="round"
                />
                <text x="135" y="190" fill="#34d399" fontSize="10" fontWeight="black" transform="rotate(70, 135, 190)" opacity="0.6">DIAGONALE DU VIDE</text>
                
                {/* Dense areas */}
                <circle cx="200" cy="110" r="30" fill="#f43f5e" opacity="0.25" filter="blur(4px)" /> {/* Paris region */}
                <circle cx="215" cy="45" r="25" fill="#f43f5e" opacity="0.2" filter="blur(4px)" /> {/* North */}
                <ellipse cx="270" cy="230" rx="15" ry="25" fill="#f43f5e" opacity="0.2" filter="blur(4px)" /> {/* Lyon */}
                <path d="M 240 340 Q 290 320 350 330 Q 360 350 280 345 Z" fill="#f43f5e" opacity="0.25" filter="blur(4px)" /> {/* Med */}
                <ellipse cx="110" cy="250" rx="15" ry="20" fill="#f43f5e" opacity="0.2" filter="blur(4px)" /> {/* Bordeaux */}
                <ellipse cx="85" cy="180" rx="15" ry="20" fill="#f43f5e" opacity="0.2" filter="blur(4px)" /> {/* Nantes */}
                
                <text x="240" y="110" fill="#fb7185" fontSize="8" fontWeight="bold" textAnchor="start">Espaces très peuplés</text>
                <text x="180" y="250" fill="#6ee7b7" fontSize="8" fontWeight="bold" textAnchor="middle">Faible Densité</text>
              </motion.g>
            )}
          </AnimatePresence>
          
          {/* Seas */}
          <text x="20" y="150" fill="#64748b" fontSize="10" fontStyle="italic" fontWeight="bold" opacity="0.6">Océan Atlantique</text>
          <text x="180" y="25" fill="#64748b" fontSize="10" fontStyle="italic" fontWeight="bold" opacity="0.6">Manche</text>
          <text x="210" y="380" fill="#64748b" fontSize="10" fontStyle="italic" fontWeight="bold" opacity="0.6">Mer Méditerranée</text>
          <text x="100" y="200" fill="#64748b" fontSize="9" fontStyle="italic" opacity="0.4" transform="rotate(-70, 100, 200)">Golfe de Gascogne</text>
        </svg>
      </div>

      <div className="mt-6 flex items-start gap-3 p-4 bg-surface-light border border-border/50 rounded-xl">
        <Globe className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div className="text-xs text-muted leading-relaxed">
          <strong>Astuce :</strong> Au Brevet, on peut te demander de placer ces repères sur une carte. 
          Entraîne-toi à mémoriser les fleuves par leur forme et les villes par leur position relative par rapport aux littoraux.
        </div>
      </div>
    </div>
  );
};
