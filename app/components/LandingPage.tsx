import Image from "next/image";
import Link from "next/link";
import type { Locale } from "../lib/content";
import { content, site } from "../lib/content";
import { FaqAccordion } from "./FaqAccordion";
import { ArrowRight } from "./icons";
import { PhoneShowcase } from "./PhoneShowcase";

export function LandingPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const headingWrapClass = locale === "ja" ? "whitespace-pre-line" : "text-balance";
  const step1 = t.steps[0];
  const step2 = t.steps[1];
  const step3 = t.steps[2];

  return (
    <main>
      {/* ── Hero (Centered product-first) ───────────────────────── */}
      <section className="px-6 pb-20 pt-16 text-center lg:px-10 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-3xl">
          <h1
            className={`font-black tracking-tight text-[#111113] dark:text-[#F5F5F7] ${
              locale === "ja"
                ? "whitespace-pre-line text-[42px] leading-[1.1] sm:text-6xl lg:text-[68px]"
                : "text-balance text-5xl leading-[1.03] sm:text-6xl lg:text-[72px]"
            }`}
          >
            {t.hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6E6E73] dark:text-[#9A9AA3] sm:text-xl">
            {t.hero.body}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
            <a
              href={site.appStoreUrl}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E62236] px-8 py-4 text-base font-bold text-white transition hover:bg-[#cc1c2e]"
            >
              {t.hero.primary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href={`/${locale}/#flow`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-base font-semibold text-[#111113] transition hover:text-[#E62236] dark:text-[#F5F5F7] dark:hover:text-[#ff6b78]"
            >
              {t.hero.secondary}
              <span aria-hidden="true">↓</span>
            </Link>
          </div>

          <p className="mt-5 text-xs font-medium text-[#6E6E73] dark:text-[#9A9AA3] sm:text-sm">
            {t.hero.note}
          </p>
        </div>

        <div className="mt-14 flex justify-center lg:mt-16">
          <PhoneShowcase
            media={t.media.hero}
            size="lg"
            priority
            playLabel={t.controls.playVideo}
            pauseLabel={t.controls.pauseVideo}
          />
        </div>
      </section>

      {/* ── Watch & Tap (2-col matte surfaces) ──────────────────── */}
      <section id="flow" className="px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <h2
              className={`text-3xl font-black tracking-tight text-[#111113] dark:text-[#F5F5F7] sm:text-5xl ${headingWrapClass}`}
            >
              {t.flowSection.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6E6E73] dark:text-[#9A9AA3] sm:text-lg">
              {t.flowSection.body}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* 01 Watch & Scroll */}
            <article className="flex flex-col justify-between rounded-[32px] bg-white p-8 dark:bg-[#16161A] sm:p-10">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#E62236]">
                  {step1.number}
                </span>
                <h3
                  className={`mt-3 text-2xl font-black tracking-tight text-[#111113] dark:text-[#F5F5F7] sm:text-3xl ${headingWrapClass}`}
                >
                  {step1.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#6E6E73] dark:text-[#9A9AA3]">
                  {step1.body}
                </p>
              </div>
              <div className="mt-10 flex justify-center">
                <PhoneShowcase
                  media={t.media[step1.mediaKey]}
                  size="sm"
                  playLabel={t.controls.playVideo}
                  pauseLabel={t.controls.pauseVideo}
                />
              </div>
            </article>

            {/* 02 Tap & Save */}
            <article className="flex flex-col justify-between rounded-[32px] bg-white p-8 dark:bg-[#16161A] sm:p-10">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#E62236]">
                  {step2.number}
                </span>
                <h3
                  className={`mt-3 text-2xl font-black tracking-tight text-[#111113] dark:text-[#F5F5F7] sm:text-3xl ${headingWrapClass}`}
                >
                  {step2.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#6E6E73] dark:text-[#9A9AA3]">
                  {step2.body}
                </p>
              </div>
              <div className="mt-10 flex justify-center">
                <PhoneShowcase
                  media={t.media[step2.mediaKey]}
                  size="sm"
                  playLabel={t.controls.playVideo}
                  pauseLabel={t.controls.pauseVideo}
                />
              </div>
            </article>
          </div>

          {/* 03 Review by Scene (Wide matte surface) */}
          <article className="mt-6 grid items-center gap-10 rounded-[32px] bg-white p-8 dark:bg-[#16161A] sm:p-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#E62236]">
                {step3.number}
              </span>
              <h3
                className={`mt-3 text-3xl font-black tracking-tight text-[#111113] dark:text-[#F5F5F7] sm:text-4xl ${headingWrapClass}`}
              >
                {step3.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[#6E6E73] dark:text-[#9A9AA3] sm:text-lg">
                {step3.body}
              </p>

              {step3.secondaryMediaKey &&
                step3.secondaryLabel &&
                t.media[step3.secondaryMediaKey].kind === "image" && (
                  <div className="mt-8 flex items-center gap-4 rounded-2xl bg-[#F5F5F7] p-4 dark:bg-[#1E1E24]">
                    <Image
                      src={
                        (
                          t.media[step3.secondaryMediaKey] as Extract<
                            (typeof t.media)[typeof step3.secondaryMediaKey],
                            { kind: "image" }
                          >
                        ).src
                      }
                      alt={t.media[step3.secondaryMediaKey].alt}
                      width={128}
                      height={278}
                      className="h-24 w-12 shrink-0 rounded-xl object-cover object-top"
                    />
                    <p className="text-sm font-medium leading-6 text-[#6E6E73] dark:text-[#9A9AA3]">
                      {step3.secondaryLabel}
                    </p>
                  </div>
                )}
            </div>

            <div className="flex justify-center">
              <PhoneShowcase
                media={t.media[step3.mediaKey]}
                size="md"
                playLabel={t.controls.playVideo}
                pauseLabel={t.controls.pauseVideo}
              />
            </div>
          </article>
        </div>
      </section>

      {/* ── Screen Time Blocker (Matte dark contrast section) ───── */}
      <section id="blocker" className="px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 rounded-[36px] bg-[#111113] px-8 py-14 text-white dark:bg-[#16161A] sm:px-12 lg:grid-cols-[340px_1fr] lg:gap-16 lg:py-20">
          <div className="order-2 lg:order-1">
            <PhoneShowcase
              media={t.media.blocker}
              size="md"
              playLabel={t.controls.playVideo}
              pauseLabel={t.controls.pauseVideo}
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2
              className={`text-3xl font-black tracking-tight text-white sm:text-5xl ${headingWrapClass}`}
            >
              {t.blocker.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              {t.blocker.body}
            </p>

            <div className="mt-10 divide-y divide-white/10 border-t border-white/10">
              {t.blocker.items.map((item) => (
                <div key={item.step} className="grid gap-2 py-5 sm:grid-cols-[48px_1fr] sm:items-baseline">
                  <span className="text-xs font-bold tracking-widest text-[#E62236]">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/65">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-white/50">
              {t.blocker.mediaNote}
            </p>
          </div>
        </div>
      </section>

      {/* ── Languages & Capabilities (Editorial list, no icon cards) ── */}
      <section id="features" className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          {/* Languages */}
          <div className="grid gap-8 pb-20 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <h2
                className={`text-3xl font-black tracking-tight text-[#111113] dark:text-[#F5F5F7] sm:text-4xl ${headingWrapClass}`}
              >
                {t.languagesSection.title}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-[#6E6E73] dark:text-[#9A9AA3]">
                {t.languagesSection.body}
              </p>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
              {t.languagesSection.pairs.map((pair) => (
                <div
                  key={pair.name}
                  className="flex items-center justify-between gap-4 py-3.5"
                >
                  <span className="text-base font-bold text-[#111113] dark:text-[#F5F5F7]">
                    {pair.name}
                  </span>
                  <span className="text-sm text-[#6E6E73] dark:text-[#9A9AA3]">
                    {pair.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities 3x2 editorial grid */}
          <div>
            <h2
              className={`max-w-2xl text-3xl font-black tracking-tight text-[#111113] dark:text-[#F5F5F7] sm:text-4xl ${headingWrapClass}`}
            >
              {t.features.title}
            </h2>

            <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {t.features.items.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-black/10 pt-5 dark:border-white/10"
                >
                  <h3 className="text-lg font-bold text-[#111113] dark:text-[#F5F5F7]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#6E6E73] dark:text-[#9A9AA3]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section id="faq" className="px-6 py-12 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-black tracking-tight text-[#111113] dark:text-[#F5F5F7] sm:text-4xl">
            {t.faqSection.title}
          </h2>
          <FaqAccordion items={t.faqSection.items} />
        </div>
      </section>

      {/* ── Final CTA + Privacy note ────────────────────────────── */}
      <section className="px-6 pb-28 pt-20 text-center lg:px-10 lg:pb-36 lg:pt-28">
        <div className="mx-auto max-w-2xl">
          <h2
            className={`text-4xl font-black tracking-tight text-[#111113] dark:text-[#F5F5F7] sm:text-6xl ${headingWrapClass}`}
          >
            {t.finalCta.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#6E6E73] dark:text-[#9A9AA3] sm:text-lg">
            {t.finalCta.body}
          </p>
          <a
            href={site.appStoreUrl}
            className="mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E62236] px-10 py-4 text-base font-bold text-white transition hover:bg-[#cc1c2e]"
          >
            {t.finalCta.cta}
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-16 border-t border-black/10 pt-8 dark:border-white/10">
            <p className="text-sm font-semibold text-[#111113] dark:text-[#F5F5F7]">
              {t.privacyBand.title}
            </p>
            <p className="mx-auto mt-2 max-w-xl text-xs leading-6 text-[#6E6E73] dark:text-[#9A9AA3] sm:text-sm">
              {t.privacyBand.body}
            </p>
            <Link
              href={`/${locale}/privacy/`}
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#E62236] transition hover:underline sm:text-sm"
            >
              {t.privacyBand.cta}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
