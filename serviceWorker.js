

// self.addEventListener("install", (e)=>{
//     //
//     e.waitUntil(
//         caches.open("demo").then((cache)=>{
//             self.Notification.showNotification("hi")
//             console.log("hi from fetch catch")
//             cache.addAll([
//                 "./index.html",
//                 "./aboutimg.webp",
//                 "./favicon.ico",
//                 "./homeimg.png",
//                 "./icon512_maskable.png",
//                 "./icon512_rounded.png",
//                 "./manifest.json",
//                 "./portfolio.webp",
//                 "./Resume.pdf",
//                 "./script.js",
//                 "./serviceWorker.js",
//                 "./skills.webp",
//                 "./style.css"
//             ])
//         })
//     )
// })




// self.addEventListener("fetch", (e)=>{
//     //update
    
//     console.log("hi from fetch catch")
//     e.respondWith(
//         fetch(e.request)
//             .then((res)=>{
//                 const cloneData=res.clone();
//                 caches.open("demo").then((cache)=>{
//                     cache.put(e.request, cloneData);
//                 })
//                 return res;
//             }).catch(()=>{
//                 console.log("hi from fetch catch")
//                 self.Notification.showNotification("hi")
//                 return caches.match(e.request).then((file)=>file);
//             })
//     );
// })

// const pushNotify=()=>{


// self.addEventListener('push', function(event) {
    
//     console.log("hi from fetch catch")
//     // const data = event.data.json();  // Assuming the server sends JSON
//     // const options = {
//     //     body: data.body,
//     //     icon: 'icon.png',
//     //     badge: 'badge.png'
//     // };
//     event.respondWith(
//         self.Notification.showNotification("hi")
//     );
// })
// }

// pushNotify();

self.addEventListener('install', function(event) {
    console.log('Service Worker Installed');
    self.skipWaiting(); // Force the waiting service worker to become the active service worker
  });
  
  self.addEventListener('activate', function(event) {
    console.log('Service Worker Activated');
  });
  
  self.addEventListener('push', function(event) {
    const title = 'Push Notification';
    const options = {
      body: 'Here is a push notification sent at an interval of 10 seconds!',
      icon: '/favicon.ico', // You can replace it with your own icon
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });
  
  // Function to trigger notifications at intervals
  function sendNotification() {
    self.registration.showNotification('Push Notification', {
      body: 'This is a 10-second interval notification',
      icon: '/favicon.ico', // Replace with your custom icon if needed
    });
  }
  
  // Set an interval for every 10 seconds
  setInterval(() => {
    sendNotification();
  }, 10000);  