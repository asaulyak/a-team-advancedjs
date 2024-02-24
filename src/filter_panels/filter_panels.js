import { storage } from '../storage/storage';
import { renderCategories } from '../categories/categories.js';
import { hideElement } from '../common/common.js';
import { renderExerciseList } from '../exerciseList/exerciseList.js';

const section = document.querySelector('.filter_panel');
const exercises_title = `<h2 class="exercises-title">Exercises</h2>`;
const form_buttons = `
<div class="category-elements">
  <form class="search-form visually-hidden">
    <input class="form-input" type="text" placeholder="Search" />
    <button class="search-button" type="button" aria-label="search button">
      <img class="search-icon" src="../image/icons_filter_panels/search.svg" alt="icon">
      <img class="close-icon visually-hidden" src="../image/icons_filter_panels/x.svg" alt="icon">
    </button>
  </form>
  <ul class="category-list_buttons">
    <li><button class="category-button" type="button" data-filter="Muscles" aria-label="category button">Muscles</button></li>
    <li><button class="category-button" type="button" data-filter="Body parts" aria-label=" category button">Body parts</button></li>
    <li><button class="category-button" type="button" data-filter="Equipment" aria-label="category button">Equipment</button>
    </li>
  </ul>
</div>`;

export function getFilterPanels() {
  if (!section) {
    return;
  }

  section.insertAdjacentHTML('afterbegin', `${exercises_title}${form_buttons}`);

  setCategoryButtonActive(storage.get('filter') || 'Muscles');

  const elements = {
    form: document.querySelector('.search-form'),
    title: document.querySelector('.exercises-title'),
    list: document.querySelector('.category-list_buttons'),
    categoryButtons: document.querySelectorAll('.category-button'),
    input: document.querySelector('.form-input'),
    searchButton: document.querySelector('.search-button'),
  };

  const { list, searchButton, form } = elements;

  const searchAndCloseIcons = {
    searchIcon: document.querySelector('.search-icon'),
    closeIcon: document.querySelector('.close-icon'),
  };

  searchButton.addEventListener('click', handlerClickResetForm);

  list.addEventListener('click', handleClickCategory);

  form.addEventListener('submit', handlerSubmit);
}

// Функції

function setCategoryButtonActive(filter) {
  const categoryButtons = document.querySelectorAll('.category-button');

  Array.prototype.forEach.call(categoryButtons, button =>
    button.classList.remove('active')
  );

  const currentButton = Array.prototype.find.call(
    categoryButtons,
    button => button.dataset.filter === filter
  );
  currentButton?.classList.add('active');

  storage.set('filter', filter);
}

export function setSubtitle(subtitle) {
  const titles = document.querySelector('.exercises-title');
  titles.innerHTML = `Exersise / <span class="subtitle">${subtitle}</span>`;
}

function handlerClickResetForm() {
  const input = document.querySelector('.form-input');
  const closeIcon = document.querySelector('.close-icon');
  const searchIcon = document.querySelector('.search-icon');

  input.value = '';
  closeIcon.classList.add('visually-hidden');
  searchIcon.classList.remove('visually-hidden');
}

function handleClickCategory(e) {
  const filter = e.target.dataset.filter;

  setCategoryButtonActive(filter);

  storage.set('filter', filter);

  renderCategories();
  hideElement(document.getElementById('exerciseSection'));
  hideElement(document.querySelector('.search-form'));
}

export function showSearchForm() {
  const form = document.querySelector('.search-form');
  form?.classList.add('visually-hidden'); //показ форми(змінити на add)
}

function handlerSubmit(e) {
  e.preventDefault();
  const input = document.querySelector('.form-input');
  const keyword = input.value;

  storage.set('keyword', keyword);

  renderExerciseList();
}
