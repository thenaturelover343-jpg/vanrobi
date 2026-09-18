import { Reveal } from "./Reveal";

export function Statement() {
  return (
    <section className="statement" aria-hidden="false">
      <div className="wrap">
        <Reveal as="p" className="statement-text">
          Spaans maakwerk. <em>Benelux-nabijheid.</em>
          <br className="hide-sm" />
          Koude die stand houdt — shift na shift.
        </Reveal>
      </div>
    </section>
  );
}
