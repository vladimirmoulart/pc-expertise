import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalPage, LegalSection, ToFill } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.name} : éditeur, hébergeur, propriété intellectuelle et responsabilité.`,
  alternates: { canonical: "/mentions-legales" },
};

const { name, url, contact, location, company } = siteConfig;

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales" updatedAt="29 septembre 2026">
      <p>
        Conformément à l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN), les informations suivantes sont
        portées à la connaissance des utilisateurs du site <strong className="text-foreground">{url.replace(/^https?:\/\//, "")}</strong>.
      </p>

      <LegalSection title="Éditeur du site">
        <LegalList>
          <li>Raison sociale : {company.owner} (EI), exerçant sous le nom commercial {name}</li>
          <li>Forme juridique : {company.legalForm}</li>
          <li>Siège social : {location.street}, {location.postalCode} {location.city}</li>
          <li>SIRET : {company.siret}</li>
          <li>Immatriculation : {company.registration}</li>
          <li>N° de TVA intracommunautaire : {company.vat}</li>
          <li>Téléphone : <a href={`tel:${contact.phoneHref}`} className="text-accent-strong underline-offset-4 hover:underline">{contact.phone}</a></li>
          <li>Email : <a href={`mailto:${contact.email}`} className="text-accent-strong underline-offset-4 hover:underline">{contact.email}</a></li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Directeur de la publication">
        <p>{company.owner}, en qualité de {company.publisherRole}.</p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <LegalList>
          <li>Hébergeur : Vercel Inc.</li>
          <li>Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
          <li>Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent-strong underline-offset-4 hover:underline">vercel.com</a></li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Conception et réalisation">
        <p>
          Site conçu et développé par WEBLAD, Vladimir Moulart (
          <a href="https://www.instagram.com/weblad.fr" target="_blank" rel="noopener noreferrer" className="text-accent-strong underline-offset-4 hover:underline">
            instagram.com/weblad.fr
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L’ensemble des contenus présents sur ce site (textes, logos, illustrations, mise en page, code) est la propriété exclusive de {name}, sauf mention
          contraire, et est protégé par le droit d’auteur et le droit des marques. Toute reproduction, représentation, modification ou exploitation, totale ou
          partielle, sans autorisation écrite préalable est interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la
          propriété intellectuelle.
        </p>
        <p>Les marques et logos de tiers éventuellement cités (fabricants, opérateurs, fournisseurs d’accès) restent la propriété de leurs détenteurs respectifs.</p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          {name} s’efforce de fournir des informations exactes et à jour, sans pouvoir en garantir l’exhaustivité. Les informations du site sont données à titre
          indicatif et peuvent être modifiées à tout moment. {name} ne saurait être tenue responsable d’une interruption du site, d’un problème technique ou de
          l’usage qui pourrait être fait des informations publiées.
        </p>
      </LegalSection>

      <LegalSection title="Liens externes">
        <p>
          Le site peut contenir des liens vers des sites tiers, par exemple Google Maps pour l’itinéraire. {name} n’exerce aucun contrôle sur ces sites et
          décline toute responsabilité quant à leur contenu ou à leurs pratiques en matière de données personnelles.
        </p>
      </LegalSection>

      <LegalSection title="Données personnelles et cookies">
        <p>
          Le traitement des données personnelles et l’usage des cookies sont décrits dans la{" "}
          <Link href="/politique-de-confidentialite" className="text-accent-strong underline underline-offset-4">politique de confidentialité</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Médiation de la consommation">
        <p>
          Conformément aux articles L.612-1 et suivants du Code de la consommation, en cas de litige non résolu avec {name}, le client consommateur peut
          recourir gratuitement au médiateur de la consommation suivant : <ToFill>nom du médiateur</ToFill>, <ToFill>adresse postale et site Internet du médiateur</ToFill>.
        </p>
      </LegalSection>

      <LegalSection title="Droit applicable">
        <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.</p>
      </LegalSection>
    </LegalPage>
  );
}
