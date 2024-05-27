document.addEventListener("DOMContentLoaded", function () {
  // Set the main color from local storage if available
  let mainColors = localStorage.getItem("color-option");
  if (mainColors !== null) {
    document.documentElement.style.setProperty("--main-color", mainColors);
    document.querySelectorAll(".colors-list li").forEach((element) => {
      element.classList.remove("colors-active");
      if (element.dataset.color === mainColors) {
        element.classList.add("colors-active");
      }
    });
  }

  // Set the image from local storage if available
  let savedImage = localStorage.getItem("selected-image");
  if (savedImage !== null) {
    document.querySelector(".home-section-image img").src = savedImage;
  }
});

// Toggle settings, color change event listeners, and other functionality
let settingsBox = document.querySelector(".settings-box");
let settingsToggle = document.querySelector(".settings-box .toggle-settings");
let settingsIcon = document.querySelector(".settings-box .toggle-settings i");
let colorsLi = document.querySelectorAll(".colors-list li");

settingsToggle.onclick = function () {
  settingsBox.classList.toggle("open-box");
  settingsIcon.classList.toggle("fa-spin");
};

document.addEventListener("click", function (event) {
  if (
    !settingsBox.contains(event.target) &&
    !settingsToggle.contains(event.target)
  ) {
    settingsBox.classList.remove("open-box");
    settingsIcon.classList.remove("fa-spin");
  }
});

colorsLi.forEach((li) => {
  li.addEventListener("click", (event) => {
    const selectedColor = event.target.dataset.color;
    document.documentElement.style.setProperty("--main-color", selectedColor);
    localStorage.setItem("color-option", selectedColor);

    const imageMap = {
      "#009DFF": "Images/home-section-blue.svg",
      "#FF7575": "Images/home-section-pink.svg",
      "#4AB84D": "Images/home-section-green.svg",
      "#FFA500": "Images/home-section-orange.svg",
    };

    const newImageSrc = imageMap[selectedColor];
    document.querySelector(".home-section-image img").src = newImageSrc;
    localStorage.setItem("selected-image", newImageSrc);

    event.target.parentElement
      .querySelectorAll(".colors-active")
      .forEach((element) => {
        element.classList.remove("colors-active");
      });
    event.currentTarget.classList.add("colors-active");
  });
});

// Dark Mode Theme
document.addEventListener("DOMContentLoaded", function () {
  let darkModeOn = document.getElementById("darkModeOn");
  let darkModeOff = document.getElementById("darkModeOff");
  let bodyElement = document.body;

  function toggleDarkMode(isDark) {
    if (isDark) {
      bodyElement.classList.add("dark");
      darkModeOn.classList.add("darkmode-active");
      darkModeOff.classList.remove("darkmode-active");
    } else {
      bodyElement.classList.remove("dark");
      darkModeOn.classList.remove("darkmode-active");
      darkModeOff.classList.add("darkmode-active");
    }

    localStorage.setItem("darkMode", isDark ? "on" : "off");
  }

  let darkModeState = localStorage.getItem("darkMode");
  if (darkModeState === "on") {
    toggleDarkMode(true);
  } else {
    toggleDarkMode(false);
  }

  darkModeOn.addEventListener("click", function (event) {
    event.preventDefault();
    toggleDarkMode(true);
  });

  darkModeOff.addEventListener("click", function (event) {
    event.preventDefault();
    toggleDarkMode(false);
  });
});

// Header Menu
document.querySelector(".header-menu").addEventListener("click", function () {
  const menuIcon = this.querySelector("i");
  const navbar = document.querySelector(".navbar");
  const isMenuOpen = navbar.style.transform === "translateX(0%)";
  const closeBtn = document.querySelector(".header-menu i");
  const bodyEle = document.body;

  if (isMenuOpen) {
    navbar.style.transform = "translateX(-100%)";
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
    closeBtn.style.position = "absolute";
    bodyEle.style.overflow = "auto";
  } else {
    navbar.style.transform = "translateX(0%)";
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
    closeBtn.style.position = "fixed";
    bodyEle.style.overflow = "hidden";
  }
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  nav: false,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    800: {
      items: 5,
    },
    1000: {
      items: 7,
    },
  },
});

// Scroll To Top Button

let scrollTopBtn = document.querySelector(".scroll-to-top button");

window.onscroll = function () {
  if (this.scrollY >= 200) {
    scrollTopBtn.classList.add("active");
  } else {
    scrollTopBtn.classList.remove("active");
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    700: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    740: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    868: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    940: {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
