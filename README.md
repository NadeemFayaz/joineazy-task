# Joineazy - Assignment & Review Dashboard (Frontend Intern Task)

Tech: React (Vite), Tailwind CSS. No backend — data in localStorage.

## Run
1. npm install
2. npm run dev
3. Open http://localhost:5173

## Features
- Student role: view assignments, mark submission with double-confirm flow.
- Admin role: create assignments, view per-student submission status and progress bars.
- Responsive UI (Tailwind).



## Submission
https://github.com/NadeemFayaz/joineazy-task




## Folder structure

joineazy-task/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ AdminDashboard.jsx
│  │  ├─ AssignmentCard.jsx
│  │  ├─ AssignmentForm.jsx
│  │  ├─ ConfirmModal.jsx
│  │  ├─ Header.jsx
│  │  ├─ ProgressBar.jsx
│  │  ├─ Sidebar.jsx
│  │  └─ StudentDashboard.jsx
│  ├─ data/
│  │  └─ sampleData.js
│  ├─ hooks/
│  │  └─ useLocalStorage.js
│  ├─ pages/
│  │  └─ Home.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ .gitignore
├─ package.json
├─ tailwind.config.cjs
└─ README.md
