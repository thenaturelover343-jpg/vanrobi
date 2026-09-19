import type { ReactNode } from "react";
import { SplitLines } from "./SplitLines";

type Props = {
  eyebrow: string;
  title: (string | ReactNode)[];
  lede?: string;
  light?: boolean;
};

export function PageHero({ eyebrow, title, lede, light = true }: Props) {
  return (
    <section className={`page-hero${light ? " page-hero-light" : ""}`}>
      <div className="wrap page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <SplitLines as="h1" className="page-hero-title" lines={title} />
        {lede ? <p className="page-hero-lede">{lede}</p> : null}
      </div>
    </section>
  );
}
