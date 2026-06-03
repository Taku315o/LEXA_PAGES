"use client";

import { useEffect, useState } from "react";
import type { Locale } from "../lib/content";
import { content } from "../lib/content";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("lexa-theme", theme);
}

export function ThemeToggle({ locale }: { locale: Locale }) {
  const labels = content[locale].theme;
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current =
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(current);
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        applyTheme(next);
      }}
      className="grid h-10 grid-cols-2 rounded-full border border-lexa-line bg-white/78 p-1 text-xs font-bold text-lexa-muted shadow-sm transition dark:border-white/12 dark:bg-white/8 dark:text-white/58"
      aria-label="Toggle light and dark theme"
    >
      <span
        className={`rounded-full px-3 py-1.5 transition ${
          theme === "light"
            ? "bg-lexa-ink text-white dark:bg-white dark:text-lexa-ink"
            : ""
        }`}
      >
        {labels.light}
      </span>
      <span
        className={`rounded-full px-3 py-1.5 transition ${
          theme === "dark"
            ? "bg-lexa-ink text-white dark:bg-white dark:text-lexa-ink"
            : ""
        }`}
      >
        {labels.dark}
      </span>
    </button>
  );
}
