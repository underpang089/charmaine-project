type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function Bed(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M2 8v10M2 13h20v5M22 18v-4a3 3 0 0 0-3-3H11v4M2 13V8h4a2 2 0 0 1 2 2v3" />
    </svg>
  );
}

export function Coffee(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M17 8h1a3 3 0 0 1 0 6h-1M3 8h14v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8ZM6 2v2M10 2v2M14 2v2" />
    </svg>
  );
}

export function Utensils(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V2M8 11v11M18 2c-1.5 0-3 1.5-3 4v6h3M18 2v20" />
    </svg>
  );
}

export function Leaf(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M11 20A7 7 0 0 1 4 13c0-6 6-9 16-9 0 10-4 14-9 15Z M4 21c2.5-4 5-6 9-8" />
    </svg>
  );
}

export function MapPin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Camera(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 8h3l2-2h8l2 2h3v11H3V8Z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

export function Aperture(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v7M21 8l-6 3M20 17l-7-2M12 21v-7M4 16l6-3M4 7l7 2" />
    </svg>
  );
}

export function Video(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M15 8v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2ZM15 10l7-4v12l-7-4" />
    </svg>
  );
}

export function Tripod(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v11M12 14 5 21M12 14l7 7M9 3h6M12 14l-2 0M9 8h6" />
    </svg>
  );
}

export function Backpack(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 8a6 6 0 0 1 12 0v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM9 8a3 3 0 0 1 6 0M9 13h6v4H9zM10 4V3a2 2 0 0 1 4 0v1" />
    </svg>
  );
}

export function Laptop(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5h16v11H4zM2 20h20M9 20l1-4h4l1 4" />
    </svg>
  );
}

export function Globe(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" />
    </svg>
  );
}

export function Play(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function ChevronDown(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Youtube(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M23 12s0-3.6-.46-5.3a2.75 2.75 0 0 0-1.94-1.94C18.9 4.3 12 4.3 12 4.3s-6.9 0-8.6.46A2.75 2.75 0 0 0 1.46 6.7C1 8.4 1 12 1 12s0 3.6.46 5.3a2.75 2.75 0 0 0 1.94 1.94c1.7.46 8.6.46 8.6.46s6.9 0 8.6-.46a2.75 2.75 0 0 0 1.94-1.94C23 15.6 23 12 23 12ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

export function Instagram(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function TikTok(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M16 3c.3 2.2 1.6 3.9 3.8 4.2v2.7c-1.4.1-2.7-.3-3.8-1v6.4a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.8a2.8 2.8 0 1 0 2 2.7V3H16Z" />
    </svg>
  );
}

export function Facebook(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M14 9V7c0-1 .3-1.5 1.5-1.5H17V2.5h-2.7C11.7 2.5 10.5 4 10.5 6.4V9H8v3h2.5v9.5H14V12h2.4l.4-3H14Z" />
    </svg>
  );
}

export function Mail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Menu(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function X(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
