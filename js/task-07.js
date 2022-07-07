// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const inputControl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');
textSize.style.fontSize = inputControl.value + 'px';
textSize.style.color = 'green';

inputControl.addEventListener('input', () => {
  textSize.style.fontSize = inputControl.value + 'px';
  if (inputControl.value >= '57') {
    textSize.style.color = 'red';
  } else {
    textSize.style.color = 'green';
  }
});