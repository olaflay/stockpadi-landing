import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialProof } from './components/SocialProof';
import { PainPoints } from './components/PainPoints';
import { FeaturesSection } from './components/FeaturesSection';
import { ProductPaths } from './components/ProductPaths';
import { ExperienceStory } from './components/ExperienceStory';
import { HardwareSection } from './components/HardwareSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileFloatingBar } from './components/MobileFloatingBar';

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showMobileBar, setShowMobileBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / 500, 1);
      setScrollProgress(progress);

      const isPastHero = scrollY > window.innerHeight * 0.65;
      const isNearBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 350;
      setShowMobileBar(isPastHero && !isNearBottom);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartFree = () => {
    window.location.href = 'https://app.stockpadi.com/auth/signup';
  };

  const handleOrderBundle = () => {
    const message = encodeURIComponent(
      'Hello StockPadi team! I would like to order the ₦55,000 Bluetooth Thermal Printer & 1-Year Cloud Bundle for my store.'
    );
    window.open(`https://wa.me/2348000000000?text=${message}`, '_blank');
  };

  return (
    <div className="stockpadi-landing-root">
      <Navbar onStartFree={handleStartFree} />

      <main>
        <HeroSection onStartFree={handleStartFree} scrollProgress={scrollProgress} />
        <SocialProof onStartFree={handleStartFree} />
        <PainPoints />
        <FeaturesSection />
        <ProductPaths onStartFree={handleStartFree} onOrderBundle={handleOrderBundle} />
        <ExperienceStory />
        <HardwareSection onStartFree={handleStartFree} onOrderBundle={handleOrderBundle} />
        <Testimonials />
        <FaqSection />
        <FinalCta onStartFree={handleStartFree} onOrderBundle={handleOrderBundle} />
      </main>

      <Footer />

      <MobileFloatingBar onStartFree={handleStartFree} visible={showMobileBar} />
    </div>
  );
}

export default App;
