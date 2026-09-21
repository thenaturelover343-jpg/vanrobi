import { useRouterState } from "@tanstack/react-router";
import { counterpartPath, useLang } from "@/lib/i18n";
import { withBase } from "@/lib/base";
import { cn } from "@/lib/cn";

export function LangSwitch({ className }: { className?: string }) {
  const lang = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const other = counterpartPath(pathname);
  const nlHref = lang === "nl" ? pathname : other;
  const frHref = lang === "fr" ? pathname : other;

  return (
    <div
      className={cn(
        "flex items-center gap-1 text-[0.68rem] tracking-[0.16em] uppercase",
        className,
      )}
      aria-label="Language"
    >
      <a href={withBase(nlHref)} className={lang === "nl" ? "text-ice" : "text-muted hover:text-fg"} hrefLang="nl" lang="nl">
        NL
      </a>
      <span className="text-muted" aria-hidden>
        /
      </span>
      <a href={withBase(frHref)} className={lang === "fr" ? "text-ice" : "text-muted hover:text-fg"} hrefLang="fr" lang="fr">
        FR
      </a>
    </div>
  );
}
