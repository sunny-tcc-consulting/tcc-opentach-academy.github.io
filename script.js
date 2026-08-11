const homeTemplateContent = document.querySelector("main")?.innerHTML || "";

const basicPageTemplate = ({ eyebrow, title, copy, items = [] }) => `
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
        <span class="eyebrow">Highlights</span>
        <h2>What this page covers</h2>
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

const pageTemplates = {
  home: homeTemplateContent,
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
    items: [
      "Custom enterprise learning plans for technical teams",
      "NITTP-compatible training support and budget planning",
      "Hands-on labs tailored to business workflows",
      "Post-training advisory for role-based capability uplift"
    ]
  }),
  "enterprise-custom": basicPageTemplate({
    eyebrow: "Corporate Custom Training",
    title: "Tailored training for your company’s real operating environment",
    copy: "We design corporate sessions around your technology stack, team maturity, and business goals.",
    items: [
      "Role-based curriculum aligned to internal tools and projects",
      "Team workshops for cloud adoption and modernization",
      "Scenario-based labs and practical implementation support",
      "Flexible scheduling for enterprise learners"
    ]
  }),
  "funding-guide": basicPageTemplate({
    eyebrow: "Funding Guide Hub",
    title: "Subsidy guidance for learners and enterprises",
    copy: "Understand CEF, NITTP, and subsidy eligibility with practical guidance before you enroll.",
    items: [
      "Personal funding and annual corporate support options",
      "Eligibility clarity for learners and employers",
      "Transparent process guidance from course selection to funding support",
      "Consultation advice for approval-ready documentation"
    ]
  }),
  "about-us": basicPageTemplate({
    eyebrow: "About Us",
    title: "A practical academy focused on skills, certification, and real-world readiness",
    copy: "We help learners and companies build cloud-native capability through official vendor training, professional guidance, and practical support.",
    items: [
      "Official, vendor-aligned learning pathways",
      "Hands-on, practitioner-led instruction",
      "Support for subsidy guidance, certification strategy, and team upskilling",
      "A long-term learning partner for modern technical teams"
    ]
  }),
  "resources-events": basicPageTemplate({
    eyebrow: "Resources & Events",
    title: "Live learning, sharing events, and practical cloud-native guidance",
    copy: "Keep pace with the world of cloud and Kubernetes through weekly sessions, curated resources, and practical learning experiences.",
    items: [
      "Weekly Kube-Friday live sessions",
      "Structured learning resources and event updates",
      "Cloud-native knowledge sharing for learners and teams",
      "Practical guidance for career growth and technology adoption"
    ]
  }),
  "kube-friday": `
    <section class="page-hero small-hero">
      <div class="container narrow-hero">
        <span class="eyebrow">Free Weekly Cloud &amp; Kubernetes Session</span>
        <h1>Kube-Friday | Learn Cloud Native Every Friday Night</h1>
        <p>
          A casual, practical, zero-cost weekly sharing series to help learners understand
          Kubernetes, DevOps, and cloud-native concepts without pressure.
        </p>
        <div class="cta-row">
          <a href="#register" class="btn btn-primary">Register Now</a>
          <a href="#schedule" class="btn btn-secondary">View Schedule</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container two-column">
        <div>
          <span class="eyebrow">What is Kube-Friday?</span>
          <h2>Build practical cloud knowledge one Friday at a time</h2>
          <p>
            Most cloud courses are long, expensive, and rigid. Kube-Friday is designed to
            help tech practitioners absorb cloud-native knowledge through short, practical,
            and interactive sessions.
          </p>
          <p>
            Every Friday from 8:30 PM to 9:30 PM HKT, our senior instructors deliver a
            relaxed live session covering cloud architecture, Kubernetes fundamentals,
            troubleshooting, and real workplace learning points.
          </p>
        </div>
        <div class="info-stack">
          <div class="mini-panel">
            <strong>Session Cycle</strong>
            <span>Weekly Friday</span>
          </div>
          <div class="mini-panel">
            <strong>Time</strong>
            <span>8:30 PM – 9:30 PM HKT</span>
          </div>
          <div class="mini-panel">
            <strong>Format</strong>
            <span>Online live webinar</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">What You Can Gain</span>
          <h2>Practical value from every session</h2>
        </div>
        <div class="card-grid reasons-grid">
          <article class="info-card">
            <h3>Systematic knowledge</h3>
            <p>Build a solid understanding of Kubernetes and cloud-native concepts every week.</p>
          </article>
          <article class="info-card">
            <h3>Live Q&amp;A</h3>
            <p>Learn directly from instructors and solve technical confusion on the spot.</p>
          </article>
          <article class="info-card">
            <h3>Workplace skills</h3>
            <p>Explore practical skills not usually covered in textbooks or fragmented articles.</p>
          </article>
          <article class="info-card">
            <h3>Certification foundation</h3>
            <p>Lay the groundwork needed for official certifications and career progression.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="schedule">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Upcoming Event Schedule</span>
          <h2>Weekly learning roadmap for cloud-native growth</h2>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Module</th>
                <th>Topic</th>
                <th>Focus</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>2 Oct 2026</td><td>Architecture &amp; Fundamentals</td><td>What is K8s</td><td>History, orchestration concepts, and why K8s matters.</td></tr>
              <tr><td>2</td><td>9 Oct 2026</td><td>Architecture &amp; Fundamentals</td><td>What is CRI</td><td>Docker vs. containerd vs. CRI-O.</td></tr>
              <tr><td>3</td><td>16 Oct 2026</td><td>Architecture &amp; Fundamentals</td><td>What is Control Plane</td><td>API server, etcd, scheduler, and controller manager.</td></tr>
              <tr><td>4</td><td>23 Oct 2026</td><td>Architecture &amp; Fundamentals</td><td>What is kubelet</td><td>Node agent and pod lifecycle management.</td></tr>
              <tr><td>5</td><td>30 Oct 2026</td><td>Architecture &amp; Fundamentals</td><td>What is CNI</td><td>How pods communicate via network interfaces.</td></tr>
              <tr><td>6</td><td>—</td><td>Architecture &amp; Fundamentals</td><td>Minikube &amp; Kubectl</td><td>Local cluster setup and essential CLI use.</td></tr>
              <tr><td>7</td><td>—</td><td>Architecture &amp; Fundamentals</td><td>Pods</td><td>Single-container vs. multi-container pods.</td></tr>
              <tr><td>8</td><td>—</td><td>Architecture &amp; Fundamentals</td><td>Namespaces</td><td>Resource isolation and virtual cluster concepts.</td></tr>
              <tr><td>9</td><td>—</td><td>Architecture &amp; Fundamentals</td><td>YAML in Kubernetes</td><td>Writing declarative manifests and API versions.</td></tr>
              <tr><td>10</td><td>—</td><td>Workloads &amp; Controllers</td><td>ReplicaSets</td><td>High availability and stable pod sets.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section alt-section" id="register">
      <div class="container register-box">
        <div>
          <span class="eyebrow">Register Now</span>
          <h2>Join the next free session and receive event updates</h2>
          <p>Complete your registration to get the meeting link, session outline, and pre-learning materials.</p>
        </div>
        <a href="#" class="btn btn-primary">Fill in the Registration Form</a>
      </div>
    </section>

    <section class="section faq-section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">FAQ</span>
          <h2>Questions learners often ask</h2>
        </div>

        <div class="faq-list">
          <div class="faq-item active">
            <button class="faq-question" type="button">Is there any participation fee?</button>
            <div class="faq-answer">
              <p>Completely free for all tech learners.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" type="button">Can I watch the replay if I miss the live session?</button>
            <div class="faq-answer">
              <p>Registered members can access historical learning materials and session notes, but recordings are not provided for replay.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" type="button">Do I need basic tech knowledge to join?</button>
            <div class="faq-answer">
              <p>No. Most sessions start from basic introduction and are suitable for beginners.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};

function renderRoute(route) {
  const main = document.querySelector("main");
  if (!main) return;

  const template = route === "home" ? homeTemplateContent : pageTemplates[route];
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

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const header = document.querySelector(".site-header");
  const yearNode = document.querySelector("#year");

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
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
    if (!route || !pageTemplates[route]) return;

    event.preventDefault();
    closeAllDropdowns();
    renderRoute(route);
    updateActiveRoute(route);
    window.history.pushState({ route }, "", `#${route}`);
  });

  const initialRoute = window.location.hash.replace("#", "");
  if (pageTemplates[initialRoute]) {
    renderRoute(initialRoute);
    updateActiveRoute(initialRoute);
  }

  window.addEventListener("hashchange", () => {
    const route = window.location.hash.replace("#", "");
    if (pageTemplates[route]) {
      renderRoute(route);
      updateActiveRoute(route);
    }
  });
});
