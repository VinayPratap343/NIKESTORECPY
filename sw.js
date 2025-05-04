// sw.js - Service Worker File

const CACHE_NAME = 'my-site-cache-v1';
const ASSETS_TO_CACHE = [
    '/NIKESTORECPY/',
    '/NIKESTORECPY/index.html',
    '/NIKESTORECPY/app.js',
    '/NIKESTORECPY/style.css',
    '/NIKESTORECPY/images',
    '/NIKESTORECPY/images/air.png',
    '/NIKESTORECPY/images/air2.png',
    '/NIKESTORECPY/images/jordan.png',
    '/NIKESTORECPY/images/jordan2.png',
    '/NIKESTORECPY/images/blazer.png',
    '/NIKESTORECPY/images/blazer2.png',
    '/NIKESTORECPY/images/crater.png',
    '/NIKESTORECPY/images/crater2.png',
    '/NIKESTORECPY/images/background.png',
    '/NIKESTORECPY/images/contact.png',
    '/NIKESTORECPY/images/facebook.png',
    '/NIKESTORECPY/images/instagram.png',
    '/NIKESTORECPY/images/twitter.png',
    '/NIKESTORECPY/images/whatsapp.png',
    '/NIKESTORECPY/images/visa.png',
    '/NIKESTORECPY/images/sneakers.png',
    '/NIKESTORECPY/images/shipping.png',
    '/NIKESTORECPY/images/search.png',
    '/NIKESTORECPY/images/return.png',
    '/NIKESTORECPY/images/master.png',
    '/NIKESTORECPY/images/hippie.png',
    '/NIKESTORECPY/images/hippie2.png',
    '/NIKESTORECPY/images/gift.png',

    
  ];

// Install event - caches important files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Fetch event - serves cached content when available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Not in cache - fetch from network
        return fetch(event.request);
      })
  );
});