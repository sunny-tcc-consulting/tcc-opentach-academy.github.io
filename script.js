const subsidyConfig = {
  showSubsidy: false
};

const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("subsidy")) {
  const raw = searchParams.get("subsidy");
  subsidyConfig.showSubsidy = raw === "1" || raw === "true" || raw === "yes";
}

const SUBSIDY_LABELS = {
  zh: { cef: "CEF 合資格課程", nittp: "NITTP 企業培訓" },
  en: { cef: "CEF Approved Courses", nittp: "NITTP Enterprise Training" }
};

const appState = {
  language: "en"
};

const navText = {
  zh: {
    home: "首頁",
    individualUpskilling: "個人進修",
    officialVendorCourses: "官方認證課程",
    shortCrashCourses: "短期速成課程",
    cefCourses: "CEF 合資格課程",
    certificateExams: "證照考試",
    enterpriseSolutions: "企業方案",
    nittpEnterprise: "NITTP 企業培訓",
    corporateCustomTraining: "企業客製培訓",
    resourcesEvents: "資源與活動",
    kubeFridayLiveEvents: "Kube-Friday 活動",
    fundingGuideHub: "資助指南",
    aboutUs: "關於我們",
    brand: "OpenTech Academy",
    checkSubsidy: "查詢資助資格",
    joinKubeFriday: "免費參加 Kube-Friday",
    browseCourses: "瀏覽所有課程",
    checkEligibility: "查詢資助資格",
    joinFreeKubeFriday: "免費參加 Kube-Friday"
  },
  en: {
    home: "Home",
    individualUpskilling: "Individual Upskilling",
    officialVendorCourses: "Official Vendor Courses",
    shortCrashCourses: "Short Crash Courses",
    cefCourses: "CEF Approved Courses",
    certificateExams: "Certificate Exams",
    enterpriseSolutions: "Enterprise Solutions",
    nittpEnterprise: "NITTP Enterprise Training",
    corporateCustomTraining: "Corporate Custom Training",
    resourcesEvents: "Resources & Events",
    kubeFridayLiveEvents: "Kube-Friday Live Events",
    fundingGuideHub: "Funding Guide Hub",
    aboutUs: "About Us",
    brand: "OpenTech Academy",
    checkSubsidy: "Check Subsidy",
    joinKubeFriday: "Join Free Kube-Friday",
    browseCourses: "Browse All Courses",
    checkEligibility: "Check Subsidy Eligibility",
    joinFreeKubeFriday: "Join Free Kube-Friday"
  }
};

const buildHomePage = (lang) => {
  const isZh = lang === "zh";
  const text = isZh ? {
    eyebrow: "政府資助培訓課程",
    title: "提升你的雲端、Kubernetes 與工業技術能力",
    heroText: "與認證講師學習，接觸官方供應商培訓，並在每個合資格課程中節省最多 <strong>HK$25,000 個人資助</strong> / <strong>HK$250,000 企業年度資助</strong>。",
    browse: "瀏覽所有課程",
    check: "查詢資助資格",
    join: "免費參加 Kube-Friday",
    stat1: "CEF 合資格",
    stat2: "Kube-Friday",
    stat3: "Red Hat & CNCF",
    weekLabel: "本週於 TCC",
    weekTitle: "雲端原生基礎課程",
    weekItems: ["官方供應商對齊課程大綱", "實作練習與從業者經驗分享", "CEF 與 NITTP 資助指南"],
    intake: "下一批開課：10 月 12 日",
    pill: "名額有限",
    feature1Title: "官方授權資源",
    feature1Text: "供應商認證課程，配合專業教學指導。",
    feature2Title: "雙重資助支持",
    feature2Text: "個人 CEF 與企業 NITTP 資助規劃支持。",
    feature3Title: "實務導向學習",
    feature3Text: "培養真實工作場景所需技能，而非單純理論。",
    upcoming: "即將舉行的 Kube-Friday",
    upcomingTitle: "每週為好奇心與專業人士提供的免費技術分享",
    eventText: "還在參加昂貴、冗長且枯燥的研討會嗎？每週一晚，加入我們一小時的現場直播，透過實用方式探索 Kubernetes、雲端原生與 DevOps 概念。",
    reserve: "立即預留免費席位",
    when: "每週五 • 晚上 8:30 – 9:30 HKT",
    format: "線上直播研討會",
    bestFor: "初學者至從業者",
    categoriesEyebrow: "核心培訓類別",
    categoriesTitle: "從入門到證照，提供全方位學習支援",
    cat1: "官方供應商課程",
    cat1Text: "授權 Red Hat 與 CNCF 課程，對齊國際認證標準。",
    cat2: "CEF 合資格課程",
    cat2Text: "100% 可申請退還，支援個人長期學習發展。",
    cat3: "NITTP 企業培訓",
    cat3Text: "政府配對資助，協助企業降低培訓成本。",
    cat4: "短期 1 日課程",
    cat4Text: "針對考試衝刺與快速技能提升的高效密集課程。",
    cat5: "官方證照考試",
    cat5Text: "一站式考試安排、代金券支援與精簡化認證指導。",
    fundingEyebrow: "政府資助優勢",
    fundingTitle: "最大化合法、透明且高效的資助支援",
    fundingText: "作為香港 CEF 與 NITTP 的註冊培訓機構，我們協助每位學員與企業安心、正確地申請資助。",
    c1: "CEF",
    c1Text: "個人終身學習資助",
    c2: "NITTP",
    c2Text: "企業年度培訓資助",
    c3: "透明",
    c3Text: "從申請到報銷流程一目了然",
    whyEyebrow: "為什麼選擇 TCC OpenTech Academy？",
    whyTitle: "專為職涯升級與企業能力增長而設計",
    why1: "授權官方資源",
    why1Text: "供應商認證課程與具實務經驗的專業講師團隊。",
    why2: "雙重資助支持",
    why2Text: "同時支援個人與企業資助方案，提供實用指導。",
    why3: "實務教學",
    why3Text: "聚焦真實職場應用，而非抽象理論本身。",
    why4: "全流程支援",
    why4Text: "從學習、複習、考試認證到資助申請，一站式支援。",
    ready: "準備開始了嗎？",
    readyTitle: "找到適合你的課程，並善用資助支持。",
    explore: "探索課程",
    reserve: "預留免費席位"
  } : {
    eyebrow: "Government Subsidy Eligible Training",
    title: "Level Up Your Cloud, Kubernetes & Industrial Tech Skills",
    heroText: "Learn from certified industry instructors, access official vendor training, and save up to <strong>HK$25,000 personal subsidy</strong> / <strong>HK$250,000 corporate annual funding</strong> on every eligible course.",
    browse: "Browse All Courses",
    check: "Check Subsidy Eligibility",
    join: "Join Free Kube-Friday",
    stat1: "CEF eligible",
    stat2: "Kube-Friday",
    stat3: "Red Hat & CNCF",
    weekLabel: "This Week at TCC",
    weekTitle: "Cloud Native Essentials",
    weekItems: ["Official vendor-aligned curriculum", "Hands-on labs and practitioner insight", "CEF and NITTP funding guidance"],
    intake: "Next intake: 12 Oct",
    pill: "Limited Seats",
    feature1Title: "Authorized Official Resources",
    feature1Text: "Vendor-certified courses with professional teaching guidance.",
    feature2Title: "Dual Subsidy Coverage",
    feature2Text: "Personal CEF plus corporate NITTP funding support.",
    feature3Title: "Practical Learning",
    feature3Text: "Real workplace skills, not rigid classroom theory alone.",
    upcoming: "Upcoming Kube-Friday",
    upcomingTitle: "Free weekly tech sharing for curious minds and professionals",
    eventText: "Miss expensive seminars and boring pre-recorded courses? Join our weekly 1-hour live webinar every Friday night and explore Kubernetes, cloud-native, and DevOps concepts in a casual, practical way.",
    reserve: "Reserve My Free Seat Now",
    when: "Friday • 8:30 PM – 9:30 PM HKT",
    format: "Live online webinar",
    bestFor: "Beginners to practitioners",
    categoriesEyebrow: "Our Core Training Categories",
    categoriesTitle: "Complete learning support from first steps to certification",
    cat1: "Official Vendor Courses",
    cat1Text: "Authorized Red Hat and CNCF training aligned to international certification standards.",
    cat2: "CEF Approved Courses",
    cat2Text: "100% refundable eligible courses supporting personal lifelong learning.",
    cat3: "NITTP Enterprise Training",
    cat3Text: "Government matching funds to help enterprises reduce training costs.",
    cat4: "Short 1-Day Courses",
    cat4Text: "Intensive crash courses for exam sprints and rapid upskilling.",
    cat5: "Official Certificate Exams",
    cat5Text: "One-stop exam booking, voucher support, and streamlined certification guidance.",
    fundingEyebrow: "Government Funding Advantage",
    fundingTitle: "Maximize legal, transparent, and efficient subsidy support",
    fundingText: "As a registered training provider for both Hong Kong CEF and NITTP, we help every learner and enterprise access funding correctly and confidently.",
    c1: "CEF",
    c1Text: "Personal lifelong learning subsidies",
    c2: "NITTP",
    c2Text: "Corporate annual training support",
    c3: "Transparent",
    c3Text: "Clear guidance throughout the reimbursement process",
    whyEyebrow: "Why Choose TCC OpenTech Academy?",
    whyTitle: "Built for real career upgrading and enterprise capability growth",
    why1: "Authorized Official Resources",
    why1Text: "Vendor-certified programs and professional instructors with hands-on industry experience.",
    why2: "Dual Subsidy Coverage",
    why2Text: "Support for both individual and corporate funding paths with practical guidance.",
    why3: "Practical Teaching",
    why3Text: "Focused on real workplace application rather than abstract theory.",
    why4: "Full Lifecycle Support",
    why4Text: "Learning, revision, exam certification, and funding application assistance in one journey.",
    ready: "Ready to start?",
    readyTitle: "Find the right course and maximize your funding support.",
    explore: "Explore Courses",
    reserve: "Reserve a Free Seat"
  };

  return `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">${text.eyebrow}</span>
          <h1>${text.title}</h1>
          <p class="hero-text">${text.heroText}</p>
          <div class="cta-row">
            <a href="#courses" data-route="courses" class="btn btn-primary">${text.browse}</a>
            <a href="#contact" class="btn btn-secondary">${text.check}</a>
            <a href="#kube-friday" data-route="kube-friday" class="btn btn-ghost">${text.join}</a>
          </div>
          <ul class="mini-stats" aria-label="Key academy metrics">
            <li><strong>100%</strong><span>${text.stat1}</span></li>
            <li><strong>${isZh ? "每週" : "Weekly"}</strong><span>${text.stat2}</span></li>
            <li><strong>${isZh ? "官方" : "Official"}</strong><span>${text.stat3}</span></li>
          </ul>
        </div>

        <div class="hero-panel">
          <div class="floating-card">
            <p class="panel-label">${text.weekLabel}</p>
            <h3>${text.weekTitle}</h3>
            <ul>
              ${text.weekItems.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <div class="panel-meta">
              <span>${text.intake}</span>
              <span class="pill">${text.pill}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="feature-band">
      <div class="container feature-grid">
        <article>
          <span class="feature-icon">✓</span>
          <h3>${text.feature1Title}</h3>
          <p>${text.feature1Text}</p>
        </article>
        <article>
          <span class="feature-icon">$</span>
          <h3>${text.feature2Title}</h3>
          <p>${text.feature2Text}</p>
        </article>
        <article>
          <span class="feature-icon">⚡</span>
          <h3>${text.feature3Title}</h3>
          <p>${text.feature3Text}</p>
        </article>
      </div>
    </section>

    <section class="section intro-section">
      <div class="container section-head">
        <span class="eyebrow">${text.upcoming}</span>
        <h2>${text.upcomingTitle}</h2>
      </div>
      <div class="container event-panel">
        <div>
          <p>${text.eventText}</p>
          <a href="#kube-friday" data-route="kube-friday" class="btn btn-primary">${text.reserve}</a>
        </div>
        <div class="event-details">
          <div><strong>${isZh ? "時間" : "When"}</strong><span>${text.when}</span></div>
          <div><strong>${isZh ? "形式" : "Format"}</strong><span>${text.format}</span></div>
          <div><strong>${isZh ? "適合對象" : "Best for"}</strong><span>${text.bestFor}</span></div>
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">${text.categoriesEyebrow}</span>
          <h2>${text.categoriesTitle}</h2>
        </div>
        <div class="card-grid categories-grid">
          <article class="info-card"><h3>${text.cat1}</h3><p>${text.cat1Text}</p></article>
          ${subsidyConfig.showSubsidy ? `<article class="info-card"><h3>${text.cat2}</h3><p>${text.cat2Text}</p></article>` : ""}
          ${subsidyConfig.showSubsidy ? `<article class="info-card"><h3>${text.cat3}</h3><p>${text.cat3Text}</p></article>` : ""}
          <article class="info-card"><h3>${text.cat4}</h3><p>${text.cat4Text}</p></article>
          <article class="info-card"><h3>${text.cat5}</h3><p>${text.cat5Text}</p></article>
        </div>
      </div>
    </section>

    ${subsidyConfig.showSubsidy ? `
    <section class="section funding-section">
      <div class="container funding-wrap">
        <div>
          <span class="eyebrow">${text.fundingEyebrow}</span>
          <h2>${text.fundingTitle}</h2>
          <p>${text.fundingText}</p>
        </div>
        <div class="funding-list">
          <div><strong>${text.c1}</strong><span>${text.c1Text}</span></div>
          <div><strong>${text.c2}</strong><span>${text.c2Text}</span></div>
          <div><strong>${text.c3}</strong><span>${text.c3Text}</span></div>
        </div>
      </div>
    </section>
    ` : ""}

    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">${text.whyEyebrow}</span>
          <h2>${text.whyTitle}</h2>
        </div>
        <div class="card-grid reasons-grid">
          <article class="quote-card"><h3>${text.why1}</h3><p>${text.why1Text}</p></article>
          <article class="quote-card"><h3>${text.why2}</h3><p>${text.why2Text}</p></article>
          <article class="quote-card"><h3>${text.why3}</h3><p>${text.why3Text}</p></article>
          <article class="quote-card"><h3>${text.why4}</h3><p>${text.why4Text}</p></article>
        </div>
      </div>
    </section>

    <section class="section cta-section" id="contact">
      <div class="container cta-banner">
        <div>
          <span class="eyebrow">${text.ready}</span>
          <h2>${text.readyTitle}</h2>
        </div>
        <div class="cta-actions">
          <a href="#courses" data-route="courses" class="btn btn-primary">${text.explore}</a>
          <a href="#kube-friday" data-route="kube-friday" class="btn btn-secondary">${text.reserve}</a>
        </div>
      </div>
    </section>
  `;
};

const basicPageTemplate = ({ eyebrow, title, copy, items = [], highlightsLabel, highlightsTitle }) => `
  <section class="page-hero small-hero">
    <div class="container narrow-hero">
      <span class="eyebrow">${eyebrow}</span>
      <h1>${title}</h1>
      <p>${copy}</p>
    </div>
  </section>

  <section class="section alt-section">
    <div class="container compare-panel">
      <div>
        <span class="eyebrow">${highlightsLabel}</span>
        <h2>${highlightsTitle}</h2>
      </div>
      <ul class="check-list">
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  </section>
`;

const courseTemplate = ({ eyebrow, title, copy, cards }) => `
  <section class="page-hero small-hero">
    <div class="container narrow-hero">
      <span class="eyebrow">${eyebrow}</span>
      <h1>${title}</h1>
      <p>${copy}</p>
    </div>
  </section>

  <section class="section alt-section">
    <div class="container">
      <div class="card-grid courses-grid">
        ${cards.map((card) => `
          <article class="course-card">
            <span class="course-badge">${card.badge}</span>
            <h3>${card.title}</h3>
            <p>${card.meta}</p>
            <small>${card.note}</small>
          </article>
        `).join("")}
      </div>
    </div>
  </section>
`;

const kubeFridaySchedule = [
  { id: 1, dates: { zh: "待定", en: "TBC" }, module: { zh: "架構與基礎", en: "Architecture & Fundamentals" }, topic: "What is K8s", focus: { zh: "Kubernetes 的歷史、編排概念與重要性。", en: "History, orchestration concepts, and why K8s matters." } },
  { id: 2, dates: { zh: "待定", en: "TBC" }, module: { zh: "架構與基礎", en: "Architecture & Fundamentals" }, topic: "What is CRI", focus: { zh: "Docker、containerd 與 CRI-O 的差異。", en: "Docker vs. containerd vs. CRI-O." } },
  { id: 3, dates: { zh: "待定", en: "TBC"}, module: { zh: "架構與基礎", en: "Architecture & Fundamentals" }, topic: "What is Control Plane", focus: { zh: "API server、etcd、scheduler 與 controller manager。", en: "API server, etcd, scheduler, and controller manager." } },
  { id: 4, dates: { zh: "待定", en: "TBC"}, module: { zh: "架構與基礎", en: "Architecture & Fundamentals" }, topic: "What is kubelet", focus: { zh: "Node agent 與 pod 生存週期管理。", en: "Node agent and pod lifecycle management." } },
  { id: 5, dates: { zh: "待定", en: "TBC" }, module: { zh: "架構與基礎", en: "Architecture & Fundamentals" }, topic: "What is CNI", focus: { zh: "Pods 如何透過網路介面互相通訊。", en: "How pods communicate via network interfaces." } },
  { id: 6, dates: { zh: "待定", en: "TBC" }, module: { zh: "架構與基礎", en: "Architecture & Fundamentals" }, topic: "Minikube & Kubectl", focus: { zh: "本地叢集搭建與基本 CLI 使用。", en: "Local cluster setup and essential CLI use." } },
  { id: 7, dates: { zh: "待定", en: "TBC"}, module: { zh: "架構與基礎", en: "Architecture & Fundamentals" }, topic: "Pods", focus: { zh: "單容器與多容器 Pod 的區別。", en: "Single-container vs. multi-container pods." } },
  { id: 8, dates: { zh: "待定", en: "TBC" }, module: { zh: "架構與基礎", en: "Architecture & Fundamentals" }, topic: "Namespaces", focus: { zh: "資源隔離與虛擬叢集概念。", en: "Resource isolation and virtual cluster concepts." } },
  { id: 9, dates: { zh: "待定", en: "TBC"}, module: { zh: "架構與基礎", en: "Architecture & Fundamentals" }, topic: "YAML in Kubernetes", focus: { zh: "編寫宣告式配置與 API 版本。", en: "Writing declarative manifests and API versions." } },
  { id: 10, dates: { zh: "待定", en: "TBC" }, module: { zh: "工作負載與控制器", en: "Workloads & Controllers" }, topic: "ReplicaSets", focus: { zh: "高可用性與穩定 Pod 集合管理。", en: "High availability and stable pod sets." } }
];

const kubeFridayContent = {
  zh: {
    eyebrow: "每週免費雲端與 Kubernetes 分享活動",
    title: "Kube-Friday | 每週五晚一起學習雲端原生",
    description: "一個輕鬆、實用、零費用的每週分享系列，幫助學習者在不感到壓力的情況下理解 Kubernetes、DevOps 與雲端原生概念。",
    registerCta: "立即報名",
    scheduleCta: "查看課程表",
    intro: {
      eyebrow: "Kube-Friday 是什麼？",
      title: "每週五都在累積實用的雲端知識",
      p1: "很多雲端課程冗長、昂貴且僵硬。Kube-Friday 旨在讓技術從業者透過短而實用、互動性強的分享內容，持續吸收雲端原生知識。",
      p2: "每逢星期五晚上 8:30 PM 至 9:30 PM HKT，我們的講師會帶來輕鬆的現場直播，涵蓋雲端架構、Kubernetes 基礎、故障排除與實際工作場景中的學習重點。",
      info: [
        { label: "活動週期", value: "每週五" },
        { label: "時間", value: "8:30 PM – 9:30 PM HKT" },
        { label: "形式", value: "線上直播研討會" }
      ]
    },
    value: {
      eyebrow: "你能獲得什麼",
      title: "每一場分享都帶來實際價值",
      cards: [
        { title: "系統化知識", text: "每週都能建立穩固的 Kubernetes 與雲端原生概念基礎。" },
        { title: "現場問答", text: "直接向講師提問，當場解決技術困惑。" },
        { title: "職場技能", text: "探索教科書或零散文章中較少提及的實用技能。" },
        { title: "證照基礎", text: "為官方認證與職涯發展奠定扎實的基礎。" }
      ]
    },
    scheduleSection: {
      eyebrow: "活動安排",
      title: "持續成長的每週雲端原生學習路線",
      headers: { date: "日期", module: "模組", topic: "主題", focus: "重點" }
    },
    registerSection: {
      eyebrow: "立即報名",
      title: "參加下一場免費活動並接收最新資訊",
      text: "完成報名後，您將收到會議連結、課程大綱與預習資料。",
      cta: "填寫報名表"
    },
    faqSection: {
      eyebrow: "常見問題",
      title: "學員經常會問的問題",
      items: [
        { question: "活動有參與費用嗎？", answer: "完全免費，適合所有技術學習者參加。" },
        { question: "如果錯過現場直播，我可以重看嗎？", answer: "已報名學員可查閱歷史學習資料與活動筆記，但不提供錄影重播。" },
        { question: "我需要具備基礎技術知識才能參加嗎？", answer: "不需要。大多數活動從基礎入門開始，適合初學者參與。" }
      ]
    }
  },
  en: {
    eyebrow: "Free Weekly Cloud & Kubernetes Session",
    title: "Kube-Friday | Learn Cloud Native Every Friday Night",
    description: "A casual, practical, zero-cost weekly sharing series to help learners understand Kubernetes, DevOps, and cloud-native concepts without pressure.",
    registerCta: "Register Now",
    scheduleCta: "View Schedule",
    intro: {
      eyebrow: "What is Kube-Friday?",
      title: "Build practical cloud knowledge one Friday at a time",
      p1: "Most cloud courses are long, expensive, and rigid. Kube-Friday is designed to help tech practitioners absorb cloud-native knowledge through short, practical, and interactive sessions.",
      p2: "Every Friday from 8:30 PM to 9:30 PM HKT, our senior instructors deliver a relaxed live session covering cloud architecture, Kubernetes fundamentals, troubleshooting, and real workplace learning points.",
      info: [
        { label: "Session Cycle", value: "Weekly Friday" },
        { label: "Time", value: "8:30 PM – 9:30 PM HKT" },
        { label: "Format", value: "Online live webinar" }
      ]
    },
    value: {
      eyebrow: "What You Can Gain",
      title: "Practical value from every session",
      cards: [
        { title: "Systematic knowledge", text: "Build a solid understanding of Kubernetes and cloud-native concepts every week." },
        { title: "Live Q&A", text: "Learn directly from instructors and solve technical confusion on the spot." },
        { title: "Workplace skills", text: "Explore practical skills not usually covered in textbooks or fragmented articles." },
        { title: "Certification foundation", text: "Lay the groundwork needed for official certifications and career progression." }
      ]
    },
    scheduleSection: {
      eyebrow: "Upcoming Event Schedule",
      title: "Weekly learning roadmap for cloud-native growth",
      headers: { date: "Date", module: "Module", topic: "Topic", focus: "Focus" }
    },
    registerSection: {
      eyebrow: "Register Now",
      title: "Join the next free session and receive event updates",
      text: "Complete your registration to get the meeting link, session outline, and pre-learning materials.",
      cta: "Fill in the Registration Form"
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Questions learners often ask",
      items: [
        { question: "Is there any participation fee?", answer: "Completely free for all tech learners." },
        { question: "Can I watch the replay if I miss the live session?", answer: "Registered members can access historical learning materials and session notes, but recordings are not provided for replay." },
        { question: "Do I need basic tech knowledge to join?", answer: "No. Most sessions start from basic introduction and are suitable for beginners." }
      ]
    }
  }
};

const buildKubeFridayPage = (lang) => {
  const c = kubeFridayContent[lang];
  const h = c.scheduleSection.headers;

  const introInfo = c.intro.info
    .map((item) => `<div class="mini-panel"><strong>${item.label}</strong><span>${item.value}</span></div>`)
    .join("");

  const valueCards = c.value.cards
    .map((card) => `<article class="info-card"><h3>${card.title}</h3><p>${card.text}</p></article>`)
    .join("");

  const scheduleRows = kubeFridaySchedule
    .map((row) => `<tr><td>${row.id}</td><td>${row.dates[lang]}</td><td>${row.module[lang]}</td><td>${row.topic}</td><td>${row.focus[lang]}</td></tr>`)
    .join("");

  const faqItems = c.faqSection.items
    .map((item, idx) => `<div class="faq-item${idx === 0 ? " active" : ""}"><button class="faq-question" type="button">${item.question}</button><div class="faq-answer"><p>${item.answer}</p></div></div>`)
    .join("");

  return `
    <section class="page-hero small-hero">
      <div class="container narrow-hero">
        <span class="eyebrow">${c.eyebrow}</span>
        <h1>${c.title}</h1>
        <p>${c.description}</p>
        <div class="cta-row">
          <a href="#register" class="btn btn-primary">${c.registerCta}</a>
          <a href="#schedule" class="btn btn-secondary">${c.scheduleCta}</a>
        </div>
      </div>
    </section>
    <section class="section"><div class="container two-column"><div><span class="eyebrow">${c.intro.eyebrow}</span><h2>${c.intro.title}</h2><p>${c.intro.p1}</p><p>${c.intro.p2}</p></div><div class="info-stack">${introInfo}</div></div></section>
    <section class="section alt-section"><div class="container"><div class="section-head"><span class="eyebrow">${c.value.eyebrow}</span><h2>${c.value.title}</h2></div><div class="card-grid reasons-grid">${valueCards}</div></div></section>
    <section class="section" id="schedule"><div class="container"><div class="section-head"><span class="eyebrow">${c.scheduleSection.eyebrow}</span><h2>${c.scheduleSection.title}</h2></div><div class="table-wrap"><table><thead><tr><th>#</th><th>${h.date}</th><th>${h.module}</th><th>${h.topic}</th><th>${h.focus}</th></tr></thead><tbody>${scheduleRows}</tbody></table></div></div></section>
    <section class="section alt-section" id="register"><div class="container register-box"><div><span class="eyebrow">${c.registerSection.eyebrow}</span><h2>${c.registerSection.title}</h2><p>${c.registerSection.text}</p></div><a href="https://forms.gle/1RiszqLRp8kUZxto6" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${c.registerSection.cta}</a></div></section>
    <section class="section faq-section"><div class="container"><div class="section-head"><span class="eyebrow">${c.faqSection.eyebrow}</span><h2>${c.faqSection.title}</h2></div><div class="faq-list">${faqItems}</div></div></section>
  `;
};

const pageTemplates = {
  zh: {
    home: buildHomePage("zh"),
    courses: courseTemplate({
      eyebrow: "官方認證課程",
      title: "探索經授權的 Red Hat 與 CNCF 培訓課程",
      copy: "選擇符合官方標準、考試準備與職涯發展目標的學習路線。",
      cards: [
        { badge: "Red Hat", title: "Red Hat OpenShift Administration I", meta: "DO180 • 生產環境叢集運營", note: "適用證照：Red Hat Certified OpenShift Administrator" },
        { badge: "Red Hat", title: "Red Hat OpenShift Administration II", meta: "DO280 • 生產環境叢集配置", note: "適用證照：Red Hat Certified OpenShift Administrator" },
        { badge: "Red Hat", title: "OpenShift Development I", meta: "DO188 • 以 Podman 進行容器入門", note: "適用證照：Red Hat Certified OpenShift Application Developer" },
        { badge: "CNCF", title: "Kubernetes Administration", meta: "LF458 • LFS458", note: "適用證照：Certified Kubernetes Administrator (CKA)" },
        { badge: "CNCF", title: "Kubernetes for App Developers", meta: "LF459 • Kubernetes for App Developers", note: "適用證照：Certified Kubernetes Application Developer (CKAD)" },
        { badge: "CNCF", title: "Kubernetes Security Fundamentals", meta: "LF460 • Security Essentials for Kubernetes", note: "適用證照：Certified Kubernetes Security Specialist (CKS)" }
      ]
    }),
    "courses-cef": courseTemplate({
      eyebrow: "CEF 資助課程",
      title: "適合個人進修的資助型課程路線",
      copy: "探索適合個人進修、證照準備與職涯進階的資助課程。",
      cards: [
        { badge: "CEF", title: "Cloud Foundation Bootcamp", meta: "入門 • 2 日密集班", note: "適合剛接觸雲端與 Kubernetes 的學習者" },
        { badge: "CEF", title: "Linux & Automation Essentials", meta: "中階 • 3 日培訓", note: "建立實用系統管理能力" },
        { badge: "CEF", title: "Kubernetes Fast Track", meta: "中階 • 4 日學習路線", note: "專為 CKA 類技能準備者設計" }
      ]
    }),
    "courses-short": courseTemplate({
      eyebrow: "短期速成課程",
      title: "高效密集課程，快速累積技能與考試準備能力",
      copy: "適合需要短時間內提升能力與考試準備的專業人士。",
      cards: [
        { badge: "Fast Track", title: "Kubernetes in One Day", meta: "1 日密集工作坊", note: "核心架構、Pods 與部署模式" },
        { badge: "Fast Track", title: "OpenShift Essentials", meta: "1 日策略導覽", note: "平台基礎與部署流程" },
        { badge: "Fast Track", title: "Linux Automation Sprint", meta: "1 日實作課程", note: "Ansible、Shell 工作流與自動化基礎" }
      ]
    }),
    "courses-exams": courseTemplate({
      eyebrow: "證照考試",
      title: "考試準備支援與官方認證指導",
      copy: "選擇聚焦考試的培訓方案，從先決條件到學習方向都更清晰。",
      cards: [
        { badge: "Exam Prep", title: "RHCSA 準備路線", meta: "Red Hat • 考試準備", note: "實作型命令列與系統技能" },
        { badge: "Exam Prep", title: "CKA 準備工作坊", meta: "CNCF • Kubernetes 精通", note: "叢集管理與故障排除" },
        { badge: "Exam Prep", title: "CKAD 實作精要", meta: "CNCF • 應用流程", note: "Kubernetes 應用開發與除錯" }
      ]
    }),
    "enterprise-training": basicPageTemplate({
      eyebrow: "NITTP 企業培訓",
      title: "適合團隊的企業雲端能力培訓方案",
      copy: "為您的團隊提供結構化企業進修方案，並結合官方培訓路線與資助規劃。",
      items: [ "為技術團隊設計客製化培訓計劃", "支援 NITTP 相容的培訓安排與預算規劃", "根據業務流程設計實作練習", "提供培訓後的角色提升與能力輔導" ],
      highlightsLabel: "亮點",
      highlightsTitle: "本頁內容"
    }),
    "enterprise-custom": basicPageTemplate({
      eyebrow: "企業客製培訓",
      title: "依照公司實際營運環境設計的專屬培訓方案",
      copy: "我們會根據您的技術栈、團隊成熟度與業務目標，設計企業專屬課程。",
      items: [ "依據內部工具與專案設計角色導向課程", "支援雲端採用與數位轉型團隊工作坊", "以實際場景為基礎的實作練習與支援", "為企業學員提供靈活排程安排" ],
      highlightsLabel: "亮點",
      highlightsTitle: "本頁內容"
    }),
    "funding-guide": basicPageTemplate({
      eyebrow: "資助指南中心",
      title: "為學員與企業提供資助申請指引",
      copy: "在報名前了解 CEF、NITTP 及資助資格，協助您更清楚規劃學習與申請。",
      items: [ "個人資助與企業年度支援方案選擇", "協助學員與僱主理解申請資格", "從課程選擇到資助支持的整體流程指引", "提供適合申請文件與諮詢建議" ],
      highlightsLabel: "亮點",
      highlightsTitle: "本頁內容"
    }),
    "about-us": basicPageTemplate({
      eyebrow: "關於我們",
      title: "一所以技能、證照與實務準備為核心的培訓機構",
      copy: "我們協助學員與企業透過官方供應商培訓、專業指導與實務支援，建立雲端原生能力。",
      items: [ "官方、供應商對齊的學習路線", "實作導向、講師主導的教學方式", "提供資助指引、認證策略與團隊進修支援", "成為現代技術團隊的長期學習夥伴" ],
      highlightsLabel: "亮點",
      highlightsTitle: "本頁內容"
    }),
    "resources-events": basicPageTemplate({
      eyebrow: "資源與活動",
      title: "實時學習、分享活動與雲端原生實務指導",
      copy: "透過每週活動、精選資源與實務學習內容，與雲端與 Kubernetes 產業保持同步。",
      items: [ "每週 Kube-Friday 現場分享活動", "結構化學習資源與活動更新", "為學員與團隊提供雲端原生知識交流", "協助職涯發展與技術採用的實務指導" ],
      highlightsLabel: "亮點",
      highlightsTitle: "本頁內容"
    }),
    "kube-friday": buildKubeFridayPage("zh"),
  },
  en: {
    home: buildHomePage("en"),
    courses: courseTemplate({
      eyebrow: "Official Vendor Certified Courses",
      title: "Explore authorized Red Hat & CNCF training programs",
      copy: "Choose a learning path designed around official vendor standards, exam readiness, and practical career progression.",
      cards: [
        { badge: "Red Hat", title: "Red Hat OpenShift Administration I", meta: "DO180 • Operating a Production Cluster", note: "Applicable cert: Red Hat Certified OpenShift Administrator" },
        { badge: "Red Hat", title: "Red Hat OpenShift Administration II", meta: "DO280 • Configuring a Production Cluster", note: "Applicable cert: Red Hat Certified OpenShift Administrator" },
        { badge: "Red Hat", title: "OpenShift Development I", meta: "DO188 • Introduction to Containers with Podman", note: "Applicable cert: Red Hat Certified OpenShift Application Developer" },
        { badge: "CNCF", title: "Kubernetes Administration", meta: "LF458 • LFS458", note: "Applicable cert: Certified Kubernetes Administrator (CKA)" },
        { badge: "CNCF", title: "Kubernetes for App Developers", meta: "LF459 • Kubernetes for App Developers", note: "Applicable cert: Certified Kubernetes Application Developer (CKAD)" },
        { badge: "CNCF", title: "Kubernetes Security Fundamentals", meta: "LF460 • Security Essentials for Kubernetes", note: "Applicable cert: Certified Kubernetes Security Specialist (CKS)" }
      ]
    }),
    "courses-cef": courseTemplate({
      eyebrow: "CEF Subsidy Courses",
      title: "Eligible learning paths with strong personal subsidy support",
      copy: "Explore subsidy-friendly courses for personal upskilling, certification preparation, and career advancement.",
      cards: [
        { badge: "CEF", title: "Cloud Foundation Bootcamp", meta: "Beginner • 2-day intensive", note: "Ideal for new cloud and Kubernetes learners" },
        { badge: "CEF", title: "Linux & Automation Essentials", meta: "Intermediate • 3-day training", note: "Build practical systems administration capability" },
        { badge: "CEF", title: "Kubernetes Fast Track", meta: "Intermediate • 4-day learning path", note: "Designed for candidates preparing for CKA-style skills" }
      ]
    }),
    "courses-short": courseTemplate({
      eyebrow: "Short Crash Courses",
      title: "High-impact intensive courses for fast learning and exam sprinting",
      copy: "Short, focused preparation courses for professionals who need skill gains quickly without long downtime.",
      cards: [
        { badge: "Fast Track", title: "Kubernetes in One Day", meta: "1-day intensive workshop", note: "Core architecture, pods, and deploy patterns" },
        { badge: "Fast Track", title: "OpenShift Essentials", meta: "1-day strategic overview", note: "Platform basics and deployment workflow" },
        { badge: "Fast Track", title: "Linux Automation Sprint", meta: "1-day practical lab", note: "Ansible, shell workflows, and automation basics" }
      ]
    }),
    "courses-exams": courseTemplate({
      eyebrow: "Certificate Exams",
      title: "Exam preparation support and official certification guidance",
      copy: "Choose exam-focused training with clear prerequisites, learning direction, and confident readiness support.",
      cards: [
        { badge: "Exam Prep", title: "RHCSA Preparation Path", meta: "Red Hat • exam readiness", note: "Hands-on command-line and systems skills" },
        { badge: "Exam Prep", title: "CKA Preparation Lab", meta: "CNCF • Kubernetes mastery", note: "Cluster administration and troubleshooting" },
        { badge: "Exam Prep", title: "CKAD Practice Essentials", meta: "CNCF • application workflows", note: "Kubernetes app development and debugging" }
      ]
    }),
    "enterprise-training": basicPageTemplate({
      eyebrow: "NITTP Enterprise Training",
      title: "Corporate-ready cloud capability programs for teams",
      copy: "Give your teams structured enterprise upskilling with official training paths and funding-supported planning.",
      items: [ "Custom enterprise learning plans for technical teams", "NITTP-compatible training support and budget planning", "Hands-on labs tailored to business workflows", "Post-training advisory for role-based capability uplift" ],
      highlightsLabel: "Highlights",
      highlightsTitle: "What this page covers"
    }),
    "enterprise-custom": basicPageTemplate({
      eyebrow: "Corporate Custom Training",
      title: "Tailored training for your company’s real operating environment",
      copy: "We design corporate sessions around your technology stack, team maturity, and business goals.",
      items: [ "Role-based curriculum aligned to internal tools and projects", "Team workshops for cloud adoption and modernization", "Scenario-based labs and practical implementation support", "Flexible scheduling for enterprise learners" ],
      highlightsLabel: "Highlights",
      highlightsTitle: "What this page covers"
    }),
    "funding-guide": basicPageTemplate({
      eyebrow: "Funding Guide Hub",
      title: "Subsidy guidance for learners and enterprises",
      copy: "Understand CEF, NITTP, and subsidy eligibility with practical guidance before you enroll.",
      items: [ "Personal funding and annual corporate support options", "Eligibility clarity for learners and employers", "Transparent process guidance from course selection to funding support", "Consultation advice for approval-ready documentation" ],
      highlightsLabel: "Highlights",
      highlightsTitle: "What this page covers"
    }),
    "about-us": basicPageTemplate({
      eyebrow: "About Us",
      title: "A practical academy focused on skills, certification, and real-world readiness",
      copy: "We help learners and companies build cloud-native capability through official vendor training, professional guidance, and practical support.",
      items: [ "Official, vendor-aligned learning pathways", "Hands-on, practitioner-led instruction", "Support for subsidy guidance, certification strategy, and team upskilling", "A long-term learning partner for modern technical teams" ],
      highlightsLabel: "Highlights",
      highlightsTitle: "What this page covers"
    }),
    "resources-events": basicPageTemplate({
      eyebrow: "Resources & Events",
      title: "Live learning, sharing events, and practical cloud-native guidance",
      copy: "Keep pace with the world of cloud and Kubernetes through weekly sessions, curated resources, and practical learning experiences.",
      items: [ "Weekly Kube-Friday live sessions", "Structured learning resources and event updates", "Cloud-native knowledge sharing for learners and teams", "Practical guidance for career growth and technology adoption" ],
      highlightsLabel: "Highlights",
      highlightsTitle: "What this page covers"
    }),
    "kube-friday": buildKubeFridayPage("en"),
  }
};

function renderRoute(route, lang = appState.language) {
  const main = document.querySelector("main");
  if (!main) return;

  const template = route === "home" ? buildHomePage(lang) : pageTemplates[lang][route];
  if (!template) return;

  main.innerHTML = template;

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      faqItems.forEach((faq) => faq.classList.remove("active"));
      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
}

function updateActiveRoute(route) {
  const links = document.querySelectorAll("[data-route]");
  links.forEach((link) => {
    const isActive = link.dataset.route === route;
    link.classList.toggle("active", isActive);
  });
}

function updateStaticLanguage(lang) {
  const labels = navText[lang];
  const navMap = {
    "[data-i18n='home']": labels.home,
    "[data-i18n='individualUpskilling']": labels.individualUpskilling,
    "[data-i18n='officialVendorCourses']": labels.officialVendorCourses,
    "[data-i18n='shortCrashCourses']": labels.shortCrashCourses,
    "[data-i18n='cefCourses']": labels.cefCourses,
    "[data-i18n='certificateExams']": labels.certificateExams,
    "[data-i18n='enterpriseSolutions']": labels.enterpriseSolutions,
    "[data-i18n='nittpEnterprise']": labels.nittpEnterprise,
    "[data-i18n='corporateCustomTraining']": labels.corporateCustomTraining,
    "[data-i18n='resourcesEvents']": labels.resourcesEvents,
    "[data-i18n='kubeFridayLiveEvents']": labels.kubeFridayLiveEvents,
    "[data-i18n='fundingGuideHub']": labels.fundingGuideHub,
    "[data-i18n='aboutUs']": labels.aboutUs,
    "[data-i18n='brand']": labels.brand,
    "[data-i18n='checkSubsidy']": labels.checkSubsidy,
    "[data-i18n='joinKubeFriday']": labels.joinKubeFriday,
    "[data-i18n='browseCourses']": labels.browseCourses,
    "[data-i18n='checkEligibility']": labels.checkEligibility,
    "[data-i18n='joinFreeKubeFriday']": labels.joinFreeKubeFriday
  };

  Object.entries(navMap).forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value;
    });
  });

  const langToggle = document.querySelector(".lang-switch");
  if (langToggle) {
    langToggle.textContent = lang === "zh" ? "EN" : "中文";
    langToggle.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切換至中文");
  }

  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
}

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const header = document.querySelector(".site-header");
  const yearNode = document.querySelector("#year");
  const langToggle = document.querySelector(".lang-switch");

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  document.body.classList.toggle("subsidy-on", subsidyConfig.showSubsidy);

  const cefLink = document.querySelector("[data-subsidy='cef']");
  const nittpLink = document.querySelector("[data-subsidy='nittp']");
  const subsidyOnlyLinks = document.querySelectorAll(".subsidy-only");
  subsidyOnlyLinks.forEach((link) => {
    link.hidden = !subsidyConfig.showSubsidy;
  });

  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      appState.language = appState.language === "zh" ? "en" : "zh";
      updateStaticLanguage(appState.language);

      const route = window.location.hash.replace("#", "") || "home";
      if (pageTemplates[appState.language][route]) {
        renderRoute(route, appState.language);
        updateActiveRoute(route);
      }
    });
  }

  const closeAllDropdowns = () => {
    const dropdowns = document.querySelectorAll(".nav-dropdown");
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("open");
      const btn = dropdown.querySelector(".nav-dropbtn");
      if (btn) {
        btn.setAttribute("aria-expanded", "false");
        btn.blur();
      }
    });
  };

  const dropdowns = document.querySelectorAll(".nav-dropdown");
  dropdowns.forEach((dropdown) => {
    const btn = dropdown.querySelector(".nav-dropbtn");
    const menuLinks = dropdown.querySelectorAll(".dropdown-menu a");
    if (!btn) return;

    btn.setAttribute("aria-expanded", "false");

    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const isOpen = dropdown.classList.contains("open");
      closeAllDropdowns();

      if (!isOpen) {
        dropdown.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeAllDropdowns();
      });
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const clickedOnDropdownButton = target.closest(".nav-dropbtn");
    const clickedInsideDropdown = target.closest(".nav-dropdown");

    if (!clickedOnDropdownButton && !clickedInsideDropdown) {
      closeAllDropdowns();
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const trigger = target.closest("[data-route]");
    if (!trigger) return;

    const route = trigger.dataset.route;
    if (!route || !pageTemplates[appState.language][route]) return;

    event.preventDefault();
    closeAllDropdowns();
    renderRoute(route, appState.language);
    updateActiveRoute(route);
    window.history.pushState({ route }, "", `#${route}`);
  });

  updateStaticLanguage(appState.language);

  const initialRoute = window.location.hash.replace("#", "") || "home";
  if (pageTemplates[appState.language][initialRoute]) {
    renderRoute(initialRoute, appState.language);
    updateActiveRoute(initialRoute);
  }

  window.addEventListener("hashchange", () => {
    const route = window.location.hash.replace("#", "") || "home";
    if (pageTemplates[appState.language][route]) {
      renderRoute(route, appState.language);
      updateActiveRoute(route);
    }
  });
});
