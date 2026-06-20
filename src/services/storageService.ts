import { UserProgress, SpacedRepetitionItem } from '../types';
import { dataProvider } from './dataProvider';

export const getProgress = (): UserProgress => {
  return dataProvider.progress.getProgress();
};

export const updateSpacedRepetition = (questionId: string, topicId: string, quality: number) => {
  dataProvider.progress.updateSpacedRepetition(questionId, topicId, quality);
};

export const getDueReviewItems = (topicId?: string): SpacedRepetitionItem[] => {
  return dataProvider.progress.getDueReviewItems(topicId);
};

export const saveQuizScore = (topicId: string, score: number) => {
  dataProvider.progress.saveQuizScore(topicId, score);
};

export const saveFailedQuestions = (topicId: string, failedIds: string[]) => {
  dataProvider.progress.saveFailedQuestions(topicId, failedIds);
};

export const saveCorrectQuestions = (questionIds: string[]) => {
  dataProvider.progress.saveCorrectQuestions(questionIds);
};

export const markSheetRead = (topicId: string): boolean => {
  return dataProvider.progress.markSheetRead(topicId);
};

export const markBookRead = (subjectId: string): boolean => {
  return dataProvider.progress.markBookRead(subjectId);
};

export const resetProgress = () => {
  return dataProvider.progress.resetProgress();
};

export const toggleTimerSetting = () => {
  return dataProvider.progress.toggleTimerSetting();
};

export const toggleSoundSetting = () => {
  return dataProvider.progress.toggleSoundSetting();
};
