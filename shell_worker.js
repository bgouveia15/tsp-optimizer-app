// round 146b item 3 (540 (f), the second half) — THE APP SHELL CACHED OFFLINE.
// WEB-ONLY (476): the App Store install replaces this on iPhone.
//
// THIS FILE IS A TEMPLATE. tool/shell_manifest.dart stamps the deployed copy
// with this build's number, a sha256 for every published file and the install
// list (D-3, D-5). Unstamped, it refuses to install (STAMP stays null).
//
// What it does, and the directive's D-number for each:
//  · ONE CACHE, CONTENT-ADDRESSED (D-5): `shell-files`, each entry keyed by
//    the stamped sha256 AND the path under a key no page ever requests
//    (`<base>__shell/<sha256>/<path>`). This build's STAMP is the index.
//  · THE INSTALL (D-5): each listed file is kept if its entry re-hashes to the
//    stamp, otherwise fetched, hashed, refetched past the HTTP cache once, and
//    stored only when ok, not redirected, same origin and hash-equal. A last
//    pass refetches any entry gone missing. It does NOT skipWaiting (D-6): the page
//    posts that after its first frame (D-11).
//  · THE UPGRADE FAILS OPEN, NOT ON A SLOW LINE (D-5, K = 3): give up at once
//    on a quota error; when one file fails its hash on K attempts that start
//    more than 600 s after this build's first; and on no progress only after
//    K attempts AND 72 h. Giving up deletes our caches, writes the marker and
//    unregisters: the member is on network loads, as before this round.
//  · ACTIVATE (D-5): deletes the entries this STAMP does not name and every
//    other `shell-*` cache, but keeps the counter key, and keeps the marker if
//    it names a newer build than this one.
//  · FETCH (D-7): respondWith ONLY for a stamped URL, or a navigation to the
//    base href or `<base>index.html` (D-5's map, query ignored). Everything
//    else — another origin, a non-GET, a Range request, an unstamped path,
//    any other URL with a query — falls through untouched, so a page's own
//    `cache: 'no-store'` reaches the network as written. A miss goes to the
//    network; only a hash-equal response is stored, in waitUntil, errors
//    swallowed (D-5's first use).
//  · NAVIGATION (D-8): the cached index.html is re-hashed against this STAMP,
//    with no network compare; a mismatch clears everything and answers from
//    the network.
// It holds no outside address (T-26), reads no request body, and never opens
// the browser's other stores. The cache-name prefix `shell-` is a contract
// (§2): both Reloads and the kill worker find our caches only by it.
'use strict';

const STAMP = {"build":121,"files":{".last_build_id":"7f0dfc15f5e36a9102f3c96fd4bf454626b7ba93393fc06b0751e25df3ab9c1b","assets/AssetManifest.bin":"a42a4b61f2fd36a00fbb21fc8ba12ccf9a89c3b7ff3c3fd0ebbcb184f7fe7157","assets/AssetManifest.bin.json":"42b8ef5cbb0d8ed744e4657207a22219206ac234e76db330fab47587ca0fceae","assets/FontManifest.json":"a0e9f34aebb92397b6f95a3654e3b147d4a4723bf868da2831037fc608033162","assets/NOTICES":"7833d892ff3fdb8638895ff0834d05a285b15422f673aec0708e992ce7798e00","assets/assets/data/2026.json":"e98eab7989bbcc2e90d3dd74f0a4553eed984a04c0fae2ce8c56c17dfcbf77f5","assets/assets/data/2027.json":"71c1fc1d91c00d3945ea1599c1c385fbaf79aff953b0a44d0b46ba9f580282a0","assets/assets/fonts/RobotoMono-Bold.ttf":"3ecf35e5e87accc7578b605d1f5f0bc30d88b195d6807bec8a0c57f6aa95c4db","assets/assets/fonts/RobotoMono-Medium.ttf":"4acbb2725a260eafff1bcaade3501204ca774e56346e259ee1b61d56996d2611","assets/assets/fonts/RobotoMono-Regular.ttf":"af0bff7599c3df3831755c16e39b3c496df74b8c8d8a1161b14dc8461be17cb4","assets/assets/fonts/appsans/Roboto-Bold.ttf":"07ee011e62fd0dd0639f730fe20f6a49e325ecc1110134fadfb0062acdee3772","assets/assets/fonts/appsans/Roboto-Medium.ttf":"71f5e045584ffccfe28e89abc8b4d91841c824c9c9a8379009ef6711f22b462d","assets/assets/fonts/appsans/Roboto-Regular.ttf":"a6ec0ffaad7339c18c90c6a9728465e9003ae725a8769401af356a8afe523690","assets/assets/references/dfas-guide-les-2026-05.pdf":"bd9166c5184ec532037b54c5b90136664034bb67df25267f3693c4dba4d27030","assets/assets/references/dod-les-handout-2026-03.pdf":"db34893f07b32bd2dc2d43fd083d12b5fd3d57dbf5d21f5371a5fd0abc3371a7","assets/assets/references/irs-fw4-2026.pdf":"1ae5df06d9a53f9f0a3c7b3e51a36ab2a84755668502942338138deebc42feef","assets/assets/references/irs-pub3-2025.pdf":"925d77d3775a677544895655b7dbd45abf38fe4838fa59445fdcc84c03ce0edc","assets/assets/references/tsp-summary-tspbk08-2026-01.pdf":"a0befc2bb32868099fa3eb297dccfd4d65f946776c50f329b9fdc4f7d544e970","assets/fonts/MaterialIcons-Regular.1258085e1d95.otf":"1258085e1d95ba143abf362fe882a76ed0be6f499dd8cd5c6b3158559b203c85","assets/fonts/MaterialIcons-Regular.131a5b72021e.otf":"131a5b72021eef472850d4e592e977636584f59677ea706c0f5bbc4497c8b9a9","assets/fonts/MaterialIcons-Regular.2319516514fc.otf":"2319516514fc4efaa88caf5670cd929507b07f843f9d22c2dc8cc995715e3c0b","assets/fonts/MaterialIcons-Regular.4662f9e6264f.otf":"4662f9e6264f186b2ba22ed6edc59a7457bf54111863631af99570eb7bd03457","assets/fonts/MaterialIcons-Regular.515020d9b717.otf":"515020d9b717b7bdedf19045d26880a7502def95aeebaec98811a1633f4fce32","assets/fonts/MaterialIcons-Regular.7a2e6d3b6ca2.otf":"7a2e6d3b6ca2a78152e4057e2fc516f2c9a67079ddde0b57e773a357c1b98801","assets/fonts/MaterialIcons-Regular.8c7ffb054fc8.otf":"8c7ffb054fc848bd0ae5d8032fef2e0f55b146f188111567c82ca4ce9793f97f","assets/fonts/MaterialIcons-Regular.904ca1291c62.otf":"904ca1291c625692617ac23d6100ff50a60c15d7fdc4f0fd1f2ec88178ada70f","assets/fonts/MaterialIcons-Regular.9c2a308b9da0.otf":"9c2a308b9da02d0c368515d488e1490a931b98755ab5b3a86ae5040c8ee56ca0","assets/fonts/MaterialIcons-Regular.c6a003546be0.otf":"c6a003546be095edb5fac26af1e417ddf25ae300e5fb299197a1454b6f3ffd11","assets/fonts/MaterialIcons-Regular.d315cce9c525.otf":"d315cce9c5258cf55d9554aef11f8dae034a36410ff60b8937a8e18d3b58adcc","assets/fonts/MaterialIcons-Regular.de3e03c17e93.otf":"de3e03c17e93928bbbbf564ed786243a7e1737d88c84ffcddd1e966e003d5b4f","assets/fonts/MaterialIcons-Regular.f8f6b3cb33d8.otf":"f8f6b3cb33d8fba920fb1ebba0179bd33641ecfc19f74efb353c14238b0fa269","assets/fonts/MaterialIcons-Regular.fac8eb094d76.otf":"fac8eb094d764cef18ec2f8e13e1595192a0983759fddb71a3a4a75eeb01c87d","assets/packages/cupertino_icons/assets/CupertinoIcons.ttf":"3d90c370aa4cf00dc57ee2b902f6652147c0f81e03e483df584a9c08b1687c9d","assets/shaders/ink_sparkle.frag":"2dca5ab93d4ec29e963f996f3916320ba60825e9537dfb149a68008c7a16b026","assets/shaders/stretch_effect.frag":"ab412f07a5b9b50b67a885b24dbe16929738ae28630407d6490c924caf0a3220","canvaskit/canvaskit.js":"7361b744487f98262f77ac507006b3eae37830430048ab7811a626b79f34a52c","canvaskit/canvaskit.wasm":"6bdfaa51c76845c02ea90153d44f56f99da51de44a7ee0ea15ccaeb33ed8f476","canvaskit/chromium/canvaskit.js":"d2aceb0e24ead163ab289a165ca0e26a36fa26d7118f5a295b8854d59d892896","canvaskit/chromium/canvaskit.wasm":"c2fc2864763540922c71d464e983bebf97b3a5312fd01c6a8988969747d13314","canvaskit/experimental_webparagraph/canvaskit.js":"803f7bab5f280fb6793495573bc83e6f70110916f75878a79c41e30b86585df8","canvaskit/experimental_webparagraph/canvaskit.wasm":"6b916e684369558b9a4fdd774fedf2717d7481cf0b7dffb28e084129512bbd3f","canvaskit/skwasm.js":"e0316a798a929008cf9221d9ae0e8a4e0a5f07869ff2c0ad68a71f56ab9998a4","canvaskit/skwasm.wasm":"084a99454e405ad9e396803f5c02369562c92210ad9ff83a053ca68a1047a8f4","canvaskit/skwasm_heavy.js":"fbf1c3374cd28b38ea4c48f8189012263c40e78e0a55323a557443c97a58c58c","canvaskit/skwasm_heavy.wasm":"8b8279650b1847d8259ad4591c5cb7cb635b513134ec7565f85b1aa4271d896c","canvaskit/wimp.js":"3f2cc5ae040789508b6914897a9858389a496b3a7cadcc71ef120cca99f70586","canvaskit/wimp.wasm":"5c34d37553d9ff2cf4be0de2288914b524fae40588aeadaa51facb1ec6d7eab4","favicon.png":"231fbe208097fcb28576c7af8a36bc8f63a8c32a18b08488cdc081287f9b5ceb","flutter.js":"a483fd28f51ed2fadd0da3fade5b672eba56310d549d736ce62eabf624a6a578","flutter_bootstrap.js":"d9181d9ece108c83edd8e8e4998fb123e5e1fda21cb23b5985a58b3fee2128a4","flutter_service_worker.js":"dbfbe64ae5be5b462abb97338eb9af783ed4ed57a8c73a53c2a44488a26f6416","icons/Icon-192.png":"5530b90db319a9b945f2239360237da01ac5645aab82ccb0c910f8650fe1b7a6","icons/Icon-512.png":"33fcb62861aaeb742a37ec82f8c31aba984363075e116d41cb67599f598d02f6","icons/Icon-maskable-192.png":"5530b90db319a9b945f2239360237da01ac5645aab82ccb0c910f8650fe1b7a6","icons/Icon-maskable-512.png":"33fcb62861aaeb742a37ec82f8c31aba984363075e116d41cb67599f598d02f6","icons/apple-touch-icon.png":"c419bb5bebba10899fb4ac317e4c653218558d8a7729251d07882b029baf0c84","index.html":"8681072f39a667b9a23c5b13653ba305eeef5142733e5caeffb898c117888f9d","main.dart.js":"13dd8497acb9d9e9458d3d8ca844cb1f0e2bbea5244740c88e302a315567adf3","manifest.json":"b4fb5108d190d567989187c0ff0a2ece2ce913aa53bdc82970b6005109e0944e","vendor/pdfjs/pdf.min.js":"978fd1b2d134a98e98966186a97777bebf87d8e770dadab1ece3687e21a5aa6c","vendor/pdfjs/pdf.worker.min.js":"38cde5311957b86bc3669f93e7d2566de333a90055ed6635bef60d9bf00e96f2","vendor/tesseract/eng.traineddata.gz":"ed350f3752f81ee8f38769edc14d92d997dababe23b565c59879372cc46a2468","vendor/tesseract/tesseract-core-lstm.wasm.js":"8f04aa0cc81e7bde33f80e92fa01a7a665f0b4884d098acf5de9c7104a11dfaa","vendor/tesseract/tesseract-core-simd-lstm.wasm.js":"ce20eda9533cbed1e6c2b4276fbae1e0adc61b6754b5513084be601787b457cf","vendor/tesseract/tesseract-core-simd.wasm.js":"63f232c4f7a97b04e52eb940202700b2c6239783a75d0ff0553274fac530cd5c","vendor/tesseract/tesseract-core.wasm.js":"2b8c8c92b8788807061fb4bb16c5acdf000c149e100255f879f78d2c58ca9969","vendor/tesseract/tesseract.min.js":"a8e29918d098b2b06e1012bdaeffb4aec0445c5d5654709023e0bd1f442a80e8","vendor/tesseract/worker.min.js":"aca1229639fc9907d86f96e825955a2b7c5716d17f3bc3acd71f9c7ab66181fc"},"install":["index.html","flutter_bootstrap.js","manifest.json","main.dart.js","favicon.png","icons/Icon-192.png","assets/FontManifest.json","assets/fonts/MaterialIcons-Regular.f8f6b3cb33d8.otf","assets/assets/fonts/appsans/Roboto-Regular.ttf","assets/assets/fonts/appsans/Roboto-Medium.ttf","assets/assets/fonts/appsans/Roboto-Bold.ttf","assets/assets/fonts/RobotoMono-Regular.ttf","assets/assets/fonts/RobotoMono-Medium.ttf","assets/assets/fonts/RobotoMono-Bold.ttf","assets/packages/cupertino_icons/assets/CupertinoIcons.ttf","canvaskit/chromium/canvaskit.js","canvaskit/chromium/canvaskit.wasm","canvaskit/canvaskit.js","canvaskit/canvaskit.wasm","vendor/pdfjs/pdf.min.js","vendor/pdfjs/pdf.worker.min.js","assets/assets/references/dfas-guide-les-2026-05.pdf","assets/assets/references/dod-les-handout-2026-03.pdf","assets/assets/references/irs-fw4-2026.pdf","assets/assets/references/irs-pub3-2025.pdf","assets/assets/references/tsp-summary-tspbk08-2026-01.pdf"]}; /*__SHELL_STAMP__ stamped*/

const FILES = 'shell-files';
const MARKER = 'shell-marker';
const K = 3;
const HASH_GRACE_MS = 600 * 1000;
const NO_PROGRESS_MS = 72 * 3600 * 1000;
// One open can start two attempts: the browser's own update check after a
// navigation and the page's reg.update() (146b's probe measured both in
// Chromium). An attempt starting within this of the last one is the same open
// and counts once, so K counts opens, as D-5 intends.
const SAME_OPEN_MS = 60 * 1000;
const BASE = new URL('./', self.location.href).href;
const BASE_PATH = new URL(BASE).pathname;
const KEY_PREFIX = BASE + '__shell/';
const COUNTER_KEY = KEY_PREFIX + 'counter';
const MARKER_KEY = KEY_PREFIX + 'marker';

function keyFor(path, sha) {
  return KEY_PREFIX + sha + '/' + path;
}

async function sha256Hex(buf) {
  const d = new Uint8Array(await crypto.subtle.digest('SHA-256', buf));
  let s = '';
  for (let i = 0; i < d.length; i++) s += d[i].toString(16).padStart(2, '0');
  return s;
}

function isQuota(e) {
  return !!e && (e.name === 'QuotaExceededError' || e.code === 22);
}

class GiveUp extends Error {}

// ── the counter: one reserved key, this build's attempts ─────────────────
async function readCounter(cache) {
  const r = await cache.match(COUNTER_KEY);
  if (!r) return null;
  try {
    return await r.json();
  } catch (_) {
    return null;
  }
}

async function writeCounter(cache, c) {
  await cache.put(COUNTER_KEY, new Response(JSON.stringify(c), {
    headers: {'Content-Type': 'application/json'},
  }));
}

// ── our caches, by the prefix only ───────────────────────────────────────
async function deleteOurCaches() {
  const names = await caches.keys();
  await Promise.all(names.filter((n) => n.indexOf('shell-') === 0)
      .map((n) => caches.delete(n)));
}

async function giveUp(why) {
  await deleteOurCaches();
  const m = await caches.open(MARKER);
  await m.put(MARKER_KEY, new Response(JSON.stringify({build: STAMP.build, why}), {
    headers: {'Content-Type': 'application/json'},
  }));
  // NOT awaited: the unregister job queues behind this very install job, so
  // awaiting it here deadlocks (146b's probe measured the registration still
  // there a minute later). The throw ends the install; the unregister runs.
  self.registration.unregister();
  throw new GiveUp('shell_worker: gave up on build ' + STAMP.build + ' (' + why + ')');
}

// ── one listed file: kept, or fetched and verified ───────────────────────
async function cachedOk(cache, path, sha) {
  const hit = await cache.match(keyFor(path, sha));
  if (!hit) return false;
  return (await sha256Hex(await hit.arrayBuffer())) === sha;
}

function storable(resp) {
  return resp.ok && !resp.redirected && resp.type === 'basic' &&
      new URL(resp.url).origin === self.location.origin;
}

async function fetchVerified(path, sha, mode) {
  const resp = await fetch(new Request(BASE + path, {cache: mode}));
  if (!storable(resp)) {
    throw new Error('shell_worker: ' + path + ' answered ' + resp.status);
  }
  const buf = await resp.arrayBuffer();
  const ok = (await sha256Hex(buf)) === sha;
  return {ok, buf, type: resp.headers.get('Content-Type') || ''};
}

async function store(cache, path, sha, got) {
  await cache.put(keyFor(path, sha), new Response(got.buf, {
    headers: {'Content-Type': got.type},
  }));
}

// Returns true when it saved a file, false when the entry was already good.
// [counts] is false for a second attempt in the same open (SAME_OPEN_MS).
async function ensure(cache, path, c, attemptStart, counts) {
  const sha = STAMP.files[path];
  if (await cachedOk(cache, path, sha)) return false;
  let got = await fetchVerified(path, sha, 'default');
  if (!got.ok) got = await fetchVerified(path, sha, 'reload');
  if (!got.ok) {
    // A CDN edge can serve the old file for 600 s after a serve, so only an
    // attempt that starts later than that counts against the file.
    if (counts && attemptStart - c.first > HASH_GRACE_MS) {
      c.hashFails[path] = (c.hashFails[path] || 0) + 1;
      await writeCounter(cache, c);
      if (c.hashFails[path] >= K) await giveUp('hash:' + path);
    }
    throw new Error('shell_worker: ' + path + ' does not hash to its stamp');
  }
  await store(cache, path, sha, got);
  return true;
}

async function install() {
  if (!STAMP) throw new Error('shell_worker: unstamped template, not installing');
  const marker = await (await caches.open(MARKER)).match(MARKER_KEY);
  if (marker) {
    let m = null;
    try {
      m = await marker.json();
    } catch (_) {}
    if (m && m.build === STAMP.build) {
      throw new Error('shell_worker: build ' + STAMP.build + ' was given up on');
    }
  }
  const cache = await caches.open(FILES);
  const now = Date.now();
  const had = await readCounter(cache);
  const c = had && had.build === STAMP.build ? had :
      {build: STAMP.build, first: now, attempts: 0, hashFails: {}, last: 0};
  const counts = now - (c.last || 0) >= SAME_OPEN_MS;
  // No progress: K attempts saved nothing AND 72 h since the first.
  if (c.attempts >= K && now - c.first >= NO_PROGRESS_MS) {
    await giveUp('no-progress');
  }
  try {
    // Raised and AWAITED before the first fetch, so an attempt the browser
    // ends mid-way still counts.
    if (counts) c.attempts += 1;
    c.last = now;
    await writeCounter(cache, c);
    for (const path of STAMP.install) {
      if (await ensure(cache, path, c, now, counts) && c.attempts !== 0) {
        c.attempts = 0; // a saved file is progress
        await writeCounter(cache, c);
      }
    }
    // Another worker's activate can sweep while this one installs: one more
    // pass over the whole list before the install resolves, refetching any
    // entry that is now MISSING. Presence only: every entry here was hashed
    // before it was stored, and re-hashing 25 MB twice per attempt measurably
    // slowed the page's own loads on the probe's two-core laptop.
    for (const path of STAMP.install) {
      if (!(await cache.match(keyFor(path, STAMP.files[path])))) {
        await ensure(cache, path, c, now, counts);
      }
    }
  } catch (e) {
    if (e instanceof GiveUp) throw e;
    if (isQuota(e)) await giveUp('quota');
    throw e;
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(install());
});

async function activate() {
  // Normalised as the Cache API stores them (a space or non-ASCII character in
  // a path is percent-encoded in req.url), so no wanted entry is swept.
  const wanted = new Set(Object.keys(STAMP.files)
      .map((p) => new Request(keyFor(p, STAMP.files[p])).url));
  wanted.add(new Request(COUNTER_KEY).url);
  const cache = await caches.open(FILES);
  for (const req of await cache.keys()) {
    if (!wanted.has(req.url)) await cache.delete(req);
  }
  for (const name of await caches.keys()) {
    if (name === FILES || name.indexOf('shell-') !== 0) continue;
    if (name === MARKER) {
      const r = await (await caches.open(MARKER)).match(MARKER_KEY);
      let m = null;
      try {
        m = r ? await r.json() : null;
      } catch (_) {}
      if (m && Number(m.build) > Number(STAMP.build)) continue;
    }
    await caches.delete(name);
  }
}

self.addEventListener('activate', (event) => {
  event.waitUntil(activate());
});

// D-6, D-11: activation waits for the page's word after its first frame.
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});

// ── fetch ────────────────────────────────────────────────────────────────
function replay(hit) {
  // A fresh response, so what the page receives carries its own request's URL.
  return new Response(hit.body, {status: 200, headers: hit.headers});
}

async function serve(event, path, sha) {
  const cache = await caches.open(FILES);
  const hit = await cache.match(keyFor(path, sha));
  if (hit) return replay(hit);
  return firstUse(event, cache, path, sha, event.request);
}

async function firstUse(event, cache, path, sha, request) {
  const resp = await fetch(request);
  if (storable(resp)) {
    const copy = resp.clone();
    event.waitUntil((async () => {
      try {
        const buf = await copy.arrayBuffer();
        if ((await sha256Hex(buf)) !== sha) return;
        await store(cache, path, sha,
            {buf, type: copy.headers.get('Content-Type') || ''});
      } catch (_) {
        // A failed first-use store is not an install: no give-up, no error.
      }
    })());
  }
  return resp;
}

async function navigate(event) {
  const sha = STAMP.files['index.html'];
  const cache = await caches.open(FILES);
  const hit = await cache.match(keyFor('index.html', sha));
  if (hit) {
    const buf = await hit.arrayBuffer();
    if ((await sha256Hex(buf)) === sha) {
      return new Response(buf, {status: 200, headers: hit.headers});
    }
    // Corrupted: clear everything and answer from the network. The unregister
    // is not awaited: behind a running install it would hold the navigation.
    await deleteOurCaches();
    self.registration.unregister();
    return fetch(event.request);
  }
  return firstUse(event, cache, 'index.html', sha, event.request);
}

self.addEventListener('fetch', (event) => {
  if (!STAMP) return;
  const req = event.request;
  if (req.method !== 'GET' || req.headers.has('range')) return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.indexOf(BASE_PATH) !== 0) return;
  // round 148 D-7 (146b's cold audit): a malformed escape makes
  // decodeURIComponent throw a URIError. On a throw, return before any
  // respondWith, so the request falls through to the network by this code
  // itself, untouched, as every unmatched request does.
  let path;
  try {
    path = decodeURIComponent(url.pathname.slice(BASE_PATH.length));
  } catch (e) {
    return;
  }
  if (req.mode === 'navigate' && (path === '' || path === 'index.html')) {
    event.respondWith(navigate(event));
    return;
  }
  if (url.search) return;
  const sha = Object.prototype.hasOwnProperty.call(STAMP.files, path) ?
      STAMP.files[path] : null;
  if (!sha) return;
  event.respondWith(serve(event, path, sha));
});
