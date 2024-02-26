import { showError, showInfo } from '../toast/toast';
import { ratingSchema } from '../validation/rating.schema';
import { updateRating } from '../api/api';
import { showElement, hideElement } from '../common/common';
import { onSpinner, offSpinner } from '../spinner/spinner';

const modalRating = document.querySelector('.modal-rating');
const modalExercises = document.querySelector('.modal-exercises');
const overlay = document.querySelector('.overlay');
const ratingLoader = document.querySelector('.rating-loader-container');

export function initModalRating() {
  if (!overlay || !modalExercises || !modalRating) {
    return;
  }

  modalExercises.addEventListener('click', handlerOpenRating);
}

// open modal rating
function handlerOpenRating(event) {
  if (!event.target.closest('.modal-exercises-btn-rating')) {
    return;
  }

  const id = event.target.dataset.id;

  modalExercises.classList.add('visually-hidden');
  modalRating.classList.remove('visually-hidden');
  document.body.classList.add('fixed');
  modalRating.innerHTML = markup(id);

  handlerCloseModalRating();
  executeRating();
}

//listeners

function closeModalRating() {
  const form = document.querySelector('.rating-form');
  const btnModalClose = document.querySelector('.modal-rating-btn-close');

  modalRating.classList.add('visually-hidden');
  modalExercises.classList.remove('visually-hidden');
  btnModalClose.removeEventListener('click', handleCloseBtn);
  overlay.removeEventListener('click', handleClickOverlay);
  document.removeEventListener('keydown', handleKey);
  form.removeEventListener('submit', handleRatingSubmit);
}

function handleCloseBtn() {
  closeModalRating();
}

function handleClickOverlay(e) {
  if (e.target !== overlay) return;
  closeModalRating();
}

function handleKey(e) {
  if (e.key !== 'Escape') return;
  closeModalRating();
}

function handlerCloseModalRating() {
  const btnModalClose = document.querySelector('.modal-rating-btn-close');
  const form = document.querySelector('.rating-form');

  btnModalClose.addEventListener('click', handleCloseBtn);
  overlay.addEventListener('click', handleClickOverlay);
  document.addEventListener('keydown', handleKey);
  form.addEventListener('submit', handleRatingSubmit);
}

function executeRating() {
  const ratingTitleRef = document.querySelector('.rating');
  const ratingList = document.querySelector('.rating-list');

  ratingList.addEventListener('click', handleClickStar);

  function handleClickStar(e) {
    if (e.target === e.currentTarget) return;
    const item = e.target.closest('.item');
    const rating = item.dataset.rating;
    ratingTitleRef.textContent = `${rating}.0`;
    [...ratingList.children].map((el, i) => {
      el.classList.remove('item--active');
      i < rating && el.classList.add('item--active');
    });
    ratingList.dataset.rating = `${rating}`;
  }
}
//---------------------------------------

async function handleRatingSubmit(event) {
  event.preventDefault();
  showElement(ratingLoader);
  onSpinner(ratingLoader.children[0]);
  const ratingList = document.querySelector('.rating-list');
  const text = document.querySelector('.rating');
  const formData = new FormData(event.target);

  try {
    const schema = await ratingSchema.validate({
      email: formData.get('email'),
      review: formData.get('comment'),
      rate: ratingList.dataset.rating,
    });
    const id = event.target.dataset.id;
    await updateRating(id, schema);
    showInfo('Rating successfully updated');
    closeModalRating();

    event.target.reset();
    [...ratingList.children].map(el => el.classList.remove('item--active'));
    text.textContent = `0.0`;
  } catch (error) {
    showError(error.message);
  } finally {
    setTimeout(() => {
      hideElement(ratingLoader);
      offSpinner(ratingLoader.children[0]);
    }, 500);
  }
}

//------------------------------------------------------------------------------------------------------------
// markup
function markup(id) {
  return `<button class="modal-rating-btn-close">
    <svg width="24" height="24">
      <use href="./image/icons.svg#icon-close-menu"></use>
    </svg>
  </button>
  <form class="rating-form" data-id="${id}">
  <h4 class="title">Rating</h4>
  <div class="wrapper">
    <p class="rating" data-rating name="rating">0.0</p>
    <ul class="list rating-list">
      <li class="item" data-rating="1">
        <div class="item-star">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
      <li class="item" data-rating="2">
        <div class="item-star">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
      <li class="item" data-rating="3">
        <div class="item-star">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
      <li class="item" data-rating="4">
        <div class="item-star">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
      <li class="item" data-rating="5">
        <div class="item-star" >
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>


    <input
      class="rating-input"
      name="email"
      type="text"
      pattern="^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$"
      placeholder="Email"
      autocomplete="email"
      required
    />

    <textarea
      class="rating-textarea"
      name="comment"
      placeholder="Your comment"
      required
      minlength="5"
    ></textarea>
    <button class="rating-send-btn" type="submit">Send</button>
  </form>`;
}
