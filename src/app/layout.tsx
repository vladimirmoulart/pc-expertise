import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollReset } from "@/components/layout/scroll-reset";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
// Pas de préchargement : Space Grotesk ne sert qu'aux titres de section, tous sous la ligne de flottaison
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap", preload: false });
const montserrat = Montserrat({ subsets: ["latin"], weight: "800", variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.tagline} à ${siteConfig.location.city}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
    title: `${siteConfig.name} · ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} ${montserrat.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col antialiased">
        <a className="skip-link" href="#contenu">Aller au contenu</a>
        <ScrollReset />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
