import { contact } from "@/lib/contact";
import { withBase } from "@/lib/base";
import { Reveal } from "./reveal";

export function PartnerBand() {
  return (
    <section className="grid border-t border-line lg:grid-cols-2">
      <div className="photo-well bright min-h-[46vh]">
        <img
          src={withBase("/assets/products-stage/cooler-extra-2.jpg")}
          alt="Professionele ijsbankkoeler in RVS, bierkoeler voor horeca"
        />
      </div>
      <div className="flex flex-col justify-center px-5 py-16 md:px-12">
        <Reveal>
          <p className="kicker">Partnerschap</p>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Professionele ijsbankkoelers.
            <br />
            <em className="italic text-ice">Het merk VanRobi.</em>
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            VanRobi staat voor professionele ijsbankkoelers voor de Benelux-horeca: industriële kwaliteit, heldere specs en machines die elke shift meegaan. Wij zijn het aanspreekpunt voor België en Nederland — selectie, advies en levering vanuit één loket, met lokale opvolging en onderhoud via {contact.company}.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <dt className="kicker">Merk</dt>
              <dd className="mt-2">VanRobi · ijsbankkoelers</dd>
            </div>
            <div>
              <dt className="kicker">Regio</dt>
              <dd className="mt-2">België & Nederland</dd>
            </div>
            <div>
              <dt className="kicker">Focus</dt>
              <dd className="mt-2">Bier- & drankkoeling</dd>
            </div>
            <div>
              <dt className="kicker">Service</dt>
              <dd className="mt-2">
                {contact.company} · koelgecertificeerd
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
