import { getFilters } from '../api/api.js';
import { renderPagination } from '../pagination/pagination.js';
import { storage } from '../storage/storage.js';
import { hideElement } from '../common/common.js';
import { renderExerciseList } from '../exerciseList/exerciseList.js';

function getCategoriesMarkup(data) {
  return data
    .map(
      ({ imgURL, filter, name }) =>
        `<li class="categories-card-item" data-name="${name}"
      style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${imgURL}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                ">
        <p class="categories-card-title">${name}</p>
        <p class="categories-card-text">${filter}</p>
      </li>`
    )
    .join('');
}

function fillCategoriesList(container, data) {
  const listContainer = container.querySelector('.categories-list');

  if (!listContainer) {
    return;
  }
  listContainer.innerHTML = getCategoriesMarkup(data);
}

function bindEvents(container) {
  container
    .querySelector('.categories-list')
    .addEventListener('click', event => {
      const listElement = event.target.closest('.categories-card-item');

      if (!listElement) {
        return;
      }

      const categoryName = listElement.dataset.name;

      storage.set('category', categoryName);

      hideElement(container);

      renderExerciseList();
    });
}

export async function renderCategories(filter = 'Muscles', page = 1) {
  const container = document.querySelector('.categories-container');

  if (!container) {
    return;
  }

  bindEvents(container);

  const filters = await getFilters(filter, page);

  fillCategoriesList(container, filters.results);

  const paginationContainer = document.querySelector(
    '.categories.tui-pagination'
  );

  if (paginationContainer) {
    renderPagination({
      container: paginationContainer,
      data: filters,
      onUpdate: async newPage => {
        const newData = await getFilters(filter, newPage);

        fillCategoriesList(container, newData.results);
      },
    });
  }
}
