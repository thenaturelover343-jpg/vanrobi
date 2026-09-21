import { Link } from "@tanstack/react-router";
import { withBase } from "@/lib/base";
import { Reveal } from "./reveal";

const worlds = [
  {
    title: "Bars",
    kicker: "Vaste horeca",
    body: "Restaurants, bars en hotels die stabiele tapkoude willen, onder-bar of over-bar, afgestemd op openingsuren en volume.",
    image: withBase("/worlds/world-bar.jpg"),
    href: "/voor-wie" as const,
  },
  {
    title: "Events",
    kicker: "Terrein",
    body: "Mobiele units (Goldy, V100 portable, V200 portable) voor snelle opbouw, high volume en zichtbare tapbeleving.",
    image: withBase("/worlds/world-event.jpg"),
    href: "/gids/$slug" as const,
    slug: "bierkoeler-voor-events",
  },
  {
    title: "Installateurs",
    kicker: "Techniek",
    body: "Heldere specs, officiële kanalen en service op maat voor vakmensen die VanRobi in projecten integreren.",
    image: withBase("/worlds/world-install.jpg"),
    href: "/diensten" as const,
  },
];

export function Worlds() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1220px] px-5 py-20 md:px-8">
        <Reveal>
          <p className="kicker">Voor wie</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Waar de koude telt.</h2>
        </Reveal>
      </div>
      <div className="grid md:grid-cols-3">
        {worlds.map((w) => (
          <Link
            key={w.title}
            to={w.href}
            params={w.slug ? { slug: w.slug } : undefined}
            className="group relative min-h-[58vh] overflow-hidden border-t border-line md:border-l md:first:border-l-0"
          >
            <img
              src={w.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover brightness-[1.12] contrast-[1.04] transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/25 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-7">
              <p className="kicker">{w.kicker}</p>
              <h3 className="mt-3 text-4xl">{w.title}</h3>
              <p className="mt-3 max-w-sm text-sm text-fg/80">{w.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
