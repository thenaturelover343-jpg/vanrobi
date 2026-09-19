import { categories } from "@/lib/products";
import { Reveal } from "./Reveal";

export function Categories() {
  return (
    <section className="categories" id="categorieen">
      <div className="wrap">
        <Reveal as="header" className="block-head light">
          <p className="eyebrow">Toepassingen</p>
          <h2>
            Waar de koude <em>telt</em>
          </h2>
          <p className="block-lede">
            Van vaste bar tot festivalterrein, dezelfde industriële
            betrouwbaarheid.
          </p>
        </Reveal>
        <div className="cat-grid">
          {categories.map((c) => (
            <Reveal
              as="a"
              key={c.index}
              className={`cat ${c.delay}`.trim()}
              href={c.href}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.image}
                alt={c.alt}
                loading="lazy"
                width={1400}
                height={1050}
              />
              <span className="cat-label">
                <em>{c.index}</em> {c.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
