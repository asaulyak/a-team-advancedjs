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
  <form class="search-form">
    <input class="form-input" type="text" placeholder="Search" />
    <button class="search-button"type="button"aria-label="search button">
    </button>
  </form>
  <ul class="category-list_buttons">
    <li><button class="category-button"type="button" id="Muscles"aria-label="category button">Muscles</button>
    </li><li><button class="category-button active" type="button" id="Body parts"aria-label=" category button">Body parts</button>
    </li><li><button class="category-button"type="button"id="Equipment"aria-label="category button">Equipment</button>
    </li>
  </ul>
</div>`;

if (!section) {
  return;
}
section.insertAdjacentHTML('afterbegin', `${exercises_title}${form_buttons}`);
const elements = {
  title: document.querySelector('.exercises-title'),
  list: document.querySelector('.category-list_buttons'),
  input: document.querySelector('.form-input'),
  searchButton: document.querySelector('.search-button'),
};
const { title, list, input, searchButton } = elements;

searchButton.addEventListener('click', handlerClickReset);
function handlerClickReset() {}

//---------------------------------------------
list.addEventListener('click', handleClickCategory);
function handleClickCategory(e) {
  storage.set('filter', e.target.id);
  getSubCategoriesByCategory({ category: e.target.id }).then(({ data }) => {
    //виклик функції для рендеру підкатегорій
    console.log(data);
  });
}
//---------------------------------------------

input.addEventListener('input', handlerSubmit);
function handlerSubmit(e) {
  e.preventDefault();

  valueInput = e.target.value;

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
