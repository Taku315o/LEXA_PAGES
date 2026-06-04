"use client";

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

const redirectScript = `
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const prefersJapanese = languages.some((language) =>
    language.toLowerCase().startsWith("ja")
  );
  window.location.replace(prefersJapanese ? "/ja/" : "/en/");
`;

export default function LanguageGatePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fffafa] px-6 text-lexa-ink dark:bg-[#110d0f] dark:text-white">
      <Script id="lang-redirect" strategy="beforeInteractive">
        {redirectScript}
      </Script>
      <div className="w-full max-w-sm text-center">
        <Image
          src="/assets/lexa-logo.png"
          alt="LEXA"
          width={64}
          height={64}
          className="mx-auto mb-6 h-16 w-16 rounded-[18px]"
        />
        <h1 className="text-3xl font-bold tracking-normal">LEXA</h1>
        <p className="mt-3 text-sm leading-6 text-lexa-muted dark:text-white/62">
          Redirecting to your language...
        </p>
        <noscript>
          <p className="mt-6 text-sm text-lexa-muted dark:text-white/62">
            JavaScript is disabled. Please choose a language.
          </p>
        </noscript>
        <div className="mt-8 grid grid-cols-2 gap-3">
          <Link
            href="/ja/"
            className="rounded-full border border-lexa-line px-5 py-3 text-sm font-bold transition hover:border-lexa-coral dark:border-white/16"
          >
            日本語
          </Link>
          <Link
            href="/en/"
            className="rounded-full border border-lexa-line px-5 py-3 text-sm font-bold transition hover:border-lexa-coral dark:border-white/16"
          >
            English
          </Link>
        </div>
      </div>
    </main>
  );
}
