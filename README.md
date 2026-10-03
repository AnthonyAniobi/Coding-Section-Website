# Anthony Atelier

[![Netlify Status](https://api.netlify.com/api/v1/badges/25ef82a1-5245-4918-930c-8af2aa5249f0/deploy-status)](https://app.netlify.com/projects/codingsection/deploys)

A cinematic portfolio for a game designer and systems programmer. Dark studio chrome, full-screen route transitions, and a small archive of worlds — built to feel like a place, not a résumé.

## Preview

![Home — Anthony Atelier hero](docs/screenshots/home.png)

| Selected work | Project |
| --- | --- |
| ![Work archive with Ember Protocol and Hollow Tide](docs/screenshots/work.png) | ![Ember Protocol project page](docs/screenshots/project.png) |

| About | Contact |
| --- | --- |
| ![About page with portrait and skills](docs/screenshots/about.png) | ![Contact page with the signal form](docs/screenshots/contact.png) |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — hero, featured world, selected work |
| `/work` | Filterable archive (Systems, Narrative, Arcade) |
| `/work/:slug` | Project case page |
| `/about` | Profile, timeline, and toolkit |
| `/contact` | Demo contact form |
| anything else | 404 |

Sample copy and five worlds (Ember Protocol, Hollow Tide, Neon Drift, Last Lantern, Dusk Array) are placeholders. Swap them before treating this as a personal site.

## Stack

Vite, React 19, TypeScript, React Router, and Framer Motion. Motion includes a boot sequence, a route veil, split titles, scroll reveals, a custom cursor, and magnetic buttons. `prefers-reduced-motion` turns the heavier motion off.

## Run it

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # typecheck and write dist/
npm run preview  # serve the production build
npm run lint
```

## Edit the site

| What | Where |
| --- | --- |
| Name, role, email, socials, skills, timeline | `src/data/site.ts` |
| Worlds, credits, covers | `src/data/projects.ts` |
| Images | `public/images/` |
| Pages | `src/pages/` |
| Shared motion UI | `src/components/` |
| Color, type, layout | `src/index.css` |

The contact form stays in the browser. It shows a success state and does not send mail until it is wired to a backend.

## Deploy

Netlify builds with `npm run build` and publishes `dist`. `netlify.toml` rewrites every path to `index.html` so client-side routes survive a refresh. The badge above tracks the [codingsection](https://app.netlify.com/projects/codingsection/deploys) deploys.
