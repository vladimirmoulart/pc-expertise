import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

type LogoProps = { className?: string; preload?: boolean; sizes?: string };

/* `sizes` doit refléter la largeur affichée : sans lui, Next sert l'image en 1200 à 3840 px pour un logo de 200 px */
export function Logo({ className = "h-8 w-auto", preload = false, sizes = "240px" }: LogoProps) {
  return <Image src="/images/logo.png" alt={siteConfig.name} width={1200} height={229} preload={preload} sizes={sizes} className={className} />;
}

export function LogoMark({ className = "h-8 w-auto", preload = false, sizes = "64px" }: LogoProps) {
  return <Image src="/images/logo-mark.png" alt="" width={1351} height={630} preload={preload} sizes={sizes} className={className} />;
}
