import { useEffect } from 'react';
import { getSiteUrl, getBusinessName, getSocialLinks } from '../config/env';
import { FAQ_LIST } from '../data/content';

/**
 * Dynamically injects SEO meta tags and Schema.org JSON-LD at runtime
 * based strictly on current environment variables (VITE_SITE_URL / window.location.origin).
 * Guarantees ZERO hardcoded domains or URLs.
 */
export const DynamicJsonLd = () => {
  useEffect(() => {
    const siteUrl = getSiteUrl();
    const businessName = getBusinessName();
    const socialLinks = getSocialLinks();

    // 1. Update Canonical Link
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = siteUrl ? `${siteUrl}/` : window.location.href;

    // 2. Update OpenGraph & Twitter Dynamic URLs
    const setMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector<HTMLMetaElement>(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) meta.setAttribute('property', name);
        else meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    if (siteUrl) {
      setMeta('og:url', `${siteUrl}/`, true);
      setMeta('og:image', `${siteUrl}/og-stockpadi.png`, true);
      setMeta('twitter:url', `${siteUrl}/`);
      setMeta('twitter:image', `${siteUrl}/og-stockpadi.png`);
    }
    setMeta('og:site_name', businessName, true);

    // 3. Collect active social links dynamically
    const activeSameAs = Object.values(socialLinks).filter(
      (link): link is string => typeof link === 'string' && link.trim().length > 0
    );

    // 4. Construct Dynamic Schema.org JSON-LD
    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          '@id': siteUrl ? `${siteUrl}/#app` : '#app',
          name: businessName,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Android, iOS, Windows, Web',
          description: `100% offline-first retail POS, inventory management, and receipt printing platform for 1 to 6 store branches.`,
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '1042',
            bestRating: '5',
            worstRating: '1',
          },
          offers: [
            {
              '@type': 'Offer',
              name: 'Free Plan',
              price: '0',
              priceCurrency: 'NGN',
              priceValidUntil: '2028-12-31',
              description: 'For 1 shop with up to 75 products. 100% offline-first, WhatsApp receipts, debt book.',
            },
            {
              '@type': 'Offer',
              name: 'Pro Plan',
              price: '5000',
              priceCurrency: 'NGN',
              priceValidUntil: '2028-12-31',
              description: 'Unlimited products, up to 3 branches, staff PIN security, net profit and loss, theft audit trail.',
            },
            {
              '@type': 'Offer',
              name: 'Enterprise Plan',
              price: '15000',
              priceCurrency: 'NGN',
              priceValidUntil: '2028-12-31',
              description: 'Up to 6 branches, inter-branch transfers, custom receipt logo, priority onboarding.',
            },
          ],
        },
        {
          '@type': 'Organization',
          '@id': siteUrl ? `${siteUrl}/#organization` : '#organization',
          name: `${businessName} Technologies`,
          url: siteUrl || undefined,
          logo: siteUrl ? `${siteUrl}/favicon.svg` : undefined,
          description: `Building offline-first business operating systems for retail stores.`,
          sameAs: activeSameAs.length > 0 ? activeSameAs : undefined,
        },
        {
          '@type': 'WebSite',
          '@id': siteUrl ? `${siteUrl}/#website` : '#website',
          url: siteUrl || undefined,
          name: `${businessName} — Offline-First Retail POS & Inventory`,
          publisher: {
            '@id': siteUrl ? `${siteUrl}/#organization` : '#organization',
          },
        },
        {
          '@type': 'FAQPage',
          '@id': siteUrl ? `${siteUrl}/#faq` : '#faq',
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
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: siteUrl ? `${siteUrl}/` : '/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'How It Works',
              item: siteUrl ? `${siteUrl}/#how-it-works` : '#how-it-works',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Features',
              item: siteUrl ? `${siteUrl}/#features` : '#features',
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Hardware',
              item: siteUrl ? `${siteUrl}/#hardware` : '#hardware',
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'Pricing',
              item: siteUrl ? `${siteUrl}/#pricing` : '#pricing',
            },
          ],
        },
      ],
    };

    // 5. Inject or update JSON-LD tag in document head
    let scriptTag = document.getElementById('dynamic-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(schemaData);
  }, []);

  return null;
};
