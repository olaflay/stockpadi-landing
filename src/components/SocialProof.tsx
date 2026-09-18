import React from 'react';
import { Store, TrendingUp, ArrowRight } from 'lucide-react';
import { SOCIAL_PROOF_AVATARS } from '../data/content';

interface SocialProofProps {
  onStartFree: () => void;
}

export const SocialProof: React.FC<SocialProofProps> = ({ onStartFree }) => {
  return (
    <section className="social-proof-section" aria-labelledby="social-proof-title">
      <div className="proof-grid">
        {/* Left Column: Tilting Merchant Badges */}
        <div className="proof-column proof-column-left" aria-hidden="true">
          {SOCIAL_PROOF_AVATARS.leftPillars.map((item, idx) => (
            <div key={idx} className="avatar-pill">
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: 'var(--color-brand-container)',
                  color: 'var(--color-on-brand-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Store size={18} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-on-surface)' }}>{item.name}</div>
                <div style={{ fontSize: 11, color: 'var(--color-on-surface-muted)' }}>
                  {item.city} • {item.tag}
                </div>
              </div>
              <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 600, color: 'var(--color-brand-accent)' }}>
                {item.growth}
              </span>
            </div>
          ))}
        </div>

        {/* Center Headline & Direct Conversion CTA */}
        <div className="proof-center-copy">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--color-brand-accent)',
              background: 'var(--color-brand-container)',
              padding: '6px 14px',
              borderRadius: 9999,
            }}
          >
            <TrendingUp size={14} />
            <span>DAILY ACTIVE RETAILERS</span>
          </div>

          <h2 id="social-proof-title">
            {SOCIAL_PROOF_AVATARS.headline}
          </h2>

          <button type="button" className="btn-primary" onClick={onStartFree}>
            <span>{SOCIAL_PROOF_AVATARS.ctaText}</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Column: Tilting Merchant Badges */}
        <div className="proof-column proof-column-right" aria-hidden="true">
          {SOCIAL_PROOF_AVATARS.rightPillars.map((item, idx) => (
            <div key={idx} className="avatar-pill">
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: 'var(--color-brand-container)',
                  color: 'var(--color-on-brand-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Store size={18} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-on-surface)' }}>{item.name}</div>
                <div style={{ fontSize: 11, color: 'var(--color-on-surface-muted)' }}>
                  {item.city} • {item.tag}
                </div>
              </div>
              <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 600, color: 'var(--color-brand-accent)' }}>
                {item.growth}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

