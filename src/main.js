// Main entry point
import { initBurger } from './burger/burger.js';
// Fixed footer
import { initFixedFooter } from './fixedFooter/fixedFooter.js';
// Subscribe
import { initSubscribe } from './subscribe/subscribe.js';

function start() {
  initBurger();
  initFixedFooter();
  initSubscribe();
}

// Execution starts here
start();
