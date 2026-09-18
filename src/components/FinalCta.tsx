import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onStartFree: () => void;
  onOrderBundle: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onStartFree, onOrderBundle }) => {
  return (
    <section className="final-cta-section" aria-labelledby="cta-title">
      <div className="final-cta-card">
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '6px 14px',
              borderRadius: 9999,
              fontSize: 12,
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: 16,
            }}
          >
            <Sparkles size={14} />
            <span>ZERO ONBOARDING DELAY</span>
          </div>

          <h2 id="cta-title">Five minutes from now.</h2>
          <p>
            No demo calls. No setup wizards. No waiting for someone to onboard your shop. Open StockPadi, record your first sale today, and see your dashboard update immediately.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button type="button" className="final-cta-btn" onClick={onStartFree}>
              <span>Start for free</span>
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={onOrderBundle}
              style={{
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 28px',
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Order printer (₦55,000)
            </button>
          </div>
        </div>

        {/* Visual Phone Card */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: 24,
              color: 'var(--ink)',
              width: 280,
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--brand)' }}>TODAY'S TILL SUMMARY</span>
              <span style={{ fontSize: 10, background: '#DCFCE7', color: '#16A34A', padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>
                ONLINE
              </span>
            </div>

            <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--ink)' }}>₦184,500</div>
            <div style={{ fontSize: 12, color: '#16A34A', fontWeight: 600, marginBottom: 16 }}>
              +₦46,200 estimated net profit
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12, borderTop: '1px solid var(--paper-border)', paddingTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--ink-secondary)' }}>Total Sales</span>
                <span style={{ fontWeight: 600 }}>42 receipts</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--ink-secondary)' }}>Customer Debt Paid</span>
                <span style={{ fontWeight: 600 }}>₦18,000</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--ink-secondary)' }}>Ledger Sync</span>
                <span style={{ fontWeight: 600, color: '#16A34A' }}>100% Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
