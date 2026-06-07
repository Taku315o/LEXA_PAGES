import { site, type Locale } from "./content";

export function privacySections(locale: Locale) {
  if (locale === "ja") {
    return [
      {
        title: "取得する情報",
        body: [
          "LEXAは、学習カード、復習履歴、学習設定、ブロック設定、解除セッションの状態など、アプリの機能提供に必要な情報を扱います。",
          "Screen Time / Family Controls によってユーザーが選択したアプリ、カテゴリ、Webドメインの情報は、ブロック制御と一時解除のために利用されます。",
        ],
      },
      {
        title: "利用目的",
        body: [
          "取得した情報は、英単語の復習、FSRSによる復習タイミングの計算、ブロック対象の制御、一時解除、学習状況の表示、サポート対応のために利用します。",
          "LEXAは、ユーザーが選択したブロック対象を、広告配信や第三者への販売のために利用しません。",
        ],
      },
      {
        title: "端末中心の保存",
        body: [
          "LEXAは、学習データと設定を端末中心に保存する設計です。FSRSの計算も端末内で完結することを前提としています。",
          "将来、アカウント機能や同期機能を追加する場合は、その機能で扱う情報と目的を本ポリシーに反映します。",
        ],
      },
      {
        title: "分析",
        body: [
          "本Webサイトでは、Cloudflare Web Analyticsを利用する場合があります。これはサイトの閲覧状況を把握し、ページ改善に役立てるためのものです。",
          "アプリ内の学習内容やScreen Timeの選択内容を、本Webサイトの分析目的で取得することはありません。",
        ],
      },
      {
        title: "お問い合わせ",
        body: [
          `プライバシーに関するお問い合わせは ${site.supportEmail} までご連絡ください。`,
        ],
      },
    ];
  }

  return [
    {
      title: "Information We Handle",
      body: [
        "LEXA handles information needed to provide the app, including learning cards, review history, learning settings, blocking settings, and unlock session state.",
        "Apps, categories, and web domains selected through Screen Time / Family Controls are used to control blocking and temporary unlocks.",
      ],
    },
    {
      title: "How We Use Information",
      body: [
        "Information is used for vocabulary review, FSRS scheduling, blocking control, temporary unlocks, learning status display, and support.",
        "LEXA does not use your selected blocking targets for advertising sales or sale to third parties.",
      ],
    },
    {
      title: "Local-first Storage",
      body: [
        "LEXA is designed to store learning data and settings primarily on device. FSRS scheduling is designed to run on device.",
        "If account or sync features are added in the future, this policy will be updated to explain what information is handled and why.",
      ],
    },
    {
      title: "Analytics",
      body: [
        "This website may use Cloudflare Web Analytics to understand site traffic and improve pages.",
        "The website analytics do not collect in-app learning content or Screen Time selections.",
      ],
    },
    {
      title: "Contact",
      body: [`For privacy questions, contact ${site.supportEmail}.`],
    },
  ];
}

export function termsIntro(locale: Locale) {
  if (locale === "ja") {
    return {
      lastUpdated: "最終更新日：2026年6月8日",
      version: "バージョン：1.0",
      body: [
        "本利用規約（以下「本規約」といいます）は、LEXA運営者（以下「運営者」といいます）が提供するiPhone向けアプリ「LEXA」（以下「本アプリ」といいます）の利用条件を定めるものです。",
        "ユーザーは、本アプリをダウンロード、インストール、起動、または利用することにより、本規約に同意したものとみなされます。本規約に同意しない場合、本アプリを利用することはできません。",
      ],
    };
  }

  return {
    lastUpdated: "Last updated: June 8, 2026",
    version: "Version: 1.0",
    body: [
      "These Terms of Use set forth the conditions for using LEXA, an iPhone app provided by the operator of LEXA.",
      "By downloading, installing, launching, or using the app, you are deemed to have agreed to these Terms. If you do not agree, you may not use the app.",
    ],
  };
}

export function termsSections(locale: Locale) {
  if (locale === "ja") {
    return [
      {
        title: "第1条 本アプリの内容",
        body: [
          "本アプリは、ユーザーがスマートフォンを開く前に英語の復習を行うことを支援する、学習・アプリブロック支援アプリです。",
          "本アプリは、Appleが提供するScreen Time、Family Controls、Managed Settings、Device Activity等の機能を利用し、ユーザーが選択したアプリ、カテゴリ、Webドメインに対して一時的な制限を設定する場合があります。",
          "本アプリは、英単語・英語表現の復習、学習カードの管理、復習履歴の保存、学習進捗の表示、Streak表示、ブロック解除セッション等の機能を提供します。",
        ],
      },
      {
        title: "第2条 利用条件",
        body: [
          "ユーザーは、本規約、App Storeの利用条件、Appleの関連規約、適用される法令を遵守して本アプリを利用するものとします。",
          "未成年者が本アプリを利用する場合は、保護者の同意および管理のもとで利用するものとします。",
          "本アプリは、日本国内において13歳未満の児童を主な対象としていません。その他の国または地域で未成年者に関する異なる法令が適用される場合、ユーザーは当該法令を遵守するものとします。",
        ],
      },
      {
        title: "第3条 アカウント",
        body: [
          "本アプリは、現時点ではアカウント登録機能を提供していません。",
          "本アプリの主要データは、原則としてユーザーの端末内に保存されます。端末の変更、故障、初期化、アプリ削除、iCloudバックアップの状態等により、データが失われる場合があります。",
          "将来、本アプリがアカウント機能、クラウド同期、バックアップ機能等を提供する場合、運営者は必要に応じて本規約およびプライバシーポリシーを変更します。",
        ],
      },
      {
        title: "第4条 Screen Time関連機能について",
        body: [
          "本アプリのブロック機能を利用するには、iOSのScreen Time、Family Controls等に関する権限が必要です。",
          "ユーザーがこれらの権限を許可しない場合、本アプリのブロック機能は利用できない、または一部制限される場合があります。",
          "本アプリのブロック、解除、再ブロック、使用量監視等の挙動は、iOS、AppleのAPI、端末設定、権限状態、OSバージョン、バックグラウンド処理の状態等に依存します。そのため、運営者は、本アプリが常に正確にアプリをブロックすること、常に指定したタイミングで解除または再ブロックされることを保証しません。",
          "ユーザーは、本アプリを自己管理および学習支援の目的で利用するものとし、他人の端末、行動、アプリ利用を本人の同意なく制限・監視する目的で利用してはなりません。",
        ],
      },
      {
        title: "第5条 学習機能について",
        body: [
          "本アプリは、英語学習、復習、単語記憶、学習習慣の形成を支援するための機能を提供します。",
          "運営者は、本アプリの利用により、特定の英語力向上、試験合格、学習成果、成績向上、集中力向上、スマートフォン利用時間の減少、依存状態の改善等を保証しません。",
          "本アプリ内の単語、訳、例文、学習コンテンツ、復習タイミング、難易度等について、運営者は正確性や完全性の向上に努めますが、誤り、不足、不適切な表現が含まれないことを保証しません。",
        ],
      },
      {
        title: "第6条 ユーザー作成コンテンツ",
        body: [
          "ユーザーは、本アプリ内で単語カード、メモ、学習内容等を作成することができます。",
          "ユーザーが作成したコンテンツの内容については、ユーザー自身が責任を負います。",
          "ユーザーは、法令に違反する内容、第三者の権利を侵害する内容、差別・脅迫・嫌がらせ・暴力・違法行為を助長する内容、公序良俗に反する内容、本アプリの運営・保守・セキュリティに支障を及ぼす内容、その他運営者が不適切と判断する内容を作成、保存、利用してはなりません。",
          "本アプリが現時点でクラウド同期や共有機能を提供していない場合、ユーザー作成コンテンツは原則として端末内に保存されます。ただし、ユーザーが問い合わせ時にスクリーンショットやログ等として任意に送信した場合、その範囲で運営者が確認する場合があります。",
        ],
      },
      {
        title: "第7条 課金・有料機能",
        body: [
          "本アプリは、一部機能を有料で提供する場合があります。",
          "有料機能、サブスクリプション、買い切りプラン等の購入は、Apple App Storeのアプリ内課金システムを通じて行われます。",
          "購入価格、課金期間、更新条件、無料トライアルの有無、解約方法、返金条件等は、App Store上に表示される内容およびAppleの定める条件に従います。",
          "サブスクリプションを解約する場合、ユーザーはApp StoreまたはApple IDの設定から手続きを行う必要があります。本アプリを削除しただけでは、サブスクリプションが自動的に解約されるとは限りません。",
          "返金については、原則としてAppleの返金手続きおよび判断に従います。運営者は、Appleを通じて行われた購入について、独自に返金を保証するものではありません。",
        ],
      },
      {
        title: "第8条 禁止行為",
        body: [
          "ユーザーは、法令または公序良俗に違反する行為、本規約に違反する行為、本アプリを不正な目的で利用する行為、他人の端末やアプリ利用を本人の同意なく制限・監視・管理する行為をしてはなりません。",
          "ユーザーは、本アプリのブロック機能、解除機能、課金機能、学習機能を不正に回避、改変、妨害してはなりません。",
          "ユーザーは、本アプリのリバースエンジニアリング、逆コンパイル、逆アセンブル、改変、解析、不正アクセス、クラッキング、チート、改ざん、脆弱性探索を目的とする行為をしてはなりません。",
          "ユーザーは、本アプリのコンテンツ、デザイン、プログラム、商標等を無断で複製、転載、販売、再配布してはなりません。",
          "その他、運営者、他のユーザー、第三者の権利または利益を侵害する行為、または運営者が不適切と判断する行為を禁止します。",
        ],
      },
      {
        title: "第9条 知的財産権",
        body: [
          "本アプリに関する著作権、商標権、その他一切の知的財産権は、運営者または正当な権利者に帰属します。",
          "ユーザーは、本規約に従って本アプリを利用する範囲で、個人的かつ非独占的、譲渡不能、再許諾不能な利用権を付与されます。",
          "本アプリの利用は、ユーザーに対して本アプリまたは関連コンテンツの知的財産権を譲渡するものではありません。",
          "ユーザーが本アプリ内で作成した単語カード、メモ等のコンテンツに関する権利は、原則としてユーザーに帰属します。ただし、ユーザーは、本アプリの機能提供、保存、表示、バックアップ、サポート対応に必要な範囲で、運営者が当該コンテンツを取り扱うことを許諾するものとします。",
        ],
      },
      {
        title: "第10条 サービスの変更・停止・終了",
        body: [
          "運営者は、必要に応じて、本アプリの全部または一部の機能を変更、追加、停止、終了することがあります。",
          "運営者は、保守、点検、更新、iOS・App Store・Apple API等の仕様変更への対応、不具合、セキュリティ上の問題、法令・行政機関・裁判所等の要請、災害、通信障害、システム障害、その他不可抗力が発生した場合、本アプリの提供を一時停止または終了することがあります。",
          "運営者は、本アプリの変更、停止、終了によりユーザーに生じた損害について、運営者に故意または重過失がある場合を除き、責任を負いません。",
        ],
      },
      {
        title: "第11条 保証の否認",
        body: [
          "運営者は、本アプリが常に正常に動作すること、不具合、エラー、中断、遅延がないこと、すべての端末、OSバージョン、設定環境で利用できることを保証しません。",
          "運営者は、ブロック、解除、再ブロックが常にユーザーの意図通りに動作すること、学習データ、設定、履歴が常に保持されることを保証しません。",
          "運営者は、学習成果、英語力向上、試験合格、集中力向上、スマートフォン利用時間の減少等の結果が得られること、本アプリ内のコンテンツが常に正確、完全、最新であること、本アプリがユーザーの特定の目的に適合することを保証しません。",
        ],
      },
      {
        title: "第12条 免責",
        body: [
          "ユーザーは、自己の責任において本アプリを利用するものとします。",
          "本アプリの利用または利用不能によりユーザーに損害が生じた場合であっても、運営者は、運営者に故意または重過失がある場合を除き、責任を負いません。",
          "運営者が責任を負う場合であっても、その責任は、ユーザーに現実に発生した通常かつ直接の損害に限られ、特別損害、間接損害、逸失利益、データ消失、事業機会の喪失等については責任を負いません。",
          "有料ユーザーに対して運営者が損害賠償責任を負う場合、その責任額は、当該ユーザーが損害発生時点から過去12か月間に本アプリに対して実際に支払った金額を上限とします。ただし、法令によりこの制限が認められない場合はこの限りではありません。",
        ],
      },
      {
        title: "第13条 ユーザーデータ",
        body: [
          "本アプリのデータの取扱いについては、別途定めるプライバシーポリシーに従います。",
          "ユーザーは、端末の故障、紛失、初期化、アプリの削除、OSの不具合、iCloudバックアップの設定等により、本アプリ内のデータが失われる可能性があることを理解するものとします。",
          "運営者は、本アプリがクラウド同期やバックアップ機能を提供していない限り、端末内データの復元を保証しません。",
        ],
      },
      {
        title: "第14条 規約違反への対応",
        body: [
          "運営者は、ユーザーが本規約に違反した場合、または違反するおそれがあると判断した場合、事前通知なく、本アプリの利用制限、有料機能の利用停止、問い合わせ対応の停止、不正利用防止のために必要な措置、その他運営者が必要と判断する措置を行うことがあります。",
          "運営者は、これらの措置によりユーザーに生じた損害について、運営者に故意または重過失がある場合を除き、責任を負いません。",
        ],
      },
      {
        title: "第15条 規約の変更",
        body: [
          "運営者は、必要に応じて本規約を変更することがあります。",
          "軽微な変更、誤字修正、表現の明確化等については、本アプリ内またはWebサイト上に掲載した時点で効力を生じるものとします。",
          "ユーザーの権利または義務に重大な影響を与える変更を行う場合、運営者は、アプリ内表示、Webサイト、App Storeの説明欄、その他適切な方法により通知します。",
          "変更後にユーザーが本アプリを利用した場合、ユーザーは変更後の規約に同意したものとみなされます。",
        ],
      },
      {
        title: "第16条 Appleとの関係",
        body: [
          "本アプリは、Apple App Storeを通じて提供されます。",
          "本アプリのダウンロード、購入、アプリ内課金、サブスクリプション、返金、App Store上のレビュー、App Storeの利用については、Appleの規約およびポリシーが適用されます。",
          "本規約は、運営者とユーザーとの間の利用条件を定めるものであり、Appleは本アプリの提供、保守、サポートについて責任を負うものではありません。ただし、Appleの規約または適用法令によりAppleに認められる権利は妨げられません。",
          "AppleおよびAppleの子会社は、本規約の第三者受益者であり、ユーザーが本規約に同意することにより、Appleは本規約をユーザーに対して行使する権利を有します。",
        ],
      },
      {
        title: "第17条 準拠法・管轄",
        body: [
          "本規約は、日本法に準拠して解釈されます。",
          "本アプリまたは本規約に関してユーザーと運営者との間で紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。ただし、適用される消費者保護法令により、別途の管轄が認められる場合はこの限りではありません。",
        ],
      },
      {
        title: "第18条 お問い合わせ",
        body: [
          "本規約に関するお問い合わせは、以下までご連絡ください。",
          "運営者：飛澤拓虎",
          `メールアドレス：${site.supportEmail}`,
        ],
      },
    ];
  }

  return [
    {
      title: "Use of the Service",
      body: [
        "LEXA is an English learning and Screen Time control companion app for iPhone. Use requires a supported iOS environment and required permissions.",
        "You are responsible for selecting blocked targets and managing your learning content.",
      ],
    },
    {
      title: "Platform Limitations",
      body: [
        "LEXA operates within Apple's Screen Time / Family Controls APIs. Blocking, notifications, and unlock behavior may change due to OS behavior or limitations.",
        "LEXA does not guarantee behavior that iOS itself does not guarantee, such as automatic redirection to a blocked app.",
      ],
    },
    {
      title: "Learning Results",
      body: [
        "LEXA supports consistent English learning, but does not guarantee specific learning outcomes, test scores, or skill improvements.",
      ],
    },
    {
      title: "Paid Features",
      body: [
        "If paid features are offered, pricing, duration, and cancellation details follow the App Store and in-app displays.",
        "Purchases, refunds, and subscription management are handled under Apple's terms and procedures.",
      ],
    },
    {
      title: "Prohibited Use and Disclaimer",
      body: [
        "Unauthorized access, reverse engineering, interference with others, and unlawful use are prohibited.",
        "To the extent permitted by law, LEXA is not liable for indirect damages or issues caused by device settings or OS behavior.",
      ],
    },
  ];
}

export function supportSections(locale: Locale) {
  if (locale === "ja") {
    return [
      {
        title: "お問い合わせ先",
        body: [
          `LEXAに関するお問い合わせは ${site.supportEmail} までご連絡ください。`,
        ],
      },
      {
        title: "送ってほしい情報",
        body: [
          "不具合の場合は、iPhoneの機種、iOSバージョン、LEXAのバージョン、発生した画面、再現手順を添えてください。",
          "Screen Timeやブロック設定に関する問題の場合は、選択した対象の種類と、期待した挙動/実際の挙動を書いてください。",
        ],
      },
      {
        title: "返信について",
        body: [
          "返信には時間がかかる場合があります。すべてのお問い合わせに個別回答を保証するものではありませんが、重要な不具合や改善要望は開発の参考にします。",
        ],
      },
    ];
  }

  return [
    {
      title: "Contact",
      body: [`For LEXA support, email ${site.supportEmail}.`],
    },
    {
      title: "What to Include",
      body: [
        "For bugs, include your iPhone model, iOS version, LEXA version, the screen where it happened, and steps to reproduce.",
        "For Screen Time or blocking issues, include the type of target selected and the expected versus actual behavior.",
      ],
    },
    {
      title: "Replies",
      body: [
        "Replies may take time. We cannot guarantee an individual response to every message, but important bugs and product feedback will be used to improve LEXA.",
      ],
    },
  ];
}
