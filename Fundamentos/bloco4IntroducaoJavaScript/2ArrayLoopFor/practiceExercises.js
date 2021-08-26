/* Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
Utilizando for , descubra qual o maior valor contido no array e imprima-o;
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
Utilizando for , descubra qual o menor valor contido no array e imprima-o;
Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let number of numbers){
    console.log(number)
}
let sumOfArray = 0;

for(let index = 0; index < numbers.length; index++){
    sumOfArray += numbers[index];
}
console.log("soma do array é de"+sumOfArray);

console.log("média aritimética do array é de: " + (sumOfArray/numbers.length));

if(sumOfArray/numbers.length >20){
    console.log("valor maior que 20");
}
else{
    console.log("valor menor que 20");
}

let maiorNumero = 0;

for(let index = 0; index < numbers.length; index++){
    if(numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }
} console.log("O maior número no array é "+maiorNumero);

let quantidadesImpar = 0;
for(let impar=0; impar < numbers.length; impar++){
    if((numbers[impar]%2)!=0){
        quantidadesImpar++
    }
} if (quantidadesImpar > 0){
    console.log("quantidade de impars no array = " +quantidadesImpar);
}
else{
    console.log("nenhum valor impar encontrado")
}

let menorNumero =Infinity;

for(let index = 0; index < numbers.length; index++){
    if(numbers[index] < menorNumero){
        menorNumero = numbers[index]
    }
} console.log("menor numero no array é "+menorNumero)

let newArray = [];
for(let newIndex = 0; newIndex <= 24; newIndex ++){
    newArray.push(newIndex+1);
}
console.log("Esse código gera o array: "+newArray);

for(let halfIndex =0; halfIndex < newArray.length; halfIndex++){
    console.log("Metade da posição "+newArray[halfIndex]+" é "+(newArray[halfIndex])/2)
}
//Ex Bonus
// Créditos ao belo artigo do devfuria, acessável em : http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/

for (let index = 1; index < numbers.length; index += 1) {
    // rodaremos dois for simutaneos, um na posição inicial, outro na posição seguinte,
    //nesse caso o loop principal está começando da segunda posição, poderia ser o contrario, trocariamos o sinal de comparação no if ou trocar a posição de comparação.
    for (let index2 = 0; index2 < index; index2 += 1) {
      if (numbers[index] < numbers[index2]) {
        let posicao = numbers[index];
        numbers[index] = numbers[index2];
        numbers[index2] = posicao;
        // Aqui estamos trocando de posição, mas como se fizessemos a troca sem um recipiente para armazenar um valor temporariamente acabariamos com dois valores iguais. Pense assim temos o array [2, 1], então fariamos que a posição 2 é igual a 2 e ficariamos com [2,2] como eu faria então para falar que a primeira posição agora é o 1 da segunda posição do array original? Por isso declaramos primeiramente que a posição do index2 será armazenada nessa variavel temporária, assim poderei atribuir index2+1 o valor dessa variavel que era (mas não é mais) index2 

      }
    }
  } console.log(numbers)
    
  //EX bonus 2
  for (let index = 1; index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
      if (numbers[index] > numbers[index2]) {
        let position =numbers[index];
        numbers[index] = numbers[index2];
        numbers[index2] = position;
      }
    }
  }console.log(numbers)

  //como mantemos toda a estrutura original sem modificações, basta trocar o sinal de comparação. Ou seja, no if, ao envés de procurar se o primeiro é maior que o segundo, pŕocuro se o primeiro é menor que o segunda;