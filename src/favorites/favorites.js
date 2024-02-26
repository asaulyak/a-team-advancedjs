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

  const exerciseIds = storage.get('exerciseData') ?? [];
  if (exerciseIds.length === 0) {
    renderNoItemsMessage(document.querySelector('.fav-desk-wrapper'));
  }

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

  favoritesContainer.addEventListener('click', e => handleClick(e.target));
}

export function handleClick(target) {
  // filtering event
  if (target.classList.contains('exercise-card-button')) return;
  if (!target.dataset.id) return;

  const id = target.dataset.id;
  if (!id) {
    return;
  }

  const element = document.querySelector(`[data-id="${id}"]`);
  const cardContainer = element.closest('.exercise-card');

  let favoritesSaved = storage.get('exerciseData') || [];

  favoritesSaved = favoritesSaved.filter(item => item !== id);

  storage.set('exerciseData', favoritesSaved);

  cardContainer?.remove();

  if (!favoritesSaved.length) {
    renderNoItemsMessage(document.querySelector('.fav-desk-wrapper'));
  }
}
