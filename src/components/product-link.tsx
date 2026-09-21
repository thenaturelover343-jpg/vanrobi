import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export function ProductLink({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  const fr = useLang() === "fr";
  if (fr) {
    return (
      <Link to="/fr/produits/$id" params={{ id }} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <Link to="/producten/$id" params={{ id }} className={className}>
      {children}
    </Link>
  );
}