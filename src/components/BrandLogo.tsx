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
 * Precision geometric StockPadi brand mark.
 * Combines the offline ledger foundation with ascending trade momentum (Padi companion arch).
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
      aria-label="StockPadi Mark"
    >
      <defs>
        <linearGradient id="brandLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0e835c" />
          <stop offset="100%" stopColor="#07533a" />
        </linearGradient>
        <linearGradient id="markLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d7f2df" />
        </linearGradient>
      </defs>

      <rect width="512" height="512" rx="112" fill="url(#brandLogoGrad)" />
      <rect x="24" y="24" width="464" height="464" rx="88" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="4" />

      <path
        d="M152 192C152 156.654 180.654 128 216 128H296C337.421 128 371 161.579 371 203C371 244.421 337.421 278 296 278H216C174.579 278 141 311.579 141 353C141 394.421 174.579 428 216 428H296C331.346 428 360 399.346 360 364"
        stroke="url(#markLogoGrad)"
        strokeWidth="38"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="256" cy="278" r="26" fill="#ffffff" />
      <circle cx="296" cy="128" r="19" fill="#ffffff" />
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
            Stock<span style={{ color: 'var(--color-brand-accent)' }}>Padi</span>
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
