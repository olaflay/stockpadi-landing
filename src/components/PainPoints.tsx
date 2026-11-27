import React from 'react';
import { PAIN_POINTS } from '../data/content';
import { LandingMotif } from './LandingIllustrations';

const motifs = ['ledger', 'stock', 'receipt'] as const;

export const PainPoints: React.FC = () => (
  <section
    id="how-it-works"
    className="painpoint-scroll-track"
    aria-labelledby="painpoint-title"
  >
    <div className="painpoint-sticky-viewport">
      <div className="painpoint-container">
        <div className="painpoint-left-sticky">
          <span className="painpoint-eyebrow">The hidden cost of paper</span>
          <h2 id="painpoint-title" className="painpoint-title">
            Stop losing money you don&apos;t know about
          </h2>
          <p className="painpoint-desc-lead">
            It is not bad luck. It is unrecorded sales and uncounted stock.
          </p>
          <p className="painpoint-header-subtext">
            When business picks up, mental notes and paper books become difficult to reconcile.
            These are three records a shop owner should not have to guess.
          </p>
        </div>

        <div className="painpoint-right-col">
          <div className="painpoint-image-stack">
            {PAIN_POINTS.map((item, idx) => (
              <article key={item.id} className="painpoint-stacked-card">
                <div className="painpoint-paper-card">
                  <div className="painpoint-photo-frame">
                    <LandingMotif kind={motifs[idx % motifs.length]} />
                  </div>
                  <div className="painpoint-caption-area">
                    <span className="painpoint-caption-badge">
                      0{idx + 1} • {item.badge}
                    </span>
                    <p className="painpoint-paper-quote">“{item.quote}”</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
