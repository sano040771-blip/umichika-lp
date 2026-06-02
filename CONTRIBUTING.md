# うみちか食堂サイト 開発・更新ガイド

このリポジトリは [umichika-shokudo.com](https://umichika-shokudo.com)（採用主目的の公式サイト）のソースコードです。
複数人で安全に編集・更新するための手順をまとめています。**初めての方はこのファイルを上から順に読んで進めてください。**

---

## 🛠 技術スタック（参考）

- **Next.js 16**（App Router, Turbopack）
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**（内部は @base-ui/react）
- ホスティング: **Vercel**（mainブランチへのpushで自動デプロイ）

> 📌 これは新しいNext.jsで、過去のNext.jsとはAPIや書き方が異なる部分があります。新しい機能を追加するときは `node_modules/next/dist/docs/` のドキュメントを参照してください。

---

## 0. 必要なもの（インストール）

ターミナルで以下のコマンドを実行できれば準備OKです。

| ツール | 確認コマンド | 入れ方 |
|---|---|---|
| **Node.js**（v22以上推奨） | `node --version` | https://nodejs.org からLTS版をDLしてインストーラを実行 |
| **Git** | `git --version` | Macは `xcode-select --install` で入る |
| **エディタ** | — | [VS Code](https://code.visualstudio.com/) 推奨（Reactの補完が効く） |
| **GitHub CLI**（任意・PR作成が楽になる） | `gh --version` | `brew install gh` または https://cli.github.com/ |

---

## 1. 初回セットアップ（一度だけ）

ターミナル（Mac: アプリケーション→ユーティリティ→ターミナル）を開いて、**1コマンドずつ**コピペ→Enterで実行してください。

### 1-1. リポジトリをローカルにクローン

```bash
cd ~/Desktop
git clone https://github.com/chipacopter-dot/umichika-shokudo.git
cd umichika-shokudo
```

### 1-2. 依存ライブラリをインストール

```bash
npm install
```

> ⏱ 数分かかります。警告がたくさん出ても、最後に `added XXX packages` と表示されればOK。

### 1-3. ⚠️ Git認証情報を設定（**絶対に飛ばさないこと**）

**これをやらないと、あなたのpushでデプロイが `BLOCKED` になります。** GitHubに紐づくメールアドレスを設定する必要があります。

GitHubの **noreplyメール** を使うのが最も安全です。形式は:

```
[あなたのID番号]+[あなたのGitHubユーザー名]@users.noreply.github.com
```

#### あなたのID番号の調べ方
ブラウザで以下のURLを開きます（`USERNAME` をあなたのGitHubユーザー名に置き換え）:
```
https://api.github.com/users/USERNAME
```
表示されたJSONの中の `"id": 12345678` の数字部分があなたのIDです。

#### 設定コマンド

下記の `[ID]` と `[USERNAME]` を**自分の値に置き換えて**実行（`[ ]` ごと消す）:

```bash
git config user.email "[ID]+[USERNAME]@users.noreply.github.com"
git config user.name  "[USERNAME]"
```

**例**（ユーザー名が `yamada-taro`、ID が `12345678` の場合）:
```bash
git config user.email "12345678+yamada-taro@users.noreply.github.com"
git config user.name  "yamada-taro"
```

#### 設定確認

```bash
git config user.email
```
→ 設定したメールが表示されればOK。

### 1-4. ローカルで動作確認

```bash
npm run dev
```

`Local: http://localhost:3000` と表示されたら、ブラウザで **http://localhost:3000** を開いてサイトが表示されればセットアップ完了です。

止めるときは、ターミナルで `Control + C`。

---

## 2. ファイル構成 — 何を編集すると何が変わるか

ページの中身はすべて `src/` 配下のファイルから作られています。

```
src/
├── app/
│   ├── layout.tsx        ← ページタイトル・SEO・フォント
│   ├── page.tsx          ← トップページ全体の組み立て
│   └── globals.css       ← 色・フォントの基本設定
│
├── components/
│   ├── site-header.tsx   ← ヘッダー（ロゴ・ナビ・電話・CTA）
│   ├── site-footer.tsx   ← フッター
│   ├── section-heading.tsx ← セクション見出しの共通部品
│   │
│   └── sections/         ← ★各セクションはここ
│       ├── hero.tsx      ← Hero（ポスター画像＋キャッチコピー）
│       ├── about.tsx     ← About（20年ストーリー）
│       ├── news.tsx      ← News（お知らせ一覧）
│       ├── recruit.tsx   ← Recruit（仕事内容・募集要項）
│       ├── access.tsx    ← Access（住所・地図）
│       └── contact.tsx   ← Contact（応募フォーム・電話）
│
└── lib/
    └── site.ts           ← 店舗情報（住所・電話・営業時間・フォームURL）
```

### よくある編集と対応ファイル

| やりたいこと | 編集するファイル |
|---|---|
| 店舗情報（住所・電話・営業時間など）変更 | `src/lib/site.ts` |
| お知らせを追加・編集・削除 | `src/components/sections/news.tsx` |
| 募集要項の変更 | `src/components/sections/recruit.tsx` |
| Heroのキャッチコピー変更 | `src/components/sections/hero.tsx` |
| ページタイトル・SEO設定 | `src/app/layout.tsx` |
| 全体の色・フォント | `src/app/globals.css` |
| 応募フォームURLの差し替え | `src/lib/site.ts` の `contactFormUrl` |
| 画像追加 | `public/images/` に置く |

---

## 3. 普段の作業フロー（毎回これでお願いします）

**直接 main ブランチには絶対pushしないでください**。事故防止のため、必ず作業用ブランチを切ってPull Request（PR）でmainに合流させます。

PRを作ると、Vercelが**プレビュー専用URL**（例: `umichika-shokudo-git-xxx.vercel.app`）を自動で発行してくれるので、**本番に反映する前に実際のWebサイトで変更内容を確認できます**。

### 3-1. 最新のmainを取得

```bash
git checkout main
git pull
```

### 3-2. 作業用ブランチを切る

ブランチ名は「何をするか」が分かるように。半角英数とハイフンで。

```bash
git checkout -b news-update
```

ブランチ名の例:
- `news-update` （お知らせ追加）
- `hero-copy-fix` （Heroの文言修正）
- `recruit-salary-update` （給与変更）
- `fix-typo-contact` （Contactの誤字修正）

### 3-3. 編集する

VS Codeなどで該当ファイルを編集。**編集中は `npm run dev` を起動しておくと、保存と同時にブラウザに反映されます**（http://localhost:3000）。

### 3-4. コミット & プッシュ

```bash
git add -A
git commit -m "Newsを5月分に更新"
git push -u origin news-update
```

コミットメッセージは「何を・なぜ」が分かる短い日本語でOK。

### 3-5. Pull Request を作成

#### 方法A: GitHub CLIで一発（おすすめ）
```bash
gh pr create --fill
```

#### 方法B: ブラウザで作成
push後にターミナルに表示されるURLをクリック → GitHub画面で「Create pull request」。

### 3-6. プレビューURLで確認

PRが作られると、しばらく（1〜2分）するとVercelのbotがPRに**プレビューURLをコメント**してくれます。それを開いて、変更内容が意図通りか確認します。

### 3-7. mainにマージ → 本番反映

確認OKなら、GitHubのPR画面で **「Merge pull request」** をクリック。mainにマージされると、Vercelが**自動で本番サイト（umichika-shokudo.com）にデプロイ**します（通常1〜2分）。

マージ後はローカルでmainを最新化＆作業ブランチを削除しておくと綺麗です:

```bash
git checkout main
git pull
git branch -d news-update
```

---

## 4. ローカル開発サーバーについて

| 状況 | コマンド |
|---|---|
| 開発サーバーを起動 | `npm run dev` |
| 開発サーバーを停止 | ターミナルで `Control + C` |
| 本番ビルドが通るか確認 | `npm run build` |

開発サーバー（dev）と本番（umichika-shokudo.com）は別物です。ローカルの編集はあなたのPC内だけで、push→mergeしない限り本番には反映されません。

---

## 5. よくあるトラブル

### ❌ デプロイが `BLOCKED` になった
→ コミットの作成者メールがGitHubに紐づいていません。**1-3 のgit設定を見直してください**。設定後、再度コミットしなおして（または `git commit --amend --reset-author`）push。

### ❌ `npm run dev` でエラー / port 3000 already in use
→ 別の何かが3000番ポートを使っています。`lsof -i :3000` で確認し、不要なら停止。または `Control + C` で前回起動分が残っていないか確認。

### ❌ ローカルでGoogleフォーム / 地図が表示されない
→ Googleの埋め込みコンテンツはローカル環境では正しく描画されないことがあります（CORS等）。**本番サイト or プレビューURL で確認すれば表示されます**。

### ❌ コンフリクト（merge conflict）が出た
→ 自分のブランチに最新のmainを取り込む:
```bash
git checkout main && git pull
git checkout [自分のブランチ]
git merge main
```
コンフリクトしたファイルをエディタで開いて `<<<<<<<` `=======` `>>>>>>>` の部分を解決→`git add`→`git commit`。

### ❌ `npm install` が失敗する
→ Node.jsのバージョンが古い可能性。`node --version` で v22以上か確認。古ければ https://nodejs.org から最新LTSをインストール。

---

## 6. 困ったとき

- このリポジトリの **Issues** で質問を立てる
- 管理者（@chipacopter-dot）に直接連絡

事故ったときは焦らず、**何もコミット/pushしない状態でまず相談**してください。多くのことは履歴から戻せます。

---

## 7. 編集時の最低限のお願い

- **mainに直接pushしない**（必ずブランチ＋PR）
- **`node_modules/` や `.env` 系ファイルはコミットしない**（`.gitignore`で除外済み）
- **大きな構造変更（セクション追加・削除など）は事前に相談**
- **個人情報・APIキー・パスワード等を絶対にコミットしない**

---

## メンバー
- @chipacopter-dot
- @sano040771-blip

Happy editing! 🍜
