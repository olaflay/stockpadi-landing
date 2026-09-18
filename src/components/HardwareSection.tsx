import React, { useState } from 'react';
import { Bluetooth, Zap, BatteryCharging, Printer, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HARDWARE_BUNDLE } from '../data/content';

interface HardwareSectionProps {
  onStartFree: () => void;
  onOrderBundle: () => void;
}

export const HardwareSection: React.FC<HardwareSectionProps> = ({ onStartFree, onOrderBundle }) => {
  const [printCount, setPrintCount] = useState(1);
  const [isFeeding, setIsFeeding] = useState(false);

  const handleTestPrint = () => {
    setIsFeeding(true);
    setTimeout(() => {
      setPrintCount((c) => c + 1);
      setIsFeeding(false);
    }, 1200);
  };

  return (
    <section id="hardware" className="hardware-section" aria-labelledby="hardware-title">
      <div className="hardware-container">
        {/* Left Column: Copy & Value Proposition */}
        <div className="hardware-copy">
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--brand)',
              letterSpacing: '0.08em',
              display: 'inline-block',
              marginBottom: 12,
            }}
          >
            {HARDWARE_BUNDLE.tag}
          </span>
          <h2 id="hardware-title">{HARDWARE_BUNDLE.headline}</h2>
          <p style={{ color: 'var(--ink-secondary)', fontSize: 16, lineHeight: 1.7, marginBottom: 20 }}>
            {HARDWARE_BUNDLE.subheadline}
          </p>

          <span className="hardware-price-tag">{HARDWARE_BUNDLE.price}</span>
          <p style={{ fontSize: 13, color: 'var(--ink-muted)', marginBottom: 28 }}>
            {HARDWARE_BUNDLE.priceDetail}
          </p>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 36 }}>
            {HARDWARE_BUNDLE.includedItems.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink)' }}>
                <CheckCircle2 size={16} color="var(--brand)" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button type="button" className="btn-primary" onClick={onOrderBundle}>
              <span>Order printer (₦55,000)</span>
              <ArrowRight size={16} />
            </button>
            <button type="button" className="btn-secondary" onClick={onStartFree}>
              <span>Use app for free</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Thermal Printer Simulation */}
        <div className="hardware-interactive-box">
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 24, color: 'var(--ink-secondary)', fontSize: 13 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Bluetooth size={16} color="var(--brand)" /> Bluetooth 5.0
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Zap size={16} color="#EA580C" /> Direct thermal (no ink)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <BatteryCharging size={16} color="#16A34A" /> 1500mAh battery
            </span>
          </div>

          <div
            style={{
              background: '#232738',
              borderRadius: 'var(--radius-md)',
              padding: '28px 24px',
              maxWidth: 320,
              margin: '0 auto',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
              position: 'relative',
            }}
          >
            <div style={{ width: 140, height: 6, background: '#11131C', borderRadius: 3, margin: '0 auto 12px' }} />

            {/* Simulated Live Receipt */}
            <div
              style={{
                background: '#FFFEEA',
                borderRadius: 4,
                padding: '12px 14px',
                color: '#111',
                fontFamily: 'Courier New, monospace',
                fontSize: 11,
                textAlign: 'left',
                lineHeight: 1.3,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: isFeeding ? 'translateY(8px)' : 'none',
              }}
            >
              <div style={{ textAlign: 'center', fontWeight: 'bold', borderBottom: '1px dashed #999', paddingBottom: 4, marginBottom: 6 }}>
                STOCKPADI STORE #0{printCount}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>1x Geisha Mackerel</span>
                <span>₦1,200</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>2x Indomie Noodles</span>
                <span>₦1,000</span>
              </div>
              <div style={{ borderTop: '1px dashed #999', marginTop: 6, paddingTop: 4, display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>PAID CASH:</span>
                <span>₦2,200</span>
              </div>
              <div style={{ textAlign: 'center', marginTop: 4, fontSize: 9, color: '#666' }}>
                Thank you for your patronage!
              </div>
            </div>

            <button
              type="button"
              onClick={handleTestPrint}
              style={{
                marginTop: 20,
                width: '100%',
                background: 'var(--brand)',
                color: '#fff',
                fontSize: 13,
                fontWeight: 600,
                padding: '10px',
                borderRadius: 8,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <Printer size={16} />
              <span>{isFeeding ? 'Printing paper…' : 'Tap to test wireless print'}</span>
            </button>
          </div>

          <p style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 16 }}>
            Connects seamlessly with Android phones, iPhones, and desktop browsers.
          </p>
        </div>
      </div>
    </section>
  );
};
