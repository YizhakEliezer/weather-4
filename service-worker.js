// Define the cache name and version
var CACHE_NAME = 'my-site-cache-v1';

// Define the list of URLs to cache
var urlsToCache = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/scripts/main.js',
  '/images/logo.png'
];

// Install the service worker
self.addEventListener('install', function(event) {
  // Perform the installation process
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch resources from the cache or the network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request to avoid consuming it
        var fetchRequest = event.request.clone();

        // Fetch the request from the network
        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response to avoid consuming it
            var responseToCache = response.clone();

            // Open the cache and add the response to it
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            // Return the original response
            return response;
          }
        );
      })
  );
});
