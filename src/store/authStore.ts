import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

// In a real application, these would be stored securely and not in the frontend
const VALID_USERNAME = 'admin';
const VALID_PASSWORD = 'freshi2025';

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: (username: string, password: string) => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false }),
}));