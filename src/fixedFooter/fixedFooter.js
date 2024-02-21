import throttle from 'lodash.throttle';

// settings
const settings = {
  bodyRef: document.querySelector('body'),
  footerRef: document.querySelector('#footer'),
  fixedClass: 'footer-fixed',
};
const { bodyRef, footerRef, fixedClass } = settings;

// resizeObserver
const resizeObserver = new ResizeObserver(
  throttle(entries => {
    const windowHeight = window.innerHeight;
    const bodyHeight = entries[0].contentRect.height;
    const footerHeight = Math.max(
      footerRef.scrollHeight,
      footerRef.offsetHeight
    );

    const diff = windowHeight - bodyHeight - footerHeight;

    const presentFixedClass = footerRef.classList.contains(fixedClass);

    if (presentFixedClass && diff > 0) {
      return;
    }
    if (presentFixedClass && diff <= 0) {
      footerRef.classList.remove(fixedClass);
      return;
    }

    if (diff + footerHeight > 0) {
      footerRef.classList.add(fixedClass);
      return;
    }

    footerRef.classList.remove(fixedClass);
  }, 500)
);

// initFunction
export function initFixedFooter() {
  resizeObserver.observe(bodyRef);
}
