const subscribeForm = document.querySelector('.subscribe__form');

function clearForm(e) {
  e.preventDefault();
  // Очищаем поля формы
  e.target.reset();
}
subscribeForm.addEventListener('submit', clearForm);
