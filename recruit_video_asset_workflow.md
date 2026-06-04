# 大学院生リクルート動画 素材収集・整理ワークフロー

この手順書は、リクルート動画制作に向けて、スクリーンショット、スクロール録画、画像素材、テロップ素材、ナレーション音声を整理するためのものです。実際の素材取得時は、`recruit_video_assets.md`、`recruit_video_script.md`、`recruit_video_storyboard.md`、`recruit_video_production_checklist.md` を参照し、公開HTMLと既存素材の範囲から外れないようにします。

## 推奨フォルダ構成

まだ実際のフォルダは作成せず、素材収集を始める段階で以下の構成を用意します。

```text
video_assets/
  screenshots/
  scroll_recordings/
  photos_selected/
  titles/
  narration/
  exports/
```

## 各フォルダの用途

| フォルダ | 用途 |
| --- | --- |
| `video_assets/screenshots/` | HTMLページの静止画キャプチャを置く。トップ画面、見出し、図周辺、問い合わせ欄などを16:9前提で整理する。 |
| `video_assets/scroll_recordings/` | HTMLページのスクロール録画を置く。見出しから重要セクションまでの短い録画を中心にする。 |
| `video_assets/photos_selected/` | 動画に使う写真のコピーを置く。リポジトリ内で実在確認できた画像のみを対象にする。 |
| `video_assets/titles/` | テロップ・タイトル素材を置く。章タイトル、キーワード、矢印テロップなどを管理する。 |
| `video_assets/narration/` | ナレーション音声を置く。章ごとの仮音声、最終音声、差し替え音声を分けて管理する。 |
| `video_assets/exports/` | 完成動画や中間書き出しを置く。仮編集版、確認版、最終版を混在させないようにする。 |

## ファイル命名ルール

ファイル名は、動画内の順番が分かる3桁番号、章・用途、内容の順で付けます。英数字とアンダースコアを基本にし、同じ場面の素材は番号をそろえます。

### 命名例

```text
001_intro_campus.jpg
002_intro_index_top.png
010_research_lipid_layers.png
011_research_molecular_hierarchy.jpg
020_tech_ai_structure_scroll.mp4
021_tech_mass_spec.jpg
030_infra_equipment_program_scroll.mp4
040_life_members_overview.png
050_recruit_join_h1.png
060_contact_hp_contact.png
```

### 推奨ルール

- `001` から動画の出現順に並べる。
- 静止画キャプチャは `.png`、写真コピーは元形式に合わせて `.jpg` または `.png`、録画は `.mp4` にする。
- HTML由来の素材は `index_top`、`join_h1`、`ai_structure_scroll` のようにページ名と取得箇所を入れる。
- テロップは `title_001_intro_science_tokyo.png`、`title_020_ai_lipid_protein.png` のように、映像素材と番号を対応させる。
- ナレーションは `narration_000_full.wav`、`narration_010_research.wav` のように、全体版と章別版を区別する。

## 優先度A素材から集める手順

`recruit_video_production_checklist.md` の優先度Aを先に集めます。最初は動画の骨格を作れる素材に絞り、B素材は不足箇所の補強として後で追加します。

### 1. 収集前確認

- 参照元の `recruit_video_storyboard.md`、`recruit_video_script.md`、`recruit_video_assets.md`、`recruit_video_production_checklist.md` を照合する。
- 既存画像ファイルの実在を確認する。
- 人物が写る素材の本人または関係者了承の確認対象を洗い出す。
- 公開HTML、台本、素材整理の範囲から外れた情報を追加しない方針を確認する。
- 問い合わせ画面では、メールアドレスを大きく固定表示しない方針を確認する。

### 2. 導入素材

- `photos/yushima_plum_spring.jpg`
- `photos/campus2.jpg`
- `index.html` トップ画面
- `index.html` H1「脂質が紐解く 生命と疾患 の謎」
- `photos/research_montage.jpg`
- 導入用テロップ「東京科学大学 医歯学総合研究科」「難治疾患研究所 病態生理化学分野」「がん・炎症・神経変性・老化」

### 3. 研究テーマ素材

- `photos/molecular_hierarchy.jpg`
- `photos/pips_network.png`
- `photos/pips_disease_montage.png`
- `photos/aging_pips_overview.png`
- 必要に応じて `lipid_layers.html`、`pips_functions.html`、`pips_disease.html`、`aging_pips.html` の見出しや図周辺をキャプチャする。
- 研究テーマ用テロップ「注目するのはリン脂質」「脂質は情報を伝える分子」「多彩な生命現象を制御」「脂質代謝の破綻と疾患」「未解明の生命現象に迫る」

### 4. 技術素材

- `photos/ms_sample.jpg`
- `join.html` の技術リスト
- `photos/research_montage.jpg`
- `ai_structure.html` の見出し
- `ai_structure.html` と `photos/research_montage.jpg` を組み合わせるためのキャプチャ
- 技術用テロップ「質量分析による脂質解析」「多層的な解析を組み合わせる」「AIで読み解く脂質-タンパク質相互作用」「問い → AI → 実験 → 仮説検証」

### 5. 研究インフラ素材

- `photos/campus2.jpg`
- `equipment_program.html` の見出し・事業概要の短いスクロール録画
- `photos/business_overview_ponchi.png`
- `robot_center.html` の見出し・概要
- `photos/ms_sample.jpg`
- `photos/research_montage.jpg`
- インフラ用テロップ「国際卓越研究大学に正式認定」「難治疾患研究を支える研究基盤」「調製・計測・解析を自律化」「ロボット・AI・高感度解析」「学生の研究を支える環境」

### 6. 研究室生活素材

- `members.html` の教室員紹介ページ全体
- `join.html` の研究室での日常の短いスクロール録画
- `news.html` のニュース一覧の短いスクロール録画
- `photos/sympo.jpg`
- `join.html` の研究室での日常
- 補助素材として `photos/drink.jpg`
- 研究室生活用テロップ「多様なメンバーが協力」「議論・輪読・実技指導」「研究成果を世界へ発信」「交流しながら成長する環境」

### 7. 学生募集素材

- `join.html` H1
- `join.html` の求める学生像
- `join.html` の募集・入試関連箇所
- `photos/research_montage.jpg`
- `photos/sympo.jpg`
- `join.html` よくある質問
- `join.html` の技術リスト
- 学生募集用テロップ「主体的に研究へ取り組む大学院生へ」「修士課程・博士課程 歓迎」「自分の問いを、世界へ」「他大学・他学部出身も歓迎」「生化学からAI・ロボット活用まで」

### 8. 問い合わせ素材

- `join.html#contact-join`
- `index.html#contact`
- `photos/access_ochanomizu.jpg`
- 最終画面用の問い合わせ欄キャプチャ
- 問い合わせ用テロップ「研究室に興味を持った方へ」「随時、研究室訪問を受け付けています」「まずは研究室HPからお問い合わせください」

## スクリーンショット取得時の注意

- 横長16:9での使用を前提に取得する。
- ブラウザ幅を一定にし、同じページ群のキャプチャで見た目が揺れないようにする。
- 余計なタブ、アドレスバー、ブックマークバー、OS通知などが入らない状態で取得する。
- 文字が小さすぎる場合は、ページ全体ではなく見出し、図、重要セクションだけを切り出す。
- HTMLにない情報を画面上に足さない。
- 個人名や顔が目立つ画面は、公開HTMLの範囲に留め、追加の個人情報を重ねない。

## スクロール録画時の注意

- 長く録りすぎない。
- 見出し、図、重要セクションだけを短く録る。
- 1素材あたり3〜8秒程度を目安にする。
- スクロール速度は一定にし、視聴者が見出しと主要図を認識できる速さにする。
- 本文を長く読ませる録画ではなく、章の雰囲気と要点を見せる録画にする。
- 録画開始前後に余白を少し残し、編集時に切りやすくする。

## 人物写真の注意

- 人物が写る写真は、公開済みであっても動画使用前に本人または関係者の了承を確認する。
- `photos/sympo.jpg`、`photos/award_ceremony.jpg`、`photos/drink.jpg` などは、使用前確認の対象にする。
- 個人名を強調する編集や、公開HTMLにない肩書き・説明の追加は避ける。
- `photos/drink.jpg` は研究室生活の雰囲気紹介として1〜2秒程度の補助素材に留める。

## 問い合わせ画面の注意

- メールアドレスを大きく固定表示せず、研究室HPの問い合わせ欄へ誘導する。
- 最終画面では `join.html#contact-join` や `index.html#contact` の問い合わせ欄を主役にする。
- メールアドレスを使う場合も、必要最小限の補助表示に留める。
- 詳細な日程、受け入れ条件、未公開の募集情報は追加しない。

## この後の作業順

### 1. 素材収集

- 優先度A素材を上から順に集める。
- 画像コピー、スクリーンショット、スクロール録画、テロップ素材を分けて保存する。

### 2. 素材確認

- ファイル名、画角、視認性、人物確認、公開情報の範囲を確認する。
- 不足があれば優先度B素材で補強する。

### 3. ナレーション音声作成

- `recruit_video_script.md` を基に仮音声を作る。
- 章ごとの音声と全体音声を分けて管理する。

### 4. 仮編集

- ショット割りに沿って、素材とナレーションを並べる。
- 長すぎるスクロール録画や読みにくい図は短く調整する。

### 5. 確認

- 内容が公開HTML、台本、素材整理の範囲に収まっているか確認する。
- 人物写真、問い合わせ画面、医療・研究成果表現を重点確認する。

### 6. 修正

- 指摘箇所の差し替え、テロップ短縮、画角調整、音量調整を行う。
- 必要に応じて素材を再取得する。

### 7. 最終書き出し

- 完成版を `video_assets/exports/` に保存する。
- 中間書き出しと最終版が分かる名前にする。
