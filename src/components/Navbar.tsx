import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { getBusinessName } from '../config/env';
import { BrandMark } from './BrandLogo';

interface NavbarProps {
  onStartFree: () => void;
  onNavigateHome?: () => void;
  onNavigatePricing?: () => void;
  currentRoute?: 'home' | 'pricing';
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartFree,
  onNavigateHome,
  onNavigatePricing,
  currentRoute = 'home',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const businessName = getBusinessName();

  const handleHowItWorksClick = () => {
    setIsOpen(false);
    if (currentRoute !== 'home' && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById('how-it-works');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('how-it-works');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFeaturesClick = () => {
    setIsOpen(false);
    if (currentRoute !== 'home' && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById('features');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('features');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePricingClick = () => {
    setIsOpen(false);
    if (onNavigatePricing) {
      onNavigatePricing();
    }
  };

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="landing-nav" role="banner">
      <a href="/" className="nav-brand" onClick={handleBrandClick}>
        <BrandMark size={28} />
        <span>{businessName}</span>
      </a>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`} aria-label="Main navigation">
        <button type="button" className="nav-item" onClick={handleHowItWorksClick}>
          How It Works
        </button>
        <button type="button" className="nav-item" onClick={handleFeaturesClick}>
          Features
        </button>
        <button
          type="button"
          className={`nav-item ${currentRoute === 'pricing' ? 'active' : ''}`}
          onClick={handlePricingClick}
        >
          Pricing
        </button>

        <button type="button" className="nav-cta" onClick={onStartFree}>
          Start Free
        </button>
      </nav>

      <button
        type="button"
        className="mobile-nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
};

