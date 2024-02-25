import Pagination from 'tui-pagination';
import { hideElement, showElement } from '../common/common.js';
import { showLoader, stopLoader } from '../spinner/loader.js';

/**
 * Pagination renderer
 * https://github.com/nhn/tui.pagination/blob/master/examples/example02-custom-event.html
 * Create a separate pagination container for your needs
 * Example usage:
 *   const paginationContainer = document.querySelector(
 *     '#exercises .tui-pagination'
 *  );
 *
 *  const data = await getExercises(); // fetch data from server with your dedicated function
 *
 *  renderPagination({
 *       container: paginationContainer,
 *       data,
 *       onUpdate: async page => {
 *         const newData = await getExercises(page);
 *         renderItems(newData.results); // your custom function to render elements
 *       },
 *     });
 * */
export function renderPagination({ container, data, onUpdate }) {
  if (!container) {
    return;
  }

  const { perPage, totalPages } = data;

  if (totalPages < 2) {
    hideElement(container);
    return;
  }

  const renderMoveButton = (type, disabled) => {
    const iconSource = `<svg width="7" height=12>
                              <use href="./image/icons.svg#icon-arrow"></use>
                            </svg>`;

    let icon = '';
    let moreClasses = ['tui-more'];

    if (disabled) {
      moreClasses.push('tui-is-disabled');
    }

    switch (type) {
      case 'next':
        icon = iconSource;
        moreClasses.push('tui-more-right');
        break;
      case 'prev':
        icon = iconSource;
        break;
      case 'first':
        icon = [iconSource, iconSource].join('');
        break;
      case 'last':
        icon = [iconSource, iconSource].join('');
        moreClasses.push('tui-more-right');
        break;
    }

    return `<a href="#" class="tui-page-btn tui-${type} ${moreClasses.join(' ')}" aria-label="pagination">${icon}</a>`;
  };

  showElement(container);

  const instance = new Pagination(container, {
    totalItems: totalPages * perPage,
    itemsPerPage: perPage,
    visiblePages: 5,
    template: {
      moveButton: ({ type }) => renderMoveButton(type),
      disabledMoveButton: ({ type }) => renderMoveButton(type, true),
      moreButton: () => `<a href="#" class="tui-page-btn tui-ellipsis">...</a>`,
    },
  });

  instance.on('beforeMove', event => {
    showLoader();
    onUpdate(event.page);
    stopLoader();
  });
}
