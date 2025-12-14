/* 実績の追加は基本ここだけ編集すればOK */
window.PORTFOLIO_DATA = {
  profile: {
    name: "西岡 大助 (Nishioka Daisuke) ",
    kicker: "Security Engineer / Red Team",
    headline: "",
    about:
      "業務では脆弱性診断/ペネトレーションテストを中心に担当。実際の攻撃をリサーチし、現実的なセキュリティリスクを低減させることを重視しています。",
    metaLine: "Tokyo, JP / Contact: konakona000429@yahoo.co.jp",
    skills: ["Web Security", "Penetration Test", "AWS"]
  },

  heroLinks: [
    { label: "GitHub", url: "https://github.com/konakona429" },
    { label: "X / Twitter", url: "https://x.com/yourname" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yourname/" },
    { label: "Note", url: "https://note.com/konaprime" },
    { label: "Qiita", url: "https://qiita.com/konakona429" }
  ],

  experience: [
    {
      title: "Future Secure Wave",
      when: "2022 - Present",
      description:
        "Webアプリ/プラットフォームのセキュリティ評価、Active Directoryの設定診断、ペネトレーションテストを担当。サービス設計から携わり、世の中のニーズに合わせて提供内容を整備。",
      tags: ["Web Security", "AD Policy", "Penetration Test"],
      links: [
        { label: "", url: "#" }
      ]
    }
  ],

  talks: [
    {
      title: "C2フレームワークを使った攻撃を体験してみよう！",
      when: "2024",
      description:
        "OSSのC2フレームワークである「Empire」を用いて、侵入後の活動や情報収集の流れを体験する。攻撃によって発生した痕跡を確認し、インシデント対応やSOCチームが把握すべきポイントを学ぶ。",
      tags: ["AV Tokyo", "Offensive", "C2フレームワーク", "Empire"],
      links: [
        { label: "スライド", url: "#" },
        { label: "登壇ページ", url: "https://www.avtokyo.org/avtokyo2024/events#h.os63yldvmw6y" }
      ]
    },

    {
      title: "ペネトレーションテスト駆動型CSIRT訓練",
      when: "2025",
      description:
        "関連会社との合併によりCSIRTを再構築し、それに伴いCSIRT訓練を実施しました。Red Teamがペネトレーションテストを実施、その攻撃の状況を新開発したペネトレーション可視化ツールでリアルタイムに共有しながら、CSIRTメンバーがインシデントレスポンスを行うという、より実践的な形式を取り入れました。本発表では、訓練で明らかになったCSIRTの課題と今後の展望についてご報告します。",
      tags: ["NCA Annual Conference", "CSIRT", "ペネトレーションテスト"],
      links: [
        { label: "スライド", url: "#" },
        { label: "登壇ページ", url: "https://annualconf.nca.gr.jp/program/day1/1620_1700_r3/" }
      ]
    }
  ],

  certifications: [
    {
      title: "応用情報技術者",
      when: "2020",
      description: "IT全体の知識を体系的に学ぶために取得",
      tags: ["IPA"],
      links: []
    },
    {
      title: "情報処理安全確保支援士",
      when: "2023(登録)",
      description: "入札要件や案件の引き合い対応で必要だったため取得&登録",
      tags: ["IPA"],
      links: []
    },
    {
      title: "AWS Certified Solution Architect – Associate",
      when: "2025",
      description: "クラウド上に構築されたシステムが多いため、知識補填のために取得",
      tags: ["AWS"],
      links: []
    },
    {
      title: "AWS Certified Developer – Associate",
      when: "2025",
      description: "同上",
      tags: ["AWS"],
      links: []
    }
  ],

  activities: [
    {
      title: "技術ブログ執筆",
      when: "Ongoing",
      description: "業務や自己学習で得た知見の整理、学習メモなどを公開",
      tags: ["Writing", "Knowledge Sharing"],
      links: [{ label: "Note", url: "https://note.com/konaprime" }, { label: "Qiita", url: "https://qiita.com/konakona429" }]
    }
  ],

  // links: [
  //   { title: "GitHub", description: "コード/検証/サンプル置き場", url: "https://github.com/yourname" },
  //   { title: "X / Twitter", description: "発信・告知", url: "https://x.com/yourname" },
  //   { title: "LinkedIn", description: "経歴", url: "https://www.linkedin.com/in/yourname/" },
  //   { title: "Email", description: "連絡先", url: "mailto:your.email@example.com" }
  // ],

  lastUpdated: "2025-12-14"
};
