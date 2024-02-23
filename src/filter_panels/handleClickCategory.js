import { getSubCategoriesByCategory } from '../api/api';
import { storage } from '../storage/storage';

export function handleClickCategory(e) {
  const categoryButtons = document.querySelectorAll('.category-button');
  const form = document.querySelector('.search-form');
  const storageValue = storage.get('filter');

  form.classList.remove('visually-hidden');
  storage.set('filter', e.target.id);
  getSubCategoriesByCategory({ category: e.target.id }).then(
    ({ data: { results } }) => {
      markupCategories(results);
      виклик;
      функції;
      для;
      рендеру;
      підкатегорій;
      categoryButtons.forEach(button => button.classList.remove('selected'));
      e.target.classList.add('selected');
      // cl-(data);
    }
  );
}
