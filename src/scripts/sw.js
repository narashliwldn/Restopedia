import 'regenerator-runtime/runtime';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing/registerRoute';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { skipWaiting, clientsClaim, setCacheNameDetails } from 'workbox-core';

self.skipWaiting();
clientsClaim();
const manifest = self.__WB_MANIFEST;

setCacheNameDetails({
  prefix: 'restopedia-app',
  precache: 'precache',
  runtime: 'runtime',
});

precacheAndRoute(manifest, [
  {
    url:
    'https://fonts.googleapis.com/css2?family=Assistant:wght@400;700;800&display=swap',
    revision: 1,
  },
  {
    url: 'https://fonts.gstatic.com/s/assistant/v7/2sDcZGJYnIjSi6H75xkzaGW5.woff2',
    revision: 1,
  },
  {
    url:
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
    revision: 1,
  },
],
{
  ignoreURLParametersMatching: [/.*/],
});

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
  new NetworkFirst({
    cacheName: 'dicoding-restaurant-api',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
        maxEntries: 100,
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  }),
);

cleanupOutdatedCaches();
