const TICsPWA = "dev-TICsPWA-site-v1";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/laptop1.jpg",
    "/images/laptop2.jpg",
    "/images/laptop3.jpg",
    "/images/laptop4.jpg",
    "/images/laptop5.jpg",
    "/images/laptop6.jpg",
    "/images/laptop7.jpg",
    "/images/laptop8.jpg",
    "/images/laptop9.jpg",
];

self.addEventListener("install", installEvent=> {
    installEvent.waitUntil(
        caches.open(TICsPWA).then(cache =>{
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent =>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res =>{
            return res || fetch(fetchEvent.request);
        })
    );
});