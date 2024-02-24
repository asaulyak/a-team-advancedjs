import { getExercisesById } from '../api/api';
import { storage } from '../storage/storage.js';
import { createBlockMarkupArr } from '../exerciseList/exerciseList.js';

export function initFavoritesPage() {
  const favoritesTitle = document.querySelector('.favorites-title');
  const favcardsContainer = document.querySelector('#favcardsContainer');

  if (!favoritesTitle) {
    return;
  }

  bindEvents();

  renderNoItemsMessage(document.querySelector('.fav-desk-wrapper'));

  const exerciseIds = storage.get('exerciseData');

  let cardsArray = [];

  if (exerciseIds) {
    exerciseIds.map(item => {
      cardsArray.push(item);
      getDataForFavorites(cardsArray);
    });
  } else {
    renderNoItemsMessage(document.querySelector('.fav-desk-wrapper'));
  }

  async function getDataForFavorites(exerciseIds) {
    const exercises = await Promise.all(
      exerciseIds.map(item => getExercisesById(item))
    );

    renderFavoritesCards(exercises);
  }

  function renderFavoritesCards(dataForFavorites) {
    favcardsContainer.innerHTML = dataForFavorites
      ? createBlockMarkupArr(dataForFavorites, true)
      : renderNoItemsMessage(document.querySelector('fav-desk-wrapper'));
  }
}

function renderNoItemsMessage(container) {
  // favcardsContainer.removeClasslist('favcardsContainer');
  container.insertAdjacentHTML(
    'beforeend',
    `<p class="favorites-noitemsmessage">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>`
  );
}

function bindEvents() {
  const favoritesContainer = document.querySelector('.favcards-container');

  if (!favoritesContainer) {
    return;
  }

  favoritesContainer.addEventListener('click', event => {
    if (!event.target.classList.contains('exercise-card-removeIcon')) {
      return;
    }

    const binIconContainer = event.target;
    const cardContainer = binIconContainer.closest('.exercise-card');

    const id = binIconContainer.dataset.id;

    if (!id) {
      return;
    }

    let favoritesSaved = storage.get('exerciseData') || [];

    favoritesSaved = favoritesSaved.filter(item => item !== id);

    storage.set('exerciseData', favoritesSaved);

    cardContainer?.remove();

    if (!favoritesSaved.length) {
      renderNoItemsMessage(document.querySelector('.fav-desk-wrapper'));
    }
  });
}
