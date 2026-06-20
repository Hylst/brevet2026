import React from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, BarChart3, Radio } from 'lucide-react';

export const SignauxSonoresSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-4 md:p-6 rounded-2xl border border-border shadow-lg my-8 text-foreground font-sans overflow-hidden">
      <h3 className="text-xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        <Radio className="text-indigo-400"/> Caractéristiques d'un Son
      </h3>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
         
         {/* Colonne 1 : Fréquence (Hauteur) */}
         <div className="flex-1 bg-blue-900/10 border border-blue-500/30 p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-blue-400 mb-2 flex items-center gap-2">
                <BarChart3 className="w-5 h-5"/> La Fréquence (Hertz - Hz)
            </h4>
            <p className="text-sm text-blue-200 mb-6">Détermine la HAUTEUR du son (grave ou aigu). C'est le nombre de vibrations par seconde.</p>
            
            <div className="space-y-6">
                <div className="bg-surface border border-blue-500/20 p-4 rounded-xl shadow-sm text-center">
                    <div className="font-bold mb-2">Basse fréquence (ex: 50 Hz) = <span className="text-blue-500">Son GRAVE</span></div>
                    <div className="h-12 flex items-center justify-center space-x-2 w-full overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                           <motion.div key={`low-${i}`} animate={{ height: [10, 40, 10] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }} className="w-4 bg-blue-500 rounded-full" />
                        ))}
                    </div>
                </div>

                <div className="bg-surface border border-blue-500/20 p-4 rounded-xl shadow-sm text-center">
                    <div className="font-bold mb-2">Haute fréquence (ex: 5000 Hz) = <span className="text-cyan-500">Son AIGU</span></div>
                    <div className="h-12 flex items-center justify-center space-x-1 w-full overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                           <motion.div key={`high-${i}`} animate={{ height: [10, 40, 10] }} transition={{ repeat: Infinity, duration: 0.3, delay: i * 0.05 }} className="w-1.5 bg-cyan-500 rounded-full" />
                        ))}
                    </div>
                </div>
            </div>
         </div>

         {/* Colonne 2 : Niveau sonore (Volume) */}
         <div className="flex-1 bg-red-900/10 border border-red-500/30 p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-red-400 mb-2 flex items-center gap-2">
                <Volume2 className="w-5 h-5"/> Le Niveau Sonore (Décibels - dB)
            </h4>
            <p className="text-sm text-red-200 mb-6">Détermine l'INTENSITÉ du son (faible ou fort). C'est l'amplitude de la vibration.</p>
            
            <div className="space-y-6">
                <div className="bg-surface border border-red-500/20 p-4 rounded-xl shadow-sm text-center">
                    <div className="font-bold mb-2">Faible amplitude (ex: 20 dB) = <span className="text-emerald-500">Son FAIBLE</span></div>
                    <div className="h-12 flex items-center justify-center space-x-2 w-full">
                        <VolumeX className="text-emerald-500 w-8 h-8"/>
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="flex space-x-1">
                            <div className="h-4 w-2 bg-emerald-500 rounded-full" />
                            <div className="h-6 w-2 bg-emerald-500 rounded-full" />
                            <div className="h-4 w-2 bg-emerald-500 rounded-full" />
                        </motion.div>
                    </div>
                </div>

                <div className="bg-surface border border-red-500/20 p-4 rounded-xl shadow-sm text-center">
                    <div className="font-bold mb-2">Forte amplitude (ex: &gt; 85 dB) = <span className="text-red-500">Son FORT (Dangereux !)</span></div>
                    <div className="h-12 flex items-center justify-center space-x-4 w-full">
                        <Volume2 className="text-red-500 w-10 h-10"/>
                        <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 0.5 }} className="flex space-x-1">
                            <div className="h-8 w-3 bg-red-500 rounded-full" />
                            <div className="h-12 w-3 bg-red-500 rounded-full" />
                            <div className="h-8 w-3 bg-red-500 rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </div>
         </div>

      </div>
    </div>
  );
};
