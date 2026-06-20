import { UserProgress } from '../../types';
import { IAsyncProgressRepository } from '../../types/repository';
import { apiClient } from '../../lib/apiClient';

/**
 * Implémentation asynchrone du repository utilisant le client API.
 * Prête à être utilisée une fois que l'UI sera refactorisée pour gérer l'état asynchrone (ex: avec React Query).
 */
export class MockApiProvider implements IAsyncProgressRepository {
  async getProgress(): Promise<UserProgress> {
    console.log('[MockApiProvider] Fetching progress from API...');
    return await apiClient.get<UserProgress>('/mock/progress').catch(() => {
      console.warn('Mock API call failed (expected if no backend is running), returning empty data');
      return {} as UserProgress;
    });
  }

  async saveProgress(progress: UserProgress): Promise<void> {
    console.log('[MockApiProvider] Saving progress to API...', progress);
    await apiClient.post('/mock/progress', progress).catch(() => {
      console.warn('Mock API call failed (expected if no backend is running)');
    });
  }

  async sync(localProgress: UserProgress): Promise<UserProgress> {
    console.log('[MockApiProvider] Syncing progress with API...');
    return await apiClient.post<UserProgress>('/mock/sync', localProgress).catch(() => {
      console.warn('Mock API call failed (expected if no backend is running), returning local data');
      return localProgress;
    });
  }
}
