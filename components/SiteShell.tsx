import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";

export function SiteShell({
  children,
  intro = false,
}: {
  children: ReactNode;
  intro?: boolean;
}) {
  return (
    <>
      {intro ? null : null}
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
