const findLongestWord = function (string) {
  const array = string.split(' ');
  let longestWord;
  for (let i = 0; i < array.length-1; i += 1) {
    let temp = array[i].length >= array[i + 1].length ? array[i] : array[i + 1];
    if (longestWord === undefined) {
      longestWord = temp;
    } else {
      longestWord = longestWord.length >= temp.length ? longestWord : temp;
    }
  }
  return longestWord;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
