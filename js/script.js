window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    this.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-links li a").forEach((item) => {
  item.addEventListener("click", function () {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

const imageContainer = document.querySelector(".h-images");
const images = document.querySelectorAll(".h-images img");
let containerWidth;

document.addEventListener("DOMContentLoaded", () => {
  containerWidth = document.querySelector(".h-images-container").offsetWidth;
  updateCarousel();
});

let currentIndex = 0;

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  const translateValue = -currentIndex * containerWidth;
  imageContainer.style.transform = `translateX(${translateValue}px)`;
}

window.addEventListener("resize", () => {
  containerWidth = document.querySelector(".h-images-container").offsetWidth;
  updateCarousel();
});

// -------------------- AMENITIES SHOWCASE --------------------
const amenitiesData = [
  {
    title: "Sparkling Swimming Pools",
    description:
      "Enjoy refreshing dips in our meticulously maintained swimming pools.",
    images: ["img/pool1.jpg", "img/pool2.jpg"],
  },
  {
    title: "Lush Green Parks",
    description:
      "Relax and unwind in our beautifully landscaped parks and gardens.",
    images: ["img/park1.jpg", "img/park2.jpg"],
  },
  {
    title: "Fun Children's Playground",
    description:
      "Let your kids enjoy and play in our safe and engaging playground.",
    images: ["img/park.jpg", "img/court.jpg"],
  },
];

let currentAmenityIndex = 0;
const amenityTitleElement = document.getElementById("amenity-title");
const amenityDescriptionElement = document.getElementById(
  "amenity-description"
);
const amenitiesCarousel = document.querySelector(".amenities-carousel");
const imagesPerCycle = 2;

function loadAmenity(index) {
  const currentAmenity = amenitiesData[index];

  if (amenityTitleElement && amenityDescriptionElement && amenitiesCarousel) {
    amenityTitleElement.classList.add("fade-out");
    amenityDescriptionElement.classList.add("fade-out");
    amenitiesCarousel.classList.add("fade-out");

    setTimeout(() => {
      amenityTitleElement.textContent = currentAmenity.title;
      amenityDescriptionElement.textContent = currentAmenity.description;

      amenitiesCarousel.innerHTML = "";
      for (
        let i = 0;
        i < Math.min(imagesPerCycle, currentAmenity.images.length);
        i++
      ) {
        const img = document.createElement("img");
        img.src = currentAmenity.images[i];
        img.alt = currentAmenity.title;
        amenitiesCarousel.appendChild(img);
      }

      amenityTitleElement.classList.remove("fade-out");
      amenityDescriptionElement.classList.remove("fade-out");
      amenitiesCarousel.classList.remove("fade-out");
    }, 500);
  }
}

function nextAmenity() {
  currentAmenityIndex = (currentAmenityIndex + 1) % amenitiesData.length;
  loadAmenity(currentAmenityIndex);
}

function prevAmenity() {
  currentAmenityIndex =
    (currentAmenityIndex - 1 + amenitiesData.length) % amenitiesData.length;
  loadAmenity(currentAmenityIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  loadAmenity(currentAmenityIndex);
});

document.addEventListener("DOMContentLoaded", () => {
  loadAmenity(currentAmenityIndex);
});

// -------------------- TESTIMONIAL SLIDER --------------------
const testimonials = [
  {
    text: "Living at Sonora Garden Residences has been a dream come true! The amenities are fantastic, and the community is so welcoming.",
    author: "- Maria Santos",
  },
  {
    text: "I love the convenience of having Robinsons Place Las Piñas right next door. It makes everyday errands so much easier.",
    author: "- John Dela Cruz",
  },
  {
    text: "The resort-like atmosphere truly makes you feel like you're on vacation every day. Highly recommended!",
    author: "- Elena Rodriguez",
  },
  {
    text: "The management is responsive and helpful. They really care about the residents.",
    author: "- Ben Tan",
  },
];

const testimonialElement = document.getElementById("testimonial");
const authorElement = document.getElementById("author");
let currentTestimonialIndex = 0;

function showTestimonial() {
  if (testimonialElement && authorElement) {
    testimonialElement.classList.remove("fade-in");
    testimonialElement.classList.add("fade-out");
    authorElement.classList.remove("fade-in");
    authorElement.classList.add("fade-out");

    setTimeout(() => {
      testimonialElement.textContent =
        testimonials[currentTestimonialIndex].text;
      authorElement.textContent = testimonials[currentTestimonialIndex].author;
      testimonialElement.classList.remove("fade-out");
      testimonialElement.classList.add("fade-in");
      authorElement.classList.remove("fade-out");
      authorElement.classList.add("fade-in");
      currentTestimonialIndex =
        (currentTestimonialIndex + 1) % testimonials.length;
    }, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showTestimonial();
  setInterval(showTestimonial, 3000);
});
