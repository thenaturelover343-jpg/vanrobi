import { Reveal } from "./Reveal";
import { withBase } from "@/lib/base";
import { contact } from "@/lib/contact";

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
          <em>Het merk VanRobi.</em>
        </h2>
        <p>
          VanRobi staat voor professionele ijsbankkoelers voor de Benelux-horeca:
          industriële kwaliteit, heldere specs en machines die elke shift meegaan.
          Wij zijn het aanspreekpunt voor België en Nederland — selectie, advies en
          levering vanuit één loket, met lokale opvolging en onderhoud via{" "}
          {contact.company}.
        </p>
        <dl className="partner-facts">
          <div>
            <dt>Merk</dt>
            <dd>VanRobi · ijsbankkoelers</dd>
          </div>
          <div>
            <dt>Regio</dt>
            <dd>België &amp; Nederland</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Bier- &amp; drankkoeling</dd>
          </div>
          <div>
            <dt>Service</dt>
            <dd>{contact.company} · koelgecertificeerd</dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
}
