import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { IceBankCanvas } from "./ice-bank-canvas";
import { useCold } from "@/lib/cold";
import { growFromIce } from "@/lib/products";
import { experience, tagline } from "@/lib/experience";

export function HomeHero() {
  const setGrow = useCold((s) => s.setGrow);
  const setTemp = useCold((s) => s.setTemp);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = window.innerHeight;
      const p = Math.min(1, y / (h * 0.9));
      setGrow(0.18 + p * 0.28);
      setTemp(6.2 - p * 6.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [setGrow, setTemp]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {experience.visualRefresh ? null : (
        <div className="hero-canvas absolute inset-0">
          <IceBankCanvas />
        </div>
      )}
      <div className="hero-frost" aria-hidden />
      <div className="hero-veil pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
      <div className="hero-veil pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1220px] flex-col justify-end px-5 pb-20 pt-28 md:flex-row md:items-end md:justify-between md:px-8 md:pb-24">
        <div className="max-w-xl">
          <p className="kicker">Ijsbankkoelers · België & Nederland</p>
          <p className="hero-slogan mt-5 font-display text-2xl italic text-ice md:text-3xl">
            {tagline()}
          </p>
          <h1 className="mt-5 font-display text-[1.85rem] leading-[1.08] text-fg md:text-[2.75rem]">
            Professionele ijsbankkoelers voor horeca in België & Nederland
          </h1>
          <p className="mt-6 max-w-md text-[1.02rem] text-muted">
            Via VanRobi, specialist in ijsbankkoelers voor België en Nederland. Professionele koeling voor bars, restaurants, events en installateurs die stabiele tapkoude nodig hebben.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-ice">
              Vraag een offerte
            </Link>
            <Link to="/producten" className="btn btn-ghost">
              Bekijk machines
            </Link>
          </div>
          <p className="mt-6 flex gap-5 text-[0.68rem] tracking-[0.16em] text-muted uppercase">
            <span>Bars</span>
            <span>Events</span>
            <span>Installateurs</span>
          </p>
        </div>

        <aside className="mt-10 w-full max-w-sm md:mt-0">
          <div className="hero-card photo-well aspect-[4/5] max-h-[58vh]">
            <img
              src="/products/goldy.jpg"
              alt="Goldy over-bar ijsbankkoeler"
              width={900}
              height={1100}
            />
            <div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-3 gap-px border-t border-line bg-bg/80 p-3 backdrop-blur-sm">
              {[
                ["Model", "Goldy"],
                ["IJsreserve", "9 kg"],
                ["Debiet", "44 L/u"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-[0.58rem] tracking-[0.16em] text-muted uppercase">{k}</p>
                  <p className="spec-num mt-1 text-sm text-fg">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <button
        type="button"
        className="scroll-cue absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-[0.65rem] tracking-[0.2em] uppercase md:left-8 md:translate-x-0"
        onClick={() => {
          document.getElementById("statement")?.scrollIntoView({ behavior: "smooth" });
          useCold.getState().setGrow(growFromIce(9));
        }}
      >
        Scroll
        <i aria-hidden />
      </button>
    </section>
  );
}
