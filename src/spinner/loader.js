import { onSpinner, offSpinner } from './spinner';
import { hideElement, showElement } from '../common/common';
const bodyLoader = document.querySelector('.body-loader-container');

// showLoader
export function showLoader() {
  let homeLoader = document.querySelector('.home-loader-container');
  if (window.location.pathname.includes('favorites')) {
    homeLoader = document.querySelector('.favorites-loader-container');
  }

  if (!homeLoader) return;
  showElement(homeLoader);
  onSpinner(homeLoader.children[0]);
}

// stopLoader
export function stopLoader() {
  let homeLoader = document.querySelector('.home-loader-container');
  if (window.location.pathname.includes('favorites')) {
    homeLoader = document.querySelector('.favorites-loader-container');
  }
  if (!homeLoader) return;
  setTimeout(() => {
    hideElement(homeLoader);
    offSpinner(homeLoader.children[0]);
  }, 200);
}

// start page
export function closeLoader() {
  window.addEventListener('load', handleLoad);
}

function handleLoad() {
  setTimeout(() => {
    stopLoader(bodyLoader);
    hideElement(bodyLoader);
  }, 500);
  window.removeEventListener('load', handleLoad);
}
