const countTotalSalary = function (employees) {
  const salaryForPerson = Object.values(employees);
  let total = 0;
  if (salaryForPerson.length === 0)
    return total;
  for (const salary of salaryForPerson) {
    total += salary;
    return total;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
