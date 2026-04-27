# Surachat Portfolio Template

Portfolio template built for GitHub Pages deployment with **Next.js App Router + TailwindCSS + Framer Motion**.

## Stack
- Next.js 14
- TailwindCSS
- Framer Motion
- Static export for GitHub Pages

## 1) Create local project
```bash
npm install
npm run dev
```
Open `http://localhost:3000`

## 2) Important personalization
Edit `src/data/site.ts`:
- `email`
- `github`
- profile text
- project details
- metrics

## 3) Replace GitHub Pages repo name
This template currently uses:
- repo name: `surachat-portfolio-template`

If your GitHub repo name is different, update `next.config.mjs`:
```js
basePath: isProd ? '/YOUR_REPO_NAME' : '',
assetPrefix: isProd ? '/YOUR_REPO_NAME/' : '',
```

## 4) Push to GitHub
```bash
git init
git add .
git commit -m "init portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## 5) Enable GitHub Pages
In your GitHub repository:
- Settings
- Pages
- Source: **GitHub Actions**

The included workflow file will build and deploy automatically on push to `main`.

## 6) Recommended edits before sending to recruiters
- Add your real email + GitHub + LinkedIn
- Add a PDF resume in `/public`
- Add screenshots or diagrams for major projects
- Replace placeholder metrics with real numbers
- Add a custom domain later if needed

## Suggested next upgrade
- Add project detail pages under `/projects/[slug]`
- Add downloadable resume button
- Add architecture diagrams as SVG/PNG
- Add Thai + English language toggle if you want recruiter-friendly localization
