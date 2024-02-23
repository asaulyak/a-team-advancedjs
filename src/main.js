import { initBurger } from './burger/burger.js';
import { headerHighlighting } from './header-highlighting/header-highlighting.js';
import { initSubscribe } from './subscribe/subscribe.js';
import { initScrollUp } from './scroll-up/scroll-up.js';
import { renderExerciseList } from './exerciseList/exerciseList';
import { initModalExercises } from './modal/modal-exercises.js';

function start() {
  initBurger();
  headerHighlighting();
  initSubscribe();
  renderExerciseList(); // TODO: Move to the corresponding parent component
  initScrollUp();
  initModalExercises();
}

// Execution starts here
start();
