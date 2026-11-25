import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { getBusinessName } from '../config/env';
import { BrandMark } from './BrandLogo';

interface NavbarProps {
  onStartFree: () => void;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartFree,
  onNavigateHome,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const businessName = getBusinessName();

  const handleHowItWorksClick = () => {
    setIsOpen(false);
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFeaturesClick = () => {
    setIsOpen(false);
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
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
        <a className="nav-item" href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>

        <button type="button" className="nav-cta" onClick={onStartFree}>
          Create account
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

