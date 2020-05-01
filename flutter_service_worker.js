'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4044944abad7f5437966c92ee1234629",
"assets/assets/avoid-touch.png": "f7259049d9935a8796df7668326ef779",
"assets/assets/corona.png": "f1b6057dea4f643ad9c2cbee734bd789",
"assets/assets/cough.png": "597d8f33b005afe2b29c152da011eb8f",
"assets/assets/covid-19.png": "29f7b0b2722abf2acbb0e5617f48ce20",
"assets/assets/difficulty-breathing.png": "1609a04277088818f5ba9a90b28a9c56",
"assets/assets/emb.png": "1e4616387fcf9d512bb478986d4725fe",
"assets/assets/fever.png": "0984799521d8f5f5306198b8e48c0ed7",
"assets/assets/flag.png": "208037ca42a5354bd41a2f5aec19d86a",
"assets/assets/fonts/Merienda-Bold.ttf": "831b2dd9a4dc12682e90cc01b1c0e480",
"assets/assets/fonts/Merienda-Regular.ttf": "47a69df010ec81bd9bb2afa95605dbe1",
"assets/assets/fonts/Poppins-Medium.ttf": "ba95810b56f476990ca71d15139d5111",
"assets/assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/germ.png": "65095d559b2707ff08fff6cc3d543362",
"assets/assets/git.png": "4a2a59afd55ebe3c6ab70d4ddaff69b2",
"assets/assets/hand-wash.png": "c0af16520bfaa78069de25488219fd27",
"assets/assets/keep-distance.png": "e3a823d6a8b7085e5c062a139d25dfc4",
"assets/assets/link.png": "c1a3ad44057df610974c24bf46f6cae9",
"assets/assets/mask.png": "eff9c5bd59af607f12dd1aebc4d5dae0",
"assets/assets/medical-mask.png": "7546cbdb992a1d42610f7eb5fc9cfc38",
"assets/assets/myimage.png": "75e404249906969e460b8d48772f2640",
"assets/assets/pandemic-1.png": "5b16531e54e04781e15c5b027363f8ed",
"assets/assets/pandemic-2.png": "becb07026e7a650b6562cac3d87b9092",
"assets/assets/runny-nose.png": "7184ee84b149733ee9d4ab002ad26e0e",
"assets/assets/sick.png": "5d43facb244e39a3a996b54ea7fb5298",
"assets/assets/sore-throat.png": "cef8e0fa114d3e507a1f476df52f4b9e",
"assets/assets/state.png": "5ef07f51b54cf996a5ca1d7899c6d5b7",
"assets/assets/stay-home.png": "aaa5779bba3ee2e69b75e6e48b8a4a1c",
"assets/assets/tissue.png": "eb38546bdcd4661a58540d6c95fc61db",
"assets/assets/virus.png": "bfbf6f56ed6350e51156698abf5c708b",
"assets/assets/world.png": "4b0ad503788c59235310d177fb1813ca",
"assets/FontManifest.json": "53ffebf2fb8e3a105901e9c2683daea2",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "da9970f33c2141bd5079cfe2bee877b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon1.png": "9ad003a9e09451208bff43cee546ff44",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b3146e4b8dd314ef099b91ed0f699504",
"/": "b3146e4b8dd314ef099b91ed0f699504",
"main.dart.js": "7d5043fc024424a40be1d62ce0675b81",
"manifest.json": "c4420b0ead152e11056b71dfaf3a5cb3"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
