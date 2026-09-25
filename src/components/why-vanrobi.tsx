import { whyItems } from "@/lib/products";
import { Reveal } from "./reveal";
import { useLang } from "@/lib/i18n";
import { frHome, frWhyHead } from "@/lib/fr";

export function WhyVanRobi() {
  const fr = useLang() === "fr";
  const items = fr ? frHome.why : whyItems;
  return (
    <section className="border-t border-line px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="kicker">{fr ? frWhyHead.kicker : "VanRobi"}</p>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {fr ? frWhyHead.before : "Waarom"}{" "}
            <em className="italic text-ice">{fr ? frWhyHead.em : "wij"}</em>
          </h2>
          <p className="mt-5 max-w-md text-muted">
            {fr
              ? frHome.whyIntro
              : "VanRobi levert ijsbankkoelers voor horeca in België en Nederland: heldere specs, advies op maat, levering en onderhoud via Taponderhoud."}
          </p>
        </Reveal>
        <ol className="space-y-8">
          {items.map((item, i) => (
            <Reveal key={item.n} delay={i * 70}>
              <li className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-line pt-6">
                <span className="spec-num text-ice">{item.n}</span>
                <div>
                  <h3 className="font-sans text-base tracking-[0.04em]">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}