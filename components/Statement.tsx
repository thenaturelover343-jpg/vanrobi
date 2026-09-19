import { Reveal } from "./Reveal";

export function Statement() {
  return (
    <section className="statement" id="statement" aria-label="Statement">
      <div className="wrap">
        <Reveal as="p" className="statement-kicker">
          De maat van koude
        </Reveal>
        <Reveal as="p" className="statement-text">
          Niet sneller tapen.
          <br />
          <em>Juister koelen.</em>
        </Reveal>
        <Reveal as="p" className="statement-sub">
          Spaans maakwerk. Benelux-nabijheid. Koude die stand houdt —
          shift na shift.
        </Reveal>
      </div>
    </section>
  );
}
