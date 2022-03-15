const readline = require('readline-sync');

function calculaVelocidadeMed () {
  const distance = readline.questionInt('How many meters did the car run? ');
  const time = readline.questionInt('In how much time (seconds)?');

  const averageSpeed = (distance / time).toFixed(2);

  console.log(`Average speed: ${averageSpeed} m/s`);
}

calculaVelocidadeMed();