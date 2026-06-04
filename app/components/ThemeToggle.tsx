"use client";

import type { Locale } from "../lib/content";
import { content } from "../lib/content";

/**
 * Theme toggle driven purely by CSS dark: variants.
 * No React state means no hydration mismatch.
 * The boot script in layout.tsx sets the `dark` class synchronously,
 * so CSS reflects the correct theme before any JS runs.
 */
export function ThemeToggle({ locale }: { locale: Locale }) {
  const labels = content[locale].theme;

  const handleToggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const next = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !isDark);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("lexa-theme", next);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="flex h-10 items-center gap-0.5 rounded-full border border-lexa-line bg-white/80 p-1 text-xs font-bold shadow-sm transition dark:border-white/12 dark:bg-white/8"
      aria-label="Toggle light/dark theme"
    >
      {/* Light pill — active in light mode */}
      <span className="rounded-full px-3 py-1.5 transition-all duration-200 bg-lexa-ink text-white dark:bg-transparent dark:text-white/45">
        {labels.light}
      </span>
      {/* Dark pill — active in dark mode */}
      <span className="rounded-full px-3 py-1.5 transition-all duration-200 text-lexa-muted dark:bg-white dark:text-lexa-ink">
        {labels.dark}
      </span>
    </button>
  );
}
