import { Container } from "@/components/ui/container";

type LegalPageProps = { title: string; updatedAt: string; children: React.ReactNode };

export function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <main id="contenu">
      {/* Bandeau sombre : le header est transparent en haut de page, texte blanc */}
      <section className="relative isolate overflow-hidden bg-dark pb-14 pt-32 text-white sm:pb-20 sm:pt-40">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div className="absolute -top-40 left-1/2 -z-10 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" aria-hidden="true" />
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Informations légales</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-neutral-400">Dernière mise à jour : {updatedAt}</p>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="max-w-3xl space-y-12 text-base leading-7 text-muted">{children}</div>
      </Container>
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      {children}
    </section>
  );
}

export function LegalList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5 marker:text-accent-strong">{children}</ul>;
}

/* Information à compléter par l'entreprise : affichée entre crochets et surlignée pour être repérée facilement */
export function ToFill({ children }: { children: React.ReactNode }) {
  return <mark className="rounded bg-accent/15 px-1 font-medium text-accent-strong">[{children}]</mark>;
}
