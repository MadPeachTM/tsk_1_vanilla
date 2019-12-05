'use strict';
var promise = new Promise(function (resolve, reject) {
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