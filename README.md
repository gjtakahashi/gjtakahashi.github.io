
# ゲームジャム高梁 - Astro版サイト

## リポジトリ概要

ゲームジャム高梁」の公式ウェブサイトをAstroフレームワークで構築するためのものです
このリポジトリは、ゲームジャム高梁の告知・運営・記録を目的としたWebサイトのソースコードを提供します。

## 🚀 プロジェクト構成

現在のプロジェクト構成は以下の通りです：

```text
├── public/
│   └── ...（ファイル省略）
├── src/
│   ├── assets/
│   │   ├── main.css
│   │   └── main.js
│   ├── common/
│   ├── index/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── NavBar.astro
│   │   └── Welcome.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── 404.astro
│       ├── index.astro
│       └── posts/
│           └── index.md
├── astro.config.mjs
├── LICENSE.md
├── package.json
├── README.md
└── tsconfig.json
```


Astro プロジェクトのフォルダ構成について詳しく知りたい場合は、[プロジェクト構成ガイド](https://docs.astro.build/en/basics/project-structure/)をご覧ください。


## 🧞 コマンド一覧

すべてのコマンドはプロジェクトのルートディレクトリで、ターミナルから実行します：

| コマンド                      | 内容                                              |
| :---------------------------- | :------------------------------------------------ |
| `npm install`                 | 依存パッケージをインストールします                |
| `npm run dev`                 | ローカル開発サーバーを `localhost:4321` で起動します |
| `npm run build`               | 本番用サイトを `./dist/` にビルドします            |
| `npm run preview`             | デプロイ前にローカルでビルドをプレビューします      |
| `npm run astro ...`           | `astro add` や `astro check` などCLIコマンドを実行  |
| `npm run astro -- --help`     | Astro CLIのヘルプを表示します                      |


## 👀 さらに詳しく知りたい方へ

[公式ドキュメント](https://docs.astro.build)をご覧ください。
