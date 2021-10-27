import menuTemplates from '../../src/templates/menu.hbs';
import menu from '../../src/menu.json';

const markup = menuTemplates(menu);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
