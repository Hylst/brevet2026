import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Globe, TrendingUp, Award, Zap, Anchor, Users, Landmark } from 'lucide-react';

export const PuissanceFrancaiseSVG: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hard' | 'soft' | 'eco'>('hard');

  const tabs = [
    { id: 'hard', label: 'Hard Power', icon: Shield, color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/30' },
    { id: 'soft', label: 'Soft Power', icon: Globe, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30' },
    { id: 'eco', label: 'Économie', icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30' },
  ];

  const content = {
    hard: {
      title: "Puissance Diplomatique et Militaire",
      mapInfo: "Présence militaire permanente sur tous les océans.",
      items: [
        { icon: Landmark, text: "Siège permanent au Conseil de sécurité de l'ONU." },
        { icon: Zap, text: "Force de dissuasion nucléaire souveraine." },
        { icon: Anchor, text: "Points d'appui à Djibouti, Abu Dhabi, Dakar, Libreville." },
        { icon: Users, text: "30 000 soldats déployés en permanence hors métropole." }
      ]
    },
    soft: {
      title: "Rayonnement Culturel et Influence",
      mapInfo: "Réseau de l'Institut Français et de la Francophonie.",
      items: [
        { icon: Globe, text: "+300M de francophones (5ème langue mondiale)." },
        { icon: Award, text: "1ère destination touristique (89M de visiteurs)." },
        { icon: Users, text: "3ème réseau mondial d'instituts et alliances françaises." },
        { icon: Award, text: "Luxe, Gastronomie et Mode : leaders mondiaux." }
      ]
    },
    eco: {
      title: "Puissance Économique de Rang Mondial",
      mapInfo: "Sièges des firmes transnationales (FTN) françaises.",
      items: [
        { icon: TrendingUp, text: "7ème puissance économique mondiale par le PIB." },
        { icon: Zap, text: "Grands groupes : LVMH, Airbus, Total, Schneider." },
        { icon: Globe, text: "2ème exportateur mondial de services et produits agricoles." },
        { icon: Award, text: "Place financière majeure : Paris (La Défense)." }
      ]
    }
  };

  return (
    <div className="w-full bg-surface p-6 rounded-3xl border border-border shadow-2xl my-8 font-sans overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Le Rayonnement Français</h3>
        <p className="text-muted text-sm italic">"La France est une puissance d'équilibre, unie par son histoire et son influence."</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        {/* INTERACTIVE MAP COMPONENT */}
        <div className="relative aspect-video bg-blue-950/20 rounded-2xl border border-blue-500/20 overflow-hidden group">
          <svg viewBox="0 0 200 100" className="w-full h-full p-4 transition-transform duration-700 group-hover:scale-105">
             {/* SIMPLIFIED WORLD */}
             <path d="M 50 20 Q 80 10 110 30 T 130 20 M 20 50 Q 40 70 60 90 T 80 80 M 140 20 Q 180 10 190 40 T 170 80" fill="none" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 2" />
             
             {/* INFLUENCE AREAS */}
             <AnimatePresence mode="wait">
               {activeTab === 'soft' && (
                 <motion.path 
                    key="soft-path" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} exit={{ opacity: 0 }}
                    d="M 90 20 Q 110 50 120 80 M 40 80 Q 60 90 80 80" fill="none" stroke="#60a5fa" strokeWidth="15" strokeLinecap="round" 
                 />
               )}
               {activeTab === 'hard' && (
                 <motion.g key="hard-points" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <circle cx="100" cy="25" r="2" fill="#ef4444" /> {/* Metropole */}
                    <circle cx="115" cy="45" r="1.5" fill="#ef4444" /> {/* Djibouti */}
                    <circle cx="170" cy="70" r="1.5" fill="#ef4444" /> {/* Pacifique */}
                    <circle cx="50" cy="80" r="1.5" fill="#ef4444" /> {/* Antilles */}
                 </motion.g>
               )}
             </AnimatePresence>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-40" />
          <div className="absolute bottom-4 left-4 right-4 bg-surface/80 backdrop-blur-md border border-border/50 p-3 rounded-xl flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
             <span className="text-[10px] text-gray-300 font-medium uppercase tracking-widest">{content[activeTab].mapInfo}</span>
          </div>
        </div>

        {/* CONTROLS & INFO */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-500 ${
                    isActive 
                      ? `${tab.bg} ${tab.border} ${tab.color} scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)]` 
                      : 'bg-surface border-border text-muted hover:border-muted hover:scale-105'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-bold text-sm tracking-tight">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`p-6 rounded-2xl border ${tabs.find(t => t.id === activeTab)?.border} bg-gradient-to-br from-surface to-surface-light shadow-inner`}
            >
              <h4 className={`text-xl font-black mb-6 flex items-center gap-3 ${tabs.find(t => t.id === activeTab)?.color}`}>
                <div className={`p-2 rounded-lg ${tabs.find(t => t.id === activeTab)?.bg}`}>
                   {React.createElement(tabs.find(t => t.id === activeTab)?.icon || Shield, { className: "w-5 h-5" })}
                </div>
                {content[activeTab].title}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content[activeTab].items.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-surface/50 border border-border/30 hover:shadow-lg transition-all group"
                    >
                      <div className={`mt-1 p-2 rounded-lg ${tabs.find(t => t.id === activeTab)?.bg} group-hover:scale-110 transition-transform`}>
                        <ItemIcon className={`w-4 h-4 ${tabs.find(t => t.id === activeTab)?.color}`} />
                      </div>
                      <span className="text-xs text-gray-300 leading-relaxed font-medium">{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
