import type { Metadata } from "next";
import { LegalList, LegalPage, LegalSection } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Comment ${siteConfig.name} collecte, utilise et protège vos données personnelles, et comment exercer vos droits.`,
  alternates: { canonical: "/politique-de-confidentialite" },
};

const { name, contact, location, company } = siteConfig;
const link = "text-accent-strong underline underline-offset-4";

export default function PolitiqueDeConfidentialite() {
  return (
    <LegalPage title="Politique de confidentialité" updatedAt="29 septembre 2026">
      <p>
        {name} accorde une grande importance à la protection de vos données personnelles. Cette politique explique quelles données sont traitées lorsque vous
        consultez ce site ou nous contactez, pourquoi, et comment exercer vos droits, conformément au Règlement général sur la protection des données (RGPD) et
        à la loi « Informatique et Libertés ».
      </p>

      <LegalSection title="Responsable du traitement">
        <p>
          Le responsable du traitement est {company.owner} (EI), exerçant sous le nom commercial {name}, {location.street}, {location.postalCode}{" "}
          {location.city}, SIRET {company.siret}. Pour toute question relative à vos données :{" "}
          <a href={`mailto:${contact.email}`} className={link}>{contact.email}</a>.
        </p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p>Le site ne comporte ni formulaire, ni espace client, ni inscription. Des données sont traitées uniquement dans les cas suivants :</p>
        <LegalList>
          <li>
            <strong className="text-foreground">Lorsque vous nous contactez</strong> par téléphone ou par email : vos nom, coordonnées et le contenu de votre
            demande, ainsi que les informations utiles à l’intervention (description du matériel, de la panne…).
          </li>
          <li>
            <strong className="text-foreground">Lors de votre visite</strong> : l’hébergeur du site enregistre automatiquement des données techniques (adresse
            IP, date et heure, pages consultées, type de navigateur) dans des journaux de connexion, nécessaires à la sécurité et au bon fonctionnement du site.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Finalités et bases légales">
        <LegalList>
          <li>Répondre à vos demandes, établir un devis et réaliser les prestations : exécution de mesures précontractuelles ou du contrat (art. 6.1.b du RGPD).</li>
          <li>Gestion de la relation client, facturation et obligations comptables : obligation légale (art. 6.1.c).</li>
          <li>Sécurité et bon fonctionnement du site : intérêt légitime (art. 6.1.f).</li>
        </LegalList>
        <p>Vos données ne sont jamais vendues, ni utilisées à des fins de prospection commerciale sans votre accord.</p>
      </LegalSection>

      <LegalSection title="Durées de conservation">
        <LegalList>
          <li>Demandes de contact sans suite : 3 ans à compter du dernier échange.</li>
          <li>Données clients : pendant la relation commerciale, puis 3 ans à compter de la dernière prestation.</li>
          <li>Factures et pièces comptables : 10 ans, conformément à l’article L.123-22 du Code de commerce.</li>
          <li>Journaux de connexion : 12 mois maximum.</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Destinataires">
        <p>Vos données sont destinées exclusivement à {name}. Elles peuvent être transmises, dans la stricte limite de leurs missions, à :</p>
        <LegalList>
          <li>l’hébergeur du site : Vercel Inc. ;</li>
          <li>le fournisseur de messagerie : Google (Google Workspace).</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Transferts hors de l’Union européenne">
        <p>
          L’hébergeur du site (Vercel Inc.) et le fournisseur de messagerie (Google) sont des sociétés établies aux États-Unis. Les transferts de
          données qui en découlent sont encadrés par le Data Privacy Framework UE–États-Unis et par les clauses contractuelles types de la Commission
          européenne.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          Ce site n’utilise <strong className="text-foreground">aucun cookie</strong>, ni de mesure d’audience, ni publicitaire, ni de réseau social. Aucun
          bandeau de consentement n’est donc nécessaire. Les polices de caractères sont hébergées sur le site lui-même : aucune donnée n’est transmise à des
          services tiers lors de votre visite.
        </p>
        <p>
          Le lien « Itinéraire » ouvre Google Maps dans un nouvel onglet ; la politique de confidentialité de Google s’applique alors. Si un outil de mesure
          d’audience est ajouté à l’avenir, cette section sera mise à jour.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>Vous disposez des droits suivants sur vos données :</p>
        <LegalList>
          <li>droit d’accès, de rectification et d’effacement ;</li>
          <li>droit à la limitation du traitement et droit d’opposition ;</li>
          <li>droit à la portabilité de vos données ;</li>
          <li>droit de définir des directives relatives au sort de vos données après votre décès.</li>
        </LegalList>
        <p>
          Pour les exercer, écrivez à <a href={`mailto:${contact.email}`} className={link}>{contact.email}</a> ou par courrier à {name}, {location.street},{" "}
          {location.postalCode} {location.city}. Une réponse vous sera apportée dans un délai d’un mois. Un justificatif d’identité pourra vous être demandé en
          cas de doute raisonnable.
        </p>
        <p>
          Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL :{" "}
          <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className={link}>cnil.fr/fr/plaintes</a>.
        </p>
      </LegalSection>

      <LegalSection title="Sécurité">
        <p>
          {name} met en œuvre des mesures techniques et organisationnelles adaptées pour protéger vos données : site servi exclusivement en HTTPS, accès aux
          données limité aux personnes habilitées.
        </p>
      </LegalSection>

      <LegalSection title="Modification de la politique">
        <p>Cette politique peut être mise à jour à tout moment. La date de dernière mise à jour figure en haut de cette page.</p>
      </LegalSection>
    </LegalPage>
  );
}
