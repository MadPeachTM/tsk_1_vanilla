/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
'use strict';
// import test from 'async';

const CLASS_TABLE_ELEMENT = document.querySelector('.table');
const CREATE_TABLE_BUTTON = document.querySelector('.create-table-button');
const ADD_ROW_BUTTON = document.querySelector('.add-row-button');
const ADD_COLUMN_BUTTON = document.querySelector('.add-column-button');
const LETTERS_LIST = Array(('abcdefghijklmnopqrstuvwxyz').toUpperCase().split(''))[0];
const CREATE_DIV_BUTTON = document.querySelector('.create-div-button');
const CLEAR_INPUTS_BUTTON = document.querySelector('.clear-inputs-button');
const DIV_FOR_BUTTON = document.querySelector('.divHere');

CREATE_TABLE_BUTTON.addEventListener('click', createTable);
ADD_ROW_BUTTON.addEventListener('click', addRow);
ADD_COLUMN_BUTTON.addEventListener('click', addColumn);
CLEAR_INPUTS_BUTTON.addEventListener('click', clearInputs);
CREATE_DIV_BUTTON.addEventListener('click', addDiv);

ADD_ROW_BUTTON.disabled = true;
ADD_COLUMN_BUTTON.disabled = true;
CLEAR_INPUTS_BUTTON.disabled = true;

function createTable() {
  const table = document.createElement('TABLE');
  const row = document.createElement('tr');
  table.setAttribute('id', 'myTable');
  CLASS_TABLE_ELEMENT.appendChild(table);
  document.querySelector('#myTable').appendChild(row);
  addColumn();
  addColumn();
  addRow();
  ADD_ROW_BUTTON.disabled = false;
  ADD_COLUMN_BUTTON.disabled = false;
  CLEAR_INPUTS_BUTTON.disabled = false;
  CREATE_TABLE_BUTTON.disabled = true;
}

// function justdoit(column) {
//   if (NUMBERS_LIST.length > 1) {
//     NUMBERS_LIST.shift();
//   }
//   let blankLetters = '';
//   const rowNumber = CLASS_TABLE_ELEMENT.querySelectorAll('tr').length - 1;
//   const columnNumber = CLASS_TABLE_ELEMENT.querySelectorAll('tr')[rowNumber].querySelectorAll('td').length;
//   if (columnNumber + 1 > LETTERS_LIST.length) {
//     for (let i = 0; i < Math.floor(columnNumber / LETTERS_LIST.length); i++) {
//       blankLetters += LETTERS_LIST[Math.floor(columnNumber / LETTERS_LIST.length - 1)];
//     }
//     return function () {
//       if (blankLetters.length > 1) {
//         return column.textContent = blankLetters.slice(0, Math.floor(columnNumber / LETTERS_LIST.length - 1)) + LETTERS_LIST[columnNumber - LETTERS_LIST.length * blankLetters.length];
//       } else {
//         return column.textContent = blankLetters + LETTERS_LIST[columnNumber - LETTERS_LIST.length * blankLetters.length];
//       }
//     }();
//   } else {
//     return function () {
//       if (NUMBERS_LIST[NUMBERS_LIST.length - 1] !== 0) {
//         return column.textContent = NUMBERS_LIST[NUMBERS_LIST.length - 1] + LETTERS_LIST[columnNumber];
//       } else {
//         return column.textContent = LETTERS_LIST[columnNumber];
//       }
//     }();
//   }
// }
const test = [];

function justdoit(column) {
  const rowNumber = CLASS_TABLE_ELEMENT.querySelectorAll('tr').length - 1;
  const columnNumber = CLASS_TABLE_ELEMENT.querySelectorAll('tr')[rowNumber].querySelectorAll('td').length;
  if (rowNumber + 1 > 0) {
    if (columnNumber + 1 > LETTERS_LIST.length) {
      test[Math.floor(columnNumber / LETTERS_LIST.length)] = LETTERS_LIST[columnNumber - LETTERS_LIST.length * (Math.floor(columnNumber / LETTERS_LIST.length))];
      return column.textContent = test.toString().replace(/,/g, '');
    } else {
      test[Math.floor(columnNumber / LETTERS_LIST.length)] = LETTERS_LIST[columnNumber];
      return column.textContent = test.toString().replace(/,/g, '');
    }
  }
} // array.toString().replace(/,/g, '')

function justdoit2(column) {
  const rowNumber = CLASS_TABLE_ELEMENT.querySelectorAll('tr').length - 1;
  return column.textContent = rowNumber;
}

function addColumn() {
  for (let i = 0; i < document.querySelector('#myTable').querySelectorAll('tr').length; i++) {
    const column = document.createElement('td');
    if (i === 0) {
      column.textContent = justdoit(column);
    }
    document.querySelector('#myTable').querySelectorAll('tr')[i].appendChild(column);
  }
  for (let i = 0; i < document.querySelector('#myTable').querySelectorAll('td').length; i++) {
    if (document.querySelector('#myTable').querySelectorAll('td')[i].childElementCount === 0 && document.querySelector('#myTable').querySelectorAll('td')[i].textContent === '') {
      const input = document.createElement('input');
      document.querySelector('#myTable').querySelectorAll('td')[i].appendChild(input);
    }
  }
}

function addRow() {
  const columnsAmount = document.querySelector('#myTable').querySelectorAll('tr')[document.querySelector('#myTable').querySelectorAll('tr').length - 1].childElementCount;
  const row = document.createElement('tr');
  document.querySelector('#myTable').appendChild(row);
  for (let i = 0; i < columnsAmount; i++) {
    const column = document.createElement('td');
    if (i === 0) {
      column.textContent = justdoit2(column);
    }
    document.querySelector('#myTable').querySelectorAll('tr')[document.querySelector('#myTable').querySelectorAll('tr').length - 1].appendChild(column);
  }
  for (let i = 0; i < document.querySelector('#myTable').querySelectorAll('td').length; i++) {
    if (document.querySelector('#myTable').querySelectorAll('td')[i].childElementCount === 0 && document.querySelector('#myTable').querySelectorAll('td')[i].textContent === '') {
      const input = document.createElement('input');
      document.querySelector('#myTable').querySelectorAll('td')[i].appendChild(input);
    }
  }
}

function clearInputs() {
  document.querySelectorAll('input').forEach(element => {
    element.value='';
  });
}
function addDiv() {
  fetch('user.json')
    .then((response) => response.json())
    .then((user) => fetch(`https://api.github.com/users/${user.name}`))
    .then((response) => response.json())
    .then((renderAvatar) => {
      const img = document.createElement('img');
      img.src = renderAvatar.avatar_url;
      img.className = 'git-user-avatar';
      DIV_FOR_BUTTON.append(img);
      // setTimeout(() => img.remove(), 3000);
    });
}
