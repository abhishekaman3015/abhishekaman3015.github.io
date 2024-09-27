

self.addEventListener("install", (e)=>{
    //
    e.waitUntil(
        caches.open("demo").then((cache)=>{
            cache.addAll([
                "./index.html",
                "./aboutimg.webp",
                "./favicon.ico",
                "./homeimg.png",
                "./icon512_maskable.png",
                "./icon512_rounded.png",
                "./manifest.json",
                "./portfolio.webp",
                "./Resume.pdf",
                "./script.js",
                "./serviceWorker.js",
                "./skills.webp",
                "./style.css"
            ])
        })
    )
})

self.addEventListener('push', function(event) {
    // const data = event.data.json();  // Assuming the server sends JSON
    // const options = {
    //     body: data.body,
    //     icon: 'icon.png',
    //     badge: 'badge.png'
    // };
    event.waitUntil(
        self.registration.showNotification("hi")
    );
});


self.addEventListener("fetch", (e)=>{
    //update
    e.respondWith(
        fetch(e.request)
            .then((res)=>{
                const cloneData=res.clone();
                caches.open("demo").then((cache)=>{
                    cache.put(e.request, cloneData);
                })
                return res;
            }).catch(()=>{
                return caches.match(e.request).then((file)=>file);
            })
    );
})