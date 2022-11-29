const readBtn = document.querySelector('.read-more');
const moreText = document.querySelector('.more');
//   if (moreText.style.display === 'none') {
//     console.log('none');
//   } else {
//   console.log('shown');
//   }

function readMoreLess() {
  if (readBtn.innerText.includes('MORE')) {
    moreText.classList.toggle('is-hidden');
    readBtn.innerHTML = '<< Read less';
  } else {
    moreText.classList.toggle('is-hidden');
    readBtn.innerHTML = 'Read more >>';
  }
}

readBtn.addEventListener('click', readMoreLess);

// () => {
//   window.matchMedia('(max-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     moreText.classList.toggle('is-hidden');
//     readBtn.classList.toggle('is-hidden');
//   });
// };

// console.log(window.screen.width);
if (window.screen.width >= 768) {
  //   //   console.log('big screen');
  moreText.classList.remove('is-hidden');
  readBtn.classList.add('is-hidden');
}
// } else {
//   moreText.classList.add('is-hidden');
//   readBtn.classList.remove('is-hidden');
// }
