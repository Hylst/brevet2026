import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AuthState, User } from '../types/auth';
import { dataProvider } from '../services/dataProvider';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: {
        id: 'guest',
        name: 'Invité',
        email: '',
        isGuest: true
      },
      isAuthenticated: true,
      isLoading: false,
      
      login: async (email: string, name: string, extras?: Partial<User>) => {
        set({ isLoading: true });
        
        // Simulate network delay for mock auth
        await new Promise(resolve => setTimeout(resolve, 800));
        
        set({
          user: {
            id: 'mock-user-' + Date.now(),
            name,
            email,
            isGuest: false,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
            ...extras
          },
          isAuthenticated: true,
          isLoading: false
        });
      },
      
      loginAsGuest: () => {
        set({
          user: {
            id: 'guest',
            name: 'Invité',
            email: '',
            isGuest: true
          },
          isAuthenticated: true,
          isLoading: false
        });
      },
      
      logout: () => {
        set({ user: null, isAuthenticated: false });
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => dataProvider.gamificationStorage), // Reusing the same local storage abstraction
    }
  )
);
