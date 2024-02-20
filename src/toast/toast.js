import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showMessage(
  message,
  color,
  position = 'topRight',
  timeout = 5000
) {
  iziToast.show({
    message,
    color,
    position,
    timeout,
  });
}

export function showError(message) {
  showMessage(message, 'red');
}

export function showInfo(message) {
  showMessage(message, 'green');
}
