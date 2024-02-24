import { getExercises } from '../api/api';
import { renderPagination } from '../pagination/pagination';
import { storage } from '../storage/storage.js';
import { hideElement, showElement } from '../common/common.js';
import { setSubtitle } from '../filter_panels/filter_panels.js';

export async function renderExerciseList() {
  const section = document.getElementById('exerciseSection');
  const sectionCategory = document.getElementById('categoriesSection');

  if (!section) {
    return;
  }

  hideElement(sectionCategory);

  showElement(section);
  showElement(document.querySelector('.search-form'));

  const listLocation = section.querySelector('#exerciseList');
  const paginationContainer = section.querySelector('.tui-pagination');

  const options = composeFilters();
  const data = await getExercises(options);

  if (data.results.length) {
    setSubtitle(storage.get('category'));
    populateExerciseCards(listLocation, data.results);

    renderPagination({
      container: paginationContainer,
      data,
      onUpdate: async page => {
        const newData = await getExercises(composeFilters(page));
        populateExerciseCards(listLocation, newData.results);
      },
    });
  } else {
    hideElement(paginationContainer);
    listLocation.innerHTML = `<p class="exercise-noitemsmessage">It appears that there are no results that align with what you are searching for, please try again.</p>`;
  }
}

function composeFilters(page = 1, limit = 10) {
  const filter = storage.get('filter');
  const category = storage.get('category');
  const keyword = storage.get('keyword');

  // API is freaking awesome
  const filtersMap = {
    ['Body parts']: 'bodypart',
    ['Muscles']: 'muscles',
    ['Equipment']: 'equipment',
  };

  const filterKey = filtersMap[filter];

  return {
    [filterKey]: category,
    keyword,
    page,
    limit,
  };
}

function populateExerciseCards(container, data) {
  container.innerHTML = createBlockMarkupArr(data);
}

function createBlockMarkupArr(arr) {
  return arr
    .map(
      ({ _id, bodyPart, burnedCalories, time, name, rating, target }) => `
        <div class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <div class="exercise-card-tag">workout</div>
              <div class="exercise-card-rating">
                ${rating}
                <svg class="exercise-card-icon" width="14" height="13">
                  <use href="./image/icons.svg#icon-exercise-star"></use>
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
                <div class="exercise-card-info-element-content-no-overflow">${burnedCalories} / ${time} min</div>
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
