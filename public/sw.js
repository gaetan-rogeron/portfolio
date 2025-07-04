// Service Worker pour le cache des ressources statiques
const CACHE_NAME = 'portfolio-gaetan-v1';
const STATIC_ASSETS = [
    '/',
    '/images/LOGO.svg',
    '/images/photo_2_2025-06-30_23-21-45.jpg',
    '/fonts/Europa-Light.woff2.ttf',
    '/fonts/ObjektivMk1_Trial_Th.ttf',
    '/fonts/FontsFree-Net-arboria2.ttf',
    // Ajoutez d'autres ressources critiques
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(STATIC_ASSETS);
            })
    );
    self.skipWaiting();
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Stratégie de cache : Cache First pour les assets, Network First pour les pages
self.addEventListener('fetch', (event) => {
    const { request } = event;

    // Cache First pour les images, polices et assets statiques
    if (request.destination === 'image' ||
        request.destination === 'font' ||
        request.url.includes('/images/') ||
        request.url.includes('/fonts/')) {
        event.respondWith(
            caches.match(request)
                .then((response) => {
                    if (response) {
                        return response;
                    }
                    return fetch(request).then((response) => {
                        if (response.status === 200) {
                            const responseClone = response.clone();
                            caches.open(CACHE_NAME).then((cache) => {
                                cache.put(request, responseClone);
                            });
                        }
                        return response;
                    });
                })
                .catch(() => {
                    // Fallback en cas d'erreur réseau
                    return new Response('Asset non disponible hors ligne', {
                        status: 503,
                        statusText: 'Service Unavailable'
                    });
                })
        );
        return;
    }

    // Network First pour les pages HTML
    if (request.destination === 'document') {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    if (response.status === 200) {
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(request, responseClone);
                        });
                    }
                    return response;
                })
                .catch(() => {
                    return caches.match(request).then((response) => {
                        return response || new Response('Page non disponible hors ligne', {
                            status: 503,
                            statusText: 'Service Unavailable',
                            headers: { 'Content-Type': 'text/html' }
                        });
                    });
                })
        );
    }
});