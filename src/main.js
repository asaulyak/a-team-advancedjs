// Main entry point
import { initBurger } from './burger/burger.js';
// filter_panels
import './partials/filter_panels/filter_panels.js';
// Subscribe
import { initSubscribe } from './subscribe/subscribe.js';

function start() {
  initBurger();
  initSubscribe();
}

// Execution starts here
start();
