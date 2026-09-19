import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onStartFree: () => void;
  onNavigatePricing?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onStartFree, onNavigatePricing }) => {
  return (
    <section className="final-cta-section" aria-labelledby="cta-title">
      <div className="final-cta-card">
        <div className="final-cta-text-col">
          <h2 id="cta-title" className="final-cta-headline">Start recording sales in 2 minutes.</h2>
          <p className="final-cta-subtext">
            No complicated setup or training needed. Open StockPadi on your phone, add your products, and record your first sale right away.
          </p>

          <div className="final-cta-actions">
            <button type="button" className="btn-primary final-btn" onClick={onStartFree}>
              <span>Start free</span>
              <ArrowRight size={15} />
            </button>
            {onNavigatePricing && (
              <button
                type="button"
                onClick={onNavigatePricing}
                className="btn-secondary final-btn-secondary"
              >
                <span>View plans</span>
              </button>
            )}
          </div>
        </div>

        {/* Generated StockPadi Phone Cutout Illustration with Zero Background */}
        <div className="final-mockup-wrapper">
          <img
            src="/cta-hand-phone.webp"
            alt="StockPadi POS and Inventory App on Smartphone"
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

