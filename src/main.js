// Main entry point
import { initBurger } from './burger/burger.js';
// Subscribe
import { initSubscribe } from './subscribe/subscribe.js';
// Categories List
import './categories-list/categories-list.js';
//Modal Exercises
import './modal/modal-exercises.js';

function start() {
  initBurger();
  initSubscribe();
}

// Execution starts here
start();
