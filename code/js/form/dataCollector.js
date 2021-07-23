document.addEventListener('DOMContentLoaded', () => {
  const SUBMIT_BUTTON = document.getElementById('submit-button');
  SUBMIT_BUTTON.addEventListener('click', () => {
    const GAME_NAME = document.getElementById('game-name-input').value;
    const GAME_TIMEOUT = document.getElementById('game-timeout-input').value;
    const TIMEOUT_TIME_OPTIONS = document.getElementsByClassName('timeout-select__option');
    const MATRIX_OPTIONS = document.getElementsByClassName('matrix-select__option');
    const SEARCHED_VALUE_TIMEOUT = document.getElementById('timeout-select').value;
    const SEARCHED_VALUE_MATRIX = document.getElementById('matrix-select').value;
    let timeOption;
    let _matrixOption;
    let time = Number(GAME_TIMEOUT);
    let isTimeoutNone = false;
    for (let option of TIMEOUT_TIME_OPTIONS) {
      if (option.value === SEARCHED_VALUE_TIMEOUT) {
        timeOption = option.value;
        break;
      }
    }
    for (let matrixOption of MATRIX_OPTIONS) {
      if (matrixOption.value === SEARCHED_VALUE_MATRIX) {
        _matrixOption = matrixOption.getAttribute('data-option-name').toString();
        break;
      }
    }
    if (timeOption === 'Seconds') {
      time = Number(GAME_TIMEOUT);
    } else if (timeOption === 'Minutes') {
      time = Number(GAME_TIMEOUT) * 60;
    } else {
      isTimeoutNone = true;
      timeOption = null;
    }
    const DATA_OBJECT = {
      'name': GAME_NAME, 'timeout-sec': time, 'timeout-null': isTimeoutNone,
      'time-option': timeOption, 'matrix-option': _matrixOption
    };
    const value = '' + window.localStorage.getItem('data');
    if (value !== 'null') {
      window.localStorage.removeItem('data');
      window.localStorage.setItem('data', JSON.stringify(DATA_OBJECT));
    } else {
      localStorage.setItem('data', JSON.stringify(DATA_OBJECT));
    }
    document.getElementById('play-link').removeAttribute('href');
    document.getElementById('play-link').setAttribute('href', 'game.html');
  });
});
