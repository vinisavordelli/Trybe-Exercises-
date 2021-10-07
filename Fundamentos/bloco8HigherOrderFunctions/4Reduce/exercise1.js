const assert = require('assert');

const expectedResult = ['1','2','3',true,4,5,6];

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    return arrays.reduce((acc, curr) => acc.concat(curr), [])
    
  }

assert.deepStrictEqual(flatten(), expectedResult)