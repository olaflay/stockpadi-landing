import React from 'react';
import { ShoppingBag, GitFork, Barcode } from 'lucide-react';
import { PERSONA_STORIES } from '../data/content';

export const ExperienceStory: React.FC = () => {
  const getPersonaIcon = (id: string) => {
    switch (id) {
      case 'persona-supermarket':
        return <ShoppingBag size={24} color="var(--color-brand-accent)" />;
      case 'persona-multistore':
        return <GitFork size={24} color="var(--color-brand-accent)" />;
      default:
        return <Barcode size={24} color="var(--color-brand-accent)" />;
    }
  };

  return (
    <section className="experience-section" aria-labelledby="experience-title">
      <div className="experience-container">
        <div className="experience-header">
          <span className="experience-eyebrow">
            BUILT FOR YOUR RETAIL VERTICAL
          </span>
          <h2 id="experience-title">Designed for how Nigerian retail really operates</h2>
          <p>
            Whether you run a high-traffic provision store, multiple electronic outlets, or a boutique, StockPadi adapts to your daily counter flow.
          </p>
        </div>

        <div className="experience-grid">
          {PERSONA_STORIES.map((persona) => (
            <article key={persona.id} className="experience-card">
              <div>
                <div className="experience-icon-badge">
                  {getPersonaIcon(persona.id)}
                </div>
                <span className="experience-eyebrow">
                  {persona.eyebrow}
                </span>
                <h3>{persona.label}</h3>
                <p>{persona.description}</p>
              </div>

              <div className="experience-card-footer">
                <span style={{ fontSize: 12, color: 'var(--color-on-surface-muted)' }}>
                  {persona.metricLabel}
                </span>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-on-surface)' }}>
                  {persona.metricValue}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

