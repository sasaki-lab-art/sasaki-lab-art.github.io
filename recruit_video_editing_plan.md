# 大学院生リクルート動画 編集手順書

この手順書は、研究室HP由来の既存素材を使って、大学院生リクルート動画をDaVinci Resolveで編集するための作業メモです。`recruit_video_storyboard.md` を source of truth とし、`recruit_video_script.md` の既存ナレーション原稿・シナリオ本文は原則として変更しません。

## 1. 動画全体のコンセプト

脂質生物学を軸に、生命現象と難治疾患を読み解く研究室であることを、研究室HP由来の静止画素材で端的に伝える。導入では研究室HPとH1を見せ、研究テーマでは脂質・ホスホイノシタイド・疾患・老化へ展開し、技術パートでは研究内容カード、技術リスト、AI・構造予測ワークフローを見せる。最後は学生募集と問い合わせ導線へつなげる。

トップページH1の正しい表記は「脂質が紐解く 生命と疾患の謎」。誤表記の「脂質が紡ぐ」は使用しない。

## 2. 推奨尺

秒数は先に固定しない。`recruit_video_script.md` のナレーション文量に合わせて、各素材の表示時間をDaVinci Resolve上で調整する。

目安としては、全体でおおよそ3分前後から3分半前後。下表の「Recommended duration」は固定のタイムコードではなく、シナリオに合わせた推奨表示尺として扱う。

## 3. 推奨編集ソフト

- 第一候補：DaVinci Resolve
- 簡易候補：Microsoft Clipchamp、Canva、Premiere Rush など

DaVinci Resolveでは、素材を `video_assets/screenshots/` から読み込み、下表のScene number順にタイムラインへ配置する。今回はスクロール動画を使わず、PNG静止画だけで構成する。

## 4. シーンごとの編集表

| Scene number | Recommended duration | Asset file path | Visual treatment | Suggested on-screen text in Japanese | Optional narration idea in Japanese | Notes/cautions |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 約20秒 | `video_assets/screenshots/001_intro_index_top.png` | Slow zoom in, slight pan, fade in | 東京科学大学 医歯学総合研究科 / 難治疾患研究所 病態生理化学分野 | 東京科学大学、医歯学総合研究科、脂質生物学分野です。私たちは、難治疾患研究所にある研究室の一つでもあります。 | 研究室HPの入口として使う。HTML、CSS、JSは変更しない。 |
| 2 | 約18秒 | `video_assets/screenshots/002_intro_index_h1.png` | Hold, slight zoom, cross fade | 脂質が紐解く 生命と疾患の謎 | 佐々木研究室では、脂質から生命と疾患の仕組みを読み解くことを目指しています。 | H1は必ず「脂質が紐解く 生命と疾患の謎」。誤表記を使わない。 |
| 3 | 約22秒 | `video_assets/screenshots/003_research_lipid_layers_top.png` | Slow push in to heading and figure | 脂質は情報を伝える分子 | 私たちが注目しているのは、ホスホイノシタイドをはじめとするリン脂質です。脂質は生命現象を制御する重要な分子でもあります。 | `004_research_lipid_layers_scroll.mp4` は使わない。この静止画で代替する。 |
| 4 | 約18秒 | `video_assets/screenshots/005_research_pips_functions_wide.png` | Hold, zoom toward central network | ホスホイノシタイドの機能 | ホスホイノシタイドは、種類ごとに細胞内の場所や働きが異なります。 | 図の細部文字を読ませるより、全体構造を見せる。 |
| 5 | 約18秒 | `video_assets/screenshots/006_research_pips_disease_wide.png` | Cross fade, light highlight | 脂質代謝の破綻と疾患 | その代謝バランスが崩れると、がん、炎症、神経変性、代謝疾患など多くの病態につながります。 | 医療効果や診断効果を断定しない。公開HTMLの表現に留める。 |
| 6 | 約14秒 | `video_assets/screenshots/007_research_aging_pips.png` | Slow zoom out | 未解明の生命現象に迫る | まだ多くの謎が残る脂質の世界から、生命現象と疾患を理解する手がかりを探しています。 | 研究テーマ章の締めとして使う。未発表成果や推測情報を追加しない。 |
| 7 | 約24秒 | `video_assets/screenshots/008_tech_index_research_tech.png` | Pan across cards | 多層的な解析を組み合わせる | 研究では、質量分析による脂質解析、オミクス解析、細胞生物学、生化学、構造生物学、マウス個体実験などを組み合わせます。 | カード本文を読ませすぎず、研究テーマと技術の幅を見せる。 |
| 8 | 約32秒 | `video_assets/screenshots/009_tech_join_tech_list.png` | Zoom to technology list, hold | 生化学からAI・ロボット活用まで | 幅広い専門性に触れながら、自分の研究テーマを深めていくことができます。 | 技術章の補足と学生募集章の橋渡しに使う。募集条件は公開HTMLの範囲から出ない。 |
| 9 | 約16秒 | `video_assets/screenshots/010_tech_ai_structure_top_wide.png` | Hold, gentle zoom | AIで読み解く脂質-タンパク質相互作用 | さらに、AIや機械学習、構造予測を活用し、未知の脂質分子や相互作用を探索します。 | 未発表のAI結果を追加しない。HTML由来の情報だけを使う。 |
| 10 | 約18秒 | `video_assets/screenshots/011_tech_ai_structure_workflow_wide.png` | Pan through workflow, fade | 問いを立て、実験で確かめる | 問いを立てるのは研究者です。AIで実験の狙いを定め、実験で確かめます。 | `011_tech_ai_structure_scroll.mp4` は使わない。この静止画で代替する。 |
| 11 | 約20秒以上 | `video_assets/screenshots/012_tech_ai_computation_steps_wide.png` | Hold, slight vertical pan, final text overlay | AIで狙いを定め、実験で確かめる / 研究室HPからお問い合わせください | AIによる予測を実験で確かめ、仮説を一つずつ確かなものにしていきます。研究室に興味を持った方は、研究室HPをご確認ください。 | 残りの学生募集・問い合わせナレーションに合わせて長さを調整する。メールアドレスを大きく固定表示しない。 |

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
- [ ] Scene number順に11枚の静止画を配置している
- [ ] `004_research_lipid_layers_scroll.mp4` を使っていない
- [ ] `011_tech_ai_structure_scroll.mp4` を使っていない
- [ ] no typo in H1
- [ ] 「脂質が紐解く 生命と疾患の謎」になっている
- [ ] 「脂質が紡ぐ」を使っていない
- [ ] no unpublished information
- [ ] no speculative claims
- [ ] no added personal information
- [ ] no unapproved person photos
- [ ] contact guidance points to website, not a large fixed email address
- [ ] 問い合わせは研究室HPの問い合わせ欄またはアクセスページへ誘導している
- [ ] HTML, CSS, JS を変更していない
- [ ] `photos/` 内の元画像を変更していない
