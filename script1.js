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
