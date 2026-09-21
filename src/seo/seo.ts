import { FAQ_LIST, PRICING_PLANS, CORE_FEATURES } from '../data/content';

export type SeoRoute = 'home' | 'pricing';

export interface SeoEnv {
  siteUrl: string;
  businessName: string;
  supportEmail: string;
  socialLinks: Record<string, string>;
}

export interface SeoHead {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogUrl: string;
  twitterUrl: string;
  ogImage: string;
  ogImageWidth: string;
  ogImageHeight: string;
  ogImageAlt: string;
  ogSiteName: string;
  locale: string;
  robots: string;
  jsonLd: string;
}

export const APP_DESCRIPTION =
  '100% offline-first retail POS and inventory management platform for 1 to 6 store branches, with digital WhatsApp receipt sharing, a permanent stock ledger, and customer credit tracking.';

export const HOME_TITLE =
  'OjàPadi: Offline-First Retail POS, Inventory Management & Receipt Printing';

export const HOME_DESCRIPTION =
  'Record sales, track inventory, manage customer credit, and print wireless Bluetooth receipts without internet. The 100% offline-first POS platform built for Nigerian retail businesses and multi-branch stores.';

export const PRICING_TITLE =
  'OjàPadi Pricing: Free, Pro & Enterprise Plans for 1–6 Branch Retailers';

export const PRICING_DESCRIPTION =
  'Start free with zero risk. Transparent naira pricing: Free (₦0 forever), Pro (₦5,000/month, up to 3 branches), Enterprise (₦15,000/month, up to 6 branches). No transaction cuts, no card required.';

const ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

const brandingDescription =
  'Building offline-first business operating systems for retail stores across Nigeria.';

/**
 * Single source of truth for every SEO/AEO signal on the landing page.
 * Consumed by the runtime head manager (DynamicJsonLd) AND by the build-time
 * static prerender plugin, so the baked HTML and the client-updated head
 * can never drift apart. Kept free of `import.meta.env` so it runs in Node.
 */
export function buildSeoHead(route: SeoRoute, env: SeoEnv): SeoHead {
  const siteUrl = env.siteUrl.replace(/\/$/, '');
  const name = env.businessName || 'OjaPadi';

  const isPricing = route === 'pricing';
  const pageUrl = isPricing ? `${siteUrl}/pricing` : `${siteUrl}/`;
  const canonical = isPricing ? `${siteUrl}/pricing` : `${siteUrl}/`;
  const ogImage = `${siteUrl}/og-cover.png`;

  const activeSocials = Object.values(env.socialLinks || {}).filter(
    (link): link is string => typeof link === 'string' && link.trim().length > 0
  );

  const contactPoint =
    env.supportEmail && !env.supportEmail.toLowerCase().includes('example')
      ? {
          '@type': 'ContactPoint' as const,
          contactType: 'customer support',
          email: env.supportEmail,
          areaServed: 'NG',
          availableLanguage: ['en'],
        }
      : undefined;

  const breadcrumbItems = isPricing
    ? [
        { position: 1, name: 'Home', item: `${siteUrl}/` },
        { position: 2, name: 'Pricing', item: `${siteUrl}/pricing` },
      ]
    : [
        { position: 1, name: 'Home', item: `${siteUrl}/` },
        { position: 2, name: 'How It Works', item: `${siteUrl}/#how-it-works` },
        { position: 3, name: 'Features', item: `${siteUrl}/#features` },
        { position: 4, name: 'Pricing', item: `${siteUrl}/#pricing` },
      ];

  const homeTitle = `${name}: Offline-First Retail POS, Inventory Management & Receipt Printing`;
  const pricingTitle = `${name} Pricing: Free, Pro & Enterprise Plans for 1–6 Branch Retailers`;
  const pageTitle = isPricing ? pricingTitle : homeTitle;

  const schemaGraph = [
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}/#app`,
      name,
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'PointOfSale',
      operatingSystem: 'Android, iOS, Windows, Web',
      inLanguage: 'en',
      description: APP_DESCRIPTION,
      featureList: CORE_FEATURES.map((f) => f.title),
      isAccessibleForFree: true,
      offers: PRICING_PLANS.map((plan) => ({
        '@type': 'Offer',
        name: plan.name,
        price: plan.price.replace(/[^\d.]/g, ''),
        priceCurrency: 'NGN',
        priceValidUntil: '2028-12-31',
        description: plan.subtitle,
      })),
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: `${name} Technologies`,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon.svg`,
      },
      description: brandingDescription,
      areaServed: 'NG',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'NG',
      },
      sameAs: activeSocials.length > 0 ? activeSocials : undefined,
      ...(contactPoint ? { contactPoint } : {}),
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: `${name}: Offline-First Retail POS & Inventory`,
      description: APP_DESCRIPTION,
      inLanguage: 'en',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': isPricing ? `${siteUrl}/pricing#webpage` : `${siteUrl}/#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: isPricing ? PRICING_DESCRIPTION : HOME_DESCRIPTION,
      inLanguage: 'en',
      isPartOf: { '@id': `${siteUrl}/#website` },
      primaryImageOfPage: { '@type': 'ImageObject', url: ogImage },
      about: { '@id': `${siteUrl}/#app` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      inLanguage: 'en',
      mainEntity: FAQ_LIST.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph,
  };

  return {
    title: pageTitle,
    description: isPricing ? PRICING_DESCRIPTION : HOME_DESCRIPTION,
    keywords:
      'offline pos software, retail inventory management app, bluetooth thermal receipt printer, customer debt book ledger, multi-branch retail software, point of sale software nigeria, inventory management software nigeria',
    canonical,
    ogUrl: canonical,
    twitterUrl: canonical,
    ogImage,
    ogImageWidth: '1200',
    ogImageHeight: '630',
    ogImageAlt: `${name} offline-first POS: sales dashboard and phone receipt`,
    ogSiteName: name,
    locale: 'en_NG',
    robots: ROBOTS,
    jsonLd: JSON.stringify(jsonLd),
  };
}