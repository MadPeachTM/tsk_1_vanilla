'use strict';

const t5 = document.querySelector('.t5');
const t6 = document.querySelector('.t6');
const t7 = document.querySelector('.t7');
const t8 = document.querySelector('.t8');

var promise = new Promise(function(resolve, reject) {
    console.log('hi');
    // задача, не требующая времени
    resolve(123); // мгновенно выдаст результат: 123
});
promise.then(
    function(result) {
        console.log(result);
    },
    function(error) {
        console.log(error);
    }
);
// promise.finally(console.log(promise));
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
t6.textContent = f.call(null) + '';

function f() {
    return this;
}

for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        t7.textContent = t7.textContent + i;
    }, 100);
}

for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        t8.textContent = t8.textContent + i;
    }, 100);
}

console.log(null + undefined);

// let str = 'Hello';
// str.something = 5;
// alert(str.something);

// let f2 = function g() {
//     return 23;
// };
// alert(typeof g());
