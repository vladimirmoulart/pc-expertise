import { LogoMark } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site-config";

const highlights = ["Basé à Bollène", "Sur rendez-vous", "Contact direct"] as const;

export function Hero() {
  return (
    <section id="accueil" className="relative isolate overflow-hidden bg-dark text-white">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px]" aria-hidden="true" />
      <div className="absolute -bottom-40 -right-20 -z-10 h-80 w-[30rem] rounded-full bg-[#ff8a3d]/10 blur-[120px]" aria-hidden="true" />

      <Container className="grid min-h-[min(100svh,58rem)] items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.1fr_.9fr] lg:pb-28 lg:pt-36">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-2 pr-4 text-xs font-medium text-neutral-300 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {siteConfig.tagline} · {siteConfig.location.city} {siteConfig.location.postalCode}
          </p>

          <h1 className="mt-7 font-hero text-[2.5rem] font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem]">
            Votre informatique,{" "}
            <span className="text-gradient">entre de bonnes mains.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-400">
            Dépannage, réseaux, domotique, téléphonie et vente de matériel : {siteConfig.name} vous accompagne à {siteConfig.location.city} avec un interlocuteur unique.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">
              Prendre rendez-vous
              <Icon name="arrow" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button href="#services" variant="ghostLight">Découvrir nos services</Button>
          </div>

          {/* Une seule ligne sur mobile : texte et puces réduits, sans retour à la ligne */}
          <ul className="mt-10 flex flex-nowrap justify-between gap-x-2 text-[11px] text-neutral-400 min-[360px]:text-xs min-[400px]:text-[13px] sm:justify-start sm:gap-x-6 sm:text-sm">
            {highlights.map((item) => (
              <li key={item} className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap sm:gap-2">
                <span className="grid size-4 place-items-center rounded-full bg-accent/15 text-accent sm:size-5"><Icon name="check" className="size-2.5 sm:size-3" strokeWidth={3} /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}

/* Monogramme PC en grand, mis en scène avec un halo et des anneaux. Masqué tant que le hero est sur une colonne (mobile, tablette) */
function HeroVisual() {
  return (
    <div className="relative ml-auto hidden aspect-square w-full max-w-xl place-items-center lg:grid" aria-hidden="true">
      <div className="absolute inset-[12%] rounded-full bg-accent/25 blur-[90px]" />
      {["inset-0", "inset-[12%]", "inset-[24%]"].map((inset, index) => (
        <span key={inset} className={`absolute ${inset} rounded-full border ${index === 1 ? "border-accent/25" : "border-white/[0.07]"}`} />
      ))}
      <span className="absolute left-[6%] top-1/2 size-2 -translate-y-1/2 rounded-full bg-accent shadow-glow" />
      <span className="absolute bottom-[18%] right-[14%] size-1.5 rounded-full bg-white/40" />
      <LogoMark sizes="460px" className="relative w-[78%] animate-float drop-shadow-[0_25px_50px_rgba(255,102,0,0.25)]" />
    </div>
  );
}
