import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { SplitLines } from "./SplitLines";

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
          offerte.
        </p>
        <MagneticButton
          className="btn btn-ink btn-lg magnetic"
          href="mailto:info@vanrobi.be?subject=Offerteaanvraag%20VanRobi"
          id="cta-primary"
        >
          <span className="magnetic-label">Mail uw aanvraag</span>
        </MagneticButton>
        <p className="cta-note">
          Of bel uw VanRobi-contact — antwoord binnen één werkdag.
        </p>
      </Reveal>
    </section>
  );
}
