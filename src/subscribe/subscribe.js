import { showError, showInfo } from '../toast/toast';
import { subscribeSchema } from '../validation/subscribe.schema';
import { sendSubscribe } from '../api/api';

const form = document.querySelector('#js-subscribe');

async function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  try {
    const schema = await subscribeSchema.validate({
      email: formData.get('email'),
    });
    const request = await sendSubscribe(schema);
    showInfo(request.data.message);
  } catch (error) {
    showError(error.response.data.message);
  } finally {
    e.target.reset();
  }
}

export function initSubscribe() {
  form.addEventListener('submit', handleSubmit);
}
