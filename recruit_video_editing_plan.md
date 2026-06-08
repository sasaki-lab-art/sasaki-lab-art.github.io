# 大学院生リクルート動画 編集手順書

この手順書は、研究室HP由来の既存素材を使って、大学院生リクルート動画を実際に編集するための作業メモです。`recruit_video_storyboard.md` を source of truth とし、そこに記載された素材対応を編集用に整理しています。

## 1. 動画全体のコンセプト

脂質生物学を軸に、生命現象と難治疾患を読み解く研究室であることを、研究室HP由来の画面素材と既存写真で端的に伝える。導入ではキャンパスと研究室HPの第一印象を見せ、研究テーマでは脂質・ホスホイノシタイド・疾患・老化へ展開し、技術パートでは質量分析、研究風景、AI・構造予測を見せる。最後は学生募集と問い合わせ導線へつなげる。

トップページH1の正しい表記は「脂質が紐解く 生命と疾患の謎」。誤表記の「脂質が紡ぐ」は使用しない。

## 2. 推奨尺

おおよそ2.5〜3分を推奨する。`recruit_video_storyboard.md` の4分構成を編集時に圧縮し、静止画は8〜10秒、スクロール録画は5〜7秒程度を目安にする。

## 3. 推奨編集ソフト

- 第一候補：DaVinci Resolve
- 簡易候補：Microsoft Clipchamp、Canva、Premiere Rush など

DaVinci Resolve を使う場合は、素材を `photos_selected`、`screenshots`、`scroll_recordings` の3ビンに分け、タイムライン上では導入、研究テーマ、技術、学生募集、問い合わせの5ブロックで整理する。

## 4. シーンごとの編集表

| Scene number | Time range | Asset file path | Visual treatment | Suggested on-screen text in Japanese | Optional narration idea in Japanese | Notes/cautions |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 0:00-0:08 | `video_assets/photos_selected/001_intro_yushima_plum_spring.jpg` | Slow zoom in, fade in | 東京科学大学 医歯学総合研究科 | 東京科学大学、医歯学総合研究科、脂質生物学分野の研究室です。 | 冒頭は落ち着いた印象にする。文字は小さめに添える。 |
| 2 | 0:08-0:16 | `video_assets/photos_selected/002_intro_campus2.jpg` | Slow pan, cross fade | 難治疾患研究所 病態生理化学分野 | 難治疾患研究所にある研究室として、生命と疾患の仕組みに迫ります。 | 公開素材の範囲でキャンパス・環境の印象を見せる。 |
| 3 | 0:16-0:28 | `video_assets/screenshots/001_intro_index_top.png` | Subtle push in | 研究室HPから研究の入口へ | 研究室HPには、研究内容、技術、学生募集への導線が整理されています。 | HTML、CSS、JSは変更しない。取得済みスクリーンショットを使う。 |
| 4 | 0:28-0:40 | `video_assets/screenshots/002_intro_index_h1.png` | Hold, slight zoom, fade to next | 脂質が紐解く 生命と疾患の謎 | 脂質から、生命現象と疾患の仕組みを読み解くことを目指しています。 | H1は必ず「脂質が紐解く 生命と疾患の謎」。誤表記を使わない。 |
| 5 | 0:40-0:52 | `video_assets/screenshots/008_tech_index_research_tech.png` | Pan across cards | 研究テーマの広がり | がん、炎症性疾患、神経変性疾患、老化などに関わる脂質研究を進めています。 | カード本文を読ませすぎず、研究テーマの幅を見せる。 |
| 6 | 0:52-1:04 | `video_assets/screenshots/003_research_lipid_layers_top.jpg` | Zoom to heading and figure | 脂質は情報を伝える分子 | 脂質は細胞の中で情報を伝え、生命現象を制御する重要な分子です。 | 見出しと図を中心に切り出す。公開HTMLにない説明は足さない。 |
| 7 | 1:04-1:11 | `video_assets/scroll_recordings/004_research_lipid_layers_scroll.mp4` | Short scroll, dissolve out | 脂質研究の階層性 | 生体分子の階層性の中で、脂質の役割を捉えます。 | 長く流さない。見出し・図・重要セクションだけを見せる。 |
| 8 | 1:11-1:23 | `video_assets/screenshots/005_research_pips_functions_wide.png` | Hold, zoom toward central diagram | ホスホイノシタイドの機能 | ホスホイノシタイドは、多彩な生命現象を制御するリン脂質です。 | 図の細部文字を読ませるより、全体構造を見せる。 |
| 9 | 1:23-1:35 | `video_assets/screenshots/006_research_pips_disease_wide.png` | Cross fade, light highlight | 脂質代謝の破綻と疾患 | 脂質代謝のバランスの乱れは、さまざまな疾患と関わります。 | 医療効果や診断効果を断定しない。公開HTMLの表現に留める。 |
| 10 | 1:35-1:47 | `video_assets/screenshots/007_research_aging_pips.png` | Slow zoom out | 老化研究への展開 | 老化や加齢性疾患に関わる脂質代謝機構にも取り組んでいます。 | 未発表成果や推測情報を追加しない。 |
| 11 | 1:47-1:59 | `video_assets/photos_selected/010_tech_ms_sample.jpg` | Push in, cut on beat | 質量分析による脂質解析 | 質量分析を用いて、脂質を高深度に解析します。 | 人物が識別できる場合は、動画使用前に本人または関係者の了承確認が必要。 |
| 12 | 1:59-2:11 | `video_assets/photos_selected/012_tech_research_montage.jpg` | Fast montage crop, pan | 多層的な解析を組み合わせる | オミクス解析、生化学、細胞生物学、構造生物学などを組み合わせます。 | photos/ 内の元画像は変更しない。人物が識別できる場合は了承確認が必要。 |
| 13 | 2:11-2:23 | `video_assets/screenshots/010_tech_ai_structure_top_wide.png` | Hold, gentle zoom | AIで読み解く脂質-タンパク質相互作用 | AIや構造予測も活用し、脂質とタンパク質の相互作用を探ります。 | 未発表のAI結果を追加しない。HTML由来の情報だけを使う。 |
| 14 | 2:23-2:35 | `video_assets/screenshots/011_tech_ai_structure_workflow_wide.png` | Pan through workflow, fade | 問いを立て、実験で確かめる | 研究者が問いを立て、AIで狙いを定め、実験で確かめます。 | ワークフローは短く見せる。画面内の文字を詰め込みすぎない。 |
| 15 | 2:35-2:42 | `video_assets/screenshots/012_tech_ai_computation_steps_wide.png` | Hold, slight vertical pan | AI構造解析の流れ | AI構造解析の4ステップを短く紹介します。 | スクロール動画ではなく静止画として扱う。本文読み上げ風の見せ方は避ける。 |
| 16 | 2:42-2:53 | `video_assets/screenshots/009_tech_join_tech_list.png` | Zoom to technology list | 生化学からAI・ロボット活用まで | 幅広い技術に触れながら、自分の研究テーマを深められます。 | 学生募集の詳細条件は足さない。公開HTMLにある技術項目だけを使う。 |
| 17 | 2:53-3:00 | `video_assets/photos_selected/005_intro_research_montage.jpg` | Cross fade, final summary look | 脂質から生命と疾患を読み解く | 脂質生物学を通じて、生命と疾患の謎に挑みます。 | 人物が識別できる場合は、動画使用前に本人または関係者の了承確認が必要。 |
| 18 | 3:00-3:10 | `video_assets/screenshots/001_intro_index_top.png` | Fade to final, hold | まずは研究室HPからお問い合わせください | 興味を持った方は、研究室HPの問い合わせ欄やアクセスページをご確認ください。 | メールアドレスを大きく固定表示しない。問い合わせはHPの問い合わせ欄またはアクセスページへ誘導する。 |

## 5. 書き出し設定

- Aspect ratio: 16:9
- Resolution: 1920x1080
- Format: MP4
- Codec: H.264
- Frame rate: 30fps または素材に合わせた標準設定
- Audio: AAC、48kHz
- File name example: `recruit_video_draft_1080p.mp4`

## 6. 最終書き出し前チェックリスト

- [ ] asset paths confirmed
- [ ] no typo in H1
- [ ] 「脂質が紐解く 生命と疾患の謎」になっている
- [ ] 「脂質が紡ぐ」を使っていない
- [ ] no unpublished information
- [ ] no speculative claims
- [ ] no added personal information
- [ ] no unapproved person photos
- [ ] 人物が識別できる写真は、本人または関係者の了承確認済み
- [ ] contact guidance points to website, not a large fixed email address
- [ ] 問い合わせは研究室HPの問い合わせ欄またはアクセスページへ誘導している
- [ ] HTML, CSS, JS を変更していない
- [ ] `photos/` 内の元画像を変更していない
