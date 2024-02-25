import { storage } from '../storage/storage';
import { showError } from '../toast/toast';
import { ratingSchema } from '../validation/rating.schema';
import { showElement, hideElement } from '../common/common';
import throttle from 'lodash.throttle';

export function initModalRating() {
  const modalRating = document.querySelector('.modal-rating');
  const modalExercises = document.querySelector('.modal-exercises');
  const overlay = document.querySelector('.overlay');

  if (!overlay || !modalExercises || !modalRating) {
    return;
  }

  modalExercises.addEventListener('click', handlerOpenRating);
  // //
  showElement(overlay);
  showElement(modalRating);
  hideElement(modalExercises);
  modalRating.innerHTML = markup();
  document.body.classList.add('fixed');
}

function handlerOpenRating(event) {
  if (!event.target.closest('.modal-exercises-btn-rating')) {
    return;
  }
  const modalRating = document.querySelector('.modal-rating');
  const modalExercises = document.querySelector('.modal-exercises');
  const overlay = document.querySelector('.overlay');

  modalExercises.classList.add('visually-hidden');
  modalRating.classList.remove('visually-hidden');
  document.body.classList.add('fixed');
  modalRating.innerHTML = markup();
  handlerCloseModalRating(modalRating, overlay);
}

function markup() {
  return `<button class="modal-rating-btn-close">
    <svg width="24" height="24">
      <use href="./image/icons.svg#icon-close-menu"></use>
    </svg>
  </button>
  <h4 class="title">Rating</h4>
  <div class="wrapper">
    <p class="rating" data-rating name="rating">0.0</p>
    <ul class="list rating-list">
      <li class="item">
        <div class="item-star">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
      <li class="item">
        <div class="item-star">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
      <li class="item">
        <div class="item-star">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
      <li class="item">
        <div class="item-star">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
      <li class="item">
        <div class="item-star" data-rating="5">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>
  <form class="rating-form">
    <input
      class="rating-input"
      name="email"
      type="email"
      placeholder="Email"
      required
      pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
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

function closeModalRating(modalRating, overlay) {
  modalRating.classList.add('visually-hidden');
  overlay.classList.add('visually-hidden');
  document.body.classList.remove('fixed');
}
function handlerCloseModalRating(modalRating, overlay) {
  const btnModalClose = document.querySelector('.modal-rating-btn-close');

  btnModalClose.addEventListener('click', () => {
    closeModalRating(modalRating, overlay);
  });

  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
      closeModalRating(modalRating, overlay);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (
      event.key === 'Escape' &&
      !modalRating.classList.contains('visually-hidden')
    ) {
      closeModalRating(modalRating, overlay);
    }
  });
}
//to do
const ratingStar = document.getElementsByClassName('item-star');

function handeHover(e) {
  console.log(e.target);
}

function executeRating(stars) {
  const ratingTitleRef = document.querySelector('.rating');
  const activeStarClass = 'active-star';
  const inactiveStarClass = 'inactive-star';
  const ratingList = document.querySelector('.rating-list');
  console.log(ratingList);
  // ratingList.addEventListener('mouseover', throttle(handeHover, 500));

  for (const star of stars) {
    star.addEventListener('click');
    star.onclick = () => {
      const index = stars.indexOf(star);

      if (star.className === inactiveStarClass) {
        for (let i = index; i >= 0; --i) {
          stars[i].className = activeStarClass;
        }
      } else {
        for (let i = index; i < stars.length; ++i) {
          stars[i].className = inactiveStarClass;
        }
      }

      const activeStars = stars.filter(
        star => star.className === activeStarClass
      );
      const rating = activeStars.length;

      ratingTitleRef.innerHTML = `${rating}.0`;
    };
  }
}
//---------------------------------------

executeRating(ratingStar);

//---------------------------------------

//To do
async function handleRatingSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  try {
    const schema = await ratingSchema.validate({
      email: formData.get('email'),
      comment: formData.get('comment'),
      rating: formData.get('rating'),
    });
    const response = await sendRating(schema);
    showInfo(response.message);
  } catch (error) {
    showError(error.response.data.message);
  } finally {
    setTimeout(() => {
      e.target.reset();
    }, 500);
  }
}
