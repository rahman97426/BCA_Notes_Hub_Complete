/* ================================================================
   BCA Notes Hub — Service Worker
   © 2026 Md Abdul Rahman Raza | arrahmanstudyhub.tech
   Version: 2.0 (Fixed — proper scope & fetch handler)
================================================================ */

const CACHE  = 'bca-hub-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/offline.html',
  '/icon.svg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/about.html',
  '/contact.html',
  '/privacy-policy.html',
  '/terms.html',
  '/disclaimer.html'
];

/* ── INSTALL: pre-cache all shell assets ─────────────────────── */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* ── ACTIVATE: remove old caches ────────────────────────────── */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

/* ── FETCH: cache-first for static, network-first for notes ──── */
self.addEventListener('fetch', e => {
  /* Only handle GET from same origin */
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  /* Notes: network-first (cache on success for offline) */
  if (url.pathname.startsWith('/notes/')) {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          if (r.ok) {
            const clone = r.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return r;
        })
        .catch(() => caches.match(e.request)
          .then(cached => cached || offlinePage()))
    );
    return;
  }

  /* Everything else: cache-first */
  e.respondWith(
    caches.match(e.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(e.request)
          .then(r => {
            if (r.ok) {
              const clone = r.clone();
              caches.open(CACHE).then(c => c.put(e.request, clone));
            }
            return r;
          })
          .catch(() => e.request.mode === 'navigate'
            ? offlinePage()
            : new Response('', { status: 503 }));
      })
  );
});

function offlinePage() {
  return caches.match('/offline.html')
    .then(r => r || new Response(
      '<h1 style="font-family:sans-serif;padding:40px">You are offline. Please reconnect.</h1>',
      { headers: { 'Content-Type': 'text/html' } }
    ));
}

/* ── Message: skip waiting on demand ─────────────────────────── */
self.addEventListener('message', e => {
  if (e.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
