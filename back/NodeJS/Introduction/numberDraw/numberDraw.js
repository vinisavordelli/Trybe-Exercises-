const readline = require('readline-sync');

function resultLog(number, answer) {

  if (number !== answer) {
    return console.log(`Bummer, the actual number was ${number}`);
  }

  return console.log('Congrats, you picked the right number!');
}

function runGame() {
  const number = parseInt(Math.random() * 10);

  const answer = readline.questionInt(
    'Name a number between 1 and 10'
  );

  resultLog(number, answer);

  const playAgain = readline.question(
    'Wanna play again? Type "y" if positive or anything else to leave the game'
  );

  if (playAgain !== 'y') return console.log('Ok, then. Byeee!');


  runGame();
}

runGame();