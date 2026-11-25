import { FAQ_LIST, CORE_FEATURES } from '../data/content';

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
  'Offline-first retail POS and inventory management with digital receipt sharing, an append-only stock ledger, and customer credit tracking.';

export const HOME_DESCRIPTION =
  'After setup, record core sales during an outage, track inventory movements, manage customer credit, and share digital receipts.';

const ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

const brandingDescription =
  'Building offline-first business operating systems for retail stores across Nigeria.';

/**
 * Single source of truth for every SEO/AEO signal on the landing page.
 * Consumed by the runtime head manager (DynamicJsonLd) AND by the build-time
 * static prerender plugin, so the baked HTML and the client-updated head
 * can never drift apart. Kept free of `import.meta.env` so it runs in Node.
 */
export function buildSeoHead(env: SeoEnv): SeoHead {
  const siteUrl = env.siteUrl.replace(/\/$/, '');
  const name = env.businessName;

  const pageUrl = `${siteUrl}/`;
  const canonical = `${siteUrl}/`;
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

  const breadcrumbItems = [
    { position: 1, name: 'Home', item: `${siteUrl}/` },
    { position: 2, name: 'How it works', item: `${siteUrl}/#how-it-works` },
    { position: 3, name: 'Features', item: `${siteUrl}/#features` },
    { position: 4, name: 'FAQ', item: `${siteUrl}/#faq` },
  ];

  const homeTitle = `${name}: Offline-First Retail POS & Inventory Management`;
  const pageTitle = homeTitle;

  const schemaGraph = [
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}/#app`,
      name,
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'PointOfSale',
      operatingSystem: 'Web',
      inLanguage: 'en',
      description: APP_DESCRIPTION,
      featureList: CORE_FEATURES.map((f) => f.title),
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name,
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
      '@id': `${siteUrl}/#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: HOME_DESCRIPTION,
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
    description: HOME_DESCRIPTION,
    keywords:
      'offline pos software, retail inventory management app, whatsapp digital receipts, customer debt book ledger, multi-branch retail software, point of sale software nigeria, inventory management software nigeria',
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
