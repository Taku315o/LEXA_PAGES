import { site, type Locale } from "./content";

export function privacyIntro(locale: Locale) {
  if (locale === "ja") {
    return {
      lastUpdated: "最終更新日：2026年6月8日",
      version: "バージョン：1.0",
      body: [
        "LEXA（以下「本アプリ」といいます）は、スマートフォンを開く前に英語の復習を行う、iPhone向けの学習・アプリブロック支援アプリです。",
        "本プライバシーポリシー（以下「本ポリシー」といいます）は、本アプリにおけるユーザー情報の取扱いについて説明するものです。",
      ],
    };
  }

  return {
    lastUpdated: "Last updated: June 8, 2026",
    version: "Version: 1.0",
    body: [
      'LEXA (the "App") is a learning and app-blocking companion app for iPhone designed to help you review English before opening selected apps.',
      "This Privacy Policy explains how we handle your information when you use the App.",
    ],
  };
}

export function privacySections(locale: Locale) {
  if (locale === "ja") {
    return [
      {
        title: "1. 基本方針",
        body: [
          "本アプリは、ユーザーのプライバシーを重視し、機能提供に必要な範囲を超えて情報を取得しません。",
          "本アプリの学習データ、復習履歴、カード情報、ブロック設定、解除履歴などの主要データは、原則としてユーザーの端末内に保存されます。",
          "本アプリは、ユーザーの個人情報、学習データ、ブロック対象情報を第三者に販売しません。また、広告配信、広告トラッキング、データブローカーへの提供を目的として利用しません。",
        ],
      },
      {
        title: "2. 取得・利用する情報",
        body: [
          "本アプリは、機能提供のために以下の情報を端末内に保存・処理する場合があります。\n\n・アプリ設定\n・表示言語、学習言語の設定\n・ブロック対象として選択されたアプリ、カテゴリ、Webドメインに関する情報\n・一時解除の状態\n・学習カード、ユーザー作成カード、カードの出題設定\n・復習履歴、復習状態、学習進捗\n・解除セッションの履歴\n・Streakなどの学習継続情報\n・有料機能の利用可否を確認するために必要な課金状態に関する情報",
          "これらの情報は、英語学習、復習スケジュールの管理、アプリブロック、解除セッション、再ブロック、学習進捗の表示、設定管理、有料機能の提供のために利用されます。",
        ],
      },
      {
        title: "3. 本体アプリとExtension間の情報共有",
        body: [
          "本アプリは、AppleのScreen Time関連機能を利用するため、本体アプリと関連するExtensionの間で、機能に必要な最小限の情報を共有します。",
          "共有される情報には、ブロック対象の選択情報、解除状態、使用量監視に必要な状態情報、エラー復旧に必要な情報などが含まれる場合があります。",
          "これらの情報は、iOSのApp Group共有領域に保存され、本アプリ本体および本アプリに関連するExtensionから利用されます。",
        ],
      },
      {
        title: "4. Screen Time / Family Controlsの利用",
        body: [
          "本アプリは、ユーザーの許可に基づき、Appleが提供するScreen Time、Family Controls、Managed Settings、Device Activity等の機能を利用します。",
          "これにより、本アプリはユーザーが選択したアプリ、カテゴリ、Webドメインに対して制限を適用し、学習完了後に一時解除し、一定の使用後に再度制限を適用します。",
          "本アプリは、ユーザーのすべてのScreen Time履歴を取得することを目的としていません。また、端末内のすべてのアプリ一覧を収集することも目的としていません。ユーザーが明示的に選択した対象のみを、本アプリのブロック機能のために利用します。",
        ],
      },
      {
        title: "5. DeviceActivityによるバックグラウンド処理",
        body: [
          "本アプリは、ブロック解除後の使用量監視および再ブロックのため、iOSによりバックグラウンドで起動される処理を行う場合があります。",
          "この処理は、ユーザーが設定した使用枠に達した場合に再度ブロックを適用するために利用されます。詳細なScreen Time履歴を収集・分析することを目的とするものではありません。",
        ],
      },
      {
        title: "6. 課金情報",
        body: [
          "本アプリは、有料機能、サブスクリプション、買い切りプラン等を提供する場合があります。",
          "本アプリの課金処理は、Apple App Storeのアプリ内課金システムを通じて行われます。また、本アプリは課金状態の確認、購入復元、有料機能の管理、不正利用防止のためにRevenueCat, Inc.が提供する課金管理サービスを利用します。",
          "本アプリの運営者は、ユーザーのクレジットカード番号、銀行口座情報、Apple IDのパスワードなどの支払い情報を直接取得しません。",
          "本アプリまたはRevenueCatでは、有料機能の提供に必要な範囲で、匿名ユーザーID、購入履歴、商品ID、サブスクリプション状態、購入復元に必要な情報、アプリバージョン、端末・OSに関する情報などが処理される場合があります。",
          "これらの情報は、有料機能の利用可否確認、サブスクリプション状態の確認、購入復元、不正利用防止、課金関連の不具合調査のために利用されます。",
        ],
      },
      {
        title: "7. 問い合わせ時に取得する情報",
        body: [
          "ユーザーがメール等で問い合わせを行った場合、以下の情報を取得する場合があります。\n\n・メールアドレス\n・問い合わせ本文\n・ユーザーが任意で提供したスクリーンショット、ログ、端末情報\n・アプリバージョン、OSバージョンなどの不具合調査に必要な情報",
          "これらの情報は、問い合わせ対応、不具合調査、品質改善のために利用します。",
          "問い合わせ情報は、対応完了後、原則として3年間保存し、その後削除または匿名化します。ただし、法令対応、紛争対応、不正利用防止等のために必要な場合は、より長く保存する場合があります。",
        ],
      },
      {
        title: "8. TestFlight利用時の情報",
        body: [
          "本アプリをTestFlightで利用する場合、Appleによりクラッシュログ、端末情報、利用状況に関する情報が収集・処理される場合があります。",
          "これらの情報は、ベータテスト、不具合修正、品質改善のために利用されます。",
        ],
      },
      {
        title: "9. 本アプリが収集しない情報",
        body: [
          "本アプリは、現時点において以下の情報を、アプリの通常利用において収集しません。\n\n・氏名\n・住所\n・電話番号\n・連絡先一覧\n・写真ライブラリ\n・カメラ画像\n・音声データ\n・正確な位置情報\n・健康情報\n・生体情報\n・顔データ\n・指紋情報\n・端末内のすべてのアプリ一覧\n・本アプリ外の閲覧履歴\n・広告識別子を利用したトラッキング情報",
          "ただし、ユーザーが問い合わせ時に任意でこれらの情報を送信した場合、その問い合わせ対応のために一時的に処理される場合があります。",
        ],
      },
      {
        title: "10. 外部送信・第三者サービス",
        body: [
          "本アプリは、現在、第三者広告ネットワーク、広告トラッキングSDK、広告目的の分析SDKを使用していません。",
          "本アプリの提供に関連して、以下の外部サービスに情報が送信される場合があります。\n\n【Apple Inc.】\n送信される可能性のある情報：購入情報、課金状態、クラッシュログ、診断情報、App Store上の利用状況、端末・OSに関する情報\n利用目的：アプリ配布、アプリ内課金、購入復元、品質改善、ベータテスト\n\n【Apple iCloud】\n送信される可能性のある情報：端末内に保存された本アプリのデータの一部\n利用目的：ユーザーがiCloudバックアップを有効にしている場合のバックアップ・復元\n\n【RevenueCat, Inc.】\n送信される可能性のある情報：匿名ユーザーID、購入履歴、商品ID、サブスクリプション状態、購入復元に必要な情報、アプリバージョン、端末・OSに関する情報\n利用目的：課金状態の確認、購入復元、有料機能の管理、不正利用防止、課金関連の不具合調査\n\n【メールサービス提供者】\n送信される可能性のある情報：メールアドレス、問い合わせ本文、添付ファイル、送信日時等\n利用目的：問い合わせ対応、サポート、不具合調査",
          "将来、分析SDK、クラウド同期、広告サービス、その他の外部サービス等を導入する場合は、本プライバシーポリシーを更新し、送信先、送信情報、利用目的を明示します。",
        ],
      },
      {
        title: "11. iCloudバックアップ",
        body: [
          "本アプリのデータは、原則としてユーザーの端末内に保存されます。",
          "ただし、ユーザーがiCloudバックアップを有効にしている場合、端末内に保存された本アプリのデータがAppleのiCloudバックアップに含まれる場合があります。",
          "iCloudバックアップの管理、保存、復元、削除は、AppleのサービスおよびユーザーのApple ID設定に従います。",
        ],
      },
      {
        title: "12. 第三者提供",
        body: [
          "本アプリは、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。\n\n・ユーザー本人の同意がある場合\n・本アプリの機能提供、問い合わせ対応、課金処理、不具合調査のために必要な範囲で外部サービスを利用する場合\n・法令に基づく場合\n・裁判所、行政機関、警察等の公的機関から適法な開示要請を受けた場合\n・本アプリ、ユーザー、第三者の権利、財産、安全を保護するために必要な場合",
          "本アプリは、ユーザー情報を第三者に販売しません。",
        ],
      },
      {
        title: "13. データの保存期間と削除",
        body: [
          "端末内に保存される学習データ、復習履歴、カード情報、設定情報、ブロック設定、解除履歴等は、ユーザーがアプリ内で削除またはリセットするか、本アプリをアンインストールするまで保持されます。",
          "ただし、iOS、App Group共有領域、iCloudバックアップの仕様により、アンインストール後も一部のデータが端末内またはiCloudバックアップ上に残る場合があります。",
          "本アプリにリセット機能が提供されている場合、ユーザーはアプリ内から学習データ、設定、履歴等を削除できます。",
          "問い合わせ情報、課金関連情報など、端末外で処理される情報の削除を希望する場合は、本ポリシー末尾の連絡先までお問い合わせください。ただし、法令、会計、税務、不正利用防止、紛争対応等のために、一定期間保存が必要な場合があります。",
        ],
      },
      {
        title: "14. セキュリティ",
        body: [
          "本アプリは、ユーザー情報の漏えい、紛失、改ざん、不正アクセス等を防ぐため、合理的な安全管理措置を講じます。",
          "本アプリの主要データは、iOSのアプリ領域または本アプリに関連するExtensionと共有される専用領域に保存されます。",
          "ただし、いかなる保存方法、通信方法、電子的処理方法も100%安全であることは保証できません。ユーザーは、端末のロック、OSの更新、不審なアプリのインストール防止等、自身の端末管理にも注意してください。",
        ],
      },
      {
        title: "15. 未成年者の利用",
        body: [
          "本アプリは、日本国内において13歳未満の児童を主な対象としていません。",
          "13歳未満の方が本アプリを利用する場合は、保護者の同意および管理のもとで利用してください。",
          "欧州経済領域、英国、米国、その他の地域において、未成年者の個人情報の取扱いに関する基準が異なる場合は、適用される法令に従います。",
          "運営者が、適用法令に反して未成年者から個人情報を取得したことを認識した場合、合理的な範囲で速やかに削除等の対応を行います。",
        ],
      },
      {
        title: "16. ユーザーの権利",
        body: [
          "ユーザーは、適用される法令の範囲内で、運営者が保有する個人情報について、開示、訂正、利用停止、削除等を求めることができる場合があります。",
          "ただし、本アプリの主要な学習データや設定情報は端末内に保存されており、運営者がサーバー上で保持していない場合があります。その場合、運営者は当該端末内データに直接アクセスできません。",
          "端末内データの削除は、アプリ内の削除・リセット機能、またはアプリのアンインストールにより行ってください。",
          "課金状態に関する情報は、AppleおよびRevenueCatの仕組みにより処理される場合があります。削除や確認を希望する場合は、本ポリシー末尾の連絡先までお問い合わせください。ただし、購入履歴、会計、税務、不正利用防止、紛争対応等のために、一定期間保存が必要な場合があります。",
        ],
      },
      {
        title: "17. プライバシーポリシーの変更",
        body: [
          "本アプリは、必要に応じて本プライバシーポリシーを変更することがあります。",
          "軽微な変更、誤字修正、表現の明確化等については、本ページに掲載した時点で効力を生じるものとします。",
          "ユーザーの権利、データの利用目的、外部送信先、第三者提供、保存期間等に重要な変更がある場合は、アプリ内表示、Webサイト、App Storeの説明欄、その他適切な方法により通知します。",
        ],
      },
      {
        title: "18. 改訂履歴",
        body: ["2026年6月8日 v1.0 初版作成"],
      },
      {
        title: "19. お問い合わせ",
        body: [
          "本プライバシーポリシー、ユーザー情報の取扱い、データ削除、開示請求、その他プライバシーに関するお問い合わせは、以下までご連絡ください。",
          "運営者：飛澤拓虎",
          `メールアドレス：${site.supportEmail}`,
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
      'These Terms of Use ("Terms") set out the conditions for using "LEXA" ("App"), an iPhone application provided by the operator of LEXA ("Operator", "we", "us", or "our").',
      "By downloading, installing, launching, accessing, or using the App, you agree to these Terms. If you do not agree to these Terms, you must not use the App.",
      'These Terms apply to users in the European Union and the European Economic Area ("EU/EEA"), unless a separate local version is provided.',
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
      title: "1. Description of the App",
      body: [
        "LEXA is a learning and app-blocking companion app designed to help users review English before opening selected apps or websites.",
        "The App may use Apple-provided technologies, including Screen Time, Family Controls, Managed Settings, and Device Activity, to help users temporarily restrict access to apps, app categories, and web domains selected by the user.",
        "The App may provide features such as vocabulary review, learning card management, review history, learning progress, streak display, unlock sessions, and related learning support functions.",
        "The App is intended to support self-directed learning and self-management. It is not intended to be used to control, monitor, or restrict another person’s device usage without that person’s valid consent.",
      ],
    },
    {
      title: "2. Eligibility and Use Requirements",
      body: [
        "You must use the App in compliance with these Terms, the App Store terms, applicable Apple terms and policies, and all applicable laws and regulations.",
        "If you are a minor under the laws of your country of residence, you may use the App only with the consent and supervision of a parent or legal guardian.",
        "The App is not primarily directed at children under the age of 13. If a higher minimum age or additional consent requirement applies in your country or region, you are responsible for complying with that requirement.",
        "To use certain features of the App, you need a compatible iPhone, a supported iOS version, and the required system permissions.",
      ],
    },
    {
      title: "3. Account and Local Data",
      body: [
        "At the time of this version, the App does not provide account registration.",
        "The App is designed primarily to store core data on your device. This may include learning cards, review history, learning settings, blocking settings, and unlock session information.",
        "Your data may be lost if your device is changed, damaged, reset, lost, or if the App is deleted, if iCloud backup is disabled or incomplete, or if an operating system or device issue occurs.",
        "If we introduce accounts, cloud sync, backup, or similar features in the future, we will update these Terms and/or our Privacy Policy as appropriate.",
      ],
    },
    {
      title: "4. Screen Time and Blocking Features",
      body: [
        "To use the App’s blocking-related features, you must grant the necessary permissions related to Screen Time, Family Controls, Managed Settings, Device Activity, or similar Apple frameworks.",
        "If you do not grant the required permissions, some blocking features may not be available or may not function as expected.",
        "The behavior of blocking, unblocking, re-blocking, monitoring, notifications, and unlock sessions depends on iOS, Apple APIs, device settings, permission status, operating system version, background execution, and other technical conditions outside our full control.",
        "For this reason, we do not guarantee that the App will always block selected apps, categories, or web domains accurately, or that unblocking or re-blocking will always occur at the exact intended time.",
        "You must not use the App to restrict, monitor, or manage another person’s device, app usage, or online activity without that person’s valid consent and lawful authority.",
      ],
    },
    {
      title: "5. Learning Features",
      body: [
        "The App provides features intended to support English learning, vocabulary review, memorization, and habit formation.",
        "We do not guarantee any specific learning result, exam result, improvement in English ability, grade improvement, increase in concentration, reduction in smartphone usage, or improvement in digital dependency or similar conditions.",
        "We aim to improve the accuracy and quality of the App’s words, translations, examples, learning content, review timing, and difficulty settings. However, we do not guarantee that such content will always be accurate, complete, up to date, or suitable for your specific learning needs.",
      ],
    },
    {
      title: "6. User-Created Content",
      body: [
        "You may create learning cards, notes, vocabulary entries, and other learning content within the App.",
        "You are responsible for the content you create, store, or use in the App.",
        "You must not create, store, or use content that:\n- violates applicable law;\n- infringes copyright, trademark rights, privacy rights, publicity rights, reputation rights, or other rights of any third party;\n- contains discriminatory, threatening, harassing, violent, or abusive material;\n- encourages unlawful activity;\n- is obscene, harmful, or contrary to public order or morality;\n- interferes with the operation, maintenance, or security of the App;\n- or is otherwise reasonably considered inappropriate by us.",
        "At the time of this version, if the App does not provide cloud sync or sharing features, user-created content is generally stored on your device. However, if you voluntarily send screenshots, logs, text, or other information to us for support, we may review such information to the extent necessary to respond to your inquiry.",
      ],
    },
    {
      title: "7. Paid Features and Subscriptions",
      body: [
        "The App may offer certain features as paid features, subscriptions, one-time purchases, or other paid plans.",
        "Purchases are made through Apple’s in-app purchase system and the App Store.",
        "Prices, subscription periods, renewal conditions, free trial availability, cancellation methods, and refund conditions are shown in the App Store, in the App, or in Apple’s purchase interface, and are subject to Apple’s applicable terms and procedures.",
        "If you purchase a subscription, you must cancel it through the App Store or your Apple ID settings. Deleting the App does not necessarily cancel your subscription.",
        "Refunds for purchases made through Apple are generally handled by Apple in accordance with Apple’s refund process and policies. We do not independently guarantee refunds for purchases processed by Apple.",
        "Nothing in these Terms limits any mandatory consumer rights you may have under applicable EU or national consumer protection laws.",
      ],
    },
    {
      title: "8. Prohibited Conduct",
      body: [
        "You must not:\n- violate any applicable law or regulation;\n- violate these Terms;\n- use the App for unlawful, fraudulent, abusive, or harmful purposes;\n- use the App to restrict, monitor, or control another person’s device or app usage without valid consent;\n- bypass, tamper with, disrupt, or interfere with the App’s blocking, unlocking, paid, or learning features;\n- reverse engineer, decompile, disassemble, modify, analyze, or create derivative works of the App, except where such restriction is prohibited by mandatory law;\n- attempt unauthorized access to the App, related systems, or third-party systems;\n- engage in cracking, cheating, tampering, vulnerability probing, or security circumvention;\n- place excessive load on the App or related systems;\n- copy, reproduce, distribute, sell, resell, sublicense, or commercially exploit the App, its content, design, code, trademarks, or other materials without authorization;\n- infringe the rights or interests of us, other users, Apple, or any third party;\n- or engage in any conduct that we reasonably consider inappropriate or harmful.",
      ],
    },
    {
      title: "9. Intellectual Property",
      body: [
        "All intellectual property rights in and to the App, including copyrights, trademarks, design rights, software, text, images, UI, logos, and other materials, belong to us or the relevant rights holders.",
        "Subject to your compliance with these Terms, we grant you a personal, limited, non-exclusive, non-transferable, non-sublicensable license to use the App for your own personal use.",
        "These Terms do not transfer any ownership rights in the App or related content to you.",
        "As between you and us, you generally retain rights to learning cards, notes, and other content that you create in the App. However, you grant us a limited permission to handle such content to the extent necessary to provide App functionality, storage, display, backup where applicable, troubleshooting, and support, subject to our Privacy Policy.",
      ],
    },
    {
      title: "10. Changes, Suspension, and Termination of the App",
      body: [
        "We may change, add, suspend, discontinue, or terminate all or part of the App or its features when reasonably necessary.",
        "We may suspend or terminate the App or certain features in cases including:\n- maintenance, inspection, or updates;\n- changes to iOS, the App Store, Apple APIs, or related platform requirements;\n- bugs, defects, or security issues;\n- legal, regulatory, administrative, or court requests;\n- natural disasters, communication failures, system failures, or other events beyond our reasonable control;\n- or other cases where we reasonably consider suspension or termination necessary.",
        "To the extent permitted by applicable law, we are not liable for damages arising from changes, suspension, or termination of the App, unless caused by our intentional misconduct or gross negligence.",
      ],
    },
    {
      title: "11. Disclaimers",
      body: [
        'The App is provided on an "as is" and "as available" basis, subject to your mandatory rights under applicable law.',
        "We do not guarantee that:\n- the App will always operate normally;\n- the App will be free from bugs, errors, interruptions, delays, or defects;\n- the App will be available on all devices, operating system versions, settings, or environments;\n- blocking, unblocking, or re-blocking will always work exactly as intended;\n- learning data, settings, or history will always be preserved;\n- the App will produce any specific learning outcome, exam result, concentration improvement, or reduction in smartphone usage;\n- content in the App will always be accurate, complete, current, or suitable for your purposes;\n- or the App will meet your particular expectations or requirements.",
        "Some jurisdictions do not allow certain exclusions or limitations. In such cases, the exclusions and limitations in these Terms apply only to the maximum extent permitted by applicable law.",
      ],
    },
    {
      title: "12. Limitation of Liability",
      body: [
        "You use the App at your own responsibility, subject to applicable law.",
        "To the extent permitted by applicable law, we are not liable for damages arising from your use of, or inability to use, the App, unless caused by our intentional misconduct or gross negligence.",
        "Where we are liable, our liability is limited to direct and ordinary damages actually incurred by you. We are not liable for indirect, incidental, special, consequential, or punitive damages, loss of profits, loss of data, loss of opportunity, or business interruption, to the extent permitted by applicable law.",
        "For paid users, where we are liable for damages in connection with the App, our aggregate liability is limited to the amount actually paid by you for the App during the twelve months preceding the event giving rise to the claim, unless this limitation is not permitted by applicable law.",
        "Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law, including liability for intentional misconduct, gross negligence, death or personal injury caused by negligence where applicable, or mandatory consumer rights.",
      ],
    },
    {
      title: "13. User Data and Privacy",
      body: [
        "The handling of personal data and other user information is described in our separate Privacy Policy.",
        "You acknowledge that data stored on your device may be lost due to device failure, loss, reset, App deletion, operating system issues, iCloud backup settings, or similar events.",
        "Unless the App provides cloud sync or backup features, we do not guarantee restoration of data stored only on your device.",
        "For users in the EU/EEA, personal data will be handled in accordance with applicable data protection laws, including the General Data Protection Regulation where applicable. Details are provided in the Privacy Policy.",
      ],
    },
    {
      title: "14. Response to Violations",
      body: [
        "If we reasonably determine that you have violated these Terms, or that there is a risk of violation, we may take appropriate measures without prior notice, including:\n- restricting your use of the App;\n- suspending access to paid features where permitted by law;\n- refusing or limiting support;\n- taking measures necessary to prevent unauthorized or harmful use;\n- or taking other actions reasonably necessary to protect the App, users, third parties, or ourselves.",
        "To the extent permitted by applicable law, we are not liable for damages arising from such measures, unless caused by our intentional misconduct or gross negligence.",
      ],
    },
    {
      title: "15. Changes to These Terms",
      body: [
        "We may update these Terms when necessary.",
        "Minor changes, typo corrections, clarifications, or non-material updates may become effective when posted in the App, on our website, or through another appropriate method.",
        "If we make changes that materially affect your rights or obligations, we will provide notice through the App, our website, the App Store description, or another appropriate method.",
        "If you continue to use the App after the updated Terms become effective, you will be deemed to have accepted the updated Terms, unless applicable law requires a different method of consent.",
      ],
    },
    {
      title: "16. Relationship with Apple",
      body: [
        "The App is distributed through the Apple App Store.",
        "Your download, purchase, in-app purchases, subscriptions, refunds, App Store reviews, and use of the App Store are subject to Apple’s applicable terms, conditions, and policies.",
        "These Terms are between you and us, not Apple. Apple is not responsible for providing maintenance or support services for the App, except to the extent required by applicable law or Apple’s own terms.",
        "You must comply with applicable third-party terms when using the App.",
        "Apple and Apple’s subsidiaries are third-party beneficiaries of these Terms. Upon your acceptance of these Terms, Apple has the right to enforce these Terms against you as a third-party beneficiary.",
      ],
    },
    {
      title: "17. Governing Law and Jurisdiction",
      body: [
        "These Terms are governed by the laws of Japan, except where mandatory laws of your country of residence require otherwise.",
        "If you are a consumer residing in the EU/EEA, this choice of law does not deprive you of the protection of mandatory consumer protection laws of your country of residence.",
        "Any dispute arising out of or relating to the App or these Terms will be subject to the courts of Japan, unless mandatory consumer protection laws of your country of residence allow you to bring proceedings in the courts of your country of residence or otherwise require a different jurisdiction.",
      ],
    },
    {
      title: "18. Contact",
      body: [
        "For questions about these Terms, please contact:",
        "Operator: Takuto Hizawa",
        `Email: ${site.supportEmail}`,
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
