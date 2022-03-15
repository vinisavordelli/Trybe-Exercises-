const readline = require('readline-sync');

function factor(x) {
  // Se x for 0 ou 1
  return [0, 1].includes(x)
    ? 1
    : x * factor(x - 1);
}

function calculate() {
  const x = readline.questionInt('Which number do you wish to factor? ');

  if (x <= 0) {
    console.log('Type a number greater than 0')
    return;
  }

  console.log(`Number: ${x}`);

  const result = factor(x);

  console.log(`factor: ${result}`);
}

calculate();