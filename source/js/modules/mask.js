import iMask from 'imask';

const tel = document.getElementById('tel');
const telModal = document.getElementById('telmodal');

document.addEventListener('DOMContentLoaded', () => {
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };

  iMask(tel, maskOptions);
  iMask(telModal, maskOptions);
});
