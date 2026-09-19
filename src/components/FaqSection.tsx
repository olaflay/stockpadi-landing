import React, { useState } from 'react';
import { FAQ_LIST } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_LIST[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-title">
      <div className="faq-container">
        <div className="faq-narrative-col">
          <span className="faq-eyebrow">BEFORE YOU START</span>
          <h2 id="faq-title" className="faq-headline">
            A few useful answers.
          </h2>
          <p className="faq-subtext">
            Everything you need to choose StockPadi and start recording sales with zero setup stress.
          </p>
        </div>

        <div className="faq-accordion-col">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`faq-row ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{faq.question}</span>
                  <span className={`faq-plus-icon ${isOpen ? 'rotated' : ''}`} aria-hidden="true">
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer-pane">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

