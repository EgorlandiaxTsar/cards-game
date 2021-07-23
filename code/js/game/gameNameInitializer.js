document.addEventListener('DOMContentLoaded', () => {
  const TITLE = document.getElementById('page-title');
  const DATA = JSON.parse(window.localStorage.getItem('data'));
  TITLE.textContent = DATA['name'];
});
