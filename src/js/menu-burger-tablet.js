 (() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open-tablet]'),
    closeMenuBtn: document.querySelector('[data-menu-close-tablet]'),
    menu: document.querySelector('[data-menu-tablet]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.tablet-list'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
  function removeMenu() {
    refs.menu.classList.remove('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();