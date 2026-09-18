import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
  };

  const currentItem = TESTIMONIALS[activeIndex];

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
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
        MERCHANT VOICES
      </span>

      <h2 id="testimonials-title" style={{ fontSize: 'clamp(32px, 3.8vw, 48px)' }}>
        From retailers who tested it on the counter
      </h2>

      <div className="testimonial-stage">
        <article className="testimonial-card-single" role="region" aria-label={`Testimonial from ${currentItem.name}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--color-brand-accent)', marginBottom: 16 }}>
            <Quote size={28} />
          </div>

          <p className="testimonial-quote-text">
            “{currentItem.quote}”
          </p>

          <div className="testimonial-author-row">
            <div className="author-avatar" style={{ backgroundColor: currentItem.avatarBg }}>
              {currentItem.initials}
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-on-surface)' }}>
                {currentItem.name}
              </div>
              <div style={{ fontSize: 13, color: 'var(--color-on-surface-muted)' }}>
                {currentItem.role} • {currentItem.location}
              </div>
            </div>
          </div>
        </article>

        {/* Carousel Navigation Controls */}
        <div className="testimonial-controls">
          <button
            type="button"
            className="control-btn"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div style={{ display: 'flex', gap: 8 }} role="tablist" aria-label="Testimonial pagination">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                className={`testimonial-dot ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to testimonial from ${item.name}`}
                aria-selected={activeIndex === idx}
                role="tab"
              />
            ))}
          </div>

          <button
            type="button"
            className="control-btn"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
