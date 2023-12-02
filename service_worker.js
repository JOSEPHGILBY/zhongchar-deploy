var buildVersion = "eb4ea8d99027b92d"
var cacheName = 'leptos-pwa';
var filesToCache = [
  './',
  './index.html',
  './manifest.json',
  './public/radicals.csv',
  './public/tmp03bqpcha.wav',
  './icon-256.png',
  './leptos-tutorial-' + buildVersion + '_bg.wasm',
  './leptos-tutorial-' + buildVersion + '.js',
];


/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});