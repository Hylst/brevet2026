import React, { useState, useEffect, useMemo } from 'react';
import { motion, Reorder } from 'motion/react';
import { CheckCircle, GripVertical, HelpCircle, PenTool } from 'lucide-react';
import clsx from 'clsx';
import { useGamificationStore } from '../../store/useGamificationStore';
import { useLessonProgress } from '../../contexts/LessonProgressContext';

// ---------------------------------------------------------
// 1. Memory Game
// ---------------------------------------------------------
export const MemoryGame = ({ pairs }: { pairs: string }) => {
  const [cards, setCards] = useState<any[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [isWon, setIsWon] = useState(false);
  const { addXP } = useGamificationStore();
  const progressCtx = useLessonProgress();
  
  // Use a stable ID for the requirements context based on pairs length (simplistic, but works for the current use cases)
  const gameId = useMemo(() => `memorygame_${typeof pairs === 'string' ? pairs.length : '1'}`, [pairs]);

  useEffect(() => {
    if (progressCtx) {
      progressCtx.registerRequirement(gameId);
    }
  }, [gameId, progressCtx]);

  useEffect(() => {
    if (progressCtx) {
      progressCtx.markCompleted(gameId, isWon);
    }
  }, [isWon, gameId, progressCtx]);

  useEffect(() => {
    try {
      const parsed = typeof pairs === 'string' ? JSON.parse(pairs) : pairs;
      const deck = parsed.flatMap((p: any, i: number) => {
        let val1 = '';
        let val2 = '';
        if (Array.isArray(p)) {
          val1 = p[0];
          val2 = p[1];
        } else if (p && typeof p === 'object') {
          val1 = p.card1 || p.text1 || '';
          val2 = p.card2 || p.text2 || '';
        }
        return [
          { id: `${i}-a`, pairId: i, text: val1 },
          { id: `${i}-b`, pairId: i, text: val2 }
        ];
      }).sort(() => Math.random() - 0.5);
      setCards(deck);
      setFlipped([]);
      setMatched([]);
      setIsWon(false);
    } catch (e) {
      console.error("Invalid pairs format for MemoryGame", e);
    }
  }, [pairs]);

  const handleCardClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(cards[index].pairId)) return;
    
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].pairId === cards[second].pairId) {
        const newMatched = [...matched, cards[first].pairId];
        setMatched(newMatched);
        setFlipped([]);
        if (newMatched.length === cards.length / 2) {
          setIsWon(true);
          addXP(20);
        }
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="bg-surface/50 border border-border p-6 rounded-2xl my-8 shadow-sm">
      <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
        <HelpCircle className="w-5 h-5 text-primary"/> Jeu de Mémoire
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {cards.map((c, i) => {
          const isFlipped = flipped.includes(i) || matched.includes(c.pairId);
          return (
            <motion.div
              key={c.id}
              className="relative w-full h-24 sm:h-32 cursor-pointer perspective-1000"
              onClick={() => handleCardClick(i)}
            >
              <motion.div
                className="w-full h-full preserve-3d duration-500"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
              >
                {/* Front (Hidden state) */}
                <div className="absolute inset-0 backface-hidden bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="text-primary text-3xl font-black opacity-50">?</span>
                </div>
                {/* Back (Revealed state) */}
                <div 
                  className={clsx(
                    "absolute inset-0 backface-hidden rounded-xl p-3 flex items-center justify-center text-center text-sm sm:text-base font-bold border shadow-sm",
                    matched.includes(c.pairId) ? "bg-success/20 border-success text-success" : "bg-surface border-border text-foreground"
                  )}
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <span className="line-clamp-4">{c.text}</span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      {isWon && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-success/20 text-success rounded-xl font-bold flex items-center justify-center gap-2">
          <CheckCircle className="w-6 h-6" /> Félicitations ! Tout est mémorisé (+20 XP)
        </motion.div>
      )}
    </div>
  );
};

// ---------------------------------------------------------
// 2. Sortable List
// ---------------------------------------------------------
export const SortableList = ({ items, title = "Remets les éléments dans l'ordre" }: { items: any, title?: string }) => {
  const originalItems = useMemo(() => {
    try { return typeof items === 'string' ? JSON.parse(items) : items; } catch { return []; }
  }, [items]);

  const isMatchingMode = originalItems.length > 0 && typeof originalItems[0] === 'object' && originalItems[0].match !== undefined;

  const [currentOrder, setCurrentOrder] = useState<any[]>([]);
  const [isWon, setIsWon] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const { addXP } = useGamificationStore();
  const progressCtx = useLessonProgress();
  
  const sortableId = useMemo(() => `sortablelist_${originalItems.length}_${typeof title === 'string' ? title.length : ''}`, [originalItems, title]);

  useEffect(() => {
    if (progressCtx) {
      progressCtx.registerRequirement(sortableId);
    }
  }, [sortableId, progressCtx]);

  useEffect(() => {
    if (progressCtx) {
      progressCtx.markCompleted(sortableId, isWon);
    }
  }, [isWon, sortableId, progressCtx]);

  useEffect(() => {
    if (originalItems.length > 0) {
        let shuffled = [...originalItems].sort(() => Math.random() - 0.5);
        if (shuffled.length > 1 && JSON.stringify(shuffled) === JSON.stringify(originalItems)) {
            shuffled.reverse();
        }
        setCurrentOrder(shuffled);
    }
  }, [originalItems]);

  const checkOrder = () => {
    let isCorrect = false;
    if (isMatchingMode) {
      isCorrect = currentOrder.every((item, i) => item.match === originalItems[i].match);
    } else {
      isCorrect = currentOrder.every((item, i) => item === originalItems[i]);
    }
    
    if (isCorrect && !isWon) {
      setIsWon(true);
      setErrorVisible(false);
      addXP(15);
    } else {
      setErrorVisible(true);
      setTimeout(() => setErrorVisible(false), 2000);
    }
  };

  return (
    <div className="bg-surface/50 border border-border p-6 rounded-2xl my-8 shadow-sm">
      <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
        <GripVertical className="w-5 h-5 text-primary"/> {title}
      </h3>
      
      {isMatchingMode ? (
        <div className="bg-background/50 border border-border p-4 rounded-xl flex flex-col md:flex-row gap-4">
            <div className="flex flex-col space-y-2 flex-1 pt-[1px]">
              {originalItems.map((item: any, i: number) => (
                <div key={item.id || i} className="p-4 bg-surface border border-border rounded-xl flex items-center h-full min-h-[64px]">
                  <span className="font-medium text-foreground text-sm sm:text-base">{item.content}</span>
                </div>
              ))}
            </div>
            <Reorder.Group axis="y" values={currentOrder} onReorder={setCurrentOrder} className="space-y-2 flex-1">
              {currentOrder.map((item, i) => (
                <Reorder.Item 
                  key={item.id || item.match || i} 
                  value={item} 
                  className={clsx(
                      "p-4 bg-surface border rounded-xl flex items-center gap-3 cursor-grab active:cursor-grabbing shadow-sm transition-colors min-h-[64px]",
                      isWon ? "border-success bg-success/5" : "border-border hover:border-primary/50"
                  )}
                >
                  <GripVertical className={clsx("w-5 h-5 shrink-0", isWon ? "text-success" : "text-muted")} />
                  <span className="font-medium text-foreground text-sm sm:text-base">{item.match}</span>
                </Reorder.Item>
              ))}
            </Reorder.Group>
        </div>
      ) : (
        <div className="bg-background/50 border border-border p-2 rounded-xl">
            <Reorder.Group axis="y" values={currentOrder} onReorder={setCurrentOrder} className="space-y-2">
              {currentOrder.map((item, index) => {
                const itemKey = typeof item === 'object' ? (item.id || item.content || index) : item;
                const itemLabel = typeof item === 'object' ? (item.content || item.text || JSON.stringify(item)) : item;
                return (
                  <Reorder.Item 
                    key={itemKey} 
                    value={item} 
                    className={clsx(
                        "p-4 bg-surface border rounded-xl flex items-center gap-3 cursor-grab active:cursor-grabbing shadow-sm transition-colors",
                        isWon ? "border-success bg-success/5" : "border-border hover:border-primary/50"
                    )}
                  >
                    <GripVertical className={clsx("w-5 h-5 shrink-0", isWon ? "text-success" : "text-muted")} />
                    <span className="font-medium text-foreground">{itemLabel}</span>
                  </Reorder.Item>
                );
              })}
            </Reorder.Group>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button 
           type="button"
           onClick={checkOrder}
           disabled={isWon || currentOrder.length === 0}
           className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold disabled:opacity-50 transition-transform active:scale-95"
        >
          Valider
        </button>
        {isWon && <motion.span initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-success font-bold flex items-center gap-2"><CheckCircle className="w-5 h-5"/> Parfait ! C'est exact (+15 XP)</motion.span>}
        {errorVisible && !isWon && <span className="text-danger font-medium text-sm">Il y a des erreurs, réessaie !</span>}
      </div>
    </div>
  );
};

// ---------------------------------------------------------
// 3. Fill In The Blanks
// ---------------------------------------------------------
export const FillInTheBlanks = ({ text, title = "Texte à trous" }: { text: string, title?: string }) => {
  const { addXP } = useGamificationStore();
  const progressCtx = useLessonProgress();
  
  const fillId = useMemo(() => `fillin_${typeof text === 'string' ? text.length : '1'}`, [text]);
  
  const [parts, setParts] = useState<{type: 'text'|'blank', content: string, options?: string[], correct?: string}[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isChecked, setIsChecked] = useState(false);
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    if (progressCtx) {
      progressCtx.registerRequirement(fillId);
    }
  }, [fillId, progressCtx]);

  useEffect(() => {
    if (progressCtx) {
      progressCtx.markCompleted(fillId, isWon);
    }
  }, [isWon, fillId, progressCtx]);

  useEffect(() => {
    // Matches patterns like [Correct|Wrong1|Wrong2]
    const regex = /\[([^\]]+)\]/g;
    let lastIndex = 0;
    const newParts: any[] = [];
    
    let match;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        newParts.push({ type: 'text', content: text.substring(lastIndex, match.index) });
      }
      const opts = match[1].split('|');
      newParts.push({ 
        type: 'blank', 
        content: '', 
        correct: opts[0], // First option is ALWAYS the correct one by our convention
        options: [...opts].sort(() => Math.random() - 0.5) 
      });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      newParts.push({ type: 'text', content: text.substring(lastIndex) });
    }
    setParts(newParts);
    setAnswers({});
    setIsChecked(false);
    setIsWon(false);
  }, [text]);

  const handleSelect = (index: number, val: string) => {
    setAnswers(prev => ({...prev, [index]: val}));
    setIsChecked(false);
  };

  const validate = () => {
    let won = true;
    parts.forEach((p, i) => {
      if (p.type === 'blank') {
        if (answers[i] !== p.correct) won = false;
      }
    });
    setIsChecked(true);
    if (won && !isWon) {
       setIsWon(true);
       addXP(15);
    }
  }

  return (
    <div className="bg-surface/50 border border-border p-6 rounded-2xl my-8 shadow-sm text-foreground">
      <h3 className="font-bold text-lg mb-6 flex items-center gap-2"><PenTool className="w-5 h-5 text-primary"/> {title}</h3>
      <div className="text-base sm:text-lg leading-relaxed md:leading-loose">
        {parts.map((p, i) => {
          if (p.type === 'text') return <span key={i}>{p.content}</span>;
          
          const isCorrect = isChecked && answers[i] === p.correct;
          const isWrong = isChecked && answers[i] && answers[i] !== p.correct;

          return (
             <span key={i} className="inline-block mx-1">
                 <select 
                   value={answers[i] || ''}
                   onChange={(e) => handleSelect(i, e.target.value)}
                   className={clsx(
                     "px-2 py-1 min-w-[120px] border-b-2 font-bold outline-none cursor-pointer text-center appearance-none transition-colors duration-300",
                     isCorrect ? "border-success bg-success/10 text-success rounded-t-md" 
                     : isWrong ? "border-danger bg-danger/10 text-danger rounded-t-md" 
                     : "border-primary bg-primary/5 text-primary rounded-t-md"
                   )}
                 >
                   <option value="" disabled>...</option>
                   {p.options?.map(o => <option key={o} value={o}>{o}</option>)}
                 </select>
             </span>
          );
        })}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-4">
        <button 
           type="button"
           onClick={validate}
           disabled={isWon || Object.keys(answers).length < parts.filter(p=>p.type==='blank').length}
           className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold disabled:opacity-50 transition-transform active:scale-95"
        >
          Valider les réponses
        </button>
        {isWon && <motion.span initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-success font-bold flex items-center gap-2"><CheckCircle className="w-5 h-5"/> Excellent (+15 XP)</motion.span>}
      </div>
    </div>
  );
};
