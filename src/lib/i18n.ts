import { useRouterState } from "@tanstack/react-router";

export function isFrPath(pathname: string) {
  return pathname === "/fr" || pathname.startsWith("/fr/");
}

export function useLang(): "nl" | "fr" {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return isFrPath(pathname) ? "fr" : "nl";
}

export function counterpartPath(pathname: string): string {
  if (isFrPath(pathname)) {
    if (pathname === "/fr" || pathname === "/fr/") return "/";
    if (pathname.startsWith("/fr/produits/")) {
      const id = pathname.replace("/fr/produits/", "").replace(/\/$/, "");
      return id ? `/producten/${id}` : "/producten";
    }
    if (pathname.startsWith("/fr/produits")) return "/producten";
    if (pathname.startsWith("/fr/services")) return "/diensten";
    if (pathname.startsWith("/fr/a-propos")) return "/over-ons";
    if (pathname.startsWith("/fr/faq")) return "/faq";
    if (pathname.startsWith("/fr/contact")) return "/contact";
    if (pathname.startsWith("/fr/refroidisseurs-biere")) return "/bierkoelers";
    if (pathname.startsWith("/fr/refroidisseurs-fut")) return "/kegkoelers";
    if (pathname.startsWith("/fr/serpentins")) return "/serpentijnen";
    if (pathname.startsWith("/fr/colonnes-robinets")) return "/tap-zuilen";
    if (pathname.startsWith("/fr/pieces")) return "/onderdelen";
    if (pathname.startsWith("/fr/refroidisseurs-glycol")) return "/glycolkoelers";
    return "/";
  }
  if (pathname === "/" || pathname === "") return "/fr";
  if (pathname.startsWith("/producten/")) {
    const id = pathname.replace("/producten/", "").replace(/\/$/, "");
    return id ? `/fr/produits/${id}` : "/fr/produits";
  }
  if (pathname.startsWith("/producten")) return "/fr/produits";
  if (pathname.startsWith("/diensten")) return "/fr/services";
  if (pathname.startsWith("/over-ons")) return "/fr/a-propos";
  if (pathname.startsWith("/faq")) return "/fr/faq";
  if (pathname.startsWith("/contact")) return "/fr/contact";
  if (pathname.startsWith("/bierkoelers")) return "/fr/refroidisseurs-biere";
  if (pathname.startsWith("/kegkoelers")) return "/fr/refroidisseurs-fut";
  if (pathname.startsWith("/serpentijnen")) return "/fr/serpentins";
  if (pathname.startsWith("/tap-zuilen")) return "/fr/colonnes-robinets";
  if (pathname.startsWith("/onderdelen")) return "/fr/pieces";
  if (pathname.startsWith("/glycolkoelers")) return "/fr/refroidisseurs-glycol";
  return "/fr";
}
