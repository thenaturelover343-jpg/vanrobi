import type { FaqItem } from "@/lib/schema";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title?: string;
  faqs: FaqItem[];
  id?: string;
};

export function FaqBlock({
  eyebrow = "FAQ",
  title = "Veelgestelde vragen",
  faqs,
  id = "faq",
}: Props) {
  if (!faqs.length) return null;

  return (
    <section className="page-section page-section-alt" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <header className="block-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>
            {title.includes(" ") ? (
              <>
                {title.split(" ").slice(0, -1).join(" ")}{" "}
                <em>{title.split(" ").slice(-1)}</em>
              </>
            ) : (
              title
            )}
          </h2>
        </header>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <Reveal key={f.question} className={i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : ""}>
              <details className="faq-item">
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
