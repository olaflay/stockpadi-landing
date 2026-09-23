import React, { useRef, useEffect } from 'react';
import { Database, MessageCircle, BookOpenCheck, Layers } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CORE_FEATURES } from '../data/content';
import { getBusinessName } from '../config/env';

gsap.registerPlugin(ScrollTrigger);

export const FeaturesSection: React.FC = () => {
  const brand = getBusinessName();
  const brandDisplay = brand === 'OjaPadi' ? 'OjàPadi' : brand;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(max-width: 768px)', () => {
        gsap.to(trackRef.current, {
          x: () => {
            const track = trackRef.current;
            const wrapper = track?.parentElement;
            if (!track || !wrapper) return 0;
            return -(track.scrollWidth - wrapper.clientWidth);
          },
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getFeatureIcon = (id: string, color: string) => {
    switch (id) {
      case 'feat-inventory':
        return <Database size={20} color={color} />;
      case 'feat-receipts':
        return <MessageCircle size={20} color={color} />;
      case 'feat-credit':
        return <BookOpenCheck size={20} color={color} />;
      default:
        return <Layers size={20} color={color} />;
    }
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      className="features-section"
      aria-labelledby="features-title"
    >
      <div className="features-sticky-viewport">
        <div className="features-header">
          <div>
            <span className="features-eyebrow">What You Get</span>
            <h2 id="features-title" className="features-headline">
              Running a business used to mean guessing, not knowing.
            </h2>
          </div>
          <p className="features-sub">
            {brandDisplay} audits every sale and stock movement instantly. Full clarity whether at the counter or away.
          </p>
        </div>

        <div className="feature-grid-wrapper">
          <div ref={trackRef} className="feature-grid">
            {CORE_FEATURES.map((feat) => (
              <article
                key={feat.id}
                className="feature-card"
              >
                <div className="feature-card-header">
                  <span
                    className="feature-tag"
                    style={{
                      color: feat.accentColor,
                      backgroundColor: feat.pillBg,
                      borderColor: feat.pillBorder,
                    }}
                  >
                    {feat.tag}
                  </span>
                  {getFeatureIcon(feat.id, feat.accentColor)}
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
        </div>
      </div>
    </section>
  );
};

