export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  avatarBg: string;
  initials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PainPointItem {
  id: string;
  title: string;
  description: string;
  quote: string;
  badge?: string;
  image?: string;
}

export interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  copy: string;
  highlight: string;
  image?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  cadence: string;
  subtitle: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}
