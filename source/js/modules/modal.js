let navBtn = document.querySelector('.main-nav__button-call');
let wrapper = document.querySelector('.wrapper');
let modal = document.querySelector('.modal');
let modalBtn = document.querySelector('.modal-button');


navBtn.addEventListener('click', function () {
  modal.classList.remove('modal-closed');
  modal.classList.add('modal-opened');
  wrapper.classList.remove('wrapper-closed');
  wrapper.classList.add('wrapper-opened');
  wrapper.classList.add('overlay');
});

modalBtn.addEventListener('click', function () {
  modal.classList.add('modal-closed');
  modal.classList.remove('modal-opened');
  wrapper.classList.add('wrapper-closed');
  wrapper.classList.remove('wrapper-opened');
  wrapper.classList.remove('overlay');
});

document.addEventListener('click', function (e) {
  const target = e.target;
  const itsTavModal = target === modal || modal.contains(target);
  const itsTavNavBtn = target === navBtn;
  const navMainActive = modal.classList.contains('wrapper-opened');

  if (!itsTavModal && !itsTavNavBtn && navMainActive) {
    modal.classList.add('modal-closed');
    modal.classList.remove('modal-opened');
  }
});

document.addEventListener('click', function (e) {
  const target = e.target;
  const itsTavModal = target === modal || modal.contains(target);
  const itsTavNavBtn = target === navBtn;
  const wrapperActive = wrapper.classList.contains('wrapper-opened');

  if (!itsTavModal && !itsTavNavBtn && wrapperActive) {
    wrapper.classList.add('wrapper-closed');
    wrapper.classList.remove('wrapper-opened');
    modal.classList.add('modal-closed');
    modal.classList.remove('modal-opened');
    wrapper.classList.remove('overlay');
  }
});
