import { IDataProvider } from '../types/repository';
import { LocalDataProvider } from './providers/LocalStorageProvider';

const dataMode = import.meta.env.VITE_DATA_MODE || 'local';

let selectedProvider: IDataProvider;

if (dataMode === 'remote') {
  console.warn('⚠️ [DataProvider] Mode "remote" détecté. L\'interface utilisateur actuelle est synchrone. Utilisation du LocalDataProvider en solution de repli jusqu\'à la refactorisation asynchrone (ex: React Query).');
  // Dans le futur, une fois l'UI asynchrone : 
  // selectedProvider = RemoteDataProvider;
  selectedProvider = LocalDataProvider;
} else {
  selectedProvider = LocalDataProvider;
}

export const dataProvider: IDataProvider = selectedProvider;
