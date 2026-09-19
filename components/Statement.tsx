import { Reveal } from "./Reveal";
import { SplitLines } from "./SplitLines";

export function Statement() {
  return (
    <section className="statement" id="statement" aria-label="Statement">
      <div className="wrap statement-inner">
        <Reveal as="p" className="statement-kicker">
          De maat van koude
        </Reveal>
        <SplitLines
          as="p"
          className="statement-text"
          lines={[
            "Niet sneller tapen.",
            <em key="e">Juister koelen.</em>,
          ]}
        />
        <Reveal as="p" className="statement-sub reveal-delay-2">
          Spaans maakwerk. Benelux-nabijheid. Koude die stand houdt —
          shift na shift.
        </Reveal>
      </div>
    </section>
  );
}
