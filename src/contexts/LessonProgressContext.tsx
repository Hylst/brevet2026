import React, { createContext, useContext } from 'react';

interface LessonProgressContextType {
  registerRequirement: (id: string) => void;
  markCompleted: (id: string, isCompleted: boolean) => void;
  requirements: Record<string, boolean>;
}

export const LessonProgressContext = createContext<LessonProgressContextType | null>(null);

export const useLessonProgress = () => useContext(LessonProgressContext);
