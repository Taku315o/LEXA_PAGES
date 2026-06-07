import Image from "next/image";
import type { Locale } from "../lib/content";

/**
 * Shows the actual app screenshot for the current locale.
 * Theme switching (light/dark image) is handled via CSS dark: variants —
 * no JS needed, no flash, works with the boot-script approach.
 */
export function ProductPhone({ locale }: { locale: Locale }) {
  const baseName = locale === "ja" ? "LEXA_home_ja" : "LEXA_home_eng";

  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[310px] lg:max-w-[350px] xl:max-w-[380px]">
      {/* Warm glow behind the phone */}
      <div className="absolute inset-4 rounded-full bg-lexa-red/20 blur-[80px] dark:bg-lexa-red/15" />

      {/* Phone outer shell */}
      <div className="relative rounded-[52px] border-[8px] border-lexa-ink shadow-[0_40px_100px_rgba(0,0,0,0.25)] dark:border-[#100d10] dark:shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
        {/* Screen — clip inner content */}
        <div className="overflow-hidden rounded-[46px]">
          {/* Light mode screenshot */}
          <Image
            src={`/assets/${baseName}_light.png`}
            alt="LEXA app screenshot"
            width={780}
            height={1688}
            className="block w-full select-none dark:hidden"
            draggable={false}
          />
          {/* Dark mode screenshot */}
          <Image
            src={`/assets/${baseName}_dark.png`}
            alt="LEXA app screenshot"
            width={780}
            height={1688}
            className="hidden w-full select-none dark:block"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
