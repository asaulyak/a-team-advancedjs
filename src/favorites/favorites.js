import { getQuote, getExercisesById } from '../api/api';
import { storage } from '../storage/storage.js';

export function initFavoritesPage() {
  const favoritesTitle = document.querySelector('.favorites-title');

  if (!favoritesTitle) {
    return;
  }

  renderSportsNorm();

  function renderSportsNorm() {
    favoritesTitle.insertAdjacentHTML(
      'beforeend',
      `<div class="favorites-sportsnorm-wrapper">
      <div class="favorites-sportsnorm favorites-margin">
          <svg class= "favorites-sportsicon">
            <use href="./image/icons.svg#icon-sportsnorm"></use>
          </svg>
        <p class="favorites-sportsnorm-number">110 min</p>
        <p class="favorites-sportsnorm-title">Daily norm of sports</p>
      </div>
      <div class="favorites-sportsimage favorites-margin">
      </div>`
    );
  }

  renderCardsSection();

  function renderCardsSection() {
    const exerciseId = storage.get('key');
    if (exerciseId) {
      const dataForFavorites = getDataForFavorites(exerciseId);
      renderFavoritesCards(dataForFavorites);
    } else {
      renderNoItemsMessage();
    }
  }

  function renderNoItemsMessage() {
    favoritesTitle.insertAdjacentHTML(
      'beforeend',
      `<p class="favorites-noitemsmessage">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>`
    );
  }
}
