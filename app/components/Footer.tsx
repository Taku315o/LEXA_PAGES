import Link from "next/link";
import Image from "next/image";
import type { Locale } from "../lib/content";
import { content, site } from "../lib/content";

export function Footer({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <footer className="border-t border-lexa-line bg-white/54 px-5 py-10 dark:border-white/10 dark:bg-white/[0.03] lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/assets/lexa-logo.png" alt="" width={36} height={36} className="h-9 w-9 rounded-xl" />
            <span className="font-black text-lexa-ink dark:text-white">LEXA</span>
          </div>
          <p className="mt-3 text-sm text-lexa-muted dark:text-white/58">
            {locale === "ja"
              ? "衝動を復習に変えるiPhoneアプリ。"
              : "An iPhone app that turns impulses into review."}
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-lexa-muted dark:text-white/58">
          <Link href={`/${locale}/privacy/`}>{t.legal.privacyTitle}</Link>
          <Link href={`/${locale}/terms/`}>{t.legal.termsTitle}</Link>
          <Link href={`/${locale}/support/`}>{t.legal.supportTitle}</Link>
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
        </nav>
      </div>
    </footer>
  );
}
