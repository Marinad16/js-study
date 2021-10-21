const array = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

const logItems = function (k) {
  // твой код
  for (let i = 0; i < k.length; i += 1) {
    console.log(i + 1 + ' - ' + k[i]);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(array);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
