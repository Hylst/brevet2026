import React from 'react';
import { motion } from 'motion/react';
import { FileSearch, Clock, User, FileType, MessageSquare, Anchor } from 'lucide-react';

export const MethodologieAnalyseSVG: React.FC = () => {
  return (
    <div className="w-full bg-surface p-6 rounded-2xl border border-border shadow-lg my-8 font-sans">
      
      <div className="text-center mb-8">
         <h3 className="text-2xl font-bold text-white mb-2 flex justify-center items-center gap-2"><FileSearch className="text-primary"/> Analyser un document</h3>
         <p className="text-muted text-sm">La méthode DANSS pour présenter un document au Brevet.</p>
      </div>

      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        
        <motion.div whileHover={{ x: 5 }} className="bg-blue-900/30 border border-blue-500/30 p-4 rounded-xl flex gap-4 items-center">
          <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center font-bold text-xl text-white">D</div>
          <div className="flex-1">
            <h4 className="font-bold text-white flex items-center gap-2"><Clock className="w-4 h-4"/> Date</h4>
            <p className="text-xs text-gray-300">Quand le document a-t-il été créé ou publié ? (Quelle époque, quel contexte historique ?)</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ x: 5 }} className="bg-red-900/30 border border-red-500/30 p-4 rounded-xl flex gap-4 items-center">
          <div className="w-12 h-12 rounded-full bg-red-800 flex items-center justify-center font-bold text-xl text-white">A</div>
          <div className="flex-1">
            <h4 className="font-bold text-white flex items-center gap-2"><User className="w-4 h-4"/> Auteur</h4>
            <p className="text-xs text-gray-300">Qui est l'auteur ? (Un journaliste, un témoin, un historien, un personnage politique ?)</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ x: 5 }} className="bg-yellow-900/30 border border-yellow-500/30 p-4 rounded-xl flex gap-4 items-center">
          <div className="w-12 h-12 rounded-full bg-yellow-800 flex items-center justify-center font-bold text-xl text-white">N</div>
          <div className="flex-1">
            <h4 className="font-bold text-white flex items-center gap-2"><FileType className="w-4 h-4"/> Nature</h4>
            <p className="text-xs text-gray-300">Quel est le type de document ? (Un texte de loi, une affiche de propagande, une photographie, un article de presse, une lettre ?)</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ x: 5 }} className="bg-green-900/30 border border-green-500/30 p-4 rounded-xl flex gap-4 items-center">
          <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center font-bold text-xl text-white">S</div>
          <div className="flex-1">
            <h4 className="font-bold text-white flex items-center gap-2"><MessageSquare className="w-4 h-4"/> Sujet</h4>
            <p className="text-xs text-gray-300">De quoi parle le document en une phrase ? (Le thème principal).</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ x: 5 }} className="bg-purple-900/30 border border-purple-500/30 p-4 rounded-xl flex gap-4 items-center">
          <div className="w-12 h-12 rounded-full bg-purple-800 flex items-center justify-center font-bold text-xl text-white">S</div>
          <div className="flex-1">
            <h4 className="font-bold text-white flex items-center gap-2"><Anchor className="w-4 h-4"/> Source</h4>
            <p className="text-xs text-gray-300">D'où vient le document ? (Tiré d'un livre, d'un journal, d'un musée ?)</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
