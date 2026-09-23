import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PAIN_POINTS } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export const PainPoints: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!trackRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial positions:
      // Card 0 is parked and fully visible
      if (cardRefs.current[0]) {
        gsap.set(cardRefs.current[0], {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          rotate: -1.8,
        });
      }

      // Card 1 starts at the bottom below Card 0, scaled down, fully opaque (not transparent!)
      if (cardRefs.current[1]) {
        gsap.set(cardRefs.current[1], {
          opacity: 1,
          y: 650,
          x: 8,
          scale: 0.76,
          rotate: 5,
        });
      }

      // Card 2 starts even deeper at the bottom below the stack, scaled down, fully opaque
      if (cardRefs.current[2]) {
        gsap.set(cardRefs.current[2], {
          opacity: 1,
          y: 800,
          x: -6,
          scale: 0.76,
          rotate: -5,
        });
      }

      // Smooth GSAP scrub timeline linked to user scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // 1. Hold Card 0 initially so the user reads it completely
      tl.to({}, { duration: 0.6 });

      // 2. Card 1 climbs up directly from the bottom, growing from small to full size,
      // and stacks on top of Card 0 with a slight physical rotation
      tl.to(cardRefs.current[1], {
        y: 16,
        scale: 1,
        rotate: 2.2,
        duration: 1,
        ease: 'power1.out',
      });

      // 3. Generous resting pause while Card 1 is stacked so user reads it before Card 2 starts
      tl.to({}, { duration: 0.8 });

      // 4. Card 2 climbs up directly from the bottom, growing from small to full size,
      // and stacks on top of Card 1
      tl.to(cardRefs.current[2], {
        y: 32,
        scale: 1,
        rotate: -1.2,
        duration: 1,
        ease: 'power1.out',
      });

      // 5. Final hold with all cards stacked
      tl.to({}, { duration: 0.5 });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={trackRef}
      className="painpoint-scroll-track"
      aria-labelledby="painpoint-title"
    >
      <div className="painpoint-sticky-viewport">
        <div className="painpoint-container">
          {/* Left Column: Sticky Header text without period and without progress bar */}
          <div className="painpoint-left-sticky">
            <span className="painpoint-eyebrow">The Hidden Cost of Paper</span>
            <h2 id="painpoint-title" className="painpoint-title">
              Stop losing money you don't know about
            </h2>
            <p className="painpoint-desc-lead">
              It's not bad luck. It's unrecorded sales and uncounted stock.
            </p>
            <p className="painpoint-header-subtext">
              When business picks up, keeping mental notes or writing in paper books always breaks down. Scroll down to see what leaks your daily profit:
            </p>
          </div>

          {/* Right Column: Physical Stacking Cards climbing from below */}
          <div className="painpoint-right-col">
            <div className="painpoint-image-stack">
              {PAIN_POINTS.map((item, idx) => (
                <div
                  key={item.id}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  className="painpoint-stacked-card"
                  style={{ zIndex: idx + 1 }}
                >
                  <div className="painpoint-paper-card">
                    <div className="painpoint-photo-frame">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.quote}
                          className="painpoint-card-img"
                          loading={idx === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                          width={400}
                          height={350}
                        />
                      )}
                    </div>
                    <div className="painpoint-caption-area">
                      <span className="painpoint-caption-badge">
                        0{idx + 1} • {item.badge}
                      </span>
                      <p className="painpoint-paper-quote">
                        “{item.quote}”
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
