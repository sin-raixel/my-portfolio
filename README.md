# My Portfolio

The personal portfolio of John Raizel Bacang, an IT student focused on frontend development and UI/UX. It has a space theme: a starfield background, a cursor trail, and cards that tilt toward the cursor.

## Pages

- **Home**: the hero, plus a short preview of every other page
- **Projects**: each project with how it works, the stack, and the frontend and QA work, plus GitHub activity
- **About me**: bio, skills, education, and certifications
- **Contact**: email and social links

## Built with

Next.js, React, TypeScript, and Tailwind CSS. Deployed on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Edit the content

Almost everything on the site comes from one file, `app/data/portfolio.ts`: your name and links, the hero text, projects, skills, education, and certifications. Project screenshots go in `public/projects/`.

## Checks

GitHub Actions runs lint, the TypeScript check, a full build, and the end-to-end tests on every push and pull request (`.github/workflows/ci.yml`). You can run the same checks locally:

```bash
npm run lint
npx tsc --noEmit
npm run build
npx playwright install chromium   # first time only
npm run test:e2e
```

## Tests

The tests live in `e2e/` and use [Playwright](https://playwright.dev) with [axe-core](https://github.com/dequelabs/axe-core):

- `smoke.spec.ts`: every page loads with one `h1` and no console errors, desktop and phone navigation, the CV link, project panels and their links, served images and files, safe external links, the 404 page, and the email menu.
- `accessibility.spec.ts`: axe checks every page, and the open mobile menu, against WCAG 2.0 and 2.1 levels A and AA.

`npm run test:e2e` builds the site and starts it before running. If a run fails in CI, download the `playwright-report` artifact from the run to see traces and the full axe results.
