import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Maximize, ArrowDownLeft, ArrowUpRight, Sun, Layers, LucideProps } from 'lucide-react';

export const ImageVocabSVG: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'angle' | 'cadre' | 'lumiere'>('angle');
  const [option, setOption] = useState(0);

  const angleOptions = [
    { name: 'Plongée', desc: 'La caméra est au-dessus du sujet. Écrase le personnage, donne une impression de faiblesse.', icon: <ArrowDownLeft /> },
    { name: 'Contre-Plongée', desc: 'La caméra est en dessous du sujet. Magnifie le personnage, donne une impression de puissance.', icon: <ArrowUpRight /> },
    { name: 'Angle de vue frontal', desc: 'À hauteur d\'yeux. Neutre et réaliste.', icon: <Camera /> }
  ];

  const cadreOptions = [
    { name: 'Plan d\'ensemble', desc: 'Cadre large montrant tout le décor.', icon: <Maximize /> },
    { name: 'Plan rapproché', desc: 'Coupe au niveau de la taille, se focalise sur le personnage.', icon: <Layers /> },
    { name: 'Gros plan', desc: 'Focalise sur le visage ou un détail précis.', icon: <Layers /> }
  ];

  const currentOptions = activeTab === 'angle' ? angleOptions : activeTab === 'cadre' ? cadreOptions : [];

  return (
    <div className="my-8 bg-surface/50 p-6 rounded-3xl border border-border overflow-hidden">
      <h3 className="text-center font-black text-foreground mb-8 uppercase tracking-widest italic">Le Vocabulaire de l'Image</h3>

      <div className="flex justify-center gap-2 mb-8 p-1 bg-background rounded-2xl border border-border w-fit mx-auto">
        {(['angle', 'cadre', 'lumiere'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setOption(0); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${activeTab === tab ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-foreground'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Visual Preview */}
        <div className="relative aspect-video bg-background rounded-2xl border-4 border-surface overflow-hidden shadow-2xl flex items-center justify-center group">
          {/* Rule of Thirds Grid Overlay */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-20">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={i < 2 ? "border-r border-muted-foreground" : "border-b border-muted-foreground col-span-3"} />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${option}`}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -10 }}
              className="flex flex-col items-center gap-4"
            >
              {activeTab === 'angle' && (
                <div className="relative">
                  <motion.div
                    animate={{ 
                      y: option === 0 ? 40 : option === 1 ? -40 : 0,
                      rotateX: option === 0 ? 30 : option === 1 ? -30 : 0 
                    }}
                    className="w-32 h-32 bg-primary/20 rounded-2xl border-2 border-primary flex items-center justify-center text-primary"
                  >
                    <UserIcon size={64} />
                  </motion.div>
                  <div className="absolute -top-4 -left-4 bg-background p-2 rounded-lg border border-border shadow-md">
                     {React.cloneElement(angleOptions[option].icon as React.ReactElement<LucideProps>, { size: 16 })}
                  </div>
                </div>
              )}

              {activeTab === 'cadre' && (
                <motion.div
                  animate={{ scale: option === 0 ? 0.5 : option === 1 ? 1 : 2 }}
                  className="w-48 h-48 bg-primary/20 rounded-full border-2 border-primary flex items-center justify-center text-primary"
                >
                  <UserIcon size={80} />
                </motion.div>
              )}

              {activeTab === 'lumiere' && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div 
                    animate={{ opacity: 1 }}
                    className="w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl absolute"
                  />
                  <Sun size={100} className="text-yellow-500 relative z-10" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Camera UI Overlay */}
          <div className="absolute inset-4 border border-white/20 rounded-lg pointer-events-none">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/40" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/40" />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white/80 font-mono flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            REC 00:12:44
          </div>
        </div>

        {/* Controls/Info */}
        <div className="space-y-4">
          {activeTab !== 'lumiere' ? (
            currentOptions.map((opt, i) => (
              <button
                key={opt.name}
                onClick={() => setOption(i)}
                className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex gap-4 items-start ${option === i ? 'bg-primary/10 border-primary' : 'bg-background border-border hover:border-primary/30'}`}
              >
                <div className={`p-2 rounded-lg shrink-0 ${option === i ? 'bg-primary text-white' : 'bg-surface text-muted'}`}>
                  {React.cloneElement(opt.icon as React.ReactElement<LucideProps>, { size: 16 })}
                </div>
                <div>
                  <h4 className={`font-black text-sm uppercase ${option === i ? 'text-primary' : 'text-foreground'}`}>{opt.name}</h4>
                  <p className="text-xs text-muted mt-1 leading-relaxed">{opt.desc}</p>
                </div>
              </button>
            ))
          ) : (
             <div className="p-6 bg-background rounded-2xl border border-border shadow-sm">
                <h4 className="font-black text-primary uppercase mb-4 italic">La Lumière</h4>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-xs text-muted leading-relaxed">
                    <span className="text-primary font-bold">●</span>
                    <span>**Lumière naturelle** : Réaliste, banale.</span>
                  </li>
                  <li className="flex gap-2 text-xs text-muted leading-relaxed">
                    <span className="text-primary font-bold">●</span>
                    <span>**Clair-obscur** : Fort contraste entre ombre et lumière (ambiance dramatique).</span>
                  </li>
                  <li className="flex gap-2 text-xs text-muted leading-relaxed">
                    <span className="text-primary font-bold">●</span>
                    <span>**Contre-jour** : Source de lumière derrière le sujet (silhouette).</span>
                  </li>
                </ul>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

const UserIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
