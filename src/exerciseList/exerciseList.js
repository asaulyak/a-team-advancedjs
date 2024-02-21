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
                ${rating}<img
                  width="18"
                  height="18"
                  src="https://img.icons8.com/fluency/48/star--v1.png"
                  alt="star--v1"
                />
              </div>
            </div>
            <button class="exercise-card-button remove-button-formatting">
              start
              <img
                width="16"
                height="16"
                src="https://img.icons8.com/ios/50/long-arrow-right--v1.png"
                alt="long-arrow-right--v1"
              />
            </button>
          </div>
          <div class="exercise-card-bottom">
            <div class="exercise-card-title">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/ios-filled/50/running.png"
                alt="running"
              />
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
