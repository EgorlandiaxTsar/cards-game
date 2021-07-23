document.addEventListener('DOMContentLoaded', () => {
  const timeout = Object.values(JSON.parse(window.localStorage.getItem('data')))[1];
  let timeInGame = window.cardsGameSecs;
  setInterval(() => {
    timeInGame = window.cardsGameSecs;
    document.getElementById('time').textContent = 'Remains: ' + (Number(timeout) - Number(timeInGame));
  }, 1000);
  let timeControlInterval = setInterval(() => {
    if (timeInGame >= timeout) {
      clearInterval(timeControlInterval);
      const MODAL_PLACEHOLDER = document.createElement('div');
      MODAL_PLACEHOLDER.style.width = document.documentElement.scrollWidth.toString() + 'px';
      MODAL_PLACEHOLDER.style.height = document.documentElement.scrollHeight.toString() + 'px';
      MODAL_PLACEHOLDER.style.position = 'absolute';
      MODAL_PLACEHOLDER.style.top = 0 + 'px';
      MODAL_PLACEHOLDER.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
      MODAL_PLACEHOLDER.id = 'modal-canvas';
      document.body.insertBefore(MODAL_PLACEHOLDER, document.getElementById('root'));
      const MODAL_CONTENT = document.createElement('div');
      MODAL_CONTENT.id = 'modal-content';
      MODAL_CONTENT.style.margin = '400px auto 0';
      MODAL_CONTENT.style.backgroundColor = '#444';
      MODAL_CONTENT.style.textAlign = 'center';
      MODAL_CONTENT.style.width = '700px';
      MODAL_CONTENT.style.height = '600px';
      MODAL_CONTENT.style.borderRadius = '10px';
      MODAL_PLACEHOLDER.append(MODAL_CONTENT);
      const H1 = document.createElement('h1');
      H1.style.color = '#fff';
      H1.style.paddingTop = '30px';
      H1.textContent = 'Ooooops... Time has passed! Try again.'
      MODAL_CONTENT.append(H1);
      const TIME_IN_GAME = document.createElement('p');
      TIME_IN_GAME.style.color = '#00ffa5';
      TIME_IN_GAME.textContent = 'Time in game: ' + timeInGame + ' seconds';
      TIME_IN_GAME.style.fontSize = '22px';
      TIME_IN_GAME.style.textAlign = 'left';
      TIME_IN_GAME.style.marginLeft = '90px';
      TIME_IN_GAME.style.paddingTop = '60px';
      const LEVEL = document.createElement('p');
      LEVEL.style.color = '#00ffa5';
      LEVEL.textContent = 'Level: ' + Object.values(JSON.parse(window.localStorage.getItem('data')))[4];
      LEVEL.style.fontSize = '22px';
      LEVEL.style.textAlign = 'left';
      LEVEL.style.marginLeft = '90px';
      const TOTAL_TIME = document.createElement('p');
      TOTAL_TIME.style.color = '#00ffa5';
      TOTAL_TIME.textContent = "Total time: " + Object.values(JSON.parse(window.localStorage.getItem('data')))[1] + ' seconds';
      TOTAL_TIME.style.fontSize = '22px';
      TOTAL_TIME.style.textAlign = 'left';
      TOTAL_TIME.style.marginLeft = '90px';
      MODAL_CONTENT.append(TIME_IN_GAME);
      MODAL_CONTENT.append(LEVEL);
      MODAL_CONTENT.append(TOTAL_TIME);
      const BUTTON_GROUP = document.createElement('div');
      BUTTON_GROUP.style.display = 'flex';
      BUTTON_GROUP.style.color = '#fff';
      BUTTON_GROUP.style.width = '600px';
      BUTTON_GROUP.style.height = '170px'
      BUTTON_GROUP.style.justifyContent = 'space-between';
      BUTTON_GROUP.style.alignItems = 'center';
      BUTTON_GROUP.style.borderRadius = '10px'
      BUTTON_GROUP.style.margin = '90px auto 0';
      BUTTON_GROUP.style.backgroundColor = '#333';
      MODAL_CONTENT.append(BUTTON_GROUP);
      const BACK_TO_MAIN_BUTTON = document.createElement('div');
      BACK_TO_MAIN_BUTTON.style.backgroundColor = '#222';
      BACK_TO_MAIN_BUTTON.style.textAlign = 'center';
      BACK_TO_MAIN_BUTTON.style.lineHeight = '120px';
      BACK_TO_MAIN_BUTTON.style.width = '250px';
      BACK_TO_MAIN_BUTTON.style.height = '120px';
      BACK_TO_MAIN_BUTTON.style.borderRadius = '10px'
      BACK_TO_MAIN_BUTTON.style.marginLeft = '20px'
      BACK_TO_MAIN_BUTTON.style.fontSize = '22px';
      BACK_TO_MAIN_BUTTON.style.fontWeight = '700';
      BACK_TO_MAIN_BUTTON.style.cursor = 'pointer';
      BACK_TO_MAIN_BUTTON.classList.toggle('modal-control-btn');
      BUTTON_GROUP.append(BACK_TO_MAIN_BUTTON);
      const NEW_GAME_BUTTON = document.createElement('div');
      NEW_GAME_BUTTON.style.backgroundColor = '#222';
      NEW_GAME_BUTTON.style.textAlign = 'center';
      NEW_GAME_BUTTON.style.lineHeight = '120px';
      NEW_GAME_BUTTON.style.width = '250px';
      NEW_GAME_BUTTON.style.height = '120px';
      NEW_GAME_BUTTON.style.borderRadius = '10px'
      NEW_GAME_BUTTON.style.marginRight = '20px'
      NEW_GAME_BUTTON.style.fontSize = '22px';
      NEW_GAME_BUTTON.style.fontWeight = '700';
      NEW_GAME_BUTTON.style.cursor = 'pointer';
      NEW_GAME_BUTTON.textContent = 'New game';
      NEW_GAME_BUTTON.classList.toggle('modal-control-btn');
      BUTTON_GROUP.append(NEW_GAME_BUTTON);
      NEW_GAME_BUTTON.addEventListener('click', () => {window.location.reload()});
      const BACK_TO_MAIN_LINK = document.createElement('a');
      BACK_TO_MAIN_LINK.href = 'form.html';
      BACK_TO_MAIN_LINK.style.padding = '50px';
      BACK_TO_MAIN_LINK.textContent = 'Back to main';
      BACK_TO_MAIN_BUTTON.append(BACK_TO_MAIN_LINK);
    }
  }, 1000);
});
