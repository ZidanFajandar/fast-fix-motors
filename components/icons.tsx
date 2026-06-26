type IconProps = {
  className?: string;
};

const stroke = "currentColor";
const common = {
  fill: "none",
  stroke,
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <path d="M14.7 6.3a5 5 0 0 0-6.8 6.8l-5.1 5.1a2 2 0 0 0 2.8 2.8l5.1-5.1a5 5 0 0 0 6.8-6.8l-3 3-2.8-.3-.3-2.8Z" />
    </svg>
  );
}

export function BrakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v4m8 4h-4m-4 8v-4M4 12h4" />
    </svg>
  );
}

export function ScanIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <path d="M5 7V5h2m10 0h2v2M5 17v2h2m10 0h2v-2" />
      <path d="M8 12h8" />
      <path d="M10 9.5V14.5" />
      <path d="M14 9.5V14.5" />
    </svg>
  );
}

export function SuspensionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <path d="M6 5h12l-1 5H7L6 5Z" />
      <path d="M8 10v9m8-9v9" />
      <path d="M5 19h14" />
    </svg>
  );
}

export function ClutchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 7v10m-3-7 3-3 3 3m-3 4 3 3-3 3-3-3" />
    </svg>
  );
}

export function ServiceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <path d="M8 3h8l1 4H7l1-4Z" />
      <path d="M6 7h12l-1 14H7L6 7Z" />
      <path d="M10 11h4" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <path d="M5.5 4.5h3l1.5 4-2 1.5a14 14 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2C10.4 21.5 2.5 13.6 2.5 6.5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <path d="M20 14a4 4 0 0 1-4 4H9l-5 3 1.5-4.5A4 4 0 0 1 4 14V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6Z" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </svg>
  );
}
