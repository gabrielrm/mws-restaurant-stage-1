var cacheID = "restaurant-review";

self.addEventListener("install", event => {
	console.log("sw installed");
  event.waitUntil(
    caches.open(cacheID)
      .then( cache => {
        console.log("cache created");
        return cache.addAll([
					"/",
					"/index.html",
					"/restaurant.html",
					"/css/styles.css",
					"/data/restaurants.json",
					"/js/dbhelper.js",
					"/js/main.js",
					"/js/restaurant_info.js",
					"/img/1.jpg",
					"/img/2.jpg",
					"/img/3.jpg",
					"/img/4.jpg",
					"/img/5.jpg",
					"/img/6.jpg",
					"/img/7.jpg",
					"/img/8.jpg",
					"/img/9.jpg",
					"/img/10.jpg"
        ]);
      })
  );
});

self.addEventListener("fetch", event => {
	// ignore the query string in the URL
	// from https://developers.google.com/web/updates/2015/09/updates-to-cache-api
  event.respondWith(caches.match(event.request, {ignoreSearch:true})
  	.then(response => {
      return response || fetch(event.request);
    })
    .catch(error => console.log(error, event.request))
  );
});
