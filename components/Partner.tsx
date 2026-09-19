import { Reveal } from "./Reveal";
import { withBase } from "@/lib/base";

export function Partner() {
  return (
    <section className="partner" id="partnerschap">
      <div className="partner-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase("/assets/products-stage/cooler-extra-2.jpg")}
          alt="Professionele ijsbankkoeler in RVS, bierkoeler voor horeca via VanRobi"
          loading="lazy"
          width={1300}
          height={1300}
        />
        <div className="partner-media-veil" aria-hidden="true"></div>
      </div>
      <Reveal className="partner-panel">
        <p className="partner-label">Partnerschap</p>
        <h2>
          Professionele ijsbankkoelers.
          <br />
          <em>Via VanRobi.</em>
        </h2>
        <p>
          Ons assortiment bouwt op meer dan 50 jaar Spaanse koudetechniek en
          industrieel leiderschap in ijsbankkoeling. VanRobi is het aanspreekpunt
          voor België en Nederland: selectie, advies en levering vanuit één loket,
          met heldere specs en opvolging na aankoop.
        </p>
        <dl className="partner-facts">
          <div>
            <dt>Herkomst</dt>
            <dd>Spanje · industriële koude</dd>
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
