# Game Dev Portfolio — agent briefing


## What exists

Vite + React 19 + TypeScript + React Router 7 + Framer Motion 13. Dark ember/gold studio look (Unbounded, Outfit, IBM Plex Mono).

Routes: `/` Home, `/work` filterable archive, `/work/:slug` project, `/about`, `/contact`, `*` 404.

Sample brand: **Anthony / Atelier**. Copy, socials, email, timeline, and five games (Ember Protocol, Hollow Tide, Neon Drift, Last Lantern, Dusk Array) are placeholders. Concept art lives in `public/images/`.

## Motion already shipped

- Session boot screen (`atelier-booted` in sessionStorage)
- Full-screen route veil (cover → swap page → uncover)
- Custom cursor, magnetic buttons, split text, scroll reveals
- Hero particles, tools marquee, project-card shine, skill bars
- Mobile full-screen nav

Respect `prefers-reduced-motion`. Route changes go through `RouterFrame` in `src/App.tsx` — do not swap that for a plain `<Routes>` without a replacement transition.

## Where to edit

- Copy / credits / skills: `src/data/site.ts`
- Projects: `src/data/projects.ts`
- Images: `public/images/`
- Global styles and tokens: `src/index.css`
- Pages: `src/pages/`
- Shared motion UI: `src/components/`

The contact form posts to Web3Forms using `VITE_WEB3FORMS_ACCESS_KEY`. Locally that lives in `.env.local`. In GitHub Actions it comes from the `WEB3FORMS_ACCESS_KEY` repository secret.

## Commands

```bash
npm install
npm run dev
npm run build
```
