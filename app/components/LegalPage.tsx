import type { Locale } from "../lib/content";
import { content, site } from "../lib/content";

type Section = {
  title: string;
  body: string[];
};

type Intro = {
  lastUpdated: string;
  version: string;
  body: string[];
};

export function LegalPage({
  locale,
  title,
  sections,
  intro,
}: {
  locale: Locale;
  title: string;
  sections: Section[];
  intro?: Intro;
}) {
  const t = content[locale];

  return (
    <main className="px-5 py-16 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-black text-lexa-red dark:text-[#ff766e]">
          LEXA
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-normal text-lexa-ink dark:text-white md:text-5xl">
          {title}
        </h1>
        {intro ? (
          <div className="mt-4 text-sm font-semibold text-lexa-muted dark:text-white/54">
            <p>{intro.lastUpdated}</p>
            <p>{intro.version}</p>
          </div>
        ) : (
          <p className="mt-4 text-sm font-semibold text-lexa-muted dark:text-white/54">
            {t.legal.updated}
          </p>
        )}

        {intro && (
          <div className="mt-8 space-y-4 text-base font-medium leading-8 text-lexa-muted dark:text-white/64">
            {intro.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-black text-lexa-ink dark:text-white">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-base font-medium leading-8 text-lexa-muted dark:text-white/64">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-12 rounded-[28px] border border-lexa-line bg-white/72 p-6 text-sm font-semibold leading-7 text-lexa-muted dark:border-white/10 dark:bg-white/[0.05] dark:text-white/62">
          {locale === "ja" ? "お問い合わせ: " : "Contact: "}
          <a
            className="font-black text-lexa-red"
            href={`mailto:${site.supportEmail}`}
          >
            {site.supportEmail}
          </a>
        </div>
      </article>
    </main>
  );
}
