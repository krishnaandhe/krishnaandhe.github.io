# Krishna Andhe — Portfolio (v3)

Interactive, animated single-page portfolio with light/dark theming.
Live at **[krishnaandhe.github.io](https://krishnaandhe.github.io)**.

## ✨ Features
- 🪪 **Custom KA logo** (SVG) in navbar + favicon
- 🌗 **Light / Dark theme toggle** (remembers choice + respects system)
- 🖱️ **Custom animated cursor** with hover reveal (desktop)
- 📊 **Scroll progress bar** + scroll-triggered animations
- 🫧 **Animated gradient hero** with scroll-hint chevron
- 🏷️ **Tech marquee** with brand icons + names
- 🗂️ **Selected Work** cards — icon + app name
- 🧊 **3D tilt cards** for Experience & Contact socials
- 📇 **Multi-handle contact grid** (GitHub, LinkedIn, X, Telegram, WhatsApp, Email)

## 🚀 Stack
Next.js 15 · React 19 · Tailwind CSS 3 · Framer Motion 11 · next-themes · react-icons

## ✍️ Edit Content
Everything lives in one file:
```
data/portfolio.js
```
Name, tagline, stats, socials, tech stack, projects, services, experience.
Icons are string keys mapped in `components/icons.js`.

## 🎨 Re-theme
Colors live in `app/globals.css` → `.light` and `.dark` (RGB triplets).
Change `--accent` / `--accent2` to re-skin both themes.

## 🛠️ Local Dev
```bash
npm install
npm run dev      # http://localhost:3000
```

## 📦 Deploy
```bash
npm run build    # static ./out
git add . && git commit -m "update" && git push
```
Auto-deploys via GitHub Actions. Ensure **Settings → Pages → Source = GitHub Actions**.

---
Built with Next.js & Tailwind CSS.
