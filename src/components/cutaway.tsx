import { Reveal } from "./reveal";

export function Cutaway() {
  return (
    <section id="statement" className="border-t border-line bg-bg-2">
      <div className="mx-auto grid max-w-[1220px] gap-0 lg:grid-cols-2">
        <div className="photo-well bright min-h-[42vh] lg:min-h-[70vh]">
          <img
            src="/worlds/statement-tap.jpg"
            alt="Bier tappen uit een chroomkraan"
            width={1600}
            height={1067}
          />
        </div>
        <div className="flex flex-col justify-center px-5 py-16 md:px-12">
          <Reveal>
            <p className="kicker">Koude onder controle</p>
            <h2 className="mt-4 text-4xl md:text-6xl">
              Niet sneller tappen.
              <em className="italic text-ice"> Juister koelen.</em>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted">
              Maatwerk. Benelux-nabijheid. Koude die blijft presteren tijdens elke shift.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
