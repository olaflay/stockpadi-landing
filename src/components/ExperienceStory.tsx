import React from 'react';
import { ShoppingBag, GitFork, Barcode } from 'lucide-react';
import { PERSONA_STORIES } from '../data/content';

export const ExperienceStory: React.FC = () => {
  const getPersonaIcon = (id: string) => {
    switch (id) {
      case 'persona-supermarket':
        return <ShoppingBag size={24} color="var(--brand)" />;
      case 'persona-multistore':
        return <GitFork size={24} color="var(--brand)" />;
      default:
        return <Barcode size={24} color="var(--brand)" />;
    }
  };

  return (
    <section className="product-paths-section" style={{ background: '#FFFFFF' }} aria-labelledby="experience-title">
      <div className="paths-container">
        <div className="paths-header">
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--brand)',
              letterSpacing: '0.08em',
              display: 'inline-block',
              marginBottom: 12,
            }}
          >
            BUILT FOR YOUR RETAIL VERTICAL
          </span>
          <h2 id="experience-title">Designed for how Nigerian retail really operates</h2>
          <p style={{ color: 'var(--ink-secondary)', fontSize: 16 }}>
            Whether you run a high-traffic provision store, multiple electronic outlets, or a boutique, StockPadi adapts to your daily counter flow.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {PERSONA_STORIES.map((persona) => (
            <article
              key={persona.id}
              style={{
                background: 'var(--paper)',
                border: '1px solid var(--paper-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  {getPersonaIcon(persona.id)}
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--brand)', letterSpacing: '0.06em' }}>
                  {persona.eyebrow}
                </span>
                <h3 style={{ fontSize: 21, margin: '8px 0 12px' }}>{persona.label}</h3>
                <p style={{ color: 'var(--ink-secondary)', fontSize: 14, lineHeight: 1.6 }}>
                  {persona.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: 28,
                  paddingTop: 16,
                  borderTop: '1px solid var(--paper-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: 12, color: 'var(--ink-muted)' }}>{persona.metricLabel}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{persona.metricValue}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
