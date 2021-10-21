'use strict';

const credits = 23580;
const pricePerDroid = 3000;

const droidUserAmount = document.querySelector('input[name="amount"]');

const userButton = document.querySelector('.task4');

userButton.addEventListener('click', function () {
  if (droidUserAmount.value === '') {
    console.log('Отменено пользователем!');
  } else {
    let droidAmount = Number(droidUserAmount.value);
    let totalPrice = pricePerDroid * droidAmount;
    console.log('Цена: ' + totalPrice + ' за ' + droidAmount + ' дроидов');

    if (totalPrice > credits) {
      console.log('Недостаточно средств на счету!');
    } else {
      console.log(
        'Вы купили ' +
          droidAmount +
          ' дроидов, на счету осталось ' +
          (credits - totalPrice) +
          ' кредитов',
      );
    }
  }
});
