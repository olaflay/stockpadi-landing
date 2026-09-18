import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onStartFree: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartFree }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="landing-nav" role="banner">
      <a href="#" className="nav-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <div className="nav-brand-logo">
          <ShieldCheck size={20} />
        </div>
        <span>StockPadi</span>
      </a>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`} aria-label="Main navigation">
        <button type="button" className="nav-item" onClick={() => scrollToSection('how-it-works')}>
          How it works
        </button>
        <button type="button" className="nav-item" onClick={() => scrollToSection('features')}>
          Features
        </button>
        <button type="button" className="nav-item" onClick={() => scrollToSection('hardware')}>
          Hardware
        </button>
        <button type="button" className="nav-item" onClick={() => scrollToSection('faq')}>
          FAQ
        </button>
        <a href="https://app.stockpadi.com/auth" className="nav-item" style={{ fontWeight: 600 }}>
          Login
        </a>
        <button type="button" className="nav-cta" onClick={onStartFree}>
          Start free
        </button>
      </nav>

      <button
        type="button"
        className="mobile-nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
};
