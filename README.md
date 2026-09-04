# BCA Notes Hub
**© 2026 Abdul Rahman — BCA Student Portal | The Ladder to 2028**

---

## 📁 Project Structure

```
BCA_Notes_Hub/
├── index.html      ← Open this in browser (main website)
├── style.css           ← All CSS styles (external)
├── script.js           ← All JavaScript + data config (external)
├── README.md           ← This file
│
└── notes/
    ├── bca201/         ← Business English
    │   ├── BCA201_Complete_Exam_Guide.html
    │   ├── syllabus.pdf
    │   ├── pyq.pdf
    │   ├── notes.pdf
    │   └── cheatsheet.pdf
    ├── bca202/         ← Numerical Techniques
    │   ├── BCA202_Complete_Exam_Guide.html
    │   ├── syllabus.pdf
    │   ├── pyq.pdf
    │   └── notes.pdf
    ├── bca203/         ← System Analysis & Design ✅ READY
    │   ├── BCA203_Interactive_Study.html
    │   ├── BCA203_SAD_ColorfulExamGuide.html
    │   ├── syllabus.pdf
    │   ├── pyq.pdf
    │   └── notes.pdf
    ├── bca204/         ← Programming in C ✅ READY
    │   ├── BCA204_Complete_Exam_Guide.html
    │   ├── BCA204_VVI_ExamGuide.html
    │   ├── syllabus.pdf
    │   └── pyq.pdf
    └── bca205/         ← Operating System & UNIX ✅ READY
        ├── BCA205_Complete.html
        ├── BCA205_Complete_v2.html
        ├── BCA205_QA.html
        ├── syllabus.pdf
        ├── pyq.pdf
        └── notes.pdf
```

---

## ➕ How to Add a New File (3 Steps)

**Step 1 — Put the file in the correct folder**
```
notes/bca201/my_new_notes.html
notes/bca201/my_new_notes.pdf
```

**Step 2 — Open `script.js` and find the subject**
Search for `code: "BCA-201"` then find its `notes: [` array.

**Step 3 — Add one object**
```javascript
notes: [
  // existing entries...
  {
    title: "My New Notes",
    file:  "notes/bca201/my_new_notes.html",
    type:  "html",   // or "pdf"
    desc:  "Short description of what this covers",
  },
],
```

Save. Refresh browser. Done ✅

---

## 🚀 Hosting

| Platform     | How                                          |
|--------------|----------------------------------------------|
| Local        | Double-click `notes_hub.html`                |
| GitHub Pages | Push folder → Settings → Pages → root branch |
| Netlify      | Drag and drop the whole folder               |
| Vercel       | Import repo, no config needed                |

> ⚠️ Placeholder files (`.pdf` files that say "This is a placeholder")
> must be replaced with your actual files before hosting.

---

*Abdul Rahman · BCA · IIBM Patna · AKU · 2026–2028*
