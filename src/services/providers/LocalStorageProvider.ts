import { UserProgress, SpacedRepetitionItem } from '../../types';
import { IProgressRepository, IStateStorage, IDataProvider } from '../../types/repository';
import { getDeviceId } from '../../lib/device';
import { syncService } from '../syncService';
import { STORAGE_KEYS, ID_MIGRATION_MAP } from '../../constants';

const STORAGE_KEY = STORAGE_KEYS.PROGRESS;

const INITIAL_PROGRESS: UserProgress = {
  completedTopics: [],
  completedBooks: [],
  quizScores: {},
  failedQuestions: {},
  correctQuestions: [],
  spacedRepetitionItems: {},
  totalTimeSpent: 0,
  streakDays: 0,
  lastStudyDate: new Date().toISOString(),
  settings: {
    timerEnabled: true,
    soundEnabled: true
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  deviceId: getDeviceId(),
};

export class LocalStorageProgressRepository implements IProgressRepository {
  getProgress(): UserProgress {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        
        const migrateArray = (arr: string[] = []) => 
          Array.from(new Set(arr.map(id => ID_MIGRATION_MAP[id] || id)));

        const migrateKeys = <T>(obj: Record<string, T> = {}) => {
          const res: Record<string, T> = {};
          for (const [k, v] of Object.entries(obj)) {
            res[ID_MIGRATION_MAP[k] || k] = v;
          }
          return res;
        };

        return {
          ...INITIAL_PROGRESS,
          ...parsed,
          completedTopics: migrateArray(parsed.completedTopics),
          completedBooks: parsed.completedBooks || [],
          quizScores: migrateKeys(parsed.quizScores),
          failedQuestions: migrateKeys(parsed.failedQuestions),
          correctQuestions: parsed.correctQuestions || [],
          spacedRepetitionItems: parsed.spacedRepetitionItems || {},
          settings: parsed.settings || INITIAL_PROGRESS.settings,
          deviceId: parsed.deviceId || getDeviceId(),
          createdAt: parsed.createdAt || new Date().toISOString(),
          updatedAt: parsed.updatedAt || new Date().toISOString(),
        };
      }
      return INITIAL_PROGRESS;
    } catch (e) {
      console.error('Error reading progress:', e);
      return INITIAL_PROGRESS;
    }
  }

  saveProgress(progress: UserProgress): void {
    try {
      progress.updatedAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      
      // Trigger background sync
      syncService.syncWithCloud();
    } catch (e) {
      console.error('Error saving progress:', e);
    }
  }

  updateSpacedRepetition(questionId: string, topicId: string, quality: number): void {
    const current = this.getProgress();
    const items = current.spacedRepetitionItems || {};
    
    let item = items[questionId] || {
      questionId,
      topicId,
      nextReviewDate: new Date().toISOString(),
      interval: 0,
      easeFactor: 2.5,
      repetitions: 0
    };

    if (quality >= 3) {
      if (item.repetitions === 0) {
        item.interval = 1;
      } else if (item.repetitions === 1) {
        item.interval = 6;
      } else {
        item.interval = Math.round(item.interval * item.easeFactor);
      }
      item.repetitions += 1;
    } else {
      item.repetitions = 0;
      item.interval = 1;
    }

    item.easeFactor = item.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (item.easeFactor < 1.3) {
      item.easeFactor = 1.3;
    }

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + item.interval);
    item.nextReviewDate = nextDate.toISOString();

    const updated: UserProgress = {
      ...current,
      spacedRepetitionItems: {
        ...items,
        [questionId]: item
      }
    };

    this.saveProgress(updated);
  }

  getDueReviewItems(topicId?: string): SpacedRepetitionItem[] {
    const current = this.getProgress();
    const items = Object.values(current.spacedRepetitionItems || {});
    const now = new Date();
    
    return items.filter(item => {
      const isDue = new Date(item.nextReviewDate) <= now;
      const matchesTopic = topicId ? item.topicId === topicId : true;
      return isDue && matchesTopic;
    });
  }

  saveQuizScore(topicId: string, score: number): void {
    const current = this.getProgress();
    
    const existingScore = current.quizScores[topicId] || 0;
    const newScore = Math.max(existingScore, score);

    const updated: UserProgress = {
      ...current,
      quizScores: {
        ...current.quizScores,
        [topicId]: newScore,
      },
      completedTopics: current.completedTopics.includes(topicId) 
        ? current.completedTopics 
        : [...current.completedTopics, topicId]
    };

    this.saveProgress(updated);
  }

  saveFailedQuestions(topicId: string, failedIds: string[]): void {
    const current = this.getProgress();
    
    const updated: UserProgress = {
      ...current,
      failedQuestions: {
        ...current.failedQuestions,
        [topicId]: failedIds,
      }
    };

    this.saveProgress(updated);
  }

  saveCorrectQuestions(questionIds: string[]): void {
    const current = this.getProgress();
    
    // Add only new IDs
    const newCorrect = questionIds.filter(id => !current.correctQuestions?.includes(id));
    if (newCorrect.length === 0) return;

    const updated: UserProgress = {
      ...current,
      correctQuestions: [...(current.correctQuestions || []), ...newCorrect],
    };

    this.saveProgress(updated);
  }

  markSheetRead(topicId: string): boolean {
    const current = this.getProgress();
    if (current.completedTopics.includes(topicId)) return false;

    const updated: UserProgress = {
      ...current,
      completedTopics: [...current.completedTopics, topicId],
    };
    this.saveProgress(updated);
    return true;
  }

  markBookRead(subjectId: string): boolean {
    const current = this.getProgress();
    if (current.completedBooks?.includes(subjectId)) return false;

    const updated: UserProgress = {
      ...current,
      completedBooks: [...(current.completedBooks || []), subjectId],
    };
    this.saveProgress(updated);
    return true;
  }

  resetProgress(): boolean {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STORAGE_KEYS.GAMIFICATION);
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('miniquiz_') || key.startsWith('checklist_')) {
          localStorage.removeItem(key);
        }
      });
      return true;
    } catch (e) {
      console.error('Error resetting progress:', e);
      return false;
    }
  }

  toggleTimerSetting(): boolean {
    const current = this.getProgress();
    const updated: UserProgress = {
      ...current,
      settings: {
        ...current.settings,
        timerEnabled: !current.settings?.timerEnabled
      }
    };
    this.saveProgress(updated);
    return updated.settings!.timerEnabled;
  }

  toggleSoundSetting(): boolean {
    const current = this.getProgress();
    const updated: UserProgress = {
      ...current,
      settings: {
        ...current.settings,
        timerEnabled: current.settings?.timerEnabled ?? true,
        soundEnabled: !(current.settings?.soundEnabled ?? true)
      }
    };
    this.saveProgress(updated);
    return updated.settings!.soundEnabled;
  }
}

export const LocalGamificationStorage: IStateStorage = {
  getItem: (name: string) => {
    return localStorage.getItem(name);
  },
  setItem: (name: string, value: string) => {
    localStorage.setItem(name, value);
  },
  removeItem: (name: string) => {
    localStorage.removeItem(name);
  }
};

export const LocalDataProvider: IDataProvider = {
  progress: new LocalStorageProgressRepository(),
  gamificationStorage: LocalGamificationStorage
};
