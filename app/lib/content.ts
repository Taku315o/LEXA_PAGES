export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

function normalizeDomain(value: string) {
  return value.replace(/\/+$/, "");
}

export const site = {
  domain: normalizeDomain(process.env.NEXT_PUBLIC_SITE_URL || "https://lexa-learn.com"),
  supportEmail: "support@lexa-learn.com",
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL || "#",
};

export const content = {
  ja: {
    meta: {
      title: "スクロールを英語学習に変える",
      description:
        "LEXAは、スマホを開きたい衝動を英語学習の復習機会に変えるiPhone専用アプリです。",
    },
    nav: {
      features: "特徴",
      flow: "仕組み",
      privacy: "プライバシー",
      support: "サポート",
      appStore: "App Store",
    },
    theme: {
      light: "Light",
      dark: "Dark",
    },
    hero: {
      title: "スクロールを英語学習に変える",
      body: "「ついアプリを開きたくなる瞬間」が、あなたにとって最高の復習タイミング。LEXAは、スマホ制限と最新の記憶アルゴリズムを組み合わせた、新しい仕組みの英語学習アプリです。",
      primary: "App Storeで見る",
      secondary: "仕組みを見る",
      note: "面倒な登録は一切なし。学習記録はすべてあなたの端末内にのみ保存されます。",
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
      manual: "自発学習",
    },
    flow: {
      title: "「つい見ちゃう」を、学ぶ時間に変える",
      body: "LEXAは単なるスマホ制限アプリではありません。「SNSを開きたい」という無意識の衝動を利用して、英語学習を習慣化する新しい仕組みです。",
      items: [
        [
          "01",
          "いつものアプリを開く",
          "設定したSNSなどのアプリを開こうとすると、LEXAのシールドが起動して一旦ストップをかけます。",
        ],
        [
          "02",
          "サクッと復習する",
          "アプリのロックを解除するために、数問の英単語クイズに挑戦。忘れかけていた単語をベストなタイミングで復習できます。",
        ],
        [
          "03",
          "罪悪感なく楽しむ",
          "クリアすると、15分間だけアプリが自由に。やるべき学習を終えた後なので、心置きなくリフレッシュできます。",
        ],
      ],
    },
    features: {
      title: "スマホ制限と英語学習を、これ一つで",
      items: [
        [
          "最新の記憶アルゴリズム",
          "忘却曲線に基づき、あなたが「忘れそうな単語」を優先して出題します。",
        ],
        [
          "スキマ時間の自主学習",
          "SNSを開かない日でも、普通の単語帳アプリとして自分のペースで学習できます。",
        ],
        [
          "継続を支える記録",
          "毎日の学習達成度を可視化。SNSを開く衝動が、そのまま継続のモチベーションに変わります。",
        ],
        [
          "アカウント登録不要で開始",
          "通常の学習は登録なしで開始。任意のCloud Backupを使えば、作成したカードや学習データを復元できます。",
        ],
      ],
    },
    privacyBand: {
      title: "データは端末内を基本に管理",
      body: "Appleのスクリーンタイム機能は、アプリのブロックにのみ使用します。閲覧履歴の監視は一切行いません。学習データは通常端末内に保存され、任意でCloud Backupを有効にした場合のみ復元に必要なデータをクラウドに保存します。",
      cta: "プライバシーポリシーを読む",
    },
    finalCta: {
      title: "次に開きたくなった瞬間を、復習に。",
      body: "LEXAはiPhone専用アプリとして開発中です。",
      cta: "App Storeで見る",
    },
    legal: {
      privacyTitle: "プライバシーポリシー",
      termsTitle: "利用規約",
      supportTitle: "問い合わせ・サポート",
      updated: "最終更新日: 2026年6月8日",
    },
  },
  en: {
    meta: {
      title: "Turn scrolling into learning",
      description:
        "LEXA is an iPhone-exclusive app that turns the impulse to open your phone into language review opportunities.",
    },
    nav: {
      features: "Features",
      flow: "How it works",
      privacy: "Privacy",
      support: "Support",
      appStore: "App Store",
    },
    theme: {
      light: "Light",
      dark: "Dark",
    },
    hero: {
      title: "Turn scrolling into learning",
      body: "That moment when you reach for an app is your best time to review. LEXA is a new kind of Japanese learning app that combines an app blocker with an advanced memory algorithm.",
      primary: "View on App Store",
      secondary: "See how it works",
      note: "No tedious registration. All learning data is safely stored only on your device.",
    },
    phone: {
      due: "Review now",
      detail: "Words ready to stick in your memory",
      start: "Start now",
      unlock: "Temporarily unlocked",
      unlockDetail: "Automatically blocks again after a set time",
      streak: "2-day streak",
      streakDetail: "Complete an unlock session today to keep it",
      record: "Today's record",
      unlocks: "Unlocks",
      manual: "Manual study",
    },
    flow: {
      title: "Turn 'just checking' into learning time",
      body: "LEXA is more than just an app blocker. It's a new system that uses your unconscious urge to open social media to build a learning habit.",
      items: [
        [
          "01",
          "Open your usual apps",
          "When you try to open blocked apps like social media, LEXA's shield steps in to pause you.",
        ],
        [
          "02",
          "Quick review",
          "Take a quick Japanese vocabulary quiz to unlock the app. Review words you're about to forget at the perfect time.",
        ],
        [
          "03",
          "Enjoy guilt-free",
          "Clear the quiz for 15 minutes of free access. Enjoy your app guilt-free knowing you've done your learning.",
        ],
      ],
    },
    features: {
      title: "App blocker and learning app, all in one",
      items: [
        [
          "Advanced memory algorithm",
          "Based on the forgetting curve, it prioritizes the words you are most likely to forget.",
        ],
        [
          "Self-study in spare time",
          "Study at your own pace like a normal flashcard app, even on days you don't open social media.",
        ],
        [
          "Streaks to keep you going",
          "Visualize your daily achievements. The urge to open apps turns directly into motivation to continue.",
        ],
        [
          "Start without an account",
          "Use the ordinary learning features without registration. Optional Cloud Backup can restore your cards and learning data.",
        ],
      ],
    },
    privacyBand: {
      title: "Your data is local by default",
      body: "Apple's Screen Time feature is used strictly for blocking apps. We never monitor your browsing history. Learning data is stored locally by default; optional Cloud Backup stores only data needed for restoration.",
      cta: "Read Privacy Policy",
    },
    finalCta: {
      title: "Make your next impulse a review session.",
      body: "LEXA is currently in development exclusively for iPhone.",
      cta: "View on App Store",
    },
    legal: {
      privacyTitle: "Privacy Policy",
      termsTitle: "Terms of Service",
      supportTitle: "Support",
      updated: "Last updated: June 3, 2026",
    },
  },
} satisfies Record<Locale, Record<string, unknown>>;
