// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];


  const ingredientsEl = document.querySelector("#ingredients");
  const createListItemEl = ingredients.map((ingredient) => {
    const listEl = document.createElement("li");
    listEl.classList = "item";
  
    listEl.textContent = ingredient;
    return listEl;
  });
  
  console.log(createListItemEl);
  
  ingredientsEl.append(...createListItemEl);
  console.log(ingredientsEl);