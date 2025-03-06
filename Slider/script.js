let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

function changeSlide(step) {
    currentIndex += step;
    updateSlider();
}

function goToSlide(index) {
    currentIndex = index;
    updateSlider();
}

slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.toggle("block", index === currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle("block", index === currentIndex);
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === slides.length - 1;
}
updateSlider();
