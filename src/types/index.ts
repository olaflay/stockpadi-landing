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
  badge: string;
}

export interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  copy: string;
  highlight: string;
}

export interface PersonaStoryItem {
  id: string;
  eyebrow: string;
  label: string;
  description: string;
  metricLabel: string;
  metricValue: string;
}
