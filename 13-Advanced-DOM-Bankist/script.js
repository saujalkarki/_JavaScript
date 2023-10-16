'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnLearnMore = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnLearnMore.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// page navigation
// document.querySelectorAll('.nav__link').forEach(function (values) {
//   values.addEventListener('click', function (e) {
//     e.preventDefault();

//     document
//       .querySelector(`${this.getAttribute('href')}`)
//       .scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.className === 'nav__link') {
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  }
});

// tabs.forEach(function (value) {
//   value.classList.remove('operations__tab--active');
//   value.addEventListener('click', function () {
//     value.classList.add('operations__tab--active');
//   });
// });

// Event Deligation
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard Clause
  if (!clicked) {
    return;
  }
  // active tab
  tabs.forEach(function (value) {
    value.classList.remove('operations__tab--active');
  });
  clicked.classList.add('operations__tab--active');

  // active content
  tabsContent.forEach(function (value) {
    value.classList.remove('operations__content--active');
  });

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation

const handleOver = function (evnt) {
  if (evnt.target.classList.contains('nav__link')) {
    const clickedLink = evnt.target;
    const sibl = clickedLink.closest('.nav').querySelectorAll('.nav__link');
    const logo = clickedLink.closest('.nav').querySelector('img');

    sibl.forEach(value => {
      if (value !== clickedLink) {
        value.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleOver(e, 0.5);
// });
// nav.addEventListener('mouseout', function (v) {
//   handleOver(v, 1);
// });

// alternative
nav.addEventListener('mouseover', handleOver.bind(0.5));
nav.addEventListener('mouseout', handleOver.bind(1));

// sticking the nav bar

// window.addEventListener('scroll', function (e) {
//   // alert('done');
//   console.log('done');
// });
// const obsCallback = function (entries, observer) {
//   entries.forEach(values => {
//     console.log(values);
//   });
// };
// const obsoptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsoptions);

// observer.observe(section1);
// -------------
const navHeight = nav.getBoundingClientRect().height;

const observer = new IntersectionObserver(
  function (thEntries) {
    const [entry] = thEntries;
    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  }
);

observer.observe(document.querySelector('header'));

// revealing on scroll
const selSec = document.querySelectorAll('.section');

const obsFunc = function (thEntries, observer) {
  const [entry] = thEntries;
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const obsOpts = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(obsFunc, obsOpts);

selSec.forEach(function (value) {
  sectionObserver.observe(value);
  value.classList.add('section--hidden');
});

// lazy loading images
// const imgTargets = document.querySelectorAll('.features__img');

// const imgCbFunc = (thEntries, observer) => {
//   const [entry] = thEntries;
//   console.log(entry);
//   if (!entry.isIntersecting) {
//     return;
//   }
//   entry.target.classList.remove('lazy-img');

//   observer.unobserve(entry.target);
// };

// const imgObj = {
//   root: null,
//   threshold: 1.1,
//   // rootMargin:60,
// };

// const imgObserver = new IntersectionObserver(imgCbFunc, imgObj);

// imgTargets.forEach(function (value) {
//   imgObserver.observe(value);
// });

const imgTargets = document.querySelectorAll('img[data-src]');

const imgClbFunc = (thEntries, observer) => {
  const [entry] = thEntries;
  if (!entry.isIntersecting) {
    return;
  }
  // replace the source  with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgOpts = {
  root: null,
  threshold: 0.2,
  rootMargin: '-200px',
};

const imgObserver = new IntersectionObserver(imgClbFunc, imgOpts);

imgTargets.forEach(function (value) {
  imgObserver.observe(value);
});

// slider
const slides = document.querySelectorAll('.slide');
const sliders = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotsSelection = document.querySelector('.dots');

let curSlide = 0;

const maxSlide = slides.length;
const minSlide = 0;

const dots = function () {
  slides.forEach(function (_, key) {
    dotsSelection.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${key}" ></button>`
    );
  });
};

const activeDots = function (slideNum) {
  document.querySelectorAll('.dots__dot').forEach(function (value) {
    value.classList.remove('dots__dot--active');
  });

  document
    .querySelector(`.dots__dot[data-slide="${slideNum}"]`)
    .classList.add('dots__dot--active');
};

// sliders.style.transform = 'scale(0.4) translateX(-1000px)';
// sliders.style.overflow = 'visible';

const goToSlide = slide => {
  slides.forEach(function (value, keys) {
    value.style.transform = `translateX(${100 * (keys - slide)}%)`;
  });
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activeDots(curSlide);
};

const previousSlide = function () {
  if (curSlide === minSlide) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
  activeDots(curSlide);
};

(function () {
  dots();
  activeDots(0);
  goToSlide(0);
})();

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', previousSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    previousSlide();
  }
  e.key === 'ArrowRight' && nextSlide();
});

dotsSelection.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);

    activeDots(slide);
  }
});

// document.addEventListener('DOMContentLoaded', function (e) {
//   // console.log('HTML and DOM Tree', e);
// });

// window.addEventListener('load', function (e) {
//   // console.log('page Loaded successfully', e);
// });

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

// btnRight.addEventListener('click', function (e) {
//   slides.forEach((value, keys) => {
//     const inputString = value.style.transform;

//     // Use a regular expression to extract the number
//     const regex = /[-+]?\d+(\.\d+)?/g;
//     const matches = inputString.match(regex);

//     // Check if there are matches and parse the number
//     if (matches) {
//       const number = parseFloat(matches[0]);
//       value.style.transform = `translateX(${number - 100}%)`;
//     } else {
//       console.log('No number found in the input string.');
//     }
//   });
// });

// btnLeft.addEventListener('click', function (e) {
//   slides.forEach((value, keys) => {
//     const inputString = value.style.transform;

//     // Use a regular expression to extract the number
//     const regex = /[-+]?\d+(\.\d+)?/g;
//     const matches = inputString.match(regex);

//     // Check if there are matches and parse the number
//     if (matches) {
//       const number = parseFloat(matches[0]);
//       value.style.transform = `translateX(${number + 100}%)`;
//     } else {
//       console.log('No number found in the input string.');
//     }
//   });
// });
/*
const ha = document.querySelector('h1');

console.log(ha);
console.log(ha.querySelectorAll('.highlight'));
console.log(ha.childNodes);
console.log(ha.children);
console.log(ha.firstChild);
console.log(ha.lastChild);
console.log(ha.firstElementChild);
console.log((ha.firstElementChild.style.color = 'red'));
console.log((ha.lastElementChild.style.color = 'white'));

console.log(ha.parentNode);
console.log(ha.parentElement);

ha.closest('.header').style.background = 'var(--gradient-secondary)';
console.log(ha.closest('.header'));

ha.closest('h1').style.background = 'green';

console.log(ha.previousElementsSiblings);
console.log(ha.nextElementSibling);
console.log(ha.previousSibling);
console.log(ha.nextSibling);

console.log(ha.parentElement.children);

[...ha.parentElement.children].forEach(function (value) {
  console.log(value);
  if (value !== ha) {
    value.style.background = 'black';
  }
});
*/

/*
btnLearnMore.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log(window);
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // console.log(window);
  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// const h1 = document.querySelector('h1');
// const fh1 = function (e) {
//   alert('Congratulations on the enter');
// };

// h1.addEventListener('mouseenter', fh1);

// // h1.onmouseenter = function (e) {
// //   alert('Congratulations on the enter');

// setTimeout(function () {
//   return h1.removeEventListener('mouseenter', fh1);
// }, 3000);

// const smoothScroll = function (from, to) {
//   document.querySelector(`${from}`).addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(`${to}`).scrollIntoView({ behavior: 'smooth' });
//   });
// };

// smoothScroll('#n1', '#section--1');
// smoothScroll('#n2', '#section--2');
// smoothScroll('#n3', '#section--3');

// rgb(255, 255, 255);
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);
    // e.stopPropagation();
  },
  true
);

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
*/

/*
// selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');

console.log(allSection);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');

console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'we use cookies for improved functionality and analytics.';
message.innerHTML =
  'we use cookies for improved functionality and analytics. <button class= "btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// header.insertAdjacentHTML(
//   'afterBegin',
//   '<div class="cookie-message">   We use Cookie for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button></div>'
// );

// styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'blue');

// attribultes
const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);
console.log(logo.id);

logo.alt = 'very good';

logo.setAttribute('designer', 'Jonas_S');
console.log(logo.getAttribute('designer'));
logo.setAttribute('data-version-number', '3.0');

// data attribute
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// not to use this
logo.ClassName = 'jonas';
*/
