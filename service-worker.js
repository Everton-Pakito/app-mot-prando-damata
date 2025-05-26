
self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service worker ativado.");
});

self.addEventListener("fetch", event => {
  // Apenas intercepta os fetches, mas não faz cache offline neste caso
});
