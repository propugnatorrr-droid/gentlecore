import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Gentle Core — Private Luxury Resale House",
    template: "%s · Gentle Core",
  },
  description:
    "Rare handbags, watches, jewelry, and accessories presented through private dossiers for serious buyers worldwide.",
  keywords: [
    "luxury resale",
    "Hermès Birkin",
    "Rolex Patek Philippe",
    "rare handbags",
    "private luxury sourcing",
  ],
  openGraph: {
    title: "Gentle Core — Private Luxury Resale House",
    description:
      "Rare handbags, watches, jewelry, and accessories presented through private dossiers for serious buyers worldwide.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og/cover.svg", width: 1200, height: 630, alt: site.name }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <GrainOverlay />
        <CustomCursor />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
