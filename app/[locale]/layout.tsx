import { notFound } from "next/navigation";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { isLocale, locales, type Locale } from "../lib/content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    notFound();
  }
  const locale = rawLocale as Locale;

  return (
    <>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  );
}
