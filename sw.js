// جامعہ امتحانی سافٹ ویئر — سروس ورکر (آف لائن سپورٹ)
const CACHE_NAME = 'jamia-hifz-cache-MD2511WE089';
const CORE_ASSETS = [
  './index.html',
  './manifest.json',
  './logo.png',
  './icon-192.png',
  './fonts/Jameel_Noori_Nastaleeq.woff',
  // رپورٹوں کے عنوان نوری کشیدہ میں چھپتے ہیں — آف لائن پرنٹ میں بھی کشیدہ ملے، اس لیے یہ بھی کیش میں
  './fonts/Jameel_Noori_Nastaleeq_Kasheeda.ttf',
  './fonts/DecoType_Thuluth_Regular.ttf',
  /* MD2311MO054: نئے ڈیزائن کی تصویریں (آف لائن بھی) */
  './ui/emblem.png', './ui/home-bot.jpg', './ui/h-sabaq.png', './ui/h-sabqi.png', './ui/h-manzil.png', './ui/h-att.png', './ui/h-stu.png', './ui/h-rep.png', './ui/h-out.png', './ui/h-help.png', './ui/lock-top.jpg', './ui/lock-bot.jpg', './ui/lock-l.jpg', './ui/lock-r.jpg',
  './ui/i-sabaq.png', './ui/i-sabqi.png', './ui/i-manzil.png', './ui/i-att.png', './ui/i-stu.png', './ui/i-rep.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k.startsWith('jamia-hifz-cache-') && k !== CACHE_NAME) /* 🛡️ صرف اپنے پرانے کیش */.map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first for HTML (so updates are picked up quickly when online),
// cache-first fallback for everything else (so the app works fully offline).
self.addEventListener('fetch', (event) => {
  /* ہیلپ ڈیسک (#33): pbtcodelabs-pbt.github.io/help/ کی فائلیں (widget.js) کبھی کیش نہیں — ہر ایپ میں نیا بٹن فوراً */
  try { const _hd = new URL(event.request.url); if (_hd.hostname === 'pbtcodelabs-pbt.github.io' && _hd.pathname.startsWith('/help/')) return; } catch (_e) {}
  /* MD2311MO039: آن لائن ڈیٹا (فائربیس، سرور) کبھی کیش نہیں — ورنہ پرانا جواب (جڑے موبائل، مدت) دکھتا رہتا ہے */
  try { const _u = new URL(event.request.url); if (/(^|\.)googleapis\.com$|(^|\.)workers\.dev$/.test(_u.hostname) || (_u.origin !== self.location.origin && /^(127\.0\.0\.1|localhost)$/.test(_u.hostname))) return; } catch (_e) {}
  const req = event.request;
  if (req.method !== 'GET') return;

  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          return res;
        })
        .catch(() => cached);
    })
  );
});
