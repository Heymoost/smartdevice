let link = document.querySelector('.link');
let contacts = document.querySelector('.contacts');


link.classList.remove('link--closed--nojs');
contacts.classList.remove('contacts--closed--nojs');
link.classList.add('accord--closed');
contacts.classList.add('accord--closed');

document.querySelectorAll('.btn').forEach(function (target) {
  target.addEventListener('click', function (event) {
    document.querySelectorAll('.accord').forEach(function (tab) {
      tab.classList.remove('accord--oppened');
      tab.classList.add('accord--closed');
    });
    event.target.closest('.accord').classList.add('accord--oppened');
    event.target.closest('.accord').classList.remove('accord--closed');
  });
});
