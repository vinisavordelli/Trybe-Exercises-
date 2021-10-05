//  Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const luckCheck = (myNumber, prizeNumber) => myNumber === prizeNumber;

const luckResult = (myNumber, func) => {
    const prizeNumber = Math.round(Math.random()*100);
    return func(myNumber, prizeNumber) ? "Congratulations, you've won a thousand dollars" : 'Better luck next time'
};

console.log(luckResult(57, luckCheck));
