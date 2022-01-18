if (!self.define) {
  let i,
    e = {};
  const s = (s, n) => (
    (s = new URL(s + '.js', n).href),
    e[s] ||
      new Promise((e) => {
        if ('document' in self) {
          const i = document.createElement('script');
          (i.src = s), (i.onload = e), document.head.appendChild(i);
        } else (i = s), importScripts(s), e();
      }).then(() => {
        let i = e[s];
        if (!i) throw new Error(`Module ${s} didn’t register its module`);
        return i;
      })
  );
  self.define = (n, c) => {
    const a =
      i ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (e[a]) return;
    let t = {};
    const r = (i) => s(i, a),
      o = { module: { uri: a }, exports: t, require: r };
    e[a] = Promise.all(n.map((i) => o[i] || r(i))).then((i) => (c(...i), t));
  };
}
define(['./workbox-82773b5e'], function (i) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    i.clientsClaim(),
    i.precacheAndRoute(
      [
        {
          url: '/_next//static/media/logo.c6f9f78c.svg',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next//static/media/objetivo-01.bd43916e.webp',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next//static/media/objetivo-02.be4f30bd.webp',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next//static/media/objetivo-03.15968fc4.webp',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/F3Bfw4QWnRPzqOFQAipSi/_buildManifest.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/F3Bfw4QWnRPzqOFQAipSi/_middlewareManifest.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/F3Bfw4QWnRPzqOFQAipSi/_ssgManifest.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/121.278c39d1577b6ac2.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/159-bfcf427ef0f9e2d0.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/190.c673284548469bd1.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/278.cbc4e94c0764a3ed.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/328-fedd00efc562e430.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/366-2241d3de05e61dcf.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/456.f5370cbc56fd6ada.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/473.3b4a7a560c45a381.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/628-c3718b4908fb6dd8.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/713.702fe41c23ff06af.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/735-b007dc80315856a9.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/858-9ff96798fae6f8c7.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/894-e0055ebe7dcc6c56.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/908.66f6f10048429ea7.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/920.6b90566c92281ca3.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/934.ea689da65657c3ff.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/commons-60b8e00b40f71cf8.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/framework-4975f770e34de116.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/main-b9c2e54343578dff.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/pages/_app-f49cb4a85b5800ea.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/pages/_error-a3f18418a2205cb8.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/pages/index-2ff709ecebcc1bfa.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/pages/posts-2df2a8856bcb4aa5.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/pages/posts/%5Bslug%5D-0204d802c59dc689.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/pages/projetos-404f04d8dd177137.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/pages/projetos/%5Bslug%5D-e7037e713d4d9708.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/chunks/webpack-e918652db11becf8.js',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/css/0ca2f5360e6dd65b.css',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/css/0f00f77f4430b1b6.css',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/css/2171d10626d4d941.css',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/css/3049a44c9f8703a8.css',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/css/41103fc7777ae8f4.css',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/css/51d60fcb8232b809.css',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/css/5e82f0ae93e7b2d9.css',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/css/7765653393767043.css',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/css/a58080f9c6d9f9d9.css',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/css/ae7fef551fe3b78a.css',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/css/b25fd15a183898a3.css',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/css/b9231dd14f2115e1.css',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/_next/static/css/dafe3bfac9308231.css',
          revision: 'F3Bfw4QWnRPzqOFQAipSi',
        },
        {
          url: '/android-icon-128x128.png',
          revision: '9e117bfa6b48b4d694ae507f3c760d3d',
        },
        {
          url: '/android-icon-192x192.png',
          revision: '54a8c80f0f131bd6ffa697b82caf3168',
        },
        {
          url: '/android-icons/android-icon-144x144.png',
          revision: 'a39096ff8e1afb0891bccb4bbf94463e',
        },
        {
          url: '/android-icons/android-icon-168x168.png',
          revision: '284d2a794be19c213673fcad019b712c',
        },
        {
          url: '/android-icons/android-icon-192x192.png',
          revision: '64556a0fe45894e8fcee09c3236e48f5',
        },
        {
          url: '/android-icons/android-icon-256x256.png',
          revision: '7aa5040fc264b9861ae61979781a962f',
        },
        {
          url: '/android-icons/android-icon-36x36.png',
          revision: 'e9d1e140210f6418cefad9c666ae7214',
        },
        {
          url: '/android-icons/android-icon-48x48.png',
          revision: 'ad59c8c861dd3a0e7019d3675a754a7f',
        },
        {
          url: '/android-icons/android-icon-512x512.png',
          revision: 'd53ca9a8e11b214dfb33d8492a605fc6',
        },
        {
          url: '/android-icons/android-icon-72x72.png',
          revision: '0ab539950e90de657ed91910b4fee765',
        },
        {
          url: '/android-icons/android-icon-96x96.png',
          revision: 'cde83e3cf07c221272daed4ee4e2ccdb',
        },
        {
          url: '/apple-icon-76x76.png',
          revision: '73eb337bc1bb447b7b65c40fa98c530b',
        },
        {
          url: '/apple-touch-icon.png',
          revision: '640afcd968ab8dc67834083deb4f4eeb',
        },
        {
          url: '/browserconfig.xml',
          revision: '5c15a6baea06800092f1bd6abbfb3200',
        },
        {
          url: '/favicon-16x16.png',
          revision: '99d9d0297b34fe6ac4ba775de9deb7d6',
        },
        {
          url: '/favicon-32x32.png',
          revision: 'e39d5d59bfafe96f615adb88624075cc',
        },
        {
          url: '/favicon-48x48.png',
          revision: '13d05a7a43c6d47558afc3a0edfeb26f',
        },
        {
          url: '/favicon-96x96.png',
          revision: 'cde83e3cf07c221272daed4ee4e2ccdb',
        },
        { url: '/favicon.ico', revision: '2a8a2edcbaf219b7fdb0866cc0d0edc4' },
        { url: '/favicon.icon', revision: '1c09487dacf4c68e28970d0dc1a4e32d' },
        { url: '/favicon.png', revision: 'f1b7eabaf5136934a69a4b074d0645ef' },
        {
          url: '/icon-52x52.png',
          revision: '3a270117ff5c13297c697a2874ed3a09',
        },
        {
          url: '/icon-72x72.png',
          revision: '5fe8f49bb92d20397099366505e60057',
        },
        { url: '/manifest.json', revision: 'cbda31041cb342122d3a9657259ae241' },
        {
          url: '/ms-icons/ms-icon-144x144.png',
          revision: 'a39096ff8e1afb0891bccb4bbf94463e',
        },
        {
          url: '/ms-icons/ms-icon-150x150.png',
          revision: '1e8338358e4263c3e3fe1c126928ee53',
        },
        {
          url: '/ms-icons/ms-icon-310x310.png',
          revision: 'a4bdaaedd74d4d05e94a1e3cb505397a',
        },
        {
          url: '/ms-icons/ms-icon-70x70.png',
          revision: '408ca8b9cc1cdd501327871bba9b16b6',
        },
        {
          url: '/ms-icons/mstile-144x144.png',
          revision: '02c46dc312b1099e3654e9f6c0abbdf4',
        },
        {
          url: '/ms-icons/mstile-150x150.png',
          revision: 'af6eb967c3313f39872f02f549c1e901',
        },
        {
          url: '/safari-pinned-tab.svg',
          revision: 'd3bde4eb1ac93b17e50782c61a418a5a',
        },
        {
          url: '/touch-icon-start-up-320x480.png',
          revision: '696f53dd252c6159097646c8f3f6cc05',
        },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    i.cleanupOutdatedCaches(),
    i.registerRoute(
      '/',
      new i.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: i,
              response: e,
              event: s,
              state: n,
            }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      'GET'
    ),
    i.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new i.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    i.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new i.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    i.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new i.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    i.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new i.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    i.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new i.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    i.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new i.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new i.RangeRequestsPlugin(),
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    i.registerRoute(
      /\.(?:mp4)$/i,
      new i.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new i.RangeRequestsPlugin(),
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    i.registerRoute(
      /\.(?:js)$/i,
      new i.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    i.registerRoute(
      /\.(?:css|less)$/i,
      new i.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    i.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new i.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    i.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new i.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    i.registerRoute(
      ({ url: i }) => {
        if (!(self.origin === i.origin)) return !1;
        const e = i.pathname;
        return !e.startsWith('/api/auth/') && !!e.startsWith('/api/');
      },
      new i.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    i.registerRoute(
      ({ url: i }) => {
        if (!(self.origin === i.origin)) return !1;
        return !i.pathname.startsWith('/api/');
      },
      new i.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    i.registerRoute(
      ({ url: i }) => !(self.origin === i.origin),
      new i.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new i.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
