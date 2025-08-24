
// Simple offline cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("cgl-cache").then((cache) => cache.addAll(["/","/index.html","/manifest.json"]))
  );
});
self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((r) => r || fetch(event.request)));
});
