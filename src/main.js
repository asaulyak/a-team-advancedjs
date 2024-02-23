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
//Favorites
import './favorites/favorites.js';

function start() {
  initBurger();
  headerHighlighting();
  initSubscribe();
}

// Execution starts here
start();
