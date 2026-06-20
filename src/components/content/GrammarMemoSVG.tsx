import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, User, Activity, Star } from 'lucide-react';

export const GrammarMemoSVG: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'natures' | 'functions'>('natures');
    
    const natures = [
        { name: 'Nom', icon: <Book className="w-4 h-4" />, color: 'bg-blue-500', desc: 'Désigne une personne, un lieu, une chose.', examples: 'chat, liberté, Paris' },
        { name: 'Verbe', icon: <Activity className="w-5 h-4" />, color: 'bg-red-500', desc: 'Exprime une action ou un état.', examples: 'manger, être, devenir' },
        { name: 'Adjectif', icon: <Star className="w-4 h-4" />, color: 'bg-yellow-500', desc: 'Apporte une précision sur le nom.', examples: 'petit, bleu, étrange' },
        { name: 'Pronom', icon: <User className="w-4 h-4" />, color: 'bg-purple-500', desc: 'Remplace un nom pour éviter les répétitions.', examples: 'il, nous, lequel' },
    ];

    const functions = [
        { name: 'Sujet', color: 'bg-orange-500', desc: 'Fait l\'action ou subit l\'état du verbe.', examples: '"Le chat" dort.' },
        { name: 'COD', color: 'bg-green-500', desc: 'Complément d\'objet direct (répond à QUI? QUOI?).', examples: 'Il mange "une pomme".' },
        { name: 'COI', color: 'bg-teal-500', desc: 'Complément d\'objet indirect (répond à À QUI? À QUOI?).', examples: 'Je téléphone "à Paul".' },
        { name: 'Attribut', color: 'bg-pink-500', desc: 'Donne une caractéristique du sujet via un verbe d\'état.', examples: 'Il est "médecin".' },
    ];

    return (
        <div className="my-8 bg-surface/50 p-6 rounded-2xl border border-border shadow-lg">
            <div className="flex justify-center gap-4 mb-8">
                <button 
                    onClick={() => setActiveTab('natures')}
                    className={`px-4 py-2 rounded-xl font-bold transition-all ${activeTab === 'natures' ? 'bg-primary text-white shadow-lg scale-105' : 'bg-background text-muted hover:bg-surface'}`}
                >
                    Natures (Qui suis-je ?)
                </button>
                <button 
                    onClick={() => setActiveTab('functions')}
                    className={`px-4 py-2 rounded-xl font-bold transition-all ${activeTab === 'functions' ? 'bg-primary text-white shadow-lg scale-105' : 'bg-background text-muted hover:bg-surface'}`}
                >
                    Fonctions (Que fais-je ?)
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimatePresence mode="wait">
                    {(activeTab === 'natures' ? natures : functions).map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background p-4 rounded-xl border border-border flex flex-col gap-2 hover:border-primary/30 transition-colors"
                        >
                            <div className="flex items-center gap-2">
                                <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center text-white shadow-sm`}>
                                    {('icon' in item) ? (item.icon as React.ReactNode) : <div className="font-bold text-xs">{item.name[0]}</div>}
                                </div>
                                <h4 className="font-bold text-foreground">{item.name}</h4>
                            </div>
                            <p className="text-xs text-muted leading-relaxed italic">{item.desc}</p>
                            <div className="mt-2 pt-2 border-t border-border/50 text-[10px] font-medium text-primary">
                                <span className="uppercase text-[8px] opacity-60 mr-2 tracking-widest">Exemple:</span>
                                {item.examples}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="mt-6 text-center text-[10px] text-muted-foreground italic">
                {activeTab === 'natures' 
                    ? "La nature ne change jamais (c'est l'identité fixée dans le dictionnaire)." 
                    : "La fonction change selon la place du mot dans la phrase."}
            </div>
        </div>
    );
};
