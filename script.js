/* ================================================================
   Arrahman Study Hub — Main Script (Firebase-powered)
   © 2026 Md Abdul Rahman Raza | arrahmanstudyhub.tech
   Notes are loaded from Firebase Firestore automatically.
   Fallback to local SEMESTERS data if Firebase is not configured.
================================================================ */

/* ── GA4 Helper ─────────────────────────────────────────────── */
function gae(name, params) {
  try {
    if (typeof gtag === 'function') {
      gtag('event', name, Object.assign({ page_location: location.href }, params || {}));
    }
  } catch (e) {}
}

/* ── FIREBASE INTEGRATION ───────────────────────────────────── */
let firebaseReady = false;
let db_ref        = null;

function initFirebase() {
  try {
    if (typeof FIREBASE_CONFIG === 'undefined') return;
    if (FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') return;
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    db_ref       = firebase.firestore();
    firebaseReady = true;
    console.log('[DB] Firebase connected ✅');
    loadNotesFromFirebase();
  } catch (e) {
    console.warn('[DB] Firebase not available, using local data:', e.message);
    firebaseReady = false;
    renderTabsAndGrid();
  }
}

async function loadNotesFromFirebase() {
  try {
    const snap = await db_ref.collection('notes').get();
    const firestoreNotes = snap.docs.map(d => ({ id: d.id, ...d.data() }));

    if (!firestoreNotes.length) {
      renderTabsAndGrid();
      return;
    }

    // Merge Firestore notes into SEMESTERS data
    firestoreNotes.forEach(note => {
      const semNum = note.semester || 2;
      const sem    = SEMESTERS.find(s => s.num === semNum);
      if (!sem) return;

      const sub = sem.subjects.find(s =>
        s.code.toLowerCase().replace('-','') === (note.subject || '').toLowerCase()
        || s.code === note.subjectCode
      );
      if (!sub) return;

      // Check not already in notes array (avoid duplicates)
      const exists = sub.notes.some(n => n.fileUrl === note.fileUrl || n.title === note.title);
      if (exists) return;

      sub.notes.push({
        id:       note.id,
        title:    note.title,
        file:     note.fileUrl,          // Firebase Storage URL
        type:     note.fileType || 'pdf',
        desc:     note.desc || '',
        noteType: note.noteType || 'notes',
        isPaid:   note.isPaid || false,
        price:    note.price || 0,
      });
    });

    console.log('[DB] Notes merged from Firestore ✅');
  } catch (e) {
    console.warn('[DB] Firestore load error:', e.message);
  }
  renderTabsAndGrid();
}

/* ── LOCAL SEMESTERS DATA (fallback + base) ─────────────────── */
const SEMESTERS = [

  /* ─── SEMESTER I ──────────────────────────────────── */
  {
    num: 1, label: "Semester I", short: "Sem I",
    period: "Jul – Dec 2025", color: "#6366f1",
    gradient: "linear-gradient(135deg,#4f46e5,#7c3aed)",
    subjects: [
      { code: "BCA-101", name: "Communication Skills in English", icon: "📝", desc: "Business letters, report writing, grammar, verbal communication", notes: [] },
      { code: "BCA-102", name: "Mathematics-I",                   icon: "📐", desc: "Differential calculus, integral calculus, algebra, 2D geometry", notes: [] },
      { code: "BCA-103", name: "IT Fundamentals",                 icon: "🖥️", desc: "Computer organization, OS basics, networks, binary systems",  notes: [] },
      { code: "BCA-104", name: "Principles of Management",        icon: "📊", desc: "Planning, organizing, staffing, leadership, controlling",      notes: [] },
      { code: "BCA-105", name: "Python Programming",              icon: "🐍", desc: "Variables, loops, functions, file handling, OOP in Python",    notes: [] },
    ],
  },

  /* ─── SEMESTER II ─────────────────────────────────── */
  {
    num: 2, label: "Semester II", short: "Sem II",
    period: "Feb – Jun 2026", color: "#f43f5e",
    gradient: "linear-gradient(135deg,#e11d48,#f97316)",
    subjects: [
      {
        code: "BCA-201", name: "Business English", icon: "📘",
        desc: "Letter writing, comprehension, grammar & business communication",
        notes: [
          { title: "Complete Exam Guide",   file: "notes/bca201/BCA201_Complete_Exam_Guide.html", type: "html", desc: "Complete notes · PYQs · VVI Questions · Exam strategy" },
          { title: "Official Syllabus",     file: "notes/bca201/syllabus.pdf",    type: "pdf",  desc: "BCA-201 official syllabus · AKU Patna" },
          { title: "Previous Year Questions", file: "notes/bca201/pyq.pdf",       type: "pdf",  desc: "BCA-201 PYQ · AKU Patna" },
          { title: "Notes PDF",             file: "notes/bca201/notes.pdf",       type: "pdf",  desc: "BCA-201 PDF notes" },
          { title: "Cheatsheet",            file: "notes/bca201/cheatsheet.pdf",  type: "pdf",  desc: "Quick reference cheatsheet" },
        ],
      },
      {
        code: "BCA-202", name: "Numerical Techniques", icon: "🔢",
        desc: "Newton-Raphson, Gauss elimination, interpolation, integration",
        notes: [
          { title: "Complete Exam Guide",     file: "notes/bca202/BCA202_Complete_Exam_Guide.html", type: "html", desc: "Complete notes · PYQs · Exam strategy" },
          { title: "Official Syllabus",       file: "notes/bca202/syllabus.pdf",  type: "pdf",  desc: "BCA-202 official syllabus · AKU Patna" },
          { title: "Previous Year Questions", file: "notes/bca202/pyq.pdf",       type: "pdf",  desc: "BCA-202 PYQ · AKU Patna" },
          { title: "Notes PDF",               file: "notes/bca202/notes.pdf",     type: "pdf",  desc: "BCA-202 PDF notes" },
          { title: "Cheatsheet",              file: "notes/bca202/cheatsheet.pdf",type: "pdf",  desc: "Quick reference cheatsheet" },
        ],
      },
      {
        code: "BCA-203", name: "System Analysis & Design", icon: "🗂️",
        desc: "SDLC models, DFD, ER diagrams, structured system design",
        notes: [
          { title: "Interactive Study Guide",  file: "notes/bca203/BCA203_Interactive_Study.html",     type: "html", desc: "All 7 units · Interactive Q&A · PYQ mapped" },
          { title: "Colorful Exam Guide",      file: "notes/bca203/BCA203_SAD_ColorfulExamGuide.html", type: "html", desc: "Definitions · VVI answers · Exam strategy" },
          { title: "Official Syllabus",        file: "notes/bca203/syllabus.pdf",  type: "pdf",  desc: "BCA-203 official syllabus · AKU Patna" },
          { title: "Previous Year Questions",  file: "notes/bca203/pyq.pdf",       type: "pdf",  desc: "BCA-203 PYQ · AKU Patna" },
          { title: "Notes PDF",                file: "notes/bca203/notes.pdf",     type: "pdf",  desc: "BCA-203 PDF notes" },
          { title: "Cheatsheet",               file: "notes/bca203/cheatsheet.pdf",type: "pdf",  desc: "Quick reference cheatsheet" },
        ],
      },
      {
        code: "BCA-204", name: "Programming in C", icon: "💻",
        desc: "Pointers, structures, file handling, dynamic memory management",
        notes: [
          { title: "Complete Exam Guide",     file: "notes/bca204/BCA204_Complete_Exam_Guide.html", type: "html", desc: "All units · PYQ answers · Code examples" },
          { title: "VVI Interactive Guide",   file: "notes/bca204/BCA204_VVI_ExamGuide.html",       type: "html", desc: "Top 30 VVI Qs · Programs · Crash sheet" },
          { title: "Official Syllabus",       file: "notes/bca204/syllabus.pdf",  type: "pdf",  desc: "BCA-204 official syllabus · AKU Patna" },
          { title: "Previous Year Questions", file: "notes/bca204/pyq.pdf",       type: "pdf",  desc: "BCA-204 PYQ · AKU Patna" },
          { title: "Cheatsheet",              file: "notes/bca204/cheatsheet.pdf",type: "pdf",  desc: "Quick reference cheatsheet" },
        ],
      },
      {
        code: "BCA-205", name: "Operating System & UNIX", icon: "⚙️",
        desc: "Process management, deadlock, memory management, shell scripting",
        notes: [
          { title: "OS & UNIX Complete Notes",  file: "notes/bca205/BCA205_Complete.html",    type: "html", desc: "Full PYQ answers · UNIX commands · OS theory" },
          { title: "OS & UNIX Updated Notes",   file: "notes/bca205/BCA205_Complete_v2.html", type: "html", desc: "Updated version · Complete coverage" },
          { title: "PYQ Solved Q&A",            file: "notes/bca205/BCA205_QA.html",          type: "html", desc: "Previous year questions with detailed answers" },
          { title: "Official Syllabus",         file: "notes/bca205/syllabus.pdf",  type: "pdf",  desc: "BCA-205 official syllabus · AKU Patna" },
          { title: "Previous Year Questions",   file: "notes/bca205/pyq.pdf",       type: "pdf",  desc: "BCA-205 PYQ · AKU Patna" },
          { title: "Notes PDF",                 file: "notes/bca205/notes.pdf",     type: "pdf",  desc: "BCA-205 PDF notes" },
          { title: "Cheatsheet",                file: "notes/bca205/cheatsheet.pdf",type: "pdf",  desc: "Quick reference cheatsheet" },
        ],
      },
    ],
  },

  /* ─── SEMESTER III ────────────────────────────────── */
  {
    num: 3, label: "Semester III", short: "Sem III",
    period: "Jul – Dec 2026", color: "#f59e0b",
    gradient: "linear-gradient(135deg,#d97706,#f59e0b)",
    subjects: [
      { code: "BCA-301", name: "OOPs with C++",          icon: "🔵", desc: "Classes, objects, inheritance, polymorphism, templates", notes: [] },
      { code: "BCA-302", name: "Data Structures",         icon: "🌳", desc: "Arrays, linked lists, stacks, queues, trees, hashing",  notes: [] },
      { code: "BCA-303", name: "Java Programming",        icon: "☕", desc: "OOP in Java, applets, multithreading, exceptions",      notes: [] },
      { code: "BCA-304", name: "Computer Networks-I",     icon: "🌐", desc: "OSI model, TCP/IP, data link layer, topologies",        notes: [] },
      { code: "BCA-305", name: "Software Engineering",    icon: "⚙️", desc: "SDLC, agile, testing, project management",             notes: [] },
    ],
  },

  /* ─── SEMESTER IV ─────────────────────────────────── */
  {
    num: 4, label: "Semester IV", short: "Sem IV",
    period: "Jan – Jun 2027", color: "#10b981",
    gradient: "linear-gradient(135deg,#059669,#10b981)",
    subjects: [
      { code: "BCA-401", name: "Database Management System",        icon: "🗄️", desc: "RDBMS, SQL, normalization, ER modeling, transactions",   notes: [] },
      { code: "BCA-402", name: "Computer Organization",             icon: "🔌", desc: "CPU architecture, memory hierarchy, pipelining",          notes: [] },
      { code: "BCA-403", name: "Design & Analysis of Algorithms",   icon: "📈", desc: "Time complexity, sorting, divide & conquer, greedy, DP", notes: [] },
      { code: "BCA-404", name: "Web Technology",                    icon: "🌍", desc: "HTML5, CSS3, JavaScript, PHP, XML, web services",         notes: [] },
      { code: "BCA-405", name: "Computer Graphics",                 icon: "🎨", desc: "2D/3D transformations, rendering, multimedia",            notes: [] },
    ],
  },

  /* ─── SEMESTER V ──────────────────────────────────── */
  {
    num: 5, label: "Semester V", short: "Sem V",
    period: "Jul – Dec 2027", color: "#06b6d4",
    gradient: "linear-gradient(135deg,#0284c7,#06b6d4)",
    subjects: [
      { code: "BCA-501", name: "Visual Basic .NET",   icon: "🟦", desc: "Windows forms, ADO.NET, event handling",        notes: [] },
      { code: "BCA-502", name: "Internet Technology", icon: "📡", desc: "HTTP, FTP, email protocols, web security",       notes: [] },
      { code: "BCA-503", name: "Computer Networks-II",icon: "🔒", desc: "Transport layer, network security, cryptography", notes: [] },
      { code: "BCA-504", name: "Theory of Computation",icon: "🧮", desc: "Automata, formal languages, Turing machines",   notes: [] },
      { code: "BCA-505", name: "Software Testing",    icon: "🧪", desc: "Testing types, test cases, defect management",   notes: [] },
    ],
  },

  /* ─── SEMESTER VI ─────────────────────────────────── */
  {
    num: 6, label: "Semester VI", short: "Sem VI",
    period: "Jan – Jun 2028", color: "#8b5cf6",
    gradient: "linear-gradient(135deg,#7c3aed,#a855f7)",
    subjects: [
      { code: "BCA-601", name: "Cloud Computing",   icon: "☁️", desc: "Cloud models, AWS/Azure, virtualization, deployment", notes: [] },
      { code: "BCA-602", name: "Artificial Intelligence", icon: "🤖", desc: "Search algorithms, ML basics, neural networks",   notes: [] },
      { code: "BCA-603", name: "E-Commerce",        icon: "🛒", desc: "E-business models, payment systems, digital marketing", notes: [] },
      { code: "BCA-604", name: "Cyber Security",    icon: "🛡️", desc: "Ethical hacking, OWASP, penetration testing",        notes: [] },
      { code: "BCA-605", name: "Project Work",      icon: "🚀", desc: "Capstone project: Full stack + security + docs",      notes: [] },
    ],
  },
];

/* ── STATE ───────────────────────────────────────────────────── */
let activeSem     = 2;
let searchHits    = [];
let curFile       = '';
let recent        = JSON.parse(localStorage.getItem("hub_recent") || "[]");

/* ── INIT ────────────────────────────────────────────────────── */
(function () {
  applyTheme();
  updateTotalLabel();
  /* Try Firebase first; renderTabsAndGrid called inside */
  if (typeof firebase !== 'undefined' && typeof FIREBASE_CONFIG !== 'undefined') {
    initFirebase();
  } else {
    renderTabsAndGrid();
  }
})();

function renderTabsAndGrid() {
  renderTabs();
  renderSem(activeSem);
  updateTotalLabel();
}

/* ── TABS ────────────────────────────────────────────────────── */
function renderTabs() {
  const bar = document.getElementById("semTabs");
  if (!bar) return;
  bar.innerHTML = SEMESTERS.map(s => {
    const cnt = s.subjects.reduce((a, sub) => a + sub.notes.length, 0);
    return `<button class="sem-tab${s.num === activeSem ? " active" : ""}"
        style="--sem-color:${s.color}" onclick="switchSem(${s.num})">
        <span class="sem-dot"></span>${s.short}
        <span class="note-count">${cnt || "0"}</span>
      </button>`;
  }).join("");
}

function switchSem(num) {
  activeSem = num;
  gae("semester_select", { semester_number: num });
  renderTabs();
  renderSem(num);
}

/* ── SEM VIEW ────────────────────────────────────────────────── */
function renderSem(num) {
  const s    = SEMESTERS.find(x => x.num === num);
  const main = document.getElementById("mainContent");
  if (!s || !main) return;

  const totalNotes    = s.subjects.reduce((a, sub) => a + sub.notes.length, 0);
  const subsWithNotes = s.subjects.filter(sub => sub.notes.length > 0).length;

  const recentHtml = recent.length ? `
  <div class="recent-bar">
    <span class="recent-label" style="color:${s.color}">🕐 Recent</span>
    <div class="recent-chips">
      ${recent.slice(0, 5).map(r => `
        <div class="rchip" style="--active-c:${s.color}"
          onclick="openReader('${esc(r.file)}','${r.type}','${esc(r.title)}','${esc(r.sub||"")}')">
          ${r.type === "pdf" ? "📄" : "📖"} ${r.title}
        </div>`).join("")}
    </div>
  </div>` : "";

  main.innerHTML = `
  <div class="section-view">
    <div class="sem-header">
      <div class="sem-heading">
        <div class="sem-num-badge" style="background:${s.gradient}">0${s.num}</div>
        <div class="sem-title-block">
          <h2>${s.label}</h2>
          <p>${s.period} · AKU Patna · ${s.subjects.length} Subjects</p>
        </div>
      </div>
      <div class="sem-meta">
        <div class="meta-chip"><i class="fa-solid fa-file-lines" style="color:${s.color}"></i>&nbsp;${totalNotes} Notes</div>
        <div class="meta-chip"><i class="fa-solid fa-book" style="color:${s.color}"></i>&nbsp;${subsWithNotes}/${s.subjects.length} Covered</div>
        ${s.num === 2 ? `<button class="meta-chip syl-all-btn" onclick="openSyllabusModal()" style="border-color:${s.color};color:${s.color};cursor:pointer;"><i class="fa-solid fa-scroll"></i>&nbsp;All Syllabuses</button>` : ""}
      </div>
    </div>
    ${recentHtml}
    <div class="subjects-grid">
      ${s.subjects.map((sub, i) => subCard(sub, s.color, i)).join("")}
    </div>
  </div>`;
}

function subCard(sub, color, idx) {
  const hasNotes = sub.notes.length > 0;
  const delay    = idx * 0.06;
  const chips    = sub.notes.length
    ? sub.notes.slice(0, 3).map(n =>
        `<span class="sc-chip filled">${n.type === "pdf" ? "📄" : "📖"} ${n.title}</span>`).join("") +
      (sub.notes.length > 3 ? `<span class="sc-chip filled">+${sub.notes.length - 3} more</span>` : "")
    : `<span class="sc-chip">📂 No notes yet</span>`;

  return `
  <div class="sub-card${hasNotes ? "" : " no-notes"}"
    style="--c:${color};animation-delay:${delay}s"
    onclick="${hasNotes ? `openPanel(${JSON.stringify(sub).replace(/"/g, "&quot;")}, "${color}")` : ""}"
    title="${hasNotes ? "Click to view notes" : "Notes coming soon"}">
    <div class="sub-card-glow"></div>
    <div class="sc-top">
      <div class="sc-icon">${sub.icon}</div>
      <div class="sc-badge">${sub.code}</div>
    </div>
    <div class="sc-name">${sub.name}</div>
    <div class="sc-desc">${sub.desc}</div>
    <div class="sc-chips">${chips}</div>
    <div class="sc-footer">
      <div class="notes-count">${hasNotes ? `<span>${sub.notes.length}</span> file${sub.notes.length > 1 ? "s" : ""} ready` : "Coming soon"}</div>
      ${hasNotes
        ? `<button class="sc-open-btn" onclick="event.stopPropagation();openPanel(${JSON.stringify(sub).replace(/"/g, "&quot;")}, '${color}')">
            Open <i class="fa-solid fa-arrow-right" style="font-size:.65rem"></i>
           </button>`
        : `<span style="font-size:.72rem;color:var(--muted)">📁 Empty</span>`}
    </div>
  </div>`;
}

/* ── PANEL ───────────────────────────────────────────────────── */
function openPanel(sub, color) {
  gae("subject_open", { subject_code: sub.code, subject_name: sub.name });
  const hdr  = document.getElementById("panelHeader");
  const body = document.getElementById("panelBody");
  if (!hdr || !body) return;

  hdr.style.setProperty("--pc", color);
  hdr.innerHTML = `
    <button class="panel-close" onclick="closePanel()"><i class="fa-solid fa-xmark"></i></button>
    <div class="panel-sub-code">${sub.code}</div>
    <div class="panel-sub-name">${sub.icon} ${sub.name}</div>
    <div class="panel-sub-desc">${sub.desc}</div>`;

  if (!sub.notes.length) {
    body.innerHTML = `
      <div class="panel-empty">
        <div class="pe-icon">📂</div>
        <h3>No notes yet</h3>
        <p>Upload notes from the <a href="/admin/dashboard.html" style="color:#6366f1">Admin Panel</a>.</p>
      </div>`;
  } else {
    const html = sub.notes.filter(n => n.type === "html");
    const pdf  = sub.notes.filter(n => n.type === "pdf");
    body.innerHTML = `
      ${html.length ? `
      <div class="notes-section">
        <div class="notes-section-title" style="--pc:${color}">
          <span class="dot"></span> 📖 HTML Notes <span style="margin-left:auto;background:rgba(255,255,255,.07);padding:1px 7px;border-radius:6px;font-size:.65rem">${html.length}</span>
        </div>
        ${html.map(n => noteRow(n, sub, color)).join("")}
      </div>` : ""}
      ${pdf.length ? `
      <div class="notes-section">
        <div class="notes-section-title" style="--pc:${color}">
          <span class="dot"></span> 📄 PDF Files <span style="margin-left:auto;background:rgba(255,255,255,.07);padding:1px 7px;border-radius:6px;font-size:.65rem">${pdf.length}</span>
        </div>
        ${pdf.map(n => noteRow(n, sub, color)).join("")}
      </div>` : ""}`;
  }

  document.getElementById("panelBackdrop").classList.add("open");
  document.getElementById("notesPanel").classList.add("open");
  document.body.style.overflow = "hidden";
}

function noteRow(note, sub, color) {
  const isPdf = note.type === "pdf";
  if (note.isPaid && !isPaidUser(note)) {
    return `
    <div class="note-row" style="--pc:${color}">
      <div class="note-row-icon" style="background:${color}18">🔒</div>
      <div class="note-row-info">
        <div class="note-row-title">${note.title}</div>
        <div class="note-row-desc">${note.desc || ""} · <span style="color:#fbbf24">₹${note.price} — Premium</span></div>
      </div>
      <div class="note-row-actions">
        <button class="nr-btn solid" style="background:#f59e0b;border-color:#f59e0b" onclick="openPaymentModal('sem2_all')">
          🔓 Unlock ₹${note.price}
        </button>
      </div>
    </div>`;
  }

  return `
  <div class="note-row" style="--pc:${color}"
    onclick="openReader('${esc(note.file)}','${note.type}','${esc(note.title)}','${esc(sub.code + " — " + sub.name)}')">
    <div class="note-row-icon" style="background:${color}18">${isPdf ? "📄" : "📖"}</div>
    <div class="note-row-info">
      <div class="note-row-title">${note.title}</div>
      <div class="note-row-desc">${note.desc || ""}</div>
    </div>
    <div class="note-row-actions">
      <button class="nr-btn solid" onclick="event.stopPropagation();openReader('${esc(note.file)}','${note.type}','${esc(note.title)}','${esc(sub.code + " — " + sub.name)}')">
        <i class="fa-solid fa-${isPdf ? "file-pdf" : "book-open"}"></i> Open
      </button>
      ${isPdf
        ? `<button class="nr-btn outline" onclick="event.stopPropagation();forceDownload('${esc(note.file)}')"><i class="fa-solid fa-download"></i></button>`
        : `<button class="nr-btn outline" onclick="event.stopPropagation();window.open('${esc(note.file)}','_blank')"><i class="fa-solid fa-arrow-up-right-from-square"></i></button>`}
    </div>
  </div>`;
}

function isPaidUser(note) {
  if (!note.isPaid) return true;
  return localStorage.getItem("arrahman_paid_sem2_all") !== null ||
         localStorage.getItem("arrahman_paid_" + note.id) !== null;
}

function closePanel() {
  document.getElementById("panelBackdrop").classList.remove("open");
  document.getElementById("notesPanel").classList.remove("open");
  document.body.style.overflow = "";
}

/* ── SYLLABUS MODAL ──────────────────────────────────────────── */
function openSyllabusModal() {
  gae("syllabus_modal_open");
  const sem2  = SEMESTERS.find(s => s.num === 2);
  const color = sem2.color;
  const rows  = sem2.subjects.map(sub => {
    const syl = sub.notes.find(n => n.title === "Official Syllabus");
    return `
    <div class="syl-row">
      <div class="syl-row-left">
        <span class="syl-row-icon">${sub.icon}</span>
        <div>
          <div class="syl-row-code" style="color:${color}">${sub.code}</div>
          <div class="syl-row-name">${sub.name}</div>
        </div>
      </div>
      <div class="syl-row-actions">
        ${syl
          ? `<button class="nr-btn solid" style="background:${color};border-color:${color}"
                onclick="closeModal('syllabusModal');openReader('${esc(syl.file)}','pdf','${esc(sub.code)} Official Syllabus','${esc(sub.code)} — ${esc(sub.name)}')">
                <i class="fa-solid fa-file-pdf"></i> Open
              </button>
              <button class="nr-btn outline" onclick="forceDownload('${esc(syl.file)}')">
                <i class="fa-solid fa-download"></i> Save
              </button>`
          : `<span style="font-size:.75rem;color:var(--muted)">📂 Not uploaded yet</span>`}
      </div>
    </div>`;
  }).join("");

  document.getElementById("sylModalBody").innerHTML = rows;
  document.getElementById("syllabusModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}

/* ── READER ──────────────────────────────────────────────────── */
function openReader(file, type, title, sub) {
  gae("note_open", { file_name: file.split("/").pop(), file_type: type, note_title: title });
  curFile = file;
  document.getElementById("rdTitle").textContent = title;
  document.getElementById("rdSub").textContent   = sub || "";

  const frame    = document.getElementById("readerFrame");
  const embed    = document.getElementById("pdfEmbed");
  const fallback = document.getElementById("pdfFallback");

  document.getElementById("rdDownload").style.display = type === "pdf" ? "flex" : "none";
  document.getElementById("readerOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
  saveRecent({ file, type, title, sub });

  if (type === "pdf") {
    frame.style.display    = "none"; frame.src = "";
    fallback.style.display = "none";
    const canEmbed = navigator.pdfViewerEnabled !== false && !/Android|iPhone|iPad/i.test(navigator.userAgent);
    if (canEmbed) {
      embed.style.display = "flex"; embed.style.flex = "1";
      embed.src = file + "?t=" + Date.now();
    } else {
      embed.style.display    = "none"; embed.src = "";
      fallback.style.display = "flex";
    }
  } else {
    embed.style.display    = "none"; embed.src = "";
    fallback.style.display = "none";
    frame.style.display    = "block"; frame.src = file;
  }

  // Track downloads in Firebase
  if (firebaseReady && db_ref) {
    db_ref.collection('downloads').add({ file, type, title, ts: firebase.firestore.FieldValue.serverTimestamp() }).catch(()=>{});
  }
}

function closeReader() {
  document.getElementById("readerOverlay").classList.remove("open");
  document.getElementById("readerFrame").src = "";
  document.getElementById("pdfEmbed").src    = "";
  document.getElementById("pdfEmbed").style.display    = "none";
  document.getElementById("readerFrame").style.display = "block";
  document.getElementById("pdfFallback").style.display = "none";
  document.body.style.overflow = "";
}

function readerFullscreen() {
  const el = document.getElementById("readerOverlay");
  if (!document.fullscreenElement) el.requestFullscreen().catch(() => {});
  else document.exitFullscreen();
}
function readerNewTab()   { if (curFile) window.open(curFile, "_blank"); }
function readerDownload() { if (curFile) forceDownload(curFile); }

/* ── FORCE DOWNLOAD ──────────────────────────────────────────── */
function forceDownload(file) {
  gae("file_download", { file_name: file.split("/").pop() });
  const a    = document.createElement("a");
  a.href     = file;
  a.download = file.split("/").pop();
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => document.body.removeChild(a), 200);
}

/* ── RECENT ──────────────────────────────────────────────────── */
function saveRecent(item) {
  recent = recent.filter(r => r.file !== item.file);
  recent.unshift(item);
  recent = recent.slice(0, 8);
  localStorage.setItem("hub_recent", JSON.stringify(recent));
}

/* ── SEARCH ──────────────────────────────────────────────────── */
function openSearch()  { document.getElementById("searchModal").classList.add("open"); document.getElementById("searchResults").innerHTML = ""; setTimeout(() => document.getElementById("searchInput").focus(), 80); }
function closeSearch() { document.getElementById("searchModal").classList.remove("open"); document.getElementById("searchInput").value = ""; }
function searchBgClick(e) { if (e.target === e.currentTarget) closeSearch(); }
function searchKeydown(e)  { if (e.key === "Escape") closeSearch(); }

function doSearch(q) {
  const box = document.getElementById("searchResults");
  if (!q.trim()) { box.innerHTML = ""; searchHits = []; return; }
  const lq  = q.toLowerCase();
  searchHits = [];

  SEMESTERS.forEach((s, si) => {
    s.subjects.forEach(sub => {
      if (sub.name.toLowerCase().includes(lq) || sub.code.toLowerCase().includes(lq) || sub.desc.toLowerCase().includes(lq)) {
        searchHits.push({ icon: sub.icon, title: sub.name, meta: `${sub.code} · ${s.label}`, kind: "sub", sem: s.num, color: s.color, sub });
      }
      sub.notes.forEach(note => {
        if (note.title.toLowerCase().includes(lq) || (note.desc || "").toLowerCase().includes(lq)) {
          searchHits.push({ icon: note.type === "pdf" ? "📄" : "📖", title: note.title, meta: `${sub.code} · ${s.label}`, kind: "note", file: note.file, type: note.type, noteSub: `${sub.code} — ${sub.name}`, color: s.color, sem: s.num, sub });
        }
      });
    });
  });

  if (!searchHits.length) { box.innerHTML = '<div class="sb-empty">No results found</div>'; return; }
  box.innerHTML = searchHits.slice(0, 10).map((h, i) => `
    <div class="sr-item" onclick="execSearch(${i})">
      <div class="sri-icon">${h.icon}</div>
      <div><div class="sri-title">${h.title}</div><div class="sri-sub">${h.meta}</div></div>
    </div>`).join("");
}

function execSearch(idx) {
  const h = searchHits[idx];
  if (!h) return;
  gae("search", { query: h.title });
  closeSearch();
  if (h.kind === "sub") { switchSem(h.sem); setTimeout(() => { if (h.sub.notes.length) openPanel(h.sub, h.color); }, 180); }
  else                  { openReader(h.file, h.type, h.title, h.noteSub); }
}

/* ── THEME ───────────────────────────────────────────────────── */
function toggleTheme() {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  document.getElementById("themeIcon").className = isLight ? "fa-solid fa-sun" : "fa-solid fa-moon";
  localStorage.setItem("hub_theme", isLight ? "light" : "dark");
  gae("theme_toggle", { theme: isLight ? "light" : "dark" });
}
function applyTheme() {
  if (localStorage.getItem("hub_theme") === "light") {
    document.body.classList.add("light");
    const icon = document.getElementById("themeIcon");
    if (icon) icon.className = "fa-solid fa-sun";
  }
}

/* ── PROTECTION ──────────────────────────────────────────────── */
(function protectContent() {
  document.addEventListener("contextmenu", e => { e.preventDefault(); showProtectToast(); });
  document.addEventListener("keydown", e => {
    const blocked = e.key === "F12" ||
      (e.ctrlKey && !e.shiftKey && ["u","s"].includes(e.key.toLowerCase())) ||
      (e.ctrlKey && e.shiftKey && ["i","j","c"].includes(e.key.toLowerCase()));
    if (blocked) { e.preventDefault(); e.stopImmediatePropagation(); return false; }
  }, true);

  function showProtectToast() {
    if (document.getElementById("__pt")) return;
    const t = document.createElement("div");
    t.id = "__pt";
    t.innerHTML = '<i class="fa-solid fa-lock"></i> Content is protected © Abdul Rahman';
    Object.assign(t.style, {
      position:"fixed", bottom:"28px", left:"50%",
      transform:"translateX(-50%) translateY(12px)",
      background:"rgba(12,12,22,.95)", color:"#e2e8f0",
      padding:"10px 22px", borderRadius:"30px", fontSize:".8rem", fontWeight:"600",
      fontFamily:"'Plus Jakarta Sans',sans-serif", letterSpacing:".3px",
      border:"1px solid rgba(255,255,255,0.1)", boxShadow:"0 8px 32px rgba(0,0,0,0.55)",
      backdropFilter:"blur(14px)", zIndex:"99999", pointerEvents:"none",
      display:"flex", alignItems:"center", gap:"8px",
      opacity:"0", transition:"opacity .25s, transform .25s",
    });
    document.body.appendChild(t);
    requestAnimationFrame(() => requestAnimationFrame(() => { t.style.opacity="1"; t.style.transform="translateX(-50%) translateY(0)"; }));
    setTimeout(() => { t.style.opacity="0"; t.style.transform="translateX(-50%) translateY(10px)"; setTimeout(()=>t.remove(),300); }, 2400);
  }
})();

/* ── ROBOT VERIFICATION ──────────────────────────────────────── */
(function initRobotCheck() {
  if (localStorage.getItem("hub_human_verified") === "true") {
    const overlay = document.getElementById("robotOverlay");
    if (overlay) overlay.remove();
  }
})();

function onRobotCheck() {
  const cb = document.getElementById("robotCheckbox");
  if (!cb.checked) return;
  cb.disabled = true;
  document.getElementById("robotLabel").style.pointerEvents = "none";
  const prog = document.getElementById("robotProgress");
  prog.classList.add("show");
  setTimeout(() => { document.getElementById("robotTxt").textContent = "✓ Verified! Welcome!"; document.getElementById("robotTxt").style.color = "#10b981"; }, 1500);
  setTimeout(() => {
    const o = document.getElementById("robotOverlay");
    o.classList.add("hide");
    setTimeout(() => { o.remove(); localStorage.setItem("hub_human_verified","true"); }, 500);
  }, 2200);
}

/* ── CHATBOT ─────────────────────────────────────────────────── */
let chatbotOpen = false, chatInitialized = false;
const CHAT_KB = [
  { k:["hello","hi","hey","salam"],           r:"Hi! 👋 I'm Rahman AI. Ask me about BCA notes, subjects, syllabus or exam tips!" },
  { k:["bca-201","201","business english"],    r:"📘 BCA-201 Business English: Notes, PYQ, Syllabus & Cheatsheet available!" },
  { k:["bca-202","202","numerical"],           r:"🔢 BCA-202 Numerical Techniques: Complete Guide + PYQ + Cheatsheet!" },
  { k:["bca-203","203","system analysis","sad"],r:"🗂️ BCA-203 SAD: 2 HTML Guides + Syllabus + PYQ + Cheatsheet!" },
  { k:["bca-204","204","c programming"],       r:"💻 BCA-204 C Programming: 2 HTML Guides + VVI + PYQ + Cheatsheet!" },
  { k:["bca-205","205","operating system","unix","os"],r:"⚙️ BCA-205 OS & UNIX: 3 HTML Guides + PYQ + Cheatsheet!" },
  { k:["syllabus"],                            r:"📕 Click 'All Syllabuses' button on Semester II page!" },
  { k:["pyq","previous year"],                 r:"🔥 PYQs available for all 5 Sem II subjects!" },
  { k:["cheatsheet","cheat"],                  r:"📝 Cheatsheets available for ALL 5 Sem II subjects!" },
  { k:["exam","tip","prepare"],                r:"⭐ Tips:\n1️⃣ Cheatsheets first\n2️⃣ Solve PYQs\n3️⃣ VVI Questions\n4️⃣ Practice C programs!" },
  { k:["paid","buy","price","payment"],        r:"💰 Premium notes start at ₹29. Click any 🔒 locked note to unlock!" },
  { k:["admin","upload"],                      r:"🔐 Admin panel: /admin/login.html — upload notes, manage content!" },
  { k:["thank","thanks"],                      r:"You're welcome! 😊 Best of luck with your exams! 💪" },
  { k:["help"],                                r:"I can help with:\n📘 BCA subjects\n📖 Finding notes\n📕 Syllabus\n🔥 PYQs\n⭐ Exam tips\n💰 Paid notes" },
];

function getBotReply(msg) {
  const m = msg.toLowerCase();
  for (const e of CHAT_KB) { if (e.k.some(k => m.includes(k))) return e.r; }
  return "🤔 Try asking about BCA subjects, notes, syllabus or exam tips! Type 'help' to see what I can do.";
}

function toggleChatbot() {
  chatbotOpen = !chatbotOpen;
  gae("chatbot_toggle", { state: chatbotOpen ? "open" : "close" });
  const win  = document.getElementById("chatbotWindow");
  const icon = document.getElementById("chatFabIcon");
  if (win)  win.classList.toggle("open", chatbotOpen);
  if (icon) icon.className = chatbotOpen ? "fa-solid fa-xmark chatbot-fab-icon" : "fa-solid fa-robot chatbot-fab-icon";
  if (chatbotOpen && !chatInitialized) { chatInitialized = true; appendBotMsg("Hi! 👋 I'm **Rahman AI Assistant**.\nI can help with BCA notes, syllabus, PYQs and exam tips.\nType 'help' to see all I can do!"); }
  if (chatbotOpen) setTimeout(() => document.getElementById("chatbotInput")?.focus(), 200);
}

function appendBotMsg(text) { addChatMsg("bot", text); }
function addChatMsg(role, text) {
  const msgs = document.getElementById("chatbotMsgs");
  if (!msgs) return;
  const now = new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});
  const div = document.createElement("div");
  div.className = "chat-msg " + role;
  div.innerHTML = `<div class="chat-bubble">${text.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}</div><div class="chat-time">${now}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}
function showTyping() {
  const msgs = document.getElementById("chatbotMsgs");
  if (!msgs) return;
  const div = document.createElement("div");
  div.className="chat-msg bot"; div.id="chatTyping";
  div.innerHTML=`<div class="chat-typing"><span></span><span></span><span></span></div>`;
  msgs.appendChild(div); msgs.scrollTop=msgs.scrollHeight;
}
function removeTyping() { const t=document.getElementById("chatTyping"); if(t)t.remove(); }
function sendChat() {
  const input = document.getElementById("chatbotInput");
  const msg   = input.value.trim();
  if (!msg) return;
  gae("chatbot_message");
  input.value = "";
  addChatMsg("user", msg);
  showTyping();
  setTimeout(() => { removeTyping(); appendBotMsg(getBotReply(msg)); }, 700 + Math.random()*500);
}

/* ── KEYBOARD SHORTCUTS ──────────────────────────────────────── */
document.addEventListener("keydown", e => {
  const sm  = document.getElementById("searchModal")?.classList.contains("open");
  const ro  = document.getElementById("readerOverlay")?.classList.contains("open");
  const syl = document.getElementById("syllabusModal")?.classList.contains("open");
  if (e.key === "Escape") {
    if (sm)  closeSearch();
    else if (ro)  closeReader();
    else if (syl) closeModal("syllabusModal");
    else          closePanel();
  }
  if (e.key==="/" && !sm && !ro && !syl && document.activeElement.tagName!=="INPUT") {
    e.preventDefault(); openSearch();
  }
});

/* ── UTILS ───────────────────────────────────────────────────── */
function esc(s) { return String(s).replace(/'/g,"&#39;").replace(/"/g,"&quot;"); }
function updateTotalLabel() {
  let total = 0;
  SEMESTERS.forEach(s => s.subjects.forEach(sub => total += sub.notes.length));
  const el = document.getElementById("totalNotesLabel");
  if (el) el.textContent = total + " Notes Available";
}

/* Mobile */
if (window.innerWidth <= 680) {
  const mb = document.getElementById("mobileSearchBtn");
  if (mb) mb.style.display = "flex";
}
