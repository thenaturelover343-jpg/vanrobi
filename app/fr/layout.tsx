import type { ReactNode } from "react";
import Script from "next/script";
import { DocumentLang } from "@/components/DocumentLang";

export default function FrLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Early set for crawlers/browsers that execute JS; html is shared with NL root */}
      <Script id="fr-html-lang" strategy="beforeInteractive">
        {`document.documentElement.setAttribute('lang','fr');`}
      </Script>
      <DocumentLang lang="fr" />
      {children}
    </>
  );
}
