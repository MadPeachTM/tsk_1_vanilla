/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
'use strict';

const CLASS_TABLE_ELEMENT = document.querySelector('.table');
const CREATE_TABLE_BUTTON = document.querySelector('.create-table-button');
const ADD_ROW_BUTTON = document.querySelector('.add-row-button');
const ADD_COLUMN_BUTTON = document.querySelector('.add-column-button');
const LETTERS_LIST = Array.from(
  'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
);
// const CREATE_DIV_BUTTON = document.querySelector('.create-div-button');
const CLEAR_INPUTS_BUTTON = document.querySelector('.clear-inputs-button');
const DIV_FOR_BUTTON = document.querySelector('.divHere');
const DOWNLOAD_TABLE_BUTTON = document.querySelector('.download-table-button');
const SHOW_FIRST_PAGE_BUTTON = document.querySelector('#first-page');
const SHOW_SECOND_PAGE_BUTTON = document.querySelector('#second-page');
let ceilName = [];
let currentLetter = '';

CREATE_TABLE_BUTTON.addEventListener('click', createTable);
ADD_ROW_BUTTON.addEventListener('click', addRow);
ADD_COLUMN_BUTTON.addEventListener('click', addColumn);
CLEAR_INPUTS_BUTTON.addEventListener('click', clearInputs);
// CREATE_DIV_BUTTON.addEventListener('click', addDiv);
DOWNLOAD_TABLE_BUTTON.addEventListener('click', generateexcel);
SHOW_FIRST_PAGE_BUTTON.addEventListener('click', showFirstPage);
SHOW_SECOND_PAGE_BUTTON.addEventListener('click', showSecondPage);

ADD_ROW_BUTTON.disabled = true;
ADD_COLUMN_BUTTON.disabled = true;
CLEAR_INPUTS_BUTTON.disabled = true;
DOWNLOAD_TABLE_BUTTON.disabled = true;

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
  DOWNLOAD_TABLE_BUTTON.disabled = false;
  CREATE_TABLE_BUTTON.disabled = true;
}

function generateColumnName(column) {
  const rowNumber = CLASS_TABLE_ELEMENT.querySelectorAll('tr').length - 1;
  const columnNumber = CLASS_TABLE_ELEMENT.querySelectorAll('tr')[
    rowNumber
  ].querySelectorAll('td').length;
  if (rowNumber + 1 > 0) {
    if (columnNumber + 1 > LETTERS_LIST.length) {
      currentLetter =
        LETTERS_LIST[
          columnNumber -
            LETTERS_LIST.length * Math.floor(columnNumber / LETTERS_LIST.length)
        ];
      ceilName[0] = currentLetter;
      ceilName[Math.floor(columnNumber / LETTERS_LIST.length)] =
        LETTERS_LIST[LETTERS_LIST.length - 1];
      return column.setAttribute('data-placeholder', ceilName.join(''));
    } else {
      ceilName[Math.floor(columnNumber / LETTERS_LIST.length)] =
        LETTERS_LIST[columnNumber];
      return column.setAttribute('data-placeholder', ceilName.join(''));
    }
  }
}

function generateRowName(column) {
  const rowNumber = CLASS_TABLE_ELEMENT.querySelectorAll('tr').length - 1;
  return column.setAttribute('data-placeholder', rowNumber);
}

function addColumn() {
  for (
    let i = 0;
    i < document.querySelector('#myTable').querySelectorAll('tr').length;
    i++
  ) {
    const column = document.createElement('td');
    const columnText = document.createElement('p');
    columnText.setAttribute('contenteditable', 'true');
    // column.appendChild(columnText);
    if (i === 0) {
      columnText.textContent = generateColumnName(columnText);
    }
    document
      .querySelector('#myTable')
      .querySelectorAll('tr')
      [i].appendChild(column)
      .appendChild(columnText);
  }
  for (
    let i = 0;
    i < document.querySelector('#myTable').querySelectorAll('td').length;
    i++
  ) {
    if (
      document.querySelector('#myTable').querySelectorAll('td')[i]
        .childElementCount === 0 &&
      document.querySelector('#myTable').querySelectorAll('td')[i]
        .textContent === ''
    ) {
      const input = document.createElement('p');
      input.setAttribute('contenteditable', 'true');
      document
        .querySelector('#myTable')
        .querySelectorAll('td')
        [i].appendChild(input);
    }
  }
}

function addRow() {
  const columnsAmount = document
    .querySelector('#myTable')
    .querySelectorAll('tr')[
    document.querySelector('#myTable').querySelectorAll('tr').length - 1
  ].childElementCount;
  const row = document.createElement('tr');
  const rowText = document.createElement('p');
  rowText.setAttribute('contenteditable', 'true');
  document.querySelector('#myTable').appendChild(row);
  for (let i = 0; i < columnsAmount; i++) {
    const column = document.createElement('td');
    if (i === 0) {
      rowText.textContent = generateRowName(rowText);
      document
        .querySelector('#myTable')
        .querySelectorAll('tr')
        [
          document.querySelector('#myTable').querySelectorAll('tr').length - 1
        ].appendChild(column)
        .appendChild(rowText);
    }
    document
      .querySelector('#myTable')
      .querySelectorAll('tr')
      [
        document.querySelector('#myTable').querySelectorAll('tr').length - 1
      ].appendChild(column);
  }
  for (
    let i = 0;
    i < document.querySelector('#myTable').querySelectorAll('td').length;
    i++
  ) {
    if (
      document.querySelector('#myTable').querySelectorAll('td')[i]
        .childElementCount === 0 &&
      document.querySelector('#myTable').querySelectorAll('td')[i]
        .textContent === ''
    ) {
      const input = document.createElement('p');
      input.setAttribute('contenteditable', 'true');
      document
        .querySelector('#myTable')
        .querySelectorAll('td')
        [i].appendChild(input);
    }
  }
}

function clearInputs() {
  document.querySelectorAll('#myTable p').forEach(element => {
    element.textContent = '';
  });
}
// function addDiv() {
//   fetch('user.json')
//     .then(response => response.json())
//     .then(user => fetch(`https://api.github.com/users/${user.name}`))
//     .then(response => response.json())
//     .then(renderAvatar => {
//       const img = document.createElement('img');
//       img.src = renderAvatar.avatar_url;
//       img.className = 'git-user-avatar';
//       DIV_FOR_BUTTON.append(img);
//       // setTimeout(() => img.remove(), 3000);
//     });
// }

function generateexcel() {
  var table = document.getElementById('myTable');
  var html = table.outerHTML.replace(/ /g, '%20');
//   window.open( // TODO выяснить как скачивать xlsx файлы (через ноду(?))
//     'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,' +
//       encodeURIComponent(html)
//   );
    window.open(
      'data:application/vnd.ms-excel,' + '\uFEFF' + encodeURIComponent(html)
    );
}
const firstPage = document.querySelector('#first-section');
const secondPage = document.querySelector('#second-section');
function showFirstPage() {
    firstPage.style.opacity = 1;
    secondPage.style.opacity = 0;
    setTimeout(() => {
      firstPage.style.visibility = 'visible';
      secondPage.style.visibility = 'hidden';
    }, 200);
}

function showSecondPage() {
    firstPage.style.opacity = 0;
    secondPage.style.opacity = 1;
    setTimeout(() => {
      firstPage.style.visibility = 'hidden';
      secondPage.style.visibility = 'visible';
    }, 200);
}
