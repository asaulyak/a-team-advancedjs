// Main entry point
import { initBurger } from './burger/burger.js';
// Header highlighting
import { headerHighlighting } from './header-highlighting/header-highlighting.js';

// Subscribe
import { initSubscribe } from './subscribe/subscribe.js';

function start() {
  initBurger();
  headerHighlighting();
  initSubscribe();
}

// Execution starts here
start();
