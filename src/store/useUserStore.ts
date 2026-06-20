import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { dataProvider } from '../services/dataProvider';

export type UserLevel = 'cm1' | 'cm2' | '6eme' | '5eme' | '4eme' | '3eme';

interface UserState {
  level: UserLevel;
  setLevel: (level: UserLevel) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      level: '3eme', // Default to Brevet level
      setLevel: (level) => set({ level }),
    }),
    {
      name: 'user-settings',
      storage: createJSONStorage(() => dataProvider.gamificationStorage),
    }
  )
);
