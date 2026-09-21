import { Link } from "@tanstack/react-router";
import { cases } from "@/lib/social-proof";
import { experience } from "@/lib/experience";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";

export function SocialProof({ modelId }: { modelId?: string }) {
  if (!experience.socialProof) return null;
  const list = modelId
    ? cases.filter((c) => c.modelId === modelId || c.modelId === null).slice(0, 2)
    : cases;

  return (
    <section className="border-t border-line px-5 py-24 md:px-8">
      <div className="mx-auto max-w-[1220px]">
        <Reveal>
          <p className="kicker">In de praktijk</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
            Wat de <em className="italic text-ice">bar</em> merkt.
          </h2>
          <p className="mt-4 max-w-lg text-sm text-muted">
            Voorbeeldcases uit horeca, events en installatie — geen verzonnen namen.
            Onderhoud en plaatsing via{" "}
            <a href={site.partner.url} className="text-ice" target="_blank" rel="noreferrer">
              {site.partner.name}
            </a>
            .
          </p>
        </Reveal>
        <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
          {list.map((c) => (
            <blockquote key={c.id} className="bg-bg p-7 md:p-9">
              <p className="font-display text-2xl leading-snug text-fg md:text-3xl">“{c.quote}”</p>
              <footer className="mt-6 flex flex-wrap items-baseline justify-between gap-2 text-sm text-muted">
                <span>{c.role}</span>
                {c.modelId ? (
                  <Link to="/producten/$id" params={{ id: c.modelId }} className="text-ice">
                    {c.model}
                  </Link>
                ) : (
                  <span className="text-ice">{c.model}</span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
