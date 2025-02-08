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


 
// !!! USELESS NOW, OTHER SOLUTION USED
//when arrow1 or arrow2 is clicked the screen scrolls down
// const arrow1 = document.querySelector('.arrow.one');
// const arrow2 = document.querySelector('.arrow.two');

// arrow1.addEventListener('click', () => {
//     window.scrollTo(0, 740) ;
// })
// arrow2.addEventListener('click', () => {
//     window.scrollTo(0, 1400) ;
// })




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

// make home-image background zoom in on scroll
// some JQuery to do this

// function uses home-image height and width, and fits it on the screen, by changing background-size percentage
$(window).scroll(function() {
  var density = 1920/innerWidth;
  var heightImageOnScreen = 1166/density;
  var scrollPos = $(this).scrollTop();
  $(".home-image").css({
    'background-size' :  Math.max(((innerHeight/heightImageOnScreen)*100), 100) + scrollPos/50 +'%'
    // ,'scale' : 100 + scrollPos/50 + '%'
  })
})

// does it on window resize as well to keep it at the right size
$(window).resize(function() {
  var density = 1920/innerWidth;
  var heightImageOnScreen = 1166/density;
  var scrollPos = $(this).scrollTop();
  $(".home-image").css({
    'background-size' :  Math.max(((innerHeight/heightImageOnScreen)*100), 100) + '%'
  })
})


// NOT NEEDED FOR NOW
// set scroll variable 
window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
  // console.log(Math.min(percentOfScreenHeightScrolled*100, 100))
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled*100, 100)
  )

  // if (Math.min(percentOfScreenHeightScrolled*100, 100) >= 40 ) {
  //   document.querySelector(".parentTitleSlide").style.position = "unset";
  //   document.querySelector(".parentTitleSlide").style.top = "0";
  // }
  // else {
  //   document.querySelector(".parentTitleSlide").style.position = "fixed";
  //   document.querySelector(".parentTitleSlide").style.top = "35vh";
  // }
}
setScrollVar;




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
    title: "Concordia Formula Racing",
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