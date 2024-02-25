import { onSpinner, offSpinner } from './spinner';
import { hideElement, showElement } from '../common/common';
const bodyLoader = document.querySelector('.body-loader-container');

// showLoader
export function showLoader() {
  if (!bodyLoader) return;
  showElement(bodyLoader);
  onSpinner(bodyLoader.children[0]);
}

// stopLoader
export function stopLoader() {
  if (!bodyLoader) return;
  setTimeout(() => {
    hideElement(bodyLoader);
    offSpinner(bodyLoader.children[0]);
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
