// burger menu
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const body = document.querySelector('body');

  const onClickMobileMenu = event => {
    console.log(event.target);
    if (
      event.target.classList.contains('nav__link') ||
      event.target.classList.contains('mobile-backdrop')
    ) {
      toggleMenu();
    }
  };
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    body.classList.toggle('fixed');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', onClickMobileMenu);

  closeMenuBtn.addEventListener('click', e => {
    toggleMenu();
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
})();

// Main entry point
import { initBurger } from './burger/burger.js';
// Header highlighting
import { headerHighlighting } from './header-highlighting/header-highlighting.js';

// Subscribe
import { initSubscribe } from './subscribe/subscribe.js';
// Categories List
import './categories-list/categories-list.js';
//Modal Exercises
import './modal/modal-exercises.js';

import { getExerciseList } from './exerciseList/exerciseList';

function start() {
  initBurger();
  headerHighlighting();
  initSubscribe();
  getExerciseList();
}

// Execution starts here
start();
