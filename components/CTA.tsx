import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { SplitLines } from "./SplitLines";
import { withBase } from "@/lib/base";
import { contact, offerteMailto } from "@/lib/contact";

export function CTA() {
  return (
    <section className="cta" id="offerte">
      <Reveal className="wrap cta-inner">
        <p className="eyebrow">Contact</p>
        <SplitLines
          as="h2"
          lines={["Klaar voor", <em key="e">stabiele koude?</em>]}
        />
        <p>
          Vertel ons over uw bar, event of installatie. Wij sturen een gerichte
          offerte vanuit {contact.address.city}.
        </p>
        <div className="cta-actions">
          <MagneticButton
            className="btn btn-ink btn-lg magnetic"
            href={offerteMailto()}
            id="cta-primary"
          >
            <span className="magnetic-label">Mail uw aanvraag</span>
          </MagneticButton>
          <a className="btn btn-ghost-ink btn-lg" href={`tel:${contact.phoneTel}`}>
            Bel {contact.phone}
          </a>
        </div>
        <p className="cta-note">
          {contact.address.line} ·{" "}
          <a href={withBase("/contact/")}>Contactformulier</a> · antwoord binnen
          één werkdag.
        </p>
      </Reveal>
    </section>
  );
}
