import { initBurger } from './burger/burger.js';

// filter_panels
import { getFilterPanels, setSubtitle } from './filter_panels/filter_panels.js';

// Header highlighting
import { headerHighlighting } from './header-highlighting/header-highlighting.js';

// Subscribe
import { initSubscribe } from './subscribe/subscribe.js';
import { initScrollUp } from './scroll-up/scroll-up.js';
import { initModalExercises } from './modal/modal-exercises.js';
import { renderCategories } from './categories/categories.js';

function start() {
  getFilterPanels();
  initBurger();
  headerHighlighting();
  initSubscribe();
  initScrollUp();
  initModalExercises();
  renderCategories();
}

// Execution starts here
start();
