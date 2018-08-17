"use strict";
var precacheConfig = [
    ["/index.html", "8b2a09e18821c5a9370b61575eebf083"],
    ["/app.css", "37ff1f8991b6da6913d4453535728570"],
    ["/app.js", "eb8de846c2c5390fdba75b9f40fbf0a9"]
  ];

const cacheName ='alwesal-cache-V1' ;

const cleanResponse = function(t) {
  return t.redirected
    ? ("body" in t ? Promise.resolve(t.body) : t.blob()).then(function(e) {
        return new Response(e, {
          headers: t.headers,
          status: t.status,
          statusText: t.statusText
        });
      })
    : Promise.resolve(t);
}


self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {

        return cache.addAll([
          '/',
          '/app.css',
          '/app.js',
          '/img/All_CSS_Functions.jpg',
          '/img/logo.png'
        ])
         
      })
      .then(function() {
        console.log ( 'install event error ' );            
      })
  );
}),


self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      console.log('i try delete old cache')
      Promise.all(
        cacheNames.map(function(name) {
          if (name.startsWith('alwesal-cache') && name != cacheName)
            caches.delete(name)
        })
      )
    })
  )
}),




  self.addEventListener("fetch", function(event) {

  
    if ("GET" === event.request.method) {
      event.respondWith(
        caches.match(event.request).then(function(cacheRes) {
          return cacheRes || fetch(event.request);
        })
      );
    }

  });
