import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      // Cache all core assets and content
      includeAssets: ['icon-512.png', 'og-image.png', 'robots.txt'],
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB
        // Cache all static assets
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,woff2,woff,ttf,md}'],
        // Offline fallback
        navigateFallback: 'index.html',
        navigateFallbackDenylist: [/\/api\//],
        // Runtime caching for Google Fonts (allowed external resource)
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: { maxEntries: 5, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      manifest: {
        name: 'Espace Réussite Brevet 2026',
        short_name: 'Brevet 2026',
        description: 'Fiches de révision, quiz et gamification pour le Brevet des Collèges 2026. Gratuit, sans pub, fonctionne sans connexion.',
        theme_color: '#0a0f1a',
        background_color: '#0a0f1a',
        display: 'standalone',
        orientation: 'portrait-primary',
        lang: 'fr',
        start_url: './',
        scope: './',
        categories: ['education', 'productivity'],
        icons: [
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        screenshots: [
          {
            src: 'og-image.png',
            sizes: '1200x630',
            type: 'image/png',
            label: 'Tableau de bord — Espace Réussite Brevet 2026',
          },
        ],
      },
    }),
  ],
  // IMPORTANT: Use './' for relative assets — required for Nginx subpath /brevet2026/
  base: './',
  build: {
    assetsDir: 'compiled-assets',
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    cors: true,
    hmr: {
      clientPort: 443,
    },
  },
});