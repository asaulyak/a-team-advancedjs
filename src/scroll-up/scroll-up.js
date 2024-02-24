import throttle from 'lodash.throttle';
import { showElement, hideElement } from '../common/common';

export function initScrollUp() {
  const scrollUpBtn = document.querySelector('.scroll-up-button');
  if (window.location.pathname.includes('favorites')) {
    hideElement(scrollUpBtn);
    return;
  }
  // showElement(scrollUpBtn);
  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const onScroll = throttle(() => {
    if (window.scrollY >= 100) {
      scrollUpBtn.classList.remove('scroll-up-button--hidden');
      // showElement(scrollUpBtn);
    } else {
      scrollUpBtn.classList.add('scroll-up-button--hidden');
      // hideElement(scrollUpBtn);
    }
  }, 500);

  window.addEventListener('scroll', onScroll);
  scrollUpBtn.addEventListener('click', goToTop);
}
