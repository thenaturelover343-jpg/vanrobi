# VanRobi — Officiële Golderos-distributeur (BE & NL)

Production Next.js (App Router) + TypeScript site for VanRobi, ported from the approved `vanrobi-home-v4` mockup.

## Stack

- Next.js (App Router)
- TypeScript
- CSS from the v4 editorial design (cream/ink, Instrument Serif + Manrope)
- Client components for scroll reveal, sticky header, product scrub, magnetic CTAs, hero parallax

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

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Structure

```
app/           # App Router (layout, page, globals.css)
components/    # Header, Hero, Products, Categories, Why, Partner, CTA, Footer
lib/           # Product & content data
public/assets/ # Hero, product, category images + logo
```

## Brand notes

- Logo mark + wordmark: **VanRobi** only (no Golderos in the brand SVG)
- Copy references Golderos as the Spanish manufacturer; VanRobi is the official distributor for Belgium & the Netherlands
