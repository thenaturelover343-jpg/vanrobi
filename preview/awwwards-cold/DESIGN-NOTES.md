# VanRobi — Awwwards Cold Industrial (design/awwwards-cold)

Visual craft pass only. Copy, routes, nav labels, SEO meta/schema/sitemap, FR `lang`, and H1 text unchanged.

## (a) CSS / component notes — Hero + Diensten

### Tokens (`app/globals.css` `:root`)
- Midnight navy `#0A1628` → `--navy` / `--ink` / `--dark`
- Ice blue `#A8D8EA` → `--ice` / `--brass-soft` / `--steel`
- Sharp ice `#00C2FF` → `--ice-sharp` / `--brass` (CTA & active accents)
- Frost white `#F8FBFD` → `--frost` / `--paper`
- Metal gray `#4A5568` → `--metal` / `--muted`
- Cream `#faf6ef` retained for product photography plates
- Section rhythm `--section-y: clamp(6.75rem, 14vw, 12.5rem)` (~+40–60%)
- Body `18–20px`, line-height `1.65–1.7`; headlines Inter bold, tight tracking; italic emphases stay Cormorant

### Hero (`components/Hero.tsx` + `.hero-cold`)
- Full-viewport asymmetric grid: copy left, product frame right (overlapping lightly on desktop)
- Same LCP asset `withBase("/assets/hero-editorial.jpg")`, `fetchPriority="high"`, width/height set
- Soft waving gradient (`.hero-wave` + `iceWave` 14s) + 18 CSS ice particles (disabled under `prefers-reduced-motion`)
- Product veil for edge contrast; glass meta strip (Model / IJsreserve / Debiet) on the frame
- Scroll parallax via rAF (stage up, product down); reduced-motion skips transforms

### Diensten (`components/ServicesSticky.tsx` + `.service-card-cold`)
- Sticky left rail `01–06` (desktop): active number scales ~1.35×, ice-sharp color, blur→sharp
- Cards: wide / half-width grid rhythm; giant outline numbers (~120–160px); ice line icon; “Lees meer” reveal when active/hover
- Scroll spy (mid-viewport) toggles `.is-active`; hover: scale `1.02` + L→R ice underline (`::after` 0.55s `--ease`)
- Dutch service strings unchanged (incl. `contact.regions` for 06)

## (b) Layout description

**Hero (desktop):** navy field → kicker / H1 / italic slogan / lede / dual CTAs | floating product card with specs. Mobile stacks product above copy, full-width CTAs.

**Diensten:** PageHero (unchanged copy) → sticky rail + card stack → onderhoudspartner prose → dark CTA.

## (c) Micro-interactions (timing / easing)

| Interaction | Timing | Easing |
|---|---|---|
| Hero entrance `.reveal-hero` | 1.15s, stagger 0.12s | `--ease-out` (0.16,1,0.3,1) |
| Ice particles float | 10–18s loop | linear |
| Wave background | 14s alternate | ease-in-out |
| Service active / blur clear | 0.45–0.7s | `--ease` (0.22,1,0.36,1) |
| Service hover scale + line | 0.5–0.55s | `--ease` |
| Lees meer reveal | 0.45s | `--ease` |
| Product tilt (pointer) | live; leave 0.55s | `--ease` |
| Specs slide on prod hover | 0.55s | `--ease` |
| CTA soft glow | 3.2s alternate | ease-in-out |
| Cold ripple on magnetic enter | 0.7s | `--ease-out` |
| Magnetic pull | 0.18s move / 0.55s release | `--ease` |
| Ice cursor ring lag | ~0.18 lerp / frame | — |

All fancy motion gated by `prefers-reduced-motion: reduce`.

## (d) Color + type scale

**Color:** navy industrial sections (hero, why, partner, CTA) with frost noise; cream/frost light sections for catalog photography readability; ice accents for eyebrows, active states, italic emphases.

**Type:**
- Display / H1: Inter 700, `clamp(~2.6rem … ~5.5rem)` hero; page heroes Inter 700
- Italic brand lines: Cormorant italic in ice-sharp
- Body: Inter/Manrope 400, ~18–20px, lh 1.65–1.7
- Service outline nums: Inter 700, transparent + ice stroke, 5.5–9.5rem
- Eyebrows: 0.66rem, 0.22em tracking, uppercase

## Files touched (primary)
`app/globals.css`, `app/layout.tsx`, `components/Hero.tsx`, `components/ServicesSticky.tsx`, `components/IceCursor.tsx`, `components/MagneticButton.tsx`, `components/Products.tsx`, `app/diensten/page.tsx`, `app/fr/services/page.tsx`

## Not changed (SEO / copy constraints)
- All marketing copy, H1 strings, meta titles/descriptions, schema, sitemap, FR lang markup
- Routes & nav labels; logo remains “VanRobi” (never Golderos)
- Product image paths/assets; basePath `/vanrobi` via `withBase()`
