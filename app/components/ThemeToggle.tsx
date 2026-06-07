"use client";

import { useEffect, useState } from "react";

export function ThemeToggle({ labels }: { labels: { light: string; dark: string } }) {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    // Initial sync
    const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(currentTheme);

    // Sync across tabs
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "lexa-theme" && (e.newValue === "light" || e.newValue === "dark")) {
        setTheme(e.newValue);
        document.documentElement.classList.toggle("dark", e.newValue === "dark");
        document.documentElement.dataset.theme = e.newValue;
      }
    };

    // System theme change listener
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem("lexa-theme");
      if (!savedTheme) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", e.matches);
        document.documentElement.dataset.theme = newTheme;
      }
    };

    window.addEventListener("storage", handleStorage);
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const handleToggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.dataset.theme = next;
    localStorage.setItem("lexa-theme", next);
  };

  // Prevent hydration mismatch by returning a placeholder or forced light state on server
  // On the client, it will quickly update to the correct theme.
  if (theme === null) {
    return (
      <button
        type="button"
        className="flex h-10 items-center gap-0.5 rounded-full border border-lexa-line bg-white/80 p-1 text-xs font-bold shadow-sm transition dark:border-[#3a2326] dark:bg-[#1a1517]/95 dark:shadow-[0_10px_30px_rgba(0,0,0,0.22)]"
        aria-label="Toggle light/dark theme"
      >
        <span className="rounded-full px-3 py-1.5 opacity-0">{labels.light}</span>
        <span className="rounded-full px-3 py-1.5 opacity-0">{labels.dark}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="flex h-10 items-center gap-0.5 rounded-full border border-lexa-line bg-white/80 p-1 text-xs font-bold shadow-sm transition dark:border-[#3a2326] dark:bg-[#1a1517]/95 dark:shadow-[0_10px_30px_rgba(0,0,0,0.22)]"
      aria-label="Toggle light/dark theme"
    >
      <span
        className={`rounded-full px-3 py-1.5 transition-all duration-200 ${
          theme === "light"
            ? "bg-lexa-ink text-white dark:bg-[#2b2023] dark:text-white"
            : "text-lexa-muted hover:text-white dark:text-white/58 dark:hover:text-white"
        }`}
      >
        {labels.light}
      </span>
      <span
        className={`rounded-full px-3 py-1.5 transition-all duration-200 ${
          theme === "dark"
            ? "bg-white text-lexa-ink shadow-[0_1px_0_rgba(255,255,255,0.08),0_8px_20px_rgba(0,0,0,0.22)] dark:bg-[#f7f1ef] dark:text-[#171214]"
            : "text-lexa-muted hover:text-lexa-ink dark:text-white/58 dark:hover:text-white"
        }`}
      >
        {labels.dark}
      </span>
    </button>
  );
}
