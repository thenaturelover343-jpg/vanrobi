import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { guides } from "@/lib/guides";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/gids/")({
  head: () =>
    seoHead({
      title: "Gidsen — VanRobi",
      description: "Uitleg, checklists en vergelijkingen: ijsbankkoeler, dry cooler, spiralen, onder-bar, events en ijsbankkoelers via VanRobi in België & Nederland.",
      path: "/gids",
    }),
  component: GidsIndex,
});

function GidsIndex() {
  return (
    <PageShell>
      <PageHero
        kicker="Gidsen"
        title="Kiezen met kennis."
        lede="Uitleg, checklists en vergelijkingen — ijsbankkoeler, dry cooler, spiralen, onder-bar, events en ijsbankkoelers via VanRobi in België & Nederland."
      />
      <section className="mx-auto max-w-[1220px] px-5 py-16 md:px-8">
        <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
          {guides.filter((g) => g.slug !== "ijsbankkoeler-vs-gamko").map((g) => (
            <Link
              key={g.slug}
              to="/gids/$slug"
              params={{ slug: g.slug }}
              className="border-t border-ice/0 bg-bg p-7 transition-colors hover:border-ice/40 hover:bg-surface"
            >
              <p className="kicker">{g.eyebrow}</p>
              <h2 className="mt-4 text-3xl">{g.title}</h2>
              <p className="mt-3 text-sm text-muted">{g.description}</p>
              <span className="mt-5 inline-block text-sm tracking-[0.12em] text-ice uppercase">
                Lees gids →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
