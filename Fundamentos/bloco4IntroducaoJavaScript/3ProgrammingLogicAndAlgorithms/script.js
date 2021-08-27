// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// let squareSize = 5;
// for(i=0; i < squareSize; i++){
//     console.log('*');
// }
// this would print one "*" in n rows, therefore i need to make it print n "*" in a single row and repeat, therefore i need a loop inside the loop


    let squareSize = 7;
    for(let i = 0; i < squareSize; i++){
    let row = '' // como falei precisamos definir que teremos um linha, por enquanto deixo à com um caractere em branco, só para mostrar que ela armazena uma string;
        for(j = 0; j < squareSize; j++){
            row+='*';
            //aqui a mágica acontece, roda o código n vezes para definir o tamanho da string, imprimindo "*" n vezes na linha
        }
        //depois ele volta aqui com a string já tendo tamanho n e a imprimi o resultado com 5, e chama o segundo loop novamente
        console.log(row);
    }
    //voilá

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 


    for(let i = 0; i < squareSize; i++){
        let row = '' 
    for(j = 0; j <=i; j++){
        // a diferença está aqui, ao envés de repetir n vezes de acordou com square size dentro da linha, somente adicionará se j for menor ou igual a i;
        // ou seja o loop maior começa com i=0, daí chama o loop do j, que é igual a 0, coloca um *, j muda para 1, que é maior que zero, o ciclo quebra;
        //o loop do i recomeça com ele igual a 1 e j igual a 0, 0<=1 = *; 1<=1 *; 1<=2 ? não recomeça no loop i
        row+='*';
    }
    console.log(row);
}
//Agora inverta o lado do triângulo

//inverter o triangulo requer que eu imprima (no caso de squareSize =5) 4 espaços, depois 3, depois 2, ou seja squaresize - (i+1)
for(let i = 0; i < squareSize; i++){
    let row = ''
    for(let k = 0; k <= squareSize - (i+1); k++){
        row+=' ';
        //essa é o novo loop que irá imprimir os espaços, note que ele roda primeiro e depois o do asterisco, mas, o antigo não é filho desse.
    }
    for(j = 0; j <=i; j++){
    row+='*';
}
console.log(row);
}

//Faça uma piramide

//vamos lembrar que embora provavelmente possível, não preciso imprimir os espaços da direita
// uma piramide usaria espaços e asteriscos, portanto, copiarei o código acima como base
// Para saber o que mudar, vamos analisar 3 piramides
//   *  1
//  *** 3
// *****  5

//  * 1
// *** 3

//    *   1
//   *** 3
//  ***** 5
// ******* 7


//Embora provavelmente seja possivel imprimir os espaçõs antes e depois dos asteriscos, não preciso fazer isso, preciso somente imprimir os antes.
// partindo da base para qualquer outro nível a diferença é de 2, logo precisamos que nossos indices trabalhem com isso;
// Já o numero de espaços é o numero de linhas, menos o (nível atual da linha +1);
// O numero de asteriscos pode ser definido pelo numero da linha dobro da linha menos um. Como começamos da linha 0, acresceremos 1 as nossas contas, ou seja : nivel atual da linha +2; 2 *nível atual da linha (sem menos 1)


let numberOfRows = squareSize - 2 

for(i = 0; i < numberOfRows; i++){
    let row = ''
    for(k = 0; k <= numberOfRows - (i+2); k++){
        row+=' ';
    }
    for(j = 0; j <= (2 *i) ; j++){
        
        row+='*';
}
console.log(row)
}
//sei que precisarei de 3 condicionais, uma pra primeira coluna, outra para o fim e outra para o que vier no meio. If i=0 para primeira, if i =(numberofRows-1) na ultima. 
// o numero de espaços antes do primeiro "*" permanece o mesmo, portanto o primeiro for interno continua idenditico

// for(i = 0; i < numberOfRows; i++){
//     let row = ''
//     for(k = 0; k <= numberOfRows - (i+2); k++){
//         row+=' ';
//     }
//     for(j = 0; j <= (2 *i) ; j++){
//         if(i===0 ||i ===(numberOfRows-1)){ 
    // "=" wasnt working so there's ===
//             row+='*';
//         }
//         else{
//             row+=' '
//         }
// }
// console.log(row)
// }

//thought about this, but all lines in between stay empty, lets try something else. 

for(i = 0; i < numberOfRows; i++){
    let row = ''
    for(k = 0; k <= numberOfRows - (i+2); k++){
        row+=' ';
    }
    for(j = 0; j <= (2 *i) ; j++){
        if(i===0 ||i ===(numberOfRows-1)){ 
            row+='*';
        }
       else if(j === 0)/*j===o é onde sempre começamos, queremos continuar com ele, basta achar a formula para o outro j*/{
           row += "*";
        }
        
        else{
            row+=' ';
        }
}
console.log(row)
}

for(i = 0; i < numberOfRows; i++){
    let row = ''
    for(k = 0; k <= numberOfRows - (i+2); k++){
        row+=' ';
    }
    for(j = 0; j <= (2 *i) ; j++){
        if(i===0 ||i ===(numberOfRows-1)){ 
            row+='*';
        }
       else if(j === 0 || j === (i*2))/*aqui repetimos o limitador do nosso for pq queremos o ultimo espaço que ele percorre*/{
           row += "*";
        }
        
        else{
            row+=' ';
        }
}
console.log(row)
}
//Bonus, checar se é primo
numero = 1;
seraQueÉPrimo = true; 
if(numero === 1 || numero === 0){
    seraQueÉPrimo = false;
}
else if(numero <1){
    seraQueÉPrimo = false;
}else{
    for(let i = 2 /*começa em 2, pq todo numero se divide por 1*/; i < numero /* termina antes do numero pq todo numero se divide por ele mesmo*/; i++){
        if(numero % i == 0)/*checa se o numero é divisivel por aquele outro numero definido pelo ciclo i sem deixar casas decimas*/{
            seraQueÉPrimo= false;
            break //se ele for divisivel não é primo, portanto não precisa continuar checando;
        }
    }
} 
console.log(seraQueÉPrimo)