# Debrand: remove “Golderos” from VanRobi site copy

**Branch:** `copy/vanrobi-brand` → merged to `main`  
**Safety tag:** `pre-debrand-golderos` = `e8acbcf` (intact, not deleted)  
**Date:** 2026-09-19 (Europe/Brussels)

## Goal

Remove the brand name **Golderos** / **golderos** from all user-facing and SEO text, without shortening copy. Keep selling the same product line (Goldy, Picky, V100/V200/V300, portables, Gold Ice, Barrilero, G8, G98, …). Image paths, routes (structure), CTAs, NAP and design/CSS unchanged.

## Approach

- Natural Dutch/French rewrites framed as **VanRobi** / ijsbankkoelers / product model names — not clumsy blank swaps.
- JSON-LD: `brand.name` = `"VanRobi"`; manufacturer field **omitted** (no invented factory name).
- Guide slugs renamed so source stays clean:
  - `golderos-vs-gamko` → `ijsbankkoeler-vs-gamko`
  - `golderos-distributeur-belgie-nederland` → `vanrobi-distributeur-belgie-nederland`

## Key before → after samples

| Surface | Before | After |
|--------|--------|--------|
| Homepage H1 | Golderos ijsbankkoelers voor horeca in België & Nederland | Professionele ijsbankkoelers voor horeca in België & Nederland |
| Homepage lede | Via VanRobi, officiële Golderos-distributeur… | Via VanRobi, specialist in professionele ijsbankkoelers… (Kasterlee) |
| Partner H2 | Golderos. / Via VanRobi. | Professionele ijsbankkoelers. / Via VanRobi. |
| Goldy meta title | Goldy ijsbankkoeler over-bar | Golderos | Goldy ijsbankkoeler over-bar | VanRobi |
| Goldy meta description | Golderos Goldy: compacte over-bar… | Goldy: compacte over-bar… Officieel via VanRobi… |
| Product schema brand | Golderos | VanRobi |
| Footer legal | Golderos® is een merk… Productbeelden © Golderos. | VanRobi levert professionele ijsbankkoelers… Productbeelden via VanRobi-catalogus. |
| FR about title | VanRobi × Golderos. | VanRobi × refroidisseurs. |

## Word-count / length

Overall copy was **not reduced**. Straight swaps that would have shortened text were expanded (e.g. Hero lede, Partner paragraph, over-ons, Footer FR/NL, FAQ answers, guide intros). Homepage H1 character count: 57 → 62.

## Files touched (source)

App pages (NL + FR), components (Hero, Why, Partner, Footer), `lib/` (seo-meta, products, guides, guide-content, faq, fr, schema, site), `public/llms.txt`, `public/llms-full.txt`, README.

Preview DESIGN notes under `preview/` may still mention Golderos historically — out of scope for live site.

## Verification

- `rg -i golderos` on `app/`, `components/`, `lib/`, `public/`, `README.md`, `scripts/` → **zero hits**
- Built `out/**` HTML/txt → **zero hits**
- `npm run lint` → pass
- `npm run build` → pass (58 static routes)

## Live check notes

After deploy to GitHub Pages (`https://thenaturelover343-jpg.github.io/vanrobi/`):

- Confirm homepage `<title>` / H1 have no “Golderos”
- Spot-check `/producten/goldy/` meta + JSON-LD brand VanRobi
- Old guide URLs (`/gids/golderos-vs-gamko/`, `/gids/golderos-distributeur-belgie-nederland/`) no longer generated; use new slugs above
