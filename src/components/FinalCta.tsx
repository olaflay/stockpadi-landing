import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FINAL_CTA_CONTENT } from '../data/content';
import { getBusinessName } from '../config/env';

interface FinalCtaProps {
  onStartFree: () => void;
  onNavigatePricing?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onStartFree, onNavigatePricing }) => {
  const brand = getBusinessName();
  const brandDisplay = brand === 'OjaPadi' ? 'OjàPadi' : brand;

  return (
    <section className="final-cta-section" aria-labelledby="cta-title">
      <div className="final-cta-card">
        <div className="final-cta-text-col">
          <h2 id="cta-title" className="final-cta-headline">{FINAL_CTA_CONTENT.headline}</h2>
          <p className="final-cta-subtext">
            {FINAL_CTA_CONTENT.description}
          </p>

          <div className="final-cta-actions">
            <button type="button" className="btn-primary final-btn" onClick={onStartFree}>
              <span>{FINAL_CTA_CONTENT.primaryCta}</span>
              <ArrowRight size={15} />
            </button>
            {onNavigatePricing && (
              <button
                type="button"
                onClick={onNavigatePricing}
                className="btn-secondary final-btn-secondary"
              >
                <span>{FINAL_CTA_CONTENT.secondaryCta}</span>
              </button>
            )}
          </div>

          <p className="final-cta-microcopy">
            {FINAL_CTA_CONTENT.microcopy}
          </p>
        </div>

        {/* Dynamic Phone Cutout Illustration with Zero Background */}
        <div className="final-mockup-wrapper">
          <img
            src={FINAL_CTA_CONTENT.image}
            alt={`${brandDisplay} POS and Inventory App on Smartphone`}
            className="final-mockup-hand-img"
            loading="lazy"
            decoding="async"
            width={480}
            height={358}
          />
        </div>
      </div>
    </section>
  );
};

