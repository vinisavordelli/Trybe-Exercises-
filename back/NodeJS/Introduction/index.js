const readline = require('readline-sync');

const scripts = [
  { name: 'BMI Calculator', script: './BMI-calculator/bmi.js' },
  { name: 'Average speed calculator', script: './average-speed-calc/speed.js' },
  { name: 'Number Draw', script: './numberDraw/numberDraw.js' },
  { name: 'Factorial Calculator', script: './factorial-calculator/fact-calc.js' },
];

let enumeratedScripts = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);

enumeratedScripts.unshift('pick a number to run the corresponding script')

enumeratedScripts = enumeratedScripts.join('\n');

const scriptNumber = readline.questionInt(enumeratedScripts) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script);