# 📚 BCA Notes Hub

**Live Website:** [https://arrahmanstudyhub.tech/](https://arrahmanstudyhub.tech/)

> A free, student-built educational resource for BCA students at IIBM Patna (Aryabhatta Knowledge University – AKU Patna). Provides semester-wise notes, previous year questions (PYQs), official syllabuses, cheatsheets and exam preparation materials.

---

## ✨ Main Features

| Feature | Description |
|---|---|
| 📚 Semester Tabs | Navigate Semester I – VI |
| 📖 HTML Notes | Interactive notes openable inside the website |
| 📄 PDF Notes | View PDFs in browser + force download |
| 📕 All Syllabuses Modal | View all 5 Sem II syllabuses in one place |
| 📝 Cheatsheets | Quick-revision sheets for all 5 subjects |
| 🔥 PYQs | Previous year questions per subject |
| 🔍 Global Search | Search subjects, notes, topics instantly |
| 🕐 Recent Notes | Recently opened notes remembered |
| 🌙 Dark / Light Theme | Toggle saved to localStorage |
| 🔒 Verification | First-visit human check (localStorage) |
| 🤖 AI Chatbot | Rahman AI – BCA study assistant |
| 📱 Mobile Responsive | Works on all screen sizes |
| 🔐 Source Protection | Right-click + DevTools shortcut deterrence |
| 📊 Google Analytics | GA4 event tracking (G-ZRJX4B3LNV) |

---

## 📂 Semester & Subject Coverage

### Semester II (Most Complete)

| Code | Subject | Resources |
|---|---|---|
| BCA-201 | Business English | HTML Notes, Syllabus, PYQ, Notes PDF, Cheatsheet |
| BCA-202 | Numerical Techniques | HTML Notes, Syllabus, PYQ, Notes PDF, Cheatsheet |
| BCA-203 | System Analysis & Design | 2 HTML Guides, Syllabus, PYQ, Notes PDF, Cheatsheet |
| BCA-204 | Programming in C | 2 HTML Guides, Syllabus, PYQ, Cheatsheet |
| BCA-205 | Operating System & UNIX | 3 HTML Guides, Syllabus, PYQ, Notes PDF, Cheatsheet |

### Other Semesters (Framework Ready)
Semesters I, III, IV, V, VI are structured and ready — add notes by following the instructions below.

---

## 🛠️ Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, glassmorphism, animations
- **Vanilla JavaScript** — No frameworks, no dependencies
- **Font Awesome 6** — Icons (CDN)
- **Google Fonts** — Plus Jakarta Sans + Outfit (CDN)
- **Google Analytics 4** — ID: G-ZRJX4B3LNV
- **localStorage** — Theme + recent notes + verification persistence

---

## 📁 Project File Structure

```
BCA_Notes_Hub/
│
├── index.html              ← Main website (homepage)
├── style.css               ← All CSS styles
├── script.js               ← All JavaScript + data config
├── README.md               ← This file
├── CNAME                   ← GitHub Pages custom domain
├── robots.txt              ← Search engine crawl rules
├── sitemap.xml             ← Search engine sitemap
│
├── about.html              ← About page
├── contact.html            ← Contact page
├── privacy-policy.html     ← Privacy Policy
├── terms.html              ← Terms of Use
├── disclaimer.html         ← Disclaimer
│
└── notes/
    ├── bca201/             ← Business English
    │   ├── BCA201_Complete_Exam_Guide.html
    │   ├── syllabus.pdf
    │   ├── pyq.pdf
    │   ├── notes.pdf
    │   └── cheatsheet.pdf
    ├── bca202/             ← Numerical Techniques
    │   ├── BCA202_Complete_Exam_Guide.html
    │   ├── syllabus.pdf
    │   ├── pyq.pdf
    │   ├── notes.pdf
    │   └── cheatsheet.pdf
    ├── bca203/             ← System Analysis & Design ✅
    │   ├── BCA203_Interactive_Study.html
    │   ├── BCA203_SAD_ColorfulExamGuide.html
    │   ├── syllabus.pdf
    │   ├── pyq.pdf
    │   ├── notes.pdf
    │   └── cheatsheet.pdf
    ├── bca204/             ← Programming in C ✅
    │   ├── BCA204_Complete_Exam_Guide.html
    │   ├── BCA204_VVI_ExamGuide.html
    │   ├── syllabus.pdf
    │   ├── pyq.pdf
    │   └── cheatsheet.pdf
    └── bca205/             ← Operating System & UNIX ✅
        ├── BCA205_Complete.html
        ├── BCA205_Complete_v2.html
        ├── BCA205_QA.html
        ├── syllabus.pdf
        ├── pyq.pdf
        ├── notes.pdf
        └── cheatsheet.pdf
```

---

## ➕ How to Add a New Note (3 Steps)

**Step 1 — Put the file in the correct folder**
```
notes/bca201/my_new_notes.html
notes/bca201/my_new_notes.pdf
```

**Step 2 — Open `script.js`, find the subject**
Search for `code: "BCA-201"` and find its `notes: [` array.

**Step 3 — Add one object**
```javascript
{
  title: "My New Notes",
  file:  "notes/bca201/my_new_notes.html",
  type:  "html",   // "html" or "pdf"
  desc:  "Short description of what this covers",
},
```

Save → Refresh browser → Done ✅

---

## 🚀 Deploying on GitHub Pages

### Initial Setup
1. Create a GitHub repository (e.g. `bca-notes-hub`)
2. Upload/push all project files to the `main` branch
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. GitHub Pages will deploy the site

### Custom Domain (arrahmanstudyhub.tech)
1. The `CNAME` file already contains `arrahmanstudyhub.tech`
2. In your domain registrar, set DNS records:
   - Type `A` → `185.199.108.153`
   - Type `A` → `185.199.109.153`
   - Type `A` → `185.199.110.153`
   - Type `A` → `185.199.111.153`
   - Type `CNAME` → `www` → `yourusername.github.io`
3. In GitHub Pages settings, enter your custom domain
4. Enable "Enforce HTTPS"

### Updating Notes
1. Add files to the `notes/` folder
2. Update `script.js` data
3. Commit and push to GitHub
4. GitHub Pages auto-deploys within minutes

---

## 📊 Google Analytics 4

- **Measurement ID:** `G-ZRJX4B3LNV`
- Installed in `index.html` `<head>` section
- Events tracked: semester selection, subject open, note open, file download, syllabus modal, search, theme toggle, chatbot interactions, social clicks
- IP anonymisation enabled
- Access reports at [analytics.google.com](https://analytics.google.com)

---

## 🔍 SEO & Google Search Console

- **Sitemap:** `https://arrahmanstudyhub.tech/sitemap.xml`
- **Robots.txt:** `https://arrahmanstudyhub.tech/robots.txt`
- To submit to Google: [search.google.com/search-console](https://search.google.com/search-console)
  1. Add property → URL prefix → `https://arrahmanstudyhub.tech/`
  2. Verify ownership
  3. Submit sitemap URL

---

## 🌐 Pages & URLs

| Page | URL |
|---|---|
| Homepage | https://arrahmanstudyhub.tech/ |
| About | https://arrahmanstudyhub.tech/about.html |
| Contact | https://arrahmanstudyhub.tech/contact.html |
| Privacy Policy | https://arrahmanstudyhub.tech/privacy-policy.html |
| Terms of Use | https://arrahmanstudyhub.tech/terms.html |
| Disclaimer | https://arrahmanstudyhub.tech/disclaimer.html |
| Sitemap | https://arrahmanstudyhub.tech/sitemap.xml |
| Robots.txt | https://arrahmanstudyhub.tech/robots.txt |

---

## 👤 Author & Credits

| | |
|---|---|
| **Name** | Abdul Rahman |
| **College** | IIBM Patna |
| **University** | AKU Patna (Aryabhatta Knowledge University) |
| **Email** | arrahman97426@gmail.com |
| **GitHub** | [github.com/rahman97426](https://github.com/rahman97426) |
| **LinkedIn** | [linkedin.com/in/arrahmanraza](https://linkedin.com/in/arrahmanraza) |
| **WhatsApp** | +91-8936875243 |
| **Website** | [arrahmanstudyhub.tech](https://arrahmanstudyhub.tech/) |

---

## ⚠️ Disclaimer

This is an **independent educational project** and is **not** the official website of Aryabhatta Knowledge University (AKU) Patna or any government institution. All study materials are provided for personal, non-commercial educational use only. Please verify important academic information with official university sources.

---

## 📄 Copyright

**© 2026 Abdul Rahman. All Rights Reserved.**

Original website design, code and student-created notes are the intellectual property of Abdul Rahman. Official university materials (PYQs, syllabuses) remain the property of their respective copyright holders.
