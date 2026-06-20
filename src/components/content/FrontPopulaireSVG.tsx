import React from 'react';
import { motion } from 'motion/react';
import { Users, CalendarCheck, AlertTriangle, Waves } from 'lucide-react';

export const FrontPopulaireSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 font-sans">
      <div className="flex items-center gap-3 mb-6 justify-center">
        <Users className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-bold text-white mb-0 mt-0">Le Front Populaire (1936)</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Carte 1: Crise et montée du fascisme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-red-900/20 border border-red-500/40 rounded-xl p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h4 className="font-bold text-red-200 text-sm">1. La crise des années 1930</h4>
          </div>
          <svg viewBox="0 0 200 120" className="w-full mb-2">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M 20 100 Q 60 80 100 90 T 180 100"
              fill="none" stroke="#ef4444" strokeWidth="2"
            />
            <text x="100" y="20" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">Chômage ↑</text>
            <rect x="20" y="40" width="15" height="25" fill="#7f1d1d" rx="2" />
            <rect x="45" y="30" width="15" height="35" fill="#7f1d1d" rx="2" />
            <rect x="70" y="35" width="15" height="30" fill="#7f1d1d" rx="2" />
            <rect x="100" y="45" width="15" height="20" fill="#b91c1c" rx="2" />
            <rect x="130" y="25" width="15" height="40" fill="#b91c1c" rx="2" />
            <rect x="160" y="20" width="15" height="45" fill="#dc2626" rx="2" />
          </svg>
          <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
            <li>Crise de 1929 arrive en France en 1931</li>
            <li>Chômage de masse, faillites</li>
            <li>Montée des ligues fascistes</li>
            <li>Émeute du 6 février 1934</li>
          </ul>
        </motion.div>

        {/* Carte 2: Le Front Populaire au pouvoir */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-pink-900/20 border border-pink-500/40 rounded-xl p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <CalendarCheck className="w-5 h-5 text-pink-400" />
            <h4 className="font-bold text-pink-200 text-sm">2. Les Accords Matignon (juin 1936)</h4>
          </div>
          <svg viewBox="0 0 200 120" className="w-full mb-2">
            {/* Poignée de main stylisée */}
            <motion.g
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <circle cx="80" cy="60" r="20" fill="#fbcfe8" opacity="0.3" />
              <circle cx="120" cy="60" r="20" fill="#fbcfe8" opacity="0.3" />
              <path d="M 85 50 Q 100 45 115 50" fill="none" stroke="#f9a8d4" strokeWidth="3" />
              <path d="M 85 70 Q 100 75 115 70" fill="none" stroke="#f9a8d4" strokeWidth="3" />
              <text x="100" y="95" textAnchor="middle" fill="#f9a8d4" fontSize="8">Main dans la main</text>
            </motion.g>
            {/* Icônes sociales */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <rect x="10" y="10" width="30" height="18" rx="3" fill="#fbcfe8" />
              <text x="25" y="22" textAnchor="middle" fill="#831843" fontSize="7" fontWeight="bold">40h</text>
              <rect x="160" y="10" width="30" height="18" rx="3" fill="#fbcfe8" />
              <text x="175" y="22" textAnchor="middle" fill="#831843" fontSize="7" fontWeight="bold">Congés</text>
              <rect x="10" y="35" width="30" height="18" rx="3" fill="#fbcfe8" />
              <text x="25" y="47" textAnchor="middle" fill="#831843" fontSize="7" fontWeight="bold">+ Salaire</text>
            </motion.g>
          </svg>
          <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
            <li>Léon Blum (SFIO) chef du gouvernement</li>
            <li>Semaine de 40h (au lieu de 48h)</li>
            <li>2 semaines de congés payés</li>
            <li>Hausse des salaires (7 à 15%)</li>
            <li>Droits syndicaux reconnus</li>
          </ul>
        </motion.div>

        {/* Carte 3: L'échec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800/40 border border-gray-600 rounded-xl p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <Waves className="w-5 h-5 text-gray-400" />
            <h4 className="font-bold text-gray-200 text-sm">3. L'échec du Front Populaire</h4>
          </div>
          <svg viewBox="0 0 200 120" className="w-full mb-2">
            {/* Ligne de temps descendante */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              d="M 20 30 L 100 60 L 180 90"
              fill="none" stroke="#9ca3af" strokeWidth="2" strokeDasharray="5 3"
            />
            <circle cx="20" cy="30" r="6" fill="#fbbf24" />
            <text x="20" y="20" textAnchor="middle" fill="#fbbf24" fontSize="8">1936</text>
            <circle cx="100" cy="60" r="6" fill="#f97316" />
            <text x="100" y="50" textAnchor="middle" fill="#f97316" fontSize="8">1937</text>
            <circle cx="180" cy="90" r="6" fill="#ef4444" />
            <text x="180" y="80" textAnchor="middle" fill="#ef4444" fontSize="8">1938</text>
            <motion.text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              x="100" y="115" textAnchor="middle" fill="#9ca3af" fontSize="9"
            >Démission de Blum</motion.text>
          </svg>
          <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
            <li>Crise économique s'aggrave</li>
            <li>Chômage continue d'augmenter</li>
            <li>Guerre d'Espagne divise la gauche</li>
            <li>Blum démissionne en 1937</li>
            <li>Fin du FP en 1938 (Daladier)</li>
          </ul>
        </motion.div>
      </div>

      <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
        <p className="text-xs text-yellow-200 text-center">
          <strong>À retenir :</strong> Le Front Populaire (1936) est une alliance des gauches qui a conquis les premiers grands droits sociaux pour les travailleurs français (congés payés, semaine de 40h, hausse des salaires), mais a échoué face à la crise économique et à la montée des périls en Europe.
        </p>
      </div>
    </div>
  );
};
