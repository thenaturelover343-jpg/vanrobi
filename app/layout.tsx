import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { IceCursor } from "@/components/IceCursor";
import { organizationSchema } from "@/lib/schema";
import { SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
 metadataBase: new URL(SITE_URL + "/"),
 title: "VanRobi — ijsbankkoelers België & Nederland",
 description:
 "VanRobi is de specialist in professionele ijsbankkoelers voor België en Nederland. Professionele ijsbankkoelers: Goldy, V100, V100 portable en V200 voor horeca, events en installateurs.",
 icons: {
 icon: `${process.env.NEXT_PUBLIC_BASE_PATH || "/vanrobi"}/assets/logo.svg`,
 },
 openGraph: {
 type: "website",
 locale: "nl_BE",
 siteName: "VanRobi",
 url: absoluteUrl("/"),
 images: [
 {
 url: absoluteUrl("/assets/hero-official.jpg"),
 alt: "VanRobi, specialist ijsbankkoelers België & Nederland",
 },
 ],
 },
 alternates: {
 canonical: absoluteUrl("/"),
 languages: {
 "nl-BE": absoluteUrl("/"),
 "fr-BE": absoluteUrl("/fr/"),
 "x-default": absoluteUrl("/"),
 },
 },
 twitter: {
 card: "summary_large_image",
 title: "VanRobi — ijsbankkoelers België & Nederland",
 description:
 "VanRobi is de specialist in professionele ijsbankkoelers voor België en Nederland. Professionele ijsbankkoelers voor horeca, events en installateurs.",
 images: [absoluteUrl("/assets/hero-official.jpg")],
 },
};

export const viewport: Viewport = {
 themeColor: "#0A1628",
 width: "device-width",
 initialScale: 1,
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="js-reveal">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect" href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd data={organizationSchema()} />
        <Analytics />
        <IceCursor />
        {children}
      </body>
    </html>
  );
}
