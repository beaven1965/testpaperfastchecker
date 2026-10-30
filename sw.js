// Keeps TestPaper FastChecker on the phone so checking works without internet.
// Bump VERSION whenever you change app/index.html or this list.
const VERSION = 'tpfastchecker-v9';
const FILES = ['/', '/app/', '/pay/', '/terms/', '/app/manifest.json', '/app/xlsx.full.min.js', '/icon-32.png', '/icon-180.png', '/icon-192.png', '/icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== VERSION).map(x => caches.delete(x)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const req = e.request; if(req.method !== 'GET') return;
  const url = new URL(req.url);
  if(url.pathname.startsWith('/.netlify/') || url.pathname.endsWith('.mp4')) return;
  if(req.mode === 'navigate'){
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put(url.pathname, c)); return r; })
      .catch(() => caches.match(url.pathname).then(r => r || caches.match('/app/'))));
    return;
  }
  if(url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname))
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put(req, c)); return r; })));
});
