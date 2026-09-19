import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialProof } from './components/SocialProof';
import { PainPoints } from './components/PainPoints';
import { FeaturesSection } from './components/FeaturesSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { PricingPage } from './components/PricingPage';
import { MobileFloatingBar } from './components/MobileFloatingBar';
import { DynamicJsonLd } from './components/DynamicJsonLd';

import { getWebAppUrl } from './config/env';

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showMobileBar, setShowMobileBar] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<'home' | 'pricing'>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname === '/pricing' || window.location.hash === '#pricing'
        ? 'pricing'
        : 'home';
    }
    return 'home';
  });

  const webAppUrl = getWebAppUrl();

  useEffect(() => {
    const handlePopState = () => {
      const isPricing =
        window.location.pathname === '/pricing' || window.location.hash === '#pricing';
      setCurrentRoute(isPricing ? 'pricing' : 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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

  const navigateToPricing = () => {
    setCurrentRoute('pricing');
    window.history.pushState({}, '', '/pricing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentRoute('home');
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartFree = () => {
    window.location.href = `${webAppUrl}/auth/signup`;
  };

  if (currentRoute === 'pricing') {
    return (
      <div className="stockpadi-landing-root">
        <DynamicJsonLd />
        <PricingPage
          onNavigateHome={navigateToHome}
          onStartFree={handleStartFree}
        />
      </div>
    );
  }

  return (
    <div className="stockpadi-landing-root">
      <DynamicJsonLd />
      <Navbar
        onStartFree={handleStartFree}
        onNavigateHome={navigateToHome}
        onNavigatePricing={navigateToPricing}
        currentRoute={currentRoute}
      />

      <main>
        <HeroSection onStartFree={handleStartFree} scrollProgress={scrollProgress} />
        <SocialProof onStartFree={handleStartFree} />
        <PainPoints />
        <FeaturesSection />
        <Testimonials />
        <FaqSection />
        <FinalCta
          onStartFree={handleStartFree}
          onNavigatePricing={navigateToPricing}
        />
      </main>

      <Footer
        onNavigateHome={navigateToHome}
        onNavigatePricing={navigateToPricing}
      />

      <MobileFloatingBar onStartFree={handleStartFree} visible={showMobileBar} />
    </div>
  );
}

export default App;

