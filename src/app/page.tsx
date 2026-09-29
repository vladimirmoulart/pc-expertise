import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Method } from "@/components/sections/method";
import { Services } from "@/components/sections/services";
import { services, siteConfig } from "@/lib/site-config";

// Défini ici et non dans le layout, pour que les futures pages ne déclarent pas l'accueil comme canonique
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  description: siteConfig.description,
  telephone: siteConfig.contact.phoneHref,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.location.street,
    addressLocality: siteConfig.location.city,
    postalCode: siteConfig.location.postalCode,
    addressCountry: "FR",
  },
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service.title },
  })),
};

export default function Home() {
  return (
    <main id="contenu">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Hero />
      <Marquee />
      <Services />
      <Method />
      <About />
      <Contact />
    </main>
  );
}
