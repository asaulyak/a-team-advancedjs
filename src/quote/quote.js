import { storage } from '../storage/storage.js';
import { getQuote } from '../api/api.js';
import { showError } from '../toast/toast.js';

const TODAY_KEY = 'today';
const QUOTE_KEY = 'quote-of-the-day';

export async function renderQuote() {
  const quoteBlockContainer = document.querySelector('#quoteContainer');

  if (!quoteBlockContainer) {
    return;
  }
  // check page
  const mainPage = !window.location.pathname.includes('favorites');

  const quote = await getQuoteText();
  const markup = createQuoteMarkup(quote.quote, quote.author, mainPage);
  quoteBlockContainer.insertAdjacentHTML('afterbegin', markup);
}

async function getQuoteText() {
  const lastDayStored = storage.get(TODAY_KEY) ?? '';
  let quote = storage.get(QUOTE_KEY) ?? '';

  const today = getTodayFormatted();

  if (lastDayStored !== today || !quote) {
    try {
      quote = await getQuote();
      storage.set(QUOTE_KEY, quote);
      storage.set(TODAY_KEY, today);
    } catch (error) {
      showError(error.message);
    }
  }

  return quote;
}

function getTodayFormatted() {
  const today = new Date(Date.now());
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  return `${day}/${month}/${year}`;
}

function createQuoteMarkup(quote, author, mainPage) {
  return `    <!-- quote -->
      <div class="daily-quote-container">
        <div class="icon-circle">
          <svg class="icon-svg" width="18" height="18">
            <use href="./image/icons.svg#icon-pedastrian"></use>
          </svg>
        </div>

        <div class="quote-thumb">
          <div class="quote-tittle-box">
            <h2 id="quote" class="daily-quote-title">Quote of the day</h2>
            <svg class="commas-svg">
              <use href="./image/icons.svg#icon-inverted-commas"></use>
            </svg>
          </div>
          <div class="quote-wrapper">
          <blockquote class="blockquote" cite="https://your-energy.b.goit.study/api/quote">
          <p
            class="quote-text">${quote}
          </p>
          <footer class="quote-author">${author} </footer>
        </blockquote></div>
        </div>
      </div>
      <!-- image -->
      <div class="image-container">
        <picture>
          <source
            srcset="
              ${mainPage ? './image/exercise/exercise-image-desktop.webp' : './image/favorites/img-desktop.webp'}   1x,
              ${mainPage ? './image/exercise/exercise-image-desktop@2x.webp' : './image/favorites/img-desktop@2x.webp'} 2x
            "
            media="(min-width: 1440px)"
            type="image/webp"
          />
          <source
            srcset="
              ${mainPage ? './image/exercise/exercise-image-desktop.jpg' : './image/favorites/img-desktop.jpg'}   1x,
              ${mainPage ? './image/exercise/exercise-image-desktop@2x.jpg' : './image/favorites/img-desktop@2x.jpg'} 2x
            "
            media="(min-width: 1440px)"
          />
          <source
            srcset="
              ${mainPage ? './image/exercise/exercise-image-tablet.webp' : './image/favorites/img-tab.webp'}   1x,
              ${mainPage ? './image/exercise/exercise-image-tablet@2x.webp' : './image/favorites/img-tab@2x.webp'} 2x
            "
            media="(min-width: 768px)"
            type="image/webp"
          />
          <source
            srcset="
              ${mainPage ? './image/exercise/exercise-image-tablet.jpg' : './image/favorites/img-tab.jpg'}   1x,
              ${mainPage ? './image/exercise/exercise-image-tablet@2x.jpg' : './image/favorites/img-tab@2x.jpg'} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
            ${mainPage ? './image/exercise/exercise-image-mobile.webp' : './image/favorites/img-mob.webp'}   1x,
              ${mainPage ? './image/exercise/exercise-image-mobile@2x.webp' : './image/favorites/img-mob@2x.webp'} 2x
            "
            media="(min-width: 375px)"
            type="image/webp"
          />
          <source
            srcset="
              ${mainPage ? './image/exercise/exercise-image-mobile.jpg' : './image/favorites/img-mob.jpg'}   1x,
              ${mainPage ? './image/exercise/exercise-image-mobile@2x.jpg' : './image/favorites/img-mob@2x.jpg'} 2x
            "
            media="(min-width: 375px)"
          />
          <img
            src="${mainPage ? './image/exercise/exercise-image-mobile.jpg' : './image/favorites/img-mob.jpg'}"
            alt="beautiful women talking"
            loading="lazy"
          />
        </picture>
      </div>
      <!-- info -->
      <div class="info-card">
        <div class="icon-wrapper">
          <svg class="card-icon-svg" width="20" height="20">
            <use href="./image/icons.svg#icon-gym"></use>
          </svg>
        </div>
        <div class="info-card-thumb">
          <h3 class="card-title">110 min</h3>
          <h4 class="card-subtitle">Daily norm of sports</h4>
          <p class="card-text ${!mainPage && 'visually-hidden'}">
            The World Health Organization recommends at least 150 minutes of
            moderate-intensity aerobic physical activity throughout the week for
            adults aged 18-64. However, what happens if we adjust that number to
            110 minutes every day? While it might seem like a high number to
            hit, dedicating 110 minutes daily to sporting activities may offer
            unparalleled benefits to physical health, mental well-being, and
            overall quality of life.
          </p>
        </div>
      </div>`;
}
