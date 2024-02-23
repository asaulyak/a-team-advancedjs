import throttle from 'lodash.throttle';
import { showElement, hideElement } from '../common/common';

export function initScrollUp() {
  const scrollUpBtn = document.querySelector('.scroll-up-button');

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const onScroll = throttle(() => {
    if (window.scrollY >= 100) {
      showElement(scrollUpBtn);
    } else {
      hideElement(scrollUpBtn);
    }
  }, 500);

  window.addEventListener('scroll', onScroll);
  scrollUpBtn.addEventListener('click', goToTop);
}
