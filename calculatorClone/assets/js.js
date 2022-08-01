let display = document.getElementById('display');
let num1 = '';
let num2 = '';
let operator = null;

function addNumber(num) {
  if (operator === null) {
    num1 += num
    display.innerHTML = num1;
  } else if ((num === '+') || (num === '-') ||
    (num === '*') || (num === '/')) {
    operator = num
    display.innerHTML = operator;
  } else {
    num2 += num
    display.innerHTML = num2;
  }

  console.log('num1', num1, 'num2', num2, 'ope', operator)
}

function add() {
  operator = '+'
  addNumber(operator)
}

function sub() {
  operator = '-'
  addNumber(operator)
}

function mul() {
  operator = '*'
  addNumber(operator)
}

function div() {
  operator = '/'
  addNumber(operator)
}

function softDel() {
  num1 = ''
  num2 = ''
  operator = null
  display.innerHTML = 0;
}

function del() {
  if (num1 !== '' && operator === null) {
    num1 = num1.slice(0, num1.length - 1)
    display.innerHTML = num1;
  }
  if (num2 !== '' && operator !== null) {
    num2 = num2.slice(0, num2.length - 1)
    display.innerHTML = num2;
  }
}

function dot() {
  if (num1 !== '' && operator === null) {
    num1 += '.';
    display.innerHTML = num1;
  }
  if (num2 !== '' && operator !== null) {
    num2 += '.';
    display.innerHTML = num2;
  }
}


function equal() {

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case '+':
      num1 = (num1 + num2).toString()
      break;
    case '-':
      num1 = (num1 - num2).toString()
      break;
    case '*':
      num1 = (num1 * num2).toString()
      break;
    case '/':
      num1 = (num1 / num2).toString()
      break;
  }
  display.innerHTML = num1;
  // num1 = ''
  num2 = ''
//   operator = null
  console.log('num1', num1, 'num2', num2, 'ope', operator)
}
