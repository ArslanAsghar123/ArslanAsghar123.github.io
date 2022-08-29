'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ed4196a263a7919322bbf877a1c4ca63",
"index.html": "ce0b662b0ba11de6ee33f4c6fe3d0f63",
"/": "ce0b662b0ba11de6ee33f4c6fe3d0f63",
"styles.css": "433b5f3d756897b0b96358ecb259558e",
"main.dart.js": "665071470bab3db85170911425d09afb",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"img/splash.gif": "d57eef78516d23c93c91005b482a4098",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a8f11cec21e9634cb2e36316ec51f005",
".git/config": "b7670a298c473f90de26ed828b25e7ac",
".git/objects/61/2f9a74bc276307e9751bf59ba2fc44f7cf4313": "0ad892e072027b7cced3be19ac8751a7",
".git/objects/9e/545ef3f711b819cee2c29826aeca80eb2e8e7a": "5c92e7d71e730b7262160e0d9ff1b341",
".git/objects/04/66e8cdb391bc121edcf20b77b38f002ef0a7b0": "b62585586d0bd56c2078925aaa5e83e2",
".git/objects/32/0da109a4b2a85867c90d64b53c40b37332a2ee": "ac25e8370fc352e1941834b33e8f3015",
".git/objects/69/506af647e245b4f48d96e989a4349b0e690f8a": "bd09101e3711d5accee68979a8345b8e",
".git/objects/0e/b3263b8b3513f5ce80c4846e572ed38a797b95": "30d715e4be267a9064b72f7a468b19c2",
".git/objects/bb/6eb9fbab3bf1397138ae334967037962534bd9": "5eb48d8477da569a98340693723c98a5",
".git/objects/bb/34963d33672dca37c734bb64c8e7b0ce556fcf": "3cc3c4b06cf3a7bfac8a35fc92a63840",
".git/objects/b3/ea1cd3dcd7d1d360b896ced942c425387d31f5": "a33ea6ae68db9a25792eedda4ce25fa5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/51b12eca992c4f8a5d2b2cdbd0564358c14d55": "85b741b7f80762ea73f38916c0f4fb5e",
".git/objects/e2/99475813df7633424a087ac0827b91a196a00e": "06766a03311dc7dea4f928e53cb4cc74",
".git/objects/f4/270c751b387e6a5adfaa8f9154f330c10666bf": "f4b8adf739d5ce448453a6d9028fe509",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/b846eb1081d6d28b2cca8f5fb81c38049ca374": "aa0425a87b91c301dbe8ad281f00ac33",
".git/objects/fc/5ee92b165fc915e6c29d8bc83f439fe9ba2747": "b1fb7225c0e2a105100cc258c956aea4",
".git/objects/e3/565de63d2331e7a2192ff817a0329322acfeef": "4cefbc3a6fad562c02db957186afec29",
".git/objects/fb/8f285c046f9ae42e9a51193691396740fbb630": "cd54d6e540619171f5d98a2d43c11a50",
".git/objects/ed/ee66a335e1dd0b251e72b06d46110c7a277a9f": "54b1a01d0fcf4882a7afde71d27c340e",
".git/objects/c6/35f9fed9e3be1b8dd1d05456fe7e1676700ecf": "7343be5260ba160e36a55ff87b8f4e9e",
".git/objects/73/eb315e0bdaa4af5fa5e694a741301dbb06bd24": "1fdb9cb98a2ee92733f99f84990c5219",
".git/objects/8f/25e853ea3cc36ef5d678f3a14d735a0e0d6fa8": "035e1811e0a55128e9d78531580d876d",
".git/objects/8f/eab282252491a1a2cd0ca03d323b9465189733": "1780e79d2c2d4e3212b44fb0f382e495",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/6a92074c86a95c09e9ded2260ad72ad4ebf2b8": "4ee82d2b90ac42dbba4ec8cc0ecb99b5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/d940d19e82d626b240dfde4b626bcd475b5f9d": "e848ef3dad6f9f3b6608fb49cda27a7f",
".git/objects/07/de22aa359707020ab0c1168402430cd67d13d9": "0ebdb890e2aab9b5d465e689e9a586b9",
".git/objects/38/ddcc183c376aa5d8771f8f5a7a5f82cfddb257": "8352be647d6fef2b34bd8f10d1821b96",
".git/objects/6e/bdc834c6c543eb723de7ceb9983f7f4ebf6c9c": "adfb73dc1812f5848f456bbbbf4fa5f0",
".git/objects/31/bf18734dfe0baf8c60920804b4c4aaa5854cfa": "08e7d7c8086f62c077eced83d2410a9f",
".git/objects/62/8a22f52630b4c95d5b7d6376a66393543791f4": "ba83d41aa41f299e018b9b766fe232d5",
".git/objects/a0/2f382262b7e43bf8a0649d24659012cf25d206": "9f670c3888ed9d873233404dbcbc80a5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/010575ea0376b8c33b69d6ba6a1f7099221c3e": "eb94686067fe1586877162cf3cd5d8cc",
".git/objects/de/3c449c6a0c5975ef11efdced0c7bd45c3655f0": "6909898e7a4bb83dc9127a970a5291cb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7b22379ddbda774ac49b8f09b279f6618b93b9": "f7257c7550ae61092ae309fb7afe6ed5",
".git/objects/ef/d2b01b040f2733d5c0074bf6048b6e2a0ce671": "d3484536462e15bc81c8f957fccefeab",
".git/objects/cd/9ab1ce93fdc7e99e494a10c0f1b332c534db1d": "a5afed078a86bf0e1833e9c7977e0931",
".git/objects/f0/252b3fd77a7e750bca4eb7a4344ff86cf4260c": "48a36e3486d52f3ac8537891a4700cfe",
".git/objects/f8/2304b17196d3d005303b6524df08b28fbae0a8": "a362c2e958c91ba8cf4b5383dd91bd9e",
".git/objects/ce/a767937030d83375e7fc3b98b92860a1474547": "bf0825033a39e71213b2eeef7774b6d1",
".git/objects/2c/585395dccfd4c8068c52a4006c9a3698ffe358": "a62ac4ed9bc4f66cb176a0a53cf599b8",
".git/objects/41/49d61f61693c5d4e4cabb10013a0825e48af6d": "78ac173d19577187cbe90fa3a7919304",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/70/a97401d71c5b830133742265737187518d2b68": "5bf5ae9dbc63a5805635fb465e97dd2e",
".git/objects/23/80121a006fc4ec62b2c3e9dd4c7e79a2c3aeb2": "5acc158792c71cdc02ee7786561d1957",
".git/objects/12/777100c15bcc93aebc280e47af81d832323076": "3091342945967c4fc289fc0a3bdd1523",
".git/objects/40/81e2bafe4c7676d7401526d287e447cf5e24f7": "160fe762f77a62c18dd60eeebc02c940",
".git/objects/47/68c8330c6025b893b41ed6ba6ea36d3de6dfba": "52de85c663f97ccc5c8b048a72c89613",
".git/objects/8b/d67bb9ba7df35e32fa006598021abd2b0a5f76": "7e1a545dba05f99092aff1365bcffefe",
".git/HEAD": "7181fb0b74ac542abf89a695db9291d2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a4db6320f93340acca0afff565dbd63a",
".git/logs/refs/heads/setup": "381b351ab0e8bb900d6852efb73b75e8",
".git/logs/refs/heads/main": "df4ce2a2596081a8b6fcc1cd7192a903",
".git/logs/refs/remotes/origin/main": "47682c2ce3ff0c0d6bbf84c5dc71d6a0",
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
".git/refs/heads/setup": "cfc0ba02b2bc3d2f150845ee3c942ca9",
".git/refs/heads/main": "cfc0ba02b2bc3d2f150845ee3c942ca9",
".git/refs/remotes/origin/main": "cfc0ba02b2bc3d2f150845ee3c942ca9",
".git/index": "2263aea283ce09c417d8aad0094738cd",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "9e063d3d68c9a78049329c08792f8e10",
"assets/NOTICES": "4a34e4b96cff0b9fc8c6e6efc4ebf7cd",
"assets/FontManifest.json": "b8b6d74fdfcc70bbbe94d8e8e074d274",
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
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "1cd173aed13e298ab2663dd0924f6762",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/xcode.png": "e0ce51c7e9678ab899b19e1088c8ecc0",
"assets/assets/app.jpg": "7d91ef0c7baf01a06f994e29be53c00c",
"assets/assets/uber_clone.png": "31517ff7dc105b83ec5d4c2cc9e65d47",
"assets/assets/zoom.png": "4bf6409976414d07860b17c845b93c68",
"assets/assets/instagram.png": "c166f451c5f4c430ca7d45be0b541ddc",
"assets/assets/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/e-wallet1.png": "9037f36a4a81349199cc6024639058d6",
"assets/assets/mazdoori.png": "c53bff8fbd2f3f1c7e5edd66ce90bd86",
"assets/assets/github.png": "2ef9f587f67e04fbfa7ef221cf0dde56",
"assets/assets/e-commerce.png": "7428d8a47f061600396efe512366c006",
"assets/assets/firebase.png": "c24b6b9c0fcd84c7b258879880472660",
"assets/assets/questions.png": "72e970a3dd34243b305e3a41337f7ef1",
"assets/assets/restapi.png": "c57e7381cdf1f546664b60f224ef5614",
"assets/assets/bulb.jpg": "0fe4aca083f6dce25eb6fa8aee99de47",
"assets/assets/bulb.png": "dd2a63967b6d4d94479e8bcda0bd625d",
"assets/assets/driver.png": "24e90cd9bec69e4cf93674ea299839f4",
"assets/assets/medium.png": "ad1ca0daa2a82eb76c8425ee36faf21c",
"assets/assets/projects.json": "7124cd5ef0b5fe548139e19d482a7c23",
"assets/assets/iphone.png": "a2586a2ea0bbb386865e2046b5ec5f63",
"assets/assets/hive.png": "20f8dbe6f778e4218da7a3074d889302",
"assets/assets/pakistan.jpg": "6fe889dea774d3bf9204353d6d551e3e",
"assets/assets/slack.png": "1d1947eed4102f3e3c3407f17c277e02",
"assets/assets/twitter.png": "c7a3c1869d3d8171b5422235a69a44cb",
"assets/assets/swift.png": "a40b2a8e60eb1729ee1e5f756c9a15e1",
"assets/assets/linkedin.png": "fd9e1a273d66075d29dc2c57b41fb6e8",
"assets/assets/uikit.png": "b9703aa342d7b630ffbab028f1df78e9",
"assets/assets/sample.png": "3c7ba5426e2ab9ac2f6a044ebb47eec2",
"assets/assets/iphone_uber.png": "65282a9cf05345787f19c476e03d34f1",
"assets/assets/pdf.png": "8824c75446d721a1fb968416abbdeaae",
"assets/assets/swiftui.png": "3ded66b72b5930480785ee88ff232b78",
"assets/assets/api.png": "36d4570add6701f28f9756dc3feabbff",
"assets/assets/ui.png": "f964205ef668df3eb6e67b6ce99cc90c",
"assets/assets/fonts/Outlined.otf": "00283ddbd4e11d3c5b0080e4c37c1f25",
"assets/assets/fonts/MyFlutterApp.ttf": "88223ea8276357964456a5101e266c93",
"assets/assets/fonts/Bold.otf": "d21c36249e0dda49a87329f9c94aff29",
"assets/assets/equiz.png": "147360ec11a1624b564813dde524f307",
"assets/assets/chat.png": "a74bea939c2138c397477f5cce561d50",
"assets/assets/dart.png": "c979b430b2da155059ebc0a22b0a26ac",
"assets/assets/cv.pdf": "62c01226dfca61c8311cf1172d114c19",
"assets/assets/e-wallet.png": "8969a46fc9096625e8b635643d8e9dec",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
