# 大学院生リクルート動画 ショット割り・画面指示書

参照：`recruit_video_script.md`、`recruit_video_assets.md`

## 制作方針

- `recruit_video_script.md` の既存ナレーション原稿・シナリオ本文を source of truth とし、台本内容に合わせて素材の表示時間を調整する。
- 秒数を先に固定せず、DaVinci Resolve上ではナレーションの読み上げ尺に合わせて各素材を伸縮する。
- この版ではスクロール動画を使わず、基本的にPNG静止画だけで構成する。
- `video_assets/scroll_recordings/004_research_lipid_layers_scroll.mp4` は使用しない。`video_assets/screenshots/003_research_lipid_layers_top.png` で代替する。
- `video_assets/scroll_recordings/011_tech_ai_structure_scroll.mp4` は使用しない。`video_assets/screenshots/011_tech_ai_structure_workflow_wide.png` で代替する。
- 画面素材は、下記の素材順にDaVinci Resolveへ配置する。
- 未発表情報、公開HTMLにない個人情報、個別メンバー詳細は追加しない。
- 既存HTML、CSS、JS、`photos/` 内の元画像は変更しない。
- 人物が写る写真を動画に使用する前に、本人または関係者の了承を確認する。
- 問い合わせパートではメールアドレスを大きく固定表示せず、研究室HPの問い合わせ欄・アクセスページへ誘導する。
- トップページH1は「脂質が紐解く 生命と疾患の謎」が正しい。「脂質が紡ぐ」は使わない。

## DaVinci Resolve 素材順

| Scene | 章 | 対応するナレーション範囲 | 使用素材 | 推奨表示尺 | テロップ案 | 演出メモ |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 導入 | 「東京科学大学、医歯学総合研究科、脂質生物学分野です。」から「病態生理化学という分野名で研究を行っています。」まで | `video_assets/screenshots/001_intro_index_top.png` | 約20秒 | 東京科学大学 医歯学総合研究科 / 難治疾患研究所 病態生理化学分野 | 研究室HPの入口として使う。軽いズームまたはパンで、静止画感を弱める。 |
| 2 | 導入 | 「佐々木研究室では、脂質から生命と疾患の仕組みを読み解くことを目指し」から導入章の終わりまで | `video_assets/screenshots/002_intro_index_h1.png` | 約18秒 | 脂質が紐解く 生命と疾患の謎 | H1を主役にする。「脂質が紡ぐ」は使わない。 |
| 3 | 研究テーマ | 「私たちが注目しているのは」から「さまざまな生命現象を制御する重要な分子でもあります。」まで | `video_assets/screenshots/003_research_lipid_layers_top.png` | 約22秒 | 脂質は情報を伝える分子 | 004のスクロール録画は使わず、この静止画で脂質研究の階層性を見せる。 |
| 4 | 研究テーマ | 「特にホスホイノシタイドは、種類ごとに細胞内の場所や働きが異なり」周辺 | `video_assets/screenshots/005_research_pips_functions_wide.png` | 約18秒 | ホスホイノシタイドの機能 | ネットワーク図を主役にする。細部の文字をすべて読ませる必要はない。 |
| 5 | 研究テーマ | 「その代謝バランスが崩れると、がん、炎症、神経変性、代謝疾患など」周辺 | `video_assets/screenshots/006_research_pips_disease_wide.png` | 約18秒 | 脂質代謝の破綻と疾患 | 医療効果や診断効果を断定しない。公開HTMLの範囲に留める。 |
| 6 | 研究テーマ | 「まだ多くの謎が残る脂質の世界から」から研究テーマ章の終わりまで | `video_assets/screenshots/007_research_aging_pips.png` | 約14秒 | 未解明の生命現象に迫る | 老化研究への展開を見せ、技術章へつなぐ。 |
| 7 | 技術 | 「研究では、病態モデル生物やヒト臨床検体の質量分析による脂質解析」から、複数技術の列挙まで | `video_assets/screenshots/008_tech_index_research_tech.png` | 約24秒 | 多層的な解析を組み合わせる | 研究内容カードを見せる。本文を長く読ませず、技術の幅を印象づける。 |
| 8 | 技術・学生募集 | 技術章の複数技術の補足、および学生募集章の「生化学からAI、ロボットの活用まで」周辺 | `video_assets/screenshots/009_tech_join_tech_list.png` | 約32秒 | 生化学からAI・ロボット活用まで | 技術の幅と学生が学べる内容をつなぐ。学生募集の詳細条件は足さない。 |
| 9 | 技術 | 「さらに、AIや機械学習、構造予測を活用し」周辺 | `video_assets/screenshots/010_tech_ai_structure_top_wide.png` | 約16秒 | AIで読み解く脂質-タンパク質相互作用 | AIパートのタイトルカードとして使う。未発表のAI結果は追加しない。 |
| 10 | 技術 | 「問いを立てるのは研究者です。AIで実験の狙いを定め」周辺 | `video_assets/screenshots/011_tech_ai_structure_workflow_wide.png` | 約18秒 | 問いを立て、実験で確かめる | 011のスクロール動画は使わず、ワークフロー静止画で代替する。 |
| 11 | 技術・学生募集・問い合わせ | 技術章の締め、学生募集章、問い合わせ章 | `video_assets/screenshots/012_tech_ai_computation_steps_wide.png` | 約20秒以上 | AIで狙いを定め、実験で確かめる / 研究室HPからお問い合わせください | ナレーションの残りに合わせて長めに調整してよい。問い合わせは研究室HPの問い合わせ欄・アクセスページへ誘導し、メールアドレスを大きく固定表示しない。 |

## 編集上の注意

- 上記の推奨表示尺は固定値ではなく、ナレーションの読み上げ速度に合わせた目安とする。
- 11素材をこの順番でタイムラインに並べ、各素材の長さをナレーションに合わせて調整する。
- スクロール録画は使用しない。`004_research_lipid_layers_scroll.mp4` と `011_tech_ai_structure_scroll.mp4` は素材として残すが、今回の編集タイムラインには載せない。
- テロップは原則1画面1メッセージに絞り、ナレーション全文をそのまま載せない。
- 研究図は細部を読ませるより、全体像、注目領域、キーワードの順で見せる。
- 個人名が写る素材は、公開HTMLや画像に含まれる範囲に留め、個人詳細を追加しない。
- 研究内容の表現は、公開HTMLと台本の範囲に収め、成果や効果を断定的に拡張しない。
