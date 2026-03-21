/*
  DEMATEL 問卷可編輯資料

  給非程式人員的修改方式：
  1. 問卷標題與說明：改 headerHtml
  2. Header 背景色：改 colorBg
  3. 影響因素：改 factors
  4. 基本資料區塊標題：改 personalTitle
  5. 基本資料題目：改 questions

  注意：
  1. factors 的 code 會由編輯器自動重排，手動修改不是必要。
  2. questions 的 name 建議保持唯一，不要重複。
  3. options 直接增減字串即可。
*/
window.dmetalConfig = {
  headerHtml:
    '<h1 class="ql-align-center">人工智慧導入臨床試驗之機會，挑戰與營運衝擊</h1>' +
    '<h2 class="ql-align-center">以受委託臨床試驗機構（CRO）為例</h2>' +
    '<p class="ql-align-center"><br></p>' +
    '<p class="ql-align-center">您好，這是一份純學術之問卷研究，本問卷所有資料僅作為研究之目的，並絕對保密。</p>' +
    '<p class="ql-align-center">請您依實際感受最直接反映填寫此份問卷，誠摯感謝您的熱心協助！</p>' +
    '<p class="ql-align-center"><br></p>' +
    '<p class="ql-align-center">國立台北大學企業管理研究所</p>' +
    '<p class="ql-align-center">指導教授：劉仲矩 老師 ｜ 研究生：蔡秋君</p>',

  colorBg: '#2c5f8a',

  factors: [
    { code: 'A', name: '資料分析能力', desc: 'AI技術在臨床試驗資料處理、統計分析與預測分析的能力。' },
    { code: 'B', name: '準確與可靠性', desc: 'AI模型在臨床試驗應用中的預測準確度、穩定性與可驗證性。' },
    { code: 'C', name: '系統整合能力', desc: 'AI系統與臨床試驗相關系統（如EDC、CTMS、ePRO）的整合能力。' },
    { code: 'D', name: '臨床試驗監測效率', desc: 'AI在風險導向監測與試驗品質管理中的應用能力。' },
    { code: 'E', name: '臨床試驗資料處理速度', desc: 'AI導入後對臨床試驗資料收集、清理與分析速度的提升程度。' },
    { code: 'F', name: '臨床試驗資料品質', desc: '臨床試驗資料的完整性、準確性與一致性。' },
    { code: 'G', name: '受試者招募效率', desc: 'AI應用在患者篩選與招募過程中對效率提升的程度。' },
    { code: 'H', name: '資訊安全與隱私保護', desc: 'AI應用過程中對資料保護與資訊安全的管理能力。' },
    { code: 'I', name: '主管機關法規明確性', desc: '法規單位對AI應用於臨床試驗之規範的清晰程度。' },
    { code: 'J', name: '法規遵循成本', desc: 'CRO為符合AI相關法規與GCP要求所需投入的成本。' },
    { code: 'K', name: '法規審查與核准效率', desc: '法規單位對AI工具或方法在臨床試驗中使用的審查效率。' },
    { code: 'L', name: '專業人才與數據分析能力', desc: 'CRO內部具備AI、數據科學與臨床資料分析能力的人才程度。' },
    { code: 'M', name: '公司資源投入與管理支持', desc: '決策層推動AI轉型，預算編列、試錯容忍度上的支持。' },
    { code: 'N', name: 'CRO市場競爭力', desc: 'AI導入對CRO服務差異化與市場競爭優勢的影響。' },
    { code: 'O', name: '藥廠委外需求考量', desc: '藥廠在評選供應商時，將具備AI解決方案列為加分條件。' }
  ],

  personalTitle: '個人基本資料',

  questions: [
    { label: '心理性別', name: 'gender', options: ['男', '女'], hasOther: false },
    { label: '年齡', name: 'age', options: ['20歲以下', '21-30歲', '31-40歲', '41-50歲', '51歲以上'], hasOther: false },
    { label: '業界年資', name: 'experience', options: ['0-5年(含)', '6-10年(含)', '11-20年(含)', '21-30年(含)', '30年以上'], hasOther: false },
    { label: '教育學歷（最高）', name: 'education', options: ['高中職', '大學', '研究所以上'], hasOther: true },
    { label: '部門', name: 'department', options: ['醫藥學術部', '臨床試驗部', '法規部', '業務部', '資訊部', '管理部', '財務部'], hasOther: true }
  ]
};
