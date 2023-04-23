const jokeButton = document.getElementById('joke-button');
const modalContainer = document.getElementById('modal-container');
const jokeText = document.getElementById('joke-text');
// const closeButton = document.getElementById('close');

jokeButton.addEventListener('click', () => {
  fetch('https://api.icndb.com/jokes/random')
    .then(response => response.json())
    .then(data => {
      const joke = data.value.joke;
      jokeText.innerHTML = joke;
      modalContainer.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});