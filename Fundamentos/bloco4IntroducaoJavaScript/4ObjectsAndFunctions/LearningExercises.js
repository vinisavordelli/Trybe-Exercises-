// 1 - Crie um objeto player contendo as variáveis listadas abaixo.

// // let name = 'Marta',
// // let lastName = 'Silva',
// // let age = 34,
// // let medals = { golden: 2, silver: 3 },

let player = {
    firstName: "Marta",
    lastName : "Silva",
    age : "34",
    theBestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018],
    medals :{
        golden : 2,
        silver : 3,
    }
};

// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
// Agora veremos uma variação do laço for , que nos garante facilidade ao lidar com objetos.

console.log("A jogadora " + player.firstName + " " +player.lastName + " tem " + player.age + " de idade");
console.log("A jogadora " + player.firstName +" " + player.lastName + " foi eleita a melhor do mundo por " + player.theBestInTheWorld.length + " vezes")
console.log("A jogadora " + player.firstName + " " +player.lastName + " possui " + player.medals.golden + " medalhas de ouro " + player.medals.silver + " medalhas de prata")

// 1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let key in names){
    console.log("Olá " +names[key]);
}
0
// 2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let k in car){
    console.log(k, car[k])
}
;

// Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. 

function soma(a,b){
    return (a+b);
}
function subtracão(a,b){
    return (a-b);
}
function multiplicacao(a,b){
    return (a*b);
}
function divisao(a,b){
    return (a/b)
}
function theLargest(a,b){
    if (a>b){
        return a
    }
    {
        return b
    }
}
function isPositive(a){
    if (a>0){
        return "number is positive";
    }
    if (a<0){
        return "number is negative";
    }
    else{
        return "this is 0"
    }
}

function trianguloCheck(a, b, c){
   let d = a+b+c;
    if((d)===180){
        return "é um triangulo válido";
    }
    if(a <0 ||b <0 ||c<0){
        return "nenhum angulo pode ser menor do que 0";
    }
    else{
        return "a somatoria dos angulos do triangulo deve ser de 180 graus"
    }
}

function movimentoPecaXadrez(nomeDaPeça){
    switch (nomeDaPeça.toLowerCase()) {
            case "peao":
            return "EX6 Mova 1 à frente, 2 se for seu primeiro movimento; o movimento não pode ser completado se houver outra peça no caminho; você pode comer peças rivais  à um espaço na diagonal";
            break;
        
            case "torre":
            return"EX6 mova a quantidade de casas que quiser ortogonalmente, pare uma casa antes de suas peças ou coma a peça inimiga tomando seu lugar";
            break;
        
            case "cavalo":
            return "EX6 mova um espaço ortogonalmente e um na diagonal, o movimento ortogonal ignora outras peças, o segundo só pode ser realizado caso esteja desocupado ou ocupado por uma peça rival, caso esteja ocupado por um rival coma-a e tome seu lugar";
            break;
        
            case "bispo":
            return "EX6 move quantas casas estiverem disponíveis na diagonal, obedece a regra de interposição de peças"; 
            break;
        
            case "rainha":
            return "EX6 move diagonalmente e ortogonalmente quantos espaços estiverem disponíveis; obedece a regra de interposição de peças";
            break;
        
            case "rei":
            return "EX6 move diagonalmente e ortogonalmente, porém apenas um espaço; obedece a regra de interposição de peças; não pode se mover para um espaço onde seu inimigo possa come-la em seu próximo turno; caso não haja movimentos disponíveis você perdeu o jogo. Checkmate!";
            break;
    }
}
function notaDeProva(porcentagem){
    if(porcentagem >=90 && porcentagem < 100 ){
    return "Ex7 A"
    }
    if(porcentagem >= 80 && porcentagem < 90 ){
    return "Ex7 B"
    }
    if(porcentagem >= 70 && porcentagem < 80 ){
    return "Ex7 C"
    }
    if(porcentagem >= 60 && porcentagem < 70 ){
        return "Ex7 D"
    }
    if(porcentagem >= 50 && porcentagem <60 ){
    return "Ex7 E"
    }
    if(porcentagem >=0 && porcentagem < 50 ){
    return "Ex7 F"
    }
    if(porcentagem<0 || porcentagem>100){
    return "Ex7 Erro: notas devem estar entre 0 e 100%"
    }

}

function isThereAnEven(x,y,z){
    if(x % 2==0 || y % 2 ==0 ||z % 2 ==0){
        return "Ex8 é verdadeiro";
    }
    else{
        return "Ex8 é falso";
    }
}
function isThereAnOdd(x,y,z){
    if(x % 2 !==0 || y % 2 !==0 ||z % 2 !==0){
        return "Ex9 é verdadeiro";
    }
    else{
        return "Ex9 é falso";
    }
}

function calculadoraLucro(preco,custo){
    let lucro = (preco - custo) *.8
    if(lucro>0){
        return" Ex10 seu lucro é de "+ lucro +" reais";
    }
    else{
        return "você está tendo prejuízo";
    }
}

function calculadoraSalario(salarioBruto){
    let INSS;
    let IR;

    if (salarioBruto<= 1556.94){
        INSS= 0.08 * salarioBruto
    }
    if (salarioBruto>=1556.95 && salarioBruto<= 2594.92){
        INSS= 0.09 * salarioBruto
    }
    if (salarioBruto<= 5189.82 && salarioBruto >=2594.93){
        INSS= 0.11 * salarioBruto
    }
    if (salarioBruto> 5189.82){
        INSS= 570.88
    }
    let salarioBase = salarioBruto - INSS
    
    if(salarioBase <= 1903.98){
        IR = 0
    }
    if(salarioBase >= 1903.99 <=2826.65){
        IR = (.075*salarioBase) - 142.80;
    }
    if(salarioBase >= 2826.66){
        IR = (.15*salarioBase) - 354.80;
    }
    if(salarioBase >= 3751.06){
        IR = (.225*salarioBase) - 636.13;
    }
    if(salarioBase  > 4664.68){
        IR = (.275*salarioBase) - 869.36;
    }
    let salarioLiquido = salarioBase - IR;
    return salarioLiquido;
}

console.log(calculadoraSalario(3000))