import { Icon } from "@/components/ui/icons";
import { services } from "@/lib/site-config";

export function Marquee() {
  const items = [...services, ...services];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-dark py-5 text-neutral-400" aria-hidden="true">
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-dark to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-dark to-transparent" />
      <div className="flex w-max animate-marquee gap-12">
        {items.map((service, index) => (
          <span key={`${service.id}-${index}`} className="inline-flex items-center gap-3 whitespace-nowrap font-display text-lg font-medium">
            <Icon name={service.icon} className="size-5 text-accent" />
            {service.title}
          </span>
        ))}
      </div>
    </div>
  );
}
