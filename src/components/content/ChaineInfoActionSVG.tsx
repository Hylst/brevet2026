import React from 'react';
import { motion } from 'motion/react';
import { Eye, Cpu, Wifi, Zap, Activity, Settings, ArrowRight } from 'lucide-react';

export const ChaineInfoActionSVG: React.FC = () => {
  return (
    <div className="my-8 p-6 rounded-2xl bg-surface/50 border border-border shadow-lg">
      <h3 className="text-xl font-bold text-primary mb-6 text-center">Structure d'un Système Automatisé</h3>
      
      <div className="flex flex-col gap-8 md:p-4">
        {/* Chaîne d'information */}
        <div className="relative p-6 rounded-xl border border-info/30 bg-info/5">
          <h4 className="text-sm font-bold text-info uppercase tracking-widest absolute -top-3 left-6 bg-background px-2">Chaîne d'Information (Le Cerveau)</h4>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
            <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-1/3 p-4 rounded-lg bg-surface border border-border text-center shadow-sm relative">
              <Eye className="w-8 h-8 text-info mx-auto mb-2" />
              <div className="font-bold">ACQUÉRIR</div>
              <div className="text-xs text-muted mt-1">(Capteurs, boutons)</div>
              <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-muted" />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-1/3 p-4 rounded-lg bg-surface border border-info/50 text-center shadow-md relative">
              <Cpu className="w-8 h-8 text-info mx-auto mb-2" />
              <div className="font-bold">TRAITER</div>
              <div className="text-xs text-muted mt-1">(Carte mère, microcontrôleur)</div>
              <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-muted" />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-1/3 p-4 rounded-lg bg-surface border border-border text-center shadow-sm relative">
              <Wifi className="w-8 h-8 text-info mx-auto mb-2" />
              <div className="font-bold">COMMUNIQUER</div>
              <div className="text-xs text-muted mt-1">(LEDs, écran, ordres)</div>
            </motion.div>
          </div>
        </div>

        {/* Flèche de lien entre les deux chaînes */}
        <div className="flex justify-center -my-6 z-10">
          <div className="bg-background px-4 text-xs font-bold text-muted flex items-center gap-2">
            ORDRES <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Chaîne d'énergie */}
        <div className="relative p-6 rounded-xl border border-warning/30 bg-warning/5">
          <h4 className="text-sm font-bold text-warning uppercase tracking-widest absolute -top-3 left-6 bg-background px-2">Chaîne d'Énergie (Les Muscles)</h4>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
            <motion.div whileHover={{ scale: 1.05 }} className="w-full p-4 rounded-lg bg-surface border border-border text-center shadow-sm relative">
              <Zap className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="font-bold">ALIMENTER</div>
              <div className="text-xs text-muted mt-1">(Prise, Pile)</div>
              <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-muted" />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} className="w-full p-4 rounded-lg bg-surface border border-border text-center shadow-sm relative">
              <Activity className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="font-bold">DISTRIBUER</div>
              <div className="text-xs text-muted mt-1">(Relais, Câbles)</div>
              <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-muted" />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} className="w-full p-4 rounded-lg bg-surface border border-warning/50 text-center shadow-md relative">
              <Settings className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="font-bold animate-pulse">CONVERTIR</div>
              <div className="text-xs text-muted mt-1">(Moteur, Ampoule)</div>
              <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-muted" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="w-full p-4 rounded-lg bg-surface border border-border text-center shadow-sm">
              <Settings className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="font-bold">TRANSMETTRE</div>
              <div className="text-xs text-muted mt-1">(Engrenages, Roues)</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
