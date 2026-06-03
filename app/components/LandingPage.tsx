import Link from "next/link";
import type { Locale } from "../lib/content";
import { content, site } from "../lib/content";
import { ArrowRight, BookIcon, CalendarIcon, LockIcon, SparkIcon } from "./icons";
import { ProductPhone } from "./ProductPhone";

const featureIcons = [SparkIcon, BookIcon, CalendarIcon, LockIcon];

export function LandingPage({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-2xl font-black tracking-normal text-lexa-red dark:text-[#ff766e]">
              LEXA
            </p>
            <h1 className="mt-5 max-w-3xl text-balance text-5xl font-black leading-[1.04] tracking-normal text-lexa-ink dark:text-white md:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-lexa-muted dark:text-white/68">
              {t.hero.body}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.appStoreUrl}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-lexa-ink px-7 py-4 text-base font-black text-white shadow-xl shadow-red-900/10 transition hover:bg-lexa-red dark:bg-white dark:text-lexa-ink"
              >
                {t.hero.primary}
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                href={`/${locale}/#flow`}
                className="inline-flex items-center justify-center rounded-full border border-lexa-line bg-white/72 px-7 py-4 text-base font-black text-lexa-ink transition hover:border-lexa-coral dark:border-white/12 dark:bg-white/8 dark:text-white"
              >
                {t.hero.secondary}
              </Link>
            </div>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-6 text-lexa-muted dark:text-white/50">
              {t.hero.note}
            </p>
          </div>
          <ProductPhone locale={locale} />
        </div>
      </section>

      <section id="flow" className="border-y border-lexa-line bg-white/58 px-5 py-20 dark:border-white/10 dark:bg-white/[0.03] lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-balance text-4xl font-black tracking-normal text-lexa-ink dark:text-white md:text-5xl">
              {t.flow.title}
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-lexa-muted dark:text-white/64">
              {t.flow.body}
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.flow.items.map(([number, title, body]) => (
              <article key={number} className="glass-panel rounded-[28px] p-6">
                <p className="text-sm font-black text-lexa-red dark:text-[#ff766e]">{number}</p>
                <h3 className="mt-5 text-2xl font-black text-lexa-ink dark:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-lexa-muted dark:text-white/58">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-3xl text-balance text-4xl font-black tracking-normal text-lexa-ink dark:text-white md:text-5xl">
            {t.features.title}
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.features.items.map(([title, body], index) => {
              const Icon = featureIcons[index] ?? SparkIcon;
              return (
                <article key={title} className="rounded-[28px] border border-lexa-line bg-white/72 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fff0ee] text-lexa-red dark:bg-white/10 dark:text-[#ff766e]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-lexa-ink dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-lexa-muted dark:text-white/58">
                    {body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[32px] bg-lexa-ink p-8 text-white shadow-2xl shadow-red-950/16 dark:bg-white dark:text-lexa-ink md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <h2 className="text-balance text-3xl font-black md:text-5xl">
              {t.privacyBand.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base font-medium leading-8 opacity-72">
              {t.privacyBand.body}
            </p>
          </div>
          <Link
            href={`/${locale}/privacy/`}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black text-lexa-ink dark:bg-lexa-ink dark:text-white"
          >
            {t.privacyBand.cta}
          </Link>
        </div>
      </section>

      <section className="px-5 py-24 text-center lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-4xl font-black tracking-normal text-lexa-ink dark:text-white md:text-6xl">
            {t.finalCta.title}
          </h2>
          <p className="mt-5 text-lg font-medium text-lexa-muted dark:text-white/64">
            {t.finalCta.body}
          </p>
          <a
            href={site.appStoreUrl}
            className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-lexa-red px-8 py-4 text-base font-black text-white shadow-xl shadow-red-500/20 transition hover:bg-lexa-ink"
          >
            {t.finalCta.cta}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
