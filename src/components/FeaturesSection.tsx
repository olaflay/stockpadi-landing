import React from 'react';
import { Database, MessageCircle, BookOpenCheck, Layers } from 'lucide-react';
import { CORE_FEATURES } from '../data/content';

export const FeaturesSection: React.FC = () => {
  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'feat-inventory':
        return <Database size={20} color="var(--color-brand-accent)" />;
      case 'feat-receipts':
        return <MessageCircle size={20} color="var(--color-brand-accent)" />;
      case 'feat-credit':
        return <BookOpenCheck size={20} color="var(--color-brand-accent)" />;
      default:
        return <Layers size={20} color="var(--color-brand-accent)" />;
    }
  };

  return (
    <section id="features" className="features-section" aria-labelledby="features-title">
      <div className="features-header">
        <h2 id="features-title" className="features-headline">
          Running a business used to mean guessing, not knowing.
        </h2>
        <p className="features-sub">
          StockPadi records and audits every sale so your numbers remain transparent whether you are at the counter or traveling.
        </p>
      </div>

      <div className="feature-grid">
        {CORE_FEATURES.map((feat) => (
          <article key={feat.id} className="feature-card">
            <div className="feature-card-header">
              <span className="feature-tag">{feat.tag}</span>
              {getFeatureIcon(feat.id)}
            </div>
            <h3 className="feature-title">{feat.title}</h3>
            <p className="feature-copy">{feat.copy}</p>

            {feat.image && (
              <div className="feature-img-wrapper">
                <img
                  src={feat.image}
                  alt={feat.title}
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={300}
                  className="feature-img"
                />
              </div>
            )}

            <div className="feature-highlight-box">
              <span>{feat.highlight}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

