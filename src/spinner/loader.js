import { onSpinner, offSpinner } from './spinner';
import { hideElement } from '../common/common';

export function showLoader(elementRef) {
  if (!elementRef) return;
  elementRef.style.overflow = 'hidden';

  elementRef.insertAdjacentHTML(
    'beforeend',
    createMarkupLoader(elementRef.nodeName.toLowerCase())
  );

  const selector = `js-${elementRef.nodeName.toLowerCase()}-spinner`;

  onSpinner(document.getElementById(selector));
}

export function stopLoader(elementRef) {
  if (!elementRef) return;
  offSpinner(elementRef.children[0]);
}

function createMarkupLoader(name) {
  return `<!-- loader --><div class="loader-container">
  <span class="spinner " id="js-${name}-spinner"></span>
  </div>`;
}

export function closeBodyLoader() {
  window.addEventListener('load', handleLoad);
}

function handleLoad() {
  const bodyLoader = document.querySelector('.body-loader-container');
  setTimeout(() => {
    stopLoader(bodyLoader);
    hideElement(bodyLoader);
  }, 500);
  window.removeEventListener('load', handleLoad);
}
