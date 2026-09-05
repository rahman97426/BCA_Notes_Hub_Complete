/* ============================================================
   BCA Notes Hub — JavaScript / Data
   © 2026 Abdul Rahman — BCA Student Portal | The Ladder to 2028
   File: script.js
   Add new notes: find the subject in SEMESTERS[] → push to notes[]
============================================================ */

      /* ══════════════════════════════════════════════════════
       GA4 EVENT HELPER — safe wrapper, never throws
    ══════════════════════════════════════════════════════ */
      function gae(name, params) {
        try {
          if (typeof gtag === "function") {
            gtag("event", name, Object.assign({ page_location: location.href }, params || {}));
          }
        } catch (e) { /* silent */ }
      }

      /* ╔══════════════════════════════════════════════════════╗
       ║  BCA NOTES DATA  —  Sem I to Sem VI                  ║
       ║  To add a note: push into subject.notes[]             ║
       ║  Format: { title, file, type:'html'|'pdf', desc }    ║
       ╚══════════════════════════════════════════════════════╝ */

      const SEMESTERS = [
        /* ─── SEMESTER I ──────────────────────────────────── */
        {
          num: 1,
          label: "Semester I",
          short: "Sem I",
          period: "Jul – Dec 2025",
          color: "#6366f1",
          gradient: "linear-gradient(135deg,#4f46e5,#7c3aed)",
          subjects: [
            {
              code: "BCA-101",
              name: "Communication Skills in English",
              icon: "📝",
              desc: "Business letters, report writing, grammar, verbal communication",
              notes: [],
            },
            {
              code: "BCA-102",
              name: "Mathematics-I",
              icon: "📐",
              desc: "Differential calculus, integral calculus, algebra, 2D geometry",
              notes: [],
            },
            {
              code: "BCA-103",
              name: "IT Fundamentals",
              icon: "🖥️",
              desc: "Computer organization, OS basics, networks, binary systems",
              notes: [],
            },
            {
              code: "BCA-104",
              name: "Principles of Management",
              icon: "📊",
              desc: "Planning, organizing, staffing, leadership, controlling",
              notes: [],
            },
            {
              code: "BCA-105",
              name: "Python Programming",
              icon: "🐍",
              desc: "Variables, loops, functions, file handling, OOP in Python",
              notes: [],
            },
          ],
        },

        /* ─── SEMESTER II ─────────────────────────────────── */
        {
          num: 2,
          label: "Semester II",
          short: "Sem II",
          period: "Feb – Jun 2026",
          color: "#f43f5e",
          gradient: "linear-gradient(135deg,#e11d48,#f97316)",
          subjects: [
            {
              code: "BCA-201",
              name: "Business English",
              icon: "📘",
              desc: "Letter writing, comprehension, grammar & business communication",
              notes: [
                {
                  title: "Complete Exam Guide",
                  file: "notes/bca201/BCA201_Complete_Exam_Guide.html",
                  type: "html",
                  desc: "Complete notes · PYQs · VVI Questions · Exam answers · Exam strategy",
                },
                {
                  title: "Official Syllabus",
                  file: "notes/bca201/syllabus.pdf",
                  type: "pdf",
                  desc: "BCA-201 Business English official syllabus · AKU Patna",
                },
                {
                  title: "Previous Year Questions",
                  file: "notes/bca201/pyq.pdf",
                  type: "pdf",
                  desc: "BCA-201 previous year exam questions · AKU Patna",
                },
                {
                  title: "Notes PDF",
                  file: "notes/bca201/notes.pdf",
                  type: "pdf",
                  desc: "BCA-201 Business English PDF notes",
                },
                {
                  title: "Cheatsheet",
                  file: "notes/bca201/cheatsheet.pdf",
                  type: "pdf",
                  desc: "BCA-201 Business English quick reference cheatsheet",
                },
              ],
            },
            {
              code: "BCA-202",
              name: "Numerical Techniques",
              icon: "🔢",
              desc: "Newton-Raphson, Gauss elimination, interpolation, integration",
              notes: [
                {
                  title: "Complete Exam Guide",
                  file: "notes/bca202/BCA202_Complete_Exam_Guide.html",
                  type: "html",
                  desc: "Complete notes · PYQs · VVI Questions · Exam answers · Exam strategy",
                },
                {
                  title: "Official Syllabus",
                  file: "notes/bca202/syllabus.pdf",
                  type: "pdf",
                  desc: "BCA-202 Numerical Techniques official syllabus · AKU Patna",
                },
                {
                  title: "Previous Year Questions",
                  file: "notes/bca202/pyq.pdf",
                  type: "pdf",
                  desc: "BCA-202 previous year exam questions · AKU Patna",
                },
                {
                  title: "Notes PDF",
                  file: "notes/bca202/notes.pdf",
                  type: "pdf",
                  desc: "BCA-202 Numerical Techniques PDF notes",
                },
                {
                  title: "Cheatsheet",
                  file: "notes/bca202/cheatsheet.pdf",
                  type: "pdf",
                  desc: "BCA-202 Numerical Techniques quick reference cheatsheet",
                },
              ],
            },
            {
              code: "BCA-203",
              name: "System Analysis & Design",
              icon: "🗂️",
              desc: "SDLC models, DFD, ER diagrams, structured system design",
              notes: [
                {
                  title: "Interactive Study Guide",
                  file: "notes/bca203/BCA203_Interactive_Study.html",
                  type: "html",
                  desc: "All 7 units · Interactive Q&A · Countdown timer · PYQ mapped",
                },
                {
                  title: "Colorful Exam Guide",
                  file: "notes/bca203/BCA203_SAD_ColorfulExamGuide.html",
                  type: "html",
                  desc: "Definitions · Short tricks · VVI answers · Exam strategy",
                },
                {
                  title: "Official Syllabus",
                  file: "notes/bca203/syllabus.pdf",
                  type: "pdf",
                  desc: "BCA-203 System Analysis & Design official syllabus · AKU Patna",
                },
                {
                  title: "Previous Year Questions",
                  file: "notes/bca203/pyq.pdf",
                  type: "pdf",
                  desc: "BCA-203 previous year exam questions · AKU Patna",
                },
                {
                  title: "Notes PDF",
                  file: "notes/bca203/notes.pdf",
                  type: "pdf",
                  desc: "BCA-203 System Analysis & Design PDF notes",
                },
                {
                  title: "Cheatsheet",
                  file: "notes/bca203/cheatsheet.pdf",
                  type: "pdf",
                  desc: "BCA-203 System Analysis & Design quick reference cheatsheet",
                },
              ],
            },
            {
              code: "BCA-204",
              name: "Programming in C",
              icon: "💻",
              desc: "Pointers, structures, file handling, dynamic memory management",
              notes: [
                {
                  title: "Complete Exam Guide",
                  file: "notes/bca204/BCA204_Complete_Exam_Guide.html",
                  type: "html",
                  desc: "All units · PYQ answers · Code examples · Exam strategy",
                },
                {
                  title: "VVI Interactive Exam Guide",
                  file: "notes/bca204/BCA204_VVI_ExamGuide.html",
                  type: "html",
                  desc: "7 units · Top 30 VVI Qs · Programs · Crash sheet · Checklist",
                },
                {
                  title: "Official Syllabus",
                  file: "notes/bca204/syllabus.pdf",
                  type: "pdf",
                  desc: "BCA-204 Programming in C official syllabus · AKU Patna",
                },
                {
                  title: "Previous Year Questions",
                  file: "notes/bca204/pyq.pdf",
                  type: "pdf",
                  desc: "BCA-204 previous year exam questions · AKU Patna",
                },
                {
                  title: "Cheatsheet",
                  file: "notes/bca204/cheatsheet.pdf",
                  type: "pdf",
                  desc: "BCA-204 Programming in C quick reference cheatsheet",
                },
              ],
            },
            {
              code: "BCA-205",
              name: "Operating System & UNIX",
              icon: "⚙️",
              desc: "Process management, deadlock, memory management, shell scripting",
              notes: [
                {
                  title: "OS & UNIX Complete Notes",
                  file: "notes/bca205/BCA205_Complete.html",
                  type: "html",
                  desc: "Full PYQ answers · UNIX commands · OS theory · All units",
                },
                {
                  title: "OS & UNIX Updated Notes",
                  file: "notes/bca205/BCA205_Complete_v2.html",
                  type: "html",
                  desc: "Updated version · Complete coverage · New PYQs included",
                },
                {
                  title: "PYQ Solved Q&A",
                  file: "notes/bca205/BCA205_QA.html",
                  type: "html",
                  desc: "Previous year questions with detailed answers · AKU Patna",
                },
                {
                  title: "Official Syllabus",
                  file: "notes/bca205/syllabus.pdf",
                  type: "pdf",
                  desc: "BCA-205 Operating System & UNIX official syllabus · AKU Patna",
                },
                {
                  title: "Previous Year Questions",
                  file: "notes/bca205/pyq.pdf",
                  type: "pdf",
                  desc: "BCA-205 previous year exam questions · AKU Patna",
                },
                {
                  title: "Notes PDF",
                  file: "notes/bca205/notes.pdf",
                  type: "pdf",
                  desc: "BCA-205 Operating System & UNIX PDF notes",
                },
                {
                  title: "Cheatsheet",
                  file: "notes/bca205/cheatsheet.pdf",
                  type: "pdf",
                  desc: "BCA-205 Operating System & UNIX quick reference cheatsheet",
                },
              ],
            },
          ],
        },

        /* ─── SEMESTER III ────────────────────────────────── */
        {
          num: 3,
          label: "Semester III",
          short: "Sem III",
          period: "Jul – Dec 2026",
          color: "#f59e0b",
          gradient: "linear-gradient(135deg,#d97706,#f59e0b)",
          subjects: [
            {
              code: "BCA-301",
              name: "OOPs with C++",
              icon: "🔵",
              desc: "Classes, objects, inheritance, polymorphism, templates, STL",
              notes: [],
            },
            {
              code: "BCA-302",
              name: "Data Structures",
              icon: "🌳",
              desc: "Arrays, linked lists, stacks, queues, trees, graphs, hashing",
              notes: [],
            },
            {
              code: "BCA-303",
              name: "Java Programming",
              icon: "☕",
              desc: "OOP in Java, applets, multithreading, exception handling",
              notes: [],
            },
            {
              code: "BCA-304",
              name: "Computer Networks-I",
              icon: "🌐",
              desc: "OSI model, TCP/IP, data link layer, network topologies",
              notes: [],
            },
            {
              code: "BCA-305",
              name: "Software Engineering",
              icon: "⚙️",
              desc: "SDLC, agile, testing, project management, quality assurance",
              notes: [],
            },
          ],
        },

        /* ─── SEMESTER IV ─────────────────────────────────── */
        {
          num: 4,
          label: "Semester IV",
          short: "Sem IV",
          period: "Jan – Jun 2027",
          color: "#10b981",
          gradient: "linear-gradient(135deg,#059669,#10b981)",
          subjects: [
            {
              code: "BCA-401",
              name: "Database Management System",
              icon: "🗄️",
              desc: "RDBMS concepts, SQL, normalization, ER modeling, transactions",
              notes: [],
            },
            {
              code: "BCA-402",
              name: "Computer Organization",
              icon: "🔌",
              desc: "CPU architecture, memory hierarchy, I/O organization, pipelining",
              notes: [],
            },
            {
              code: "BCA-403",
              name: "Design & Analysis of Algorithms",
              icon: "📈",
              desc: "Time complexity, sorting, divide & conquer, greedy, DP",
              notes: [],
            },
            {
              code: "BCA-404",
              name: "Web Technology",
              icon: "🌍",
              desc: "HTML5, CSS3, JavaScript, PHP, XML, web services",
              notes: [],
            },
            {
              code: "BCA-405",
              name: "Computer Graphics",
              icon: "🎨",
              desc: "2D/3D transformations, rendering, multimedia, animation basics",
              notes: [],
            },
          ],
        },

        /* ─── SEMESTER V ──────────────────────────────────── */
        {
          num: 5,
          label: "Semester V",
          short: "Sem V",
          period: "Jul – Dec 2027",
          color: "#06b6d4",
          gradient: "linear-gradient(135deg,#0284c7,#06b6d4)",
          subjects: [
            {
              code: "BCA-501",
              name: "Visual Basic .NET",
              icon: "🟦",
              desc: "Windows forms, ADO.NET, event handling, database connectivity",
              notes: [],
            },
            {
              code: "BCA-502",
              name: "Internet Technology",
              icon: "📡",
              desc: "HTTP, FTP, email protocols, web security, cloud basics",
              notes: [],
            },
            {
              code: "BCA-503",
              name: "Computer Networks-II",
              icon: "🔒",
              desc: "Transport layer, network security, cryptography, firewalls",
              notes: [],
            },
            {
              code: "BCA-504",
              name: "Theory of Computation",
              icon: "🧮",
              desc: "Automata, formal languages, Turing machines, decidability",
              notes: [],
            },
            {
              code: "BCA-505",
              name: "Software Testing",
              icon: "🧪",
              desc: "Testing types, test cases, defect management, automation basics",
              notes: [],
            },
          ],
        },

        /* ─── SEMESTER VI ─────────────────────────────────── */
        {
          num: 6,
          label: "Semester VI",
          short: "Sem VI",
          period: "Jan – Jun 2028",
          color: "#8b5cf6",
          gradient: "linear-gradient(135deg,#7c3aed,#a855f7)",
          subjects: [
            {
              code: "BCA-601",
              name: "Cloud Computing",
              icon: "☁️",
              desc: "Cloud models, AWS/Azure basics, virtualization, deployment",
              notes: [],
            },
            {
              code: "BCA-602",
              name: "Artificial Intelligence",
              icon: "🤖",
              desc: "Search algorithms, ML basics, neural networks, expert systems",
              notes: [],
            },
            {
              code: "BCA-603",
              name: "E-Commerce",
              icon: "🛒",
              desc: "E-business models, payment systems, digital marketing, security",
              notes: [],
            },
            {
              code: "BCA-604",
              name: "Cyber Security",
              icon: "🛡️",
              desc: "Ethical hacking, OWASP, penetration testing, cyber laws",
              notes: [],
            },
            {
              code: "BCA-605",
              name: "Project Work",
              icon: "🚀",
              desc: "Capstone project: Full stack + security + documentation",
              notes: [],
            },
          ],
        },
      ];

      /* ─── STATE ─────────────────────────────────────────── */
      let activeSem = 2; // default: show Sem II (has notes)
      let searchHits = [];
      let curFile = "";
      let recent = JSON.parse(localStorage.getItem("hub_recent") || "[]");

      /* ─── INIT ───────────────────────────────────────────── */
      (function () {
        applyTheme();
        renderTabs();
        renderSem(activeSem);
        updateTotalLabel();
      })();

      /* ══════════════════════════════════════════════════════
       TABS
    ══════════════════════════════════════════════════════ */
      function renderTabs() {
        const bar = document.getElementById("semTabs");
        bar.innerHTML = SEMESTERS.map((s) => {
          const cnt = s.subjects.reduce((a, sub) => a + sub.notes.length, 0);
          return `
    <button class="sem-tab${s.num === activeSem ? " active" : ""}"
      style="--sem-color:${s.color}"
      onclick="switchSem(${s.num})">
      <span class="sem-dot"></span>
      ${s.short}
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

      /* ══════════════════════════════════════════════════════
       SEM VIEW
    ══════════════════════════════════════════════════════ */
      function renderSem(num) {
        const s = SEMESTERS.find((x) => x.num === num);
        const main = document.getElementById("mainContent");

        const totalNotes = s.subjects.reduce(
          (a, sub) => a + sub.notes.length,
          0,
        );
        const subsWithNotes = s.subjects.filter(
          (sub) => sub.notes.length > 0,
        ).length;

        // Recent bar
        const recentHtml = recent.length
          ? `
  <div class="recent-bar">
    <span class="recent-label" style="color:${s.color}">🕐 Recent</span>
    <div class="recent-chips">
      ${recent
        .slice(0, 5)
        .map(
          (r) => `
        <div class="rchip" style="--active-c:${s.color}"
          onclick="openReader('${esc(r.file)}','${r.type}','${esc(r.title)}','${esc(r.sub || "")}')">
          ${r.type === "pdf" ? "📄" : "📖"} ${r.title}
        </div>`,
        )
        .join("")}
    </div>
  </div>`
          : "";

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
        const delay = idx * 0.06;
        const chips = sub.notes.length
          ? sub.notes
              .map(
                (n) =>
                  `<span class="note-chip available">${n.type === "pdf" ? "📄" : "📖"} ${n.title}</span>`,
              )
              .join("")
          : `<span class="note-chip empty">📂 No notes yet</span>`;

        return `
  <div class="sub-card${hasNotes ? "" : " no-notes"}"
    style="--c:${color};animation-delay:${delay}s"
    onclick="${hasNotes ? `openPanel(${JSON.stringify(sub).replace(/"/g, "&quot;")},'${color}')` : ""}"
    title="${hasNotes ? "Click to view notes" : "Notes coming soon"}">
    <div class="sub-card-glow"></div>
    <div class="sub-top">
      <div class="sub-icon">${sub.icon}</div>
      <div class="sub-code">${sub.code}</div>
    </div>
    <div class="sub-name">${sub.name}</div>
    <div class="sub-desc">${sub.desc}</div>
    <div class="sub-notes-row">${chips}</div>
    <div class="sub-footer">
      <div class="notes-count">${hasNotes ? `<span>${sub.notes.length}</span> file${sub.notes.length > 1 ? "s" : ""} ready` : "Coming soon"}</div>
      ${
        hasNotes
          ? `<button class="open-btn" onclick="event.stopPropagation();openPanel(${JSON.stringify(sub).replace(/"/g, "&quot;")},'${color}')">
        Open <i class="fa-solid fa-arrow-right" style="font-size:.65rem"></i>
      </button>`
          : `<span style="font-size:.72rem;color:var(--muted)">📁 Empty</span>`
      }
    </div>
  </div>`;
      }

      /* ══════════════════════════════════════════════════════
       NOTES PANEL
    ══════════════════════════════════════════════════════ */
      function openPanel(sub, color) {
        gae("subject_open", { subject_code: sub.code, subject_name: sub.name });
        const hdr = document.getElementById("panelHeader");
        const body = document.getElementById("panelBody");

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
        <p>Add files to <code>${sub.code}</code> in the DATA section of <code>notes_hub.html</code>.<br>
        See README.md for instructions.</p>
      </div>`;
        } else {
          // Group by type
          const html = sub.notes.filter((n) => n.type === "html");
          const pdf = sub.notes.filter((n) => n.type === "pdf");

          body.innerHTML = `
      ${
        html.length
          ? `
      <div class="notes-section">
        <div class="notes-section-title" style="--pc:${color}">
          <span class="dot"></span> 📖 HTML Notes <span style="margin-left:auto;background:rgba(255,255,255,.07);padding:1px 7px;border-radius:6px;font-size:.65rem">${html.length}</span>
        </div>
        ${html.map((n) => noteRow(n, sub, color)).join("")}
      </div>`
          : ""
      }
      ${
        pdf.length
          ? `
      <div class="notes-section">
        <div class="notes-section-title" style="--pc:${color}">
          <span class="dot"></span> 📄 PDF Files <span style="margin-left:auto;background:rgba(255,255,255,.07);padding:1px 7px;border-radius:6px;font-size:.65rem">${pdf.length}</span>
        </div>
        ${pdf.map((n) => noteRow(n, sub, color)).join("")}
      </div>`
          : ""
      }`;
        }

        document.getElementById("panelBackdrop").classList.add("open");
        document.getElementById("notesPanel").classList.add("open");
        document.body.style.overflow = "hidden";
      }

      function noteRow(note, sub, color) {
        const isPdf = note.type === "pdf";
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
      ${
        isPdf
          ? `<button class="nr-btn outline" onclick="event.stopPropagation();forceDownload('${esc(note.file)}')"><i class="fa-solid fa-download"></i></button>`
          : `<button class="nr-btn outline" onclick="event.stopPropagation();window.open('${esc(note.file)}','_blank')"><i class="fa-solid fa-arrow-up-right-from-square"></i></button>`
      }
    </div>
  </div>`;
      }

      function closePanel() {
        document.getElementById("panelBackdrop").classList.remove("open");
        document.getElementById("notesPanel").classList.remove("open");
        document.body.style.overflow = "";
      }

      /* ══════════════════════════════════════════════════════
       ALL SYLLABUSES MODAL  (Semester II)
    ══════════════════════════════════════════════════════ */
      function openSyllabusModal() {
        gae("syllabus_modal_open");
        const sem2 = SEMESTERS.find((s) => s.num === 2);
        const color = sem2.color;

        // Build rows for each subject's syllabus note
        const rows = sem2.subjects.map((sub) => {
          const syl = sub.notes.find((n) => n.title === "Official Syllabus");
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
        : `<span style="font-size:.75rem;color:var(--muted)">📂 Not uploaded yet</span>`
      }
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

      /* ══════════════════════════════════════════════════════
       FORCE DOWNLOAD  (never opens reader)
    ══════════════════════════════════════════════════════ */
      function forceDownload(file) {
        gae("file_download", { file_name: file.split("/").pop() });
        const a = document.createElement("a");
        a.href = file;
        a.download = file.split("/").pop();
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        setTimeout(() => document.body.removeChild(a), 200);
      }

      /* ══════════════════════════════════════════════════════
       READER
    ══════════════════════════════════════════════════════ */
      function openReader(file, type, title, sub) {
        gae("note_open", { file_name: file.split("/").pop(), file_type: type, note_title: title });
        curFile = file;

        // Update top bar
        document.getElementById("rdTitle").textContent = title;
        document.getElementById("rdSub").textContent   = sub || "";
        document.getElementById("rdDownload").style.display = type === "pdf" ? "flex" : "none";
        document.getElementById("readerOverlay").classList.add("open");
        document.body.style.overflow = "hidden";
        saveRecent({ file, type, title, sub });

        const frame    = document.getElementById("readerFrame");
        const embed    = document.getElementById("pdfEmbed");
        const fallback = document.getElementById("pdfFallback");

        if (type === "pdf") {
          // --- PDF: use <embed> — far more reliable than iframe ---
          frame.style.display    = "none";
          frame.src              = "";
          fallback.style.display = "none";

          // Detect if browser can show PDFs inline
          const canEmbed = navigator.pdfViewerEnabled !== false &&
                           !/Android|iPhone|iPad/i.test(navigator.userAgent);

          if (canEmbed) {
            embed.style.display = "flex";
            embed.style.flex    = "1";
            embed.src           = file + "?t=" + Date.now(); // cache-bust
          } else {
            // Mobile / no PDF plugin → show friendly fallback panel
            embed.style.display    = "none";
            embed.src              = "";
            fallback.style.display = "flex";
          }
        } else {
          // --- HTML: use iframe as before ---
          embed.style.display    = "none";
          embed.src              = "";
          fallback.style.display = "none";
          frame.style.display    = "block";
          frame.src              = file;
        }
      }

      function closeReader() {
        document.getElementById("readerOverlay").classList.remove("open");

        const frame    = document.getElementById("readerFrame");
        const embed    = document.getElementById("pdfEmbed");
        const fallback = document.getElementById("pdfFallback");

        frame.src              = "";
        frame.style.display    = "block";   // reset for next open
        embed.src              = "";
        embed.style.display    = "none";
        fallback.style.display = "none";

        document.body.style.overflow = "";
      }
      function readerFullscreen() {
        const el = document.getElementById("readerOverlay");
        if (!document.fullscreenElement) el.requestFullscreen().catch(() => {});
        else document.exitFullscreen();
      }
      function readerNewTab() {
        if (curFile) window.open(curFile, "_blank");
      }
      function readerDownload() {
        if (!curFile) return;
        const a = document.createElement("a");
        a.href = curFile;
        a.download = curFile.split("/").pop();
        a.click();
      }

      /* ══════════════════════════════════════════════════════
       RECENT
    ══════════════════════════════════════════════════════ */
      function saveRecent(item) {
        recent = recent.filter((r) => r.file !== item.file);
        recent.unshift(item);
        recent = recent.slice(0, 8);
        localStorage.setItem("hub_recent", JSON.stringify(recent));
      }

      /* ══════════════════════════════════════════════════════
       SEARCH
    ══════════════════════════════════════════════════════ */
      function openSearch() {
        document.getElementById("searchModal").classList.add("open");
        document.getElementById("searchResults").innerHTML = "";
        setTimeout(() => document.getElementById("searchInput").focus(), 80);
      }
      function closeSearch() {
        document.getElementById("searchModal").classList.remove("open");
        document.getElementById("searchInput").value = "";
        document.getElementById("searchResults").innerHTML = "";
      }
      function searchBgClick(e) {
        if (e.target === e.currentTarget) closeSearch();
      }
      function searchKeydown(e) {
        if (e.key === "Escape") closeSearch();
      }

      function doSearch(q) {
        const box = document.getElementById("searchResults");
        if (!q.trim()) {
          box.innerHTML = "";
          searchHits = [];
          return;
        }
        const lq = q.toLowerCase();
        searchHits = [];

        SEMESTERS.forEach((s) => {
          s.subjects.forEach((sub) => {
            if (
              sub.name.toLowerCase().includes(lq) ||
              sub.code.toLowerCase().includes(lq) ||
              sub.desc.toLowerCase().includes(lq)
            ) {
              searchHits.push({
                icon: sub.icon,
                title: sub.name,
                meta: `${sub.code} · ${s.label}`,
                kind: "sub",
                sem: s.num,
                color: s.color,
                sub,
              });
            }
            sub.notes.forEach((note) => {
              if (
                note.title.toLowerCase().includes(lq) ||
                (note.desc || "").toLowerCase().includes(lq)
              ) {
                searchHits.push({
                  icon: note.type === "pdf" ? "📄" : "📖",
                  title: note.title,
                  meta: `${sub.code} · ${s.label}`,
                  kind: "note",
                  file: note.file,
                  type: note.type,
                  noteSub: `${sub.code} — ${sub.name}`,
                  color: s.color,
                  sem: s.num,
                  sub,
                });
              }
            });
          });
        });

        if (!searchHits.length) {
          box.innerHTML = '<div class="sb-empty">No results found</div>';
          return;
        }
        box.innerHTML = searchHits
          .slice(0, 10)
          .map(
            (h, i) => `
    <div class="sr-item" onclick="execSearch(${i})">
      <div class="sri-icon">${h.icon}</div>
      <div><div class="sri-title">${h.title}</div><div class="sri-sub">${h.meta}</div></div>
    </div>`,
          )
          .join("");
      }

      function execSearch(idx) {
        const h = searchHits[idx];
        if (!h) return;
        closeSearch();
        if (h.kind === "sub") {
          switchSem(h.sem);
          setTimeout(() => {
            if (h.sub.notes.length) openPanel(h.sub, h.color);
          }, 180);
        } else {
          openReader(h.file, h.type, h.title, h.noteSub);
        }
      }

      /* ══════════════════════════════════════════════════════
       THEME
    ══════════════════════════════════════════════════════ */
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
          document.getElementById("themeIcon").className = "fa-solid fa-sun";
        }
      }

      /* ══════════════════════════════════════════════════════
       UTILS
    ══════════════════════════════════════════════════════ */
      function esc(s) {
        return String(s).replace(/'/g, "&#39;").replace(/"/g, "&quot;");
      }

      function updateTotalLabel() {
        let total = 0;
        SEMESTERS.forEach((s) =>
          s.subjects.forEach((sub) => (total += sub.notes.length)),
        );
        document.getElementById("totalNotesLabel").textContent =
          `${total} Notes Available`;
      }

      /* keyboard shortcuts */
      document.addEventListener("keydown", (e) => {
        const sm = document
          .getElementById("searchModal")
          .classList.contains("open");
        const ro = document
          .getElementById("readerOverlay")
          .classList.contains("open");
        const syl = document
          .getElementById("syllabusModal")
          .classList.contains("open");
        if (e.key === "Escape") {
          if (sm) closeSearch();
          else if (ro) closeReader();
          else if (syl) closeModal("syllabusModal");
          else closePanel();
        }
        if (
          e.key === "/" &&
          !sm &&
          !ro &&
          !syl &&
          document.activeElement.tagName !== "INPUT"
        ) {
          e.preventDefault();
          openSearch();
        }
      });

      /* mobile: show search icon instead of bar */
      if (window.innerWidth <= 680) {
        document.getElementById("mobileSearchBtn").style.display = "flex";
      }

      /* ══════════════════════════════════════════════════════
       1. SOURCE CODE PROTECTION
       Disables right-click, F12, Ctrl+U/S/Shift+I/J/C
    ══════════════════════════════════════════════════════ */
      (function protectContent() {

        document.addEventListener("contextmenu", function (e) {
          e.preventDefault();
          showProtectToast();
        });

        document.addEventListener("keydown", function (e) {
          const blocked =
            e.key === "F12" ||
            (e.ctrlKey && !e.shiftKey && e.key.toLowerCase() === "u") ||
            (e.ctrlKey && !e.shiftKey && e.key.toLowerCase() === "s") ||
            (e.ctrlKey && e.shiftKey && ["i","j","c"].includes(e.key.toLowerCase()));

          if (blocked) {
            e.preventDefault();
            e.stopImmediatePropagation();
            return false;
          }
        }, true);

        function showProtectToast() {
          if (document.getElementById("__pt")) return;
          const t = document.createElement("div");
          t.id = "__pt";
          t.innerHTML = '<i class="fa-solid fa-lock"></i> Content is protected &copy; Abdul Rahman';
          Object.assign(t.style, {
            position: "fixed",
            bottom: "28px",
            left: "50%",
            transform: "translateX(-50%) translateY(12px)",
            background: "rgba(12,12,22,0.95)",
            color: "#e2e8f0",
            padding: "10px 22px",
            borderRadius: "30px",
            fontSize: ".8rem",
            fontWeight: "600",
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            letterSpacing: ".3px",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.55)",
            backdropFilter: "blur(14px)",
            zIndex: "99999",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            opacity: "0",
            transition: "opacity .25s ease, transform .25s ease",
          });
          document.body.appendChild(t);
          requestAnimationFrame(() => requestAnimationFrame(() => {
            t.style.opacity = "1";
            t.style.transform = "translateX(-50%) translateY(0)";
          }));
          setTimeout(() => {
            t.style.opacity = "0";
            t.style.transform = "translateX(-50%) translateY(10px)";
            setTimeout(() => t.remove(), 300);
          }, 2400);
        }

      })();

      /* ══════════════════════════════════════════════════════
       2. ROBOT VERIFICATION  (first visit only)
    ══════════════════════════════════════════════════════ */
      (function initRobotCheck() {
        if (localStorage.getItem("hub_human_verified") === "true") {
          const overlay = document.getElementById("robotOverlay");
          if (overlay) overlay.remove();
          return;
        }
        // Already visible — nothing extra needed
      })();

      function onRobotCheck() {
        const cb = document.getElementById("robotCheckbox");
        if (!cb.checked) return;

        // Disable checkbox so it can't be unchecked
        cb.disabled = true;
        document.getElementById("robotLabel").style.pointerEvents = "none";

        // Show progress bar
        const prog = document.getElementById("robotProgress");
        prog.classList.add("show");

        // After animation completes → show verified
        setTimeout(() => {
          document.getElementById("robotTxt").textContent = "✓ Verified! Welcome!";
          document.getElementById("robotTxt").style.color = "#10b981";
        }, 1500);

        // Hide overlay
        setTimeout(() => {
          const overlay = document.getElementById("robotOverlay");
          overlay.classList.add("hide");
          setTimeout(() => {
            overlay.remove();
            localStorage.setItem("hub_human_verified", "true");
          }, 500);
        }, 2200);
      }

      /* ══════════════════════════════════════════════════════
       3. AI CHATBOT
    ══════════════════════════════════════════════════════ */
      let chatbotOpen = false;
      let chatInitialized = false;

      const CHAT_KB = [
        { k: ["hello","hi","hey","helo","hii","salam","assalam"],
          r: "Hi! 👋 I'm Rahman AI. Ask me about BCA notes, subjects, syllabus or exam tips!" },
        { k: ["bca-201","201","business english","english","letter"],
          r: "📘 BCA-201 Business English: Letter writing, grammar, comprehension.\nNotes, PYQ, Syllabus & Cheatsheet available!" },
        { k: ["bca-202","202","numerical","techniques","newton","gauss"],
          r: "🔢 BCA-202 Numerical Techniques: Newton-Raphson, Gauss Elimination, Simpson's Rule.\nComplete Exam Guide + PYQ + Cheatsheet available!" },
        { k: ["bca-203","203","system analysis","sad","sdlc","dfd","er diagram"],
          r: "🗂️ BCA-203 SAD: SDLC, DFD, ER Diagrams, System Design.\nInteractive Study Guide + Colorful Exam Guide + Syllabus!" },
        { k: ["bca-204","204","c programming","programming in c","pointers","structures","c lang"],
          r: "💻 BCA-204 C Programming: Pointers, Structures, File Handling.\n2 HTML Guides + VVI Exam Guide + PYQ + Cheatsheet!" },
        { k: ["bca-205","205","operating system","unix","os","shell","linux","deadlock"],
          r: "⚙️ BCA-205 OS & UNIX: Process Management, Deadlock, Shell Scripting.\n3 Complete HTML Guides + PYQ + Cheatsheet!" },
        { k: ["syllabus","sylabus","curriculum","course content"],
          r: "📕 Click 'All Syllabuses' button on Semester II page to view all 5 subject syllabuses in one place!" },
        { k: ["pyq","previous year","past paper","old paper","question paper"],
          r: "🔥 PYQ papers available for all 5 Sem II subjects!\nOpen any subject card → look in PDF Files section." },
        { k: ["cheatsheet","cheat sheet","cheat","quick revision"],
          r: "📝 Cheatsheets available for ALL 5 Semester II subjects!\nOpen any subject panel and find it in PDF Files." },
        { k: ["exam","tip","tips","prepare","study","how to study","revision","revise"],
          r: "⭐ Exam Tips:\n1️⃣ Start with Cheatsheets\n2️⃣ Solve all PYQs\n3️⃣ Focus on VVI questions\n4️⃣ Practice C programs\n5️⃣ Revise formulas daily\n6️⃣ Study 5-6 hrs/day!" },
        { k: ["note","notes","material","study material"],
          r: "📖 Notes available under Semester II tab!\nClick any subject card to view HTML notes, PDFs, PYQs & Cheatsheets." },
        { k: ["download","save","pdf","kaise download"],
          r: "📥 Click the ↓ download icon next to any PDF to save it directly.\nThe Open button opens it inside the reader." },
        { k: ["search","find","dhundh","look for"],
          r: "🔍 Press the / key or click the search bar to search across all subjects, notes, and topics instantly!" },
        { k: ["semester","sem 1","sem 2","sem i","sem ii","all sem"],
          r: "📚 Notes Hub covers Semester I to VI!\nCurrently Semester II has the most notes. More being added soon!" },
        { k: ["theme","dark","light","mode","appearance"],
          r: "🌙 Click the moon/sun icon in the top-right header to toggle between dark and light theme!" },
        { k: ["aku","patna","iibm","college","university","aryabhatta"],
          r: "📍 University: AKU Patna (Aryabhatta Knowledge University)\nCollege: IIBM · Semester II exams: 2026" },
        { k: ["who are you","what are you","chatbot","rahman ai","assistant"],
          r: "I'm Rahman AI Assistant 🤖 — a smart study helper for BCA students!\nI can guide you through notes, subjects, syllabus & exam prep." },
        { k: ["thank","thanks","shukriya","thank you","bahut acha"],
          r: "You're welcome! 😊 Best of luck with your BCA exams!\nYou've got this, Abdul! 💪🚀" },
        { k: ["bye","goodbye","ok bye","later","alvida"],
          r: "Goodbye! 👋 Study hard & ace your BCA exams!\nCome back anytime you need help! 🚀" },
        { k: ["help","kya","menu","options","what can you do"],
          r: "I can help with:\n📘 BCA subject info (201–205)\n📖 Finding notes & PDFs\n📕 Syllabus queries\n🔥 PYQ papers\n⭐ Exam tips\n📥 Download help\n🔍 Search tips\n\nJust type your question!" },
      ];

      function getBotReply(msg) {
        const m = msg.toLowerCase().trim();
        for (const entry of CHAT_KB) {
          if (entry.k.some(k => m.includes(k))) return entry.r;
        }
        return "🤔 I'm not sure about that.\nTry asking about BCA subjects, notes, syllabus, PYQs or exam tips!\nType 'help' to see all I can do.";
      }

      function toggleChatbot() {
        chatbotOpen = !chatbotOpen;
        gae("chatbot_toggle", { state: chatbotOpen ? "open" : "close" });
        const win  = document.getElementById("chatbotWindow");
        const icon = document.getElementById("chatFabIcon");
        win.classList.toggle("open", chatbotOpen);
        icon.className = chatbotOpen ? "fa-solid fa-xmark chatbot-fab-icon" : "fa-solid fa-robot chatbot-fab-icon";

        if (chatbotOpen && !chatInitialized) {
          chatInitialized = true;
          appendBotMsg("Hi! 👋 I'm **Rahman AI Assistant**.\nI'm here to help you with BCA notes, subjects, syllabus and exam tips.\n\nType 'help' to see what I can do!");
        }
        if (chatbotOpen) {
          setTimeout(() => document.getElementById("chatbotInput").focus(), 200);
        }
      }

      function appendBotMsg(text) {
        addChatMsg("bot", text);
      }

      function addChatMsg(role, text) {
        const msgs = document.getElementById("chatbotMsgs");
        const now  = new Date().toLocaleTimeString([], { hour:"2-digit", minute:"2-digit" });
        const div  = document.createElement("div");
        div.className = "chat-msg " + role;
        div.innerHTML = `
          <div class="chat-bubble">${text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</div>
          <div class="chat-time">${now}</div>`;
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
      }

      function showTyping() {
        const msgs = document.getElementById("chatbotMsgs");
        const div  = document.createElement("div");
        div.className = "chat-msg bot";
        div.id = "chatTyping";
        div.innerHTML = `<div class="chat-typing"><span></span><span></span><span></span></div>`;
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
      }

      function removeTyping() {
        const t = document.getElementById("chatTyping");
        if (t) t.remove();
      }

      function sendChat() {
        const input = document.getElementById("chatbotInput");
        const msg   = input.value.trim();
        if (!msg) return;
        gae("chatbot_message");
        input.value = "";
        addChatMsg("user", msg);
        showTyping();
        const delay = 700 + Math.random() * 600;
        setTimeout(() => {
          removeTyping();
          appendBotMsg(getBotReply(msg));
        }, delay);
      }
