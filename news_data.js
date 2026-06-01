/* ニュースデータ — news.html と index.html で共有
 * このファイルを更新するだけで両ページに自動反映される
 *
 * フィールド:
 *   date     : 表示用日付文字列
 *   dateSort : ソート用 "YYYY-MM" （同月複数は "YYYY-MM-b" 等で区別）
 *   cat      : "award" | "event" | "info" | "recruit"
 *   intl     : true = 国際講演（トップページ掲載対象）、省略 or false = 国内
 *   pin      : true = トップページ最上部に固定表示（自動選定の対象外。手動指定の注目ニュース）
 *   badge    : バッジ表示文字
 *   title    : タイトル（HTMLも可）
 *   detail   : 補足テキスト（省略可）
 *   link     : リンク先 URL（省略可）
 *
 * トップページ表示ルール:
 *   1) pin === true の項目を最上部に固定表示（手動指定）
 *   2) その下に cat === "award" または (cat === "event" && intl === true) の項目を
 *      dateSort の降順で上位 6 件表示（pin 項目は除外）
 */
const newsItems = [

  /* ── 2026 ── */
  {date:"2026年10月7–10日", dateSort:"2026-10", cat:"event", intl:true, badge:"基調講演",
   title:'48<sup>th</sup> Symposium on Hormones and Cell Regulation "Phosphoinositides — Key Regulators of Cell Signaling and Membrane Dynamics in Health and Disease"',
   detail:"Mont Sainte-Odile, Alsace, France ／ Confirmed Invited Speaker",
   link:"https://www.hormones-cell-regulation.eu/"},

  {date:"2026年6月11日", dateSort:"2026-06", cat:"event", intl:false, badge:"説明会", pin:true,
   /* タイトル2行：1行目=説明会ページへのリンク、2行目=3専攻（プレーンテキスト・リンクなし）。
      1行目を外側<a>で包むのではなくタイトル内にリンクを置くため link フィールドは付けない */
   title:'<a href="https://www.tmd.ac.jp/mri/events/open-campus/20260611/" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;">難治疾患研究所 大学院入試説明会（対面実施）</a><br>'
        +'<span style="font-size:15px;font-weight:400;color:var(--muted);">医歯理工保健学専攻（修士）／医歯学専攻（博士）／生命理工医療科学専攻（博士）</span>',
   detail:"2026年6月11日（木）開催"},

  {date:"2026年3月", dateSort:"2026-03", cat:"award", badge:"受賞",
   title:"柳井 翔吾が難治疾患研究所 最優秀論文賞を受賞",
   detail:"柳井 翔吾が最優秀論文賞を受賞しました"},

  {date:"2026年1月22日", dateSort:"2026-01", cat:"event", intl:true, badge:"講演",
   title:"PTEN Research Institute (PRI) meeting にて講演",
   detail:"PTEN Research Institute会議にて発表",
   link:"https://www.ptenresearchinstitute.org/"},

  /* ── 2025 ── */
  {date:"2025年6月", dateSort:"2025-06", cat:"award", badge:"受賞",
   title:"菊地 雄翔が日本生化学会 関東支部例会で優秀発表賞を受賞",
   detail:"2025年度 日本生化学会 関東支部例会 優秀発表賞"},

  {date:"2025年3月", dateSort:"2025-03-b", cat:"award", badge:"受賞",
   title:"菊地 雄翔がベストプレゼンテーション賞を受賞",
   detail:"東京科学大学 2024年度 難治疾患研究所発表会"},

  {date:"2025年3月", dateSort:"2025-03-a", cat:"award", badge:"受賞",
   title:"湯口 勝也が難治疾患研究賞を受賞",
   detail:"2024年度 難治疾患研究所 学生・若手研究発表会"},

  /* ── 2024 ── */
  {date:"2024年11月", dateSort:"2024-11", cat:"award", badge:"受賞",
   title:"岡 風吹が第97回 日本生化学会大会で若手優秀賞を受賞",
   detail:"第97回 日本生化学会大会（2024年11月）"},

  {date:"2024年9月", dateSort:"2024-09", cat:"recruit", badge:"採択",
   title:"吉富 香澄がクリニシャン・サイエンティスト養成支援制度に採択",
   detail:"吉富 香澄（博士課程）が同制度に採択されました"},

  {date:"2024年6月", dateSort:"2024-06", cat:"award", badge:"受賞",
   title:"菊地 雄翔が大学院リトリートでリトリート賞を受賞",
   detail:"東京医科歯科大学 大学院リトリート"},

  {date:"2024年3月", dateSort:"2024-03", cat:"award", badge:"受賞",
   title:"菊地 雄翔がベストディスカッション賞を受賞",
   detail:"東京医科歯科大学 2023年度 難治疾患研究所発表会"},

  /* ── 2023 ── */
  {date:"2023年10月", dateSort:"2023-10", cat:"info", badge:"採択",
   title:"AMED-CREST（令和5年度）採択",
   detail:"「加齢に伴うホスホイノシタイドの変容と老化・疾病の本態解明」が採択されました"},

  {date:"2023年9月", dateSort:"2023-09", cat:"event", intl:true, badge:"招待講演",
   title:'Biochemical Society Meeting — "The PI3K-AKT-mTOR-PTEN pathway: a new era in basic research and clinical translation"',
   detail:"Barcelona, Spain",
   link:"https://www.eventsforce.net/biochemsoc/frontend/reg/thome.csp?pageID=89299&eventID=174&traceRedir=2"},

  {date:"2023年9月12日", dateSort:"2023-09", cat:"event", intl:true, badge:"招待講演",
   title:"Babraham Institute 招待講演",
   detail:"Cambridge, UK"},

  {date:"2023年9月11日", dateSort:"2023-09", cat:"event", intl:true, badge:"招待講演",
   title:"University College London 招待講演",
   detail:"London, UK"},

  {date:"2023年7月", dateSort:"2023-07", cat:"event", intl:true, badge:"招待講演",
   title:"8th World Congress on Cancer Research and Therapy",
   detail:"Frankfurt, Germany"},

  {date:"2023年3月", dateSort:"2023-03", cat:"award", badge:"受賞",
   title:"菊地 雄翔が中谷・椎名学術奨励賞を受賞",
   detail:"東京医科歯科大学 医学部 中谷・椎名学術奨励賞"},

  /* ── 2022 ── */
  {date:"2022年12月", dateSort:"2022-12", cat:"event", intl:true, badge:"招待講演",
   title:'FASEB Conference — "The Protein Phosphatases Conference"',
   detail:"Palm Springs, CA, USA ／ Dec 11–15"},

  {date:"2022年11月", dateSort:"2022-11", cat:"event", intl:true, badge:"招待講演",
   title:'EMBO Workshop — "Inositol lipids: Signaling platforms for organizing cellular architecture and physiology"',
   detail:"Bangalore, India ／ Nov 14–17",
   link:"https://meetings.embo.org/event/22-lipids"},

  {date:"2022年3月", dateSort:"2022-03", cat:"award", badge:"受賞",
   title:"森岡 真が難治疾患研究所 最優秀論文賞を受賞",
   detail:"難治疾患研究所における最優秀論文賞"},

  {date:"2022年度", dateSort:"2022-00", cat:"award", badge:"受賞",
   title:"釘井 雄基が日本生化学会 関東支部例会で優秀発表賞を受賞",
   detail:"2022年度 日本生化学会 関東支部例会 優秀発表賞"},

  /* ── お知らせ・募集 ── */
  {date:"2024年10月", dateSort: