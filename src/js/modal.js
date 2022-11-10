import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const modalBckdrp = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const servicesOpenBtn = document.querySelector('.services__button');
const closeModalBtn = document.querySelector('.js-close-modal');

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

servicesOpenBtn.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);
modalBckdrp.addEventListener('click', onBackdropClick);

// при открытиии модалки
function onOpenModal(event) {
  event.preventDefault();
  modalBckdrp.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscKeyPress);
  disableBodyScroll(modal);
}
// при закрытии модалки
function onCloseModal() {
  modalBckdrp.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
  enableBodyScroll(modal);
}
