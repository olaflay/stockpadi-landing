import React from 'react';
import { ShieldCheck, Instagram, Facebook, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="landing-footer" role="contentinfo">
      <div className="footer-grid">
        {/* Brand Column */}
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: 'var(--color-brand-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <ShieldCheck size={20} />
            </div>
            <span style={{ fontSize: 22, fontWeight: 800, color: '#FFFFFF' }}>StockPadi</span>
          </div>
          <p>
            The offline-first recording, inventory ledger, and wireless receipt printing platform built for Nigerian retail businesses. Know your true numbers. Prove every sale.
          </p>
        </div>

        {/* Product Navigation */}
        <div className="footer-column">
          <strong>PRODUCT</strong>
          <button type="button" onClick={() => scrollTo('how-it-works')}>How it works</button>
          <button type="button" onClick={() => scrollTo('features')}>Smart inventory</button>
          <button type="button" onClick={() => scrollTo('hardware')}>Thermal printer</button>
          <a href="https://app.stockpadi.com">Web application</a>
        </div>

        {/* Hardware & Setup */}
        <div className="footer-column">
          <strong>HARDWARE & SUPPORT</strong>
          <button type="button" onClick={() => scrollTo('hardware')}>Shop 58mm printer</button>
          <button type="button" onClick={() => scrollTo('faq')}>FAQ & answers</button>
          <a href="https://wa.me/2348000000000?text=Hi%20StockPadi,%20I%20want%20to%20set%20up%20my%20store">
            WhatsApp onboarding
          </a>
          <a href="mailto:support@stockpadi.com">Email support</a>
        </div>

        {/* Social & Community */}
        <div className="footer-column">
          <strong>FOLLOW OUR JOURNEY</strong>
          <div className="footer-social-links">
            <a href="https://instagram.com/stockpadi" aria-label="StockPadi on Instagram" style={{ color: '#94A3B8' }}>
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com/stockpadi" aria-label="StockPadi on Facebook" style={{ color: '#94A3B8' }}>
              <Facebook size={20} />
            </a>
            <a href="https://tiktok.com/@stockpadi" aria-label="StockPadi on TikTok" style={{ color: '#94A3B8' }}>
              <MessageCircle size={20} />
            </a>
          </div>
          <div style={{ marginTop: 24, fontSize: 13, color: '#64748B' }}>
            Lagos • Ibadan • Abuja • Kano
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} StockPadi Technologies. All rights reserved. Built for retail growth.
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="/privacy" style={{ color: '#64748B' }}>Privacy Policy</a>
          <span>•</span>
          <a href="/terms" style={{ color: '#64748B' }}>Terms of Service</a>
        </div>
      </div>

      {/* Giant Background Wordmark Watermark */}
      <div className="footer-giant-watermark" aria-hidden="true">
        STOCKPADI
      </div>
    </footer>
  );
};
