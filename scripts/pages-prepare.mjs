#!/usr/bin/env node
/**
 * After TanStack prerender: keep real HTML per route, add GH Pages fallbacks
 * (`path.html` + `path/index.html`), 404.html, .nojekyll, sitemap.
 */
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
  copyFileSync,
  statSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";

const root = process.cwd();
const dir = join(root, "dist", "client");
if (!existsSync(dir)) {
  console.error("pages-prepare: missing dist/client");
  process.exit(1);
}

function idsFrom(file, key) {
  const text = readFileSync(join(root, file), "utf8");
  return [...text.matchAll(new RegExp(`${key}:\\s*"([^"]+)"`, "g"))]
    .map((m) => m[1])
    .filter((id) => id !== "string");
}

const products = [
  ...new Set([
    ...idsFrom("src/lib/products.ts", "id"),
    ...idsFrom("src/lib/products-extra.generated.ts", "id"),
  ]),
];
const guides = idsFrom("src/lib/guides.ts", "slug");
const staticPaths = [
  "producten",
  "contact",
  "diensten",
  "faq",
  "gids",
  "over-ons",
  "voor-wie",
  "regio",
  "vergelijk",
  "fr",
  "fr/produits",
  "fr/contact",
  "fr/services",
  "fr/faq",
  "fr/a-propos",
];
const routes = [
  ...staticPaths,
  ...products.map((id) => `producten/${id}`),
  ...products.map((id) => `fr/produits/${id}`),
  ...guides.map((s) => `gids/${s}`),
  "gids/ijsbankkoeler-vs-gamko",
];

function collectHtml(start, acc = []) {
  for (const name of readdirSync(start)) {
    if (name === "assets" || name === "__grok") continue;
    const full = join(start, name);
    if (statSync(full).isDirectory()) collectHtml(full, acc);
    else if (name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

function siteFileExists(urlPath) {
  const clean = String(urlPath || "")
    .replace(/^https?:\/\/[^/]+/i, "")
    .split("?")[0]
    .replace(/^\/vanrobi(?=\/|$)/, "");
  const rel = clean.replace(/^\//, "");
  if (!rel) return false;
  return existsSync(join(dir, rel)) || existsSync(join(root, "public", rel));
}

/** Drop <source> tags whose file 404s — Safari/iOS otherwise shows a "?". */
function stripMissingSources(html) {
  return html.replace(/<source\b[^>]*\/?>/gi, (tag) => {
    const src = /srcSet=["']([^"']+)["']/i.exec(tag)?.[1] || /srcset=["']([^"']+)["']/i.exec(tag)?.[1];
    if (!src) return "";
    return siteFileExists(src) ? tag : "";
  });
}

const htmlFiles = collectHtml(dir);
const home = htmlFiles.find((f) => relative(dir, f) === "index.html");
const sample = home ? readFileSync(home, "utf8") : "";
if (!home || !/h1/i.test(sample)) {
  console.error("pages-prepare: prerender did not emit a real index.html with H1");
  process.exit(1);
}

function findHtmlFor(rel) {
  const candidates = [
    join(dir, rel, "index.html"),
    join(dir, `${rel}.html`),
    join(dir, "vanrobi", rel, "index.html"),
    join(dir, "vanrobi", `${rel}.html`),
  ];
  return candidates.find((p) => existsSync(p));
}

function write(path, html) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, stripMissingSources(html));
}

let filled = 0;
for (const rel of routes) {
  const src = findHtmlFor(rel);
  const html = src ? readFileSync(src, "utf8") : sample;
  if (/<h1/i.test(html) && src) filled += 1;
  write(join(dir, rel, "index.html"), html);
  write(join(dir, `${rel}.html`), html);
}

const notFound = `<!DOCTYPE html><html lang="nl"><head><meta charset="utf-8"/><meta name="robots" content="noindex"/><title>Pagina niet gevonden — VanRobi</title></head><body><h1>Pagina niet gevonden</h1><p>Deze pagina bestaat niet.</p><p><a href="/vanrobi/">Terug naar VanRobi</a></p></body></html>`;
write(join(dir, "404.html"), existsSync(join(dir, "404.html")) ? readFileSync(join(dir, "404.html"), "utf8") : notFound);
write(join(dir, ".nojekyll"), "");

const origin = "https://www.vanrobi.be";
const urls = ["/", ...routes.map((r) => `/${r}`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url><loc>${origin}${u === "/" ? "/" : u}</loc><changefreq>weekly</changefreq></url>`,
  )
  .join("\n")}
</urlset>
`;
write(join(dir, "sitemap.xml"), sitemap);

for (const file of collectHtml(dir)) {
  const next = stripMissingSources(readFileSync(file, "utf8"));
  writeFileSync(file, next);
}

console.log(
  `pages-prepare: ${routes.length} routes, ${filled} with own prerender HTML, home H1=${/<h1/i.test(sample)}`,
);
