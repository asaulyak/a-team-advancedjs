import { getExercisesById } from '../api/api';
import image from '../image/modal-exercises-img.jpg';
import icons from '../image/icons.svg';

const modalExercises = document.querySelector('.modal-exercises');
const overlay = document.querySelector('.overlay');
const listItem = document.querySelector('.js-list');

const exerciseData = await getExercisesById(exerciseID); // TO DO:get data-id from start btn to continue

const markup = createMarkup(exerciseData);
updateModal(markup);

function updateModal(markup) {
  modalExercises.innerHTML = markup;
}

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
      return `srcset = '${image}
      src = '${image}'`;
    }
    return `src="${gifUrl}"`;
  }

  const ratingStarsHTML = createRating(rating); // TO DO: finish this function with rating stars

  return `
  <div class="modal-exercises-container" data-id="${_id}">
    <button class="modal-exercises-btn-close">
      <svg width="24" height="24">
        <use href="${icons}#icon-close-menu"></use>
      </svg>
    </button>

    <img
    class="modal-exercises-img"
    ${getExerciseGif}
    alt="Exercise image"
    />

    <div class="modal-exercises-card">
      <h2 class="modal-exercises-name">${name}</h2>
      <div class="modal-exercises-rating">${ratingStarsHTML}</div>

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
        <use href="${icons}#icon-favorites"></use>
      </svg>
    </button>
  <button class="modal-exercises-btn-rating modal-exercises-btn" type="button" data-id="${_id}">Give a rating</button>
</div>
`;
}
