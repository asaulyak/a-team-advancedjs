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
  }, 300);
}

// create markup
function createMarkupLoader(name) {
  return `<!-- loader --><div class="${name}-loader-container">
  <span class="spinner " id="js-${name}-spinner"></span>
  </div>`;
}

// body loader

export function closeBodyLoader() {
  window.addEventListener('load', handleLoad);
}

function handleLoad() {
  //   const bodyLoader = document.querySelector('.body-loader-container');
  setTimeout(() => {
    stopLoader(bodyLoader);
    hideElement(bodyLoader);
  }, 500);
  window.removeEventListener('load', handleLoad);
}
