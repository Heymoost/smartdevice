let more = document.querySelector('.company__more');
let btnMore = document.querySelector('.company__button');
let infoMobile = document.querySelector('.company__mobile');


function openMore() {
  if (btnMore.classList.contains('closed')) {
    btnMore.classList.remove('closed');
    btnMore.classList.add('oppened');
    more.classList.remove('company__more-none');
    btnMore.innerText = 'Свернуть';
  } else {
    btnMore.classList.add('closed');
    btnMore.classList.remove('oppened');
    more.classList.add('company__more-none');
    btnMore.innerText = 'Подробнее';
  }
}

function closedMore() {
  if (infoMobile.classList.contains('company__mobile-closed')) {
    infoMobile.classList.remove('company__mobile-closed');
    infoMobile.classList.add('company__mobile-oppened');
  } else {
    infoMobile.classList.remove('company__mobile-oppened');
    infoMobile.classList.add('company__mobile-closed');
  }
}

btnMore.addEventListener('click', function () {
  openMore();
});

btnMore.addEventListener('click', function () {
  closedMore();
});
