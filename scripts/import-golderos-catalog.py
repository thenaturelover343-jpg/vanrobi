#!/usr/bin/env python3
"""Import full Golderos catalog into VanRobi products + images + SEO stubs."""
from __future__ import annotations
import json, html, re, os, subprocess, time, hashlib
from pathlib import Path

ROOT = Path("/workspace/vanrobi-site")
RAW = ROOT / "preview/golderos-full/products-raw.json"
IMG_DIR = ROOT / "public/assets/products-catalog"
OUT_TS = ROOT / "lib/products-extra.generated.ts"
OUT_SEO = ROOT / "lib/seo-product-extra.generated.ts"
OUT_META = ROOT / "preview/golderos-full/import-meta.json"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

# Existing VanRobi ids mapped from Golderos slugs (skip re-add)
EXISTING_MAP = {
    "goldy": "goldy",
    "picky": "picky",
    "gold-ice": "gold-ice",
    "v100-2": "v100",           # fixed V100
    "v100": "v100-portable",    # portable (confusing source slug)
    "v200-2": "v200",
    "v200": "v200-portable",
    "v300": "v300",
    "v90": "v90",
    "v50": "h50",
    "v500": "v500",
    "barrilero-doble": "barrilero-doble",
    "unidad-condensadora": "unidad-condensadora",
    "g8-refrigeracion-por-agua-aire-con-condensador": "g8-agua-aire",
    "g8-refrigeracion-por-aire-con-condensador": "g8-aire",
    "g8-refrigeracion-por-agua-con-condensador": "g8-agua",
    "g98-con-condensador": "g98-con",
    "g98-sin-condensador": "g98-sin",
    "g92-sin-condensador": "g92-sin",
    "cuba-bao-fro": "cuba-frio",
    "cuba-bao-caliente": "cuba-caliente",
}

# Prefer these slugs when duplicates exist (skip the -2 variants etc.)
SKIP_SLUGS = {
    "serpentines-a-medida-2",  # keep serpentines-a-medida
    "grifos-acero-inoxidable-2",  # keep grifos-acero-inoxidable
}

# Manual NL product definitions: slug -> dict overrides
# group: koelers | serpentijnen | dispensing | onderdelen | service | overig
DEFS = {
    "serpentines-cerveza": {
        "id": "serpentijnen-bier",
        "name": "Serpentijnen bier",
        "badge": "Serpentijnen · Bier",
        "group": "serpentijnen",
        "uses": ["horeca", "onder-bar"],
        "description": "RVS-serpentijnen voor bier, voedselveilig en leverbaar in meerdere lengtes.",
        "longDescription": "Serpentijnen bier in roestvrij staal, goedgekeurd voor voedingsgebruik. Beschikbaar in diverse buislengtes (o.a. 3–27 m) en diameters Ø7/Ø8. Ideaal voor ijsbankkoelers en vaste taplijnen via VanRobi.",
    },
    "serpentines-cerveza-helicoidal": {
        "id": "serpentijnen-bier-helicoidal",
        "name": "Serpentijnen bier helicoidal",
        "badge": "Serpentijnen · Helicoidal",
        "group": "serpentijnen",
        "uses": ["horeca", "onder-bar"],
        "description": "Helicoidale RVS-serpentijnen voor bier, compacte spoelvorm.",
        "longDescription": "Helicoidale serpentijnen bier in RVS voor compacte spoelopbouw in de ijsbank. Voedselveilig, typische buislengte ±27 m. Via VanRobi voor horeca en installateurs in BE & NL.",
    },
    "serpentines-cerveza-sin-alcohol": {
        "id": "serpentijnen-bier-alcoholvrij",
        "name": "Serpentijnen bier alcoholvrij",
        "badge": "Serpentijnen · Alcoholvrij",
        "group": "serpentijnen",
        "uses": ["horeca", "onder-bar"],
        "description": "RVS-serpentijnen afgestemd op alcoholvrij bier.",
        "longDescription": "Serpentijnen voor alcoholvrij bier in roestvrij staal. Zelfde voedselveilige kwaliteit als de bierlijn, met lengtes van 3 tot 27 m. Via VanRobi.",
    },
    "serpentines-sangria-referescos": {
        "id": "serpentijnen-sangria-frisdrank",
        "name": "Serpentijnen sangria/frisdrank",
        "badge": "Serpentijnen · Frisdrank",
        "group": "serpentijnen",
        "uses": ["horeca", "events"],
        "description": "RVS-serpentijnen voor sangria en frisdrank.",
        "longDescription": "Serpentijnen voor sangria en frisdrank in RVS Ø7, typische lengtes 8–9 m. Voor bars en events die meer dan bier tapen. Via VanRobi.",
    },
    "serpentines-sidra": {
        "id": "serpentijnen-cider",
        "name": "Serpentijnen cider",
        "badge": "Serpentijnen · Cider",
        "group": "serpentijnen",
        "uses": ["horeca", "onder-bar"],
        "description": "RVS 316-serpentijnen voor cider/sidra.",
        "longDescription": "Serpentijnen cider in RVS 316, voedselveilig. Buisdiameter Ø7, lengtes o.a. 11–12 m. Speciaal voor ciderlijnen via VanRobi.",
    },
    "serpentines-agua": {
        "id": "serpentijnen-water",
        "name": "Serpentijnen water",
        "badge": "Serpentijnen · Water",
        "group": "serpentijnen",
        "uses": ["horeca"],
        "description": "RVS-serpentijnen voor gekoeld water.",
        "longDescription": "Serpentijnen water in RVS Ø8, lengtes o.a. 3–7 m. Voor waterkoeling in tap- of procesopstellingen. Via VanRobi BE & NL.",
    },
    "serpentines-a-medida": {
        "id": "serpentijnen-op-maat",
        "name": "Serpentijnen op maat",
        "badge": "Serpentijnen · Op maat",
        "group": "serpentijnen",
        "uses": ["horeca", "onder-bar"],
        "description": "Serpentijnen op maat voor speciale volumes en layouts.",
        "longDescription": "Serpentijnen op maat wanneer standaardlengtes niet passen. VanRobi stemt spoel, diameter en materiaal af op uw ijsbank en debiet.",
    },
    "grifos-acero-inoxidable": {
        "id": "kranen-rvs",
        "name": "RVS-tapkranen",
        "badge": "Dispensing · Kranen",
        "group": "dispensing",
        "uses": ["horeca", "events"],
        "description": "Professionele RVS-tapkranen voor bier en frisdrank.",
        "longDescription": "Roestvrijstalen tapkranen voor horeca en events. Passend bij zuilen, serpentijnen en ijsbankkoelers in het VanRobi-assortiment.",
    },
    "grifos-agua-acero-inoxidable": {
        "id": "kranen-water-rvs",
        "name": "RVS-waterkranen",
        "badge": "Dispensing · Water",
        "group": "dispensing",
        "uses": ["horeca"],
        "description": "RVS-kranen voor gekoeld water aan de bar.",
        "longDescription": "Roestvrijstalen waterkranen voor gekoeld water in horeca-opstellingen. Combineerbaar met water-serpentijnen via VanRobi.",
    },
    "mojacopas": {
        "id": "mojacopas",
        "name": "Glasreiniger (mojacopas)",
        "badge": "Dispensing · Mojacopas",
        "group": "dispensing",
        "uses": ["horeca"],
        "description": "Mojacopas-glasreiniger voor nette tapafwerking.",
        "longDescription": "Mojacopas (glasreiniger) voor professionele tapstations. Houdt glazen schoon en presentatie strak. Via VanRobi.",
    },
    "manorreductores-1-producto": {
        "id": "manorreductor-1",
        "name": "Drukregelaar 1 product",
        "badge": "Dispensing · CO₂",
        "group": "dispensing",
        "uses": ["horeca", "events"],
        "description": "Manorreductor/drukregelaar voor één dranklijn.",
        "longDescription": "Drukregelaar (manorreductor) voor één productlijn. Stabiele CO₂- of gasdruk voor consistente tapkwaliteit via VanRobi.",
    },
    "manorreductores-2-productos": {
        "id": "manorreductor-2",
        "name": "Drukregelaar 2 producten",
        "badge": "Dispensing · CO₂",
        "group": "dispensing",
        "uses": ["horeca", "events"],
        "description": "Drukregelaar voor twee dranklijnen.",
        "longDescription": "Manorreductor voor twee producten. Ideaal wanneer u twee bieren of mix van bier/frisdrank tapt. Via VanRobi.",
    },
    "manorreductores-3-productos": {
        "id": "manorreductor-3",
        "name": "Drukregelaar 3 producten",
        "badge": "Dispensing · CO₂",
        "group": "dispensing",
        "uses": ["horeca"],
        "description": "Drukregelaar voor drie dranklijnen.",
        "longDescription": "Manorreductor voor drie productlijnen. Voor bars met een breder tapaanbod. Leverbaar via VanRobi BE & NL.",
    },
    "manorreductores-4-productos": {
        "id": "manorreductor-4",
        "name": "Drukregelaar 4 producten",
        "badge": "Dispensing · CO₂",
        "group": "dispensing",
        "uses": ["horeca"],
        "description": "Drukregelaar voor vier dranklijnen.",
        "longDescription": "Manorreductor voor vier producten. High-volume tapstations met meerdere lijnen. Via VanRobi.",
    },
    "tubo-para-cerveza": {
        "id": "bierleiding",
        "name": "Bierleiding",
        "badge": "Onderdelen · Leiding",
        "group": "onderdelen",
        "uses": ["horeca", "onder-bar"],
        "description": "Professionele bierslang/leiding voor tapinstallaties.",
        "longDescription": "Bierleiding voor professionele tapinstallaties. Passend bij serpentijnen, kranen en koelers in het VanRobi-assortiment.",
    },
    "sin-bomba": {
        "id": "sin-bomba",
        "name": "Koeler zonder pomp",
        "badge": "Koelers · Configuratie",
        "group": "koelers",
        "uses": ["horeca"],
        "description": "Configuratie zonder pomp voor specifieke ijsbankopstellingen.",
        "longDescription": "Variant zonder pomp wanneer de installatie circulatie elders regelt. VanRobi adviseert over de juiste pomp/configuratie.",
    },
    "columna-circular-doble": {
        "id": "tapzuil-circulair-dubbel",
        "name": "Tapzuil circulair dubbel",
        "badge": "Dispensing · Zuil",
        "group": "dispensing",
        "uses": ["horeca", "events"],
        "description": "Ronde dubbele tapzuil voor twee kranen.",
        "longDescription": "Circulaire dubbele tapzuil voor twee services. Zichtbare barpresentatie met professionele afwerking via VanRobi.",
    },
    "columna-circular-sencilla": {
        "id": "tapzuil-circulair",
        "name": "Tapzuil circulair",
        "badge": "Dispensing · Zuil",
        "group": "dispensing",
        "uses": ["horeca", "events"],
        "description": "Ronde enkele tapzuil.",
        "longDescription": "Circulaire enkele tapzuil voor één kraan. Klassieke look voor bars en events. Via VanRobi.",
    },
    "columna-boa-sencilla": {
        "id": "tapzuil-boa",
        "name": "Tapzuil Boa",
        "badge": "Dispensing · Zuil",
        "group": "dispensing",
        "uses": ["horeca", "events"],
        "description": "Tapzuil Boa, enkele uitvoering.",
        "longDescription": "Tapzuil Boa in enkele uitvoering. Designzuil voor craftbars en horeca. Leverbaar via VanRobi.",
    },
    "columnas-con-distintos-acabados": {
        "id": "tapzuilen-afwerkingen",
        "name": "Tapzuilen diverse afwerkingen",
        "badge": "Dispensing · Zuil",
        "group": "dispensing",
        "uses": ["horeca", "events"],
        "description": "Tapzuilen met verschillende afwerkingen en finishes.",
        "longDescription": "Tapzuilen met diverse afwerkingen — kies look en materiaal passend bij uw bar. VanRobi helpt bij selectie.",
    },
    "medalln-columna": {
        "id": "medaillon-tapzuil",
        "name": "Medaillon voor tapzuil",
        "badge": "Dispensing · Accessoire",
        "group": "dispensing",
        "uses": ["horeca"],
        "description": "Medaillon/badge voor branding op de tapzuil.",
        "longDescription": "Medaillon voor tapzuilen: plaats merk of productnaam zichtbaar aan de bar. Via VanRobi.",
    },
    "cola-45-dientes": {
        "id": "kraanstaart-45",
        "name": "Kraanstaart 45 tanden",
        "badge": "Dispensing · Koppeling",
        "group": "dispensing",
        "uses": ["horeca"],
        "description": "Cola/kraanstaart 45 tanden voor kraan–zuil verbinding.",
        "longDescription": "Kraanstaart (cola) 45 tanden voor betrouwbare verbinding tussen kraan en zuil. Onderdeel van de VanRobi dispensing-lijn.",
    },
    "bandeja-1-servicio-sin-mojacopas": {
        "id": "bandeja-1-zonder-mojacopas",
        "name": "Lekbak 1 service zonder mojacopas",
        "badge": "Dispensing · Lekbak",
        "group": "dispensing",
        "uses": ["horeca"],
        "description": "Lekbak voor 1 kraan, zonder mojacopas.",
        "longDescription": "RVS-lekbak (bandeja) voor één service, zonder glasreiniger. Netjes afgewerkt onder de kraan. Via VanRobi.",
    },
    "bandeja-1-servicio-con-mojacopas": {
        "id": "bandeja-1-met-mojacopas",
        "name": "Lekbak 1 service met mojacopas",
        "badge": "Dispensing · Lekbak",
        "group": "dispensing",
        "uses": ["horeca"],
        "description": "Lekbak voor 1 kraan, met mojacopas.",
        "longDescription": "Lekbak voor één service met geïntegreerde mojacopas. Voor nette glazen en hygiënische tap. Via VanRobi.",
    },
    "bandeja-2-servicios-sin-mojacopas": {
        "id": "bandeja-2-zonder-mojacopas",
        "name": "Lekbak 2 services zonder mojacopas",
        "badge": "Dispensing · Lekbak",
        "group": "dispensing",
        "uses": ["horeca"],
        "description": "Lekbak voor 2 kranen, zonder mojacopas.",
        "longDescription": "Lekbak voor twee services zonder mojacopas. Passend bij dubbele zuilen. Via VanRobi.",
    },
    "bandeja-2-servicios-con-mojacopas": {
        "id": "bandeja-2-met-mojacopas",
        "name": "Lekbak 2 services met mojacopas",
        "badge": "Dispensing · Lekbak",
        "group": "dispensing",
        "uses": ["horeca"],
        "description": "Lekbak voor 2 kranen, met mojacopas.",
        "longDescription": "Lekbak voor twee services met mojacopas. Via VanRobi voor horeca in BE & NL.",
    },
    "bandeja-3-servicios-sin-mojacopas": {
        "id": "bandeja-3-zonder-mojacopas",
        "name": "Lekbak 3 services zonder mojacopas",
        "badge": "Dispensing · Lekbak",
        "group": "dispensing",
        "uses": ["horeca"],
        "description": "Lekbak voor 3 kranen, zonder mojacopas.",
        "longDescription": "Lekbak voor drie services zonder mojacopas. Voor bredere tapstations. Via VanRobi.",
    },
    "bandeja-3-servicios-con-mojacopas": {
        "id": "bandeja-3-met-mojacopas",
        "name": "Lekbak 3 services met mojacopas",
        "badge": "Dispensing · Lekbak",
        "group": "dispensing",
        "uses": ["horeca"],
        "description": "Lekbak voor 3 kranen, met mojacopas.",
        "longDescription": "Lekbak voor drie services met mojacopas. Via VanRobi.",
    },
    "bandejas-4-o-ms-servicios": {
        "id": "bandeja-4-plus",
        "name": "Lekbak 4+ services",
        "badge": "Dispensing · Lekbak",
        "group": "dispensing",
        "uses": ["horeca", "events"],
        "description": "Lekbak voor 4 of meer kranen.",
        "longDescription": "Lekbak voor vier of meer services. Voor high-volume bars en festivalbars. Via VanRobi.",
    },
    "soporte-bandeja": {
        "id": "steun-lekbak",
        "name": "Steun voor lekbak",
        "badge": "Dispensing · Steun",
        "group": "dispensing",
        "uses": ["horeca"],
        "description": "Montagesteun voor lekbakken.",
        "longDescription": "Steun/montage voor lekbakken. Stabiele bevestiging aan bar of zuil. Via VanRobi.",
    },
    "cabeza-tipo-a": {
        "id": "koppeling-type-a",
        "name": "Vatkoppeling type A",
        "badge": "Dispensing · Koppeling",
        "group": "dispensing",
        "uses": ["horeca", "events"],
        "description": "Vacuümkoppeling type A voor vaten.",
        "longDescription": "Vatkoppeling type A (cabezal vacío). Voor standaard vatinterfaces in horeca. Via VanRobi.",
    },
    "cabeza-tipo-s": {
        "id": "koppeling-type-s",
        "name": "Vatkoppeling type S",
        "badge": "Dispensing · Koppeling",
        "group": "dispensing",
        "uses": ["horeca", "events"],
        "description": "Vacuümkoppeling type S voor vaten.",
        "longDescription": "Vatkoppeling type S. Passend bij specifieke vatstandaarden. Via VanRobi BE & NL.",
    },
    "cabezal-tipo-g": {
        "id": "koppeling-type-g",
        "name": "Vatkoppeling type G",
        "badge": "Dispensing · Koppeling",
        "group": "dispensing",
        "uses": ["horeca", "events"],
        "description": "Vacuümkoppeling type G voor vaten.",
        "longDescription": "Vatkoppeling type G. Voor G-type vatinterfaces. Leverbaar via VanRobi.",
    },
    "cabeza-tipo-key-keg": {
        "id": "koppeling-key-keg",
        "name": "Vatkoppeling KeyKeg",
        "badge": "Dispensing · KeyKeg",
        "group": "dispensing",
        "uses": ["horeca", "events", "mobiel"],
        "description": "Koppeling voor KeyKeg-vaten.",
        "longDescription": "KeyKeg-koppeling voor craft en events. Snel wisselen van vaten zonder klassieke speerpunt. Via VanRobi.",
    },
    "cabeza-bola-ball-lock-gas": {
        "id": "ball-lock-gas",
        "name": "Ball lock gas",
        "badge": "Dispensing · Ball lock",
        "group": "dispensing",
        "uses": ["horeca", "events"],
        "description": "Ball-lock koppeling voor gaszijde.",
        "longDescription": "Ball-lock koppeling gas. Voor systemen met ball-lock interfaces (o.a. Cornelius-stijl). Via VanRobi.",
    },
    "cabeza-bola-ball-lock-lquido": {
        "id": "ball-lock-vloeistof",
        "name": "Ball lock vloeistof",
        "badge": "Dispensing · Ball lock",
        "group": "dispensing",
        "uses": ["horeca", "events"],
        "description": "Ball-lock koppeling voor vloeistofzijde.",
        "longDescription": "Ball-lock koppeling vloeistof. Combineer met ball-lock gas voor complete disconnects. Via VanRobi.",
    },
    "termostato-electrnico": {
        "id": "thermostaat-elektronisch",
        "name": "Elektronische thermostaat",
        "badge": "Onderdelen · Regeling",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Elektronische thermostaat voor ijsbankkoelers.",
        "longDescription": "Elektronische thermostaat voor nauwkeurige temperatuurregeling van ijsbankkoelers. Vervanging of upgrade via VanRobi.",
    },
    "termostato-digital": {
        "id": "thermostaat-digitaal",
        "name": "Digitale thermostaat",
        "badge": "Onderdelen · Regeling",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Digitale thermostaat met display.",
        "longDescription": "Digitale thermostaat met duidelijke uitlezing. Voor professionele koelregeling via VanRobi.",
    },
    "termostato-mecnico": {
        "id": "thermostaat-mechanisch",
        "name": "Mechanische thermostaat",
        "badge": "Onderdelen · Regeling",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Mechanische thermostaat voor koelers.",
        "longDescription": "Robuuste mechanische thermostaat voor ijsbank- en vatkoelers. Via VanRobi.",
    },
    "sonda-electrnica-digital": {
        "id": "sonde-digitaal",
        "name": "Digitale/elektronische sonde",
        "badge": "Onderdelen · Sensor",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Temperatuursensor/sonde voor koelregeling.",
        "longDescription": "Elektronische/digitale temperatuursensor voor thermostaten en regelingen. Via VanRobi.",
    },
    "rel-compresor": {
        "id": "relais-compressor",
        "name": "Relais compressor",
        "badge": "Onderdelen · Elektrisch",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Compressorrelais voor start/bedrijf.",
        "longDescription": "Relais voor compressormotoren in ijsbankkoelers. Onderhoudsonderdeel via VanRobi.",
    },
    "condensador-de-arranque-compresor": {
        "id": "startcondensator-compressor",
        "name": "Startcondensator compressor",
        "badge": "Onderdelen · Elektrisch",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Startcondensator voor compressormotor.",
        "longDescription": "Startcondensator voor compressoren. Vervangingsonderdeel via VanRobi BE & NL.",
    },
    "condensador-de-arranque-agitador": {
        "id": "startcondensator-roermotor",
        "name": "Startcondensator roermotor",
        "badge": "Onderdelen · Elektrisch",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Startcondensator voor roermotor/agitator.",
        "longDescription": "Startcondensator voor roermotoren (agitadores). Passend bij G8/G98-serie. Via VanRobi.",
    },
    "filtro-molecular-20-gr": {
        "id": "filter-moleculair-20g",
        "name": "Moleculair filter 20 g",
        "badge": "Onderdelen · Filter",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Moleculair filter 20 gram voor koelcircuit.",
        "longDescription": "Moleculair filter 20 g voor het koelcircuit. Onderhoudsonderdeel via VanRobi.",
    },
    "filtro-cermico-32-s": {
        "id": "filter-ceramisch-32s",
        "name": "Keramisch filter 32 S",
        "badge": "Onderdelen · Filter",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Keramisch filter 32 S.",
        "longDescription": "Keramisch filter type 32 S voor koel- of watercircuits. Via VanRobi.",
    },
    "ventilador": {
        "id": "ventilator",
        "name": "Ventilator",
        "badge": "Onderdelen · Koeling",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Ventilator voor condensor of unitkoeling.",
        "longDescription": "Ventilator voor warmteafvoer van condensors en units. Vervanging via VanRobi.",
    },
    "ruedas": {
        "id": "wielen",
        "name": "Wielen",
        "badge": "Onderdelen · Mobiel",
        "group": "onderdelen",
        "uses": ["events", "mobiel"],
        "description": "Wielen voor portable koelers.",
        "longDescription": "Wielen/set voor mobiele ijsbankkoelers. Voor events en snelle verplaatsing. Via VanRobi.",
    },
    "abrazaderas-de-fijacin": {
        "id": "bevestigingsklemmen",
        "name": "Bevestigingsklemmen",
        "badge": "Onderdelen · Montage",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Klemmen voor leiding- en slangmontage.",
        "longDescription": "Bevestigingsklemmen (abrazaderas) voor slangen en leidingen. Via VanRobi.",
    },
    "bridas": {
        "id": "flenzen",
        "name": "Flenzen",
        "badge": "Onderdelen · Montage",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Flenzen voor leidingverbindingen.",
        "longDescription": "Flenzen (bridas) voor vaste leidingverbindingen in tap- en koelinstallaties. Via VanRobi.",
    },
    "conexiones-rpidas": {
        "id": "snelkoppelingen",
        "name": "Snelkoppelingen",
        "badge": "Onderdelen · Koppeling",
        "group": "onderdelen",
        "uses": ["horeca", "events", "mobiel"],
        "description": "Snelkoppelingen voor flexibele installaties.",
        "longDescription": "Snelkoppelingen voor snelle opbouw van taplijnen, ideaal bij events. Via VanRobi.",
    },
    "codo-refrigeracin-de-retorno": {
        "id": "bocht-retourkoeling",
        "name": "Bocht retourkoeling",
        "badge": "Onderdelen · Leiding",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Bochtstuk voor retourkoelleiding.",
        "longDescription": "Bocht voor retourkoeling in glycol- of watercircuits. Via VanRobi.",
    },
    "y-bifurcacin-2-salidas-agua": {
        "id": "y-stuk-water",
        "name": "Y-stuk water 2 uitgangen",
        "badge": "Onderdelen · Verdeel",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Y-verdeelstuk voor water, 2 uitgangen.",
        "longDescription": "Y-bifurcatie met twee wateruitgangen voor irrigatie/circulatie. Via VanRobi.",
    },
    "y-bifurcacin-2-salidas-reforzada-co2": {
        "id": "y-stuk-co2",
        "name": "Y-stuk CO₂ versterkt",
        "badge": "Onderdelen · Verdeel",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Versterkt Y-stuk voor CO₂, 2 uitgangen.",
        "longDescription": "Versterkt Y-stuk voor CO₂-verdeling over twee lijnen. Via VanRobi.",
    },
    "tapones-de-goma-inundacin": {
        "id": "rubberdoppen-overstroming",
        "name": "Rubberdoppen overstroming",
        "badge": "Onderdelen · Afdichting",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Rubberdoppen voor overstromings-/irrigatieopeningen.",
        "longDescription": "Rubberdoppen voor afdichting van overstromingsopeningen in ijsbanken. Via VanRobi.",
    },
    "lquido-glicol": {
        "id": "glycol",
        "name": "Glycolvloeistof",
        "badge": "Onderdelen · Glycol",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Glycol voor gesloten koelcircuits.",
        "longDescription": "Glycolvloeistof voor gesloten koelcircuits en glycolvarianten van ijsbankkoelers. Via VanRobi.",
    },
    "conexin-salida-bomba": {
        "id": "aansluiting-pompuitgang",
        "name": "Aansluiting pompuitgang",
        "badge": "Onderdelen · Pomp",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Aansluiting voor pompuitgang.",
        "longDescription": "Verbindingsstuk voor de uitgang van de circulatiepomp. Via VanRobi.",
    },
    "conteras-tubo": {
        "id": "buisuiteinden",
        "name": "Buisuiteinden",
        "badge": "Onderdelen · Leiding",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Eindstukken/conteras voor buizen.",
        "longDescription": "Buisuiteinden (conteras) voor nette afwerking van leidingen. Via VanRobi.",
    },
    "tubo-pvc-cristal": {
        "id": "pvc-cristal-slang",
        "name": "PVC cristal slang",
        "badge": "Onderdelen · Slang",
        "group": "onderdelen",
        "uses": ["horeca", "events"],
        "description": "Transparante PVC cristal slang.",
        "longDescription": "PVC cristal slang voor zichtbare of tijdelijke leidingen. Via VanRobi.",
    },
    "tubo-aislante-coquilla": {
        "id": "isolatieslang",
        "name": "Isolatieslang (coquilla)",
        "badge": "Onderdelen · Isolatie",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Isolatieslang voor koude leidingen.",
        "longDescription": "Isolatieslang (coquilla) tegen condens en warmte-inlek op koude leidingen. Via VanRobi.",
    },
    "conteras-pata": {
        "id": "pootdoppen",
        "name": "Pootdoppen",
        "badge": "Onderdelen · Frame",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Doppen voor machinepoten.",
        "longDescription": "Pootdoppen (conteras pata) voor stabiele plaatsing van units. Via VanRobi.",
    },
    "tubera-riego-contacto": {
        "id": "irrigatieslang-contact",
        "name": "Irrigatieslang contact",
        "badge": "Onderdelen · Irrigatie",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Irrigatieslang voor contactkoeling in de ijsbank.",
        "longDescription": "Irrigatieslang contact voor ijsbankcirculatie. Onderdeel van het roermotor-systeem. Via VanRobi.",
    },
    "tubera-riego-inundacin": {
        "id": "irrigatieslang-overstroming",
        "name": "Irrigatieslang overstroming",
        "badge": "Onderdelen · Irrigatie",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Irrigatieslang voor overstromingskoeling.",
        "longDescription": "Irrigatieslang overstroming voor ijsbankvulling/circulatie. Via VanRobi.",
    },
    "tubo-reforzado-co2": {
        "id": "versterkte-co2-slang",
        "name": "Versterkte CO₂-slang",
        "badge": "Onderdelen · CO₂",
        "group": "onderdelen",
        "uses": ["horeca", "events"],
        "description": "Versterkte slang voor CO₂.",
        "longDescription": "Versterkte CO₂-slang voor veilige gastoevoer naar drukregelaars. Via VanRobi.",
    },
    "tubo-desage": {
        "id": "afvoerslang",
        "name": "Afvoerslang",
        "badge": "Onderdelen · Afvoer",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Afvoerslang voor condens/drainage.",
        "longDescription": "Afvoerslang (desagüe) voor condenswater en drainage van koelers. Via VanRobi.",
    },
    "plancha-aislante-neopreno": {
        "id": "neopreen-isolatieplaat",
        "name": "Neopreen isolatieplaat",
        "badge": "Onderdelen · Isolatie",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Neopreen isolatieplaat voor koude zones.",
        "longDescription": "Neopreen isolatieplaat tegen condens en warmteverlies. Via VanRobi.",
    },
    "lquido-limpieza-circuito-serpentn-grifo": {
        "id": "reinigingsvloeistof-serpentijn",
        "name": "Reinigingsvloeistof serpentijn/kraan",
        "badge": "Onderdelen · Reiniging",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Reinigingsvloeistof voor serpentijn- en kraancircuit.",
        "longDescription": "Reinigingsvloeistof voor serpentijnen en kranen. Houdt de taplijn hygiënisch. Via VanRobi.",
    },
    "tanquetas-de-limpieza": {
        "id": "reinigingstanks",
        "name": "Reinigingstanks",
        "badge": "Onderdelen · Reiniging",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Tanks voor circuitreiniging van taplijnen.",
        "longDescription": "Reinigingstanks (tanquetas) voor doorspoelen van serpentijnen en leidingen. Via VanRobi.",
    },
    "proyecto-necesidades-ad-hoc": {
        "id": "project-op-maat",
        "name": "Project op maat",
        "badge": "Service · Project",
        "group": "service",
        "uses": ["horeca", "events"],
        "description": "Speciale koel- en tapprojecten op maat.",
        "longDescription": "Projecten op maat: speciale volumes, layouts of industriële toepassingen. VanRobi ontwerpt mee vanuit BE & NL.",
        "featured": False,
    },
    "reparacin-enfriadores": {
        "id": "reparatie-koelers",
        "name": "Reparatie koelers",
        "badge": "Service · Reparatie",
        "group": "service",
        "uses": ["horeca"],
        "description": "Reparatie van ijsbankkoelers en enfriadores.",
        "longDescription": "Reparatie van ijsbankkoelers: diagnose, onderdelen en herstel. Via VanRobi en partner Taponderhoud in België & Nederland.",
    },
    "reparacin-agitadores": {
        "id": "reparatie-roermotoren",
        "name": "Reparatie roermotoren",
        "badge": "Service · Reparatie",
        "group": "service",
        "uses": ["horeca"],
        "description": "Reparatie van roermotoren/agitadores.",
        "longDescription": "Reparatie van roermotoren (G8/G98 e.d.). Snel weer circulatie in de ijsbank. Via VanRobi.",
    },
    "reparacin-grifos": {
        "id": "reparatie-kranen",
        "name": "Reparatie kranen",
        "badge": "Service · Reparatie",
        "group": "service",
        "uses": ["horeca"],
        "description": "Reparatie en revisie van tapkranen.",
        "longDescription": "Reparatie van tapkranen: lekkage, slijtage, revisie. Via VanRobi / Taponderhoud.",
    },
    "panel-maniobra": {
        "id": "bedieningspaneel",
        "name": "Bedieningspaneel",
        "badge": "Onderdelen · Besturing",
        "group": "onderdelen",
        "uses": ["horeca"],
        "description": "Bedienings-/schakelpaneel voor koelinstallaties.",
        "longDescription": "Paneel de maniobra: schakel- en bedieningspaneel voor koel- en pompinstallaties. Via VanRobi.",
    },
}

def strip_html(s: str) -> str:
    s = html.unescape(s or "")
    s = re.sub(r"<[^>]+>", " ", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s

def parse_specs(content: str) -> list[dict]:
    content = strip_html(content)
    specs = []
    # split on · or bullets
    parts = re.split(r"[·•]\s*", content)
    for part in parts:
        part = part.strip(" \n\t*-")
        if not part or len(part) < 3:
            continue
        # Key: value
        m = re.match(r"^([^:]{2,40}):\s*(.+)$", part)
        if m:
            label, value = m.group(1).strip(), m.group(2).strip()
            # translate common labels
            label_map = {
                "Material": "Materiaal",
                "Diámetro tubo": "Buisdiameter",
                "Diametro tubo": "Buisdiameter",
                "Longitud de tubo (m)": "Buislengte (m)",
                "Dimensiones (mm)": "Afmetingen (mm)",
                "Tensión": "Spanning",
                "Potencia compresor (Cv)": "Compressor (Cv)",
                "Capacidad cuba (l)": "Cuba (l)",
                "Bloque de hielo (Kg)": "IJsreserve (kg)",
                "Capacidad de dispensado (l/h)": "Debiet (L/u)",
                "Nº serpentines": "Aantal serpentijnen",
                "Especificaciones": "Specificaties",
                "Salidas": "Uitgangen",
                "Protector de giro": "Draaibescherming",
            }
            label = label_map.get(label, label)
            if len(value) > 80:
                value = value[:77] + "…"
            specs.append({"label": label, "value": value})
        elif len(specs) < 6 and len(part) < 60:
            specs.append({"label": "Info", "value": part[:80]})
    if not specs:
        specs = [
            {"label": "Merk", "value": "VanRobi · BE & NL"},
            {"label": "Leverancier", "value": "VanRobi · België & Nederland"},
        ]
    return specs[:8]

def ts_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)

def download(url: str, dest: Path) -> bool:
    if dest.exists() and dest.stat().st_size > 1000:
        return True
    dest.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        "curl", "-sS", "-L", "-A", UA, "--fail", "--max-time", "60",
        "-o", str(dest), url,
    ]
    r = subprocess.run(cmd, capture_output=True)
    if r.returncode != 0 or not dest.exists() or dest.stat().st_size < 100:
        if dest.exists():
            dest.unlink()
        return False
    return True

def image_url(p: dict) -> str | None:
    uagb = p.get("uagb_featured_image_src") or {}
    for key in ("woocommerce_single", "full", "large", "medium"):
        v = uagb.get(key)
        if isinstance(v, list) and v and v[0]:
            return v[0]
        if isinstance(v, str) and v.startswith("http"):
            return v
    return None

def main():
    products = json.loads(RAW.read_text())
    print(f"Loaded {len(products)} products")

    new_products = []
    skipped_existing = []
    skipped_dup = []
    missing_def = []
    img_ok = 0
    img_fail = []

    for p in products:
        slug = p["slug"]
        if slug in SKIP_SLUGS:
            skipped_dup.append(slug)
            continue
        if slug in EXISTING_MAP:
            skipped_existing.append(slug)
            continue
        if slug not in DEFS:
            missing_def.append(slug)
            continue
        d = DEFS[slug]
        pid = d["id"]
        content = p.get("content", {}).get("rendered", "")
        specs = parse_specs(content)
        # prefer defs description; augment specs if empty-ish
        img = image_url(p)
        dest = IMG_DIR / f"{pid}.jpg"
        if img:
            ok = download(img, dest)
            if ok:
                img_ok += 1
            else:
                img_fail.append((pid, img))
                # try full size alternate
                uagb = p.get("uagb_featured_image_src") or {}
                alt = uagb.get("full")
                if isinstance(alt, list) and alt and alt[0] != img:
                    if download(alt[0], dest):
                        img_ok += 1
                        img_fail.pop()
            time.sleep(0.15)
        else:
            img_fail.append((pid, None))

        image_path = f"/assets/products-catalog/{pid}.jpg"
        # if download failed, still reference path (placeholder risk) — check exists
        if not dest.exists():
            # leave path; build may still work if we create a tiny placeholder
            pass

        new_products.append({
            **d,
            "slug_src": slug,
            "specs": specs,
            "image": image_path,
            "alt": f"{d['name']}, via VanRobi België & Nederland",
            "cropClass": f"crop-{pid}",
            "featured": d.get("featured", False),
            "imageKind": "photo",
        })

    print(f"New products: {len(new_products)}")
    print(f"Skipped existing: {len(skipped_existing)}")
    print(f"Skipped dup: {skipped_dup}")
    print(f"Missing defs: {missing_def}")
    print(f"Images ok: {img_ok}, fail: {len(img_fail)}")
    for x in img_fail[:10]:
        print("  fail", x)

    # Write TS products extra
    lines = []
    lines.append('import { withBase } from "./base";')
    lines.append('import type { Product } from "./products";')
    lines.append("")
    lines.append("/** Auto-generated catalog extras — do not edit by hand. */")
    lines.append("export const productsExtra: Product[] = [")
    for i, pr in enumerate(new_products):
        idx = f"{22 + i:02d}"
        uses = ", ".join(f'"{u}"' for u in pr["uses"])
        specs_ts = ",\n".join(
            f'      {{ label: {ts_str(s["label"])}, value: {ts_str(s["value"])} }}'
            for s in pr["specs"]
        )
        lines.append("  {")
        lines.append(f'    id: {ts_str(pr["id"])},')
        lines.append(f'    index: {ts_str(idx)},')
        lines.append(f'    name: {ts_str(pr["name"])},')
        lines.append(f'    badge: {ts_str(pr["badge"])},')
        lines.append(f'    description: {ts_str(pr["description"])},')
        lines.append(f'    longDescription: {ts_str(pr["longDescription"])},')
        lines.append(f'    image: withBase({ts_str(pr["image"])}),')
        lines.append(f'    alt: {ts_str(pr["alt"])},')
        lines.append(f'    cropClass: {ts_str(pr["cropClass"])},')
        lines.append(f'    uses: [{uses}],')
        lines.append(f'    group: {ts_str(pr["group"])},')
        lines.append(f'    featured: {str(pr["featured"]).lower()},')
        lines.append(f'    imageKind: "photo",')
        lines.append(f'    specs: [')
        lines.append(specs_ts)
        lines.append("    ],")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    OUT_TS.write_text("\n".join(lines) + "\n")
    print("Wrote", OUT_TS)

    # SEO extras
    seo_lines = []
    seo_lines.append("/** Auto-generated product SEO extras. */")
    seo_lines.append("export const productSeoExtra: Record<string, { title: string; description: string; h1: string }> = {")
    for pr in new_products:
        name = pr["name"]
        title = f"{name} | VanRobi"
        if len(title) > 60:
            title = title[:59] + "…"
        desc = f"{pr['description']} Via VanRobi, specialist BE & NL."
        if len(desc) > 155:
            desc = desc[:154] + "…"
        h1 = f"{name} — via VanRobi"
        seo_lines.append(f'  {ts_str(pr["id"])}: {{')
        seo_lines.append(f'    title: {ts_str(title)},')
        seo_lines.append(f'    description: {ts_str(desc)},')
        seo_lines.append(f'    h1: {ts_str(h1)},')
        seo_lines.append("  },")
    seo_lines.append("};")
    seo_lines.append("")
    OUT_SEO.write_text("\n".join(seo_lines) + "\n")
    print("Wrote", OUT_SEO)

    meta = {
        "golderos_count": len(products),
        "existing_mapped": len(skipped_existing),
        "skipped_dups": skipped_dup,
        "new_count": len(new_products),
        "new_ids_by_group": {},
        "img_fail": [{"id": a, "url": b} for a, b in img_fail],
        "missing_def": missing_def,
    }
    for pr in new_products:
        meta["new_ids_by_group"].setdefault(pr["group"], []).append(pr["id"])
    OUT_META.write_text(json.dumps(meta, indent=2, ensure_ascii=False))
    print("Wrote", OUT_META)
    print("TOTAL after merge would be", 21 + len(new_products))

if __name__ == "__main__":
    main()
