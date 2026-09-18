import React, { useState } from 'react';
import { Menu, X, ShieldCheck, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onStartFree: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartFree, theme, onToggleTheme }) => {
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
      <a
        href="#"
        className="nav-brand"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
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
        <button type="button" className="nav-item" onClick={() => scrollToSection('pricing')}>
          Pricing
        </button>
        <button type="button" className="nav-item" onClick={() => scrollToSection('faq')}>
          FAQ
        </button>
        <a
          href="https://app.stockpadi.com/auth"
          className="nav-item"
          style={{ fontWeight: 600 }}
        >
          Login
        </a>

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={onToggleTheme}
          className="theme-toggle-btn"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button type="button" className="nav-cta" onClick={onStartFree}>
          Start free
        </button>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button
          type="button"
          onClick={onToggleTheme}
          className="theme-toggle-btn-mobile"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          type="button"
          className="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};
