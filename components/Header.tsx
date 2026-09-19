"use client";

import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { MagneticButton } from "./MagneticButton";
import { withBase } from "@/lib/base";

const navLinks = [
  { href: "/producten/", label: "Producten" },
  { href: "/diensten/", label: "Diensten" },
  { href: "/gids/", label: "Gids" },
  { href: "/voor-wie/", label: "Voor wie" },
  { href: "/over-ons/", label: "Over ons" },
  { href: "/contact/", label: "Contact" },
];

export function Header({ lang = "nl" }: { lang?: "nl" | "fr" }) {
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

  const frNav = [
    { href: "/fr/", label: "Accueil" },
    { href: "/fr/produits/", label: "Produits" },
    { href: "/fr/services/", label: "Services" },
    { href: "/fr/a-propos/", label: "À propos" },
    { href: "/fr/faq/", label: "FAQ" },
    { href: "/fr/contact/", label: "Contact" },
    { href: "/producten/", label: "Catalogue NL" },
  ];

  const links = lang === "fr" ? frNav : navLinks;
  const ctaHref = lang === "fr" ? "/fr/contact/" : "/contact/";
  const ctaLabel = lang === "fr" ? "Devis" : "Offerte";
  const skip = lang === "fr" ? "Aller au contenu" : "Naar inhoud";
  const menuLabel = lang === "fr" ? "Ouvrir le menu" : "Menu openen";

  return (
    <>
      <a className="skip-link" href="#main">
        {skip}
      </a>

      <header className={headerClass} id="header">
        <Brand homeHref={lang === "fr" ? "/fr/" : "/"} />
        <nav className="nav" aria-label={lang === "fr" ? "Navigation" : "Hoofdnavigatie"}>
          {links.map((l) => (
            <a key={l.href} href={withBase(l.href)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-tools">
          <div className="lang-switch" aria-label="Language">
            <a
              href={withBase("/")}
              className={lang === "nl" ? "is-active" : ""}
              hrefLang="nl"
              lang="nl"
            >
              NL
            </a>
            <span aria-hidden="true">/</span>
            <a
              href={withBase("/fr/")}
              className={lang === "fr" ? "is-active" : ""}
              hrefLang="fr"
              lang="fr"
            >
              FR
            </a>
          </div>
          <MagneticButton
            className="btn btn-ink btn-sm header-cta magnetic"
            href={withBase(ctaHref)}
          >
            <span className="magnetic-label">{ctaLabel}</span>
          </MagneticButton>
        </div>
        <button
          className="menu-btn"
          type="button"
          aria-label={menuLabel}
          aria-expanded={navOpen}
          aria-controls="mobile-nav"
          onClick={() => setNavOpen((o) => !o)}
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <div className="mobile-nav" id="mobile-nav" hidden={!navOpen}>
        {links.map((l) => (
          <a key={l.href} href={withBase(l.href)} onClick={closeNav}>
            {l.label}
          </a>
        ))}
        <div className="lang-switch lang-switch-mobile">
          <a href={withBase("/")} onClick={closeNav} className={lang === "nl" ? "is-active" : ""}>
            Nederlands
          </a>
          <a href={withBase("/fr/")} onClick={closeNav} className={lang === "fr" ? "is-active" : ""}>
            Français
          </a>
        </div>
        <a
          className="btn btn-ink"
          href={withBase(ctaHref)}
          onClick={closeNav}
        >
          {lang === "fr" ? "Demander un devis" : "Offerte aanvragen"}
        </a>
      </div>
    </>
  );
}
