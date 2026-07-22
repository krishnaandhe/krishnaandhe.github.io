# Krishna Andhe — Portfolio (v5)

Interactive, animated single-page portfolio / living resume with light/dark theming.
Live at **[krishnaandhe.github.io](https://krishnaandhe.github.io)**.

## ✨ Features
- 🖼️ **2-column hero** with profile photo + rotating gradient ring
- 🪪 **Custom logo** (`site_logo.png`) in navbar + favicon
- 🌗 **Light / Dark theme toggle**
- 🖱️ **Custom animated cursor** (desktop) + scroll progress bar
- ✨ **Glowing Tech Stack grid** (static, pulsing glow — no scrolling)
- 🗂️ **Projects** — featured (manual) + **auto-pulled public GitHub repos**
- 🧾 **Expandable Experience timeline** — click a role to reveal resume details
- 🧊 **3D tilt contact cards** (multi-handle)

## 🚀 Stack
Next.js 15 · React 19 · Tailwind CSS 3 · Framer Motion 11 · next-themes · react-icons

## 🖼️ Photo & Logo
- Photo: put your image at `public/profile.jpg`, then set `photo: "/profile.jpg"` in `data/portfolio.js`.
- Logo: replace `public/site_logo.png` with your own (navbar + favicon use it).

## 🔗 GitHub Auto-Pull (Projects)
Configured in `data/portfolio.js` → `github`:
```js
export const github = {
  username: "krishnaandhe",
  enabled: true,          // false = turn off auto-pull
  max: 6,                 // how many repos to show
  exclude: ["krishnaandhe.github.io", "krishnaandhe"],
  includeForks: false,
  onlyTopic: "",          // e.g. "showcase" → only repos with this GitHub topic
  sort: "updated",        // "updated" | "stars"
};
```
Repos are fetched **in the browser** from the public GitHub API — no server needed.
New public repos appear automatically. `featuredProjects` (e.g. private Route Arc)
always show first.

> Tip: to curate, tag chosen repos with a GitHub **topic** (e.g. `showcase`) and set
> `onlyTopic: "showcase"`. Only those will appear.

## 🧾 Experience (Resume Details)
Edit `experience` in `data/portfolio.js`. Each role supports `summary`, a `details`
array (bullets shown on expand) and `tags`.

## 🎨 Re-theme
Colors live in `app/globals.css` → `.light` / `.dark` (RGB triplets).

## 🛠️ Local Dev
```bash
npm install
npm run dev      # http://localhost:3000
```

## 📦 Deploy
```bash
npm run build
git add . && git commit -m "update" && git push
```
Auto-deploys via GitHub Actions. Ensure **Settings → Pages → Source = GitHub Actions**.

---
Built with Next.js & Tailwind CSS.
