import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShoppingCart, Package, Users, BarChart3 } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';

interface HeroSectionProps {
  onStartFree: () => void;
  scrollProgress: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartFree, scrollProgress }) => {
  const scrollToAbout = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="landing-hero" aria-labelledby="hero-title">
      <div className="hero-pill-badge">
        <Sparkles size={14} />
        <span>100% Offline-First POS & Inventory Architecture</span>
      </div>

      <h1 id="hero-title" className="hero-headline">
        {HERO_CONTENT.headlinePrefix} <br />
        <span>{HERO_CONTENT.headlineHighlight}</span>
      </h1>

      <p className="hero-subtitle">
        {HERO_CONTENT.description}
      </p>

      <div className="hero-actions">
        <button type="button" className="btn-primary" onClick={onStartFree}>
          <span>{HERO_CONTENT.primaryCta}</span>
          <ArrowRight size={18} />
        </button>

        <button type="button" className="btn-secondary" onClick={scrollToAbout}>
          <span>{HERO_CONTENT.secondaryCta}</span>
        </button>
      </div>

      {/* Interactive Hero Stage: Phone POS Dashboard Mockup */}
      <div className="hero-stage-container">
        <div className="hero-device-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#16A34A' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#16A34A' }}>OFFLINE READY • DATA SAFE</span>
            </div>
          </div>

          {/* Phone Screen: POS Dashboard */}
          <div
            style={{
              transform: `translateY(${Math.min(scrollProgress * 25, 30)}px)`,
              transition: 'transform 0.15s ease-out',
              background: 'var(--color-surface-container-low)',
              borderRadius: 'var(--shape-md)',
              border: '1px solid var(--color-outline-variant)',
              padding: '18px 20px',
              width: 'min(100%, 340px)',
              margin: '0 auto',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
            }}
          >
            <div style={{ textAlign: 'center', borderBottom: '1px solid var(--color-outline-variant)', paddingBottom: 8, marginBottom: 12 }}>
              <div style={{ fontWeight: 'bold', fontSize: 14, textTransform: 'uppercase' }}>StockPadi Dashboard</div>
              <div style={{ fontSize: 11, color: 'var(--color-on-surface-muted)' }}>ADE & SONS SUPERMARKET • Branch 01</div>
              <div style={{ fontSize: 10, color: 'var(--color-on-surface-muted)' }}>Today — 18-Sep-2026</div>
            </div>

            {/* Metric cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
              <div style={{ background: 'var(--color-surface-container)', borderRadius: 6, padding: '8px 10px' }}>
                <div style={{ fontSize: 10, color: 'var(--color-on-surface-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <BarChart3 size={12} color="var(--color-brand-accent)" /> Today's Sales
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-brand-accent)' }}>₦87,400</div>
              </div>
              <div style={{ background: 'var(--color-surface-container)', borderRadius: 6, padding: '8px 10px' }}>
                <div style={{ fontSize: 10, color: 'var(--color-on-surface-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Package size={12} color="var(--color-brand-accent)" /> Stock Items
                </div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>342</div>
              </div>
            </div>

            {/* Low stock alert */}
            <div style={{ background: '#FEF3C7', borderRadius: 6, padding: '8px 10px', marginBottom: 8 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#92400E', display: 'flex', alignItems: 'center', gap: 4 }}>
                <ShoppingCart size={12} /> 3 items low in stock
              </div>
              <div style={{ fontSize: 11, color: '#78350F' }}>Peak Milk, Dangote Sugar, Indomie</div>
            </div>

            {/* Customer credit item */}
            <div style={{ background: 'var(--color-surface-container)', borderRadius: 6, padding: '8px 10px', marginBottom: 12 }}>
              <div style={{ fontSize: 10, color: 'var(--color-on-surface-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Users size={12} /> Customer Credit
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>Alhaji Ibrahim</div>
                  <div style={{ fontSize: 10, color: '#92400E' }}>Owes ₦12,500</div>
                </div>
                <div style={{ fontSize: 9, background: '#DBEAFE', color: '#1E40AF', borderRadius: 4, padding: '2px 8px' }}>
                  WhatsApp Reminder Sent
                </div>
              </div>
            </div>

            {/* Footer status badges */}
            <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid var(--color-outline-variant)', paddingTop: 8 }}>
              <span style={{ fontSize: 9, color: 'var(--color-on-surface-muted)', display: 'flex', alignItems: 'center', gap: 3 }}>
                <CheckCircle2 size={10} color="#16A34A" /> Offline-first
              </span>
              <span style={{ fontSize: 9, color: 'var(--color-on-surface-muted)', display: 'flex', alignItems: 'center', gap: 3 }}>
                <CheckCircle2 size={10} color="#16A34A" /> Stock ledger verified
              </span>
              <span style={{ fontSize: 9, color: 'var(--color-on-surface-muted)', display: 'flex', alignItems: 'center', gap: 3 }}>
                <CheckCircle2 size={10} color="#16A34A" /> WhatsApp receipts
              </span>
            </div>
          </div>

          {/* Device status footer */}
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '12px 14px', marginTop: 16, background: 'var(--color-surface-container)', borderRadius: 'var(--shape-sm)', fontSize: 12, color: 'var(--color-on-surface-muted)', flexWrap: 'wrap', gap: 8 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <CheckCircle2 size={14} color="var(--color-brand-accent)" /> 100% offline-first
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <CheckCircle2 size={14} color="var(--color-brand-accent)" /> Stock + Credit tracking
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <CheckCircle2 size={14} color="var(--color-brand-accent)" /> WhatsApp digital receipts
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
