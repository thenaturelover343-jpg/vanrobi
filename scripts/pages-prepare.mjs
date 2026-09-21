#!/usr/bin/env node
import { copyFileSync, existsSync, readdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = join(process.cwd(), "dist", "client");
const shell = join(dir, "_shell.html");
if (!existsSync(shell)) {
  console.error("pages-prepare: missing dist/client/_shell.html");
  process.exit(1);
}

let html = readFileSync(shell, "utf8");
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

writeFileSync(join(dir, "index.html"), html);
writeFileSync(join(dir, "404.html"), html);
writeFileSync(join(dir, ".nojekyll"), "");
console.log("pages-prepare: index.html + 404.html ready");
