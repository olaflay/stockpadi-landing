import React, { useRef, useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { SOCIAL_PROOF_CARDS } from '../data/content';

interface SocialProofProps {
  onStartFree: () => void;
}

export const SocialProof: React.FC<SocialProofProps> = ({ onStartFree }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
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
    <section ref={containerRef} className="social-proof-scroll-track" aria-labelledby="social-proof-title">
      <div className="social-proof-sticky-frame">
        <div className="proof-header">
          <h2 id="social-proof-title" className="proof-headline">
            Join 1,000+ retail stores that closed today knowing exactly what they made.
          </h2>
          <button type="button" className="btn-primary proof-cta" onClick={onStartFree}>
            <span>Get started</span>
          </button>
        </div>

        {/* Stacking Card Stage */}
        <div className="stacked-cards-container">
          {SOCIAL_PROOF_CARDS.map((card, idx) => {
            let opacity = 1;
            let translateY = 0;
            let scale = 1;

            if (idx === 0) {
              opacity = 1;
              translateY = 0;
              scale = 0.97;
            } else if (idx === 1) {
              const start = 0.18;
              const end = 0.45;
              const progress = Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));
              opacity = progress > 0.04 ? 1 : progress * 25;
              translateY = 14 + (1 - progress) * 110;
              scale = 0.985;
            } else if (idx === 2) {
              const start = 0.52;
              const end = 0.80;
              const progress = Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));
              opacity = progress > 0.04 ? 1 : progress * 25;
              translateY = 28 + (1 - progress) * 110;
              scale = 1.0;
            }

            return (
              <article
                key={card.id}
                className={`proof-stack-card proof-card-${idx}`}
                style={{
                  zIndex: idx + 1,
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity: opacity,
                  pointerEvents: opacity < 0.2 ? 'none' : 'auto',
                  ['--mobile-top' as any]: `${76 + idx * 14}px`,
                }}
              >
                <div className="stack-card-img-wrap">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    width={360}
                    height={240}
                    className="stack-card-img"
                  />
                </div>
                <div className="stack-card-content">
                  <div className="stack-card-meta">
                    <span className="stack-card-tag">{card.tag}</span>
                    <span className="stack-card-location">
                      <MapPin size={12} /> {card.location}
                    </span>
                  </div>
                  <h3 className="stack-card-title">{card.title}</h3>
                  <div className="stack-card-highlight">{card.highlight}</div>
                  <p className="stack-card-subtext">{card.subtext}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};


