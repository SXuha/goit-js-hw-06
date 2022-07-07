// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.



const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

for (const image of images) {
    const galleryListElement = document.createElement('li');
    galleryListElement.insertAdjacentHTML('beforeend', `<img src="${image.url}" alt="${image.alt}" width="100%">`);
    document.querySelector('.gallery').append(galleryListElement);
  }
  
  const galleryList = document.querySelector('.gallery');
  galleryList.style.listStyleType = 'none';
  galleryList.style.display = 'flex';
  galleryList.style.justifyContent = 'center';
  galleryList.style.alignItems = 'center';
  
  const galleryItems = document.querySelectorAll('li');
  galleryItems.forEach(function (item) {
    item.style.margin = '2px';
  });
  
  const galleryImage = document.querySelectorAll('img');
  galleryImage.forEach(function (image) {
    image.style.border = '3px solid black';
    image.style.borderRadius = '20px';
  });