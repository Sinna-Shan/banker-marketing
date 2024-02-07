'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////
//selecting
console.log(document.documentElement); //selecting the whole document element
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); //selecting a single element
console.log(document.querySelectorAll('.section')); //selecting multiple elements

document.getElementById('section--1'); // with out the selector (./#)
console.log(document.getElementsByTagName('button'));
console.log(document.getElementsByClassName('btn'));

//creating and inserting
const message = document.createElement('div');
message.innerHTML = `we use cookies. <button class='btn btn--close-cookie'>Got it</button>`;
// message.classList.add('cookie-message')
// header.prepend(message)
// header.append(message.cloneNode(true))
header.append(message);
// header.before(message);
// header.after(message);

//delete element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function (event) {
    message.remove();
    // message.parentElement.removeChild(message);//old way DOM traversing
  });

//Styles
message.style.backgroundColor = '#37383d';
message.style.color = '#ffffff';
message.style.fontSize = '18px';
message.style.width = '100%';
message.style.textAlign = 'center';

// get styles
console.log(getComputedStyle(message).padding);
message.style.padding =
  Number.parseInt(getComputedStyle(message).padding) + 10 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orange');

// attribute
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);// get
console.log(logo.className);
logo.alt = 'beautiful minimalist logo' // set

//non standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company','bankist')

console.log(logo.src);
console.log(logo.getAttribute('src'));

//data attributes
console.log(logo.dataset.versionNumber);

//class
// logo.classList.add('')
// logo.classList.remove('')
// logo.classList.toggle('')
// logo.classList.contains('')