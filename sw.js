/* ══════════════════════════════════════════════════════
   ThunderStudy Banking — Service Worker v2.0
   Caches shell for offline-first PWA experience
══════════════════════════════════════════════════════ */

const CACHE_NAME = 'thunderstudy-banking-v2';
const STATIC_ASSETS = [
  '/banking/',
  '/banking/index.html',
  '/banking/favicon.svg',
  '/banking/manifest.json',
  '/banking/og-image.png',
  '/banking/404.html',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=DM+Mono:wght@400;500&family=Outfit:wght@400;500;600;700;800;900&display=swap',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

/* ── INSTALL: cache shell ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS.map(url => {
        return new Request(url, { cache: 'reload' });
      })).catch(() => {
        // Silently fail for third-party assets
      });
    }).then(() => self.skipWaiting())
  );
});

/* ── ACTIVATE: purge old caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

/* ── FETCH: network-first for API, cache-first for assets ── */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Don't cache non-GET or chrome-extension requests
  if (event.request.method !== 'GET' || url.protocol === 'chrome-extension:') return;

  // Network-first for leaderboard/API calls
  if (url.hostname.includes('script.google.com') || url.pathname.includes('/api/')) {
    event.respondWith(
      fetch(event.request).catch(() => new Response('{"error":"offline"}', {
        headers: { 'Content-Type': 'application/json' }
      }))
    );
    return;
  }

  // Cache-first with network fallback for static assets
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        // Return offline page for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/banking/');
        }
      });
    })
  );
});
