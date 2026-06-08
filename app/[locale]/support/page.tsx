import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "../../components/LegalPage";
import { content, isLocale, site, type Locale } from "../../lib/content";
import { supportSections } from "../../lib/legal";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "ja";
  const title = content[locale].legal.supportTitle;
  return {
    title,
    alternates: {
      canonical: `${site.domain}/${locale}/support/`,
      languages: {
        "x-default": `${site.domain}/en/support/`,
        ja: `${site.domain}/ja/support/`,
        en: `${site.domain}/en/support/`
      }
    }
  };
}

export default async function SupportPage({
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
      title={content[locale].legal.supportTitle}
      sections={supportSections(locale)}
    />
  );
}
