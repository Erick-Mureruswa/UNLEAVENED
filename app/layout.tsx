import type { Metadata } from "next";
import {
  Archivo,
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Inter,
} from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IntroLoader from "@/components/layout/IntroLoader";
import CartProvider from "@/components/cart/CartProvider";
import CartDrawer from "@/components/cart/CartDrawer";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const canela = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-canela",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Premium minimalist streetwear designed for intentional living. Heavyweight essentials built to outlast trends. Authenticity cannot be manufactured.",
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    url: SITE_URL,
    images: [{ url: "/images/products/uc-001-bone-front.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} ${canela.variable} ${plexMono.variable}`}
    >
      <body>
        <IntroLoader />
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
