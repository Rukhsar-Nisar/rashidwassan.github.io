'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c442cf15f61f5f4eb0931ac9eb5e50d6",
"index.html": "b4083bbe048501627bdb85e05cf5062e",
"/": "b4083bbe048501627bdb85e05cf5062e",
"loader.css": "3ed0540af717cd56f01a37a08f714759",
"main.dart.js": "02366bbfa68e18e221fa0131a6411168",
"README.md": "a7f801b4c2190dfe4ec4b0a55e45cb1e",
"favicon.png": "6c3a2a8bab9155811014ca68143566a7",
"_config.yml": "932865e374757d33e321eeb2d5e88b6b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "76858bfccb016815b5d8257df072ea5f",
".git/config": "7f8d60da42ca14660c888341a046d194",
".git/objects/pack/pack-e7d9314c903fb11f958932639271782caf019101.pack": "46712f28654f926011bb283612284b68",
".git/objects/pack/pack-e7d9314c903fb11f958932639271782caf019101.idx": "3adb14e1c83fcd0bedf99888081aa4ca",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "56e86e0f36b0371bed87244dc078c4dd",
".git/logs/refs/heads/main": "56e86e0f36b0371bed87244dc078c4dd",
".git/logs/refs/remotes/origin/HEAD": "56e86e0f36b0371bed87244dc078c4dd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9ef208db75b3be45d63efe3e9b05fd42",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "295fb4bf5f56d8258f04286a8c89a0a3",
".git/packed-refs": "d1de6f523b60b0cd9b8586a5273b4a01",
".git/FETCH_HEAD": "e4bdd53fce65da77cfac99d7c4ed7724",
"assets/AssetManifest.json": "a2cbcfef1d732dcf97d1fa9daffe6ffc",
"assets/NOTICES": "c6bc00ee5f18d155ad21215b63be5298",
"assets/FontManifest.json": "fcd02b9f4c98888f27e5610dbf880526",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/fonts/Oswald-Bold.ttf": "e991dea9f65ce799dd72095ab7ad6e88",
"assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/fonts/Oswald-Regular.ttf": "e1996192b98a516646ff9a8c0c0ca90c",
"assets/fonts/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Oswald-Light.ttf": "4be970a1b24aa834afff4b16842c8981",
"assets/assets/rashid.png": "0bb93c0d0cdecc7ce7fbb56ac6074c6f",
"assets/assets/brand3.png": "c0915a84744f3481a2105c5aea6727e0",
"assets/assets/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/person_small.png": "4607a89fefbdde9629eff6bd1230eebe",
"assets/assets/brand2.png": "91c6d8820e35e10e39757e0de6ac4345",
"assets/assets/m1.png": "c1277ed25c8f37d9dfad2fb9f69e4d8e",
"assets/assets/brand1.png": "f3a3a0de79048e1f14aac62ec76609b8",
"assets/assets/brand5.png": "fc57e9a9ff95830ea207e2452ffd4bd6",
"assets/assets/flutter_anim.json": "cb9a5c57016ad6e845311fdd2a328b9e",
"assets/assets/python.png": "7c561f00353ee0ce2dd0e74c917630f3",
"assets/assets/brand4.png": "e9441e9a5d26e508f592aa31b9febff6",
"assets/assets/keyless/4.png": "02338493e361faf8de9130f457a6ed3c",
"assets/assets/keyless/2.png": "531b03d09ab463426839eae897fd44a1",
"assets/assets/keyless/3.png": "63e5af39a94a0b8ee9df8574f2f1e5ee",
"assets/assets/keyless/1.png": "1e9a5209c2d4842511f9bf84fb3f4241",
"assets/assets/keyless/0.png": "7b4375ab3ed31460957d975c64c718f7",
"assets/assets/lgn/4.png": "99a1393b9d189836cbf42d288043a4f9",
"assets/assets/lgn/2.png": "2853167b68c45f5c5f84157bcef9169c",
"assets/assets/lgn/3.png": "4643232572a9e6278d481ed802ccd14b",
"assets/assets/lgn/1.png": "b6f9f39a18ba5304425b5a1b96092b31",
"assets/assets/lgn/0.png": "84ce46717a94bc837f2c58695c6138c4",
"assets/assets/pk.jpeg": "e810db6cec572f6de10b5654ffc7a8fe",
"assets/assets/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/f3.png": "4449e8de5f626780bc536bf266428d6e",
"assets/assets/drawerbg.png": "bc4e28016e2477071b9c4ae754293279",
"assets/assets/quote.png": "1a0aa9a06293ac5689bc32012e0e13e6",
"assets/assets/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/macos.png": "3b8f0870a696a4c4ebb8a5be863d44da",
"assets/assets/laptop.png": "fb49e3c0c36437239db5f8c114b03062",
"assets/assets/reapet/4.png": "7b068d58730b6524e47325ea01f33cfe",
"assets/assets/reapet/2.png": "f11d1c20f6bfb8d22b165df830515fc5",
"assets/assets/reapet/3.png": "68c0c1f4b292e277732eb4daa2b976a9",
"assets/assets/reapet/1.png": "0aae0cef2e2a06bd33b7ff0a35cf4011",
"assets/assets/reapet/0.png": "37a153bfa1b0ef473565873c5025522f",
"assets/assets/heart.json": "7814d2e455346dbdd7f457f30b008746",
"assets/assets/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/ios.png": "81d2827c6edd709125123112dde38f6c",
"assets/assets/labouronline/4.png": "08371a2c95f6ed7a46a9f7d4c497fa07",
"assets/assets/labouronline/2.png": "59826a8b9b5e1bf82cb67a57751d0240",
"assets/assets/labouronline/3.png": "189da8ea1404496a1b5ad7c44811d5a8",
"assets/assets/labouronline/1.png": "3b024ea8055e615da7e3d2e0be311175",
"assets/assets/labouronline/0.png": "8b8945e82b368e6c7bc607b8075a093b",
"assets/assets/camera_lens.png": "f23224ee9f0b3f8b602dda9fdb98db99",
"assets/assets/chatapp/4.png": "49bf3380c54eaf649448e0c8c082f54f",
"assets/assets/chatapp/2.png": "af38bb3513701d1da9886b674a41cffc",
"assets/assets/chatapp/3.png": "9708113b4abf15c3838c4a4f17919295",
"assets/assets/chatapp/1.png": "12ee484488947a963575c4ed58083e7c",
"assets/assets/chatapp/0.png": "c238711e3b11d3a4b8a247dc18f7a879",
"assets/assets/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/assets/whatsapp.png": "426617ad28567da23a2346566d84b5a6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
