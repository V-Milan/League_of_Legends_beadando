const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  navMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  menuBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);


document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    menuBtn.textContent = '☰';
  });
});