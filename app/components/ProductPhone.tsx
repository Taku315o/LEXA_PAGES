import type { Locale } from "../lib/content";
import { content } from "../lib/content";
import { ArrowRight, BookIcon, CalendarIcon, LockIcon } from "./icons";

export function ProductPhone({ locale }: { locale: Locale }) {
  const t = content[locale].phone;

  return (
    <div className="mx-auto w-full max-w-[360px] rounded-[44px] border border-lexa-line bg-lexa-ink p-3 shadow-2xl shadow-red-950/20 dark:border-white/12 dark:bg-black">
      <div className="overflow-hidden rounded-[34px] bg-gradient-to-b from-[#fff8f6] to-white p-5 dark:from-[#211719] dark:to-[#0f0b0d]">
        <div className="mb-5 flex justify-end">
          <div className="grid h-12 w-12 place-items-center rounded-full border border-lexa-line bg-white/80 dark:border-white/10 dark:bg-white/8">
            <span className="h-5 w-5 rounded-full border-2 border-lexa-muted dark:border-white/58" />
          </div>
        </div>

        <div className="glass-panel rounded-[28px] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-2xl font-black text-lexa-muted dark:text-white/70">
                {t.due}
              </p>
              <div className="mt-2 flex items-end gap-1 text-lexa-ink dark:text-white">
                <span className="text-6xl font-light leading-none">300</span>
                <span className="pb-1 text-xl font-black">{locale === "ja" ? "語" : "words"}</span>
              </div>
              <p className="mt-2 text-sm font-semibold leading-5 text-lexa-muted dark:text-white/58">
                {t.detail}
              </p>
            </div>
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-lexa-muted dark:bg-white/10 dark:text-white/70">
              <BookIcon className="h-5 w-5" />
            </div>
          </div>
          <button className="mt-5 inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#ff6a62] to-lexa-red py-2 pl-2 pr-5 text-sm font-black text-white shadow-lg shadow-red-500/30">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-lexa-red">
              <ArrowRight className="h-5 w-5" />
            </span>
            {t.start}
          </button>
        </div>

        <div className="mt-4 glass-panel rounded-[28px] p-4">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[#fff1ef] text-lexa-red dark:bg-white/10">
              <LockIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xl font-black text-lexa-ink dark:text-white">{t.unlock}</p>
              <p className="mt-1 text-xs font-semibold leading-5 text-lexa-muted dark:text-white/58">
                {t.unlockDetail}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 glass-panel rounded-[28px] p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-3xl font-black text-lexa-ink dark:text-white">{t.streak}</p>
              <p className="mt-1 text-sm font-semibold text-lexa-muted dark:text-white/58">
                {t.streakDetail}
              </p>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#ffe5e2] text-lexa-red dark:bg-white/10">
              <CalendarIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-7 gap-2">
            {[0, 1, 2, 3, 4, 5, 6].map((day) => (
              <span
                key={day}
                className={`h-8 rounded-full ${
                  day < 2 ? "bg-lexa-red" : "bg-lexa-line dark:bg-white/12"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 glass-panel rounded-[28px] p-5">
          <p className="text-2xl font-black text-lexa-muted dark:text-white/70">{t.record}</p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <Metric label={t.unlocks} value="1" />
            <Metric label={t.manual} value="0" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-lexa-line bg-white/70 p-4 dark:border-white/10 dark:bg-white/6">
      <p className="text-xs font-bold text-lexa-muted dark:text-white/58">{label}</p>
      <p className="mt-1 text-3xl font-black text-lexa-ink dark:text-white">{value}</p>
    </div>
  );
}
