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
    <section className="relative overflow-hidden border-b border-line px-5 pb-16 pt-32 md:px-8 md:pt-40">
      <OptimizedImage
        src={withBase("/worlds/ice-bank.jpg")}
        alt=""
        width={1792}
        height={907}
        aria-hidden="true"
        priority
        className="hero-ice-photo pointer-events-none absolute inset-0 h-full w-full"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg/55 via-bg/18 to-transparent" />
      <div className="relative mx-auto max-w-[1220px]">
        <div className="pointer-events-none absolute -inset-y-8 -left-8 w-[min(100%,36rem)] bg-gradient-to-r from-bg/80 via-bg/45 to-transparent" />
        <div className="relative">
          <p className="kicker">{kicker}</p>
          <h1 className="mt-4 max-w-4xl text-5xl text-fg md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-xl text-base text-fg md:text-lg">{lede}</p>
        </div>
      </div>
    </section>
  );
}
