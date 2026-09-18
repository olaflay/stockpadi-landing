import React from 'react';
import { AlertCircle, Clock, PackageX, WifiOff } from 'lucide-react';
import { PAIN_POINTS } from '../data/content';

export const PainPoints: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'pain-1':
        return <Clock size={20} color="#F87171" />;
      case 'pain-2':
        return <PackageX size={20} color="#F87171" />;
      default:
        return <WifiOff size={20} color="#F87171" />;
    }
  };

  return (
    <section id="how-it-works" className="painpoint-section" aria-labelledby="painpoint-title">
      <div className="painpoint-container">
        {/* Sticky Left Narrative */}
        <div className="painpoint-intro">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 12,
              fontWeight: 700,
              color: '#F87171',
              background: 'rgba(248, 113, 113, 0.12)',
              padding: '6px 14px',
              borderRadius: 9999,
              marginBottom: 20,
            }}
          >
            <AlertCircle size={14} />
            <span>THE REALITY OF RETAIL</span>
          </div>

          <h2 id="painpoint-title">
            You are probably losing money you do not know about.
          </h2>
          <p>Not to bad luck. Not to bad staff.</p>
          <p>
            You lose it to the gaps between a sale happening at the counter and someone remembering to record it in a paper book.
          </p>
          <p>
            StockPadi closes those gaps completely: every transaction is written to an immutable offline ledger, so you see what sold, what is left, and what you actually earned.
          </p>
        </div>

        {/* Right Stack of Fanned Problem Cards */}
        <div className="painpoint-stack">
          {PAIN_POINTS.map((item, idx) => (
            <article
              key={item.id}
              className="painpoint-card"
              style={{
                transform: idx === 0 ? 'rotate(-0.8deg)' : idx === 2 ? 'rotate(0.8deg)' : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span className="painpoint-badge">{item.badge}</span>
                {getIcon(item.id)}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="painpoint-quote">
                “{item.quote}”
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
