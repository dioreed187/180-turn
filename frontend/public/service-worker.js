// Service Worker for offline support, caching strategies, push notifications, and background sync

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'No payload',
        icon: 'icon.png',
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});

self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-data') {
        event.waitUntil(
            // Perform background sync operations, such as sending data to server
        );
    }
});
