self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('STUK-cache').then(cache => {
      return cache.addAll(['index.html', 'manifest.json', 'icon.png']);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});


// Unregister all service workers and clear cache 
// Paste in the navigation console

/* navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for(let registration of registrations) {
    registration.unregister();
  }
  caches.keys().then(function(names) {
    for (let name of names) caches.delete(name);
  });
}); */