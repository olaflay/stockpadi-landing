import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  // Start in middle segment of infinite repeated list
  const count = TESTIMONIALS.length;
  const [virtualIndex, setVirtualIndex] = useState(count * 5);

  const prev = () => {
    setVirtualIndex((v) => v - 1);
  };

  const next = () => {
    setVirtualIndex((v) => v + 1);
  };

  const activeIndex = ((virtualIndex % count) + count) % count;

  // 11 repetitions ensure smooth forward and backward looping without hitting boundaries
  const repeatedList = Array.from({ length: 11 }, () => TESTIMONIALS).flat();

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="testimonials-header">
        <span className="testimonials-eyebrow">REVIEWS</span>
        <h2 id="testimonials-title" className="testimonials-headline">
          From people who tried it
        </h2>
      </div>

      <div className="testimonial-carousel-wrapper">
        {/* Edge blur vignettes */}
        <div className="carousel-blur-edge blur-left" aria-hidden="true" />
        <div className="carousel-blur-edge blur-right" aria-hidden="true" />

        <div className="testimonial-track-container">
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(calc(50% - (var(--t-card-w, 340px) / 2) - ${virtualIndex} * (var(--t-card-w, 340px) + var(--t-card-gap, 20px))))`,
            }}
          >
            {repeatedList.map((item, idx) => {
              const isActive = idx === virtualIndex;
              return (
                <article
                  key={`${item.id}-${idx}`}
                  className={`testimonial-card-compact ${isActive ? 'active' : 'inactive'}`}
                  onClick={() => setVirtualIndex(idx)}
                >
                  <div className="testimonial-card-top">
                    <div className="testimonial-quote-icon">
                      <Quote size={22} />
                    </div>

                    <p className="testimonial-quote-text">
                      “{item.quote}”
                    </p>
                  </div>

                  <div className="testimonial-author-row">
                    <div className="author-avatar" style={{ backgroundColor: item.avatarBg }}>
                      {item.initials}
                    </div>
                    <div>
                      <div className="author-name">{item.name}</div>
                      <div className="author-role">{item.role} • {item.location}</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="testimonial-controls">
          <button
            type="button"
            className="control-btn"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="testimonial-dots" role="tablist" aria-label="Testimonial pagination">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                className={`testimonial-dot ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => {
                  const diff = idx - activeIndex;
                  setVirtualIndex((v) => v + diff);
                }}
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
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};


