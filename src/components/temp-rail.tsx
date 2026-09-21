import { useCold } from "@/lib/cold";
import { useLang } from "@/lib/i18n";

export function TempRail() {
  const temp = useCold((s) => s.temp);
  const grow = useCold((s) => s.grow);
  const fr = useLang() === "fr";

  return (
    <aside
      className="pointer-events-none fixed top-1/2 right-4 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 text-ice md:flex"
      aria-hidden
    >
      <strong className="spec-num font-display text-2xl font-normal text-fg">
        {temp.toFixed(1)}°
      </strong>
      <span className="relative h-20 w-px bg-line">
        <i
          className="absolute right-0 bottom-0 left-0 bg-ice"
          style={{ height: `${Math.round(grow * 100)}%` }}
        />
      </span>
      <span
        className="text-[0.58rem] tracking-[0.22em] uppercase opacity-70"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {fr ? "Banquise" : "Ijsbank"}
      </span>
    </aside>
  );
}