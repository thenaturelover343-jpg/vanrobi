import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export function MagneticCta({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  const reset = () => {
    ref.current?.style.setProperty("--magnetic-x", "0px");
    ref.current?.style.setProperty("--magnetic-y", "0px");
  };

  const followPointer = (event: PointerEvent<HTMLSpanElement>) => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches ||
      !ref.current
    ) {
      return;
    }

    const bounds = ref.current.getBoundingClientRect();
    const x = (event.clientX - (bounds.left + bounds.width / 2)) * 0.16;
    const y = (event.clientY - (bounds.top + bounds.height / 2)) * 0.2;
    ref.current.style.setProperty("--magnetic-x", `${x.toFixed(1)}px`);
    ref.current.style.setProperty("--magnetic-y", `${y.toFixed(1)}px`);
  };

  return (
    <span
      ref={ref}
      className={cn("magnetic-cta inline-flex", className)}
      onPointerMove={followPointer}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
    </span>
  );
}
