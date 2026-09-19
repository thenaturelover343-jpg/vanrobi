import { Reveal } from "./Reveal";
import { withBase } from "@/lib/base";

export function Partner() {
  return (
    <section className="partner" id="partnerschap">
      <div className="partner-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase("/assets/products-stage/cooler-extra-2.jpg")}
          alt="Golderos professionele ijsbankkoeler — industrieel RVS"
          loading="lazy"
          width={1300}
          height={1300}
        />
        <div className="partner-media-veil" aria-hidden="true"></div>
      </div>
      <Reveal className="partner-panel">
        <p className="partner-label">Partnerschap</p>
        <h2>
          Golderos.
          <br />
          <em>Via VanRobi.</em>
        </h2>
        <p>
          Golderos is de Spaanse fabrikant van professionele ijsbankkoelers —
          meer dan 50 jaar leiderschap in koudetechniek. VanRobi is de officiële
          distributeur voor België en Nederland: selectie, advies en levering
          vanuit één aanspreekpunt.
        </p>
        <dl className="partner-facts">
          <div>
            <dt>Fabrikant</dt>
            <dd>Golderos · Spanje</dd>
          </div>
          <div>
            <dt>Distributeur</dt>
            <dd>VanRobi · BE &amp; NL</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Bier- &amp; drankkoeling</dd>
          </div>
          <div>
            <dt>Erfenis</dt>
            <dd>50+ jaar · ISO 9001</dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
}
