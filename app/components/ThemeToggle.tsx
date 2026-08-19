"use client";

import { Sun, Moon } from "lucide-react";
import { useThemeStore } from "@/app/store/themeStore";

export function ThemeToggle() {
  const theme = useThemeStore((state:any) => state.theme);
  const toggleTheme = useThemeStore((state:any) => state.toggleTheme);
  const isLight = theme === "light";

  const handleToggle = () => {
    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }
    document.startViewTransition(() => {
      toggleTheme();
    });
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative flex h-8 w-14 shrink-0 items-center rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
        isLight ? "bg-slate-200" : "bg-slate-700"
      }`}
      role="switch"
      aria-checked={isLight}
      aria-label="Toggle theme"
    >
      {/* Knob */}
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isLight ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isLight ? (
          <Sun className="h-4 w-4 text-yellow-500" />
        ) : (
          <Moon className="h-4 w-4 text-blue-300" />
        )}
      </span>

      {/* Optional background icons (subtle) */}
      <span className="absolute left-1.5 text-slate-400/30">
        <Moon className="h-3 w-3" />
      </span>
      <span className="absolute right-1.5 text-slate-400/30">
        <Sun className="h-3 w-3" />
      </span>
    </button>
  );
}