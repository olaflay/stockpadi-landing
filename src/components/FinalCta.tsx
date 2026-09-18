import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onStartFree: () => void;
  onUpgradePro: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onStartFree, onUpgradePro }) => {
  return (
    <section className="final-cta-section" aria-labelledby="cta-title">
      <div className="final-cta-card">
        <div>
          <div className="final-cta-badge">
            <Sparkles size={14} />
            <span>ZERO ONBOARDING DELAY</span>
          </div>

          <h2 id="cta-title">Five minutes from now.</h2>
          <p>
            No demo calls. No setup wizards. No waiting for someone to onboard your shop. Open StockPadi, record your first sale today, and see your dashboard update immediately.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button type="button" className="final-cta-btn" onClick={onStartFree}>
              <span>Start free (₦0)</span>
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={onUpgradePro}
              className="final-cta-secondary-btn"
            >
              <span>Explore Pro (₦5,000/mo)</span>
            </button>
          </div>
        </div>

        {/* Visual Phone Card */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="final-mockup-phone">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-brand-accent)' }}>TODAY'S TILL SUMMARY</span>
              <span style={{ fontSize: 10, background: 'var(--color-brand-container)', color: 'var(--color-on-brand-container)', padding: '2px 8px', borderRadius: 4, fontWeight: 700 }}>
                ONLINE
              </span>
            </div>

            <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--color-on-surface)' }} className="font-number">
              ₦184,500
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-success)', fontWeight: 600, marginBottom: 16 }}>
              +₦46,200 estimated net profit
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12, borderTop: '1px solid var(--color-border)', paddingTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-on-surface-muted)' }}>Total Sales</span>
                <span style={{ fontWeight: 600 }} className="font-number">42 receipts</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-on-surface-muted)' }}>Customer Debt Paid</span>
                <span style={{ fontWeight: 600 }} className="font-number">₦18,000</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-on-surface-muted)' }}>Ledger Sync</span>
                <span style={{ fontWeight: 600, color: 'var(--color-success)' }}>100% Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
