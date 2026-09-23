import React from 'react';
import { ArrowRight } from 'lucide-react';
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
          <ArrowRight size={15} />
        </button>

        <button type="button" className="btn-secondary" onClick={scrollToAbout}>
          <span>{HERO_CONTENT.secondaryCta}</span>
        </button>
      </div>

      <p className="hero-microcopy">
        {HERO_CONTENT.microcopy}
      </p>

      {/* Modern Phone Mockup with Real Interface */}
      <div className="hero-stage-container">
        <div className="hero-device-wrapper">
          <img
            src="/hero-merchant-phone.webp"
            alt="OjàPadi Retail POS and Inventory Interface in Real Store"
            className="hero-phone-img"
            loading="eager"
            decoding="async"
            width={480}
            height={360}
            style={{
              transform: `translateY(${Math.min(scrollProgress * 14, 16)}px)`,
            }}
          />
        </div>
      </div>

      {/* Spacious Trust Bar placed below mockup */}
      <div className="hero-trust-bar" aria-label="Key highlights">
        <div className="trust-bar-inner">
          {HERO_CONTENT.trustBadges.map((badge, i) => (
            <React.Fragment key={badge}>
              {i > 0 && <span className="trust-bar-dot" aria-hidden="true">•</span>}
              <span className="trust-bar-item">
                <span className="trust-bar-check">✓</span> {badge}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
