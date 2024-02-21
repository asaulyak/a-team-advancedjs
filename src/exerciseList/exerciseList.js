export function getExerciseList() {
  listLocation.insertAdjacentHTML('afterbegin', markup);
}

const listLocation = document.querySelector('#exerciseList');

const markup = `
  <div class="exercise-card">
    <div class="exercise-card-top">
      <div class="exercise-card-top-info">
        <div class="exercise-card-tag">workout</div>
        <div class="exercise-card-rating">
          4.0<img
            width="18"
            height="18"
            src="https://img.icons8.com/fluency/48/star--v1.png"
            alt="star--v1"
          />
        </div>
      </div>
      <button class="exercise-card-button remove-button-formatting">
        start
        <img
          width="16"
          height="16"
          src="https://img.icons8.com/ios/50/long-arrow-right--v1.png"
          alt="long-arrow-right--v1"
        />
      </button>
    </div>
    <div class="exercise-card-bottom">
      <div class="exercise-card-title">
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/ios-filled/50/running.png"
          alt="running"
        />Air Bike
      </div>
      <div class="exercise-card-info">
        <div class="exercise-card-info-element">
          <div class="exercise-card-info-element-heading">
            Burned calories:
          </div>
          <div class="exercise-card-info-element-content">312 / ...</div>
        </div>
        <div class="exercise-card-info-element">
          <div class="exercise-card-info-element-heading">Body part:</div>
          <div class="exercise-card-info-element-content">Waist</div>
        </div>
        <div class="exercise-card-info-element">
          <div class="exercise-card-info-element-heading">Target</div>
          <div class="exercise-card-info-element-content">Abs</div>
        </div>
      </div>
    </div>
  </div>
`;
