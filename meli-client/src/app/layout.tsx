import type { Metadata } from "next";

import "@/styles/reset.scss";
import "@/styles/globals.scss";
import localFont from "next/font/local";
import Header from "@/components/header/header";

const proximaNova = localFont({
  src: [
    {
      path: "../fonts/proximanova-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/proximanova-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/proximanova-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-proxima-nova",
  display: "swap",
});

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  title: {
    template: "%s |  Mercado Libre Argentina",
    default: "Mercado Libre Argentina - Envíos Gratis en el día",
  },
  openGraph: {
    images: [
      {
        url: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/logo_homecom_v2.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={proximaNova.className}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
