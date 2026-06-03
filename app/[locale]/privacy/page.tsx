import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "../../components/LegalPage";
import { content, isLocale, site, type Locale } from "../../lib/content";
import { privacySections } from "../../lib/legal";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "ja";
  const title = content[locale].legal.privacyTitle;
  return {
    title,
    alternates: {
      canonical: `${site.domain}/${locale}/privacy/`,
      languages: {
        ja: `${site.domain}/ja/privacy/`,
        en: `${site.domain}/en/privacy/`
      }
    }
  };
}

export default async function PrivacyPage({
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
      title={content[locale].legal.privacyTitle}
      sections={privacySections(locale)}
    />
  );
}
