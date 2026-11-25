import { useEffect, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PainPoints } from './components/PainPoints';
import { FeaturesSection } from './components/FeaturesSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileFloatingBar } from './components/MobileFloatingBar';
import { DynamicJsonLd } from './components/DynamicJsonLd';
import { getRegistrationUrl } from './config/env';

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showMobileBar, setShowMobileBar] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const progress = Math.min(scrollY / 500, 1);
          setScrollProgress(progress);

          const isPastHero = scrollY > window.innerHeight * 0.45;
          const isNearBottom =
            window.innerHeight + scrollY >= document.documentElement.scrollHeight - 250;
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

  const navigateToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRegister = (location: string) => {
    window.dispatchEvent(
      new CustomEvent('registration_cta_clicked', { detail: { location } })
    );
    window.location.assign(getRegistrationUrl());
  };

  return (
    <div className="landing-root">
      <DynamicJsonLd />
      <Navbar
        onStartFree={() => handleRegister('navbar')}
        onNavigateHome={navigateToHome}
      />

      <main>
        <HeroSection onStartFree={() => handleRegister('hero')} scrollProgress={scrollProgress} />
        <PainPoints />
        <FeaturesSection />
        <FaqSection />
        <FinalCta onStartFree={() => handleRegister('final')} />
      </main>

      <Footer onNavigateHome={navigateToHome} />

      <MobileFloatingBar
        onStartFree={() => handleRegister('mobile_floating_bar')}
        visible={showMobileBar}
      />
      <SpeedInsights />
    </div>
  );
}

export default App;
