import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalPage, LegalSection, ToFill } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.name} : éditeur, hébergeur, propriété intellectuelle et responsabilité.`,
  alternates: { canonical: "/mentions-legales" },
};

const { name, url, contact, location } = siteConfig;

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales" updatedAt="29 septembre 2026">
      <p>
        Conformément à l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN), les informations suivantes sont
        portées à la connaissance des utilisateurs du site <strong className="text-foreground">{url.replace(/^https?:\/\//, "")}</strong>.
      </p>

      <LegalSection title="Éditeur du site">
        <LegalList>
          <li>Raison sociale : <ToFill>raison sociale, ex. PC Expertise ou nom et prénom de l’entrepreneur individuel</ToFill></li>
          <li>Forme juridique : <ToFill>EI, EURL, SARL, SAS, SASU…</ToFill></li>
          <li>Capital social : <ToFill>montant en euros, à supprimer pour une entreprise individuelle</ToFill></li>
          <li>Siège social : {location.street}, {location.postalCode} {location.city}</li>
          <li>SIRET : <ToFill>numéro SIRET à 14 chiffres</ToFill></li>
          <li>Immatriculation : <ToFill>RCS de la ville du greffe et numéro, ou RNE selon l’activité</ToFill></li>
          <li>N° de TVA intracommunautaire : <ToFill>FR…, ou « TVA non applicable, art. 293 B du CGI » en franchise de TVA</ToFill></li>
          <li>Téléphone : <a href={`tel:${contact.phoneHref}`} className="text-accent-strong underline-offset-4 hover:underline">{contact.phone}</a></li>
          <li>Email : <a href={`mailto:${contact.email}`} className="text-accent-strong underline-offset-4 hover:underline">{contact.email}</a></li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Directeur de la publication">
        <p><ToFill>prénom et nom du dirigeant</ToFill>, en qualité de <ToFill>gérant, président…</ToFill>.</p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <LegalList>
          <li>Hébergeur : <ToFill>nom de l’hébergeur, ex. Vercel Inc., OVH SAS, o2switch…</ToFill></li>
          <li>Adresse : <ToFill>adresse postale de l’hébergeur</ToFill></li>
          <li>Téléphone ou contact : <ToFill>numéro de téléphone ou adresse de contact de l’hébergeur</ToFill></li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Conception et réalisation">
        <p>Site conçu et développé par <ToFill>nom du prestataire ou de l’agence, et lien éventuel</ToFill>.</p>
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
