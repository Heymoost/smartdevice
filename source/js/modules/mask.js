import iMask from 'imask';

document.addEventListener('DOMContentLoaded', () => {

  const tel = document.getElementById('tel');
  const telModal = document.getElementById('telmodal');
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  iMask(tel, maskOptions);
  iMask(telModal, maskOptions);
});
