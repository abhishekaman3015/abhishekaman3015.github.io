
//service worker registration========================//
// console.log("hi from script")
// if (navigator.serviceWorker){
//     navigator.serviceWorker.register("./serviceWorker.js").then((res)=>console.log("Success"));
//     const permission = Notification.requestPermission().then((res)=>console.log("Hiii",res));
// }

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/serviceWorker.js').then(function(reg) {
//       console.log('Service Worker Registered!', reg);
  
//       // Request notification permission
//       Notification.requestPermission().then(function(permission) {
//         if (permission === 'granted') {
//           console.log('Notification permission granted.');
//         } else {
//           console.log('Notification permission denied.');
//         }
//       });
//     }).catch(function(err) {
//       console.error('Service Worker registration failed:', err);
//     });
//   }

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceWorker.js').then(function(reg) {
      console.log('Service Worker Registered!', reg);
  
      // Request notification permission
      Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
  
          // Send a message to the service worker every 10 seconds
          setInterval(() => {
            reg.active.postMessage({ action: 'showNotification' });
          }, 10000);
        } else {
          console.log('Notification permission denied.');
        }
      });
    }).catch(function(err) {
      console.error('Service Worker registration failed:', err);
    });
  }
  
  


/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 