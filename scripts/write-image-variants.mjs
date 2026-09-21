#!/usr/bin/env node
/**
 * Lists avif/webp files that actually exist in public/, so <picture>
 * never points at a 404 (Safari/iOS shows a "?" and hides the photo).
 */
import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

export function writeImageVariants(root = process.cwd()) {
  const publicDir = join(root, "public");
  const files = [];
  function walk(dir) {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(avif|webp)$/i.test(entry.name)) {
        files.push(`/${relative(publicDir, full).split(sep).join("/")}`);
      }
    }
  }
  walk(publicDir);
  const avif = files.filter((f) => f.endsWith(".avif")).sort();
  const webp = files.filter((f) => f.endsWith(".webp")).sort();
  const body = `/** Auto-generated from public/. Do not edit. */
export const avifFiles = new Set<string>(${JSON.stringify(avif, null, 2)});
export const webpFiles = new Set<string>(${JSON.stringify(webp, null, 2)});
`;
  writeFileSync(join(root, "src/lib/image-variants.generated.ts"), body);
  return { avif: avif.length, webp: webp.length };
}

const invoked = process.argv[1] && process.argv[1].includes("write-image-variants");
if (invoked) {
  const result = writeImageVariants();
  console.log(`image-variants: ${result.avif} avif, ${result.webp} webp`);
}
