/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable indent */
'use strict';
// alt+shift+f => format document

const t1 = document.querySelector('.t1');
const t2 = document.querySelector('.t2');
const t3 = document.querySelector('.t3');
const t4 = document.querySelector('.t4');
// const t5 = document.querySelector('.t5');
const t11 = document.querySelector('.t11');
const t12 = document.querySelector('.t12');
const t13 = document.querySelector('.t13');
const t14 = document.querySelector('.t14');
const t15 = document.querySelector('.t15');
const func1 = (...args) => {
  return args.map(num => {
    return num;
  });
};
const num = 457457556546;
const carriedSum = curry(sum);

t1.textContent =
  t1.textContent + 'func1: ' + func1(1, 2, 3, 4, 5, 6, 7, 8) + ' ';
function func2(...args) {
  console.log(typeof arguments.toArray);
  return args;
}
t1.textContent =
  t1.textContent + 'func2: ' + func2(1, 2, 3, 4, 5, 6, 7, 8) + ' ';

function colonOdd(num) {
  const str = num.toString();
  const result = [str[0]];
  // console.log(result);
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) {
      result.push(':', str[i]);
    } else {
      result.push(str[i]);
    }
  }
  return result.join('');
}
t2.textContent = colonOdd(num);

function data() {
  return (
    new Date() +
    ', +' +
    new Date().getTimezoneOffset() / -60 +
    ' часа (часовой пояс)'
  );
}
t3.textContent = data();

function curry(f) {
  // curry(f) выполняет каррирование
  console.log(f); // ƒ sum(a, b, c) { return '' + a + b + c; }
  return function(a) {
    console.log(a); // 2
    return function(b) {
      console.log(b); // 3
      return function(c) {
        console.log(c); //
        return f(a, b, c);
      };
    };
  };
}

// использование
function sum(a, b, c) {
  return '' + a + b + c;
}

t4.textContent = carriedSum(2)(3)(); // 23undefined

function Parent(name, age) {
  this.name = name;
  this.age = age;
  this.nameAge = '';
  this.setNameJob = function(name, age) {
    this.nameAge = name + ', ' + age;
  };
}
function Child(job, name, age) {
  Parent.call(this, name, age);
  this.job = job;
  this.born = 2019 - age;
}
// Child.prototype=Parent.prototype;
// console.log(Parent.prototype);
// console.log(Child.prototype);
const bob = new Child('Doctor', 'Bob', 33);
console.log('bob');
bob.setNameJob(bob.name, bob.age);
console.log(bob);
console.log(Object.entries(bob));
Object.entries(bob).map(
  element =>
    (t11.textContent = t11.textContent + element[element.length - 1] + ', ')
);

class CarAge {
  _age = 0;
  constructor(value) {
    this.age = value;
  }
  set age(age) {
    this._age = age;
  }
  get age() {
    return this._age;
  }
  /*
  washed() {
    return true;
  }
  тоже что в функциях-классах:
  CarAge.prototype.washed = function() { return true };
  */
}

class CarType extends CarAge {
  _wheels = 4;
  _type = '';
  constructor(value, type) {
    // super = __proto__, super юзаем только в конструкторе, вне его просто this
    super(value);
    this._type = type;
  }
  get fullData() {
    return this.concatData();
  }
  concatData() {
    return (
      'type: ' +
      this._type +
      ', ' +
      'age: ' +
      this._age +
      ', ' +
      'wheels: ' +
      this._wheels
    );
  }
}
let myCar = new CarType(12, 'jeep');
console.log(myCar);
t12.textContent = myCar.fullData;

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static createTodays() {
    // помним, что this = Article
    return new this('Сегодняшний дайджест', new Date());
  }
}
let article = Article.createTodays();
let isstaticarticle = new Article(1, 2);
console.log(isstaticarticle);

function Name(name) {
  this.name = name;
}
Name.staticMethod = function() {};
let ivan = new Name('Ivan');
console.log(ivan);
/*
Экспорт:

Перед объявлением класса/функции/…:
export [default] class/function/variable ...

Отдельный экспорт:
export {x [as y], ...}.

Реэкспорт:
export {x [as y], ...} from "module"
export * from "module" (не реэкспортирует export default).
export {default [as y]} from "module" (реэкспортирует только export default).

Импорт:

Именованные экспорты из модуля:
import {x [as y], ...} from "module"

Экспорт по умолчанию:
import x from "module"
import {default as x} from "module"

Всё сразу:
import * as obj from "module"

Только подключить модуль (его код запустится), но не присваивать его переменной:
import "module"

Динамический мипорт/экспорт:

export function hi() {
  alert(`Привет`);
}

export function bye() {
  alert(`Пока`);
}
...
let {hi, bye} = await import('./say.js');

export default function() {
  alert("Module loaded (export default)!");
}
...
let obj = await import('./say.js');
let say = obj.default;
*/

let objIter = {
  start: 0,
  today: 2
};
objIter[Symbol.iterator] = function() {
  return {
    current: this.start,
    last: this.today,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};
for (let el of objIter) {
  console.log(el);
}
let a = 0;
let b = 1;
(function() {
  a = 10;
  b = 11;
  let func = new Function('console.log(a,b)');
  func();
})();

function Vehicle(mark) {
  this.mark = mark || 'Audi';
}
function Car(type, mark) {
  this.type = type || 'car';
  Vehicle.call(this, mark);
}
let newCar = new Car('Jeep', 'Lexus');
console.log(newCar);
