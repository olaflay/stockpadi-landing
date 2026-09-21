interface BrandLogoProps {
  variant?: 'mark' | 'full' | 'lockup';
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  showTagline?: boolean;
}

const SIZE_MAP = {
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
};

/**
 * Precision geometric OjàPadi brand mark.
 * Features the Infinite Market Loop ("O") embodying unbroken offline trade continuity,
 * paired with the illuminated sunburst trade accent representing the authentic "Ojà" tone mark.
 */
export function BrandMark({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="OjàPadi Mark"
    >
      <defs>
        <linearGradient id="ojapadiBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0b7a55" />
          <stop offset="100%" stopColor="#044730" />
        </linearGradient>
        <linearGradient id="ojapadiLoopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d1fae5" />
        </linearGradient>
        <linearGradient id="ojapadiAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Rounded Squircle Container */}
      <rect width="512" height="512" rx="112" fill="url(#ojapadiBgGrad)" />
      <rect x="24" y="24" width="464" height="464" rx="88" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="4" />

      {/* Primary Market Loop ("O") */}
      <path
        d="M256 148C194.144 148 144 198.144 144 260C144 321.856 194.144 372 256 372C317.856 372 368 321.856 368 260C368 227.156 353.844 197.62 331.258 177.2"
        stroke="url(#ojapadiLoopGrad)"
        strokeWidth="42"
        strokeLinecap="round"
      />

      {/* Internal Continuous Flow Arc */}
      <path
        d="M208 260C208 233.49 229.49 212 256 212C282.51 212 304 233.49 304 260C304 286.51 282.51 308 256 308"
        stroke="#ffffff"
        strokeOpacity="0.4"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* Central Trade Equilibrium Node */}
      <circle cx="256" cy="260" r="22" fill="#ffffff" />

      {/* Sunburst Tone Accent (Symbolizing 'Ojà' Tone Mark & Live Trade Status) */}
      <circle cx="348" cy="154" r="24" fill="url(#ojapadiAccentGrad)" />
      <circle cx="348" cy="154" r="10" fill="#ffffff" />
    </svg>
  );
}

export function BrandLogo({
  variant = 'full',
  size = 'md',
  className = '',
  showTagline = false,
}: BrandLogoProps) {
  const pixelSize = typeof size === 'number' ? size : SIZE_MAP[size];

  if (variant === 'mark') {
    return <BrandMark size={pixelSize} className={className} />;
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`} style={{ textDecoration: 'none' }}>
      <BrandMark size={pixelSize} />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontWeight: 800, letterSpacing: '-0.02em', fontSize: '1.18em' }}>
            Ojà<span style={{ color: 'var(--color-brand-accent)' }}>Padi</span>
          </span>
          <span
            style={{
              marginLeft: 4,
              display: 'inline-block',
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: 'var(--color-brand-accent)',
            }}
          />
        </div>
        {(variant === 'lockup' || showTagline) && (
          <span
            style={{
              marginTop: 2,
              fontSize: '0.62em',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-on-surface-muted)',
            }}
          >
            Offline-First POS
          </span>
        )}
      </div>
    </div>
  );
}
