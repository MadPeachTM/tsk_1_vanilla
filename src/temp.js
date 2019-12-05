'use strict';
var promise = new Promise(function (resolve, reject) {
  console.log('hi');
  // задача, не требующая времени
  resolve(123) // мгновенно выдаст результат: 123
})
promise.then(
  function (result) { console.log(result) },
  function (error) { console.log(error) }
)
// promise.finally(console.log(promise));

const t5 = document.querySelector('.t5');
let a = 'bob';
function f(...arg) {
  return arg;
}
a = 'peter';
t5.textContent = f(a);
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
console.log(array1);