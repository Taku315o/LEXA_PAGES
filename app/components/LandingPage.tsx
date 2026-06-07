import Link from "next/link";
import type { Locale } from "../lib/content";
import { content, site } from "../lib/content";
import {
  ArrowRight,
  BookIcon,
  CalendarIcon,
  LockIcon,
  SparkIcon,
} from "./icons";
import { ProductPhone } from "./ProductPhone";

const featureIcons = [SparkIcon, BookIcon, CalendarIcon, LockIcon];

export function LandingPage({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-28 pt-20 lg:px-10 lg:pb-40 lg:pt-32">
        {/* Ambient glow blobs */}
        <div className="pointer-events-none absolute -right-48 -top-48 h-[800px] w-[800px] rounded-full bg-rose-100/55 blur-[130px] dark:bg-rose-950/30" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-rose-100/35 blur-[100px] dark:bg-rose-950/20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]">
          {/* Left — copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-lexa-red/8 px-4 py-2 text-sm font-bold text-lexa-red dark:bg-lexa-red/12 dark:text-[#ff766e]">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {locale === "ja" ? "iPhone 専用アプリ" : "iPhone App"}
            </div>

            <h1 className="mt-5 max-w-2xl text-balance text-5xl font-black leading-[1.04] tracking-tight text-lexa-ink dark:text-white sm:text-6xl lg:text-[64px] xl:text-7xl">
              {t.hero.title}
            </h1>

            <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-lexa-muted dark:text-white/64 lg:text-xl">
              {t.hero.body}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={site.appStoreUrl}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-lexa-coral to-lexa-red px-8 py-4 text-base font-black text-white shadow-xl shadow-lexa-red/25 transition hover:-translate-y-0.5 hover:shadow-lexa-red/40 active:translate-y-0"
              >
                {t.hero.primary}
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                href={`/${locale}/#flow`}
                className="inline-flex items-center justify-center rounded-full border-2 border-lexa-line bg-white/80 px-8 py-4 text-base font-black text-lexa-ink transition hover:border-lexa-coral dark:border-[#4a2328] dark:bg-[#161113]/92 dark:text-white dark:shadow-[0_12px_30px_rgba(0,0,0,0.25)] dark:hover:border-[#c94a48] dark:hover:bg-[#1d1417]"
              >
                {t.hero.secondary}
              </Link>
            </div>

            <p className="mt-7 max-w-xl text-sm font-semibold leading-6 text-lexa-muted/70 dark:text-white/40">
              {t.hero.note}
            </p>
          </div>

          {/* Right — phone screenshot */}
          <div className="flex justify-center lg:justify-end">
            <ProductPhone locale={locale} />
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────────── */}
      <section
        id="flow"
        className="border-y border-lexa-line bg-white/50 px-6 py-24 dark:border-white/10 dark:bg-white/[0.03] lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h2 className="text-balance text-4xl font-black tracking-tight text-lexa-ink dark:text-white sm:text-5xl">
              {t.flow.title}
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-lexa-muted dark:text-white/64">
              {t.flow.body}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.flow.items.map(([number, title, body]) => (
              <article
                key={number}
                className="glass-panel group rounded-3xl p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(217,38,46,0.18)] dark:hover:shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
              >
                <p className="text-[13px] font-black tracking-[0.15em] text-lexa-red dark:text-[#ff766e]">
                  {number}
                </p>
                <h3 className="mt-4 text-2xl font-black text-lexa-ink dark:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] font-semibold leading-7 text-lexa-muted dark:text-white/58">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────── */}
      <section id="features" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl text-balance text-4xl font-black tracking-tight text-lexa-ink dark:text-white sm:text-5xl">
            {t.features.title}
          </h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.features.items.map(([title, body], index) => {
              const Icon = featureIcons[index] ?? SparkIcon;
              return (
                <article
                  key={title}
                  className="group rounded-3xl border border-lexa-line bg-white/80 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-lexa-coral/40 hover:shadow-md hover:shadow-lexa-red/8 dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-white/20"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fff0ee] text-lexa-red transition duration-300 group-hover:bg-lexa-red group-hover:text-white dark:bg-white/10 dark:text-[#ff766e] dark:group-hover:bg-[#ff766e] dark:group-hover:text-white">
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

      {/* ── Privacy band ────────────────────────────────────────── */}
      <section className="px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[36px] bg-lexa-ink px-10 py-12 text-white shadow-2xl shadow-black/20 dark:bg-white dark:text-lexa-ink md:px-14 md:py-14">
            {/* Decorative orbs */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lexa-red/18 dark:bg-lexa-red/8" />
            <div className="pointer-events-none absolute -bottom-10 right-40 h-36 w-36 rounded-full bg-lexa-red/12 dark:bg-lexa-red/5" />

            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="max-w-xl text-balance text-3xl font-black sm:text-4xl md:text-5xl">
                  {t.privacyBand.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base font-medium leading-8 opacity-70">
                  {t.privacyBand.body}
                </p>
              </div>
              <Link
                href={`/${locale}/privacy/`}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-lexa-ink shadow-lg transition hover:-translate-y-0.5 dark:bg-lexa-ink dark:text-white"
              >
                {t.privacyBand.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────── */}
      <section className="px-6 py-28 text-center lg:px-10 lg:py-36">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-4xl font-black tracking-tight text-lexa-ink dark:text-white sm:text-5xl md:text-6xl lg:text-[64px]">
            {t.finalCta.title}
          </h2>
          <p className="mt-6 text-lg font-medium text-lexa-muted dark:text-white/64">
            {t.finalCta.body}
          </p>
          <a
            href={site.appStoreUrl}
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-lexa-coral to-lexa-red px-10 py-5 text-base font-black text-white shadow-xl shadow-lexa-red/25 transition hover:-translate-y-0.5 hover:shadow-lexa-red/40"
          >
            {t.finalCta.cta}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
