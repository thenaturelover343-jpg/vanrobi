# Catalog gap closed — full import

**Date:** 2026-09-19 (Europe/Brussels)

## Counts

| Source | Count |
|--------|------:|
| Golderos WooCommerce (`/wp-json/wp/v2/product`) | 95 |
| Deduped (skipped `-2` duplicates) | 2 |
| VanRobi **before** | 21 |
| Newly added | 72 |
| VanRobi **after** | 93 |

Skipped duplicates: `serpentines-a-medida-2, grifos-acero-inoxidable-2`  
Existing 21 mapped 1:1 from source slugs (Goldy, V-series, G8/G98/G92, cubas, etc.).

## Newly added ids by category

### serpentijnen (7)

- `serpentijnen-bier`
- `serpentijnen-bier-helicoidal`
- `serpentijnen-bier-alcoholvrij`
- `serpentijnen-sangria-frisdrank`
- `serpentijnen-cider`
- `serpentijnen-water`
- `serpentijnen-op-maat`

### dispensing (27)

- `mojacopas`
- `manorreductor-1`
- `manorreductor-2`
- `manorreductor-3`
- `tapzuil-circulair-dubbel`
- `bandeja-1-zonder-mojacopas`
- `bandeja-2-zonder-mojacopas`
- `bandeja-3-met-mojacopas`
- `bandeja-3-zonder-mojacopas`
- `bandeja-4-plus`
- `manorreductor-4`
- `tapzuilen-afwerkingen`
- `kranen-rvs`
- `kranen-water-rvs`
- `kraanstaart-45`
- `tapzuil-circulair`
- `tapzuil-boa`
- `medaillon-tapzuil`
- `bandeja-1-met-mojacopas`
- `bandeja-2-met-mojacopas`
- `steun-lekbak`
- `koppeling-type-a`
- `koppeling-type-s`
- `koppeling-type-g`
- `koppeling-key-keg`
- `ball-lock-gas`
- `ball-lock-vloeistof`

### onderdelen (33)

- `bierleiding`
- `thermostaat-elektronisch`
- `thermostaat-digitaal`
- `thermostaat-mechanisch`
- `sonde-digitaal`
- `relais-compressor`
- `startcondensator-compressor`
- `filter-moleculair-20g`
- `filter-ceramisch-32s`
- `ventilator`
- `wielen`
- `bevestigingsklemmen`
- `flenzen`
- `snelkoppelingen`
- `bocht-retourkoeling`
- `y-stuk-water`
- `y-stuk-co2`
- `rubberdoppen-overstroming`
- `glycol`
- `aansluiting-pompuitgang`
- `startcondensator-roermotor`
- `buisuiteinden`
- `pvc-cristal-slang`
- `isolatieslang`
- `pootdoppen`
- `irrigatieslang-contact`
- `irrigatieslang-overstroming`
- `versterkte-co2-slang`
- `afvoerslang`
- `neopreen-isolatieplaat`
- `reinigingsvloeistof-serpentijn`
- `reinigingstanks`
- `bedieningspaneel`

### koelers (1)

- `sin-bomba`

### service (4)

- `project-op-maat`
- `reparatie-koelers`
- `reparatie-roermotoren`
- `reparatie-kranen`

## Notes

- Branding: no "Golderos" in `app/`, `lib/`, or `components/` copy/meta/schema.
- Images under `public/assets/products-catalog/<id>.jpg` (8 source pages lacked featured media; related catalog photos used as stand-ins).
- Catalog filters: existing use chips (Alles / Horeca / Events / …) **plus** group chips (Koelers / Serpentijnen / Dispensing / Onderdelen / Service).
- FR: featured FR pages unchanged; full catalog remains NL-first with link from `/fr/produits/`.
- Rollback tag `pre-full-catalog` (= 1cdf7c1) preserved.
