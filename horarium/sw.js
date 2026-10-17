// Keeps Horarium's own page and code so it opens without the internet.
// Only this site's files are cached; Google sign-in and Drive always go to
// the network, and the rooms keep their records in IndexedDB themselves.
const CACHE = 'horarium-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || url.pathname.includes('/__fixtures')) return;
  // Network first, so a new version arrives at once; the cache when offline.
  e.respondWith(fetch(req).then((res) => {
    if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req).then((hit) => hit || (req.mode === 'navigate' ? caches.match('./') : Response.error()))));
});
