let link = document.querySelector('.link');
let linkBtn = document.querySelector('.link-button');
let contacts = document.querySelector('.contacts');
let contactsBtn = document.querySelector('.contacts-button');

link.classList.remove('link-closed--nojs');
contacts.classList.remove('contacts-closed--nojs');

linkBtn.addEventListener('click', function () {
  if (contacts.classList.contains('contacts-oppened')) {
    contacts.classList.add('contacts-closed');
    contacts.classList.remove('contacts-oppened');
    link.classList.remove('link-closed');
    link.classList.add('link-oppened');
  } else {
    if (link.classList.contains('link-oppened')) {
      link.classList.remove('link-oppened');
      link.classList.add('link-closed');
    } else {
      link.classList.add('link-oppened');
      link.classList.remove('link-closed');
    }
  }
});


contactsBtn.addEventListener('click', function () {
  if (link.classList.contains('link-oppened')) {
    link.classList.add('link-closed');
    link.classList.remove('link-oppened');
    contacts.classList.remove('contacts-closed');
    contacts.classList.add('contacts-oppened');
  } else {
    if (contacts.classList.contains('contacts-oppened')) {
      contacts.classList.remove('contacts-oppened');
      contacts.classList.add('contacts-closed');
    } else {
      contacts.classList.add('contacts-oppened');
      contacts.classList.remove('contacts-closed');
    }
  }
});

