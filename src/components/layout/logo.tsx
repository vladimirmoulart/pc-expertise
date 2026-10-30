import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import logo from "../../../public/images/logo.webp";
import logoMark from "../../../public/images/logo-mark.webp";

type LogoProps = { className?: string; preload?: boolean; sizes?: string };

/* `sizes` doit refléter la largeur affichée : sans lui, Next sert l'image en 1200 à 3840 px pour un logo de 200 px */
export function Logo({ className = "h-8 w-auto", preload = false, sizes = "240px" }: LogoProps) {
  return <Image src={logo} alt={siteConfig.name} preload={preload} sizes={sizes} unoptimized className={className} />;
}

export function LogoMark({ className = "h-8 w-auto", preload = false, sizes = "64px" }: LogoProps) {
  return <Image src={logoMark} alt="" preload={preload} sizes={sizes} unoptimized className={className} />;
}
