import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { buildSeoHead, SeoEnv, SeoHead } from './src/seo/seo';

function renderHeadHtml(head: SeoHead): string {
  return [
    `<title>${head.title}</title>`,
    `<meta name="title" content="${head.title}" />`,
    `<meta name="description" content="${head.description}" />`,
    `<meta name="keywords" content="${head.keywords}" />`,
    `<meta name="robots" content="${head.robots}" />`,
    `<link rel="canonical" href="${head.canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${head.locale}" />`,
    `<meta property="og:site_name" content="${head.ogSiteName}" />`,
    `<meta property="og:url" content="${head.ogUrl}" />`,
    `<meta property="og:title" content="${head.title}" />`,
    `<meta property="og:description" content="${head.description}" />`,
    `<meta property="og:image" content="${head.ogImage}" />`,
    `<meta property="og:image:width" content="${head.ogImageWidth}" />`,
    `<meta property="og:image:height" content="${head.ogImageHeight}" />`,
    `<meta property="og:image:alt" content="${head.ogImageAlt}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:url" content="${head.twitterUrl}" />`,
    `<meta name="twitter:title" content="${head.title}" />`,
    `<meta name="twitter:description" content="${head.description}" />`,
    `<meta name="twitter:image" content="${head.ogImage}" />`,
    `<script type="application/ld+json">${head.jsonLd}</script>`,
  ].join('\n    ');
}

function staticSeoPrerender(seoEnv: SeoEnv): Plugin {
  return {
    name: 'static-seo-prerender',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const baseHtmlPath = path.join(distDir, 'index.html');
      const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

      const applyHead = (html: string, head: SeoHead) =>
        html
          .replace(/<title>[^<]*<\/title>/, '')
          .replace(/[\s]*<meta\s+name="(?:title|description|keywords)"[^>]*>/g, '')
          .replace(/<!-- SEO_HEAD -->/, () => renderHeadHtml(head));

      // Home route: bake the full route head into the served document.
      fs.writeFileSync(baseHtmlPath, applyHead(baseHtml, buildSeoHead('home', seoEnv)), 'utf-8');

      // /pricing route: emit a static HTML shell with the pricing head so
      // direct loads and zero-JS crawlers get correct title/meta/schema.
      const pricingDir = path.join(distDir, 'pricing');
      fs.mkdirSync(pricingDir, { recursive: true });
      fs.writeFileSync(
        path.join(pricingDir, 'index.html'),
        applyHead(baseHtml, buildSeoHead('pricing', seoEnv)),
        'utf-8'
      );

      // Refresh sitemap: absolute locations + build-date lastmod.
      const sitemapPath = path.join(distDir, 'sitemap.xml');
      const robotsPath = path.join(distDir, 'robots.txt');
      if (seoEnv.siteUrl) {
        const today = new Date().toISOString().slice(0, 10);
        if (fs.existsSync(sitemapPath)) {
          let content = fs.readFileSync(sitemapPath, 'utf-8');
          content = content.replace(/<loc>\//g, `<loc>${seoEnv.siteUrl}/`);
          content = content.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
          fs.writeFileSync(sitemapPath, content, 'utf-8');
        }
        if (fs.existsSync(robotsPath)) {
          let content = fs.readFileSync(robotsPath, 'utf-8');
          content = content.replace(/^Sitemap:.*$/m, `Sitemap: ${seoEnv.siteUrl}/sitemap.xml`);
          fs.writeFileSync(robotsPath, content, 'utf-8');
        }
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = (env.VITE_SITE_URL || '').replace(/\/$/, '');

  const seoEnv: SeoEnv = {
    siteUrl,
    businessName: env.VITE_BUSINESS_NAME || 'StockPadi',
    supportEmail: env.VITE_SUPPORT_EMAIL || 'support@example.com',
    socialLinks: {
      instagram: env.VITE_SOCIAL_INSTAGRAM || '',
      tiktok: env.VITE_SOCIAL_TIKTOK || '',
      facebook: env.VITE_SOCIAL_FACEBOOK || '',
      twitter: env.VITE_SOCIAL_TWITTER || '',
    },
  };

  return {
    plugins: [react(), staticSeoPrerender(seoEnv)],
    server: {
      port: 3001,
    },
    build: {
      target: 'esnext',
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  };
});