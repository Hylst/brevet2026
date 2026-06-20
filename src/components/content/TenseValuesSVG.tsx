import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, History, FastForward, Play } from 'lucide-react';

export const TenseValuesSVG: React.FC = () => {
    const [selectedTense, setSelectedTense] = useState<'present' | 'imparfait' | 'passe-simple'>('present');

    const data = {
        present: {
            title: 'Présent de l\'indicatif',
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            values: [
                { label: 'Énonciation', desc: 'Ce qui se passe maintenant.', ex: 'Je "lis" cette fiche.' },
                { label: 'Vérité générale', desc: 'Ce qui est toujours vrai.', ex: 'La Terre "tourne".' },
                { label: 'Habitude', desc: 'Ce qui se répète.', ex: 'Il "court" tous les matins.' },
                { label: 'Narration', desc: 'Rendre un récit plus vivant.', ex: 'Soudain, il "surgit".' }
            ]
        },
        imparfait: {
            title: 'Imparfait',
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
            values: [
                { label: 'Description', desc: 'Décor, portraits.', ex: 'La mer "était" calme.' },
                { label: 'Habitude passée', desc: 'Actions répétées hier.', ex: 'Je "jouais" souvent ici.' },
                { label: 'Arrière-plan', desc: 'Action longue non délimitée.', ex: 'Il "pleuvait" depuis une heure.' }
            ]
        },
        'passe-simple': {
            title: 'Passé Simple',
            color: 'text-orange-500',
            bg: 'bg-orange-500/10',
            values: [
                { label: 'Action brève', desc: 'Action soudaine, terminée.', ex: 'Il "partit" brusquement.' },
                { label: 'Actions successives', desc: 'Une suite d\'événements.', ex: 'Il entra, "s\'assit" et but.' },
                { label: 'Premier plan', desc: 'L\'action qui fait avancer le récit.', ex: 'Soudain, il "cria".' }
            ]
        }
    };

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border shadow-md">
            <h3 className="text-lg font-bold text-center mb-6 flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Valeurs des Temps du Récit
            </h3>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {Object.keys(data).map((key) => (
                    <button
                        key={key}
                        onClick={() => setSelectedTense(key as any)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                            selectedTense === key 
                            ? `${data[key as keyof typeof data].bg} ${data[key as keyof typeof data].color} border-current scale-105` 
                            : 'bg-background text-muted border-border hover:border-muted'
                        }`}
                    >
                        {data[key as keyof typeof data].title}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4">
                {data[selectedTense].values.map((v, i) => (
                    <motion.div
                        key={v.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border group"
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${data[selectedTense].bg} ${data[selectedTense].color}`}>
                            <Play className="w-3 h-3 fill-current" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`text-sm font-bold ${data[selectedTense].color}`}>{v.label}</span>
                            </div>
                            <p className="text-xs text-muted mb-2">{v.desc}</p>
                            <div className="text-[10px] font-mono bg-surface p-2 rounded border border-border/50 text-foreground">
                                <span className="opacity-50 mr-2">Ex:</span> {v.ex}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
