# Atlas Integrated Facility Services — Website

Marketing website for **Atlas Integrated Facility Services Pty Ltd** — commercial
cleaning, grounds & landscaping, waste/hygiene and full facilities management,
Australia-wide.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) — a fast,
static, SEO-friendly site that hosts for free on Netlify, Vercel or GitHub Pages.

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start local dev server → http://localhost:4321
npm run build    # build the production site into dist/
npm run preview  # preview the production build locally
```

Requires Node 20+.

---

## Editing content (no code needed)

Almost all text lives in one file so you can update it without touching components:

| What you want to change | File |
| --- | --- |
| Phone, email, address, ABN, hours, socials | `src/data/site.js` → `company` |
| Services, service bullet points | `src/data/site.js` → `services` |
| Trust pillars, stats, "why us", sectors, testimonials | `src/data/site.js` |
| Navigation links | `src/data/site.js` → `nav` |
| Photos | `src/data/images.js` |

> **TODO placeholders:** search the project for `TODO` — the phone number, email,
> address and ABN are currently placeholders. Update them in `src/data/site.js`.

### Using your own photos

Images currently come from Unsplash (free, hotlinked). To use your own:

1. Drop image files into `public/images/` (e.g. `public/images/hero.jpg`).
2. In `src/data/images.js`, replace the Unsplash IDs with your paths, e.g.
   `hero: '/images/hero.jpg'`.

---

## The contact form

The quote form works out of the box in two ways:

- **Right now (no setup):** if no backend is configured, clicking submit opens a
  pre-filled email in the visitor's mail app.
- **Automatic submissions:** connect a free form backend so enquiries arrive by email.

**Option A — Netlify Forms (easiest):** deploy to Netlify. The form already has the
`data-netlify` attributes, so submissions appear in your Netlify dashboard automatically.

**Option B — Formspree:** create a form at [formspree.io](https://formspree.io), then either
edit the endpoint in `src/components/Contact.astro` (`FORM_ENDPOINT`) or create a `.env` file:

```
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxx
```

---

## Deploying

> **Currently live on GitHub Pages:**
> **https://blakhani2012.github.io/atlas-integrated-facility-services/**
> Every push to `main` auto-deploys via `.github/workflows/deploy.yml`.
> When the client's real hosting/domain is ready, set `site` in `astro.config.mjs`
> to that domain and remove `base`, or add a custom domain in the repo's Pages settings.

### Netlify (recommended)
1. Push this repo to GitHub.
2. In Netlify → "Add new site" → "Import an existing project" → pick the repo.
3. Build settings are auto-detected from `netlify.toml`. Click Deploy.

### Vercel
Import the repo at [vercel.com](https://vercel.com) — Astro is detected automatically.

### GitHub Pages
Run `npm run build` and publish the `dist/` folder, or use the
[`withastro/action`](https://github.com/withastro/action) workflow.

Remember to update `site` in `astro.config.mjs` to your real domain (used for SEO,
canonical URLs and the sitemap).

---

## Project structure

```
src/
  components/   UI + page sections (Hero, Services, Contact, …)
  data/         site.js (all copy) + images.js (all photos)
  layouts/      Layout.astro — <head>, header, footer, scripts
  pages/        index.astro — assembles the sections
  styles/       global.css — design tokens (colours, fonts, motion)
public/         favicon, robots.txt, (your images/)
```

## Brand

- **Primary:** Forest green `#1b5e3a`
- **Accent:** Lime `#a8e063`
- **Neutrals:** warm sand `#faf8f3`
- **Fonts:** Sora (headings), Inter (body)

Change any of these in `src/styles/global.css` under `@theme`.
