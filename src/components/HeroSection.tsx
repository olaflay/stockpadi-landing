import React from 'react';
import { ArrowRight, ShoppingCart, Package, Users, BarChart3 } from 'lucide-react';
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
          <ArrowRight size={16} />
        </button>

        <button type="button" className="btn-secondary" onClick={scrollToAbout}>
          <span>{HERO_CONTENT.secondaryCta}</span>
        </button>
      </div>

      {/* POS Dashboard Mockup */}
      <div className="hero-stage-container">
        <div className="hero-device-wrapper">
          <div
            className="hero-dashboard-card"
            style={{
              transform: `translateY(${Math.min(scrollProgress * 20, 24)}px)`,
            }}
          >
            <div className="hero-dashboard-header">
              <div className="store-name">Ade & Sons Supermarket</div>
              <div className="till-meta">Branch 01 • Today's Till Summary</div>
            </div>

            {/* Metric cards */}
            <div className="hero-metric-grid">
              <div className="hero-metric-box">
                <div className="metric-label">
                  <BarChart3 size={12} color="var(--color-brand-accent)" /> Sales
                </div>
                <div className="metric-val">₦87,400</div>
              </div>
              <div className="hero-metric-box">
                <div className="metric-label">
                  <Package size={12} color="var(--color-brand-accent)" /> Items
                </div>
                <div className="metric-val">342</div>
              </div>
            </div>

            {/* Low stock alert */}
            <div className="hero-alert-box">
              <div className="alert-title">
                <ShoppingCart size={12} /> 3 items low in stock
              </div>
              <div className="alert-desc">Peak Milk, Dangote Sugar, Indomie</div>
            </div>

            {/* Customer credit item */}
            <div className="hero-credit-box">
              <div className="credit-label">
                <Users size={12} /> Customer Credit
              </div>
              <div className="credit-row">
                <div>
                  <div className="credit-name">Alhaji Ibrahim</div>
                  <div className="credit-owed">Owes ₦12,500</div>
                </div>
                <div className="credit-badge">
                  WhatsApp Reminder Sent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

