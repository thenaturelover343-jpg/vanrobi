import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useCold } from "@/lib/cold";
import { tagline } from "@/lib/experience";
import { withBase } from "@/lib/base";

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
  const specsRef = useRef<HTMLDivElement>(null);
  const [specsVisible, setSpecsVisible] = useState(false);
  const fillHeight = 32 + story.progress * 126;
  const fillY = 183 - fillHeight;
  const phase =
    story.progress < 0.34
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
    <aside className="mt-10 w-full max-w-md md:mt-0">
      <div className="hero-story-card relative h-[19rem] max-h-[62vh] overflow-hidden border border-line bg-bg-2 md:aspect-[4/5] md:h-auto">
        <img
          src={withBase("/products/goldy.jpg")}
          alt="Goldy over-bar ijsbankkoeler"
          width={900}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/70 to-bg" />

        <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between gap-3">
          <span className="text-[0.6rem] tracking-[0.16em] text-ice uppercase">{phase}</span>
          <span className="spec-num border border-ice/40 bg-bg/80 px-3 py-1 font-display text-xl text-fg backdrop-blur-sm">
            {story.temperature.toFixed(1)}°C
          </span>
        </div>

        <svg
          viewBox="0 0 280 220"
          className="absolute inset-x-0 top-14 z-10 mx-auto h-[52%] w-auto max-w-[82%]"
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
            STABIELE TAPKOUDE
          </text>
        </svg>

        <div
          ref={specsRef}
          className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-3 gap-px border-t border-line bg-bg/92 backdrop-blur-sm"
        >
          <div className="p-4">
            <p className="text-[0.55rem] tracking-[0.16em] text-muted uppercase">Model</p>
            <p className="mt-2 font-display text-3xl text-fg">Goldy</p>
          </div>
          <div className="p-4">
            <p className="text-[0.55rem] tracking-[0.16em] text-muted uppercase">IJsreserve</p>
            <p className="spec-num mt-2 font-display text-3xl text-fg">
              <CountUp value={9} suffix="kg" active={specsVisible} />
            </p>
          </div>
          <div className="p-4">
            <p className="text-[0.55rem] tracking-[0.16em] text-muted uppercase">Debiet</p>
            <p className="spec-num mt-2 font-display text-3xl text-fg">
              <CountUp value={44} suffix="L/u" active={specsVisible} />
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [story, setStory] = useState<StoryState>({ progress: 0, temperature: 4.8 });
  const setGrow = useCold((state) => state.setGrow);
  const setTemp = useCold((state) => state.setTemp);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setStory({ progress: 1, temperature: 2 });
      setGrow(0.73);
      setTemp(2);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
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
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [setGrow, setTemp]);

  return (
    <section ref={heroRef} className="relative h-[145svh]">
      <div className="sticky top-0 min-h-[100svh] overflow-hidden">
        <div className="hero-frost" aria-hidden />
        <div className="hero-veil pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/35" />
        <div className="hero-veil pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50" />

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
              Via VanRobi, specialist in ijsbankkoelers voor België en Nederland. Professionele
              koeling voor bars, restaurants, events en installateurs die stabiele tapkoude nodig
              hebben.
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

          <HeroMachine story={story} />
        </div>

        <button
          type="button"
          className="scroll-cue absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-[0.65rem] tracking-[0.2em] uppercase md:left-8 md:translate-x-0"
          onClick={() => {
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            document
              .getElementById("statement")
              ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
          }}
        >
          Scroll om de ijsbank op te bouwen
          <i aria-hidden />
        </button>
      </div>
    </section>
  );
}
