import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VanRobi — Officiële Golderos-distributeur België & Nederland",
  description:
    "VanRobi is de officiële Golderos-distributeur voor België en Nederland. Professionele ijsbankkoelers: Goldy, V100, V100 portable en V200 voor horeca, events en installateurs.",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/logo.svg`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0b09",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
