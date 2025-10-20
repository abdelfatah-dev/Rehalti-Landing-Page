const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const menuBar = document.querySelector(".menu-bar");
const rightArr = document.querySelector(".right-arr");
const leftArr = document.querySelector(".left-arr");
const user = document.querySelector(".users ul");

menuBar.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
  nav.style.backgroundColor = menu.classList.contains("menu-open")
    ? "var(--color-accent-800)"
    : "";
});

// media query for min-width: 800px
const mediaQuery = window.matchMedia("(min-width: 800px)");
let swiperInstance;

function initSwiperIfNeeded(e) {
  if (e.matches) {
    // Only initialize if it hasn't been initialized
    if (!swiperInstance) {
      swiperInstance = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".left-arr",
          prevEl: ".right-arr",
        },
      });
    }
  } else {
    // Optional: destroy swiper if window is smaller than 800px
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }
}

// Run on page load
initSwiperIfNeeded(mediaQuery);

// Optional: re-run on window resize
mediaQuery.addEventListener("change", initSwiperIfNeeded);
