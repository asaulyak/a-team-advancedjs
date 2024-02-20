
// burger menu
(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const body = document.querySelector('body');

    const onClickMobileMenu = (event) => {
        console.log(event.target)
      if (
        event.target.classList.contains("nav__link") ||
        event.target.classList.contains("mobile-backdrop")
      ) {
        toggleMenu();
      }
    };
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');
        body.classList.toggle('fixed');

    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener("click", onClickMobileMenu);

    closeMenuBtn.addEventListener('click', e => {
        toggleMenu();
    });
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
    });
  })();
  
  

// Main entry point
function start() {}

// Execution starts here
start();
