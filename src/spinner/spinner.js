export const hiddenStyle = 'visually-hidden';

/**
 * @example
 * HTML
 * <span  class="spinner visually-hidden" id="js-spinner"></span>
 *
 *JS
 *const spinner = document.querySelector('#js-spinner');
 *
 *onSpiner(spinner) -> show animation
 */
export function onSpinner(spinnerRef) {
  if (!spinnerRef) return;
  spinnerRef.classList.remove(hiddenStyle);
}

/**
 * @example
 * HTML
 * <span  class="spinner visually-hidden" id="js-spinner"></span>
 *
 *JS
 *const spinner = document.querySelector('#js-spinner');
 *
 *offSpiner(spinner) -> hide animation
 */
export function offSpinner(spinnerRef) {
  if (!spinnerRef) return;
  spinnerRef.classList.add(hiddenStyle);
}
