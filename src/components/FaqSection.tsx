import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_LIST } from '../data/content';

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-title">
      <div className="faq-container">
        <div style={{ textAlign: 'center' }}>
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
            BEFORE YOU START
          </span>
          <h2 id="faq-title" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)' }}>
            A few useful answers
          </h2>
          <p style={{ color: 'var(--color-on-surface-muted)', fontSize: 16, marginTop: 8 }}>
            Everything you need to know about offline sync, stock tracking, and store security.
          </p>
        </div>

        <div className="faq-list">
          {FAQ_LIST.map((faq, idx) => (
            <details key={faq.id} className="faq-item" open={idx === 0}>
              <summary className="faq-summary">
                <span>{faq.question}</span>
                <ChevronDown size={18} color="var(--color-on-surface-muted)" />
              </summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
