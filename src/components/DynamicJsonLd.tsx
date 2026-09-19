import { useEffect } from 'react';
import {
  getSiteUrl,
  getBusinessName,
  getSocialLinks,
  getSupportEmail,
} from '../config/env';
import { buildSeoHead, SeoEnv } from '../seo/seo';

/**
 * Injects SEO meta tags and Schema.org JSON-LD at runtime from the current
 * environment (VITE_SITE_URL / window.location) AND the current route.
 *
 * Consumes the SAME `buildSeoHead` source of truth that the build-time
 * static-seo-prerender plugin uses, so the client-updated head (dev server,
 * client-side /pricing navigation) can never drift from the baked HTML
 * shipped in dist/index.html and dist/pricing/index.html.
 */
export const DynamicJsonLd = () => {
  useEffect(() => {
    const siteUrl = getSiteUrl();
    const businessName = getBusinessName();
    const supportEmail = getSupportEmail();
    const socialLinks = getSocialLinks();

    const route = window.location.pathname === '/pricing' ? 'pricing' : 'home';

    const seoEnv: SeoEnv = {
      siteUrl: siteUrl || window.location.origin,
      businessName,
      supportEmail,
      socialLinks,
    };

    const head = buildSeoHead(route, seoEnv);

    // 0. Route title (the baked static shell sets it; client-side nav needs it)
    document.title = head.title;

    // 1. Canonical (self-references the active route)
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = head.canonical;

    // 2. OpenGraph, Twitter, robots — update in place or create
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

    setMeta('og:type', 'website', true);
    setMeta('og:locale', head.locale, true);
    setMeta('og:site_name', head.ogSiteName, true);
    setMeta('og:url', head.ogUrl, true);
    setMeta('og:title', head.title, true);
    setMeta('og:description', head.description, true);
    setMeta('og:image', head.ogImage, true);
    setMeta('og:image:width', head.ogImageWidth, true);
    setMeta('og:image:height', head.ogImageHeight, true);
    setMeta('og:image:alt', head.ogImageAlt, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:url', head.twitterUrl);
    setMeta('twitter:title', head.title);
    setMeta('twitter:description', head.description);
    setMeta('twitter:image', head.ogImage);
    setMeta('robots', head.robots);

    // 3. Normalize to a single JSON-LD node: the build bakes an identical graph
    //    into the static HTML; the runtime graph replaces it to stay in sync
    //    after client-side route changes.
    document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
      if (el.id !== 'dynamic-jsonld') el.remove();
    });

    let scriptTag = document.getElementById('dynamic-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = head.jsonLd;
  }, []);

  return null;
};