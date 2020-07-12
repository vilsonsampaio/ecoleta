const modal = document.querySelector('#modal');
const buttonSearch = document.querySelector('#page-home main a');

buttonSearch.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.remove('hide');
})

const close = document.querySelector("#modal .header a");

close.addEventListener('click', (event) => {
  event.preventDefault();
  modal.classList.add('hide');
})