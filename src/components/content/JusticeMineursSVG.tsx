import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const JusticeMineursSVG: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'police' | 'correctionnel' | 'assises' | 'mineurs'>('mineurs');

  const tabs = [
    { id: 'police', label: 'Contraventions', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200', highlight: false },
    { id: 'correctionnel', label: 'Délits', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200', highlight: false },
    { id: 'assises', label: 'Crimes', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200', highlight: false },
    { id: 'mineurs', label: 'Justice des mineurs', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200', highlight: true }
  ] as const;

  return (
    <div className="w-full flex justify-center py-4 bg-slate-50 dark:bg-slate-900 rounded-xl my-6 flex-col items-center">
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              activeTab === tab.id 
                ? `${tab.color} ring-2 ring-offset-2 ring-slate-400 dark:ring-slate-600` 
                : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
            } ${tab.highlight && activeTab !== tab.id ? 'border-2 border-blue-400' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-lg h-64 bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 overflow-hidden flex flex-col justify-center items-center">
        <AnimatePresence mode="wait">
          {activeTab === 'police' && (
            <motion.div key="police" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">📝</div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">Tribunal de Police</h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium">Juge les contraventions de 5ème classe.</p>
              <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg text-sm text-left">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Infractions :</strong> Violences légères, tapage nocturne...</li>
                  <li><strong>Sanctions :</strong> Amendes (jusqu'à 3000€), suspension de permis...</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === 'correctionnel' && (
            <motion.div key="correctionnel" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto text-3xl">⚖️</div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">Tribunal Correctionnel</h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium">Juge les délits (infractions graves).</p>
              <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg text-sm text-left">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Infractions :</strong> Vol, harcèlement, violences graves...</li>
                  <li><strong>Sanctions :</strong> Prison (jusqu'à 10 ans), très fortes amendes, TIG...</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === 'assises' && (
            <motion.div key="assises" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-3xl">🏛️</div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">Cour d'Assises</h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium">Juge les crimes (infractions les plus graves).</p>
              <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg text-sm text-left">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Composition :</strong> 3 magistrats + un jury populaire de 6 citoyens.</li>
                  <li><strong>Infractions :</strong> Meurtre, viol, terrorisme...</li>
                  <li><strong>Sanctions :</strong> Réclusion criminelle (jusqu'à perpétuité).</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === 'mineurs' && (
            <motion.div key="mineurs" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center space-y-4 w-full">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto text-3xl">🏫</div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">Justice des Mineurs</h3>
              <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-sm">Le primat de l'éducatif sur le répressif</p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg text-sm text-left border border-blue-200 dark:border-blue-800">
                <ul className="list-disc pl-5 space-y-1 dark:text-slate-300">
                  <li><strong>Acteurs :</strong> Juge des enfants, Tribunal pour enfants.</li>
                  <li><strong>Principe :</strong> L'excuse de minorité (sanctions divisées par deux max).</li>
                  <li><strong>Mesures :</strong> Prises en charge éducatives, réparation, Centres Éducatifs Fermés (CEF).</li>
                  <li><strong>Huis-clos :</strong> Audience sans le public pour protéger l'anonymat.</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
