'use strict';

const t5 = document.querySelector('.t5');
const t6 = document.querySelector('.t6');
const t7 = document.querySelector('.t7');
const t8 = document.querySelector('.t8');
const t9 = document.querySelector('.t9');
const t10 = document.querySelector('.t10');
const t11 = document.querySelector('.t11');
const t12 = document.querySelector('.t12');
const t13 = document.querySelector('.t13');
const t14 = document.querySelector('.t14');
const t15 = document.querySelector('.t15');

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
function showArgs(...args) {
  console.log(arguments[0]);
  console.log(arguments.length);
}
showArgs(1, 2, 3, 4);

function bind(context, fn) {
  return function(...args) {
    fn.apply(context, args);
  };
}

const person1 = {
  name: 'Mihail',
  age: 22,
  job: 'Frontend',
  sayHi() {
    return this.name;
  }
};
const person2 = {
  name: 'Elena',
  age: 19,
  job: 'SMM',
  sayHi() {
    return this.name;
  }
};
// function logPerson() {
//     console.log(this.name + ' ' + this.age + ' ' + this.job);
// }
// bind(person1, logPerson)();
// bind(person2, logPerson)();
// console.log(person1.sayHi());

function callMe(htmlObject) {
  console.log(this);
  htmlObject.textContent =
    this.name + ', ' + this.age + ', ' + this.job + ', ' + this.sayHi();
}

const justToBind = callMe.bind(person1, t9);
justToBind();
callMe.call(person2, t10);

// const result = array.map(elem => elem * 2);
// const result = array.reduce(sum, elem => sum + elem, 0);
// const result = array.forEach(elem => elem * 2);
// let fetchResult = await fetch('https://jsonplaceholder.typicode.com/todos');
async function fetching() {
  let url = 'https://jsonplaceholder.typicode.com/todos';
  let response = await fetch(url);
  let commits = await response.json();
  for (let element in commits[0]) {
    t11.textContent = t11.textContent + element + ' ';
  }
  //   console.log((commits[0]));
}
fetching();

let namesList = [];
for (let i = 0; i<100;i++) {
  namesList[i] = 'user' + (i + 1);
}
let newArr = namesList.map(
  element => element[0].toUpperCase() + element.substr(1)
);
console.log(newArr);