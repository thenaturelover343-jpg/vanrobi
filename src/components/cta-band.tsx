import { Link } from "@tanstack/react-router";
import { site, offerteHref } from "@/lib/site";
import { experience } from "@/lib/experience";

export function CtaBand() {
  const href = experience.nativeForm ? offerteHref() : `mailto:${site.email}`;
  const label = experience.nativeForm ? "Vraag een offerte" : "Mail uw aanvraag";
  return (
    <section className="border-t border-line px-5 py-24 md:px-8" id="offerte">
      <div className="mx-auto flex max-w-[1220px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="kicker">Contact</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
            Klaar voor <em className="italic text-ice">stabiele koude?</em>
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Vertel ons over uw bar, event of installatie. Wij sturen u een offerte.
          </p>
          <p className="mt-4 text-sm text-muted">
            {site.address.line} · <Link to="/contact" className="text-ice">Contactformulier</Link> ·
            antwoord binnen één werkdag.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={href} className="btn btn-ice">
            {label}
          </a>
          <a href={`tel:${site.phoneTel}`} className="btn btn-ghost">
            Bel {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
