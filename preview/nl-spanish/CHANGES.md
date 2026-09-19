# NL Spanish cleanup (Tap & uitschenken)

Tag `pre-nl-spanish` marks the pre-translation state. User-facing NL strings only; IDs/URLs/slugs (`#dispensing`, `bandeja-*`, `mojacopas`, `manorreductor-*`) unchanged. FR pages untouched.

## Glossary applied

| Before (ES/Spanglish) | After (NL) |
|---|---|
| Dispensing | Tap & uitschenken |
| mojacopas | glasreiniger |
| bandeja / services | lekbak / kranen |
| Manorreductor | drukregelaar |
| helicoidal | spiraalvormig / Spiraal |
| Cuba (spec label) | IJsreservoir |
| carcasa de acero inoxidable | RVS-behuizing |
| sidra | cider |

## Sample before → after

**Glasreiniger (`mojacopas`)**
- name: `Glasreiniger (mojacopas)` → `Glasreiniger`
- badge: `Dispensing · Mojacopas` → `Tap & uitschenken · Glasreiniger`
- SEO title: `Glasreiniger (mojacopas) \| VanRobi` → `Glasreiniger \| VanRobi`
- specs: `Fabricada en RVS o plástico` → `Gemaakt van RVS of kunststof`

**Lekbak 1 kraan zonder glasreiniger (`bandeja-1-zonder-mojacopas`)**
- name: `Lekbak 1 service zonder mojacopas` → `Lekbak 1 kraan zonder glasreiniger`
- badge: `Dispensing · Lekbak` → `Tap & uitschenken · Lekbak`
- specs: `Dispone de desagüe…` → `Voorzien van afvoer voor ledigen en reiniging`

**Drukregelaar (`manorreductor-1`)**
- description: dropped `Manorreductor/`
- specs: `Esferas protegidas con funda de plástico…` → `Bollen beschermd met kunststof hoes die schokken dempt`

**Serpentijnen spiraal (`serpentijnen-bier-helicoidal`)**
- name: `… helicoidal` → `… spiraalvormig`
- badge: `Helicoidal` → `Spiraal`

**Homepage / group**
- category label: `Dispensing & tap` → `Tap & uitschenken`
- groupLabels.dispensing: `Dispensing` → `Tap & uitschenken`
- hash `#dispensing` kept for deep-link stability

## Files touched

- `lib/products-extra.generated.ts`
- `lib/seo-product-extra.generated.ts`
- `lib/products.ts`
- `components/Categories.tsx`
- `preview/nl-spanish/CHANGES.md`
