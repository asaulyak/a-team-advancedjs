import throttle from 'lodash.throttle';
import { hideElement } from '../common/common';

export function initScrollUp() {
  const scrollUpBtn = document.querySelector('.scroll-up-button');
  if (window.location.pathname.includes('favorites')) {
    hideElement(scrollUpBtn);
    return;
  }
  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const onScroll = throttle(() => {
    if (window.scrollY >= 100) {
      scrollUpBtn.classList.remove('scroll-up-button--hidden');
    } else {
      scrollUpBtn.classList.add('scroll-up-button--hidden');
    }
  }, 500);

  window.addEventListener('scroll', onScroll);
  scrollUpBtn.addEventListener('click', goToTop);
}
