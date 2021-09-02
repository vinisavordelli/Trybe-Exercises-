let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
console.log("Bem vinda, "+info.personagem);
//  - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 
info.recorrente = 'sim'
// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (let i in info){
    console.log(i);
}
//  Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
for (let i in info){
    console.log(info[i]);
}
// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. 

let bio = {
    personagem: "Tio Patinhas",
    origem: "'Christmas on Bear Mountain, Dell's Four Color Comics #178'",
    nota: 'O último MacPatinhas',
    recorrente: "sim",
}
for (let i in info && bio){
    
    console.log(info[i] + " e " + bio[i] );
}

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function checkIfPalindrome(word){
    for (let i=0; i < (word.length/2); i++){
        //se colocamos uma palavra queremos checar a primeira com a ultima, a segunda com a penultima até o centro dela, correto? Então queremos comparar o indice atual contra o fim menos o indice atual. Porém, como em strings contamos do 0 para cima e o length não, tiramos 1 tb.
        if (word[i] !== word[word.length-1-i]){
            return false
        }
        else{
            return true;
        }
    }
} console.log(checkIfPalindrome("iti"))

function checkLargest(array){
    let largest = 0
    for(i=0; i<array.length; i++){
        if(array[i]>largest){
            largest = array[i]
        }
    } return array.indexOf(largest)
    // Index Of foi resultado de uma pesquisa, aprendi graças ao developer.mozilla em : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
}
console.log(checkLargest([2, 3, 6, 7, 10, 1]));
// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function checkSmallest(a){
    let smallest = Infinity;
    for (i=0; i<a.length; i++){
        if(a[i]<smallest){
            smallest = a[i];
        }
    } return a.indexOf(smallest)
} console.log(checkSmallest([2, 4, 6, 7, 10, 0, -3]));
// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function checkLargestWord(array){
    let largestWord = "";
    for(i=0; i< array.length; i++){
        if(array[i].length > largestWord.length){
            largestWord = array[i]
        }
    } return largestWord
}
console.log(checkLargestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repetitionChecker(array){
    let currentValueCounter = 1;
    let counter = 0
    let currentValue;
    for (let i=0; i< array.length; i++){
        for(let j=i; j< array.length; j++){
            if (array[i] == array[j])
                counter++;
                if(currentValueCounter<counter){
                    currentValueCounter=counter;
                    currentValue=array[i];
                } 
            
            
        } counter=0;
    } 
    
    return "O número que mais repete é o "+ currentValue + " repetindo " +currentValueCounter +" vezes"
}

console.log(repetitionChecker([2, 3, 2, 5, 8, 3, 3]))

function factorial(numero){
    let soma= 0;
    for(i=1; i<= numero; i++){
        soma += i;
    }
    return soma
} console.log(factorial(5))

function checkSufixo(palavra,sufixo){
    return palavra.endsWith(sufixo);
    // Comando endsWith aprendido através da w3schools, acesse : https://www.w3schools.com/jsref/jsref_endswith.asp
}
console.log(checkSufixo("trybe","be"))
//Bonus 2 Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
function arrayOfNumbers(vector){
    let newVector =[];
    for (i=0; i<vector.length; i++){
        for(j=0; j<vector[i].length; j++){
            if(vector[i][j]%2 == 0){
                newVector.push(vector[i][j])
            }
        }
    }
    return newVector
}

const romanNumerals = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };

  function romanConverter{
      
  }
  