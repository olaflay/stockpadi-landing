import React from 'react';
import { Instagram, Facebook, MessageCircle, Twitter } from 'lucide-react';
import {
  getBusinessName,
  getSocialLinks,
} from '../config/env';
import { BrandMark } from './BrandLogo';

interface FooterProps {
  onNavigateHome?: () => void;
  onNavigatePricing?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateHome, onNavigatePricing }) => {
  const businessName = getBusinessName();
  const socialLinks = getSocialLinks();

  const scrollTo = (id: string) => {
    if (onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hasSocials = Boolean(
    socialLinks.instagram ||
    socialLinks.facebook ||
    socialLinks.tiktok ||
    socialLinks.twitter
  );

  return (
    <footer className="landing-footer" role="contentinfo">
      <div className="footer-grid">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-brand-header">
            <BrandMark size={28} />
            <span className="footer-brand-name">{businessName}</span>
          </div>
          <p className="footer-brand-tagline">
            Offline-first recording, inventory ledger, and WhatsApp receipts for retail stores.
          </p>
        </div>

        {/* Product Navigation */}
        <div className="footer-column">
          <span className="footer-col-title">PRODUCT</span>
          <button type="button" onClick={() => scrollTo('how-it-works')}>How It Works</button>
          <button type="button" onClick={() => scrollTo('features')}>Features</button>
          <button type="button" onClick={() => onNavigatePricing ? onNavigatePricing() : scrollTo('pricing')}>
            Pricing
          </button>
          <button type="button" onClick={() => scrollTo('faq')}>FAQ</button>
        </div>

        {/* Community & Contact */}
        <div className="footer-column">
          <span className="footer-col-title">COMMUNITY</span>
          {hasSocials ? (
            <div className="footer-social-links">
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              )}
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              )}
              {socialLinks.tiktok && (
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <MessageCircle size={18} />
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
              )}
            </div>
          ) : (
            <p className="footer-brand-tagline" style={{ fontSize: 12 }}>
              Built for independent retail stores.
            </p>
          )}
        </div>
      </div>

      <div className="footer-copyright-row">
        <div>© {new Date().getFullYear()} {businessName}. All rights reserved.</div>
        <div className="footer-legal-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#security">Security</a>
        </div>
      </div>

      {/* Brand Watermark (positioned very low so only about half of text shows) */}
      <div className="footer-figo-watermark" aria-hidden="true">
        {businessName.toLowerCase()}
      </div>
    </footer>
  );
};


