/*Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .*/ 
const factorial = numero => (numero === 0 || numero === 1) ? 1 : numero * factorial(numero-1);

console.log(factorial(10));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const checkLongestWord = (phrase) => {
    let string = phrase.split(" ");
    let wordCount = 0;
    let longestWord = null;
    for (let i = 0; i < string.length; i++){
        if(wordCount < string[i].length) {
            wordCount = string[i].length
            longestWord = string[i]
        }
    }
    return longestWord
}
console.log(checkLongestWord("eu gosto de batata, seja doce, asterix ou comum, assada, frita ou grelhada, com peixe, carne ou cozidas no calor do Fagradalsfjall"));

const characterLookUp = (str, par) => {
    let string = str.split("")
    for(let i = 0; i < string.length; i++){
        string[i] = (string[i] !== "x") ? string[i] : par
    }
    return string.join("")
}

console.log(characterLookUp("batata é muito x", "top"))

