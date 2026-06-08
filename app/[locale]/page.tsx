import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "../components/LandingPage";
import { content, isLocale, site, type Locale } from "../lib/content";

export function generateStaticParams() {
  return [
    { locale: "ja" },
    { locale: "en" }
  ];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "ja";
  const t = content[locale];
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `${site.domain}/${locale}/`,
      languages: {
        "x-default": `${site.domain}/`,
        ja: `${site.domain}/ja/`,
        en: `${site.domain}/en/`
      }
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `${site.domain}/${locale}/`,
      siteName: "LEXA",
      locale: locale === "ja" ? "ja_JP" : "en_US",
      type: "website"
    }
  };
}

export default async function LocaleHomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    notFound();
  }
  return <LandingPage locale={rawLocale as Locale} />;
}
