# VanRobi — Specialist in ijsbankkoelers (BE & NL)

Production Next.js (App Router) + TypeScript site for VanRobi.

**Live:** https://thenaturelover343-jpg.github.io/vanrobi/

## Stack

- Next.js App Router, static export (`output: "export"`)
- `basePath` / `assetPrefix`: `/vanrobi` (GitHub Pages project site)
- Design: cream / ink / brass · Cormorant Garamond + Manrope
- SEO: sitemap, robots, JSON-LD (Organization/LocalBusiness, Product, FAQPage), unique meta + OG, FAQ + gids pages
- i18n: Dutch primary; French for home, contact, and top 4 products (`/fr/…`)
- Analytics: optional via env (see below) — no tracking ID is hardcoded

## Requirements

- Node.js 18+ and npm

## Setup

```bash
cd vanrobi-site
npm install
```

## Develop

```bash
npm run dev
```

Open [http://localhost:3000/vanrobi/](http://localhost:3000/vanrobi/) (basePath applies in dev too).

## Production build

```bash
npm run build
```

Static files land in `out/` (deployed by GitHub Actions to Pages).

## Analytics (optional)

Set at **build** time (e.g. GitHub Actions secrets → env):

| Variable | Example | Effect |
|----------|---------|--------|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | `thenaturelover343-jpg.github.io` | Loads Plausible |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXX` | Loads gtag |

If unset, `lib/analytics.ts` / `components/Analytics.tsx` skip loading scripts. **Do not invent a tracking ID.**

## SEO surfaces

- `/sitemap.xml` · `/robots.txt`
- `/faq/` — algemene FAQ (NL)
- `/gids/` — index + `ijsbankkoeler-vs-gamko`, `v100-vs-v200`, `bierkoeler-voor-events`
- Product pages: Product JSON-LD + FAQ blocks on Goldy, V100, V200, V100 portable
- Layout: Organization / LocalBusiness JSON-LD (Kemelbeekstraat 16, 2460 Kasterlee, +32 14 71 80 80, info@vanrobi.be)

## Structure

```
app/ # Routes (NL + /fr + gids + faq) + sitemap/robots
components/ # UI + FaqBlock, JsonLd, Analytics
lib/ # products, faq, guides, schema, site, analytics, fr
public/assets/ # Images + logo
```

## Brand notes

- Logo: **VanRobi** only
- Copy: VanRobi = BE/NL specialist for professional ice-bank coolers; product line of Spanish origin, sold without naming the factory brand on-site
- Contact everywhere: **info@vanrobi.be**
- Maintenance partner: [taponderhoud.be](https://www.taponderhoud.be)
