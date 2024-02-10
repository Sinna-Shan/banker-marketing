'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window
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
//page navigation
// document.querySelectorAll('.nav__link').forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//   });
// });
// 1. add event listener to common parent element
// 2.what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //matching
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//smooth scroll to section 1
btnScrollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);

  console.log('current scroll (x/y)', window.scrollX, window.scrollY);
  //scrooling
  // window.scrollTo({
  //   left:s1Coords.left + window.scrollX,
  //   top:s1Coords.top + window.scrollY,
  //   behavior: 'smooth'
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

// tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // gard clause
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active')); // remove active from all tabs
  clicked.classList.add('operations__tab--active');

  // Activate content area
  tabsContent.forEach(c=> c.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});
/*
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




// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('you are reading the heading')
// }

// h1.addEventListener('mouseenter', alertH1);
// setTimeout(()=> h1.removeEventListener('mouseenter', alertH1),3000)

const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
console.log(randomColor());


const h1 = document.querySelector('h1');

// going downwards : selecting child elements
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); // all the nodes in the h1 element
console.log(h1.children); // all the direct child elements in the h1 element
h1.firstElementChild.style.color = '#fff';
h1.lastElementChild.style.color = 'orangered';

// going upwards : selecting parent elements
console.log(h1.parentNode); //direct parent node
console.log(h1.parentElement); //direct parent element
h1.closest('.header').style.background = `var(--gradient-secondary)`; // closest parent element with the specified selector

//going sideways : selecting sibling elements
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// get all the siblings
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/
