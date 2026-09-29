import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site-config";

const channels: { icon: IconName; label: string; value: string; href: string; external?: boolean }[] = [
  { icon: "phoneCall", label: "Téléphone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phoneHref}` },
  { icon: "mail", label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: "pin", label: `Boutique · ${siteConfig.location.postalCode} ${siteConfig.location.city}`, value: siteConfig.location.street, href: siteConfig.location.mapsHref, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="pb-24 sm:pb-32">
      <Container>
        <div className="reveal relative isolate overflow-hidden rounded-[2rem] bg-dark px-5 py-10 text-white [clip-path:inset(0_round_2rem)] sm:rounded-[2.5rem] sm:px-12 sm:py-20 sm:[clip-path:inset(0_round_2.5rem)] lg:px-16">
          <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
          <div className="absolute -right-32 -top-32 -z-10 size-[28rem] rounded-full bg-accent/35 blur-[120px]" aria-hidden="true" />
          <div className="absolute -bottom-40 -left-20 -z-10 size-96 rounded-full bg-[#ff8a3d]/10 blur-[100px]" aria-hidden="true" />

          <div className="grid grid-cols-[minmax(0,1fr)] gap-8 sm:gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
                Contact
              </p>
              <h2 className="mt-5 text-[2rem] leading-tight font-semibold sm:leading-none sm:text-5xl tracking-[-0.04em] lg:text-6xl">
                Parlons de <span className="text-gradient">votre besoin.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-neutral-400 sm:mt-6 sm:text-lg sm:leading-8">
                {siteConfig.name} vous reçoit sur <span className="whitespace-nowrap">rendez-vous</span>. Contactez directement l’entreprise par téléphone ou par email, ou passez à la boutique.
              </p>
            </div>

            <div className="min-w-0 space-y-2.5 sm:space-y-3">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur sm:gap-5 sm:rounded-3xl sm:p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/[0.07] lg:p-6"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-black shadow-glow sm:size-14 sm:rounded-2xl"><Icon name={channel.icon} className="size-5 sm:size-6" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-neutral-400 sm:text-sm">{channel.label}</span>
                    <span className="block truncate font-display text-base font-semibold tracking-tight min-[400px]:text-lg sm:text-2xl">{channel.value}</span>
                  </span>
                  <Icon name="arrow" className="size-4 shrink-0 text-neutral-500 sm:size-5 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
