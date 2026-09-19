import { whyItems } from "@/lib/products";
import { Reveal } from "./Reveal";
import { SplitLines } from "./SplitLines";

export function Why() {
  return (
    <section className="why" id="waarom">
      <div className="wrap why-layout">
        <Reveal className="why-intro">
          <p className="eyebrow">VanRobi</p>
          <SplitLines
            as="h2"
            instant
            lines={[
              <span key="waarom">
                Waarom <em>wij</em>
              </span>,
            ]}
          />
          <p>
            VanRobi is het merk voor professionele ijsbankkoelers in de
            Benelux-horeca, met advies, specs en levering die de bar begrijpt.
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
