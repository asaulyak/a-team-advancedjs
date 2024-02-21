// Main entry point
import { initBurger } from './burger/burger.js';
import { markupCategories } from './categories-list/categories-list.js';

function start() {
  initBurger();
  markupCategories();
}

// Execution starts here
start();
