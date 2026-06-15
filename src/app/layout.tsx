import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site } from "@/lib/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Gentle Outlet — Private Luxury Resale House Dubai",
    template: "%s · Gentle Outlet",
  },
  description:
    "Rare handbags, watches, jewelry, and accessories curated in Dubai and presented through private dossiers for serious buyers worldwide.",
  keywords: [
    "luxury resale Dubai",
    "Hermès Birkin Dubai",
    "Rolex Patek Philippe Dubai",
    "rare handbags",
    "private luxury sourcing",
  ],
  openGraph: {
    title: "Gentle Outlet — Private Luxury Resale House Dubai",
    description:
      "Rare handbags, watches, jewelry, and accessories curated in Dubai and presented through private dossiers for serious buyers worldwide.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og/cover.svg", width: 1200, height: 630, alt: site.name }],
    locale: "en_AE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <ScrollProgress />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
