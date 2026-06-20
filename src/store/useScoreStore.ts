import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { dataProvider } from '../services/dataProvider';
import { syncService } from '../services/syncService';

interface ScoreEntry {
  quizId: string;
  subjectId: string;
  chapterId: string;
  isCorrect: boolean;
  answeredAt: string;
}

interface ScoreState {
  scores: Record<string, ScoreEntry>;
  addScore: (quizId: string, subjectId: string, chapterId: string, isCorrect: boolean) => void;
}

export const useScoreStore = create<ScoreState>()(
  persist(
    (set) => ({
      scores: {},
      addScore: (quizId, subjectId, chapterId, isCorrect) => {
        set((state) => ({
          scores: {
            ...state.scores,
            [quizId]: {
              quizId,
              subjectId,
              chapterId,
              isCorrect,
              answeredAt: new Date().toISOString(),
            },
          },
        }));
        syncService.syncWithCloud();
      },
    }),
    {
      name: 'score-storage',
      storage: createJSONStorage(() => dataProvider.gamificationStorage),
    }
  )
);

// Derived state selectors
export const selectSubjectScore = (scores: Record<string, ScoreEntry>, subjectId: string) => {
  const subjectScores = Object.values(scores).filter((s) => s.subjectId === subjectId);
  const total = subjectScores.length;
  const correct = subjectScores.filter((s) => s.isCorrect).length;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  return { correct, total, percentage };
};

export const selectGlobalScore = (scores: Record<string, ScoreEntry>) => {
  const allScores = Object.values(scores);
  const total = allScores.length;
  const correct = allScores.filter((s) => s.isCorrect).length;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  return { correct, total, percentage };
};
