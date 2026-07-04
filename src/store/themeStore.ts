import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ThemeStore {
    theme: 'dark' | 'light';
    setTheme: (theme: 'dark' | 'light') => void;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set) => ({
            theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
            setTheme: (theme) => set({ theme }),
            toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
        }),
        {
            name: 'theme',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
