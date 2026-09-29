const frame = { fill: "#101012", stroke: "rgba(255,255,255,0.16)", strokeWidth: 1.5 };

/* Illustration des appareils pris en charge : écran, portable, tablette et téléphone superposés */
export function DeviceLineup() {
  return (
    <div className="relative mt-8">
      <div className="relative" aria-hidden="true">
        <svg viewBox="0 0 520 236" className="w-full overflow-visible" fill="none">
          <defs>
            <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ff6600" stopOpacity="0.35" />
              <stop offset="0.55" stopColor="#ff6600" stopOpacity="0.06" />
              <stop offset="1" stopColor="#ff6600" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="screen-alt" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffb27a" stopOpacity="0.28" />
              <stop offset="1" stopColor="#ff6600" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="scan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ff6600" stopOpacity="0" />
              <stop offset="0.5" stopColor="#ff8533" stopOpacity="0.45" />
              <stop offset="1" stopColor="#ff6600" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip-monitor"><rect x="130" y="14" width="240" height="130" rx="5" /></clipPath>
            <clipPath id="clip-tablet"><rect x="349" y="71" width="100" height="140" rx="7" /></clipPath>
            <clipPath id="clip-laptop"><rect x="53" y="113" width="178" height="98" rx="4" /></clipPath>
            <clipPath id="clip-phone"><rect x="447" y="125" width="52" height="102" rx="9" /></clipPath>
            <radialGradient id="floor" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#ff6600" stopOpacity="0.35" />
              <stop offset="1" stopColor="#ff6600" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Reflet au sol */}
          <ellipse cx="260" cy="226" rx="250" ry="14" fill="url(#floor)" />

          {/* Écran de bureau */}
          <rect x="120" y="4" width="260" height="160" rx="12" {...frame} />
          <rect x="130" y="14" width="240" height="130" rx="5" fill="url(#screen)" />
          <ScanBand clip="clip-monitor" />
          <path d="M226 164h48l8 30h-64z" {...frame} />
          <rect x="200" y="192" width="100" height="6" rx="3" {...frame} />
          <circle cx="250" cy="154" r="2" fill="rgba(255,255,255,0.3)" />
          <g stroke="#ff6600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="170" cy="50" r="16" strokeOpacity="0.9" />
            <path d="m163 50 5 5 9-10" />
          </g>
          <rect x="198" y="40" width="90" height="7" rx="3.5" fill="rgba(255,255,255,0.22)" />
          <rect x="198" y="54" width="60" height="7" rx="3.5" fill="rgba(255,255,255,0.1)" />

          {/* Tablette */}
          <rect x="340" y="62" width="118" height="158" rx="14" {...frame} />
          <rect x="349" y="71" width="100" height="140" rx="7" fill="url(#screen-alt)" />
          <ScanBand clip="clip-tablet" />
          <g stroke="#ff6600" strokeWidth="2.5" strokeLinecap="round">
            <path d="M380 128a26 26 0 0 1 38 0" strokeOpacity="0.5" />
            <path d="M387 137a16 16 0 0 1 24 0" strokeOpacity="0.8" />
            <path d="M399 147h.01" strokeWidth="5" />
          </g>

          {/* PC portable */}
          <rect x="44" y="104" width="196" height="116" rx="9" {...frame} />
          <rect x="53" y="113" width="178" height="98" rx="4" fill="url(#screen-alt)" />
          <ScanBand clip="clip-laptop" />
          <path d="M26 220h232l-12 12H38z" {...frame} />
          <g>
            {[{ y: 140, w: 120 }, { y: 158, w: 88 }, { y: 176, w: 140 }].map((bar) => (
              <g key={bar.y}>
                <rect x="70" y={bar.y} width="144" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
                <rect x="70" y={bar.y} width={bar.w} height="6" rx="3" fill="#ff6600" fillOpacity="0.8" />
              </g>
            ))}
          </g>

          {/* Téléphone */}
          <rect x="440" y="118" width="66" height="116" rx="14" {...frame} />
          <rect x="447" y="125" width="52" height="102" rx="9" fill="url(#screen)" />
          <ScanBand clip="clip-phone" />
          <rect x="463" y="130" width="20" height="4" rx="2" fill="#101012" />
          <rect x="456" y="196" width="34" height="12" rx="6" fill="#ff6600" />
        </svg>

      </div>

    </div>
  );
}

/* Bande de balayage façon diagnostic, découpée à la forme d'un écran.
   Toutes les bandes partagent la même animation : elles forment une seule ligne qui traverse les écrans. */
function ScanBand({ clip }: { clip: string }) {
  return (
    <g clipPath={`url(#${clip})`}>
      <rect x="0" y="0" width="520" height="60" fill="url(#scan)" className="animate-scan [transform-box:fill-box]" />
    </g>
  );
}
