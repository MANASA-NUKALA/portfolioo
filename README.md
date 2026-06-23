# Nukala Manasa — Developer Portfolio

A premium, recruiter-focused developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion + React Icons**.

Modern dark theme · glassmorphism · particle background · scroll progress · animated typing role · scroll-reveal animations · project filtering · dark/light toggle · responsive across mobile, tablet & desktop.

## Tech stack

- **React 18** + **Vite 5** — fast dev server & optimized production build
- **Tailwind CSS 3** — utility-first styling (theme driven by CSS variables)
- **Framer Motion** — entrance, scroll-reveal & layout animations
- **React Icons** — crisp vector icons

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

## Project structure

```
react-app/
├─ index.html               # SEO meta + font links + root
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ vercel.json              # SPA rewrite for Vercel
└─ src/
   ├─ main.jsx
   ├─ index.css             # Tailwind + theme variables + keyframes
   ├─ data.js               # ← EDIT YOUR CONTENT HERE (profile, skills, projects)
   ├─ App.jsx
   └─ components/
      ├─ Loader.jsx          # animated loading screen
      ├─ ScrollProgress.jsx  # top scroll-progress bar
      ├─ Background.jsx       # animated gradient blobs
      ├─ Particles.jsx        # canvas particle network
      ├─ Reveal.jsx           # reusable scroll-reveal wrapper
      ├─ Navbar.jsx
      ├─ Hero.jsx
      ├─ About.jsx
      ├─ Skills.jsx
      ├─ Projects.jsx         # category filtering
      ├─ Experience.jsx       # experience + open source
      ├─ Education.jsx
      ├─ Contact.jsx          # contact form (opens mail client)
      └─ Footer.jsx
```

## Editing content

All personal data — name, roles, contact details, skills, and projects — lives in **`src/data.js`**. Update that one file and every section reflects the changes.

## Customizing the theme

Colors are CSS variables defined in **`src/index.css`** under `:root` (dark) and `[data-theme='light']` (light). Change `--accentA` / `--accentB` to re-skin the whole site.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo on [vercel.com](https://vercel.com).
3. Framework preset: **Vite**. Build command `npm run build`, output `dist`.
4. Deploy. `vercel.json` already handles SPA routing.

## Notes

- **Download Resume** triggers the browser print dialog (`window.print()`). Replace `printResume` in `src/components/Hero.jsx` with a link to your real PDF (e.g. put `resume.pdf` in a `public/` folder and link to `/resume.pdf`).
- The contact form opens the visitor's email client pre-filled. For a backend-less submission service, swap the `onSubmit` handler in `src/components/Contact.jsx` for Formspree / EmailJS.

---

Built for **Nukala Manasa** · Frontend · React · MERN Stack Developer
