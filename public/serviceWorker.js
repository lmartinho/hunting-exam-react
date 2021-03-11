self.addEventListener('install', (event) => {
    console.log('installing');
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          './',
          './static/js/bundle.js',
          './static/js/vendors~main.chunk.js',
          './static/js/main.chunk.js'
        ]);
      })
    );
  });


  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
    );
  });