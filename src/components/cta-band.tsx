import { Link } from "@tanstack/react-router";
import { site, offerteHref } from "@/lib/site";
import { experience } from "@/lib/experience";
import { useLang } from "@/lib/i18n";
import { frCtaCopy } from "@/lib/fr";

export function CtaBand() {
  const fr = useLang() === "fr";
  const href = experience.nativeForm ? offerteHref(undefined, fr ? "fr" : "nl") : `mailto:${site.email}`;
  const label = experience.nativeForm
    ? fr
      ? frCtaCopy.cta
      : "Vraag een offerte"
    : fr
      ? frCtaCopy.mail
      : "Mail uw aanvraag";
  return (
    <section className="border-t border-line px-5 py-24 md:px-8" id="offerte">
      <div className="mx-auto flex max-w-[1220px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="kicker">{fr ? frCtaCopy.kicker : "Contact"}</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
            {fr ? (
              <>
                {frCtaCopy.title}{" "}
                <em className="italic text-ice">{frCtaCopy.em}</em>
              </>
            ) : (
              <>
                Offerte voor uw{" "}
                <em className="italic text-ice">bar, event of installatie</em>
              </>
            )}
          </h2>
          <p className="mt-4 max-w-md text-muted">
            {fr
              ? frCtaCopy.lede
              : "Mail of bel — antwoord binnen één werkdag. Of gebruik het contactformulier."}
          </p>
          <p className="mt-4 text-sm text-muted">
            {site.address.line} ·{" "}
            <Link to={fr ? "/fr/contact" : "/contact"} className="text-ice">
              {fr ? frCtaCopy.form : "Contactformulier"}
            </Link>{" "}
            · {fr ? frCtaCopy.reply : "antwoord binnen één werkdag."}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={href} className="btn btn-ice">
            {label}
          </a>
          <a href={`tel:${site.phoneTel}`} className="btn btn-ghost">
            {fr ? `${frCtaCopy.call} ${site.phone}` : `Bel ${site.phone}`}
          </a>
        </div>
      </div>
    </section>
  );
}