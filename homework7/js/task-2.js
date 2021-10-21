const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(element => {
  const itemRef = document.createElement('li');
  itemRef.textContent = element;
  console.log(itemRef);

  const listRef = document.querySelector('#ingredients');
  listRef.appendChild(itemRef);
  console.log(listRef);
});


