const cacheName = 'hello-pwa';
const filesToCache = ['./', './index.html', './css/style.css', './js/main.js', './images/hello.png'];

//* Start the service worker and cache all of the app's content */
self.addEventListener('install', (e) => {
  e.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(cacheName);
        // console.log(cache);
        return cache.addAll(filesToCache);
      } catch (e) {
        console.log('after install', e.message);
      }
    })()
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', (e) => {
  e.respondWith(
    (async () => {
      try {
        const response = await caches.match(e.request);
        return response || fetch(e.request);
      } catch (e) {
        console.log('after install', e.message);
      }
    })()
  );
});
