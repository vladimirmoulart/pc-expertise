import { Container } from "@/components/ui/container";
import { DeviceLineup } from "@/components/sections/device-lineup";
import { Icon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site-config";

/* Placement bento sur grand écran : une carte vedette 2×2 et une carte large */
const layout: Record<string, string> = {
  "reparation-depannage": "lg:col-span-2 lg:row-span-2",
  "pc-gamer": "sm:col-span-2",
};

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Expertises"
            title="Tout votre numérique, au même endroit"
            description="De la panne du quotidien au projet sur mesure : huit domaines d’intervention réunis chez un seul interlocuteur."
          />
        </div>

        <div className="mt-14 grid auto-rows-[minmax(13rem,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const featured = index === 0;
            return (
              <article
                key={service.id}
                id={service.id}
                className={`reveal group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft ${
                  featured ? "border-dark bg-dark text-white sm:col-span-2" : "bg-surface hover:border-accent-strong/30"
                } ${layout[service.id] ?? ""}`}
              >
                {featured ? (
                  /* Halo en dégradé radial plutôt qu'en flou : un filtre blur déborde des coins arrondis pendant les animations */
                  <div className="pointer-events-none absolute inset-0 [clip-path:inset(0_round_1.5rem)]" aria-hidden="true">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,102,0,0.32),transparent_55%)]" />
                    <div className="bg-grid absolute inset-0 opacity-60" />
                  </div>
                ) : null}

                <div className="relative flex items-start justify-between">
                  <span className={`grid place-items-center rounded-2xl transition-colors ${featured ? "size-14 bg-accent text-black" : "size-12 bg-background text-foreground group-hover:bg-accent group-hover:text-black"}`}>
                    <Icon name={service.icon} className={featured ? "size-7" : "size-6"} />
                  </span>
                  <span className={`font-display text-sm font-medium tabular-nums ${featured ? "text-neutral-400" : "text-muted"}`}>{String(index + 1).padStart(2, "0")}</span>
                </div>

                {featured ? (
                  <DeviceLineup />
                ) : null}

                <div className="relative mt-10">
                  <h3 className={`font-semibold tracking-tight ${featured ? "text-3xl sm:text-4xl" : "text-xl"}`}>{service.title}</h3>
                  <p className={`mt-3 leading-7 ${featured ? "max-w-md text-lg text-neutral-400" : "text-muted"}`}>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
