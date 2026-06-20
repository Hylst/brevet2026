import React from 'react';
import { motion } from 'motion/react';

export const EmancipationFemmesSVG: React.FC = () => {
  const milestones = [
    { year: 1944, title: "Droit de vote", color: "#3b82f6" },
    { year: 1965, title: "Indépendance", desc: "financière (Banque, travail)", color: "#8b5cf6" },
    { year: 1967, title: "Loi Neuwirth", desc: "Contraception (Pilule)", color: "#ec4899" },
    { year: 1975, title: "Loi Veil", desc: "Légalisation de l'IVG", color: "#f43f5e" }
  ];

  return (
    <div className="w-full flex justify-center py-6 overflow-hidden">
      <div className="relative w-full max-w-2xl">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {milestones.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div 
                key={item.year}
                className={`flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'} relative`}>
                  {/* Circle on timeline */}
                  <div 
                    className="absolute top-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-slate-800 transform -translate-y-1/2 flex items-center justify-center z-10"
                    style={{ backgroundColor: item.color, [isLeft ? 'right' : 'left']: '-3.5rem' }}
                  ></div>

                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.year}
                    </span>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">{item.title}</h4>
                    {item.desc && <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
