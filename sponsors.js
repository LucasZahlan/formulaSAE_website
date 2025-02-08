//work in progress

const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');



menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
})
close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})

//these final three closes the menu when an item of the menu is clicked
const aboutUs = document.getElementById('aboutUs');
const history = document.getElementById('history'); // Changed from subsystems to history
const contact = document.getElementById('contact');

history.addEventListener('click', () => {
  nav.classList.remove('open-nav');
});
aboutUs.addEventListener('click', () => {
  nav.classList.remove('open-nav');
});
contact.addEventListener('click', () => {
  nav.classList.remove('open-nav');
});



//This makes header background appear white when scrolling down 20 px.
// window.onscroll = function() {scrollFunction()};


// function scrollFunction() {
//   if (window.innerWidth > 750){
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       document.querySelectorAll(".burger-items").forEach(item => {
//         item.style.background = "rgba(255,255,255,0.8)";
//       })
//     } 
//     else {
//       document.querySelectorAll(".burger-items").forEach(item => {
//         item.style.background = "unset";
//       })
//    }
//   }
// }

// this is the full google maps java code
// Initialize and add the map
let map;

async function initMap() {
  // The location of CONCORDIA FORMULA RACING
  const position = { lat: 45.497296578930325, lng: -73.57879827627701 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 13, // ZOOM IS RESPONSIBLE OF HOW ZOOMED IN WE ARE (0 BEING THE VIEW OF THE WHOLE EARTH)
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "CONCORDIA FORMULA RACING",
  });
}

initMap();

// animation java script
const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      if (entry.target.classList.contains('noMove')) {
        entry.target.classList.add('move');
      }
    } else {
      entry.target.classList.remove('show');
      if (entry.target.classList.contains('noMove')) {
        entry.target.classList.remove('move');
      }
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// only for sponsors page
// var now = new Date();
// var datetime = now.toLocaleString();

// document.getElementById("datetime").innerHTML = datetime;

document.getElementById("datetime").innerHTML = new Date(document.lastModified).toISOString().substr(0,10);