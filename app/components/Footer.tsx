import Link from "next/link";
import Image from "next/image";
import type { Locale } from "../lib/content";
import { content, site } from "../lib/content";

export function Footer({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <footer className="border-t border-black/10 px-6 py-12 dark:border-white/10 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/assets/lexa-logo.png" alt="" width={28} height={28} className="h-7 w-7 rounded-lg" />
            <span className="text-sm font-bold text-[#111113] dark:text-[#F5F5F7]">LEXA</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-[#6E6E73] dark:text-[#9A9AA3]">
            {t.footerTagline}
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#6E6E73] dark:text-[#9A9AA3]">
          <Link className="transition hover:text-[#111113] dark:hover:text-white" href={`/${locale}/privacy/`}>
            {t.legal.privacyTitle}
          </Link>
          <Link className="transition hover:text-[#111113] dark:hover:text-white" href={`/${locale}/terms/`}>
            {t.legal.termsTitle}
          </Link>
          <Link className="transition hover:text-[#111113] dark:hover:text-white" href={`/${locale}/support/`}>
            {t.legal.supportTitle}
          </Link>
          <a className="transition hover:text-[#111113] dark:hover:text-white" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
        </nav>
      </div>
    </footer>
  );
}
