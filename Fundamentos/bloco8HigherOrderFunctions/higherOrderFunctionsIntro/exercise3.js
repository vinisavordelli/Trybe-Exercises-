// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
const test1answers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const checkAnswers = (myAnswers, rightAnswers) => {
    let correctAnswers = 0;
    for(i = 0; i < rightAnswers.length; i += 1){
        if(myAnswers[i] === rightAnswers[i]) correctAnswers += 1;
        else correctAnswers -= 0.5
    }
    return correctAnswers;
}

const myGrade = (myAnswers, rightAnswers, func) => {
    return `You've got a total of ${func(myAnswers, rightAnswers)} points. Maximum score is: ${rightAnswers.length}` 
}

console.log(myGrade(studentAnswers, test1answers, checkAnswers))