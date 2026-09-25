import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useCold } from "@/lib/cold";
import { tagline } from "@/lib/experience";
import { withBase } from "@/lib/base";
import { MagneticCta } from "./magnetic-cta";
import { OptimizedImage } from "./optimized-image";
import { useLang } from "@/lib/i18n";
import { frHero } from "@/lib/fr";

type StoryState = {
  progress: number;
  temperature: number;
};

function CountUp({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(value);
      return;
    }

    let frame = 0;
    const started = performance.now();
    const duration = 900;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setShown(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <span aria-label={`${value} ${suffix}`}>
      <span aria-hidden="true">{shown}</span> <small aria-hidden="true">{suffix}</small>
    </span>
  );
}

function HeroMachine({ story }: { story: StoryState }) {
  const lang = useLang();
  const fr = lang === "fr";
  const specsRef = useRef<HTMLDivElement>(null);
  const [specsVisible, setSpecsVisible] = useState(false);
  const fillHeight = 32 + story.progress * 126;
  const fillY = 183 - fillHeight;
  const phase = fr
    ? story.progress < 0.34
      ? frHero.phases[0]
      : story.progress < 0.76
        ? frHero.phases[1]
        : frHero.phases[2]
    : story.progress < 0.34
      ? "IJsbank bouwt op"
      : story.progress < 0.76
        ? "Piekbelasting"
        : "Koude blijft stabiel";

  useEffect(() => {
    const node = specsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSpecsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hero-machine mt-3 w-full max-w-md shrink-0 md:mt-0">
      {/* Mobile: compact but complete card so H1+machine fit in sticky 100svh. md+: fuller aspect card. */}
      <div className="hero-story-card relative h-[13.5rem] max-h-[38svh] overflow-hidden border border-line bg-bg-2 md:aspect-[4/5] md:h-auto md:max-h-none">
        <OptimizedImage
          src={withBase("/products/goldy.jpg")}
          alt="Goldy over-bar ijsbankkoeler"
          width={900}
          height={1100}
          priority
          className="image-grade absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/70 to-bg" />

        <div className="absolute inset-x-3 top-3 z-10 flex items-center justify-between gap-2 md:inset-x-5 md:top-5 md:gap-3">
          <span className="text-[0.55rem] tracking-[0.14em] text-ice uppercase md:text-[0.6rem] md:tracking-[0.16em]">
            {phase}
          </span>
          <span className="spec-num border border-ice/40 bg-bg/80 px-2 py-0.5 font-display text-lg text-fg backdrop-blur-sm md:px-3 md:py-1 md:text-xl">
            {story.temperature.toFixed(1)}°C
          </span>
        </div>

        <svg
          viewBox="0 0 280 220"
          className="absolute inset-x-0 top-9 z-10 mx-auto h-[46%] w-auto max-w-[72%] md:top-14 md:h-[52%] md:max-w-[82%]"
          role="img"
          aria-label={`IJsbank voor piekbelasting, ${Math.round(story.progress * 100)} procent opgebouwd`}
        >
          <defs>
            <linearGradient id="hero-ice-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#e8f9ff" stopOpacity="0.92" />
              <stop offset="0.55" stopColor="#7ad4f0" stopOpacity="0.58" />
              <stop offset="1" stopColor="#2a9bb8" stopOpacity="0.28" />
            </linearGradient>
            <clipPath id="hero-tank-clip">
              <rect x="54" y="25" width="172" height="158" rx="4" />
            </clipPath>
          </defs>
          <rect
            x="50"
            y="21"
            width="180"
            height="166"
            rx="6"
            fill="#05080c"
            fillOpacity="0.72"
            stroke="#7ad4f0"
            strokeOpacity="0.48"
          />
          <g clipPath="url(#hero-tank-clip)">
            <rect
              className="hero-ice-fill"
              x="54"
              y={fillY}
              width="172"
              height={fillHeight}
              fill="url(#hero-ice-gradient)"
            />
            <path
              className="hero-ice-wave"
              d={`M54 ${fillY + 3} Q82 ${fillY - 5} 110 ${fillY + 3} T166 ${fillY + 3} T226 ${fillY + 3}`}
              fill="none"
              stroke="#e8f9ff"
              strokeOpacity="0.9"
              strokeWidth="3"
            />
          </g>
          <path
            className="hero-coil"
            d="M88 45 v112 c0 20 24 20 24 0 V55 c0-20 24-20 24 0 v102 c0 20 24 20 24 0 V55 c0-20 24-20 24 0 v102"
            fill="none"
            stroke="#e8f2f6"
            strokeOpacity="0.72"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            className="hero-flow"
            d="M74 199 H206"
            fill="none"
            stroke="#7ad4f0"
            strokeWidth="2"
            strokeDasharray="5 7"
          />
          <circle className="hero-pulse" cx="74" cy="199" r="4" fill="#7ad4f0" />
          <circle className="hero-pulse hero-pulse-late" cx="206" cy="199" r="4" fill="#7ad4f0" />
          <text x="140" y="214" fill="#8aa0ad" textAnchor="middle" fontSize="8" letterSpacing="2">
            {fr ? frHero.tap : "STABIELE TAPKOUDE"}
          </text>
        </svg>

        <div
          ref={specsRef}
          className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-3 gap-px border-t border-line bg-bg/92 backdrop-blur-sm"
        >
          <div className="px-2 py-2 md:p-4">
            <p className="text-[0.5rem] tracking-[0.14em] text-muted uppercase md:text-[0.55rem] md:tracking-[0.16em]">
              Model
            </p>
            <p className="mt-1 font-display text-xl text-fg md:mt-2 md:text-3xl">Goldy</p>
          </div>
          <div className="px-2 py-2 md:p-4">
            <p className="text-[0.5rem] tracking-[0.14em] text-muted uppercase md:text-[0.55rem] md:tracking-[0.16em]">
              {fr ? frHero.iceReserve : "IJsreserve"}
            </p>
            <p className="spec-num mt-1 font-display text-xl text-fg md:mt-2 md:text-3xl">
              <CountUp value={9} suffix="kg" active={specsVisible} />
            </p>
          </div>
          <div className="px-2 py-2 md:p-4">
            <p className="text-[0.5rem] tracking-[0.14em] text-muted uppercase md:text-[0.55rem] md:tracking-[0.16em]">
              {fr ? frHero.flow : "Debiet"}
            </p>
            <p className="spec-num mt-1 font-display text-xl text-fg md:mt-2 md:text-3xl">
              <CountUp value={44} suffix={fr ? "L/h" : "L/u"} active={specsVisible} />
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function HomeHero() {
  const lang = useLang();
  const fr = lang === "fr";
  const heroRef = useRef<HTMLElement>(null);
  const [story, setStory] = useState<StoryState>({ progress: 0, temperature: 4.8 });
  const setGrow = useCold((state) => state.setGrow);
  const setTemp = useCold((state) => state.setTemp);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyStatic = () => {
      setStory({ progress: 1, temperature: 2 });
      setGrow(0.73);
      setTemp(2);
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      if (reduceMotion.matches) {
        applyStatic();
        return;
      }
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const range = Math.max(1, hero.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / range));
      const temperature = 2 + Math.max(0, 0.28 - progress) * 10;
      setStory({ progress, temperature });
      setGrow(0.18 + progress * 0.55);
      setTemp(temperature);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reduceMotion.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reduceMotion.removeEventListener("change", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [setGrow, setTemp]);

  const tiles = fr
    ? frHero.tiles
    : [
        { label: "Bierkoelers", to: "/bierkoelers" },
        { label: "Kegkoelers", to: "/kegkoelers" },
        { label: "Serpentijnen", to: "/serpentijnen" },
        { label: "Tap & zuilen", to: "/tap-zuilen" },
        { label: "Onderdelen", to: "/onderdelen" },
      ];

  return (
    <section ref={heroRef} className="relative h-[145svh]">
      <div className="sticky top-0 min-h-[100svh] overflow-hidden ice-fallback">
        <OptimizedImage
          src={withBase("/worlds/ice-bank.jpg")}
          alt=""
          width={1792}
          height={907}
          aria-hidden="true"
          priority
          className="hero-ice-photo pointer-events-none absolute inset-0 h-full w-full"
        />
        <div className="hero-frost" aria-hidden />
        <div className="hero-read-veil" aria-hidden />
        <div className="hero-veil pointer-events-none absolute inset-0 bg-gradient-to-r from-bg/75 via-bg/25 to-transparent" />
        <div className="hero-veil pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/25 via-transparent to-bg/10" />

        {/* Mobile: compact top-aligned stack so H1 + machine fit in sticky 100svh. md+: end-aligned row. */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1220px] flex-col justify-start px-5 pb-14 pt-[4.25rem] md:flex-row md:items-end md:justify-between md:px-8 md:pb-24 md:pt-28">
          <div className="hero-copy max-w-xl">
            <p className="kicker">{fr ? frHero.kicker : "Bierkoelers · Kegkoelers · België & Nederland"}</p>
            <p className="hero-slogan mt-2 font-display text-xl italic text-ice md:mt-5 md:text-3xl">
              {fr ? frHero.slogan : tagline()}
            </p>
            <h1 className="mt-2 font-display text-[1.7rem] leading-[1.08] text-white md:mt-5 md:text-5xl">
              {fr ? frHero.title : "Bierkoelers en kegkoelers voor horeca"}
            </h1>
            <p className="hero-lede mt-2 max-w-md text-[0.92rem] font-medium leading-snug md:mt-6 md:text-[1.05rem] md:leading-relaxed">
              {fr
                ? frHero.lede
                : "Ijsbankkoelers voor de leiding, fustenkoelers voor het vat, plus kranen, zuilen en serpentijnen. België en Nederland."}
            </p>
            <div className="hero-actions mt-3 flex gap-2 md:mt-8 md:gap-3">
              <MagneticCta>
                <Link to={fr ? "/fr/contact" : "/contact"} className="btn btn-ice">
                  {fr ? frHero.cta : "Vraag een offerte"}
                </Link>
              </MagneticCta>
              <Link
                to={fr ? "/fr/produits" : "/producten"}
                className="btn btn-ghost bg-bg/60 backdrop-blur-sm"
              >
                {fr ? frHero.ctaSecondary : "Bekijk machines"}
              </Link>
            </div>
            <ul
              className="hero-tiles mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:mt-12 md:grid-cols-5 md:gap-2"
              aria-label="Assortiment"
            >
              {tiles.map((tile, index) => (
                <li
                  key={tile.to}
                  className={index === tiles.length - 1 ? "col-span-2 sm:col-span-1 md:col-span-1" : undefined}
                >
                  <Link
                    to={tile.to}
                    className={`hero-tile${index === tiles.length - 1 ? " hero-tile--orphan" : ""}`}
                  >
                    {tile.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <HeroMachine story={story} />
        </div>

        <button
          type="button"
          className="scroll-cue absolute bottom-3 left-1/2 z-20 -translate-x-1/2 text-[0.6rem] tracking-[0.18em] uppercase md:bottom-5 md:left-8 md:translate-x-0 md:text-[0.65rem] md:tracking-[0.2em]"
          onClick={() => {
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            document
              .getElementById("statement")
              ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
          }}
        >
          {fr ? frHero.scroll : "Scroll om de ijsbank op te bouwen"}
          <i aria-hidden />
        </button>
      </div>
    </section>
  );
}
