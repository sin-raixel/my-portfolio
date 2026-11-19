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

GitHub Actions runs lint, the TypeScript check, and a full build on every push and pull request (`.github/workflows/ci.yml`). You can run the same checks locally:

```bash
npm run lint
npx tsc --noEmit
npm run build
```
