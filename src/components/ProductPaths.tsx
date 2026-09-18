import React from 'react';
import { Check, ArrowRight, Smartphone, Printer } from 'lucide-react';

interface ProductPathsProps {
  onStartFree: () => void;
  onOrderBundle: () => void;
}

export const ProductPaths: React.FC<ProductPathsProps> = ({ onStartFree, onOrderBundle }) => {
  return (
    <section className="product-paths-section" aria-labelledby="paths-title">
      <div className="paths-container">
        <div className="paths-header">
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--brand)',
              letterSpacing: '0.08em',
              display: 'inline-block',
              marginBottom: 12,
            }}
          >
            START YOUR WAY
          </span>
          <h2 id="paths-title">Use the app today. Add printing when you need it.</h2>
          <p style={{ color: 'var(--ink-secondary)', fontSize: 16 }}>
            StockPadi works completely fine on your smartphone without hardware. Choose what matches your counter today, and scale seamlessly.
          </p>
        </div>

        <div className="paths-grid">
          {/* Card 1: Free App */}
          <article className="path-card">
            <div>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'var(--brand-surface)',
                  color: 'var(--brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <Smartphone size={22} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink-muted)' }}>ZERO HARDWARE</span>
              <h3 style={{ fontSize: 24, margin: '8px 0 12px' }}>Smartphone & Web App</h3>
              <p style={{ color: 'var(--ink-secondary)', fontSize: 15, marginBottom: 24 }}>
                Turn any Android phone, iPhone, or PC into an offline point-of-sale terminal. Issue digital receipts via WhatsApp.
              </p>

              <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--ink)', marginBottom: 24 }}>
                ₦0 <small style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-muted)' }}>/ free forever tier</small>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink-secondary)' }}>
                  <Check size={16} color="#16A34A" /> Offline sale recording & inventory tracking
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink-secondary)' }}>
                  <Check size={16} color="#16A34A" /> Instant WhatsApp customer receipts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink-secondary)' }}>
                  <Check size={16} color="#16A34A" /> Customer credit ledger & debt tracking
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink-secondary)' }}>
                  <Check size={16} color="#16A34A" /> Smartphone camera barcode scanning
                </li>
              </ul>
            </div>

            <button type="button" className="btn-secondary" onClick={onStartFree} style={{ justifyContent: 'center' }}>
              <span>Start free on your phone</span>
              <ArrowRight size={16} />
            </button>
          </article>

          {/* Card 2: App + 58mm Wireless Printer Bundle (Featured) */}
          <article className="path-card featured">
            <span className="path-featured-badge">MOST POPULAR RETAIL SETUP</span>
            <div>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'var(--brand)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <Printer size={22} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--brand)' }}>ALL-IN-ONE POS BUNDLE</span>
              <h3 style={{ fontSize: 24, margin: '8px 0 12px' }}>App + 58mm Bluetooth Printer</h3>
              <p style={{ color: 'var(--ink-secondary)', fontSize: 15, marginBottom: 24 }}>
                Print physical paper receipts instantly for every customer. Includes a portable wireless printer, paper, and pro cloud features.
              </p>

              <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--brand)', marginBottom: 24 }}>
                ₦55,000 <small style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-secondary)' }}>/ complete starter pack</small>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink)' }}>
                  <Check size={16} color="var(--brand)" /> 58mm portable Bluetooth thermal printer (rechargeable)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink)' }}>
                  <Check size={16} color="var(--brand)" /> Thermal receipt paper roll included (no ink required)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink)' }}>
                  <Check size={16} color="var(--brand)" /> 1 year of multi-branch cloud sync & owner reports
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink)' }}>
                  <Check size={16} color="var(--brand)" /> 24-hour delivery in Lagos & Ibadan, WhatsApp setup support
                </li>
              </ul>
            </div>

            <button type="button" className="btn-primary" onClick={onOrderBundle} style={{ justifyContent: 'center' }}>
              <span>Order printer bundle (₦55,000)</span>
              <ArrowRight size={16} />
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};
