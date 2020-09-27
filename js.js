

//--- MENU BUTTON ---//
const menuIcon = document.querySelector(".menu-icon");

function toggleMenuIcon() {
  menuIcon.classList.toggle("active");
}
menuIcon.addEventListener("click", toggleMenuIcon);

//--- SCROLL NAV ---//
window.addEventListener("scroll", function () {
  var header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 900);
});
$(window).scrollTop(0);
//--- SIDENAV ---//
$(document).ready(function () {
  $(".sidebarBtn").click(function () {
    $(".sidebar").toggleClass("active");
  });
});

// GSAP ANIMATION
const welcomeText = document.querySelector(".content-wrap");
const tl = new TimelineMax();

tl.fromTo(
  welcomeText,
  2.3,
  { opacity: "0" },
  { opacity: "1", ease: Power2.easeInOut }
);

gsap.from(".row", { opacity: 0,delay:0.5, duration: 1.2, y: 60 });
gsap.from(".collections-wrapper", { opacity: 0, duration: 1.2, y: 60 });
gsap.from(".projects-container", { opacity: 0, duration: 1.2, y: 60 });
gsap.from(".collections-page-text", { opacity: 0, duration: 1.2, x: 60 });

gsap.from(".navlinks-1", { opacity: 0,delay:0.5, duration: 1.2, x: 60 });
gsap.from(".navlinks-2", { opacity: 0,delay:0.8, duration: 1.2, x: 60 });
gsap.from(".navlinks-3", { opacity: 0,delay:1, duration: 1.2, x: 60 });
gsap.from(".navlinks-4", { opacity: 0,delay:1.1, duration: 1.2, x: 60 });
gsap.from(".navlinks-5", { opacity: 0,delay:1.2, duration: 1.2, x: 60 });
gsap.from(".navlinks-6", { opacity: 0,delay:1.3, duration: 1.2, x: 60 });
gsap.from(".navlinks-7", { opacity: 0,delay:1.4, duration: 1.2, x: 60 });
gsap.from(".logo-topnav", { opacity: 0,delay:0.5, duration: 1.5, x: -60, });




//--- CAROUSEL ---//

//-- Initialize Swiper

var swiper = new Swiper(".s1", {
  loop: false,
  grabCursor: true,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoResize: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
      autoResize: true,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40,
      autoResize: true,
    },
    // when window width is >= 640px
    700: {
      slidesPerView: 1,
      spaceBetween: 40,
      autoResize: true,
    },
  },
});

var swiper2 = new Swiper(".s2", {
  zoom: {
    maxRatio: 5,
  },
  grabCursor: true,
  freeMode: true,
  // autoplay: true,
  followFinger: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoResize: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
      autoResize: true,
    },
    // when window width is >= 640px
    760: {
      slidesPerView: 1,
      spaceBetween: 40,
      autoResize: true,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 40,
      autoResize: true,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 40,
      autoResize: true,
    },
    1800: {
      slidesPerView: 3,
      spaceBetween: 40,
      autoResize: true,
    },
  },
});
