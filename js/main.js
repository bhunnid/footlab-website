const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const heroSlides = document.querySelectorAll(".hero-slide");
const heroPrev = document.getElementById("heroPrev");
const heroNext = document.getElementById("heroNext");

let currentHeroIndex = 0;
let heroInterval;

function showHeroSlide(index) {
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    slide.setAttribute("aria-hidden", i === index ? "false" : "true");
  });
}

function nextHeroSlide() {
  currentHeroIndex = (currentHeroIndex + 1) % heroSlides.length;
  showHeroSlide(currentHeroIndex);
}

function prevHeroSlide() {
  currentHeroIndex = (currentHeroIndex - 1 + heroSlides.length) % heroSlides.length;
  showHeroSlide(currentHeroIndex);
}

function startHeroSlider() {
  if (heroSlides.length > 1) {
    heroInterval = setInterval(nextHeroSlide, 5000);
  }
}

function resetHeroSlider() {
  clearInterval(heroInterval);
  startHeroSlider();
}

if (heroSlides.length > 0) {
  showHeroSlide(currentHeroIndex);
  startHeroSlider();

  if (heroNext) {
    heroNext.addEventListener("click", () => {
      nextHeroSlide();
      resetHeroSlider();
    });
  }

  if (heroPrev) {
    heroPrev.addEventListener("click", () => {
      prevHeroSlide();
      resetHeroSlider();
    });
  }
}