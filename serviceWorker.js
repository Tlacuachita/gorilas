const staticDevGorila = "GorilaRun"
const assets = [
  
  "index.html",
  "css/estilos.css",
  "js/nucleo.js",
  "img/Africana3.png",
  "img/Africano1.png",
  "img/Africano2.png",
  "img/Africanos.png",
  "img/Jungla.png",
  "img/Mediodia.png",
  "img/Noche.png",
  "img/sprites.png",
  "img/suelo.png",
  "img/tarde.png",
  

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevGorila).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })