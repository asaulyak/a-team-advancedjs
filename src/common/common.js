const CLASSES = Object.freeze({
  hidden: 'visually-hidden',
});

const showElement = el => {
  el?.classList.remove(CLASSES.hidden);
};

const hideElement = el => {
  el?.classList.add(CLASSES.hidden);
};

export { CLASSES, hideElement, showElement };
