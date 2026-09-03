# Abdul's BCA Study Portal
**The Ladder Of Abdul 2028** — Strategic Career OS + Semester II Study Hub

---

## 📁 Project Structure

```
/
├── index.html                        ← Main portal (open this in browser)
├── README.md                         ← This file
│
├── notes/
│   ├── bca201/                       ← BCA-201 Business English HTML notes
│   ├── bca202/                       ← BCA-202 Numerical Techniques HTML notes
│   ├── bca203/                       ← BCA-203 System Analysis & Design HTML notes
│   ├── bca204/
│   │   └── BCA204_Complete_Exam_Guide.html   ✅ CONNECTED
│   └── bca205/
│       └── BCA205_Complete.html              ✅ CONNECTED
│
└── pdf/
    ├── bca201/                       ← BCA-201 PDFs
    ├── bca202/                       ← BCA-202 PDFs
    ├── bca203/                       ← BCA-203 PDFs
    ├── bca204/                       ← BCA-204 PDFs
    └── bca205/                       ← BCA-205 PDFs
```

---

## ➕ How to Add New HTML Notes

1. **Save your HTML file** into the correct folder:
   ```
   notes/bca204/my_new_notes.html
   ```

2. **Open `index.html`** in any text editor (VS Code recommended).

3. **Find the `SUBJECTS` array** near the top of the `<script>` tag (search for `CENTRAL SUBJECTS CONFIGURATION`).

4. **Add one line** inside the correct subject's `html:` array:
   ```javascript
   // BEFORE (BCA-204 example):
   html: [
     { title: "Complete Exam Guide", file: "notes/bca204/BCA204_Complete_Exam_Guide.html",
       desc: "All 5 units · PYQs · VVI Questions · Code examples" }
   ],

   // AFTER — just add a comma and new object:
   html: [
     { title: "Complete Exam Guide", file: "notes/bca204/BCA204_Complete_Exam_Guide.html",
       desc: "All 5 units · PYQs · VVI Questions · Code examples" },
     { title: "My New Notes",        file: "notes/bca204/my_new_notes.html",
       desc: "Pointers and dynamic memory" }
   ],
   ```

5. **Save and refresh** the browser. Done ✅

---

## ➕ How to Add a PDF

1. **Save your PDF** into the correct folder:
   ```
   pdf/bca204/c_programming_ref.pdf
   ```

2. Add to the `pdf:` array of that subject:
   ```javascript
   pdf: [
     { title: "C Programming Reference", file: "pdf/bca204/c_programming_ref.pdf",
       desc: "Quick reference card for all topics" }
   ],
   ```

---

## ➕ How to Add Syllabus / PYQs / VVI / Cheatsheets / Last-Minute

All resource types follow the **exact same pattern**. Just target the right key:

| What you're adding   | Array key      |
|----------------------|---------------|
| HTML Notes           | `html`        |
| PDF Notes            | `pdf`         |
| Official Syllabus    | `syllabus`    |
| Previous Year Qs     | `pyq`         |
| Very Important Qs    | `vvi`         |
| Cheat Sheets         | `cheatsheet`  |
| Last-Minute Revision | `lastMinute`  |

---

## ➕ How to Add a Brand New Subject (Semester III, IV…)

Copy any subject block inside `SUBJECTS` and change the values:
```javascript
{
  code: "BCA-301", name: "OOPs with C++",
  icon: "🔵", color: "#8b5cf6",
  desc: "Polymorphism, inheritance, templates, STL",
  resources: {
    html: [], pdf: [], syllabus: [], pyq: [], vvi: [], cheatsheet: [], lastMinute: []
  }
}
```

---

## 🖥️ Hosting

| Platform       | Instructions                                           |
|----------------|--------------------------------------------------------|
| Local          | Double-click `index.html` in File Explorer            |
| GitHub Pages   | Push to a repo → Settings → Pages → Deploy from root  |
| Netlify        | Drag-and-drop the whole folder onto netlify.com       |

> ⚠️ The embedded HTML reader requires files to be on the **same origin** (same folder or same server). It works perfectly locally and on GitHub Pages / Netlify.

---

## ⌨️ Keyboard Shortcuts

| Shortcut          | Action            |
|-------------------|-------------------|
| `/` or `Ctrl+K`   | Open search       |
| `Esc`             | Close search / reader |

---

## 🛠️ Tech Stack

- Pure HTML + CSS + JavaScript — zero dependencies, zero build step
- Font Awesome 6 (CDN) for icons
- Google Fonts: Plus Jakarta Sans + Outfit
- canvas-confetti (CDN) for task celebrations
- localStorage for: theme, recently opened, career task progress

---

*Abdul Rahman · BCA · IIBM · AKU Patna · 2026–2028*
