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
        className="flex h-10 items-center gap-0.5 rounded-full border border-lexa-line bg-white/80 p-1 text-xs font-bold shadow-sm transition dark:border-white/12 dark:bg-white/8"
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
      className="flex h-10 items-center gap-0.5 rounded-full border border-lexa-line bg-white/80 p-1 text-xs font-bold shadow-sm transition dark:border-white/12 dark:bg-white/8"
      aria-label="Toggle light/dark theme"
    >
      <span
        className={`rounded-full px-3 py-1.5 transition-all duration-200 ${
          theme === "light"
            ? "bg-lexa-ink text-white"
            : "text-lexa-muted hover:text-white"
        }`}
      >
        {labels.light}
      </span>
      <span
        className={`rounded-full px-3 py-1.5 transition-all duration-200 ${
          theme === "dark"
            ? "bg-white text-lexa-ink"
            : "text-lexa-muted hover:text-lexa-ink"
        }`}
      >
        {labels.dark}
      </span>
    </button>
  );
}
