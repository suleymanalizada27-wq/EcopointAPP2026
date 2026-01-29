const CACHE_NAME = 'ecopoint-v2.5'; // Versiyanı dəyişdik ki, Samsung yenilənməni hiss etsin
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting(); // Yenilənməni dərhal tətbiq et
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});