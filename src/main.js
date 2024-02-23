// Main entry point
import { initBurger } from './burger/burger.js';
// Header highlighting
import { headerHighlighting } from './header-highlighting/header-highlighting.js';

// Subscribe
import { initSubscribe } from './subscribe/subscribe.js';
// Subscribe
import { initFavoritesPage } from './favorites/favorites.js';
// Categories List
import './categories-list/categories-list.js';
//Modal Exercises
import './modal/modal-exercises.js';

// Scroll up button
import { initScrollUp } from './scroll-up/scroll-up.js';

import { renderExerciseList } from './exerciseList/exerciseList';

function start() {
  initBurger();
  headerHighlighting();
  initSubscribe();
  renderExerciseList(); // TODO: Move to the corresponding parent component
  // initScrollUp();
  initFavoritesPage();
}

// Execution starts here
start();
