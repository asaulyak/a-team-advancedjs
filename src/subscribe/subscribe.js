import { showError, showInfo } from '../toast/toast';
import { subscribeSchema } from '../validation/subscribe.schema';
import { sendSubscribe } from '../api/api';
import { hiddenStyle, onSpinner, offSpinner } from '../spinner/spinner';

const form = document.querySelector('#js-subscribe');
const spinner = document.querySelector('#js-subscribe-spinner');

async function handleSubmit(e) {
  e.preventDefault();

  toggleSpinner(e.target);

  const formData = new FormData(e.target);

  try {
    const schema = await subscribeSchema.validate({
      email: formData.get('email'),
    });
    const response = await sendSubscribe(schema);
    showInfo(response.message);
  } catch (error) {
    showError(error.response.data.message);
  } finally {
    setTimeout(() => {
      e.target.reset();
      toggleSpinner(e.target);
    }, 500);
  }
}

function hideBtnText(textElementRef) {
  textElementRef.classList.add(hiddenStyle);
}

function showBtnText(textElementRef) {
  textElementRef.classList.remove(hiddenStyle);
}

function toggleSpinner(element) {
  if (!element) return;
  const btnRef = element.children.subscribeBtn;
  const textRef = btnRef.children[0];

  if (spinner.classList.contains(hiddenStyle)) {
    btnRef.disabled = true;
    onSpinner(spinner);
    hideBtnText(textRef);
    return;
  }
  offSpinner(spinner);
  showBtnText(textRef);
  btnRef.disabled = false;
}

export function initSubscribe() {
  if (!form) return;
  form.addEventListener('submit', handleSubmit);
}
