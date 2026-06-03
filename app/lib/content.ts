export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const site = {
  domain: "https://lexa-learn.com",
  supportEmail: "support@lexa-learn.com",
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL || "#"
};

export const content = {
  ja: {
    meta: {
      title: "衝動を復習に変える",
      description:
        "LEXAは、スマホを開きたい衝動を英語学習の復習機会に変えるiPhone専用アプリです。"
    },
    nav: {
      features: "特徴",
      flow: "仕組み",
      privacy: "プライバシー",
      support: "サポート",
      appStore: "App Store"
    },
    theme: {
      light: "Light",
      dark: "Dark"
    },
    hero: {
      title: "衝動を復習に変える",
      body:
        "アプリを開きたくなった瞬間を、英単語の復習タイミングに。LEXAはスクリーンタイムのブロックとFSRSを組み合わせた、iPhone専用の英語学習アプリです。",
      primary: "App Storeで見る",
      secondary: "仕組みを見る",
      note: "日本語話者の英語学習に最適化。学習データは端末中心に保存されます。"
    },
    phone: {
      due: "今すぐ復習",
      detail: "今やると記憶に残りやすい単語",
      start: "今すぐ始める",
      unlock: "一時解除中",
      unlockDetail: "一定時間の使用後に自動で再ブロックされます",
      streak: "2日連続",
      streakDetail: "今日の解除セッション完了で継続",
      record: "今日の記録",
      unlocks: "解除",
      manual: "自発学習"
    },
    flow: {
      title: "開きたい、を学ぶ時間に変える",
      body:
        "LEXAは単なるアプリブロッカーではありません。衝動が発生する頻度そのものを、復習の頻度に変えます。",
      items: [
        ["01", "対象アプリを開こうとする", "選んだアプリやカテゴリにシールドを表示します。"],
        ["02", "LEXAで復習する", "出題された英単語カードを答え、FSRSで次回タイミングを更新します。"],
        ["03", "一時的に使える", "規定数の復習後、対象アプリの使用枠が付与され、使い切ると再ブロックされます。"]
      ]
    },
    features: {
      title: "ブロッカーと学習アプリをひとつに",
      items: [
        ["FSRS", "Anki系の間隔反復で、忘れそうなカードを優先して復習します。"],
        ["Manual Study", "対象アプリを開かない日も、Dueカードを自発的に消化できます。"],
        ["Streak", "解除セッションの完了を習慣として可視化します。"],
        ["Local-first", "学習データと設定は端末中心。アカウントなしで始められます。"]
      ]
    },
    privacyBand: {
      title: "Screen Timeは、ブロックのために使う",
      body:
        "LEXAは選択されたアプリ・カテゴリ・Webドメインをブロック制御に使います。学習データは端末中心に保存され、FSRS計算も端末内で完結する設計です。",
      cta: "プライバシーポリシー"
    },
    finalCta: {
      title: "次に開きたくなった瞬間を、復習に。",
      body: "LEXAはiPhone専用アプリとして開発中です。",
      cta: "App Storeで見る"
    },
    legal: {
      privacyTitle: "プライバシーポリシー",
      termsTitle: "利用規約",
      supportTitle: "問い合わせ・サポート",
      updated: "最終更新日: 2026年6月3日"
    }
  },
  en: {
    meta: {
      title: "Turn impulses into review",
      description:
        "LEXA is an iPhone app that turns the impulse to open distracting apps into English review."
    },
    nav: {
      features: "Features",
      flow: "How it works",
      privacy: "Privacy",
      support: "Support",
      appStore: "App Store"
    },
    theme: {
      light: "Light",
      dark: "Dark"
    },
    hero: {
      title: "Turn impulses into review",
      body:
        "When you reach for a blocked app, LEXA turns that moment into English vocabulary review. It combines Screen Time blocking with FSRS spaced repetition for iPhone.",
      primary: "View on App Store",
      secondary: "See how it works",
      note: "Built for English learners. Learning data is designed to stay local-first."
    },
    phone: {
      due: "Review now",
      detail: "Words that are ready to stick",
      start: "Start now",
      unlock: "Temporarily unlocked",
      unlockDetail: "Apps are blocked again after your usage allowance",
      streak: "2-day streak",
      streakDetail: "Complete an unlock session today to keep it",
      record: "Today",
      unlocks: "Unlocks",
      manual: "Manual study"
    },
    flow: {
      title: "Make the urge to open an app useful",
      body:
        "LEXA is not just an app blocker. It turns the frequency of your impulses into the frequency of your review.",
      items: [
        ["01", "Open a blocked app", "LEXA shows a shield for the apps, categories, or domains you selected."],
        ["02", "Review in LEXA", "Answer vocabulary cards and update the next review timing with FSRS."],
        ["03", "Get temporary access", "After the required review, your selected apps unlock for a usage allowance, then block again."]
      ]
    },
    features: {
      title: "A blocker and a learning app in one",
      items: [
        ["FSRS", "Spaced repetition prioritizes cards that are likely to need review."],
        ["Manual Study", "Clear due cards even on days when you do not open blocked apps."],
        ["Streak", "Track completed unlock sessions as a habit."],
        ["Local-first", "Learning data and settings are designed to stay on device. No account required to start."]
      ]
    },
    privacyBand: {
      title: "Screen Time is used for blocking",
      body:
        "LEXA uses selected apps, categories, and web domains to control blocking. Learning data is designed to be stored local-first, and FSRS scheduling runs on device.",
      cta: "Privacy Policy"
    },
    finalCta: {
      title: "Make your next impulse a review session.",
      body: "LEXA is being built as an iPhone app.",
      cta: "View on App Store"
    },
    legal: {
      privacyTitle: "Privacy Policy",
      termsTitle: "Terms of Service",
      supportTitle: "Support",
      updated: "Last updated: June 3, 2026"
    }
  }
} satisfies Record<Locale, Record<string, unknown>>;
