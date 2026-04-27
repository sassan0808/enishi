# 縁 enishi - CLAUDE.md

## プロジェクト概要

Inside-Out パラダイムシフト支援の個人事業ナレッジベース。
SNS → note → このサイト → LINE → 個別相談（有料）のファネル設計。

## 技術構成

- **Docusaurus** (TypeScript)
- **Vercel** でホスティング
- ローカル: `npm start`
- ビルド: `npm run build`

## ファネル設計

```
SNS発信（X・Instagram等）
  ↓
note（読み物コンテンツ）
  ↓
このサイト（ナレッジベース）← ここ
  ↓
LINE誘致（全ページにCTAボタン）
  ↓
個別相談（有料） / 企業向け業務委託
```

## サイト構造（3層）

```
ブレスト（メモ・Inbox）
  ↕ 双方向リンク
コンセプト・フレームワーク（縦軸）
  ↕ 双方向リンク
サービス（CV導線）
```

## LINE URL の変更方法

`docusaurus.config.ts` の先頭にある：

```ts
const LINE_URL = 'https://line.me/R/ti/p/YOUR_LINE_ID';
```

ここを実際の LINE URL に差し替えるだけ。全ページに自動反映される。

## コンテンツ追加のルール

### コンセプト・フレームワークのページ

```md
---
title: タイトル
tags: [カテゴリ, キーワード]
---

import LineButton from '@site/src/components/LineButton';

## 内容

...

<LineButton />
```

### ブレストメモ

`docs/ブレスト/` に自由に書く。整理したら適切なカテゴリへ移動。

## 差別化要素の扱い

- エネルギーを読む（妻との協業）= **オプション**として記載
- 単体サービスとしては出さない
- `docs/フレームワーク/エネルギーを読む.md` に位置づけを明記済み

## Vercel デプロイ

GitHub にプッシュすれば自動デプロイ（Vercel と連携後）。
