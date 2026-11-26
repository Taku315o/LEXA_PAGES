import type { PhoneMedia } from "../components/PhoneShowcase";
import type { FaqItem } from "../components/FaqAccordion";

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
  appStoreUrl:
    process.env.NEXT_PUBLIC_APP_STORE_URL ||
    "https://apps.apple.com/app/id6772115459",
};

export type MediaKey = "hero" | "step1" | "step2" | "step3" | "step3Context" | "blocker";

export type StepItem = {
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: readonly string[];
  mediaKey: MediaKey;
  secondaryMediaKey?: MediaKey;
  secondaryLabel?: string;
};

export type LocaleContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    flow: string;
    blocker: string;
    features: string;
    faq: string;
    support: string;
    appStore: string;
  };
  theme: {
    light: string;
    dark: string;
  };
  controls: {
    playVideo: string;
    pauseVideo: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    note: string;
  };
  highlights: readonly {
    label: string;
    detail: string;
  }[];
  flowSection: {
    eyebrow: string;
    title: string;
    body: string;
  };
  steps: readonly StepItem[];
  blocker: {
    eyebrow: string;
    title: string;
    body: string;
    items: readonly {
      step: string;
      title: string;
      detail: string;
    }[];
    mediaNote: string;
  };
  languagesSection: {
    eyebrow: string;
    title: string;
    body: string;
    pairs: readonly {
      name: string;
      tag: string;
    }[];
  };
  features: {
    eyebrow: string;
    title: string;
    items: readonly {
      title: string;
      body: string;
    }[];
  };
  faqSection: {
    eyebrow: string;
    title: string;
    items: readonly FaqItem[];
  };
  privacyBand: {
    title: string;
    body: string;
    cta: string;
  };
  finalCta: {
    title: string;
    body: string;
    cta: string;
  };
  footerTagline: string;
  legal: {
    privacyTitle: string;
    termsTitle: string;
    supportTitle: string;
    updated: string;
  };
  media: Record<MediaKey, PhoneMedia>;
};

const sharedMedia = {
  hero: {
    kind: "video" as const,
    mp4: "/media/feed-scroll.mp4",
    webm: "/media/feed-scroll.webm",
    poster: "/media/feed-scroll-poster.jpg",
    alt: "LEXA video feed with synced dual subtitles and word highlighting",
    aspectRatio: "1206 / 2622",
  },
  step1: {
    kind: "image" as const,
    src: "/media/hero-anime-still.jpg",
    alt: "Real video player with synced dual subtitles and furigana",
    width: 780,
    height: 1696,
  },
  step2: {
    kind: "video" as const,
    mp4: "/media/tap-save.mp4",
    webm: "/media/tap-save.webm",
    poster: "/media/tap-save-poster.jpg",
    alt: "Tapping a word in subtitles to view nuance and save it in one tap",
    aspectRatio: "1206 / 2622",
  },
  step3: {
    kind: "video" as const,
    mp4: "/media/scene-review.mp4",
    webm: "/media/scene-review.webm",
    poster: "/media/scene-review-poster.jpg",
    alt: "Reviewing saved vocabulary while replaying the original video scene",
    aspectRatio: "1206 / 2622",
  },
  step3Context: {
    kind: "image" as const,
    src: "/media/saved-context-still.jpg",
    alt: "Saved word card with nuance notes and original scene link",
    width: 640,
    height: 1392,
  },
  blocker: {
    kind: "video" as const,
    mp4: "/media/tiktok-unlock.mp4",
    webm: "/media/tiktok-unlock.webm",
    poster: "/media/tiktok-unlock-poster.jpg",
    alt: "LEXA Screen Time shield interrupting TikTok scroll, followed by a 5-card video quiz and unlock",
    aspectRatio: "1170 / 2532",
  },
};

export const content: Record<Locale, LocaleContent> = {
  ja: {
    meta: {
      title: "必要なのは、スクロールだけ。 | 動画×記憶アルゴリズムの語学アプリ LEXA",
      description:
        "リアルな動画をスクロールしながら、知らない言葉を1タップで保存。出会ったシーンごとFSRSで復習し、SNSを開く衝動まで学習習慣に変えるiPhone専用アプリ。",
    },
    nav: {
      flow: "仕組み",
      blocker: "ブロッカー",
      features: "特徴",
      faq: "よくある質問",
      support: "サポート",
      appStore: "App Store",
    },
    theme: {
      light: "Light",
      dark: "Dark",
    },
    controls: {
      playVideo: "デモ動画を再生",
      pauseVideo: "デモ動画を一時停止",
    },
    hero: {
      eyebrow: "iPhone専用 · 動画×記憶アルゴリズムの語学アプリ",
      title: "必要なのは、\nスクロールだけ。",
      body: "リアルな動画をスクロールしながら、知らない言葉を1タップで保存。出会ったシーンごと忘却曲線（FSRS）で復習し、ついSNSを開く衝動まで学習習慣に変えます。",
      primary: "App Storeでダウンロード",
      secondary: "仕組みを見る",
      note: "アカウント登録不要・無料で開始。学習データは端末内に安全に保存されます。",
    },
    highlights: [
      {
        label: "リアル動画フィード",
        detail: "発話と同期する二言語字幕＆単語ハイライト",
      },
      {
        label: "シーン付きFSRS復習",
        detail: "出会った映像を再生しながら、忘れる直前に出題",
      },
      {
        label: "Screen Timeブロッカー",
        detail: "SNSを開く前に5問復習。衝動をそのまま継続力に",
      },
    ],
    flowSection: {
      eyebrow: "CORE WORKFLOW",
      title: "観る、タップする、シーンごと覚える。",
      body: "教科書を眺める代わりに、いつもの動画スクロールをそのまま語学トレーニングに。発見から定着までが1本の流れでつながります。",
    },
    steps: [
      {
        number: "01",
        eyebrow: "WATCH & SCROLL",
        title: "教科書の例文じゃない、\n生きた言葉に出会う。",
        body: "リアルな動画フィードに、発話とリアルタイム同期する二言語字幕と単語ハイライトを搭載。ネイティブの自然なスピードと文脈を、スクロール感覚でインプットできます。",
        bullets: [
          "発話中の単語を赤くハイライトして聞き取りをサポート",
          "母語訳つきの二言語字幕で意味を即キャッチ",
          "ループ再生や速度調整で気になるフレーズを何度でも確認",
        ],
        mediaKey: "step1",
      },
      {
        number: "02",
        eyebrow: "TAP & SAVE",
        title: "タップひとつで、\nニュアンスごと保存。",
        body: "字幕の単語をタップすれば、辞書的な意味だけでなく「どんな場面で使うか」「避けたほうがいい表現か」「丁寧な言い換え」や音声まで即座に表示。1タップで復習リストに追加できます。",
        bullets: [
          "カジュアル・スラング・丁寧表現などのニュアンス解説",
          "単語や例文のネイティブ発音をその場で再生",
          "ブックマークボタン1つで動画シーンごと保存",
        ],
        mediaKey: "step2",
      },
      {
        number: "03",
        eyebrow: "REVIEW BY SCENE",
        title: "単語帳の丸暗記から、\nシーンの記憶へ。",
        body: "保存した単語は、出会った動画シーンと紐づいたままFSRS（間隔反復アルゴリズム）で復習スケジュール。復習カード上からワンタップで元のシーンを再生し、映像と文脈ごと記憶に定着させます。",
        bullets: [
          "忘却曲線ベース（FSRS）で忘れそうな単語を優先出題",
          "カード内の「場面を再生」でいつでも当時の動画へ戻れる",
          "4択クイズ・自己評価の両方に対応しスキマ時間で完了",
        ],
        mediaKey: "step3",
        secondaryMediaKey: "step3Context",
        secondaryLabel: "保存した単語は文脈・例文・シーンリンク付きで整理されます",
      },
    ],
    blocker: {
      eyebrow: "HABIT ENGINE · SCREEN TIME",
      title: "SNSを開きたい衝動まで、\n復習に変える。",
      body: "「今日は疲れたから単語帳はいいや」と思う日でも、TikTokやInstagramはつい開いてしまう。LEXAはAppleのScreen Timeと連携し、選んだアプリを開く前に動画シーン付きの復習を挟むことで、無意識のスクロールをそのまま語学の継続力に変えます。",
      items: [
        {
          step: "01",
          title: "いつものアプリを開くとシールド表示",
          detail: "TikTok、Instagram、X、YouTubeなど選んだアプリを開く前にLEXAがストップをかけます。",
        },
        {
          step: "02",
          title: "動画シーン付きで5問サクッと復習",
          detail: "動画から保存した単語や設定中のデッキから出題。出会った場面を思い出しながら回答します。",
        },
        {
          step: "03",
          title: "やり切った達成感で一時解除",
          detail: "クリアすると選んだ使用枠（10分や15分など）だけアプリを解放。罪悪感なく楽しめます。",
        },
      ],
      mediaNote: "※ 日本語話者向けの実際の動画デモ（TikTokスクロール → LEXAシールド → 動画クイズ → 解除）を収録しています。",
    },
    languagesSection: {
      eyebrow: "MULTILINGUAL",
      title: "英語も、日本語も、世界の主要言語も。",
      body: "日本語話者向けの英語学習はもちろん、英語・韓国語・スペイン語・ドイツ語・ロシア語など主要言語に対応。母語と学びたい言語のペアに合わせて、内蔵教材と動画学習を切り替えられます。",
      pairs: [
        { name: "英語", tag: "動画教材 / 内蔵コース" },
        { name: "日本語", tag: "海外学習者向け動画 / JLPT" },
        { name: "韓国語", tag: "TOPIK・基礎単語" },
        { name: "スペイン語", tag: "A1 / A2 語彙" },
        { name: "ドイツ語", tag: "A1 / A2 語彙" },
        { name: "ロシア語", tag: "A1 / A2 語彙" },
      ],
    },
    features: {
      eyebrow: "TOOLKIT",
      title: "出会ってから定着するまで、すべてが一つのアプリに。",
      items: [
        {
          title: "FSRS 間隔反復エンジン",
          body: "端末内で動作する最新の記憶アルゴリズムが、あなたの正答履歴から最適な復習タイミングを計算します。",
        },
        {
          title: "内蔵コース＋自作デッキ＆CSV",
          body: "レベル別の内蔵コースに加え、自分だけの単語帳作成やCSVインポートで手持ちの語彙もまとめて管理。",
        },
        {
          title: "みんなのデッキ",
          body: "他の学習者が作成した共有デッキを探して自分のライブラリに追加。リンクでのデッキ共有にも対応。",
        },
        {
          title: "外部AIへの文法解説連携",
          body: "動画で出会った表現について、ChatGPT / Gemini / Claude へ文脈付きで質問できるプロンプトをワンタップコピー。",
        },
        {
          title: "ブロッカーなしでも学習可能",
          body: "「今日の学習」や動画フィードだけの利用も自由。気分や生活リズムに合わせて柔軟に使えます。",
        },
        {
          title: "アカウント不要＆任意Cloud Backup",
          body: "面倒な登録なしで即スタート。必要なときだけSign in with Appleでバックアップと復元を有効にできます。",
        },
      ],
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "よくある質問",
      items: [
        {
          question: "無料でどこまで使えますか？",
          answer:
            "動画フィードでの視聴・単語保存、FSRSによる通常復習、問題数モード（1回5問）・5分モードでのアプリ解除、自作デッキ作成などを無料で利用できます。より多くの保存シーン再生や詳細な出題設定、一部コースはLEXA Proで解放されます。",
        },
        {
          question: "アカウント登録なしでも始められますか？",
          answer:
            "はい。インストール後すぐにアカウントなしで全基本機能を使い始められます。機種変更などに備えたい場合のみ、任意でSign in with AppleによるCloud Backupを有効にできます。",
        },
        {
          question: "動画から保存した単語は、SNSロック解除の復習にも出題されますか？",
          answer:
            "はい。解除セッションの出題元に動画保存単語を設定することで、SNSを開くたびに自分が見つけた生きたフレーズを復習できます（設定から通常の単語デッキへ切り替えることも可能です）。",
        },
        {
          question: "Screen Time機能を使うと、他のアプリの閲覧履歴が見られますか？",
          answer:
            "いいえ。AppleのScreen Time / Family Controls APIはユーザーが明示的に選んだ対象アプリのブロック・解除にのみ使用し、他アプリ内の閲覧履歴や行動内容をLEXAが取得・監視することはありません。",
        },
        {
          question: "対応デバイスと対応言語を教えてください。",
          answer:
            "iPhone専用アプリです。日本語・英語・韓国語・スペイン語・ドイツ語・ロシア語などに対応しており、動画教材や内蔵コースは母語と学習言語のペアに応じて利用できます。",
        },
      ],
    },
    privacyBand: {
      title: "ローカルファースト。プライバシーを前提に設計。",
      body: "学習記録やFSRSの状態は原則としてあなたのiPhone内に保存されます。Screen Timeは選択したアプリのブロック制御にのみ使用し、アプリ外の閲覧履歴は一切取得しません。広告トラッキングも行いません。",
      cta: "プライバシーポリシーを読む",
    },
    finalCta: {
      title: "そのスクロールを、\n語学力に変えよう。",
      body: "アカウント登録不要。まずは動画フィードをスクロールするところから。",
      cta: "App Storeでダウンロード",
    },
    footerTagline: "必要なのは、スクロールだけ。動画×記憶アルゴリズムのiPhone語学アプリ。",
    legal: {
      privacyTitle: "プライバシーポリシー",
      termsTitle: "利用規約",
      supportTitle: "問い合わせ・サポート",
      updated: "最終更新日: 2026年10月7日",
    },
    media: sharedMedia,
  },
  en: {
    meta: {
      title: "All you need is scrolling. | Learn from Real Videos with LEXA",
      description:
        "Watch real Japanese videos with synced dual subtitles, tap any word to save its nuance, review it inside the exact scene with FSRS, and turn app impulses into study.",
    },
    nav: {
      flow: "How it works",
      blocker: "Blocker",
      features: "Features",
      faq: "FAQ",
      support: "Support",
      appStore: "App Store",
    },
    theme: {
      light: "Light",
      dark: "Dark",
    },
    controls: {
      playVideo: "Play demo video",
      pauseVideo: "Pause demo video",
    },
    hero: {
      eyebrow: "iPhone App · Learn Japanese with Real Videos",
      title: "All you need is scrolling.",
      body: "Watch real Japanese videos with synced dual subtitles. Tap any word to capture its real nuance, review it inside the exact scene with FSRS—and even turn your social-media impulse into review.",
      primary: "Download on the App Store",
      secondary: "See how it works",
      note: "Start free with no account required. Your learning data stays on your device.",
    },
    highlights: [
      {
        label: "Real Video Feed",
        detail: "Word-synced dual subtitles with furigana & highlights",
      },
      {
        label: "Scene-Linked FSRS",
        detail: "Replay the exact clip where you first heard each word",
      },
      {
        label: "Screen Time Blocker",
        detail: "Turn your urge to open TikTok or Instagram into 5 quick cards",
      },
    ],
    flowSection: {
      eyebrow: "CORE WORKFLOW",
      title: "Watch. Tap. Remember the scene.",
      body: "Replace dry textbook drills with a feed you actually want to scroll. Every word you discover stays connected to the real moment you heard it.",
    },
    steps: [
      {
        number: "01",
        eyebrow: "WATCH & SCROLL",
        title: "Real videos, not textbook scripts.",
        body: "Scroll through authentic Japanese YouTube clips, anime, and shorts with word-by-word synced subtitles, furigana, and natural translations—so you hear how people actually talk.",
        bullets: [
          "Live red word highlights track spoken Japanese in real time",
          "Dual subtitles with optional furigana keep comprehension effortless",
          "Loop lines and adjust playback speed without leaving the feed",
        ],
        mediaKey: "step1",
      },
      {
        number: "02",
        eyebrow: "TAP & SAVE",
        title: "One tap for meaning, nuance, and audio.",
        body: "Tap any word in the transcript to see not just a gloss, but real usage notes—whether it's blunt, casual, or when to avoid saying it—plus polite alternatives and pronunciation. Save it in one tap.",
        bullets: [
          "Instant nuance guidance like “Understand it, avoid saying it”",
          "Dictionary form, casual vs. polite forms, and native audio",
          "Bookmark any word directly into your personal review queue",
        ],
        mediaKey: "step2",
      },
      {
        number: "03",
        eyebrow: "REVIEW BY SCENE",
        title: "Remember the scene, not just the word.",
        body: "Saved words stay linked to the exact video moment where you met them. LEXA schedules reviews with FSRS right before you forget—and lets you replay the scene anytime context fades.",
        bullets: [
          "FSRS spaced repetition adapts to your memory curve on-device",
          "Tap “Play the Scene” on any review card to rewatch the clip",
          "Switch seamlessly between 4-choice quizzes and self-graded cards",
        ],
        mediaKey: "step3",
        secondaryMediaKey: "step3Context",
        secondaryLabel: "Every saved word keeps its context sentence, nuance, and video link",
      },
    ],
    blocker: {
      eyebrow: "HABIT ENGINE · SCREEN TIME",
      title: "Even your urge to scroll becomes review.",
      body: "You might forget to open a flashcard app, but you never forget to check your feed. Pair LEXA with Apple Screen Time to pause distracting apps like TikTok or Instagram—then answer 5 quick cards from your saved videos to unlock guilt-free time.",
      items: [
        {
          step: "01",
          title: "Reach for a blocked app",
          detail: "LEXA's custom shield steps in gently before TikTok, Instagram, or X opens.",
        },
        {
          step: "02",
          title: "Review 5 scene-backed cards",
          detail: "Practice vocabulary you saved from videos—or any active deck—right when the impulse hits.",
        },
        {
          step: "03",
          title: "Unlock with your chosen allowance",
          detail: "Finish your review to unlock 10 or 15 minutes of guilt-free access before it shields again.",
        },
      ],
      mediaNote: "Recorded from real iPhone Screen Time flow (shown with Japanese UI on device).",
    },
    languagesSection: {
      eyebrow: "MULTILINGUAL",
      title: "Built for Japanese—and ready for your next language.",
      body: "Dive deep into real Japanese videos with English explanations, or explore English, Korean, Spanish, German, and Russian courses built on the same FSRS engine.",
      pairs: [
        { name: "Japanese", tag: "Real Video Feed · JLPT N5–N2" },
        { name: "English", tag: "Video Feed · Everyday Decks" },
        { name: "Korean", tag: "TOPIK · Hangul & Vocab" },
        { name: "Spanish", tag: "A1 / A2 Vocabulary" },
        { name: "German", tag: "A1 / A2 Vocabulary" },
        { name: "Russian", tag: "A1 / A2 Vocabulary" },
      ],
    },
    features: {
      eyebrow: "TOOLKIT",
      title: "Everything you need to keep words sticking.",
      items: [
        {
          title: "On-device FSRS Engine",
          body: "Powered by a Rust FSRS core that schedules each card at the exact moment before you forget.",
        },
        {
          title: "Built-in Courses, Custom Decks & CSV",
          body: "Combine video vocabulary with structured courses, your own custom cards, or CSV imports.",
        },
        {
          title: "Everyone's Decks",
          body: "Discover decks shared by other learners and add them to your library—or share yours by link.",
        },
        {
          title: "AI Grammar Prompt Handoff",
          body: "Copy a context-rich prompt from any video word to ask ChatGPT, Gemini, or Claude for deeper grammar breakdowns.",
        },
        {
          title: "Study with or without Blocking",
          body: "Use Screen Time unlocks to build momentum, or browse the video feed and Today's Study anytime.",
        },
        {
          title: "No Account Required & Optional Backup",
          body: "Start instantly with zero sign-up. Connect Sign in with Apple only if you want Cloud Backup.",
        },
      ],
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          question: "What can I do in LEXA for free?",
          answer:
            "You can browse the video feed, tap words for meanings and save them, review with FSRS, use the Screen Time blocker (5 questions or 5-minute timed mode), and create custom decks for free. LEXA Pro unlocks unlimited saved scene replays, flexible question counts, and additional courses.",
        },
        {
          question: "Do I need an account to start?",
          answer:
            "No. LEXA is local-first and account-free by default. You can start watching videos and studying immediately, and optionally connect Sign in with Apple only if you want Cloud Backup.",
        },
        {
          question: "Can words I save from videos appear when unlocking blocked apps?",
          answer:
            "Yes. You can set your saved video vocabulary as your unlock study source—so every time you reach for TikTok or Instagram, you review the real phrases you discovered.",
        },
        {
          question: "Does Screen Time let LEXA see my browsing history?",
          answer:
            "Never. Apple's Screen Time / Family Controls APIs are used strictly to shield and temporarily unlock the apps you explicitly choose. LEXA cannot read what you browse inside other apps.",
        },
        {
          question: "Which devices and languages are supported?",
          answer:
            "LEXA is built exclusively for iPhone. It supports Japanese, English, Korean, Spanish, German, and Russian learning paths depending on your native and target language pair.",
        },
      ],
    },
    privacyBand: {
      title: "Local-first by design. Private by default.",
      body: "Your study history and FSRS state stay on your iPhone unless you opt into Cloud Backup. Screen Time permissions are used solely to block and unlock your chosen apps—never to track what you watch or browse.",
      cta: "Read Privacy Policy",
    },
    finalCta: {
      title: "Turn every scroll into fluency.",
      body: "No sign-up required. Open the feed and save your first phrase in seconds.",
      cta: "Download on the App Store",
    },
    footerTagline: "All you need is scrolling. Video-first language learning for iPhone.",
    legal: {
      privacyTitle: "Privacy Policy",
      termsTitle: "Terms of Service",
      supportTitle: "Support",
      updated: "Last updated: October 7, 2026",
    },
    media: sharedMedia,
  },
};
