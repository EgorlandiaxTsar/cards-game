document.addEventListener('DOMContentLoaded', () => {
  const SUBMIT_BUTTON = document.getElementById('submit-button');
  const RANDOM_BUTTON = document.getElementById('random-button');
  SUBMIT_BUTTON.setAttribute('disabled', 'true');
  const NAME_FIELD = document.getElementById('game-name-input');
  const TIMEOUT_FIELD = document.getElementById('game-timeout-input');
  const TIME_OPTION_SELECT = document.getElementById('timeout-select');
  const SEARCHED_VALUE = TIME_OPTION_SELECT.value;
  let isNameFieldEmpty = true;
  let isTimeoutFieldEmpty = true;

  RANDOM_BUTTON.addEventListener('click', () => {
    SUBMIT_BUTTON.removeAttribute('disabled');
  });

  NAME_FIELD.addEventListener('keyup', () => {
    isNameFieldEmpty = NAME_FIELD.value === '';
    if (!isTimeoutFieldEmpty && !isTimeoutFieldEmpty) {
      SUBMIT_BUTTON.removeAttribute('disabled');
    } else {
      if (!SUBMIT_BUTTON.hasAttribute('disabled')) {
        SUBMIT_BUTTON.setAttribute('disabled', 'true');
      }
    }
  });

  TIME_OPTION_SELECT.addEventListener('click', () => {
    if (SEARCHED_VALUE === document.getElementById('no-timeout-option').value) {
      TIMEOUT_FIELD.setAttribute('disabled', 'true');
    } else {
      if (TIMEOUT_FIELD.hasAttribute('disabled')) {
        TIMEOUT_FIELD.removeAttribute('disabled');
      }
    }
  });

  TIMEOUT_FIELD.addEventListener('keyup', () => {
    TIMEOUT_FIELD.value = TIMEOUT_FIELD.value.replaceAll(/[^+\d]/g, '');
    isTimeoutFieldEmpty = TIMEOUT_FIELD.value === '';
    if (!isTimeoutFieldEmpty && !isTimeoutFieldEmpty) {
      SUBMIT_BUTTON.removeAttribute('disabled');
    } else {
      if (!SUBMIT_BUTTON.hasAttribute('disabled')) {
        SUBMIT_BUTTON.setAttribute('disabled', 'true');
      }
    }
  });
});

