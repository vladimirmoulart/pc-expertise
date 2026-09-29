type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  inverted?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, inverted = false, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
          inverted ? "border-white/15 bg-white/5 text-accent" : "border-accent-strong/20 bg-accent/5 text-accent-strong"
        }`}
      >
        <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className={`mt-5 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl ${inverted ? "text-white" : "text-foreground"}`}>{title}</h2>
      {description ? <p className={`mt-5 text-base leading-7 sm:text-lg ${inverted ? "text-neutral-400" : "text-muted"}`}>{description}</p> : null}
    </div>
  );
}
