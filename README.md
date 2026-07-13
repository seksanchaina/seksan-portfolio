# Seksan Chaina Portfolio

Personal portfolio for manufacturing data analysis and Power BI work.

Live site: https://seksanchaina.github.io/seksan-portfolio/

## Run on your computer

Open the `portfolio-website` folder in VS Code, then choose **View > Terminal**.

```powershell
npm.cmd run dev
```

Open the address shown in Terminal, usually `http://localhost:5173/`.

`npm.cmd` is used because PowerShell may block the standard `npm` script command on this Windows setup.

## Main folders

- `src/components` - Header, Hero, project cards and case-study modal
- `src/data/projects.js` - Project / solution content
- `src/styles.css` - Shared visual styles
- `public/assets` - Profile image and technology icons
- `.github/workflows/deploy-pages.yml` - GitHub Pages deployment workflow

## Publish an update

After saving code changes, run:

```powershell
git add .
git commit -m "Describe your update"
git push
```

GitHub Actions builds and publishes the site automatically. Check the **Actions** tab in the GitHub repository if an update does not appear after a few minutes.

## Current capabilities

- Responsive React + Vite portfolio
- Profile, experience, skills and contact details
- Six solution cards with case-study detail modal
- GitHub Pages deployment
