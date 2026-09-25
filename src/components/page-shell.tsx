import { useEffect, type ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { CompareBar } from "./compare-bar";
import { useLang } from "@/lib/i18n";
import { experience } from "@/lib/experience";
import { withBase } from "@/lib/base";
import { OptimizedImage } from "./optimized-image";

export function PageShell({ children }: { children: ReactNode }) {
  const lang = useLang();
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle("exp-v2", experience.visualRefresh);
    document.documentElement.classList.toggle("hero-read-fade", experience.heroReadFade);
    document.documentElement.classList.toggle("hero-glass", experience.heroGlass);
    document.documentElement.classList.toggle("hero-quiet", experience.heroQuiet);
  }, [lang]);

  return (
    <>
      <a className="skip-link" href="#main">
        {lang === "fr" ? "Aller au contenu" : "Naar inhoud"}
      </a>
      <div className="grain" aria-hidden />
      <SiteHeader />
      <main id="main" lang={lang}>
        {children}
      </main>
      <SiteFooter />
      <CompareBar />
    </>
  );
}

export function PageHero({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <section className="ice-fallback relative overflow-hidden border-b border-line px-5 pb-16 pt-32 md:px-8 md:pt-40">
      <OptimizedImage
        src={withBase("/worlds/ice-bank.jpg")}
        alt=""
        width={1792}
        height={907}
        aria-hidden="true"
        priority
        className="hero-ice-photo pointer-events-none absolute inset-0 h-full w-full"
      />
      <div className="hero-read-veil" aria-hidden />
      <div className="hero-veil pointer-events-none absolute inset-0 bg-gradient-to-r from-bg/75 via-bg/25 to-transparent" />
      <div className="hero-veil pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/25 via-transparent to-bg/10" />
      <div className="relative mx-auto max-w-[1220px]">
        <div className="hero-copy max-w-3xl">
          <p className="kicker">{kicker}</p>
          <h1 className="mt-4 max-w-4xl text-5xl text-white md:text-7xl">{title}</h1>
          <p className="hero-lede mt-6 max-w-xl text-base font-medium leading-relaxed md:text-lg">
            {lede}
          </p>
        </div>
      </div>
    </section>
  );
}
