import IMask from 'imask';

document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.querySelector('.tel');
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  IMask (inputElement, maskOptions);
});
