import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialProof } from './components/SocialProof';
import { PainPoints } from './components/PainPoints';
import { FeaturesSection } from './components/FeaturesSection';
import { PricingPlans } from './components/PricingPlans';
import { ExperienceStory } from './components/ExperienceStory';

import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileFloatingBar } from './components/MobileFloatingBar';
import { DynamicJsonLd } from './components/DynamicJsonLd';

import { getWebAppUrl, buildContactLink, getBusinessName } from './config/env';

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showMobileBar, setShowMobileBar] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('stockpadi-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const webAppUrl = getWebAppUrl();
  const businessName = getBusinessName();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('stockpadi-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const progress = Math.min(scrollY / 500, 1);
          setScrollProgress(progress);

          const isPastHero = scrollY > window.innerHeight * 0.65;
          const isNearBottom =
            window.innerHeight + scrollY >= document.documentElement.scrollHeight - 350;
          setShowMobileBar(isPastHero && !isNearBottom);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartFree = () => {
    window.location.href = `${webAppUrl}/auth/signup`;
  };

  const handleUpgradePro = () => {
    window.location.href = `${webAppUrl}/auth/signup?plan=pro`;
  };

  const handleContactEnterprise = () => {
    const message = `Hello ${businessName}! I am interested in the Enterprise Plan (up to 6 branches, custom receipt branding, and inter-branch transfers) for my retail chain.`;
    const contactUrl = buildContactLink(message, `${businessName} Enterprise Plan Inquiry`);
    window.open(contactUrl, '_blank');
  };

  return (
    <div className="stockpadi-landing-root">
      <DynamicJsonLd />
      <Navbar
        onStartFree={handleStartFree}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <HeroSection onStartFree={handleStartFree} scrollProgress={scrollProgress} />
        <SocialProof onStartFree={handleStartFree} />
        <PainPoints />
        <FeaturesSection />
        <PricingPlans
          onStartFree={handleStartFree}
          onUpgradePro={handleUpgradePro}
          onContactEnterprise={handleContactEnterprise}
        />
        <ExperienceStory />

        <Testimonials />
        <FaqSection />
        <FinalCta
          onStartFree={handleStartFree}
          onUpgradePro={handleUpgradePro}
        />
      </main>

      <Footer />

      <MobileFloatingBar onStartFree={handleStartFree} visible={showMobileBar} />
    </div>
  );
}

export default App;
