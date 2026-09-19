"use client";

import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { MagneticButton } from "./MagneticButton";
import { withBase } from "@/lib/base";

const navLinks = [
  { href: "/producten/", label: "Producten" },
  { href: "/diensten/", label: "Diensten" },
  { href: "/voor-wie/", label: "Voor wie" },
  { href: "/over-ons/", label: "Over ons" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lastY = 0;
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (!reduce && y > 220) {
        if (y > lastY + 4) setHidden(true);
        else if (y < lastY - 4) setHidden(false);
      } else {
        setHidden(false);
      }
      lastY = y;
    };

    const handler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
    };

    window.addEventListener("scroll", handler, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
    return () => document.body.classList.remove("nav-open");
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);

  const headerClass = [
    "site-header",
    scrolled ? "scrolled" : "",
    hidden ? "hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <a className="skip-link" href="#main">
        Naar inhoud
      </a>

      <header className={headerClass} id="header">
        <Brand />
        <nav className="nav" aria-label="Hoofdnavigatie">
          {navLinks.map((l) => (
            <a key={l.href} href={withBase(l.href)}>
              {l.label}
            </a>
          ))}
        </nav>
        <MagneticButton
          className="btn btn-ink btn-sm header-cta magnetic"
          href={withBase("/contact/")}
        >
          <span className="magnetic-label">Offerte</span>
        </MagneticButton>
        <button
          className="menu-btn"
          type="button"
          aria-label="Menu openen"
          aria-expanded={navOpen}
          aria-controls="mobile-nav"
          onClick={() => setNavOpen((o) => !o)}
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <div className="mobile-nav" id="mobile-nav" hidden={!navOpen}>
        {navLinks.map((l) => (
          <a key={l.href} href={withBase(l.href)} onClick={closeNav}>
            {l.label}
          </a>
        ))}
        <a
          className="btn btn-ink"
          href={withBase("/contact/")}
          onClick={closeNav}
        >
          Offerte aanvragen
        </a>
      </div>
    </>
  );
}
