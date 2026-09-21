import { createRootRoute, HeadContent, Outlet, Scripts, useRouterState } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { experience } from "@/lib/experience";
import { withBase } from "@/lib/base";
import { isFrPath } from "@/lib/i18n";
import { ImageGuard } from "@/components/image-guard";
import appCss from "../styles.css?url";

const APP_NAME = "VanRobi";
const icePhoto = `url("${withBase("/worlds/ice-bank.jpg")}")`;
const onPages = (import.meta.env.BASE_URL || "/").includes("vanrobi");

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "VanRobi: professionele ijsbankkoelers voor horeca en events in België en Nederland. Stabiele koude. Elke shift.",
      },
      { name: "theme-color", content: experience.visualRefresh ? "#F7F9FA" : "#05080C" },
      { name: "robots", content: onPages ? "noindex, follow" : "index, follow" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: withBase("/favicon.svg") },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: withBase("/__grok/manifest.webmanifest") },
      { rel: "apple-touch-icon", href: withBase("/__grok/icon-180.png") },
      {
        rel: "preload",
        href: withBase("/fonts/ibm-plex-sans-latin.woff2"),
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: withBase("/fonts/instrument-serif-latin.woff2"),
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = isFrPath(pathname) ? "fr" : "nl";
  return (
    <html
      lang={lang}
      className={`antialiased${experience.visualRefresh ? " exp-v2" : ""}${experience.heroReadFade ? " hero-read-fade" : ""}`}
      style={{ ["--ice-photo" as string]: icePhoto }}
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <ImageGuard />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
