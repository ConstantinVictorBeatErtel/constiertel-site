# constiertel-site

Static Astro site for `constiertel.com`: a personal portfolio and equity research publishing platform with a clean editorial design, typed content collections, and Cloudflare Pages deployment.

## Stack

- Astro with static output
- Astro content collections for research articles
- CSS-variable light/dark theming
- Cloudflare Pages via `wrangler`

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the Astro dev server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the built site locally |
| `npm run cf:preview` | Build and preview via Cloudflare Pages locally |

## Structure

```text
.
├── public
│   ├── favicon.ico
│   └── favicon.svg
├── src
│   ├── components
│   │   ├── Footer.astro
│   │   ├── Navbar.astro
│   │   └── ThemeToggle.astro
│   ├── content
│   │   └── research
│   │       └── apple-services-compounding.md
│   ├── data
│   │   └── site.ts
│   ├── layouts
│   │   └── BaseLayout.astro
│   ├── pages
│   │   ├── about.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── research
│   │       ├── [slug].astro
│   │       └── index.astro
│   ├── styles
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── wrangler.toml
```

## Research Content Format

Research articles live in `src/content/research/*.md` and use this frontmatter:

```md
---
title: Apple Services and the Case for Margin-Rich Recurrence
date: 2026-04-17
ticker: AAPL
summary: A short summary used in the research index and article previews.
tags:
  - Services
  - Quality
  - Recurring Revenue
---
```

## Deploying

Push the repository to GitHub, then create a Cloudflare Pages project connected to that repo.

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22`

`wrangler.toml` already points Pages at `./dist`.
