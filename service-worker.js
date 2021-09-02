/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f978de460df881baf2d74e574a31f3e0"
  },
  {
    "url": "about.html",
    "revision": "e459044598a1163c0181308eaca2adbe"
  },
  {
    "url": "about1.html",
    "revision": "22f7e029de6f0bdf3a21ec18b7150a86"
  },
  {
    "url": "assets/css/0.styles.f9dfb3c1.css",
    "revision": "c1b0ec6f379d07151ce0ee4ea67e3f0f"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2c8e7816.js",
    "revision": "4aae0d3ce21f57b16c4b39906f370103"
  },
  {
    "url": "assets/js/11.38fe16cd.js",
    "revision": "89eed4df78a88e00ec7e8936430c2bc2"
  },
  {
    "url": "assets/js/12.7af5fb64.js",
    "revision": "87bfbd771801187811b1d66facd50fd5"
  },
  {
    "url": "assets/js/13.96a18b1a.js",
    "revision": "f32064748bd68091f713c0012b883655"
  },
  {
    "url": "assets/js/14.829b475a.js",
    "revision": "c3bf7e5d3cb17429bfb854526ee13fdd"
  },
  {
    "url": "assets/js/15.38d8f429.js",
    "revision": "a3cc070775a0cedb3493552c1817b5ba"
  },
  {
    "url": "assets/js/16.57b899c0.js",
    "revision": "6f529b1929479f1f900c5bb2a7d9565d"
  },
  {
    "url": "assets/js/17.19e9c89e.js",
    "revision": "001a3aa161f355e3d427f00d34187487"
  },
  {
    "url": "assets/js/18.a616d7ba.js",
    "revision": "b718fa9451a81aeef7b5deba27f215d4"
  },
  {
    "url": "assets/js/19.f6a9ef4a.js",
    "revision": "17c848d871e250ae5f41f68e23d67858"
  },
  {
    "url": "assets/js/2.be3cb64d.js",
    "revision": "ad11dff622143572880a808832a13ad8"
  },
  {
    "url": "assets/js/20.10ef284b.js",
    "revision": "b9ce6c745d6a97a456cfbd4fe488e80e"
  },
  {
    "url": "assets/js/21.fee48bc9.js",
    "revision": "3a4eefcf40bddc08ba9a528cd8ed0b7f"
  },
  {
    "url": "assets/js/22.10806376.js",
    "revision": "f50133269e6439cc04441bcb136a978b"
  },
  {
    "url": "assets/js/23.37489fdf.js",
    "revision": "442cfb4c04062dcb858a3062a9340673"
  },
  {
    "url": "assets/js/3.d22bc723.js",
    "revision": "a5f6bed1a4db0462ce59b7f2246b2a3b"
  },
  {
    "url": "assets/js/4.22f68b1c.js",
    "revision": "3566e9e4c3989c3a48fcb4cb8887b4bc"
  },
  {
    "url": "assets/js/5.64d3e028.js",
    "revision": "fab0d3b91e25cf8b8fedfffd436ac003"
  },
  {
    "url": "assets/js/6.1a3a79d2.js",
    "revision": "8e654b7924fe2a7165f79e79d0965f89"
  },
  {
    "url": "assets/js/7.8a07414e.js",
    "revision": "289e2f95f098b44e7af582b03dcdbd26"
  },
  {
    "url": "assets/js/8.111f55cb.js",
    "revision": "d2471d5ffb6129f2753b9d5df63e236c"
  },
  {
    "url": "assets/js/9.1cef7e83.js",
    "revision": "7fe8f1c1e2883e88c1f31eaf2fed5ed3"
  },
  {
    "url": "assets/js/app.71832ad6.js",
    "revision": "40631908c7b970915f8e76a31f2e473b"
  },
  {
    "url": "countup.html",
    "revision": "162b79b00304e58e63e69b57a42f90df"
  },
  {
    "url": "css/css-a.html",
    "revision": "b94fb64e7dd0b0c0e5b2b7c7494bfe1e"
  },
  {
    "url": "css/css-b.html",
    "revision": "ea8deeaed55ebd6490a475f64dcccb63"
  },
  {
    "url": "css/css-c.html",
    "revision": "43b8ea3ef52f833c360501733d0eccc7"
  },
  {
    "url": "css/index.html",
    "revision": "f291cbf9512e7afd697fb20bcc8a5ada"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "1061fc876f6b7cdbdfae7f1bfaa66ad8"
  },
  {
    "url": "javascript/js-a.html",
    "revision": "16df3188b8bc6aea79023e9032fd92b8"
  },
  {
    "url": "javascript/js-b.html",
    "revision": "fbc2b3c48a1487dd1ee9417074df93a1"
  },
  {
    "url": "javascript/js-c.html",
    "revision": "e8eea00f157afde88645a5b8d0daac98"
  },
  {
    "url": "text.html",
    "revision": "5fd8569d34bf47151cb588bc58b827bd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
