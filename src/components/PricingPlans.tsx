import React from 'react';
import { Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';

interface PricingPlansProps {
  onStartFree: () => void;
  onUpgradePro: () => void;
  onContactEnterprise: () => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({
  onStartFree,
  onUpgradePro,
  onContactEnterprise,
}) => {
  return (
    <section id="pricing" className="pricing-section" aria-labelledby="pricing-title">
      <div className="pricing-container">
        <div className="pricing-header">
          <span className="pricing-badge">
            <Sparkles size={14} />
            <span>TRANSPARENT NAIRA PRICING</span>
          </span>
          <h2 id="pricing-title">Simple plans. No lockouts. No transaction cuts.</h2>
          <p>
            Start free with zero risk. Upgrade only when your store opens another branch or needs anti-theft controls.
          </p>
        </div>

        <div className="pricing-grid">
          {PRICING_PLANS.map((plan) => {
            const isPro = plan.isPopular;
            const handleClick =
              plan.id === 'plan-free'
                ? onStartFree
                : plan.id === 'plan-pro'
                ? onUpgradePro
                : onContactEnterprise;

            return (
              <article
                key={plan.id}
                className={`pricing-card ${isPro ? 'featured-card' : ''}`}
              >
                {plan.badge && (
                  <span className="plan-pill-badge">{plan.badge}</span>
                )}

                <div>
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price-row">
                    <span className="plan-price">{plan.price}</span>
                    <span className="plan-cadence">{plan.cadence}</span>
                  </div>
                  <p className="plan-subtitle">{plan.subtitle}</p>

                  <ul className="plan-features-list">
                    {plan.features.map((feat, idx) => (
                      <li key={idx}>
                        <Check size={16} className="feature-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className={isPro ? 'btn-primary plan-btn' : 'btn-secondary plan-btn'}
                  onClick={handleClick}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={16} />
                </button>
              </article>
            );
          })}
        </div>

        <div className="pricing-guarantee-footer">
          <ShieldCheck size={18} color="var(--color-brand-accent)" />
          <span>
            100% money-back guarantee • Cancel anytime • Zero credit card required to start free
          </span>
        </div>
      </div>
    </section>
  );
};
