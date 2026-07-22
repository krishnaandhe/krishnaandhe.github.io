# Krishna Andhe — Portfolio

My personal portfolio, live at **[krishnaandhe.github.io](https://krishnaandhe.github.io)**.

Built fresh on a modern, conflict-free stack.

## 🚀 Tech Stack
- **Next.js 15** (App Router, static export)
- **React 19**
- **Tailwind CSS 3**
- **Framer Motion** (scroll & entrance animations)
- **GitHub Pages** hosting via GitHub Actions

## ✍️ Editing Content
All content lives in **one file** — edit and everything updates:
```
data/portfolio.js
```
Update your name, tagline, email, socials, projects, skills and services there.

## 🎨 Re-theming
Change your entire color scheme in one place:
```
tailwind.config.js   →  theme.extend.colors
```

## 🛠️ Run Locally
```bash
npm install
npm run dev      # http://localhost:3000
```

## 📦 Build
```bash
npm run build    # generates the static ./out folder
```

## 🌐 Deploy
Push to `main` — GitHub Actions builds and deploys automatically.
Ensure **Settings → Pages → Source = GitHub Actions**.

---
Built with Next.js & Tailwind CSS.
