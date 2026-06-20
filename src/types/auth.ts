export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isGuest: boolean;
  college?: string;
  favoriteSubject?: string;
  mentionGoal?: string;
  notes?: string;
  futureJob?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, name: string, extras?: Partial<User>) => Promise<void>;
  loginAsGuest: () => void;
  logout: () => void;
}
