import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { PRICING_PLANS } from '../data/content';
import { buildContactLink, getBusinessName } from '../config/env';

interface PricingPageProps {
  onNavigateHome: () => void;
  onStartFree: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigateHome,
  onStartFree,
}) => {
  const businessName = getBusinessName();

  const handleContactEnterprise = () => {
    const message = `Hello ${businessName}! I am interested in the Enterprise Plan (up to 6 branches, custom receipt branding, and inter-branch transfers) for my retail store.`;
    const contactUrl = buildContactLink(message, `${businessName} Enterprise Plan Inquiry`);
    window.open(contactUrl, '_blank');
  };

  return (
    <div className="pricing-page-root">
      <Navbar
        onStartFree={onStartFree}
        onNavigateHome={onNavigateHome}
        currentRoute="pricing"
      />

      <main className="pricing-page-main">
        <div className="pricing-hero">
          <h1 className="pricing-hero-title">
            Simple plans. No lockouts. No transaction cuts.
          </h1>
          <p className="pricing-hero-sub">
            Start free with zero risk. Upgrade only when you expand branches or need anti-theft controls.
          </p>
        </div>

        <div className="pricing-grid">
          {PRICING_PLANS.map((plan) => {
            const isPro = plan.isPopular;
            const handleClick =
              plan.id === 'plan-enterprise'
                ? handleContactEnterprise
                : onStartFree;

            return (
              <article
                key={plan.id}
                className={`pricing-card ${isPro ? 'featured-card' : ''}`}
              >
                {isPro && (
                  <span className="plan-popular-badge">MOST POPULAR</span>
                )}
                <div className="pricing-card-top">
                  <h2 className="plan-name">{plan.name}</h2>
                  <div className="plan-price-row">
                    <span className="plan-price font-number">{plan.price}</span>
                    <span className="plan-cadence">{plan.cadence}</span>
                  </div>
                  <p className="plan-subtitle">{plan.subtitle}</p>

                  <ul className="plan-features-list">
                    {plan.features.map((feat, idx) => (
                      <li key={idx}>
                        <Check size={15} className="feature-check-icon" />
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
                  <ArrowRight size={15} />
                </button>
              </article>
            );
          })}
        </div>

        <div className="pricing-guarantee-footer">
          <ShieldCheck size={18} color="var(--color-brand-accent)" />
          <span>Cancel anytime • Zero credit card required to start free</span>
        </div>
      </main>

      <Footer onNavigateHome={onNavigateHome} />
    </div>
  );
};
