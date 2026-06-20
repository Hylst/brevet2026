
export type SubjectId = 'maths' | 'francais' | 'histoire' | 'geo' | 'emc' | 'physique' | 'svt' | 'techno' | 'oral' | 'methodologie' | string;

export type QuestionType = 'single' | 'multiple';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation?: string;
  // New fields for Brevet 2026 context
  calculatorAllowed?: boolean; // False for "Automatismes" part
  timeLimit?: number; // In seconds, mostly for mental math
  tags?: string[]; // e.g., ['calcul', 'raisonner']
}

export interface Topic {
  id: string;
  category?: string; // e.g., "Nombres et Calculs", "Guerre et Paix"
  title: string;
  description: string;
  type: 'quiz' | 'sheet';
  content?: string; // Markdown content for revision sheets
  questions?: Question[]; // Only for quizzes
  difficulty: 1 | 2 | 3;
  level?: string; // e.g., '3eme', '4eme', '5eme'
}

export interface Subject {
  id: SubjectId;
  folderId?: string;
  name: string;
  icon: string;
  color: string;
  topics: Topic[];
}

export interface SpacedRepetitionItem {
  questionId: string;
  topicId: string;
  nextReviewDate: string; // ISO string
  interval: number; // in days
  easeFactor: number;
  repetitions: number;
}

export interface UserProgress {
  completedTopics: string[]; // List of topic IDs
  completedBooks?: string[]; // List of subject IDs
  quizScores: Record<string, number>; // topicId -> score (0-100)
  failedQuestions?: Record<string, string[]>; // topicId -> array of question IDs
  correctQuestions?: string[]; // Array of correctly answered question IDs
  spacedRepetitionItems?: Record<string, SpacedRepetitionItem>; // questionId -> item
  totalTimeSpent: number; // in minutes
  streakDays: number;
  lastStudyDate: string;
  settings?: {
    timerEnabled: boolean;
    soundEnabled?: boolean;
  };
  createdAt?: string;
  updatedAt?: string;
  deviceId?: string;
}
