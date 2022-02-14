'use strict';

const books = document.querySelectorAll('.book');
const lists = document.querySelectorAll('ul');
const elements = document.querySelectorAll('li');
const advertising = document.querySelector('.adv');
const title = document.querySelectorAll('a');
const newElem = document.createElement('li');
const body = document.querySelector('body');



//1. Выставляем правильно список книг
books[0].before(books[1]);
books[0].after(books[4]);
books[5].after(books[2]);
books[2].before(books[5]);

//2. Замена заднего фона
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//3. Исправление заголовка книги
title[4].textContent = 'Книга 3. this и Прототипы Объектов';


//4. Удаление рекламы
advertising.remove();

//Восстановить порядок глав во второй и пятой книге

//2 книга
elements[1].after(elements[3]);
elements[3].after(elements[6]);
elements[6].after(elements[8]);
elements[8].after(elements[4]);
elements[4].after(elements[5]);
elements[2].before(elements[7]);
elements[2].before(elements[9]);

//5 книга
elements[47].after(elements[55]);
elements[55].after(elements[49]);
elements[49].after(elements[50]);
elements[48].after(elements[52]);
elements[52].after(elements[53]);
console.log(elements);


//Добавление главы в 6 книгу
newElem.textContent = 'Глава 8: За пределами ES6';
lists[2].append(newElem);
elements[25].after(newElem);