import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

const strengths: { icon: IconName; title: string; text: string }[] = [
  { icon: "pin", title: "Une présence locale", text: `${siteConfig.name} vous accueille ${siteConfig.location.street}, à ${siteConfig.location.city}, dans le ${siteConfig.location.region}.` },
  { icon: "globe", title: "Un champ d’expertise complet", text: "Informatique, télécommunications, réseaux, téléphonie et sécurité réunis au même endroit." },
  { icon: "phoneCall", title: "Un contact direct", text: `Les demandes et rendez-vous sont pris directement au ${siteConfig.contact.phone}.` },
];

export function About() {
  return (
    <section id="a-propos" className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <div className="reveal">
            <SectionHeading
              eyebrow="Pourquoi PC Expertise"
              title="Une expertise accessible, au plus près de vous"
              description="Un interlocuteur de proximité qui prend le temps de comprendre votre besoin avant d’agir."
            />
          </div>

          <ul className="mt-10 space-y-3">
            {strengths.map((strength) => (
              <li key={strength.title} className="reveal flex gap-5 rounded-2xl border bg-surface p-5 transition-shadow hover:shadow-soft sm:p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-strong"><Icon name={strength.icon} className="size-5" /></span>
                <span>
                  <strong className="block font-display text-lg font-semibold tracking-tight">{strength.title}</strong>
                  <span className="mt-1 block leading-7 text-muted">{strength.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <LocationCard />
      </Container>
    </section>
  );
}

function LocationCard() {
  return (
    <div className="reveal relative overflow-hidden rounded-[2rem] bg-dark p-8 text-white [clip-path:inset(0_round_2rem)] sm:p-10">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      {/* Cercles concentriques évoquant un repère sur une carte */}
      <div className="absolute right-[18%] top-[38%] -translate-y-1/2 translate-x-1/2" aria-hidden="true">
        {[22, 16, 10].map((size) => (
          <span key={size} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" style={{ width: `${size}rem`, height: `${size}rem` }} />
        ))}
        <span className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-2xl" />
        <span className="relative grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-black shadow-glow"><Icon name="pin" className="size-6" /></span>
      </div>

      <div className="relative flex min-h-[26rem] flex-col justify-between">
        <p className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent backdrop-blur">Localisation</p>
        <div>
          <p className="font-display text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">{siteConfig.location.city}</p>
          <address className="mt-3 text-lg not-italic leading-7 text-neutral-400">
            {siteConfig.location.street}
            <br />
            {siteConfig.location.postalCode} {siteConfig.location.city} · {siteConfig.location.region}
          </address>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={siteConfig.location.mapsHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-black transition-colors hover:bg-[#ff7a1f]">
              <Icon name="pin" className="size-4" />
              Itinéraire
            </a>
            <p className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-neutral-300 backdrop-blur">
              <Icon name="calendar" className="size-4 text-accent" />
              Accueil sur rendez-vous
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
