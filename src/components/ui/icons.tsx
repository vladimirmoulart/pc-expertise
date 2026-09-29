import type { SVGProps } from "react";
import type { ServiceIcon } from "@/lib/site-config";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

const paths: Record<ServiceIcon | "arrow" | "monitor" | "laptop" | "tablet" | "phoneCall" | "mail" | "pin" | "check" | "calendar" | "menu" | "close", React.ReactNode> = {
  wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />,
  home: <><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></>,
  monitor: <><rect width="20" height="14" x="2" y="3" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></>,
  laptop: <><path d="M18 5a2 2 0 0 1 2 2v8.53a2 2 0 0 0 .27 1l1.45 2.47A1 1 0 0 1 20.86 20H3.14a1 1 0 0 1-.86-1.5l1.45-2.47a2 2 0 0 0 .27-1V7a2 2 0 0 1 2-2z" /><path d="M20.05 16H3.95" /></>,
  tablet: <><rect width="20" height="15" x="2" y="4.5" rx="2" /><path d="M18 12h.01" /></>,
  wifi: <><path d="M12 20h.01" /><path d="M2 8.82a15 15 0 0 1 20 0" /><path d="M5 12.86a10 10 0 0 1 14 0" /><path d="M8.5 16.43a5 5 0 0 1 7 0" /></>,
  cart: <><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></>,
  gamepad: <><path d="M6 11h4" /><path d="M8 9v4" /><path d="M15 12h.01" /><path d="M18 10h.01" /><path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.59l-.9 7.18A2.5 2.5 0 0 0 4.3 18.6c.83 0 1.6-.41 2.06-1.1L7.5 16h9l1.14 1.5a2.5 2.5 0 0 0 4.54-1.73l-.9-7.18A4 4 0 0 0 17.32 5z" /></>,
  phone: <><rect width="14" height="20" x="5" y="2" rx="2" /><path d="M12 18h.01" /></>,
  camera: <><path d="m16.24 7.76-1.8 5.4a2 2 0 0 1-1.28 1.28l-5.4 1.8" /><path d="M15.5 3H20a1 1 0 0 1 1 1v4.5" /><circle cx="12" cy="12" r="3" /><path d="M3 12a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></>,
  arrow: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
  phoneCall: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  pin: <><path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  calendar: <><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></>,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  close: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
};

export type IconName = keyof typeof paths;

export function Icon({ name, ...props }: IconProps & { name: IconName }) {
  return <Svg {...props}>{paths[name]}</Svg>;
}
