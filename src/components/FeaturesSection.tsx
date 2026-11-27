import React, { useEffect, useRef } from 'react';
import { Database, MessageCircle, BookOpenCheck, Layers } from 'lucide-react';
import { CORE_FEATURES } from '../data/content';
import { getBusinessName } from '../config/env';

export const FeaturesSection: React.FC = () => {
  const brand = getBusinessName();
  const brandDisplay = brand;
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const mobileMotion = '(max-width: 768px) and (prefers-reduced-motion: no-preference)';
    const media = window.matchMedia(mobileMotion);
    let disposed = false;
    let revert: (() => void) | undefined;

    // Keep the swipe gallery usable while the animation module loads.
    const setup = () => {
      if (!media.matches || revert) return;
      void Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
        if (disposed || !media.matches || revert) return;
        gsap.registerPlugin(ScrollTrigger);
        const responsive = gsap.matchMedia();
        revert = () => responsive.revert();
        responsive.add(mobileMotion, () => {
          viewport.classList.add('feature-grid-wrapper--scrub');
          viewport.scrollLeft = 0;
          const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
          gsap.to(track, {
            x: () => -distance(),
            ease: 'none',
            scrollTrigger: {
              trigger: viewport,
              start: 'top 96px',
              end: () => `+=${Math.max(1, distance())}`,
              pin: true,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
          return () => viewport.classList.remove('feature-grid-wrapper--scrub');
        });
      }).catch(() => {
        // Native swipe remains available if the optional animation cannot load.
      });
    };

    setup();
    media.addEventListener('change', setup);
    return () => {
      disposed = true;
      media.removeEventListener('change', setup);
      revert?.();
    };
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
            {brandDisplay} keeps sales, stock movements, and customer credit connected to the records that produced them.
          </p>
        </div>

        <div className="feature-grid-wrapper" ref={viewportRef} tabIndex={0} role="region" aria-label="Product screens">
          <div className="feature-grid" ref={trackRef}>
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

