export function headerHighlighting() {
  const headerItems = document.querySelectorAll('.header-nav-link');
  headerItems.forEach(el => {
    if (window.location.pathname.includes(el.dataset.page)) {
      el.classList.add('active');
    }
  });
}
