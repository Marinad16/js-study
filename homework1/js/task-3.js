'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

const userPassword = document.querySelector('input[name="password"]');

const userButton = document.querySelector('.task3');

userButton.addEventListener('click', function () {
  if (userPassword.value === '') {
    console.log('Отменено пользователем!');
  } else if (userPassword.value === ADMIN_PASSWORD) {
    console.log('Добро пожаловать!');
  } else {
    console.log('Доступ запрещен, неверный пароль!');
  }
});
