import { whyItems } from "@/lib/products";
import { Reveal } from "./Reveal";

export function Why() {
  return (
    <section className="why" id="waarom">
      <div className="wrap why-layout">
        <Reveal className="why-intro">
          <p className="eyebrow">VanRobi</p>
          <h2>
            Waarom <em>wij</em>
          </h2>
          <p>
            Wij brengen Golderos naar de Benelux — met advies, specs en levering
            die horeca begrijpt.
          </p>
        </Reveal>
        <ol className="why-list">
          {whyItems.map((item) => (
            <Reveal as="li" key={item.n} className={item.delay}>
              <span className="why-n">{item.n}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
