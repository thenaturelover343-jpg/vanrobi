/**
 * Static export keeps root <html lang="nl">. Rewrite FR pages to lang="fr".
 */
import fs from "fs";
import path from "path";

const root = path.join(process.cwd(), "out", "fr");
if (!fs.existsSync(root)) {
  console.warn("fix-fr-html-lang: out/fr missing, skip");
  process.exit(0);
}

let n = 0;
function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (ent.name.endsWith(".html")) {
      let html = fs.readFileSync(p, "utf8");
      const next = html.replace(/<html(\s[^>]*?)lang="nl"/i, '<html$1lang="fr"');
      if (next !== html) {
        fs.writeFileSync(p, next);
        n++;
      }
    }
  }
}
walk(root);
console.log(`fix-fr-html-lang: updated ${n} FR HTML files`);
