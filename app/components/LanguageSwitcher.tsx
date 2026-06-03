"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "../lib/content";

function targetPath(pathname: string, target: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "ja" || parts[0] === "en") {
    parts[0] = target;
    return `/${parts.join("/")}/`;
  }
  return `/${target}/`;
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other = locale === "ja" ? "en" : "ja";

  return (
    <Link
      href={targetPath(pathname, other)}
      className="rounded-full border border-lexa-line bg-white/78 px-4 py-2.5 text-sm font-bold text-lexa-ink transition hover:border-lexa-coral dark:border-white/12 dark:bg-white/8 dark:text-white"
      hrefLang={other}
    >
      {other === "ja" ? "日本語" : "English"}
    </Link>
  );
}
