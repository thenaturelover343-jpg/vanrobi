/** Paths are root-relative in this app (no GitHub Pages prefix). */
export function withBase(path: string): string {
  if (!path || path === "/") return "/";
  const trimmed = path.replace(/\/+$/, "");
  return trimmed || "/";
}
