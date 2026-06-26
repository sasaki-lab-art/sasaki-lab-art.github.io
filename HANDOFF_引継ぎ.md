# 佐々木研究室HP 更新作業 引継ぎメモ

新しいチャットの冒頭にこの内容を貼るか、このファイルを参照させてください。

## プロジェクト概要
- 研究室HP（静的サイト / GitHub Pages）。公開URL: https://sasaki-lab-art.github.io/
- 作業フォルダ: `E:\dropboxE 231121\Dropbox\Claude作業用\Lab Web Practice`（Dropbox同期）
- 日本語版（ルート直下の `*.html`）と英語版（`/en/` 配下、全39ページ）の**バイリンガル運用**。
- ニュース/論文は `news_data.js` / `papers_data.js` をクライアント側で描画。

## 重要ルール（必ず守る）
1. **英語版は日本語版と必ず同期**。日本語を更新したら `/en/` の同名ファイルも更新する。
   - ニュース: `news_data.js` に日本語(title/detail/date)と英語(tiEn/detailEn/dateEn)を両方書く。
   - 新規ページ/メンバー: スキル「**sasaki-lab-english-website**」の手順で `en/<同名>.html` を生成。
   - 新規ページ追加時は `sitemap.xml` にも日英URL（xhtml:link相互）を追記。
2. **配色**: 日本語版=緑、英語版=ネイビー。Science Blue `#1c3177` / サブ `#7f96c2`。
   緑→紺の置換表: `#1d9e75→#1c3177` / `#5dcaa5→#7f96c2` / `#e1f5ee→#e9edf7` / `#0f6e56→#14245a` ほか。
   例外: lipid_layers の `#248d35` は図と対応する「protein」凡例色なので**緑のまま保持**。
3. **Dropbox上のファイル書込みは bash の `python3 open(...,'wb').write()` を使う**。Write/Edit ツールは
   NUL混入・途中切れの破損を起こすことがある。書込み後は必ず「NULなし・`</html>`で終端」を検証する。
4. **gitはユーザーのPCで実行**（サンドボックスのgitは使えない）。作業後はコミット用コマンドを提示する。
   内部ファイル（recruit_video_*.md / video_assets/ / README / *.docx / スキルzip 等）は `.gitignore` 済。
5. 固有名詞の公式英語対照表は README.md とエージェントメモリ（english-version-prep）にある。主要:
   東京科学大学=Institute of Science Tokyo（Science Tokyo, 国立大学）/ 総合研究院=Institute of Integrated
   Research / 難治疾患研究所=Medical Research Laboratory (MRL) / 病態生理化学分野=Department of Biochemical
   Pathophysiology / 脂質生物学分野=Department of Lipid Biology / 大学院医歯学総合研究科=Graduate School of
   Medical and Dental Sciences / 細胞分子医学分野=Department of Cellular and Molecular Medicine /
   教授・准教授・助教=Professor / Associate Professor / Assistant Professor。Samuro Kakiuchi Award（Saburoではない）。

## 直近セッションで完了したこと
- 英語版サイト全39ページを公開（ネイビー配色・言語スイッチャー・漢字アバター）。
- favicon（リン脂質モチーフ: favicon.svg/.ico/各PNG/apple-touch-icon）、sitemap.xml、robots.txt 追加。
- 日英全ページに canonical + hreflang(ja/en/x-default)、相互の言語スイッチャー（日本語側にも「English」）。
- 英語見出しと本文の整合を全ページ点検（研究カード見出し "How bioactive lipids work" に修正、
  pips_history のH1を "A short history of phosphoinositide research" にカードと統一）。
- 英語本文の**広い段落のみ両端揃え**（`text-align: justify`、自動ハイフネーションは無し）。
  対象: `.article-body > p, .article-wrap > p, .uni-body p, .lead-para, .hero-desc, .sec-lead`。
- en/index.html ヒーロー: "Lipids" と "life & disease" を紺、"decoding the mysteries of" をサブ青。
  "Lipids" は DM Serif Display イタリック・1.28em。所属表記を英語流に並べ替え（Department→Institute）。
- en/join.html: 入学情報リンクを英語版ガイドラインに、FAQを「日本語が上手でなくても可（英語で対応）」に変更、
  Official information を**ネイビーのボタン**に格上げ。
- フッターの**狭幅対応**（768px以下で縦積み＋リンク折返し）を全EN + member-en.css に追加。
- アクセス案内の路線カラー色分け（日英両方）: 中央線(快速)=オレンジ`#F15A22` / 総武線(各停)=山吹色`#E0A000`
  / 東京メトロ丸ノ内線・M20=赤`#E60012`。

## 保留・今後の候補
- ~~日本語版フッターの狭幅縦積み対応~~ → **2026-06-27 完了**（en同一の@media(max-width:768px)を member.css＋ルート19ページに追加。member_*.htmlはmember.css経由で反映、recruit_movie.htmlはフッター無しで対象外）。
- Google Search Console に sitemap.xml を登録（索引付け促進、任意）。
- 12月の国内学会情報をニュースに追加予定（トップは2026.10基調講演のピン止めを維持）。

## よく使う検証スニペット（bash）
書込み後の健全性チェック例:
```
python3 -c "raw=open('en/FILE.html','rb').read(); t=raw.decode('utf-8'); \
print('OK' if b'\x00' not in raw and t.rstrip().endswith('</html>') else 'NG')"
```
