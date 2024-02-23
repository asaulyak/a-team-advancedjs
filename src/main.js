import { initBurger } from './burger/burger.js';
import { headerHighlighting } from './header-highlighting/header-highlighting.js';
import { initSubscribe } from './subscribe/subscribe.js';
import { initScrollUp } from './scroll-up/scroll-up.js';
import { initModalExercises } from './modal/modal-exercises.js';
import { renderCategories } from './categories/categories.js';

function start() {
  initBurger();
  headerHighlighting();
  initSubscribe();
  initScrollUp();
  initModalExercises();
  renderCategories();
}

// Execution starts here
start();
