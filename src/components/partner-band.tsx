import { contact } from "@/lib/contact";
import { withBase } from "@/lib/base";
import { Reveal } from "./reveal";
import { OptimizedImage } from "./optimized-image";
import { useLang } from "@/lib/i18n";
import { frPartnerCopy } from "@/lib/fr";

export function PartnerBand() {
  const fr = useLang() === "fr";
  return (
    <section className="grid border-t border-line lg:grid-cols-2">
      <div className="photo-well bright min-h-[46vh]">
        <OptimizedImage
          src={withBase("/assets/products-stage/cooler-extra-2.jpg")}
          alt="Professionele ijsbankkoeler in RVS, bierkoeler voor horeca"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center px-5 py-16 md:px-12">
        <Reveal>
          <p className="kicker">{fr ? frPartnerCopy.kicker : "Partnerschap"}</p>
          <h2 className="mt-4 text-4xl md:text-5xl">
            {fr ? frPartnerCopy.title : "Professionele ijsbankkoelers."}
            <br />
            <em className="italic text-ice">
              {fr ? frPartnerCopy.em : "Het merk VanRobi."}
            </em>
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            {fr
              ? frPartnerCopy.body
              : `VanRobi staat voor professionele ijsbankkoelers voor de Benelux-horeca: industriële kwaliteit, heldere specs en machines die elke shift meegaan. Wij zijn het aanspreekpunt voor België en Nederland — selectie, advies en levering vanuit één loket, met lokale opvolging en onderhoud via ${contact.company}.`}
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <dt className="kicker">{fr ? frPartnerCopy.merk : "Merk"}</dt>
              <dd className="mt-2">{fr ? frPartnerCopy.merkVal : "VanRobi · ijsbankkoelers"}</dd>
            </div>
            <div>
              <dt className="kicker">{fr ? frPartnerCopy.regio : "Regio"}</dt>
              <dd className="mt-2">{fr ? frPartnerCopy.regioVal : "België & Nederland"}</dd>
            </div>
            <div>
              <dt className="kicker">{fr ? frPartnerCopy.focus : "Focus"}</dt>
              <dd className="mt-2">{fr ? frPartnerCopy.focusVal : "Bier- & drankkoeling"}</dd>
            </div>
            <div>
              <dt className="kicker">{fr ? frPartnerCopy.service : "Service"}</dt>
              <dd className="mt-2">{contact.company} · koelgecertificeerd</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}