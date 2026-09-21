#!/usr/bin/env node
/**
 * Prepare TanStack SPA output for GitHub Pages under /vanrobi/.
 *
 * GH Pages only returns HTTP 200 for files that exist on disk. A lone 404.html
 * SPA fallback still responds with status 404 (bad for SEO/crawlers). So we
 * materialize every known client route as path/index.html (copy of the shell),
 * plus robots.txt + sitemap.xml.
 */
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "dist", "client");
const shellPath = join(dir, "_shell.html");
const siteOrigin = "https://thenaturelover343-jpg.github.io";
const basePath = "/vanrobi";

if (!existsSync(shellPath)) {
  console.error("pages-prepare: missing dist/client/_shell.html");
  process.exit(1);
}

let html = readFileSync(shellPath, "utf8");
const assets = join(dir, "assets");
const cssFiles = existsSync(assets)
  ? readdirSync(assets).filter((f) => f.startsWith("styles-") && f.endsWith(".css"))
  : [];
const missing = [...html.matchAll(/\/vanrobi\/assets\/(styles-[^"]+\.css)/g)].map((m) => m[1]);
for (const name of missing) {
  if (!existsSync(join(assets, name)) && cssFiles[0]) {
    html = html.replaceAll(`/vanrobi/assets/${name}`, `/vanrobi/assets/${cssFiles[0]}`);
  }
}

function ensureDir(filePath) {
  mkdirSync(dirname(filePath), { recursive: true });
}

function writeShellAt(relPath) {
  const target = join(dir, relPath);
  ensureDir(target);
  writeFileSync(target, html);
}

function extractQuotedField(fileRel, field) {
  const file = join(root, fileRel);
  if (!existsSync(file)) return [];
  const src = readFileSync(file, "utf8");
  const re = new RegExp(`\\b${field}:\\s*"([^"]+)"`, "g");
  const out = [];
  for (const m of src.matchAll(re)) out.push(m[1]);
  return [...new Set(out)];
}

const productIds = [
  ...extractQuotedField("src/lib/products.ts", "id"),
  ...extractQuotedField("src/lib/products-extra.generated.ts", "id"),
];
const guideSlugs = extractQuotedField("src/lib/guides.ts", "slug");

/** Static app routes (no leading/trailing slash). */
const staticRoutes = [
  "contact",
  "diensten",
  "faq",
  "over-ons",
  "regio",
  "vergelijk",
  "voor-wie",
  "producten",
  "gids",
  "fr",
  "fr/a-propos",
  "fr/contact",
  "fr/faq",
  "fr/services",
  "fr/produits",
];

const dynamicRoutes = [
  ...productIds.map((id) => `producten/${id}`),
  ...productIds.map((id) => `fr/produits/${id}`),
  ...guideSlugs.map((slug) => `gids/${slug}`),
];

const allRoutes = [...staticRoutes, ...dynamicRoutes];

writeShellAt("index.html");
writeShellAt("404.html");
writeFileSync(join(dir, ".nojekyll"), "");

for (const route of allRoutes) {
  writeShellAt(join(route, "index.html"));
}

/** Legacy paths → current routes (meta refresh + link for crawlers). */
const redirects = [
  ["gidsen", "gids"],
  ["gidsen/index.html", "gids"],
  ["fr/guides", "gids"],
  ["products", "producten"],
  ["about", "over-ons"],
  ["services", "diensten"],
];

function redirectHtml(toPath) {
  const dest = `${basePath}/${toPath.replace(/^\/+|\/+$/g, "")}/`;
  return `<!DOCTYPE html><html lang="nl"><head><meta charset="utf-8"/><meta http-equiv="refresh" content="0;url=${dest}"/><link rel="canonical" href="${siteOrigin}${dest}"/><title>Redirect…</title><script>location.replace(${JSON.stringify(dest)})</script></head><body><p><a href="${dest}">Doorsturen…</a></p></body></html>\n`;
}

for (const [from, to] of redirects) {
  const target = from.endsWith(".html")
    ? join(dir, from)
    : join(dir, from, "index.html");
  ensureDir(target);
  writeFileSync(target, redirectHtml(to));
}

const sitemapPaths = ["", ...allRoutes];
const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths
  .map((p) => {
    const loc = p ? `${siteOrigin}${basePath}/${p}/` : `${siteOrigin}${basePath}/`;
    return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
  })
  .join("\n")}
</urlset>
`;
writeFileSync(join(dir, "sitemap.xml"), sitemap);

const robots = `User-agent: *
Allow: /

Sitemap: ${siteOrigin}${basePath}/sitemap.xml
`;
writeFileSync(join(dir, "robots.txt"), robots);

console.log(
  `pages-prepare: index.html + 404.html + ${allRoutes.length} routes + ${redirects.length} redirects + sitemap/robots (products=${productIds.length}, guides=${guideSlugs.length})`,
);
