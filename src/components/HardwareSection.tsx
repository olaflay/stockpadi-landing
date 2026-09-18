import React, { useState } from 'react';
import { Bluetooth, Zap, Smartphone, Printer, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HARDWARE_SHOWCASE } from '../data/content';
import { buildContactLink, getBusinessName } from '../config/env';

interface HardwareSectionProps {
  onStartFree: () => void;
}

export const HardwareSection: React.FC<HardwareSectionProps> = ({ onStartFree }) => {
  const [printCount, setPrintCount] = useState(1);
  const [isFeeding, setIsFeeding] = useState(false);
  const businessName = getBusinessName();
  const printerContactUrl = buildContactLink(
    `Hi ${businessName}, what thermal printer models are recommended?`,
    `${businessName} Thermal Printer Compatibility Inquiry`
  );

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
        {/* Left Column: Open Hardware Philosophy */}
        <div className="hardware-copy">
          <span className="hardware-tag-badge">
            {HARDWARE_SHOWCASE.tag}
          </span>
          <h2 id="hardware-title">{HARDWARE_SHOWCASE.headline}</h2>
          <p className="hardware-description">
            {HARDWARE_SHOWCASE.subheadline}
          </p>

          <ul className="hardware-bullet-list">
            {HARDWARE_SHOWCASE.bulletPoints.map((item, idx) => (
              <li key={idx}>
                <CheckCircle2 size={18} className="hardware-check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 32 }}>
            <button type="button" className="btn-primary" onClick={onStartFree}>
              <span>Start free with your phone</span>
              <ArrowRight size={16} />
            </button>
            <a
              href={printerContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>Ask about printer models</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Open Printer Simulation */}
        <div className="hardware-interactive-box">
          <div className="hardware-badges-row">
            <span>
              <Bluetooth size={16} color="var(--color-brand-accent)" /> Standard Bluetooth
            </span>
            <span>
              <Zap size={16} color="var(--color-warning)" /> 58mm / 80mm ESC-POS
            </span>
            <span>
              <Smartphone size={16} color="var(--color-success)" /> Android & iPhone
            </span>
          </div>

          <div className="printer-shell-visual">
            <div className="printer-exit-slot" />

            {/* Simulated Live Receipt Slip */}
            <div
              className="receipt-preview-slip"
              style={{
                transform: isFeeding ? 'translateY(8px)' : 'none',
              }}
            >
              <div className="receipt-store-title">
                MUSA SUPERMARKET #0{printCount}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span>1x Golden Penny Flour</span>
                <span className="font-number">₦3,200</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span>2x Gino Pepper Tomato</span>
                <span className="font-number">₦800</span>
              </div>
              <div style={{ borderTop: '1px dashed var(--color-outline-variant)', marginTop: 6, paddingTop: 4, display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                <span>PAID (TRANSFER):</span>
                <span className="font-number">₦4,000</span>
              </div>
              <div style={{ textAlign: 'center', marginTop: 4, fontSize: 10, color: 'var(--color-on-surface-muted)' }}>
                Printed offline via Bluetooth
              </div>
            </div>

            <button
              type="button"
              onClick={handleTestPrint}
              className="test-print-trigger-btn"
            >
              <Printer size={16} />
              <span>{isFeeding ? 'Printing ticket…' : 'Tap to test print preview'}</span>
            </button>
          </div>

          <p style={{ fontSize: 12, color: 'var(--color-on-surface-muted)', marginTop: 16 }}>
            Compatible with Cat, Xprinter, Milestone, MPT, and all standard POS ESC/POS printers.
          </p>
        </div>
      </div>
    </section>
  );
};
