import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { getGuide, guides, formatGuideDate } from "@/lib/guides";
import { GuideBody } from "@/lib/guide-content";
import { CtaBand } from "@/components/cta-band";
import { Sizer } from "@/components/sizer";
import { breadcrumbJsonLd, brandTitle, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/gids/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    return { guide };
  },
  head: ({ loaderData }) => {
    const guide = loaderData?.guide;
    if (!guide) return seoHead({ title: "Gids bierkoeler | VanRobi", description: "", path: "/gids" });
    return seoHead({
      title: brandTitle(guide.seoTitle ?? guide.title),
      description: guide.description,
      path: `/gids/${guide.slug}`,
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gidsen", path: "/gids" },
          { name: guide.title, path: `/gids/${guide.slug}` },
        ]),
      ],
    });
  },
  component: GuidePage,
});

function GuidePage() {
  const { guide } = Route.useLoaderData();
  const more = guides.filter((g) => g.slug !== guide.slug && g.slug !== "ijsbankkoeler-vs-gamko").slice(0, 3);

  return (
    <PageShell>
      <PageHero kicker={guide.eyebrow} title={guide.title} lede={guide.lede} />
      <p className="mx-auto max-w-[1220px] px-5 pt-6 text-sm text-muted md:px-8">
        <time dateTime={guide.updated}>Laatst bijgewerkt: {formatGuideDate(guide.updated)}</time>
      </p>
      <GuideBody slug={guide.slug} />
      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[720px]">
          <Sizer />
        </div>
      </section>
      <section className="border-t border-line px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[1220px]">
          <p className="kicker">Verder lezen</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {more.map((g) => (
              <Link key={g.slug} to="/gids/$slug" params={{ slug: g.slug }} className="block hover:text-ice">
                <p className="kicker">{g.eyebrow}</p>
                <h2 className="mt-3 text-2xl">{g.title}</h2>
                <p className="mt-2 text-sm text-muted">{g.description}</p>
              </Link>
            ))}
          </div>
          <p className="mt-10">
            <Link to="/gids" className="text-sm tracking-[0.12em] text-ice uppercase">
              ← Alle gidsen
            </Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
