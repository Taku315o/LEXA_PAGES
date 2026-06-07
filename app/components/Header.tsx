import Link from "next/link";
import type { Locale } from "../lib/content";
import { content, site } from "../lib/content";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

import Image from "next/image";

export function Header({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-lexa-line/70 bg-[#fffafa]/82 backdrop-blur-xl dark:border-white/10 dark:bg-[#110d0f]/82">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href={`/${locale}/`} className="flex items-center gap-3" aria-label="LEXA home">
          <Image src="/assets/lexa-logo.png" alt="" width={36} height={36} className="h-9 w-9 rounded-xl" />
          <span className="text-lg font-black tracking-normal text-lexa-ink dark:text-white">
            LEXA
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-lexa-muted dark:text-white/58 lg:flex">
          <Link className="transition hover:text-lexa-coral" href={`/${locale}/#features`}>
            {t.nav.features}
          </Link>
          <Link className="transition hover:text-lexa-coral" href={`/${locale}/#flow`}>
            {t.nav.flow}
          </Link>
          <Link className="transition hover:text-lexa-coral" href={`/${locale}/privacy/`}>
            {t.nav.privacy}
          </Link>
          <Link className="transition hover:text-lexa-coral" href={`/${locale}/support/`}>
            {t.nav.support}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle labels={t.theme} />
          <LanguageSwitcher locale={locale} />
          <a
            href={site.appStoreUrl}
            className="hidden rounded-full bg-lexa-ink px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-900/10 transition hover:bg-lexa-red dark:bg-white dark:text-lexa-ink sm:inline-flex"
          >
            {t.nav.appStore}
          </a>
        </div>
      </div>
    </header>
  );
}
