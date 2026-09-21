#!/usr/bin/env python3
"""Generate compact one-page PDF spec sheets from the TypeScript product catalog."""

from __future__ import annotations

import json
import re
import unicodedata
from html import escape
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Paragraph, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "spec-sheets"
SOURCES = [ROOT / "src/lib/products.ts", ROOT / "src/lib/products-extra.generated.ts"]

ICE = HexColor("#64C7E3")
DEEP = HexColor("#103B49")
INK = HexColor("#10242D")
MUTED = HexColor("#60747D")
LINE = HexColor("#D8E3E8")
PAPER = HexColor("#F7F9FA")
FONT = "DejaVuSans"
FONT_BOLD = "DejaVuSans-Bold"

pdfmetrics.registerFont(TTFont(FONT, "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont(FONT_BOLD, "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))


def ascii_text(value: str) -> str:
    replacements = {
        "–": "-",
        "—": "-",
        "‑": "-",
        "’": "'",
        "“": '"',
        "”": '"',
        "Ø": "diam. ",
        "₂": "2",
        "±": "+/-",
        "·": " / ",
    }
    for old, new in replacements.items():
        value = value.replace(old, new)
    return unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode("ascii")


def balanced_objects(source: str, marker: str) -> list[str]:
    start = source.index(marker)
    assignment = source.index("=", start)
    array_start = source.index("[", assignment)
    objects: list[str] = []
    depth = 0
    object_start = None
    in_string = False
    escaped = False
    for index in range(array_start + 1, len(source)):
        char = source[index]
        if in_string:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                in_string = False
            continue
        if char == '"':
            in_string = True
        elif char == "{":
            if depth == 0:
                object_start = index
            depth += 1
        elif char == "}":
            depth -= 1
            if depth == 0 and object_start is not None:
                objects.append(source[object_start : index + 1])
                object_start = None
        elif char == "]" and depth == 0:
            break
    return objects


def string_field(block: str, key: str, default: str = "") -> str:
    match = re.search(rf"\b{re.escape(key)}:\s*(\"(?:\\.|[^\"])*\")", block)
    return json.loads(match.group(1)) if match else default


def array_field(block: str, key: str) -> list[str]:
    match = re.search(rf"\b{re.escape(key)}:\s*\[([^\]]*)\]", block, re.S)
    return re.findall(r'"([^\"]+)"', match.group(1)) if match else []


def products() -> list[dict]:
    result = []
    for source_path, marker in zip(SOURCES, ("const productsCore", "productsExtra")):
        source = source_path.read_text(encoding="utf-8")
        for block in balanced_objects(source, marker):
            product_id = string_field(block, "id")
            if not product_id:
                continue
            specs_match = re.search(r"\bspecs:\s*\[(.*?)\]\s*,?\s*}", block, re.S)
            specs = []
            if specs_match:
                for label, value in re.findall(
                    r'\{\s*label:\s*("(?:\\.|[^\"])*")\s*,\s*value:\s*("(?:\\.|[^\"])*")\s*}',
                    specs_match.group(1),
                    re.S,
                ):
                    specs.append((json.loads(label), json.loads(value)))
            result.append(
                {
                    "id": product_id,
                    "index": string_field(block, "index"),
                    "name": string_field(block, "name"),
                    "badge": string_field(block, "badge"),
                    "description": string_field(block, "longDescription")
                    or string_field(block, "description"),
                    "uses": array_field(block, "uses"),
                    "specs": specs,
                }
            )
    return result


def draw_sheet(product: dict, path: Path) -> None:
    width, height = A4
    canvas = Canvas(str(path), pagesize=A4, pageCompression=1, invariant=1)
    canvas.setTitle(f"VanRobi productsheet - {ascii_text(product['name'])}")
    canvas.setAuthor("VanRobi")

    canvas.setFillColor(DEEP)
    canvas.rect(0, height - 72 * mm, width, 72 * mm, fill=1, stroke=0)
    canvas.setFillColor(ICE)
    canvas.rect(18 * mm, height - 57 * mm, 2.2 * mm, 30 * mm, fill=1, stroke=0)

    canvas.setFillColor(HexColor("#FFFFFF"))
    canvas.setFont(FONT_BOLD, 9)
    canvas.drawString(25 * mm, height - 24 * mm, "VANROBI  /  PRODUCTSPECIFICATIE")
    name = ascii_text(product["name"])
    name_size = 28
    while stringWidth(name, FONT_BOLD, name_size) > width - 50 * mm and name_size > 15:
        name_size -= 1
    canvas.setFont(FONT_BOLD, name_size)
    canvas.drawString(25 * mm, height - 40 * mm, name)
    canvas.setFillColor(ICE)
    canvas.setFont(FONT_BOLD, 10)
    canvas.drawString(25 * mm, height - 50 * mm, ascii_text(product["badge"]).upper())
    canvas.setFillColor(HexColor("#BBD3DC"))
    canvas.setFont(FONT, 8)
    canvas.drawRightString(width - 18 * mm, height - 24 * mm, f"REF. {product['index']}")

    description_style = ParagraphStyle(
        "description",
        fontName=FONT,
        fontSize=10,
        leading=15,
        textColor=INK,
        alignment=TA_LEFT,
    )
    description = Paragraph(ascii_text(product["description"]), description_style)
    description.wrapOn(canvas, width - 36 * mm, 42 * mm)
    description.drawOn(canvas, 18 * mm, height - 100 * mm)

    table_top = height - 112 * mm
    cell_label = ParagraphStyle(
        "cell-label", fontName=FONT_BOLD, fontSize=8.5, leading=11, textColor=INK
    )
    cell_value = ParagraphStyle(
        "cell-value", fontName=FONT, fontSize=8.5, leading=11, textColor=INK
    )
    data = [["KENMERK", "WAARDE"]]
    data.extend(
        [
            Paragraph(escape(ascii_text(label)), cell_label),
            Paragraph(escape(ascii_text(value)), cell_value),
        ]
        for label, value in product["specs"]
    )
    if not product["specs"]:
        data.append(["Specificatie", "Advies op aanvraag"])
    table = Table(data, colWidths=[58 * mm, 116 * mm], repeatRows=1)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), DEEP),
                ("TEXTCOLOR", (0, 0), (-1, 0), HexColor("#FFFFFF")),
                ("FONTNAME", (0, 0), (-1, 0), FONT_BOLD),
                ("FONTSIZE", (0, 0), (-1, 0), 8),
                ("FONTNAME", (0, 1), (0, -1), FONT_BOLD),
                ("FONTNAME", (1, 1), (1, -1), FONT),
                ("FONTSIZE", (0, 1), (-1, -1), 9),
                ("TEXTCOLOR", (0, 1), (-1, -1), INK),
                ("BACKGROUND", (0, 1), (-1, -1), PAPER),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [PAPER, HexColor("#FFFFFF")]),
                ("GRID", (0, 0), (-1, -1), 0.5, LINE),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 4 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 3 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3 * mm),
            ]
        )
    )
    table_width, table_height = table.wrap(width - 36 * mm, 110 * mm)
    table.drawOn(canvas, 18 * mm, table_top - table_height)

    uses = " / ".join(ascii_text(use).upper() for use in product["uses"]) or "ADVIES OP MAAT"
    footer_y = 27 * mm
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, footer_y + 12 * mm, width - 18 * mm, footer_y + 12 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont(FONT_BOLD, 7.5)
    canvas.drawString(18 * mm, footer_y + 4 * mm, uses)
    canvas.setFont(FONT, 7.5)
    canvas.drawRightString(width - 18 * mm, footer_y + 4 * mm, "vanrobi.be  /  info@vanrobi.be")
    canvas.setFillColor(DEEP)
    canvas.setFont(FONT_BOLD, 8)
    canvas.drawString(18 * mm, 14 * mm, "Technische waarden onder voorbehoud. Vraag VanRobi om configuratieadvies.")

    canvas.showPage()
    canvas.save()


def main() -> None:
    catalog = products()
    if len(catalog) != 93:
        raise SystemExit(f"Expected 93 products, found {len(catalog)}")
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for product in catalog:
        draw_sheet(product, OUTPUT / f"{product['id']}.pdf")
    print(f"Generated {len(catalog)} PDF spec sheets in {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
