import React from 'react';
import { Instagram, Facebook, MessageCircle, Twitter } from 'lucide-react';
import {
  getWebAppUrl,
  getSupportEmail,
  getBusinessName,
  getSocialLinks,
  buildContactLink,
} from '../config/env';
import { BrandMark } from './BrandLogo';

export const Footer: React.FC = () => {
  const businessName = getBusinessName();
  const webAppUrl = getWebAppUrl();
  const supportEmail = getSupportEmail();
  const socialLinks = getSocialLinks();
  const onboardingLink = buildContactLink(
    `Hi ${businessName}, I want to set up my retail store with your POS system.`,
    `${businessName} Store Onboarding Inquiry`
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <BrandMark size={36} />
            <span style={{ fontSize: 22, fontWeight: 800, color: '#FFFFFF' }}>{businessName}</span>
          </div>
          <p>
            The offline-first recording, inventory ledger, and digital receipt platform built for retail businesses. Know your true numbers. Prove every sale.
          </p>
        </div>

        {/* Product Navigation */}
        <div className="footer-column">
          <strong>PRODUCT</strong>
          <button type="button" onClick={() => scrollTo('how-it-works')}>How it works</button>
          <button type="button" onClick={() => scrollTo('features')}>Features</button>
          <button type="button" onClick={() => scrollTo('pricing')}>Pricing</button>
          <button type="button" onClick={() => scrollTo('faq')}>FAQ</button>
          <a href={webAppUrl}>Web application</a>
        </div>

        {/* Community & Contact */}
        <div className="footer-column">
          <strong>COMMUNITY & CONTACT</strong>
          {hasSocials ? (
            <div className="footer-social-links">
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${businessName} on Instagram`} style={{ color: '#94A3B8' }}>
                  <Instagram size={20} />
                </a>
              )}
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${businessName} on Facebook`} style={{ color: '#94A3B8' }}>
                  <Facebook size={20} />
                </a>
              )}
              {socialLinks.tiktok && (
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label={`${businessName} on TikTok`} style={{ color: '#94A3B8' }}>
                  <MessageCircle size={20} />
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${businessName} on Twitter/X`} style={{ color: '#94A3B8' }}>
                  <Twitter size={20} />
                </a>
              )}
            </div>
          ) : (
            <div style={{ color: '#94A3B8', fontSize: 13 }}>
              Support: {supportEmail}
            </div>
          )}
          <a href={onboardingLink} target="_blank" rel="noopener noreferrer">
            Setup & onboarding
          </a>
          <a href={`mailto:${supportEmail}`}>Email support</a>
          <div style={{ marginTop: 24, fontSize: 13, color: '#64748B' }}>
            Lagos • Ibadan • Abuja • Kano
          </div>
        </div>
      </div>

      <div className="footer-copyright-row">
        <div>© {new Date().getFullYear()} {businessName} Technologies. All rights reserved.</div>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="#privacy" style={{ color: 'inherit' }}>Privacy Policy</a>
          <a href="#terms" style={{ color: 'inherit' }}>Terms of Service</a>
          <a href="#security" style={{ color: 'inherit' }}>Security</a>
        </div>
      </div>

      <div className="footer-watermark" aria-hidden="true">
        {businessName.toUpperCase()}
      </div>
    </footer>
  );
};
