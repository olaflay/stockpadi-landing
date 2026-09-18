import React, { useState } from 'react';
import { ArrowRight, Printer, Sparkles, CheckCircle2 } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';

interface HeroSectionProps {
  onStartFree: () => void;
  scrollProgress: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartFree, scrollProgress }) => {
  const [isPrinting, setIsPrinting] = useState(false);

  const triggerPrintTest = () => {
    setIsPrinting(true);
    setTimeout(() => setIsPrinting(false), 2000);
  };

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

      {/* Interactive Hero Stage: Phone POS & Wireless Printer Mockup */}
      <div className="hero-stage-container">
        <div className="hero-device-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#16A34A' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#16A34A' }}>OFFLINE READY • BLUETOOTH CONNECTED</span>
            </div>
            <button
              type="button"
              onClick={triggerPrintTest}
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--color-brand-accent)',
                background: 'var(--color-brand-container)',
                padding: '6px 14px',
                borderRadius: 9999,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <Printer size={14} />
              <span>{isPrinting ? 'Printing…' : 'Tap to test print'}</span>
            </button>
          </div>

          {/* Thermal slot bar */}
          <div className="printer-slot-bar" />

          {/* Ejected Receipt Slip */}
          <div
            className="receipt-paper-slip"
            style={{
              transform: `translateY(${Math.min(scrollProgress * 25, 30)}px)`,
              transition: 'transform 0.15s ease-out',
            }}
          >
            <div style={{ textAlign: 'center', borderBottom: '1px dashed #bbb', paddingBottom: 8, marginBottom: 8 }}>
              <div style={{ fontWeight: 'bold', fontSize: 13, textTransform: 'uppercase' }}>ADE & SONS SUPERMARKET</div>
              <div style={{ fontSize: 11, color: '#555' }}>Branch 01 • Ring Road, Ibadan</div>
              <div style={{ fontSize: 10, color: '#777' }}>18-Sep-2026 12:30 PM • Sale #1042</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>1x Peak Milk (Pouch)</span>
                <span>₦4,200</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>2x Dangote Sugar 500g</span>
                <span>₦2,600</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>3x Golden Penny Spaghetti</span>
                <span>₦3,300</span>
              </div>
            </div>

            <div style={{ borderTop: '1px dashed #bbb', paddingTop: 6, display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: 13 }}>
              <span>TOTAL (CASH)</span>
              <span>₦10,100</span>
            </div>

            <div style={{ textAlign: 'center', marginTop: 8, fontSize: 10, color: '#666' }}>
              ✓ Stock Ledger Verified • Zero Shrinkage
            </div>

            <div className="receipt-zigzag-edge" />
          </div>

          {/* Device status footer (M3 Tonal Container, Zero Border) */}
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '12px 14px', marginTop: 16, background: 'var(--color-surface-container)', borderRadius: 'var(--shape-sm)', fontSize: 12, color: 'var(--color-on-surface-muted)', flexWrap: 'wrap', gap: 8 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <CheckCircle2 size={14} color="var(--color-brand-accent)" /> 100% offline-first
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <CheckCircle2 size={14} color="var(--color-brand-accent)" /> Zero ink thermal paper
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <CheckCircle2 size={14} color="var(--color-brand-accent)" /> WhatsApp digital copy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
