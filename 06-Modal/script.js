'use strict';
/*------------------------------------------------Note Before Starting-----------------------------------
The codes in this file may contain same variable names multiple times
so if you are going through this codes please uncomment any one seection first that is inside the multiple line comments
and comment it down again to view another section 
---------------------------------------------------------------------------------------------------------*/

//The pop-up box modal project

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

// For opening the pop-up box
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// For closing the pop-up box
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

// Close the pop-up on clicking the cross
btnCloseModal.addEventListener('click', closeModal);

// close the pop-up on clicking around the pop-up
overlay.addEventListener('click', closeModal);

// Closes the pop-up while pressing the escape button
document.addEventListener('keyup', function (k) {
  if (k.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
