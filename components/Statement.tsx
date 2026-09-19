import { Reveal } from "./Reveal";
import { SplitLines } from "./SplitLines";

export function Statement() {
  return (
    <section className="statement" id="statement" aria-label="Statement">
      <div className="wrap statement-inner">
        <Reveal as="p" className="statement-kicker">
          Koude onder controle
        </Reveal>
        <SplitLines
          as="p"
          className="statement-text"
          lines={[
            "Niet sneller tappen.",
            <em key="e">Juister koelen.</em>,
          ]}
        />
        <Reveal as="p" className="statement-sub reveal-delay-2">
          Maatwerk. Benelux-nabijheid. Koude die blijft presteren
          tijdens elke shift.
        </Reveal>
      </div>
    </section>
  );
}
