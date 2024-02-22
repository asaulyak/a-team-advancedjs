import {
  getExercises,
  getExercisesByCategory,
  getSubCategoriesByCategory,
} from '../api/api';
import { storage } from '../storage/storage';
const section = document.querySelector('.filter_panel');
const exercises_title = `<h2 class="exercises-title">Exercises</h2>`;
const form_buttons = `
<div class="category-elements">
  <form class="search-form visually-hidden">
    <input class="form-input" type="text" placeholder="Search" />
    <button class="search-button"type="button"aria-label="search button">
      <img class="search-icon" src="../image/icons_filter_panels/search.svg" alt="icon">
      <img class="close-icon visually-hidden" src="../image/icons_filter_panels/x.svg" alt="icon">
    </button>
  </form>
  <ul class="category-list_buttons">
    <li><button class="category-button selected"type="button" id="Muscles"aria-label="category button">Muscles</button></li>
    <li><button class="category-button " type="button" id="Body parts"aria-label=" category button">Body parts</button></li>
    <li><button class="category-button "type="button"id="Equipment"aria-label="category button">Equipment</button>
    </li>
  </ul>
</div>`;

function getFilterPanels() {
  if (!section) {
    return;
  }
  section.insertAdjacentHTML('afterbegin', `${exercises_title}${form_buttons}`);
  const elements = {
    form: document.querySelector('.search-form'),
    title: document.querySelector('.exercises-title'),
    list: document.querySelector('.category-list_buttons'),
    categoryButtons: document.querySelectorAll('.category-button'),
    input: document.querySelector('.form-input'),
    searchButton: document.querySelector('.search-button'),
  };
  const { title, list, input, searchButton, form, categoryButtons } = elements;
  const searchAndCloseIcons = {
    searchIcon: document.querySelector('.search-icon'),
    closeIcon: document.querySelector('.close-icon'),
  };

  const { searchIcon, closeIcon } = searchAndCloseIcons;
  searchButton.addEventListener('click', handlerClickReset);

  function handlerClickReset() {
    input.value = '';
    closeIcon.classList.add('visually-hidden');
    searchIcon.classList.remove('visually-hidden');
  }

  getSubCategoriesByCategory({ category: 'Muscles' }).then(
    ({ data: { results } }) => {
      // markupCategories(results)виклик функції для рендеру підкатегорій
      console.log(data);
    }
  );
  //---------------------------------------------

  list.addEventListener('click', handleClickCategory);
  function handleClickCategory(e) {
    categoryButtons.forEach(button => button.classList.remove('selected'));
    e.target.classList.add('selected'); // підкреслення для кнопки

    form.classList.remove('visually-hidden'); //показ форми(змінити на add)
    storage.set('filter', e.target.id);
    getSubCategoriesByCategory({ category: e.target.id }).then(({ data }) => {
      //виклик функції для рендеру підкатегорій
      console.log(data);
    });
  }

  function onShowSearchForm() {
    form.classList.remove('visually-hidden'); //показ форми
  }
  //---------------------------------------------

  input.addEventListener('input', handlerSubmit);
  function handlerSubmit(e) {
    e.preventDefault();

    const valueInput = e.target.value;
    if (valueInput) {
      closeIcon.classList.remove('visually-hidden');
      searchIcon.classList.add('visually-hidden');
    }
    const StorageCategory =
      storage.get('filter') === 'Muscles'
        ? 'muscles'
        : storage.get('filter') === 'Body parts'
          ? 'bodypart'
          : 'equipment';

    //Потрібно записати вибрану частину тіла в LS.
    e.target.value !== '' &&
      getExercisesByCategory({
        keyword: e.target.value,
        category: StorageCategory,
        subCategory: storage.get('subCategory'),
      }).then(({ data }) => {
        //Виклик функції для рендеру вправ по ключовому слові
        console.log(data);
      });
  }
}

getFilterPanels();
