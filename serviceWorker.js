

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