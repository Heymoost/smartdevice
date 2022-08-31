import iMask from 'imask';

document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.getElementById('tel');
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  iMask(inputElement, maskOptions);
});
