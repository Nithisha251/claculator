// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'clear') {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.textContent = '0';
    } else if (value === '=') {
      if (previousInput && currentInput && operator) {
        const result = calculate(Number(previousInput), Number(currentInput), operator);
        display.textContent = result;
        currentInput = result.toString();
        previousInput = '';
        operator = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

function calculate(a, b, op) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !==0 ? a / b : 'Error';
    default:
      return 0;
  }
}