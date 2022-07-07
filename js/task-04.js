// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

//<div id="counter">
  //<button type="button" data-action="decrement">-1</button>
  //<span id="value">0</span>
  //<button type="button" data-action="increment">+1</button>
//</div>


// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const counter = document.querySelector('#value');
counter.value = 0;

const incrementButton = document.querySelector('button[data-action="increment"]');
incrementButton.addEventListener('click', () => {
  counter.value++;
  counter.textContent = counter.value;
});

const decrementButton = document.querySelector('button[data-action="decrement"]');
decrementButton.addEventListener('click', () => {
  counter.value--;
  counter.textContent = counter.value;
});