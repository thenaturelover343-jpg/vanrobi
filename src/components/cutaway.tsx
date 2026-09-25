import { Reveal } from "./reveal";
import { withBase } from "@/lib/base";
import { OptimizedImage } from "./optimized-image";
import { useLang } from "@/lib/i18n";
import { frCutawayCopy } from "@/lib/fr";

export function Cutaway() {
  const fr = useLang() === "fr";
  return (
    <section id="statement" className="border-t border-line bg-bg-2">
      <div className="mx-auto grid max-w-[1220px] gap-0 lg:grid-cols-2">
        <div className="photo-well bright min-h-[42vh] lg:min-h-[70vh]">
          <OptimizedImage
            src={withBase("/worlds/statement-tap.jpg")}
            alt="Bier tappen uit een chroomkraan"
            width={1600}
            height={1067}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center px-5 py-16 md:px-12">
          <Reveal>
            <p className="kicker">{fr ? frCutawayCopy.kicker : "Koude onder controle"}</p>
            <h2 className="mt-4 text-4xl md:text-6xl">
              {fr ? frCutawayCopy.line1 : "Koeling die de piek aanhoudt,"}
              <em className="italic text-ice"> {fr ? frCutawayCopy.em : "niet alleen de eerste glazen."}</em>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted">
              {fr
                ? frCutawayCopy.sub
                : "Maatwerk. Benelux-nabijheid. Koude die blijft presteren tijdens elke shift."}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
