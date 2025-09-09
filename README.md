# KooK no Portfolio

KookのReactフロントエンドエンジニアとしての経歴とスキルを紹介するポートフォリオサイトです。React + TypeScript + Vite + Tailwind CSSで構築され、GitHub Pagesで公開されています。

## 🚀 プロジェクト概要

このポートフォリオサイトでは以下の情報を掲載しています：

- **プロフィール**: Reactフロントエンドエンジニアとしての自己紹介
- **スキル**: フロントエンド、バックエンド、DevOps、デザイン領域の技術スキル
- **プロジェクト経験**: これまでに携わった主要プロジェクトの詳細
- **連絡先**: GitHubやXなどのソーシャルリンク

## 🛠️ 技術スタック

- **Frontend**: React 19.1.1, TypeScript, Tailwind CSS v4.1.13
- **Build Tool**: Vite
- **Deployment**: GitHub Actions + GitHub Pages
- **Code Quality**: ESLint, TypeScript Strict Mode
- **Design**: Responsive Design, モダンなUI/UX

## 📁 プロジェクト構造

```
src/
├── components/
│   ├── layout/          # レイアウトコンポーネント
│   │   └── Layout.tsx
│   ├── sections/        # セクションコンポーネント
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/             # UIコンポーネント
│       ├── TechTag.tsx
│       └── SkillLevel.tsx
├── constants/
│   └── content.ts      # コンテンツ定数管理
├── pages/
│   └── HomePage.tsx    # ページコンポーネント
├── App.tsx
└── main.tsx
```

## 🚀 開発環境のセットアップ

### 1. リポジトリのクローン

```bash
git clone https://github.com/kook139/lpdemoko.git
cd lpdemoko
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスしてください。

## 📦 ビルドとデプロイ

### ローカルビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

### GitHub Pages デプロイ

このプロジェクトはGitHub Actionsによる自動デプロイが設定されています。`main`ブランチにプッシュすると自動的にGitHub Pagesにデプロイされます。

## 🎨 主な機能

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **モダンなUI**: Tailwind CSSによる洗練されたデザイン
- **コンポーネント設計**: 再利用可能なコンポーネント構造
- **定数管理**: 一元化されたコンテンツ管理
- **TypeScript**: 型安全な開発環境
- **SEO最適化**: メタタグ、カスタムファビコン設定

## 🔧 カスタマイズ

コンテンツの変更は `src/constants/content.ts` ファイルを編集してください。各セクションの内容が定数として管理されています。

## 📄 ライセンス

© 2025 KooK. All rights reserved.
