import { BookOpen, Check, Package, Receipt, Store, WifiOff } from 'lucide-react';

const motifIcons = { ledger: BookOpen, stock: Package, receipt: Receipt, storefront: Store };

export function LandingMotif({ kind }: { kind: keyof typeof motifIcons }) {
  const Icon = motifIcons[kind];
  return (
    <div className={`landing-motif landing-motif--${kind}`} aria-hidden="true">
      <span className="motif-orbit" />
      <div className="motif-tile"><Icon strokeWidth={1.5} /></div>
      <span className="motif-spark" />
      {kind === 'storefront' && <span className="motif-ready"><Check strokeWidth={2} /></span>}
    </div>
  );
}

export function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-hidden="true">
      <div className="hero-art-orbit" />
      <div className="hero-art-store">
        <div className="hero-art-awning" />
        <div className="hero-art-window"><Package strokeWidth={1.4} /></div>
        <div className="hero-art-door" />
      </div>
      <div className="hero-art-phone">
        <div className="hero-art-phone-top"><Store strokeWidth={1.5} /><span /></div>
        <div className="hero-art-sale"><span /><span /></div>
        <div className="hero-art-line" />
        <div className="hero-art-line" />
        <div className="hero-art-confirm"><Check strokeWidth={2.3} /></div>
      </div>
      <div className="hero-art-receipt"><Receipt strokeWidth={1.5} /><span /><span /></div>
      <div className="hero-art-offline"><WifiOff strokeWidth={1.6} /></div>
      <div className="hero-art-ground" />
    </div>
  );
}
