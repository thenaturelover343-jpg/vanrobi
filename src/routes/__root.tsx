import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { experience } from "@/lib/experience";
import { withBase } from "@/lib/base";
import appCss from "../styles.css?url";

const APP_NAME = "VanRobi";
const icePhoto = `url("${withBase("/worlds/ice-bank.jpg")}")`;

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
  component: () => (
    <html
      lang="nl"
      className={experience.visualRefresh ? "antialiased exp-v2" : "antialiased"}
      style={{ ["--ice-photo" as string]: icePhoto }}
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
