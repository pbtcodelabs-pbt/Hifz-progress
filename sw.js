const CACHE = 'hifz-progress-report';
const ASSETS = ['./index.html','./manifest.json','./icon-192.png','./icon-512.png'];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

/* Network-first: always fetch the latest file when online.
   Falls back to the last cached copy only when offline.
   Because this doesn't rely on a version-stamped cache name,
   this file itself never needs to be re-uploaded again. */
self.addEventListener('fetch', e=>{
  e.respondWith(
    fetch(e.request).then(res=>{
      const copy = res.clone();
      caches.open(CACHE).then(c=>c.put(e.request, copy));
      return res;
    }).catch(()=> caches.match(e.request))
  );
});
