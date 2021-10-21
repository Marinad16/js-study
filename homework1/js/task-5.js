'use strict';

const userCountry = document.querySelector('input[name="country"]');
const userButton = document.querySelector('.task5');

userButton.addEventListener('click', function () {
  let country = userCountry.value.toLowerCase();

  let cost;

  switch (country) {
    case 'китай':
      cost = 100;
      break;

    case 'чили':
      cost = 250;
      break;

    case 'австралия':
      cost = 170;
      break;

    case 'индия':
      cost = 80;
      break;

    case 'ямайка':
      cost = 120;
      break;

    default:
      console.log('В вашей стране доставка не доступна');
      break;
  }

  if (cost !== undefined)
    console.log(
      'Доставка в ' + country + ' будет стоить ' + cost + ' кредитов',
    );
});
