# Portfolio

A clean, minimal software-engineer portfolio built with Next.js 16 (App Router),
React 19, and Tailwind CSS v4. Single page, fully static, dark-mode aware.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Making it yours

**All content lives in one file: [`app/content.ts`](app/content.ts).** Edit it —
no component code needs to change:

- `site` — your name, role, tagline, location, email, and public URL
- `socials` — GitHub / LinkedIn / X links
- `projects` — your project cards (title, description, tags, live/source links)
- `experience` — your work history
- `about` / `skills` — the About section text and skill chips

**Add a profile photo:** drop a square image at `public/avatar.jpg`, then set
`HAS_PHOTO = true` in [`app/components/avatar.tsx`](app/components/avatar.tsx).
Until then a clean monogram of your initials is shown.

**Colors / theme:** the palette is a few CSS variables at the top of
[`app/globals.css`](app/globals.css) (light and dark).

## Deploy to Vercel

Vercel auto-detects Next.js — no config needed.

1. Push this project to a GitHub (or GitLab/Bitbucket) repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, and click
   **Deploy**. Build command (`next build`) and output are detected automatically.
3. After the first deploy, set `site.url` in `app/content.ts` to your real domain
   (used for SEO/OG tags), and add a custom domain in the Vercel dashboard if you
   have one.

Or deploy from the CLI:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server              |
| `npm run build` | Production build (static export)  |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Run ESLint                        |
