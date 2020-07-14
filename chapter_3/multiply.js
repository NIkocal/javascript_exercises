function multiply() {
  let readlineSync = require("readline-sync");
  let a = parseFloat(readlineSync.question("Enter the first number"));
  let b = parseFloat(readlineSync.question("Enter the second number"));
  console.log(`${a} * ${b} = ${a * b}`);
}

multiply();

/* Code School Soltuion.
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
*/