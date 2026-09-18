import React from 'react';
import { Database, Printer, BookOpenCheck, Layers } from 'lucide-react';
import { CORE_FEATURES } from '../data/content';

export const FeaturesSection: React.FC = () => {
  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'feat-inventory':
        return <Database size={24} color="var(--color-brand-accent)" />;
      case 'feat-receipts':
        return <Printer size={24} color="var(--color-brand-accent)" />;
      case 'feat-credit':
        return <BookOpenCheck size={24} color="var(--color-brand-accent)" />;
      default:
        return <Layers size={24} color="var(--color-brand-accent)" />;
    }
  };

  return (
    <section id="features" className="features-section" aria-labelledby="features-title">
      <div className="features-header">
        <div>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--color-brand-accent)',
              letterSpacing: '0.08em',
              display: 'inline-block',
              marginBottom: 12,
            }}
          >
            CORE ARCHITECTURE
          </span>
          <h2 id="features-title">
            Running a store used to mean guessing. Now you know.
          </h2>
        </div>
        <p>
          StockPadi gives you tools that record, calculate, print, and audit every transaction, so your business stays completely transparent whether you are at the counter or traveling.
        </p>
      </div>

      <div className="feature-grid">
        {CORE_FEATURES.map((feat) => (
          <article key={feat.id} className="feature-card">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span className="feature-tag">{feat.tag}</span>
                {getFeatureIcon(feat.id)}
              </div>
              <h3>{feat.title}</h3>
              <p>{feat.copy}</p>
            </div>

            <div className="feature-highlight-box">
              <span>{feat.highlight}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
