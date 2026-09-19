"use client";

import { useLayoutEffect } from "react";

/** Sets <html lang> for locale sections (root layout is shared). */
export function DocumentLang({ lang }: { lang: string }) {
  useLayoutEffect(() => {
    const prev = document.documentElement.getAttribute("lang");
    document.documentElement.setAttribute("lang", lang);
    return () => {
      if (prev) document.documentElement.setAttribute("lang", prev);
      else document.documentElement.removeAttribute("lang");
    };
  }, [lang]);

  return null;
}
