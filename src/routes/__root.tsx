import { createRootRoute, HeadContent, Outlet, Scripts, useRouterState } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { experience } from "@/lib/experience";
import { withBase } from "@/lib/base";
import { isFrPath } from "@/lib/i18n";
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
      { name: "theme-color", content: experience.visualRefresh ? "#F7F9FA" : "#05080C" },
      { name: "robots", content: onPages ? "noindex, follow" : "index, follow" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: withBase("/favicon.svg") },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Serif:ital@0;1&display=swap",
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
  );
}
