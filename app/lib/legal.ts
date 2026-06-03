import { site, type Locale } from "./content";

export function privacySections(locale: Locale) {
  if (locale === "ja") {
    return [
      {
        title: "取得する情報",
        body: [
          "LEXAは、学習カード、復習履歴、学習設定、ブロック設定、解除セッションの状態など、アプリの機能提供に必要な情報を扱います。",
          "Screen Time / Family Controls によってユーザーが選択したアプリ、カテゴリ、Webドメインの情報は、ブロック制御と一時解除のために利用されます。"
        ]
      },
      {
        title: "利用目的",
        body: [
          "取得した情報は、英単語の復習、FSRSによる復習タイミングの計算、ブロック対象の制御、一時解除、学習状況の表示、サポート対応のために利用します。",
          "LEXAは、ユーザーが選択したブロック対象を、広告配信や第三者への販売のために利用しません。"
        ]
      },
      {
        title: "端末中心の保存",
        body: [
          "LEXAは、学習データと設定を端末中心に保存する設計です。FSRSの計算も端末内で完結することを前提としています。",
          "将来、アカウント機能や同期機能を追加する場合は、その機能で扱う情報と目的を本ポリシーに反映します。"
        ]
      },
      {
        title: "分析",
        body: [
          "本Webサイトでは、Cloudflare Web Analyticsを利用する場合があります。これはサイトの閲覧状況を把握し、ページ改善に役立てるためのものです。",
          "アプリ内の学習内容やScreen Timeの選択内容を、本Webサイトの分析目的で取得することはありません。"
        ]
      },
      {
        title: "お問い合わせ",
        body: [
          `プライバシーに関するお問い合わせは ${site.supportEmail} までご連絡ください。`
        ]
      }
    ];
  }

  return [
    {
      title: "Information We Handle",
      body: [
        "LEXA handles information needed to provide the app, including learning cards, review history, learning settings, blocking settings, and unlock session state.",
        "Apps, categories, and web domains selected through Screen Time / Family Controls are used to control blocking and temporary unlocks."
      ]
    },
    {
      title: "How We Use Information",
      body: [
        "Information is used for vocabulary review, FSRS scheduling, blocking control, temporary unlocks, learning status display, and support.",
        "LEXA does not use your selected blocking targets for advertising sales or sale to third parties."
      ]
    },
    {
      title: "Local-first Storage",
      body: [
        "LEXA is designed to store learning data and settings primarily on device. FSRS scheduling is designed to run on device.",
        "If account or sync features are added in the future, this policy will be updated to explain what information is handled and why."
      ]
    },
    {
      title: "Analytics",
      body: [
        "This website may use Cloudflare Web Analytics to understand site traffic and improve pages.",
        "The website analytics do not collect in-app learning content or Screen Time selections."
      ]
    },
    {
      title: "Contact",
      body: [`For privacy questions, contact ${site.supportEmail}.`]
    }
  ];
}

export function termsSections(locale: Locale) {
  if (locale === "ja") {
    return [
      {
        title: "利用条件",
        body: [
          "LEXAは、iPhone向けの英語学習およびスクリーンタイム制御補助アプリです。利用には、対応するiOS環境と必要な権限が必要です。",
          "ユーザーは、自身の責任でブロック対象や学習内容を設定するものとします。"
        ]
      },
      {
        title: "機能上の制約",
        body: [
          "LEXAはAppleが提供するScreen Time / Family Controls関連APIの範囲内で動作します。OSの仕様や制限により、ブロック、通知、解除の挙動が変わる場合があります。",
          "ブロック対象アプリへの自動リダイレクトなど、OSが保証しない挙動についてLEXAは保証しません。"
        ]
      },
      {
        title: "学習成果",
        body: [
          "LEXAは英語学習の継続を支援しますが、特定の学習成果、試験結果、能力向上を保証するものではありません。"
        ]
      },
      {
        title: "有料機能",
        body: [
          "有料機能を提供する場合、価格、期間、解約方法などはApp Store上の表示およびアプリ内表示に従います。",
          "購入、返金、サブスクリプション管理はAppleの規約と手続きに従います。"
        ]
      },
      {
        title: "禁止事項と免責",
        body: [
          "不正アクセス、リバースエンジニアリング、他者の利用妨害、法令に違反する利用は禁止します。",
          "LEXAの利用により発生した間接的損害、端末設定やOS仕様に起因する不具合について、法令で認められる範囲で責任を負いません。"
        ]
      }
    ];
  }

  return [
    {
      title: "Use of the Service",
      body: [
        "LEXA is an English learning and Screen Time control companion app for iPhone. Use requires a supported iOS environment and required permissions.",
        "You are responsible for selecting blocked targets and managing your learning content."
      ]
    },
    {
      title: "Platform Limitations",
      body: [
        "LEXA operates within Apple's Screen Time / Family Controls APIs. Blocking, notifications, and unlock behavior may change due to OS behavior or limitations.",
        "LEXA does not guarantee behavior that iOS itself does not guarantee, such as automatic redirection to a blocked app."
      ]
    },
    {
      title: "Learning Results",
      body: [
        "LEXA supports consistent English learning, but does not guarantee specific learning outcomes, test scores, or skill improvements."
      ]
    },
    {
      title: "Paid Features",
      body: [
        "If paid features are offered, pricing, duration, and cancellation details follow the App Store and in-app displays.",
        "Purchases, refunds, and subscription management are handled under Apple's terms and procedures."
      ]
    },
    {
      title: "Prohibited Use and Disclaimer",
      body: [
        "Unauthorized access, reverse engineering, interference with others, and unlawful use are prohibited.",
        "To the extent permitted by law, LEXA is not liable for indirect damages or issues caused by device settings or OS behavior."
      ]
    }
  ];
}

export function supportSections(locale: Locale) {
  if (locale === "ja") {
    return [
      {
        title: "お問い合わせ先",
        body: [
          `LEXAに関するお問い合わせは ${site.supportEmail} までご連絡ください。`
        ]
      },
      {
        title: "送ってほしい情報",
        body: [
          "不具合の場合は、iPhoneの機種、iOSバージョン、LEXAのバージョン、発生した画面、再現手順を添えてください。",
          "Screen Timeやブロック設定に関する問題の場合は、選択した対象の種類と、期待した挙動/実際の挙動を書いてください。"
        ]
      },
      {
        title: "返信について",
        body: [
          "返信には時間がかかる場合があります。すべてのお問い合わせに個別回答を保証するものではありませんが、重要な不具合や改善要望は開発の参考にします。"
        ]
      }
    ];
  }

  return [
    {
      title: "Contact",
      body: [`For LEXA support, email ${site.supportEmail}.`]
    },
    {
      title: "What to Include",
      body: [
        "For bugs, include your iPhone model, iOS version, LEXA version, the screen where it happened, and steps to reproduce.",
        "For Screen Time or blocking issues, include the type of target selected and the expected versus actual behavior."
      ]
    },
    {
      title: "Replies",
      body: [
        "Replies may take time. We cannot guarantee an individual response to every message, but important bugs and product feedback will be used to improve LEXA."
      ]
    }
  ];
}
