import React, { useRef, useState, useEffect } from 'react';
import { PAIN_POINTS } from '../data/content';

export const PainPoints: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (trackRef.current) {
            const rect = trackRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalScrollDistance = rect.height - windowHeight;

            if (totalScrollDistance > 0) {
              const currentScroll = -rect.top;
              const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
              setScrollProgress(progress);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="how-it-works" ref={trackRef} className="painpoint-scroll-track" aria-labelledby="painpoint-title">
      <div className="painpoint-sticky-viewport">
        <div className="painpoint-content-wrapper">
          {/* Left Narrative Column */}
          <div className="painpoint-narrative">
            <h2 id="painpoint-title" className="painpoint-title">
              Stop losing money you don't know about.
            </h2>
            <div className="painpoint-narrative-copy">
              <p className="painpoint-desc-lead">
                It's not bad luck. It's unrecorded sales.
              </p>
              <p className="painpoint-desc">
                When the shop gets busy, sales get forgotten and cash doesn't balance. StockPadi makes recording so fast that every kobo and product is accounted for.
              </p>
            </div>
          </div>

          {/* Right Stacking Problem Cards (Taller, Narrower Paper-Textured Cards) */}
          <div className="painpoint-stack-stage">
            {PAIN_POINTS.map((item, idx) => {
              let opacity = 1;
              let translateY = 0;
              let translateX = 0;
              let rotate = 0;

              if (idx === 0) {
                // Card 0: Base card, visible from start
                opacity = 1;
                translateX = -8;
                translateY = 0;
                rotate = -2;
              } else if (idx === 1) {
                // Card 1: Fades in between 0.20 and 0.48, then stays parked until 0.75
                const start = 0.20;
                const end = 0.48;
                const progress = Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));
                opacity = progress;
                translateY = 20 + (1 - progress) * 160;
                translateX = 10;
                rotate = 2.2;
              } else if (idx === 2) {
                // Card 2: Fades in between 0.58 and 0.85, then stays parked
                const start = 0.58;
                const end = 0.85;
                const progress = Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));
                opacity = progress;
                translateY = 38 + (1 - progress) * 160;
                translateX = -4;
                rotate = -1.2;
              }

              return (
                <article
                  key={item.id}
                  className={`painpoint-stack-card painpoint-paper-card painpoint-card-${idx}`}
                  style={{
                    zIndex: idx + 1,
                    transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate}deg)`,
                    opacity: opacity,
                    pointerEvents: opacity < 0.3 ? 'none' : 'auto',
                  }}
                >
                  <div className="painpoint-photo-frame">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.quote}
                        className="painpoint-card-img"
                        loading="lazy"
                        decoding="async"
                        width={350}
                        height={330}
                      />
                    )}
                  </div>
                  <div className="painpoint-caption-area">
                    <p className="painpoint-paper-quote">
                      “{item.quote}”
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

