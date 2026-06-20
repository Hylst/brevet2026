import { useAuthStore } from '../store/useAuthStore';

class SyncService {
  private isSyncing = false;

  async syncWithCloud() {
    const authState = useAuthStore.getState();
    
    // Only sync if user is authenticated and NOT a guest
    if (!authState.isAuthenticated || authState.user?.isGuest) {
      return;
    }

    if (this.isSyncing) return;

    try {
      this.isSyncing = true;
      console.log('🔄 [SyncService] Synchronisation des données avec le cloud...');
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Here we would normally:
      // 1. Fetch remote data
      // 2. Compare timestamps (updatedAt)
      // 3. Merge data (Conflict resolution)
      // 4. Push local changes
      
      console.log('✅ [SyncService] Synchronisation terminée.');
    } catch (error) {
      console.error('❌ [SyncService] Échec de la synchronisation:', error);
    } finally {
      this.isSyncing = false;
    }
  }
}

export const syncService = new SyncService();
