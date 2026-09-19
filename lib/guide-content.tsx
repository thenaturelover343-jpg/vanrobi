import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { withBase } from "@/lib/base";

export function GuideBody({ slug }: { slug: string }): ReactNode {
  if (slug === "golderos-vs-gamko") {
    return (
      <section className="page-section">
        <div className="wrap guide-body">
          <Reveal className="prose guide-prose">
            <h2>Kort antwoord</h2>
            <p>
              <strong>Gamko</strong> is een bekende naam in Benelux-horecakeeling
              (vaak gekoppeld aan complete tap- en koelmeubelen).{" "}
              <strong>Golderos</strong> is een Spaanse specialist in
              ijsbankkoelers — van compacte over-bar (Goldy) tot high-volume
              onder-bar (V100, V200, V500). VanRobi is de officiële
              Golderos-verdeler voor België en Nederland.
            </p>
            <h2>Wanneer Golderos via VanRobi?</h2>
            <ul className="guide-list">
              <li>U zoekt een dedicated ijsbankkoeler met heldere debiet- en ijsspecs.</li>
              <li>U wilt een officieel BE/NL-kanaal met lokale opvolging (geen grijze import).</li>
              <li>Events/festivals: portable-modellen (V100/V200 portable, Goldy).</li>
              <li>Onderhoud en reiniging dichtbij via Taponderhoud.</li>
            </ul>
            <h2>Waar Gamko vaak speelt</h2>
            <p>
              Bij bestaande Gamko-installaties, merkspecifieke onderdelen of
              complete barmeubellijnen kan Gamko de logische route blijven. Het
              is geen &quot;beter/slechter&quot;-wedstrijd — het hangt af van wat u al
              heeft staan en welk koelprincipe u nodig heeft.
            </p>
            <h2>Praktisch advies</h2>
            <p>
              Stuur ons uw huidige opstelling, aantal kranen en piekvolume. We
              zeggen eerlijk of een Golderos-unit past — of dat u beter bij uw
              huidige merk blijft. Mail{" "}
              <a href="mailto:info@vanrobi.be">info@vanrobi.be</a>.
            </p>
            <p>
              <a className="text-link" href={withBase("/producten/")}>
                Bekijk Golderos-assortiment <span aria-hidden="true">→</span>
              </a>
            </p>
          </Reveal>
          <aside className="guide-aside">
            <Reveal className="guide-card">
              <p className="eyebrow">Gerelateerd</p>
              <a href={withBase("/gids/v100-vs-v200/")}>V100 vs V200</a>
              <a href={withBase("/gids/bierkoeler-voor-events/")}>
                Bierkoeler voor events
              </a>
              <a href={withBase("/faq/")}>Veelgestelde vragen</a>
              <a href={withBase("/contact/")}>Offerte aanvragen</a>
            </Reveal>
          </aside>
        </div>
      </section>
    );
  }

  if (slug === "v100-vs-v200") {
    return (
      <section className="page-section">
        <div className="wrap guide-body">
          <Reveal className="prose guide-prose">
            <h2>Snelle vergelijking</h2>
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>V100</th>
                    <th>V200</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Typisch debiet</td>
                    <td>± 87 L/u</td>
                    <td>± 160 L/u</td>
                  </tr>
                  <tr>
                    <td>IJsreserve</td>
                    <td>± 19 kg</td>
                    <td>± 38 kg</td>
                  </tr>
                  <tr>
                    <td>Cuba</td>
                    <td>± 40 L</td>
                    <td>± 66 L</td>
                  </tr>
                  <tr>
                    <td>Profiel</td>
                    <td>Medium horeca</td>
                    <td>High volume</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2>Kies de V100 als…</h2>
            <p>
              U een stabiele restaurant- of barbelasting heeft, één tot enkele
              kranen, en geen structurele festivalpieken. De V100 is het
              werkpaard: betrouwbaar, medium footprint, genoeg reserve voor de
              meeste vaste horeca.
            </p>
            <h2>Kies de V200 als…</h2>
            <p>
              Piekuren hard aankomen, u meerdere spiralen/kranen voedt, of de
              V100 historisch tekort schiet. Meer ijsreserve = meer buffer
              wanneer iedereen tegelijk bestelt.
            </p>
            <h2>Twijfelt u?</h2>
            <p>
              Mail volume (glazen/uur), aantal kranen en barfoto&apos;s naar{" "}
              <a href="mailto:info@vanrobi.be">info@vanrobi.be</a> — we
              dimensioneren mee. Zie ook{" "}
              <a href={withBase("/producten/v100/")}>V100</a> en{" "}
              <a href={withBase("/producten/v200/")}>V200</a>.
            </p>
          </Reveal>
          <aside className="guide-aside">
            <Reveal className="guide-card">
              <p className="eyebrow">Machines</p>
              <a href={withBase("/producten/v100/")}>V100 detail</a>
              <a href={withBase("/producten/v200/")}>V200 detail</a>
              <a href={withBase("/gids/bierkoeler-voor-events/")}>
                Events &amp; festivals
              </a>
              <a href={withBase("/contact/")}>Offerte</a>
            </Reveal>
          </aside>
        </div>
      </section>
    );
  }

  if (slug === "bierkoeler-voor-events") {
    return (
      <section className="page-section">
        <div className="wrap guide-body">
          <Reveal className="prose guide-prose">
            <h2>Wat telt op het terrein?</h2>
            <ul className="guide-list">
              <li>Mobiliteit (wielen, snelle opbouw)</li>
              <li>Stabiele 220V-voeding</li>
              <li>Genoeg debiet in de piek (niet alleen &quot;gemiddeld&quot;)</li>
              <li>Optionele tapzuil / korte leidingen</li>
            </ul>
            <h2>Goldy</h2>
            <p>
              Compacte over-bar ijsbankkoeler — ideaal voor craftbars, pop-ups en
              zichtbare bars op events waar ruimte schaars is.{" "}
              <a href={withBase("/producten/goldy/")}>Goldy bekijken</a>
            </p>
            <h2>V100 portable</h2>
            <p>
              V100-capaciteit op wielen. De werkpaard-keuze voor de meeste
              festivals en cateraars.{" "}
              <a href={withBase("/producten/v100-portable/")}>V100 portable</a>
            </p>
            <h2>V200 portable</h2>
            <p>
              High-volume mobiel voor grote events en drukke tijdelijke bars.{" "}
              <a href={withBase("/producten/v200-portable/")}>V200 portable</a>
            </p>
            <h2>Planning &amp; levertijd</h2>
            <p>
              Events hebben vaste data — plan vooruit. Levertijden zijn
              voorraad-afhankelijk; vermeld uw eventdatum bij de offerteaanvraag
              via <a href="mailto:info@vanrobi.be">info@vanrobi.be</a>.
            </p>
          </Reveal>
          <aside className="guide-aside">
            <Reveal className="guide-card">
              <p className="eyebrow">Volgende stap</p>
              <a href={withBase("/producten/")}>Catalogus</a>
              <a href={withBase("/gids/v100-vs-v200/")}>V100 vs V200</a>
              <a href={withBase("/faq/")}>FAQ</a>
              <a href={withBase("/contact/")}>Offerte voor uw event</a>
            </Reveal>
          </aside>
        </div>
      </section>
    );
  }

  return null;
}
