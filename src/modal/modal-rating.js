import { storage } from '../storage/storage';
import { showError } from '../toast/toast';
import { ratingSchema } from '../validation/rating.schema';

export function initModalRating() {
  const modalRating = document.querySelector('.modal-rating');
  const modalExercises = document.querySelector('.modal-exercises');
  const overlay = document.querySelector('.overlay');
  const ratingForm = document.querySelector('.rating-form');

  if (!overlay || !modalExercises || !modalRating) {
    return;
  }

  modalExercises.addEventListener('click', handlerOpenRating);
  if (ratingForm) {
    ratingForm.addEventListener('submit', handleRatingSubmit);
  }
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

  console.log(modalRating);
  const ratingStar = document.getElementsByClassName('item-star');

  if (ratingStar) {
    executeRating(ratingStar);
  }

  for (const star of ratingStar) {
    star.addEventListener('click', () => console.log('clicked'));
  }

  handlerCloseModalRating(modalRating, overlay);
}

function markup() {
  return `<button class="modal-rating-btn-close">
    <svg width="24" height="24">
      <use href="./image/icons.svg#icon-close-menu"></use>
    </svg>
  </button>
  <h4 class="title">Rating</h4>
  <div class="modal-star-rating wrapper">
    <p class="rating" id="modal-star-rating" data-rating name="rating">0.0</p>
    <ul class="list">
      <li class="item-star" data-value="1">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
      </li>
      <li class="item-star" data-value="2">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
      </li>
      <li class="item-star" data-value="3">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
      </li>
      <li class="item-star" data-value="4">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
      </li>
      <li class="item-star" data-value="5">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
      </li>
    </ul>
  </div>
  <form class="rating-form">
    <input
      class="rating-input"
      name="email"
      type="email"
      placeholder="Email"
      pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
      required
    />
    <textarea
      class="rating-textarea"
      name="comment"
      placeholder="Your comment"
      required
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
function executeRating(stars) {
  const starRatingField = document.querySelector('.modal-star-rating');
  let ratingTitleRef = document.querySelector('#modal-star-rating');
  const activeStarClass = 'active-star';
  const inactiveStarClass = 'inactive-star';

  for (const star of stars) {
    star.addEventListener('click', () => {
      const index = star.getAttribute('data-value');

      for (const star of stars) {
        star.classList.contains(activeStarClass)
          ? star.classList.remove(activeStarClass)
          : star.classList.remove(inactiveStarClass);
      }

      ratingTitleRef.innerHTML = `${index}.0`;

      for (let i = index - 1; i >= 0; --i) {
        stars[i].classList.add(activeStarClass);
      }
    });
  }
}

//To do
async function handleRatingSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  console.log(formData);

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
