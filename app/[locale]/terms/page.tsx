import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "../../components/LegalPage";
import { content, isLocale, site, type Locale } from "../../lib/content";
import { termsSections } from "../../lib/legal";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "ja";
  const title = content[locale].legal.termsTitle;
  return {
    title,
    alternates: {
      canonical: `${site.domain}/${locale}/terms/`,
      languages: {
        ja: `${site.domain}/ja/terms/`,
        en: `${site.domain}/en/terms/`
      }
    }
  };
}

export default async function TermsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    notFound();
  }
  const locale = rawLocale as Locale;
  return (
    <LegalPage
      locale={locale}
      title={content[locale].legal.termsTitle}
      sections={termsSections(locale)}
    />
  );
}
