export function headerHighlighting() {
  const headerItems = document.querySelectorAll('.header-nav-link');
  let isMainPage = true;
  headerItems.forEach(el => {
    if (window.location.pathname.includes(el.dataset.page)) {
      el.classList.add('active');
      isMainPage = false;
    }
  });
  if (isMainPage) {
    const homeLinks = document.querySelectorAll(
      ".header-nav-link[data-page='home']"
    );
    homeLinks.forEach(el => el.classList.add('active'));
  }
}
