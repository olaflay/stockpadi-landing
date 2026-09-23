import React, { useEffect, useRef } from 'react';
import { X, MessageCircle, Mail } from 'lucide-react';
import { getBusinessName, getWhatsAppNumber, getSupportEmail } from '../config/env';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
  const brand = getBusinessName();
  const brandDisplay = brand === 'OjaPadi' ? 'OjàPadi' : brand;
  const whatsappNumber = getWhatsAppNumber();
  const supportEmail = getSupportEmail();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whatsappMessage = `Hi, I'm interested in ${brandDisplay}. When is it launching?`;
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : '';
  const emailSubject = `${brandDisplay} — Launch Inquiry`;
  const emailBody = `Hi ${brandDisplay} team,\n\nI'd like to know when the app launches and how to get early access.\n\nThanks!`;
  const emailUrl = `mailto:${supportEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div
      className="coming-soon-overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Coming Soon"
    >
      <div className="coming-soon-card">
        <button
          type="button"
          className="coming-soon-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="coming-soon-badge">COMING SOON</div>
        <h3 className="coming-soon-title">
          {brandDisplay} is almost ready.
        </h3>
        <p className="coming-soon-body">
          We're putting final touches on the app. Reach out to get notified when it launches or ask us anything.
        </p>

        <div className="coming-soon-actions">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="coming-soon-btn coming-soon-btn-wa"
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </a>
          )}
          <a
            href={emailUrl}
            className="coming-soon-btn coming-soon-btn-email"
          >
            <Mail size={16} />
            <span>Send us an email</span>
          </a>
        </div>
      </div>
    </div>
  );
};
