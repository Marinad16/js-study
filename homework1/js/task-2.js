'use strict';

const total = 100;
const ordered = 50;

// if (total < ordered) {
//   console.log('На складе недостаточно товаров!');
// } else {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// }

const status =
  total < ordered
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';
console.log(status);
