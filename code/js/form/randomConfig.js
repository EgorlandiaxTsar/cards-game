document.addEventListener('DOMContentLoaded', () => {
  const RANDOM_BUTTON = document.getElementById('random-button');

  RANDOM_BUTTON.addEventListener('click', () => {
    let gameName = 'Game #' + Math.round(99999 + Math.random() * 999999);
    let randomMatrix = range(1, 5);
    let timeoutType;
    let timeout;
    let minTimeout;
    let maxTimeout;
    switch (randomMatrix) {
      case 1:
        timeoutType = 'Seconds';
        minTimeout = 4;
        maxTimeout = 10;
        timeout = range(minTimeout, maxTimeout);
        break;
      case 2:
        timeoutType = 'Seconds';
        minTimeout = 5;
        maxTimeout = 15;
        timeout = range(minTimeout, maxTimeout);
        break;
      case 3:
        timeoutType = 'Seconds';
        minTimeout = 12;
        maxTimeout = 30;
        timeout = range(minTimeout, maxTimeout);
        break;
      case 4:
        minTimeout = 35;
        maxTimeout = 120;
        timeout = range(minTimeout, maxTimeout);
        if (timeout === 60 || timeout === 120) {
          timeoutType = 'Minutes';
          timeout /= 60;
        } else {
          timeoutType = 'Seconds';

        }
        break;
      case 5:
        minTimeout = 50;
        maxTimeout = 180;
        timeout = range(minTimeout, maxTimeout);
        if (timeout === 60 || timeout === 120 || timeout === 180) {
          timeoutType = 'Minutes';
          timeout = timeout / 60;
        } else {
          timeoutType = 'Seconds';
        }
        break;
      default:
        randomMatrix = 3;
        gameName = '505 ERROR';
        timeoutType = 'Seconds';
        minTimeout = 12;
        maxTimeout = 30;
        timeout = range(minTimeout, maxTimeout);
        break;
    }

    let roles = ['beginner', 'base', 'intermediate', 'master', 'maestro'];
    let index = randomMatrix - 1;
    let role = roles[index];

    const GAME_NAME_FIELD = document.getElementById('game-name-input');
    const TIMEOUT_FIELD = document.getElementById('game-timeout-input');
    const TIME_OPTION_SELECT = document.getElementById('timeout-select');
    const MATRIX_SELECT = document.getElementById('matrix-select');

    for (let field of [GAME_NAME_FIELD, TIMEOUT_FIELD]) {
      if (field.hasAttribute('value')) {
        field.removeAttribute('value');
      }
    }
    TIMEOUT_FIELD.value = String(timeout);
    GAME_NAME_FIELD.value = gameName;
    for (let option of TIME_OPTION_SELECT.getElementsByClassName('timeout-select__option')) {
      if (option.hasAttribute('selected')) {
        option.removeAttribute('selected');
      }

      if (option.value === timeoutType) {
        if (option.hasAttribute('selected')) {
          option.removeAttribute('selected');
        }
        option.setAttribute('selected', 'true');
        break;
      }
    }

    for (let option of MATRIX_SELECT.getElementsByClassName('matrix-select__option')) {
      if (option.hasAttribute('selected')) {
        option.removeAttribute('selected');
      }

      if (option.getAttribute('data-option-name') === role) {
        if (option.hasAttribute('selected')) {
          option.removeAttribute('selected');
        }
        option.setAttribute('selected', 'true');
        break;
      }
    }
  });
});

function range(from, to) {
  return Math.round(from + Math.random() * (to - from));
}
