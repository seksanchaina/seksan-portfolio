# Seksan Chaina | Manufacturing Digital Portfolio

Premium portfolio for production improvement, digitalization, data visibility, and measurable manufacturing impact.

Live site: https://seksanchaina.github.io/seksan-portfolio/

## Sprint 0 stack

- Next.js App Router + TypeScript
- Tailwind CSS
- ESLint + Prettier
- Static export for GitHub Pages

## Project structure

- `app/` - Next.js routes, SEO metadata, and global styles
- `components/` - reusable UI components
- `data/` - typed portfolio content
- `public/` - profile, dashboard, and tool-icon assets
- `styles/` - global design tokens
- `docs/` - project specification and roadmap

## Run locally

Install the new Next.js dependencies once, then run the development server:

```powershell
npm.cmd install
npm.cmd run dev
```

Open http://localhost:3000. The current workspace needs this install step because Sprint 0 replaces the older Vite setup.

## Quality commands

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd run format
```

## Deploy

Push to `main`. GitHub Actions installs dependencies, creates the static `out/` folder, and deploys it to GitHub Pages.

```powershell
git add .
git commit -m "Describe your update"
git push
```

## Content note

The portfolio uses static dashboard previews. Confirm company approval before publishing images or quantified internal results.
