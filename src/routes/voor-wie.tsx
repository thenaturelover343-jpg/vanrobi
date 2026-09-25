import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { withBase } from "@/lib/base";
import { OptimizedImage } from "@/components/optimized-image";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/voor-wie")({
  head: () =>
    seoHead({
      title: "Voor wie — VanRobi",
      description: "Bierkoelers voor bars, restaurants, festivals en installateurs. Advies op piekvolume, barmeubel en stroom.",
      path: "/voor-wie",
    }),
  component: VoorWie,
});

const audiences = [
  {
    n: "01",
    title: "Horeca",
    text: "Restaurants, bars en hotels die stabiele tapkoude willen, onder-bar of over-bar, afgestemd op openingsuren en volume.",
    image: withBase("/worlds/world-bar.jpg"),
  },
  {
    n: "02",
    title: "Events & festivals",
    text: "Mobiele units (Goldy, V100 portable, V200 portable) voor snelle opbouw, high volume en zichtbare tapbeleving.",
    image: withBase("/worlds/world-event.jpg"),
  },
  {
    n: "03",
    title: "Installateurs & brouwerijen",
    text: "Heldere specs, officiële kanalen en service op maat voor vakmensen die VanRobi in projecten integreren.",
    image: withBase("/worlds/world-install.jpg"),
  },
];

function VoorWie() {
  return (
    <PageShell>
      <PageHero
        kicker="Voor wie"
        title="Waar de koude telt."
        lede="Van vaste bar tot festivalterrein, dezelfde industriële betrouwbaarheid, met lokaal advies vanuit de Kempen."
      />
      {audiences.map((a, i) => (
        <section key={a.n} className="grid border-b border-line lg:grid-cols-2">
          <div className={`photo-well bright min-h-[42vh] ${i % 2 ? "lg:order-2" : ""}`}>
            <OptimizedImage src={a.image} alt="" loading="lazy" />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 md:px-12">
            <p className="spec-num text-ice">{a.n}</p>
            <h2 className="mt-4 text-4xl md:text-5xl">{a.title}</h2>
            <p className="mt-5 max-w-md text-muted">{a.text}</p>
            <p className="mt-6">
              <Link to="/producten" className="text-sm tracking-[0.12em] text-ice uppercase">
                Bekijk machines →
              </Link>
            </p>
          </div>
        </section>
      ))}

      <section className="px-5 py-20 md:px-8">
        <div className="prose mx-auto max-w-[46rem]">
          <h2>Welke machine past bij welk publiek?</h2>
          <h3>Vaste horeca</h3>
          <p>
            Restaurants en bars kiezen vaak een onder-bar ijsbankkoeler (
            <Link to="/producten/$id" params={{ id: "v100" }}>
              V100
            </Link>{" "}
            of{" "}
            <Link to="/producten/$id" params={{ id: "v200" }}>
              V200
            </Link>
            ). Zie de gids{" "}
            <Link to="/gids/$slug" params={{ slug: "onder-bar-bierkoeler" }}>
              onder-bar bierkoeler
            </Link>
            .
          </p>
          <h3>Events & festivals</h3>
          <p>
            Mobiele units zoals{" "}
            <Link to="/producten/$id" params={{ id: "v100-portable" }}>
              V100 portable
            </Link>
            ,{" "}
            <Link to="/producten/$id" params={{ id: "v200-portable" }}>
              V200 portable
            </Link>{" "}
            of{" "}
            <Link to="/producten/$id" params={{ id: "goldy" }}>
              Goldy
            </Link>
            . Lees{" "}
            <Link to="/gids/$slug" params={{ slug: "bierkoeler-voor-events" }}>
              bierkoeler voor events
            </Link>
            .
          </p>
          <h3>Installateurs & craft</h3>
          <p>
            Heldere specs en een professioneel VanRobi-kanaal: bekijk de{" "}
            <Link to="/producten">catalogus</Link> of de pagina{" "}
            <Link to="/gids/$slug" params={{ slug: "vanrobi-distributeur-belgie-nederland" }}>
              VanRobi ijsbankkoelers België & Nederland
            </Link>
            . Offerte via <Link to="/contact">contact</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
