// JavaScript para alternar la visibilidad del menú desplegable
var menuToggle = document.getElementById('menu-checkbox');
var menu = document.querySelector('.menu');

menuToggle.addEventListener('change', function() {
  if (menuToggle.checked) {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
});

let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
