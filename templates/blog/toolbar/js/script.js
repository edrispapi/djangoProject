// Toolbar functionality
const menuIcon = document.querySelector('.menu-icon');
const toolbar = document.querySelector('.toolbar');

menuIcon.addEventListener('click', () => {
  toolbar.classList.toggle('active');
});