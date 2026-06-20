import { useState, useEffect } from 'react';
import { dataProvider } from '../services/dataProvider';

export function useUIState<T>(key: string, defaultValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [state, setState] = useState<T>(defaultValue);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const loadState = async () => {
      try {
        const stored = await dataProvider.gamificationStorage.getItem(key);
        if (stored !== null) {
          setState(JSON.parse(stored));
        }
      } catch (e) {
        console.error(`Error loading UI state for ${key}:`, e);
      } finally {
        setIsInitialized(true);
      }
    };
    loadState();
  }, [key]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(valueToStore);
      if (valueToStore === null || valueToStore === undefined) {
        dataProvider.gamificationStorage.removeItem(key);
      } else {
        dataProvider.gamificationStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (e) {
      console.error(`Error saving UI state for ${key}:`, e);
    }
  };

  return [state, setValue];
}
