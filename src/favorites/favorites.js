// import { getExercisesById } from '../api/api';
import { getQuote, getExercisesById } from '../api/api';
import { storage } from '../storage/storage.js';

// 1. автоматичний рендер quoteOfTheDay

// функция getQuote() поверне дані для рендеру
// можна її перший виклик додати в function start()
// плюс запис в storage дати (наприклад, quoteTime) цього першого виклику getQuote
// перевірка, чи пройшла доба з моменту quoteTime,
// тоді даємо новий виклик getQuote() -> свіжа цитата

// 2. автоматичний рендер блоку норми спорту

const favoritesTitle = document.querySelector('.favorites-title');

renderSportsNorm();

function renderSportsNorm() {
  favoritesTitle.insertAdjacentHTML(
    'beforeend',
    '<div class="favorites-sportsnorm favorites-margin"><p>svg</p><p>110 min</p><p>Daily norm of sports</p></div>'
  );
}

// 3. автоматичний рендер картинки

renderSportsImage();

function renderSportsImage() {
  favoritesTitle.insertAdjacentHTML(
    'beforeend',
    '<img src="./image/favorites/sportsimage_mob.jpg" alt="sporty girls" class="favorites-sportsimage favorites-margin"/>'
  );
}

// 4. динамічний рендер карток
renderCardsSection();

// 4.1 беремо в storage айді обраних до favorite (в modalExercises) вправ
// console.dir(storage);

////// додавання в favorites з модального вікна - кнопка з сердечком
////// storage.set('exerciseID', 'значення exerciseID');

// exerciseId = storage.get('exerciseID');

// 4.2. валідація даних та сервер
// 4.2.1 якщо exerciseId не null, то

function renderCardsSection() {
  // if (exerciseId) {
  // const dataForFavorites = getDataForFavorites(exerciseId);
  // renderFavoritesCards(dataForFavorites);
  // } else {
  renderNoItemsMessage();
  // }
}

// 4.3. йдемо на сервер
// function getDataForFavorites(exerciseId) {
//   return getExercisesById(exerciseId);
// }

// 4.4.1 рендер карток
function renderFavoritesCards(dataForFavorites) {
  console.log(dataForFavorites);
  favoritesTitle.insertAdjacentHTML(
    'beforeend',
    '<div><p>template favorite cards here</p></div>'
  );
}

// 4.2.2 if null,
// 4.4.2 даємо юзеру меседж, getExercisesById не викликаємо;

function renderNoItemsMessage() {
  favoritesTitle.insertAdjacentHTML(
    'beforeend',
    `<p class="favorites-noitemsmessage">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>`
  );
}

// 5. якщо карток багато, рендер скрола справа

// 6. логіка видалення картки із favorites

// const deleteCardBtn = document.querySelector('.favorites-iconBin');
// deleteCardBtn.addEventListener('click', removeFavoritesCard);

function removeFavoritesCard(e) {
  console.log(e.currentTarget);
  // беремо key&value картки, яку хочемо видалити
  // storage.set(key, value) - тут треба перевизначити значення айді
  // на пустий рядок, щоб картка була видалена із storage
  // renderFavoritesCards() // тут будуть всі картки зі Storage, окрім видаленої
}
