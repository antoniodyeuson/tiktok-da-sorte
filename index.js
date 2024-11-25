// Seletores
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Dimensões do slide
const slideWidth = slides[0].getBoundingClientRect().width;

// Função para posicionar os slides no container
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// Estado inicial
let currentSlide = 0;

// Função para mover o carrossel
const moveToSlide = (track, currentSlide, targetSlide) => {
  const targetPosition = targetSlide.style.left;
  track.style.transform = `translateX(-${targetPosition})`;
};

// Eventos dos botões
nextButton.addEventListener("click", () => {
  const targetSlide = currentSlide + 1 < slides.length ? slides[currentSlide + 1] : slides[0];
  currentSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
  moveToSlide(track, currentSlide, targetSlide);
});

prevButton.addEventListener("click", () => {
  const targetSlide = currentSlide - 1 >= 0 ? slides[currentSlide - 1] : slides[slides.length - 1];
  currentSlide = currentSlide - 1 >= 0 ? currentSlide - 1 : slides.length - 1;
  moveToSlide(track, currentSlide, targetSlide);
});
