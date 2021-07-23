document.addEventListener('DOMContentLoaded', () => {
  const DATA = JSON.parse(window.localStorage.getItem('data'));
  const MATRIX_CONTAINER = document.getElementById('matrix-container');
  const MATRIX_ARR = [];
  const TIMEOUT = 500;
  const PLACEHOLDER = 'X';

  const ROLES_MATRIX = {'beginner': 4, 'base': 8, 'intermediate': 16, 'master': 32, 'maestro': 64};
  const MATRIX = Number(ROLES_MATRIX[DATA['matrix-option']]);

  let styleData;

  switch (MATRIX) {
    case 4:
      styleData = {
        'width': '310px', 'height': '200px', 'line-height': '200px', 'font-size': '36px',
        'background-color': '#333', 'color': '#fff', 'font-weight': '500', 'margin': '0 auto 15px',
        'border-radius': '10px', 'transition-property': 'background-color, color', 'transition-duration': '300ms',
        'transition-timing-function': 'ease-in-out'
      };
      break;
    case 8:
      styleData = {
        'width': '155px', 'height': '100px', 'line-height': '100px', 'font-size': '24px',
        'background-color': '#333', 'color': '#fff', 'font-weight': '500', 'margin': '0 auto 15px',
        'border-radius': '10px', 'transition-property': 'background-color, color', 'transition-duration': '300ms',
        'transition-timing-function': 'ease-in-out'
      };
      break;
    case 16:
      styleData = {
        'width': '77px', 'height': '100px', 'line-height': '100px', 'font-size': '18px',
        'background-color': '#333', 'color': '#fff', 'font-weight': '500', 'margin': '0 auto 15px',
        'border-radius': '10px', 'transition-property': 'background-color, color', 'transition-duration': '300ms',
        'transition-timing-function': 'ease-in-out'
      };
      break;
    case 32:
      styleData = {
        'width': '40px', 'height': '40px', 'line-height': '40px', 'font-size': '14px',
        'background-color': '#333', 'color': '#fff', 'font-weight': '500', 'margin': '0 auto 15px',
        'border-radius': '10px', 'transition-property': 'background-color, color', 'transition-duration': '300ms',
        'transition-timing-function': 'ease-in-out'
      };
      break;
    case 64:
      styleData = {
        'width': '20px', 'height': '20px', 'line-height': '20px', 'font-size': '11px',
        'background-color': '#333', 'color': '#fff', 'font-weight': '500', 'margin': '0 auto 15px',
        'border-radius': '10px', 'transition-property': 'background-color, color', 'transition-duration': '300ms',
        'transition-timing-function': 'ease-in-out'
      };
      break;
  }

  const NOT_SHUFFLED_NUMBERS = [];
  let pairs = (MATRIX * MATRIX) / 2;
  window.cardsGamePairs = pairs;
  let count = 0;

  for (let i = 1; i < ((MATRIX * MATRIX) / 2) + 1; i++) {
    for (let num of NOT_SHUFFLED_NUMBERS) {
      if (num === i) {
        count++;
      }
    }
    if (count === 0) {
      NOT_SHUFFLED_NUMBERS.push(i);
      NOT_SHUFFLED_NUMBERS.push(i);
    } else if (count === 1) {
      NOT_SHUFFLED_NUMBERS.push(i)
    }
  }

  const NUMBERS = shuffle(NOT_SHUFFLED_NUMBERS);
  let openedCards = [];
  let currentArr = [];
  let cardId = 0;
  let isCardOpened = false;
  for (let j = 0; j < MATRIX; j++) {
    for (let i = 0; i < MATRIX; i++) {
      const newCard = document.createElement('div');
      newCard.classList.toggle('card-row__card');
      newCard.setAttribute('style', 'width: ' + styleData['width'] + '; height: ' + styleData['height']
        + '; font-size: ' + styleData['font-size'] + '; line-height: ' + styleData['line-height'] + '; background-color: '
        + styleData['background-color'] + '; color: ' + styleData['color'] + '; font-weight: ' + styleData['font-weight']
        + '; margin: ' + styleData['margin'] + '; border-radius: ' + styleData['border-radius'] + '; transition-property: '
        + styleData['transition-property'] + '; transition-duration: ' + styleData['transition-duration']
        + '; transition-timing-function: ' + styleData['transition-timing-function'] + ';');
      newCard.setAttribute('data-real-number', NUMBERS[cardId]);
      newCard.setAttribute('data-card-id', cardId.toString());
      newCard.textContent = PLACEHOLDER;
      newCard.addEventListener('click', () => {
        if (openedCards.length === 1 || openedCards.length === 0) {
          openedCards.push(newCard);
          newCard.textContent = newCard.getAttribute('data-real-number').toString();
          newCard.style.color = '#ff0000';
        }
        if (openedCards.length === 2 && !isCardOpened) {
          isCardOpened = true;
          setTimeout(() => {
            let index = openedCards.indexOf(newCard) === 0 ? openedCards.indexOf(newCard) + 1 : openedCards.indexOf(newCard) - 1;
            if (newCard.getAttribute('data-real-number') === openedCards[index].getAttribute('data-real-number') &&
              newCard.getAttribute('data-card-id') !== openedCards[index].getAttribute('data-card-id')) {
              let card = openedCards[index];
              newCard.style.color = '#00ffa5';
              card.style.color = '#00ffa5';
              newCard.style.fontWeight = '500';
              card.style.fontWeight = '500';
              setTimeout(() => {
                newCard.remove();
                openedCards[index].remove();
                isCardOpened = false;
                newCard.style.color = '#fff';
                openedCards[index].style.color = '#fff';
                openedCards = [];
                pairs--;
                window.cardsGamePairs = pairs;
              }, 1000);
            } else {
              setTimeout(() => {
                newCard.style.color = '#fff';
                openedCards[index].style.color = '#fff';
                newCard.textContent = PLACEHOLDER;
                openedCards[index].textContent = PLACEHOLDER;
                openedCards = [];
                isCardOpened = false;
              }, TIMEOUT);
            }
          }, TIMEOUT);
        }
      });
      cardId++;
      currentArr.push(newCard);
    }
    MATRIX_ARR.push(currentArr);
    currentArr = [];
  }
  appendAll(MATRIX_ARR, MATRIX_CONTAINER);
});

function appendAll(arr, elem) {
  const rows = [];
  for (let i = 0; i < arr.length; i++) {
    let newCardRow = document.createElement('div');
    newCardRow.style.display = "flex";
    newCardRow.classList.toggle('matrix__cards-row');
    rows.push(newCardRow);
  }

  for (let row = 0; row < arr.length; row++) {
    for (let card of arr[row]) {
      rows[row].append(card);
    }
  }

  for (let cardRow of rows) {
    elem.append(cardRow);
  }
}

function shuffle(array) {
  let copy = [];
  for (let elem of array) {
    copy.push(elem);
  }

  let result = [];
  for (let elem of copy) {
    let random = randomChoice(array);
    result.push(random);
    array.splice(array.indexOf(random), 1);
  }
  return result;
}

function randomChoice(arr) {
  return arr[range(0, (arr.length - 1))];
}

function range(from, to) {
  return Math.round(from + Math.random() * (to - from));
}
