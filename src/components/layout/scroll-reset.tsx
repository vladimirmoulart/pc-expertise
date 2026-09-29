"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/* Next garde la position de défilement si la nouvelle page est déjà visible : comme le footer est commun,
   un clic en bas de page arrivait en bas de la page suivante. On remonte en haut à chaque changement de page,
   sauf pour un lien vers une ancre (#services) ou un retour arrière du navigateur. */
export function ScrollReset() {
  const pathname = usePathname();
  const first = useRef(true);
  const fromHistory = useRef(false);

  useEffect(() => {
    const onPopState = () => (fromHistory.current = true);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (!fromHistory.current && !window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
    fromHistory.current = false;
  }, [pathname]);

  return null;
}
