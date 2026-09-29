import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "dark" | "light" | "ghostLight";
};

const variants = {
  primary: "bg-accent text-black shadow-glow hover:-translate-y-0.5 hover:bg-[#ff7a1f]",
  dark: "bg-primary text-white hover:-translate-y-0.5 hover:bg-neutral-800",
  light: "bg-white text-black hover:-translate-y-0.5 hover:bg-neutral-100",
  ghostLight: "border border-white/15 bg-white/5 text-white backdrop-blur hover:border-white/30 hover:bg-white/10",
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  return (
    <Link
      className={`group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
