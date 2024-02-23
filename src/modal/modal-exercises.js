import { getExercisesById } from '../api/api';
import { storage } from '../storage/storage';
import { showError } from '../toast/toast';

const modalExercises = document.querySelector('.modal-exercises');
const overlay = document.querySelector('.overlay');
const listItem = document.querySelector('.exercise-list');

let isFavorite = false;

//*****************Start button click***** */

listItem.addEventListener('click', handlerStartExerciseClick);

async function handlerStartExerciseClick(event) {
  if (!event.target.closest('.js-start-btn')) {
    return;
  }
  try {
    const exerciseID = event.target
      .closest('.js-start-btn')
      .getAttribute('data-id');
    const exerciseData = await getExercisesById(exerciseID);
    const markup = createMarkup(exerciseData);
    updateModal(markup);
    openModalExercises();
    const btnModalFavorites = document.querySelector(
      '.modal-exercises-btn-favorites'
    );
    btnModalFavorites.addEventListener('click', () =>
      handlerToggleBtnFavorites(exerciseID)
    );
    const btnModalClose = document.querySelector('.modal-exercises-btn-close');
    btnModalClose.addEventListener('click', handlerCloseModalExercises);
  } catch (error) {
    showError(error);
  }
}

function openModalExercises() {
  modalExercises.classList.remove('visually-hidden');
  overlay.classList.remove('visually-hidden');
  document.body.classList.add('no-scroll');
}

function updateModal(markup) {
  modalExercises.innerHTML = markup;
}
//**************Rating stars********* */

function createRating(rating) {
  const starColor = '#EEA10C';
  const emptyStarColor = '#F4F4F4';
  const totalStars = 5;
  const stars = [];

  //Loop through each star to create the SVG markup
  for (let i = 0; i < totalStars; i++) {
    // Calculate the fill percentage based on the rating
    const fillPercentage =
      i + 1 <= rating ? 100 : i < rating ? (rating % 1) * 100 : 0;
    // Create SVG markup for each star
    const starMarkup = `
<svg width="14" height="13">
        <use href="./image/icons.svg#icon-star"></use>
        <linearGradient id="starGradient${i}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${starColor};stop-opacity:1" />
          <stop offset="${fillPercentage}%" style="stop-color:${starColor};stop-opacity:1" />
          <stop offset="${fillPercentage + 1}%" style="stop-color:${emptyStarColor};stop-opacity:0.20" />
        </linearGradient>
        <path
          d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
          fill="url(#starGradient${i})"
          fill-opacity="1"
        />
      </svg>
    `;
    //Push SVG markup of current star to the stars array
    stars.push(starMarkup);
  }
  const ratingText = Number.isInteger(rating)
    ? `${rating}.0`
    : rating.toFixed(1);
  // Combine rating text with stars markup
  return `${ratingText} ${stars.join('')}`;
}

//**************Modal markup****** */

function createMarkup({
  _id,
  bodyPart,
  equipment,
  gifUrl,
  name,
  target,
  description,
  rating,
  burnedCalories,
  time,
  popularity,
}) {
  const getExerciseGif = getGif(gifUrl);
  function getGif(gifUrl) {
    if (gifUrl === null || !gifUrl) {
      return `srcset = "./image/modal-exercises-img.jpg"
      src = "./image/modal-exercises-img.jpg"`;
    }
    return `src="${gifUrl}"`;
  }

  const ratingStars = createRating(rating);

  return `
  <div class="modal-exercises-container" data-id="${_id}">
    <button class="modal-exercises-btn-close">
      <svg width="24" height="24">
        <use href="./image/icons.svg#icon-close-menu"></use>
      </svg>
    </button>

    <img
    class="modal-exercises-img"
    ${getExerciseGif}
    alt="Exercise image"
    />

    <div class="modal-exercises-card">
      <h2 class="modal-exercises-name">${name}</h2>
      <div class="modal-exercises-rating">${ratingStars}</div>

        <div class="modal-exercises-block">
          <ul class="modal-exercises-list">
            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Target</h3>
              <p class="modal-exercises-text">${target}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Body Part</h3>
              <p class="modal-exercises-text">${bodyPart}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Equipment</h3>
              <p class="modal-exercises-text">${equipment}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Popular</h3>
              <p class="modal-exercises-text">${popularity}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Burned Calories</h3>
              <p class="modal-exercises-text">${burnedCalories}/${time}</p>
            </li>
          </ul>
          <p class="modal-exercises-description">${description}</p>
        </div>
    </div>
  </div>
  <div class="modal-exercises-btn-container">
  <button class="modal-exercises-btn-favorites modal-exercises-btn" type="button" data-id="${_id}">
      Add to favorites
      <svg class="btn-favorites-icon">
      <use href="./image/icons.svg#icon-favorites"></use>
      </svg>
    </button>
  <button class="modal-exercises-btn-rating modal-exercises-btn" type="button" data-id="${_id}">Give a rating</button>
</div>
`;
}

//**********Add to favorites*******/

function createAddToFavoritesMarkup() {
  return `
  Add to favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-favorites"></use>
  </svg>
  `;
}

function createRemoveFromFavoritesMarkup() {
  return `
  Remove from favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-trash"></use>
  </svg>
  `;
}

function handlerToggleBtnFavorites(exerciseID) {
  isFavorite = !isFavorite;

  if (isFavorite) {
    const btnModalFavorites = document.querySelector(
      '.modal-exercises-btn-favorites'
    );
    btnModalFavorites.innerHTML = createRemoveFromFavoritesMarkup();
    addToFavorites(exerciseID);
  } else {
    const btnModalFavorites = document.querySelector(
      '.modal-exercises-btn-favorites'
    );
    btnModalFavorites.innerHTML = createAddToFavoritesMarkup();
    removeFromFavorites(exerciseID);
  }
}
async function addToFavorites(exerciseID) {
  try {
    const storageData = storage.get('exerciseData') || [];

    const existingExercise = storageData.find(item => {
      if (typeof item === 'string') {
        const parsedItem = JSON.parse(item);
        return parsedItem._id === exerciseID;
      } else if (typeof item === 'object' && item._id) {
        return item._id === exerciseID;
      }
      return false;
    });

    if (!existingExercise) {
      const exerciseData = await getExercisesById(exerciseID);

      const exerciseDataString = JSON.stringify(exerciseData);

      storageData.push(exerciseDataString);

      storage.set('exerciseData', storageData);
    }
  } catch (error) {
    showError('Error fetching or storing exercise data');
  }
}

async function removeFromFavorites(exerciseID) {
  try {
    if (!exerciseID) {
      showError('Invalid exerciseID');
      return;
    }

    const storageData = storage.get('exerciseData') || [];

    const exerciseIndex = storageData.findIndex(item => {
      try {
        if (typeof item === 'string') {
          const parsedItem = JSON.parse(item);
          return parsedItem._id === exerciseID;
        } else if (typeof item === 'object' && item._id) {
          return item._id === exerciseID;
        }
        return false;
      } catch (error) {
        showError('Error parsing stored exercise data');
        return false;
      }
    });

    if (exerciseIndex !== -1) {
      storageData.splice(exerciseIndex, 1);

      storage.set('exerciseData', storageData);
    }
  } catch (error) {
    showError('Error removing exercise from favorites');
  }
}

//*********** close modal********* */

function handlerCloseModalExercises() {
  modalExercises.classList.add('visually-hidden');
  overlay.classList.add('visually-hidden');
  document.body.classList.remove('no-scroll');
}

overlay.addEventListener('click', function (event) {
  if (event.target === overlay) {
    handlerCloseModalExercises();
  }
});
document.addEventListener('keydown', function (event) {
  if (
    event.key === 'Escape' &&
    !modalExercises.classList.contains('visually-hidden')
  ) {
    handlerCloseModalExercises();
  }
});
