'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "49f922e3456e3f972c01f3f356d90b85",
"splash/img/light-2x.png": "d981eca1bcc4576ea04256e36c077388",
"splash/img/dark-4x.png": "6e73d4c569db194b6b27cf8856f7094b",
"splash/img/light-3x.png": "acba4f0e1251dc4c9d33b1ff2bfaf171",
"splash/img/dark-3x.png": "acba4f0e1251dc4c9d33b1ff2bfaf171",
"splash/img/light-4x.png": "6e73d4c569db194b6b27cf8856f7094b",
"splash/img/dark-2x.png": "d981eca1bcc4576ea04256e36c077388",
"splash/img/dark-1x.png": "8aa155374010de90cea4f4c84cf88d28",
"splash/img/light-1x.png": "8aa155374010de90cea4f4c84cf88d28",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "db6178791b6369b77311c0ae92809585",
"index.html": "d91fb49f2144f7a7b99fd7f5242f2de7",
"/": "d91fb49f2144f7a7b99fd7f5242f2de7",
"main.dart.js": "74537aacf4f11d3fa24bc21186e0769a",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a5b6833ef039c2fdce40d8b95dfe2e3b",
"assets/AssetManifest.json": "9918567108dd72e790566cbde0f98711",
"assets/NOTICES": "5cc65198b83dce855c0044a3b51389ad",
"assets/FontManifest.json": "4daefd12475d3b2ff1045017c8eb4253",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/appresources/en.json": "8567e61863a117be7bfce2b9bc43d735",
"assets/assets/appresources/ar.json": "cf6d714fd5726a39e350c906b219e92a",
"assets/assets/images/book_ar.jpeg": "6fd31d26fa54bd1ff7f4a4dd004a5337",
"assets/assets/images/Thumbs.db": "d0f1533cd344346a6572e6d47e0afeba",
"assets/assets/images/certificateTwo.png": "3a0bc4340ff15a6c4f00f5719f23d61b",
"assets/assets/images/certificateTwo.jpg": "2e3bacc2d8c938cca3361d580e883fd9",
"assets/assets/images/first_lesson.png": "4fb158685ef44e530fd3722027d1bd1b",
"assets/assets/images/Icon_Image.png": "f2e8638fef1b6264611b3fd74e8edb36",
"assets/assets/images/login.png": "72ba16ee112daaf759d5b0c76b052333",
"assets/assets/images/app_icon.png": "259ac4d6e9a83b1ec579cc5867b0fa40",
"assets/assets/images/math_test.png": "7c0bb27b3ae7f21470a85e0fc8bf5bab",
"assets/assets/images/NootBookSmall.jpeg": "0a9a0a8c6c4968ce244aa6f98915b67c",
"assets/assets/images/trouser.png": "fc81a1d7374b8669807f775a8c955cb4",
"assets/assets/images/ENGLISH%25D9%2580DICTIONARY.jpeg": "02f81ccb35698e3dfeea37ad2b3845eb",
"assets/assets/images/jacket.png": "42be5741fd62847e2fc9fbed0d19fcf1",
"assets/assets/images/english_book.jpeg": "b8554647af45c91ddb6383e29acfc244",
"assets/assets/images/math.jpeg": "6a1bbe4a3c2c38bef0e9f34782411309",
"assets/assets/images/st.jpeg": "d4d0763f57d49db94141a018e6fcfebf",
"assets/assets/images/education_book.jpeg": "5b5a259e2f4dd6336fd62f2f2f830b4b",
"assets/assets/images/pullover.png": "36e41f0f79245452ecd2725e3ab3adaa",
"assets/assets/images/T-shirt.png": "987d3ce567f987379beaa5a0503ab49d",
"assets/assets/images/splash.png": "639bac01bd2e34e7464221f0f00ce590",
"assets/assets/images/School.jpeg": "a19673c933e97cc4036a2ce690d89c96",
"assets/assets/images/NotebookBig.png": "2993ecce0ea3957c03444860545c5809",
"assets/assets/images/splash_logo_white.png": "3d9933a1b8adc9ae4a983abd5a01319a",
"assets/assets/images/user_icon.png": "b162987b330a72a9142b067c1e18d54e",
"assets/assets/images/qr.png": "56e58fc9b38ac6bad7b7e30b22b523df",
"assets/assets/images/background_school.jpeg": "02f2ff3ac6c3e69892399c7ac7260528",
"assets/assets/images/IDS.png": "68250e73679000a575394fd46fdaf902",
"assets/assets/images/logo_print.png": "7c301c58e2a8cd81fe3c615152bd3424",
"assets/assets/images/background_school%2520copy.jpeg": "98d982aa8a48ca52572bfb2ad02a57f3",
"assets/assets/images/first_day.jpeg": "a3bd150bc6afebf54c35f011962601fd",
"assets/assets/images/splash_loading.png": "37fb7a96e6fc16008aa99e9c9f462ac7",
"assets/assets/images/image_home.png": "6ec3898d2a7a1805d307d003e10c2732",
"assets/assets/images/splash_logo.png": "259ac4d6e9a83b1ec579cc5867b0fa40",
"assets/assets/images/splash_logo_1.png": "036454ddc851d088eebf229d2b7c8ce0",
"assets/assets/images/book1.jpeg": "83d763e208cc10b9a998a80edf1fbc31",
"assets/assets/images/shcool_new.jpeg": "00261a693c06817d359f99c65eb9e579",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/fonts/Al-Hadith1.ttf": "7c1721847adeab815dc6b7813fdfc472",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
