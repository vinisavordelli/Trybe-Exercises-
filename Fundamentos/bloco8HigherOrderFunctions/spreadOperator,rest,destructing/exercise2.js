// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const sum = (...numbers) => console.log(numbers.reduce((acc, curr) => acc+curr));

sum(1,2,3,4,5,10)