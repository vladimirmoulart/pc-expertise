import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-config";

const steps: { icon: IconName; title: string; text: string }[] = [
  { icon: "phoneCall", title: "Vous nous appelez", text: `Décrivez votre besoin ou votre problème au ${siteConfig.contact.phone}.` },
  { icon: "calendar", title: "On fixe un rendez-vous", text: "Un créneau est convenu ensemble pour vous recevoir." },
  { icon: "wrench", title: "On prend le relais", text: "Diagnostic, conseil et intervention, avec des explications claires." },
];

export function Method() {
  return (
    <section id="methode" className="relative overflow-hidden bg-dark py-24 text-white sm:py-32">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute left-1/2 top-full h-96 w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[140px]" aria-hidden="true" />

      <Container className="relative">
        <div className="reveal">
          <SectionHeading inverted align="center" eyebrow="Méthode" title="Simple, du premier appel à la solution" />
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[16%] right-[16%] top-16 hidden h-px bg-linear-to-r from-transparent via-accent/50 to-transparent md:block" aria-hidden="true" />
          <ol className="relative grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="reveal relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur">
              <span className="relative mx-auto grid size-16 place-items-center rounded-2xl border border-white/10 bg-neutral-900 text-accent shadow-glow">
                <Icon name={step.icon} className="size-7" />
                <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-accent font-display text-xs font-bold text-black">{index + 1}</span>
              </span>
              <h3 className="mt-7 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 leading-7 text-neutral-400">{step.text}</p>
            </li>
          ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
