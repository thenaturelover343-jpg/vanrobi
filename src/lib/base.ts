/** Prefix public paths for GitHub Pages (`/vanrobi`) or local (`/`). */
const prefix = (() => {
  const raw = import.meta.env.BASE_URL || "/";
  if (raw === "/") return "";
  return raw.replace(/\/+$/, "");
})();

export function withBase(path: string): string {
  if (!path || path === "/") return prefix || "/";
  if (/^(https?:|mailto:|tel:|#)/i.test(path)) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return prefix ? `${prefix}${p}` : p;
}
