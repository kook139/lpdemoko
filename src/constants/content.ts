// Hero Section
export const HERO = {
  NAME: "KooK",
  IAM: "Hello, I'm ",
  DESCRIPTION: `Reactフロントエンドエンジニアとして、
ユーザーが使いやすいインターフェースの構築を中心に開発しています。

技術スタックはReact、TypeScript、Viteを主に使用。
チーム開発ではレビューやコミュニケーションを重視し、品質の高いコードを目指しています。

常に学びを重ね、新しい技術やアプローチを積極的に取り入れることを大切にしています。`,
} as const;

// About Section
export const ABOUT = {
  TITLE: "About Me",
  SUBTITLE:
    "ユーザー体験を重視し、最新の技術を使用して価値のあるプロダクトを開発します。チームワークを大切にし、品質・コスト・納期を意識した問題解決を心がけています。",
  TEAMWORK: {
    TITLE: "チームワーク",
    ICON: "🤝",
    ITEMS: [
      "自身の業務をこなすだけでなく、困っているメンバーに積極的に声をかける",
      "チーム全体で業務がスムーズに進むようサポート",
      "運用・保守業務でも協力を意識して対応",
    ],
  },
  PROBLEM_SOLVING: {
    TITLE: "問題解決能力",
    ICON: "💡",
    ITEMS: [
      "課題発生時に現状と目的を明確化し、複数の解決案を検討",
      "QCD（品質・コスト・納期）の観点から最適な案を採用して実行",
      "日常的なIT業務を通して、課題解決力を培う",
    ],
  },
  EXECUTION: {
    TITLE: "着実な業務遂行",
    ICON: "📋",
    ITEMS: [
      "事前計画を立て、期限に余裕を持って日々の業務に取り組む",
      "設計工程で試験項目表を前もって作成",
      "スケジュールがタイトな試験工程でもスムーズに環境構築・試験実施を実現",
    ],
  },
} as const;

// Skills Section
export const SKILLS = {
  TITLE: "Skills",
  SUBTITLE: "これまでのプロジェクトで培った技術スキルと経験をご紹介します。",
  FRONTEND: {
    TITLE: "Frontend",
    ICON: "💻",
    SKILLS: [
      { name: "React", level: "Expert" as const },
      { name: "TypeScript", level: "Expert" as const },
      { name: "Vite", level: "Advanced" as const },
      { name: "Tailwind CSS", level: "Advanced" as const },
      { name: "Chakra UI", level: "Intermediate" as const },
    ],
  },
  BACKEND: {
    TITLE: "Backend & DB",
    ICON: "⚙️",
    SKILLS: [
      { name: "Java", level: "Intermediate" as const },
      { name: "Node.js", level: "Advanced" as const },
      { name: "Python", level: "Intermediate" as const },
      { name: "PostgreSQL", level: "Advanced" as const },
      { name: "MySQL", level: "Advanced" as const },
      { name: "MongoDB", level: "Intermediate" as const },
    ],
  },
  DEVOPS: {
    TITLE: "DevOps & Tools",
    ICON: "🛠️",
    SKILLS: [
      { name: "Git", level: "Expert" as const },
      { name: "Docker", level: "Advanced" as const },
      { name: "AWS", level: "Advanced" as const },
      { name: "GitHub Actions", level: "Advanced" as const },
      { name: "Storybook", level: "Intermediate" as const },
    ],
  },
  DESIGN: {
    TITLE: "Design & Others",
    ICON: "🎨",
    SKILLS: [
      { name: "Figma", level: "Advanced" as const },
      { name: "UI/UX Design", level: "Intermediate" as const },
      { name: "Team Leadership", level: "Intermediate" as const },
      { name: "Code Review", level: "Expert" as const },
      { name: "Documentation", level: "Expert" as const },
    ],
  },
  LEGEND: {
    EXPERT: "Expert (2年以上)",
    ADVANCED: "Advanced (1-2年)",
    INTERMEDIATE: "Intermediate (〜1年)",
  },
} as const;

// Projects Section
export const PROJECTS = {
  TITLE: "Projects",
  CO2_SYSTEM: {
    id: "co2-system",
    title: "脱炭素向けCO2算定システム開発（自社開発）",
    icon: "🌱",
    iconBg: "from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-600",
    titleColor: "text-emerald-800",
    subtitleColor: "text-emerald-600",
    subtitle: "自社開発",
    period: "2023年8月〜2024年9月（14ヶ月）",
    industry: "サービス",
    role: "フロントエンドエンジニア",
    teamSize: "30人",
    responsibilities: [
      "Reactを用いたフロントエンド開発（ページ単位の機能実装、CRUD、グラフなど）",
      "機能定義書・APIドキュメント作成・管理",
      "デプロイ、単体・結合テスト",
      "新人研修の進行・サポート",
      "チームリーダー・サブリーダー経験あり",
    ],
    technologies: [
      { name: "React", color: "blue" as const },
      { name: "TypeScript", color: "blue" as const },
      { name: "CRUD", color: "green" as const },
      { name: "Charts", color: "purple" as const },
      { name: "Leadership", color: "red" as const },
    ],
  },
  ID_SYSTEM: {
    id: "id-system",
    title: "法務省向けID統合システムリプレイス",
    icon: "🏛️",
    iconBg: "from-green-50 to-green-100",
    iconColor: "text-green-600",
    titleColor: "text-green-800",
    subtitleColor: "text-green-600",
    subtitle: "リプレイス",
    period: "2024年10月〜2025年6月（9ヶ月）",
    industry: "官公庁",
    role: "アプリケーションエンジニア",
    teamSize: "6〜7人",
    responsibilities: [
      "詳細設計書作成、パッケージカスタマイズ",
      "JavaScriptによる業務ロジック実装、SQLでのデータ処理",
      "単体・結合テストの作成・実施",
      "AWS EC2環境構築、Active Directory・CyberMailサーバ管理",
    ],
    technologies: [
      { name: "JavaScript", color: "yellow" as const },
      { name: "SQL", color: "blue" as const },
      { name: "AWS EC2", color: "orange" as const },
      { name: "Active Directory", color: "green" as const },
    ],
  },
  TRADE_PLATFORM: {
    id: "trade-platform",
    title: "貿易情報連携プラットフォーム開発",
    icon: "🚢",
    iconBg: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    titleColor: "text-blue-800",
    subtitleColor: "text-blue-600",
    subtitle: "プラットフォーム",
    period: "2025年7月〜現在",
    industry: "運輸",
    role: "フロントエンドエンジニア",
    teamSize: "10数人",
    responsibilities: [
      "React + TypeScript + Vite + Chakra UI 環境で開発",
      "共通 UI コンポーネントの実装（Storybook）",
      "フロントエンドコーディング規約・プルリク方針書の作成",
      "CI/CD パイプライン構築（GitHub Actions、AWS Amplify）",
    ],
    technologies: [
      { name: "React", color: "blue" as const },
      { name: "TypeScript", color: "blue" as const },
      { name: "Vite", color: "purple" as const },
      { name: "Chakra UI", color: "teal" as const },
      { name: "Storybook", color: "orange" as const },
      { name: "AWS", color: "yellow" as const },
    ],
  },
} as const;

export const PROJECTS_ITEMS = [
  PROJECTS.CO2_SYSTEM,
  PROJECTS.ID_SYSTEM,
  PROJECTS.TRADE_PLATFORM,
];

// Contact Section
export const CONTACT = {
  TITLE: "Get In Touch",
  SUBTITLE:
    "新しいプロジェクトについてお話しましょう。お気軽にご連絡ください。",
  LINKS: [
    { name: "GitHub", href: "https://github.com/kook139/lpdemoko" },
    { name: "X", href: "https://x.com/kooktobu" },
  ],
} as const;

// Footer
export const FOOTER = {
  COPYRIGHT: "© 2025 KooK. All rights reserved.",
} as const;

// Header
export const HEADER = {
  TITLE: "Portfolio",
  NAVIGATION: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
} as const;
