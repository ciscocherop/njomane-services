/** Njomane gear-mark: gear ring + teeth with a check inside. Colour follows --accent. */
export default function LogoMark({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="31" stroke="var(--accent)" strokeWidth="7" />
      <path
        d="M50 11 L50 21 M50 79 L50 89 M11 50 L21 50 M79 50 L89 50
          M23.5 23.5 L30.5 30.5 M69.5 69.5 L76.5 76.5
          M76.5 23.5 L69.5 30.5 M30.5 69.5 L23.5 76.5"
        stroke="var(--accent)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M38 51 L46 59 L64 39" stroke="var(--accent)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
