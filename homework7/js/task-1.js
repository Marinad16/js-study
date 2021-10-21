const itemRef = document.querySelectorAll('.item');
console.log(`В списке ${itemRef.length} категории.`);

itemRef.forEach.call(itemRef, element => {
  const title = element.querySelector('h2').innerHTML;
  const itemsLength = element.querySelectorAll('li').length;
  console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
});