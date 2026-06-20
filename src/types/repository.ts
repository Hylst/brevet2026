import { UserProgress, SpacedRepetitionItem } from '../types';

export interface IProgressRepository {
  getProgress(): UserProgress;
  saveProgress(progress: UserProgress): void;
  updateSpacedRepetition(questionId: string, topicId: string, quality: number): void;
  getDueReviewItems(topicId?: string): SpacedRepetitionItem[];
  saveQuizScore(topicId: string, score: number): void;
  saveFailedQuestions(topicId: string, failedIds: string[]): void;
  saveCorrectQuestions(questionIds: string[]): void;
  markSheetRead(topicId: string): boolean;
  markBookRead(subjectId: string): boolean;
  resetProgress(): boolean;
  toggleTimerSetting(): boolean;
  toggleSoundSetting(): boolean;
}

// Interface asynchrone pour la future intégration avec un vrai backend (Phase 4/5)
export interface IAsyncProgressRepository {
  getProgress(): Promise<UserProgress>;
  saveProgress(progress: UserProgress): Promise<void>;
  sync(localProgress: UserProgress): Promise<UserProgress>;
}

export interface IStateStorage {
  getItem: (name: string) => string | null | Promise<string | null>;
  setItem: (name: string, value: string) => void | Promise<void>;
  removeItem: (name: string) => void | Promise<void>;
}

export interface IDataProvider {
  progress: IProgressRepository;
  gamificationStorage: IStateStorage;
}
