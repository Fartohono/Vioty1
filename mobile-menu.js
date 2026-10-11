
const menuButton = document.querySelector('.header-menu');
const header = document.querySelector('.header');
const menuIcon = document.querySelector('.header-mobile');
const overlay = document.querySelector('.overlay');

function closeMenu() {
  header.classList.remove('is-open');
  document.body.classList.remove('no-scroll');

  menuIcon.src = './Images/menu_40px.png';
  menuIcon.alt = 'Відкрити меню';
}

menuButton.addEventListener('click', () => {
  const isOpen = header.classList.toggle('is-open');

  document.body.classList.toggle('no-scroll', isOpen);

  if (isOpen) {
    menuIcon.src = './Images/close_40px.png';
    menuIcon.alt = 'Закрити меню';
  } else {
    closeMenu();
  }
});

overlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && header.classList.contains('is-open')) {
    closeMenu();
  }
});
