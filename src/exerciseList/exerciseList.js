import { getExercises } from '../api/api';

export function getExerciseList() {
  // listLocation.insertAdjacentHTML('afterbegin', createBlockMarkupArr());

  console.log(populateExerciseCards());
}

const listLocation = document.querySelector('#exerciseList');

async function populateExerciseCards() {
  const data = await fetchExercises();

  const exerciseInfo = data.results;

  console.log(exerciseInfo);

  listLocation.insertAdjacentHTML(
    'afterbegin',
    createBlockMarkupArr(exerciseInfo)
  );
}

async function fetchExercises() {
  const response = await getExercises();

  if (!response.statusText === 'OK') {
    throw new Error(response.statusText);
  }

  return await response.data;
}

function createBlockMarkupArr(arr) {
  console.log(arr);
  return arr
    .map(
      ({ bodyPart, burnedCalories, time, name, rating, target }) => `
        <div class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <div class="exercise-card-tag">workout</div>
              <div class="exercise-card-rating">
                ${rating}
                <svg class="exercise-card-icon" width="14" height="13">
                  <use href="./image/icons.svg#icon-star"></use>
                </svg>
              </div>
            </div>
            <button class="exercise-card-button remove-button-formatting">
              start
              <svg class="exercise-card-icon" width="16" height="16">
                <use href="./image/icons.svg#icon-arrow"></use>
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
