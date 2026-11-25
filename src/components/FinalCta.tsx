import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FINAL_CTA_CONTENT } from '../data/content';

interface FinalCtaProps {
  onStartFree: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onStartFree }) => {
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
          </div>

        </div>
      </div>
    </section>
  );
};

