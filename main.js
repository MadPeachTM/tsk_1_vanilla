'use strict';

const MAIN_ELEMENT = document.querySelector('main');
const CREATE_TABLE_BUTTON = document.querySelector('.create-table-button');
const ADD_ROW_BUTTON = document.querySelector('.add-row-button');
const ADD_COLUMN_BUTTON = document.querySelector('.add-column-button');
const lettersList = Array(('abcdefghijklmnopqrstuvwxyz').toUpperCase().split(''))[0];

CREATE_TABLE_BUTTON.addEventListener('click', createTable);
ADD_ROW_BUTTON.addEventListener('click', addRow);
ADD_COLUMN_BUTTON.addEventListener('click', addColumn);

ADD_ROW_BUTTON.disabled = true;
ADD_COLUMN_BUTTON.disabled = true;

function createTable() {
  const table = document.createElement('TABLE');
  // const rowNumber = MAIN_ELEMENT.querySelectorAll('td').length;
  const row = document.createElement('tr');
  table.setAttribute('id', 'myTable');
  MAIN_ELEMENT.appendChild(table);
  document.querySelector('#myTable').appendChild(row);
  for (let i = 0; i < 10; i++) {
    const column = document.createElement('td');
    column.textContent = justdoit(column);
    document.querySelector('#myTable').querySelector('tr').appendChild(column);
  }
  // for (let i = 0; i < 10; i++) {
  //   const row = document.createElement('tr');
  //   row.textContent = justdoit(row);
  //   document.querySelector('#myTable').appendChild(row);
  // }

  ADD_ROW_BUTTON.disabled = false;
  ADD_COLUMN_BUTTON.disabled = false;
  CREATE_TABLE_BUTTON.disabled = true;
}

function justdoit(column) {
  let blankLetters = '';
  const rowNumber = MAIN_ELEMENT.querySelectorAll('tr').length - 1;
  const columnNumber = MAIN_ELEMENT.querySelectorAll('tr')[rowNumber].querySelectorAll('td').length;
  // if (columnNumber === 0) {
    console.log(columnNumber);
  // }
  if (columnNumber + 1 > lettersList.length) {
    for (let i = 0; i < Math.floor(columnNumber / lettersList.length); i++) {
      blankLetters += lettersList[lettersList.length - 1];
    }
    return column.textContent = lettersList[rowNumber] + blankLetters + lettersList[columnNumber - lettersList.length * blankLetters.length];
  } else {
    return column.textContent = lettersList[rowNumber] + lettersList[columnNumber];
  }
}

function addColumn() {
  // console.log('dfgdgfg');
  const column = document.createElement('td');
  column.textContent = justdoit(column);
  // console.log(document.querySelector('#myTable').querySelectorAll('tr').length);
for (let i =0; i< document.querySelector('#myTable').querySelectorAll('tr').length; i++) {
  // console.log(document.querySelector('#myTable').querySelectorAll('tr')[i].childNodes.length);
  // console.log(document.querySelector('#myTable').querySelectorAll('tr')[i]);
  document.querySelector('#myTable').querySelectorAll('tr')[i].appendChild(column);
}
}

function addRow() {
  console.log(document.querySelector('#myTable').querySelectorAll('tr')[document.querySelector('#myTable').querySelectorAll('tr').length - 1].childElementCount - 1);
  const row = document.createElement('tr');
  document.querySelector('#myTable').appendChild(row);
  for (let i = 0; i < (document.querySelector('#myTable').querySelectorAll('tr')[document.querySelector('#myTable').querySelectorAll('tr').length - 1].childElementCount - 1); i++) {
    console.log('i');
    const column = document.createElement('td');
    column.textContent = justdoit(column);
    document.querySelector('#myTable').querySelectorAll('tr')[document.querySelector('#myTable').querySelectorAll('tr').length - 1].appendChild(column);
  }
}