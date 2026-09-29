import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { services, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark text-neutral-400">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" aria-hidden="true" />
      <Container className="py-12 sm:py-20">
        {/* Mobile : Services et Navigation côte à côte, logo et contact sur toute la largeur */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 max-w-xs lg:col-span-1">
            <Logo sizes="232px" className="h-10 w-auto sm:h-11" />
            <p className="mt-4 text-sm leading-6 sm:mt-5">Informatique et télécommunications à {siteConfig.location.city}. Accueil sur rendez-vous.</p>
          </div>

          <FooterColumn title="Services">
            {services.slice(0, 5).map((service) => (
              <Link key={service.id} href={`/#${service.id}`} className="transition-colors hover:text-white">{service.title}</Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Navigation">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">{item.label}</Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact" className="col-span-2 lg:col-span-1" listClassName="flex-row flex-wrap gap-x-6 lg:flex-col">
            <a href={`tel:${siteConfig.contact.phoneHref}`} className="inline-flex items-center gap-2 transition-colors hover:text-white"><Icon name="phoneCall" className="size-4" />{siteConfig.contact.phone}</a>
            <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-2 break-all transition-colors hover:text-white"><Icon name="mail" className="size-4 shrink-0" />{siteConfig.contact.email}</a>
            <a href={siteConfig.location.mapsHref} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 transition-colors hover:text-white"><Icon name="pin" className="mt-0.5 size-4 shrink-0" /><span>{siteConfig.location.street}<br className="hidden lg:block" /><span className="lg:hidden">, </span>{siteConfig.location.postalCode} {siteConfig.location.city}</span></a>
          </FooterColumn>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t sm:mt-16 border-white/10 pt-6 text-xs text-neutral-400 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
          <nav className="flex gap-5" aria-label="Informations légales">
            {siteConfig.legal.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">{item.label}</Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children, className = "", listClassName = "flex-col" }: { title: string; children: React.ReactNode; className?: string; listClassName?: string }) {
  return (
    <div className={className}>
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className={`mt-4 flex items-start gap-3 text-sm ${listClassName}`}>{children}</div>
    </div>
  );
}
