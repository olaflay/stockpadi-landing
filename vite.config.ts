import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = (env.VITE_SITE_URL || '').replace(/\/$/, '');

  return {
    plugins: [
      react(),
      {
        name: 'dynamic-sitemap-generator',
        closeBundle() {
          if (siteUrl) {
            const sitemapPath = path.resolve(__dirname, 'dist', 'sitemap.xml');
            if (fs.existsSync(sitemapPath)) {
              let content = fs.readFileSync(sitemapPath, 'utf-8');
              content = content.replace(/<loc>\//g, `<loc>${siteUrl}/`);
              fs.writeFileSync(sitemapPath, content, 'utf-8');
            }
          }
        },
      },
    ],
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
