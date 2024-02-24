import { getExercisesById } from '../api/api';
import { storage } from '../storage/storage.js';

export function initFavoritesPage() {
  const favoritesTitle = document.querySelector('.favorites-title');
  const favcardsContainer = document.querySelector('#favcardsContainer');

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

  const exerciseIds = storage.get('exerciseData');

  let cardsArray = [];

  if (exerciseIds) {
    exerciseIds.map(item => {
      cardsArray.push(item);
      getDataForFavorites(cardsArray);
    });
  } else {
    renderNoItemsMessage();
  }

  function getDataForFavorites(exerciseIds) {
    let exercisesArray = [];

    exerciseIds.map(exerciseId => {
      getExercisesById(exerciseId).then(res => {
        exercisesArray.push(res);
        renderFavoritesCards(exercisesArray);
      });
    });
  }

  function renderFavoritesCards(dataForFavorites) {
    favcardsContainer.innerHTML = dataForFavorites
      ? createFavCardMarkup(dataForFavorites)
      : renderNoItemsMessage();
  }

  function renderNoItemsMessage() {
    favoritesTitle.insertAdjacentHTML(
      'beforeend',
      `<p class="favorites-noitemsmessage">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>`
    );
  }

  function createFavCardMarkup(arr) {
    return arr
      .map(
        ({ _id, bodyPart, burnedCalories, time, name, target }) => `
        <div class="exercise-card">
            <div class="exercise-card-top">
              <div class="exercise-card-top-info">
                <div class="exercise-card-tag">workout</div>
                <div class="exercise-card-removeIcon">
                 <svg id="icon-delete_bin" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6667 4.00004V3.46671C10.6667 2.71997 10.6667 2.3466 10.5213 2.06139C10.3935 1.8105 10.1895 1.60653 9.93865 1.4787C9.65344 1.33337 9.28007 1.33337 8.53333 1.33337H7.46667C6.71993 1.33337 6.34656 1.33337 6.06135 1.4787C5.81046 1.60653 5.60649 1.8105 5.47866 2.06139C5.33333 2.3466 5.33333 2.71997 5.33333 3.46671V4.00004M6.66667 7.66671V11M9.33333 7.66671V11M2 4.00004H14M12.6667 4.00004V11.4667C12.6667 12.5868 12.6667 13.1469 12.4487 13.5747C12.2569 13.951 11.951 14.257 11.5746 14.4487C11.1468 14.6667 10.5868 14.6667 9.46667 14.6667H6.53333C5.41323 14.6667 4.85318 14.6667 4.42535 14.4487C4.04903 14.257 3.74307 13.951 3.55132 13.5747C3.33333 13.1469 3.33333 12.5868 3.33333 11.4667V4.00004" stroke="#242424" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </div>
              </div>
              <button
                class="exercise-card-button js-start-btn remove-button-formatting"
                data-id=${_id}
              >
                start
                <svg class="exercise-card-icon" width="16" height="16">
                  <use href="./image/icons.svg#icon-exercise-arrow"></use>
                </svg>
              </button>
            </div>
            <div class="exercise-card-bottom">
              <div class="exercise-card-title">
                <svg class="exercise-card-icon" width="24" height="24">
                  <use href="./image/icons.svg#icon-sport"></use>
                </svg>
                <p class="exercise-card-title-text">
                  ${name}
                </p>
              </div>
              <div class="exercise-card-info">
                <div class="exercise-card-info-element">
                  <div class="exercise-card-info-element-heading">
                    Burned calories:
                  </div>
                  <div class="exercise-card-info-element-content-no-overflow">${burnedCalories} / ${time} minutes</div>
                </div>
                <div class="exercise-card-info-element">
                  <div class="exercise-card-info-element-heading">Body part:</div>
                  <div class="exercise-card-info-element-content-no-overflow">${bodyPart}</div>
                </div>
                <div class="exercise-card-info-element">
                  <div class="exercise-card-info-element-heading">Target:</div>
                  <div class="exercise-card-info-element-content-target-no-overflow">${target}</div>
                </div>
              </div>
            </div>
          </div>
      `
      )
      .join('');
  }
}

favcardsContainer.addEventListener('click', removeFromFavorites);

function removeFromFavorites(e) {
  if (e.target.id === 'icon-delete_bin') {
    // const exercideId = ;
    // storage.remove(exercideId);
    // renderFavoritesCards();
  }
}
