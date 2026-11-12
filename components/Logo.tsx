import Link from "next/link";
import s from "./chrome.module.css";

/** Eight fine petals around a gold centre: the one decorative mark the site keeps. */
export function DaisyMark({ size = 26, className }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <g transform="translate(16 16)" fill="none" stroke="currentColor" strokeWidth="1.2">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
          <ellipse key={r} cy="-8.6" rx="3.1" ry="6.4" transform={`rotate(${r})`} />
        ))}
      </g>
      <circle cx="16" cy="16" r="3.6" fill="var(--gold)" />
    </svg>
  );
}

export function Logo({ onDark }: { onDark?: boolean }) {
  return (
    <Link href="/" className={s.logo} data-dark={onDark || undefined} aria-label="Daisy Digital, home">
      <DaisyMark />
      <span>Daisy Digital</span>
    </Link>
  );
}
