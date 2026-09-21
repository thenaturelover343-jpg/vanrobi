#!/usr/bin/env node
/**
 * GitHub Pages has no server router. Nested URLs 404 unless a real file exists.
 * Copy the SPA shell to every route as both `path.html` and `path/index.html`.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const dir = join(root, "dist", "client");
const shellPath = join(dir, "_shell.html");
if (!existsSync(shellPath)) {
  console.error("pages-prepare: missing dist/client/_shell.html");
  process.exit(1);
}

let html = readFileSync(shellPath, "utf8");
const assets = join(dir, "assets");
const cssFiles = existsSync(assets)
  ? readdirSync(assets).filter((f) => f.startsWith("styles-") && f.endsWith(".css"))
  : [];
for (const match of html.matchAll(/\/vanrobi\/assets\/(styles-[^"]+\.css)/g)) {
  const name = match[1];
  if (!existsSync(join(assets, name)) && cssFiles[0]) {
    html = html.replaceAll(`/vanrobi/assets/${name}`, `/vanrobi/assets/${cssFiles[0]}`);
  }
}

function idsFrom(file, key) {
  const text = readFileSync(join(root, file), "utf8");
  const re = new RegExp(`${key}:\\s*"([^"]+)"`, "g");
  return [...text.matchAll(re)].map((m) => m[1]);
}

const productIds = [
  ...idsFrom("src/lib/products.ts", "id"),
  ...idsFrom("src/lib/products-extra.generated.ts", "id"),
].filter((id) => id !== "string");
const uniqueProducts = [...new Set(productIds)];
const guideSlugs = idsFrom("src/lib/guides.ts", "slug");

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

const paths = [
  ...staticPaths,
  ...uniqueProducts.map((id) => `producten/${id}`),
  ...uniqueProducts.map((id) => `fr/produits/${id}`),
  ...guideSlugs.map((slug) => `gids/${slug}`),
];

function writeRoute(rel) {
  const htmlFile = join(dir, `${rel}.html`);
  mkdirSync(dirname(htmlFile), { recursive: true });
  writeFileSync(htmlFile, html);
  const indexFile = join(dir, rel, "index.html");
  mkdirSync(dirname(indexFile), { recursive: true });
  writeFileSync(indexFile, html);
}

writeFileSync(join(dir, "index.html"), html);
writeFileSync(join(dir, "404.html"), html);
writeFileSync(join(dir, ".nojekyll"), "");

for (const rel of paths) writeRoute(rel);

console.log(
  `pages-prepare: ${paths.length} routes + 404.html (${uniqueProducts.length} producten, ${guideSlugs.length} gidsen)`,
);
