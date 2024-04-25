const CACHE_NAME = "my-cache";
const urlsToCache = [
  '/',
  '/manifest.json',
  '/icon72.png',
  '/icon192.png',
  '/icon384.png',
  '/icon512.png',
  '/favourites.js',
  '/popular.js',
  '/movie.js',
  '/signin.js',
  '/approved.js',

  // Add other static assets to cache
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(["/"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});