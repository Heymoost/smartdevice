let navBtn = document.querySelector('.main-nav__button-call');
let wrapper = document.querySelector('.wrapper');
let modal = document.querySelector('.modal');
let modalBtn = document.querySelector('.modal__button');
let inputName = document.getElementById('name');

function openModal() {
  modal.classList.remove('modal--closed');
  modal.classList.add('modal--opened');
  wrapper.classList.remove('wrapper--closed');
  wrapper.classList.add('wrapper--opened');
  wrapper.classList.add('overlay');
  wrapper.setAttribute('inert', 0);
}

function closeModal() {
  modal.classList.add('modal--closed');
  modal.classList.remove('modal--opened');
  wrapper.classList.add('wrapper--closed');
  wrapper.classList.remove('wrapper--opened');
  wrapper.classList.remove('overlay');
  wrapper.removeAttribute('inert');
}

function openModalTarget(e) {
  const target = e.target;
  const itsTavModal = target === modal || modal.contains(target);
  const itsTavNavBtn = target === navBtn;
  const navMainActive = modal.classList.contains('wrapper--opened');

  if (!itsTavModal && !itsTavNavBtn && navMainActive) {
    modal.classList.add('modal--closed');
    modal.classList.remove('modal--opened');
  }
}

function closeModalTarget(e) {
  const target = e.target;
  const itsTavModal = target === modal || modal.contains(target);
  const itsTavNavBtn = target === navBtn;
  const wrapperActive = wrapper.classList.contains('wrapper--opened');

  if (!itsTavModal && !itsTavNavBtn && wrapperActive) {
    wrapper.classList.add('wrapper--closed');
    wrapper.classList.remove('wrapper--opened');
    modal.classList.add('modal--closed');
    modal.classList.remove('modal--opened');
    wrapper.classList.remove('overlay');
    wrapper.removeAttribute('inert');
  }
}

navBtn.addEventListener('click', () => {
  openModal();
  inputName.focus();
});

modalBtn.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('click', (e) => {
  openModalTarget(e);
});

document.addEventListener('click', (e) => {
  closeModalTarget(e);
});
