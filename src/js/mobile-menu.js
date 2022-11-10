(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenuLink = document.querySelectorAll('.navigation__link');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.classList.toggle('is-hidden');
    closeMenuBtn.classList.toggle('is-hidden');
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  mobileMenuLink.forEach(mobileMenuLink =>
    mobileMenuLink.addEventListener('click', e => {
      mobileMenu.classList.remove('is-open');
      openMenuBtn.classList.toggle('is-hidden');
      bodyScrollLock.enableBodyScroll(document.body);
    })
  );

  // const closeMenu = () => {
  //   mobileMenu.classList.remove('is-open');
  // };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  // mobileMenuLink.addEventListener('click', closeMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
