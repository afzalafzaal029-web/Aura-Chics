// store/themeStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  theme: "dark" | "light";
  toggleTheme: () => void;
  setTheme: (theme: "dark" | "light") => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set: any) => ({
      theme: "light", // default dark
      toggleTheme: () =>
        set((state: any) => ({
          theme: state.theme === "dark" ? "light" : "dark",
        })),
      setTheme: (theme: any) => set({ theme }),
    }),
    { name: "portfolio-theme" },
  ),
);
