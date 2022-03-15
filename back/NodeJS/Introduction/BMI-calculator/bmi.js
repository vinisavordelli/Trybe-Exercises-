const readline = require('readline-sync');

function calculateBmi () {
  const weight = readline.questionFloat('How much do you weight in kilograms');
  const height = readline.questionInt('Whats your height in centimeters');

  console.log(`Weight: ${weight} kg, height: ${height} m`);

  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
  console.log(bmi)

  if (bmi < 18.5) {
    console.log(`Your BMI result is ${bmi}, this points towards you being underweight`);
    return;
  }

  if (bmi >= 18.5 && bmi < 25) {
    console.log(`Your BMI result is ${bmi}, this points towards you being in your ideal weight`);
    return;
  }

  if (bmi >= 25 && bmi < 30) {
    console.log(`Your BMI result is ${bmi}, this points towards you being overweight`);
    return;
  }

  if (bmi >= 30) {
    console.log(`Your BMI result is ${bmi}, this points towards you being obese`);
    return
  }
  else{
    console.log(`Sorry, you might have entered a false value, you weight ${weight} kg and you are ${height} cm tall?`);
  }
}

calculateBmi();