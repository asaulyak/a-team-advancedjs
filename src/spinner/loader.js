import { onSpinner, offSpinner } from './spinner';
import { hideElement, showElement } from '../common/common';
const bodyLoader = document.querySelector('.body-loader-container');

const homeLoader = document.querySelector('.home-loader-container');

// showLoader
export function showLoader() {
  if (!homeLoader) return;
  showElement(homeLoader);
  onSpinner(homeLoader.children[0]);
}

// stopLoader
export function stopLoader() {
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
