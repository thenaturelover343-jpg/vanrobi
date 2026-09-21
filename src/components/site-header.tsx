import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { nav } from "@/lib/site";
import { frNav } from "@/lib/fr";
import { useLang } from "@/lib/i18n";
import { LangSwitch } from "./lang-switch";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = lang === "fr" ? frNav : nav;
  const home = lang === "fr" ? "/fr" : "/";
  const ctaHref = lang === "fr" ? "/fr/contact" : "/contact";
  const ctaLabel = lang === "fr" ? "Devis" : "Offerte";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 flex h-[3.75rem] items-center justify-between px-5 transition-[background,border-color] duration-300 md:px-8",
        scrolled || open
          ? "border-b border-line bg-bg/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a href={home} className="flex items-center gap-3" aria-label="VanRobi home">
        <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden>
          <path
            d="M4 6 L14 24 L24 6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9 14h10" stroke="#7AD4F0" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        <span className="font-display text-[1.35rem] tracking-wide">VanRobi</span>
      </a>

      <nav className="hidden items-center gap-5 xl:flex" aria-label={lang === "fr" ? "Navigation" : "Hoofdnavigatie"}>
        {links.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "text-[0.68rem] font-medium tracking-[0.1em] uppercase transition-colors",
              pathname === item.href || pathname.startsWith(item.href + "/")
                ? "text-ice"
                : "text-muted hover:text-fg",
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <LangSwitch className="hidden sm:flex" />
        <a href={ctaHref} className="btn btn-ice hidden sm:inline-flex">
          {ctaLabel}
        </a>
        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
          aria-expanded={open}
          aria-label={open ? (lang === "fr" ? "Fermer le menu" : "Menu sluiten") : lang === "fr" ? "Ouvrir le menu" : "Menu openen"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("block h-px w-5 bg-fg transition-transform", open && "translate-y-[4px] rotate-45")} />
          <span className={cn("block h-px w-5 bg-fg transition-transform", open && "-translate-y-[4px] -rotate-45")} />
        </button>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-[3.75rem] flex h-[calc(100dvh-3.75rem)] flex-col gap-1 overflow-y-auto bg-bg px-6 py-8 xl:hidden">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="font-display border-b border-line py-4 text-4xl">
              {item.label}
            </a>
          ))}
          <LangSwitch className="mt-6" />
          <a href={ctaHref} className="btn btn-ice mt-8 self-start">
            {lang === "fr" ? "Demander un devis" : "Offerte aanvragen"}
          </a>
        </div>
      ) : null}
    </header>
  );
}
