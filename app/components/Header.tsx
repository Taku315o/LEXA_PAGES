import Link from "next/link";
import Image from "next/image";
import type { Locale } from "../lib/content";
import { content, site } from "../lib/content";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F5F5F7]/90 backdrop-blur-md dark:border-white/10 dark:bg-[#0B0B0D]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <Link href={`/${locale}/`} className="flex items-center gap-2.5" aria-label="LEXA home">
          <Image src="/assets/lexa-logo.png" alt="" width={32} height={32} className="h-8 w-8 rounded-lg" />
          <span className="text-base font-bold tracking-tight text-[#111113] dark:text-[#F5F5F7]">
            LEXA
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#6E6E73] dark:text-[#9A9AA3] lg:flex">
          <Link className="transition hover:text-[#111113] dark:hover:text-white" href={`/${locale}/#flow`}>
            {t.nav.flow}
          </Link>
          <Link className="transition hover:text-[#111113] dark:hover:text-white" href={`/${locale}/#blocker`}>
            {t.nav.blocker}
          </Link>
          <Link className="transition hover:text-[#111113] dark:hover:text-white" href={`/${locale}/#features`}>
            {t.nav.features}
          </Link>
          <Link className="transition hover:text-[#111113] dark:hover:text-white" href={`/${locale}/#faq`}>
            {t.nav.faq}
          </Link>
          <Link className="transition hover:text-[#111113] dark:hover:text-white" href={`/${locale}/support/`}>
            {t.nav.support}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle labels={t.theme} />
          <LanguageSwitcher locale={locale} />
          <a
            href={site.appStoreUrl}
            className="hidden rounded-full bg-[#111113] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#E62236] dark:bg-white dark:text-[#111113] dark:hover:bg-[#E62236] dark:hover:text-white sm:inline-flex"
          >
            {t.nav.appStore}
          </a>
        </div>
      </div>
    </header>
  );
}
