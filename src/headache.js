/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable indent */
'use strict';
const t1 = document.querySelector('.t1');
const t2 = document.querySelector('.t2');
const t3 = document.querySelector('.t3');
const t4 = document.querySelector('.t4');
// const t5 = document.querySelector('.t5');

const func1 = (...args) => {
    return args.map((num) => {
        return num * 2;
    });
};
t1.textContent = func1(1, 2, 3, 4, 5, 6, 7, 8);

const num = 457457556546;

function colonOdd(num) {
    const str = num.toString();
    const result = [str[0]];
    // console.log(result);
    for (let i = 1; i < str.length; i++) {
        if ((str[i - 1] % 2 !== 0) && (str[i] % 2 !== 0)) {
            result.push(':', str[i]);
        } else {
            result.push(str[i]);
        }
    }
    return result.join('');
}
t2.textContent = colonOdd(num);

function data() {
    return new Date() + '__' + new Date().getTimezoneOffset() / -60 + ' часа (часовой пояс)';
}
t3.textContent = data();

function curry(f) { // curry(f) выполняет каррирование
    console.log(f);
    return function(a) {
        console.log(a);
        return function(b) {
            console.log(b);
            return f(a, b);
        };
    };
}
// использование
function sum(a, b) {
    return a + b;
}
const carriedSum = curry(sum);

t4.textContent = carriedSum(1)(2); // 3