"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/logo";
import { Icon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border py-2 pl-4 pr-2 transition-all duration-300 sm:pl-5 ${
          solid ? "border-white/10 bg-dark/80 shadow-2xl shadow-black/20 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <Link href="/" aria-label="PC Expertise, accueil" onClick={() => setOpen(false)}>
          <Logo preload sizes="(min-width: 640px) 190px, 150px" className="h-7 w-auto sm:h-9" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-black transition-all duration-200 hover:bg-[#ff7a1f] sm:px-5"
          >
            <Icon name="phoneCall" className="size-4" />
            <span className="sm:hidden">Appeler</span>
            <span className="hidden sm:inline">{siteConfig.contact.phone}</span>
          </a>
          <button
            type="button"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Navigation mobile"
        hidden={!open}
        className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-dark/95 p-2 shadow-2xl backdrop-blur-xl lg:hidden"
      >
        {siteConfig.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-neutral-200 hover:bg-white/5"
          >
            {item.label}
            <Icon name="arrow" className="size-4 text-neutral-500" />
          </Link>
        ))}
      </nav>
    </header>
  );
}
