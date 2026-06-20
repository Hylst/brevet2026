import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import confetti from 'canvas-confetti';
import { playLevelUpSound } from '../services/soundService';
import { dataProvider } from '../services/dataProvider';
import { getDeviceId } from '../lib/device';
import { syncService } from '../services/syncService';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const AVAILABLE_BADGES: Badge[] = [
  { id: 'first_lesson', name: 'Premier Pas', description: 'Terminer sa première leçon', icon: '🎯' },
  { id: 'streak_3', name: 'Régulier', description: 'Réviser 3 jours de suite', icon: '🔥' },
  { id: 'streak_7', name: 'Acharné', description: 'Réviser 7 jours de suite', icon: '⚡' },
  { id: 'streak_30', name: 'Légende', description: 'Réviser 30 jours de suite', icon: '👑' },
  { id: 'maths_100', name: 'Pythagore', description: 'Avoir 100% à TOUS les quiz de Maths', icon: '📐' },
  { id: 'francais_100', name: 'Molière', description: 'Avoir 100% à TOUS les quiz de Français', icon: '✍️' },
  { id: 'histoire_100', name: 'Historien', description: 'Avoir 100% à TOUS les quiz d\'Histoire', icon: '📜' },
  { id: 'geo_100', name: 'Cartographe', description: 'Avoir 100% à TOUS les quiz de Géographie', icon: '🌍' },
  { id: 'emc_100', name: 'Citoyen', description: 'Avoir 100% à TOUS les quiz d\'EMC', icon: '🤝' },
  { id: 'physique_100', name: 'Einstein', description: 'Avoir 100% à TOUS les quiz de Physique-Chimie', icon: '⚛️' },
  { id: 'svt_100', name: 'Darwin', description: 'Avoir 100% à TOUS les quiz de SVT', icon: '🧬' },
  { id: 'techno_100', name: 'Ingénieur', description: 'Avoir 100% à TOUS les quiz de Technologie', icon: '⚙️' },
  { id: 'speed_demon', name: 'Éclair', description: 'Finir un quiz très rapidement', icon: '⚡' },
  { id: 'night_owl', name: 'Oiseau de Nuit', description: 'Réviser après 20h', icon: '🦉' },
  { id: 'early_bird', name: 'Lève-tôt', description: 'Réviser avant 8h', icon: '🌅' },
  { id: 'bookworm', name: 'Rat de Bibliothèque', description: 'Lire un livre numérique complet', icon: '📚' },
  { id: 'persistent', name: 'Persévérant', description: 'S\'entraîner au Brevet Blanc', icon: '💪' },
  { id: 'perfect_mock', name: 'Majesté', description: 'Avoir eu 20/20 au Brevet Blanc', icon: '💯' },
];

interface GamificationState {
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string | null;
  badges: string[];
  showLevelUpModal: boolean;
  lives: number;
  lastLifeUpdate: number;
  createdAt?: string;

  updatedAt?: string;
  deviceId?: string;
  addXP: (amount: number) => void;
  checkStreak: () => void;
  showBadgeUnlocked: string | null;
  closeBadgeUnlocked: () => void;
  awardBadge: (badgeId: string) => void;
  closeLevelUpModal: () => void;
  deductLife: () => void;
  checkLives: () => void;
}

const MAX_LIVES = 24;
const LIFE_REFILL_TIME_MS = 60 * 60 * 1000; // 1 hour

// XP needed for level N = (N * (N - 1) / 2) * 100
// Level 1: 0 XP
// Level 2: 100 XP
// Level 3: 300 XP
// Level 4: 600 XP
export const calculateLevel = (xp: number) => {
  let level = 1;
  while (true) {
    const nextLevelXP = (level * (level + 1) / 2) * 100;
    if (xp >= nextLevelXP) {
      level++;
    } else {
      break;
    }
  }
  return level;
}

export const getXPForNextLevel = (level: number) => {
  return (level * (level + 1) / 2) * 100;
};

export const getXPForCurrentLevel = (level: number) => {
  return ((level - 1) * level / 2) * 100;
};

export const useGamificationStore = create<GamificationState>()(
  persist(
    (set, get) => ({
      xp: 0,
      level: 1,
      streak: 0,
      lastActiveDate: null,
      badges: [],
      showLevelUpModal: false,
      showBadgeUnlocked: null,
      lives: MAX_LIVES,
      lastLifeUpdate: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deviceId: getDeviceId(),

      checkLives: () => {
        const { lives, lastLifeUpdate } = get();
        if (lives >= MAX_LIVES) return;

        const now = Date.now();
        const timePassed = now - lastLifeUpdate;
        const livesToAdd = Math.floor(timePassed / LIFE_REFILL_TIME_MS);

        if (livesToAdd > 0) {
          const newLives = Math.min(MAX_LIVES, lives + livesToAdd);
          // Only advance lastLifeUpdate by the hours that actually gave a life
          const newLastUpdate = newLives === MAX_LIVES ? now : lastLifeUpdate + (livesToAdd * LIFE_REFILL_TIME_MS);
          set({ lives: newLives, lastLifeUpdate: newLastUpdate });
          syncService.syncWithCloud();
        }
      },

      deductLife: () => {
        const { lives, lastLifeUpdate } = get();
        if (lives > 0) {
          // If we were at max lives, start the timer now
          const newLastUpdate = lives === MAX_LIVES ? Date.now() : lastLifeUpdate;
          set({ lives: lives - 1, lastLifeUpdate: newLastUpdate });
          syncService.syncWithCloud();
        }
      },

      addXP: (amount: number) => {
        const { xp, level, lives } = get();
        const newXP = xp + amount;
        const newLevel = calculateLevel(newXP);
        
        const leveledUp = newLevel > level;
        
        let updatePayload: Partial<GamificationState> = {
          xp: newXP, 
          level: newLevel,
          updatedAt: new Date().toISOString()
        };

        if (leveledUp) {
          playLevelUpSound();
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6']
          });
          updatePayload.showLevelUpModal = true;
          updatePayload.lives = MAX_LIVES;
        }

        set(updatePayload);
        syncService.syncWithCloud();
      },

      checkStreak: () => {
        const now = new Date();
        const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
        const currentHour = now.getHours();
        const { lastActiveDate, streak, awardBadge } = get();

        // Check night owl badge (after 20:00)
        if (currentHour >= 20) {
          awardBadge('night_owl');
        }

        // Check early bird (before 8:00)
        if (currentHour < 8) {
          awardBadge('early_bird');
        }

        if (lastActiveDate === today) return;

        if (!lastActiveDate) {
          set({ streak: 1, lastActiveDate: today, updatedAt: new Date().toISOString() });
          syncService.syncWithCloud();
          return;
        }

        // We only care about date difference, ignore hours so parse the start of standard dates.
        const lastDate = new Date(lastActiveDate + 'T00:00:00');
        const currentDate = new Date(today + 'T00:00:00');
        // If times somehow got shifted, round it
        const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          const newStreak = streak + 1;
          set({ streak: newStreak, lastActiveDate: today, updatedAt: new Date().toISOString() });
          
          if (newStreak === 3) awardBadge('streak_3');
          if (newStreak === 7) awardBadge('streak_7');
          if (newStreak === 30) awardBadge('streak_30');
          syncService.syncWithCloud();
        } else if (diffDays > 1) {
          set({ streak: 1, lastActiveDate: today, updatedAt: new Date().toISOString() });
          syncService.syncWithCloud();
        }
      },

      awardBadge: (badgeId: string) => {
        const { badges } = get();
        if (!badges.includes(badgeId)) {
          set({ 
            badges: [...badges, badgeId], 
            showBadgeUnlocked: badgeId,
            updatedAt: new Date().toISOString() 
          });
          confetti({
            particleCount: 50,
            spread: 40,
            origin: { y: 0.8 },
            colors: ['#f59e0b']
          });
          syncService.syncWithCloud();
        }
      },

      closeBadgeUnlocked: () => set({ showBadgeUnlocked: null }),
      closeLevelUpModal: () => set({ showLevelUpModal: false })
    }),
    {
      name: 'gamification-storage',
      storage: createJSONStorage(() => dataProvider.gamificationStorage),
      version: 2,
      migrate: (persistedState: any, version: number) => {
        let state = { ...persistedState };
        if (version === 0) {
          // Migrate old badge IDs
          const oldToNewBadgeMap: Record<string, string> = {
            'history_100': 'histoire_100',
            'science_100': 'physique_100', // Assign old science badge to physique
            'french_100': 'francais_100'
          };
          if (state.badges) {
            state.badges = state.badges.map((b: string) => oldToNewBadgeMap[b] || b);
          }
        }
        if (version < 2) {
           if (state.lives !== undefined && state.lives < 24) {
               state.lives = 24;
               state.lastLifeUpdate = Date.now();
           }
        }
        return state as GamificationState;
      }
    }
  )
);

