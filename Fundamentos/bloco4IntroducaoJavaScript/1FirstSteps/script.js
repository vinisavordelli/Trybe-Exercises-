/* Deixarei os Exercicios contidos no conteúdo comentados e em código somente o exercicio da página de exercicios propriamente dita.


Exercicio 1 - Entendendo variaveis 
    1. Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
    2. Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
    3. Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
    4. Utilize o console.log() para imprimir as constantes e variáveis que você criou.
    5. Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
    6. Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro

        const myName = "Vinicius Savordelli";
        const birthCity ="São Bernardo do Campo";
        let birthYear = 1993;

        console.log(myName, birthCity, birthYear);

        birthYear = 2030;

        console.log(birthYear);

        birthCity = "Diadema";
        console.log(birthCity)


        //6 Não se altera valor de constante.

Exercicio 2 
    1. Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
    2. Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
    3. Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

        let base = 5;
        let height = 8;
        const area = base * height;
        const perimeter = 2*base + 2*height;
        console.log("Perimetro é de " + perimeter + "m e area é de " + area +"m2") 

Exercicio 3 
    Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
    I  mplemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
    Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
    Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
    Se a nota for menor que 60, imprima "Você foi reprovada(o)"
    Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
    Altere o valor da nota para verificar se as condições que você implementou funcionam; 

        const nota = 50

        if (nota >=80){
            console.log("Parabéns, você foi aprovada(o)");
        }
        if (nota < 80 && nota >= 60){
            console.log("Você está na nossa lista de espera");
        }
        if (nota < 60){
            console.log("Você foi reprovada(o)")
        }

Exercicio 4 
        1. Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
        2. Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
        3. Implemente condicionais para que:
        * Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
        * Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
        * Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
        * Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
        * Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
        4. Agora imprima a variável message fora das suas condições. 

            const currentHour = 16;
            let message;
            if(currentHour >= 22){
                message = "Não deveríamos comer nada, é hora de dormir";
            }
            if(currentHour >=18 && currentHour < 22){
                message = "Rango da noite, vamos jantar :D"
            }
            if(currentHour >=14 && currentHour < 18){
                message = "Vamos fazer um bolo pro café da tarde?"
            }
            if(currentHour >=11 && currentHour< 14){
                message = "Hora do almoço!!!"
            }
            if(currentHour >=4 && currentHour < 11){
                message = "Hmmm, cheiro de café recém passado"
            }
            console.log(message)

        1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
        2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' 
            let estadoPessoaCandidata = "reprovada";
            switch(estadoPessoaCandidata){
                case "aprovada" : 
                console.log("candidato(a) aprovado(a)");
                break;

                case "lista" : 
                console.log("candidato(a) em lista de espera");
                break;

                case "reprovada" : 
                console.log("candidato(a) reprovado(a)");
                break;

                default: console.log("não é um candidato válido")

            } */
            
/* Exercicios da parte de exercicios Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional ( if/else e switch/case ), operadores aritméticos ( + , - , * , / , % ) e operadores lógicos ( > , < , && , || ). Para que consiga executar seus códigos recomendamos que utilize a extensão Code Runner , você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code .
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉
Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .
Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos? */

// Exercicio 1
const a = 10;
const b = 2;

let adição= (a+b)
let subtração= (a-b)
let Multiplicação= (a*b)
let Divisão= (a/b)
let Módulo= (a%b)

console.log("Ex1 adição é" + adição);
console.log("Ex1 subtração é" +subtração);
console.log("Ex1 multiplicação é" +Multiplicação);
console.log("Ex1 divisão é" +Divisão);
console.log("Ex1 Módulo é" +Módulo);

//Exercicio 2 

const valor1 = 1;
const valor2 =  2;

if(valor1> valor2){
    console.log("Exercicio2 é " + valor1);
}
{
    console.log ("Exercicio2 é " + valor2);
}

// Exercicio 3 

const valor3 = 4;

if(valor1> valor2 && valor1 > valor3){
    console.log("Exercicio3 é " + valor1);
}
if(valor2> valor1  && valor2 > valor3){
    console.log("Exercicio3 é " + valor2);
}
{
    console.log ("Exercicio3 é " + valor3);
}

//Exercicio 4

const positiveOrNegative = -10;

if(positiveOrNegative>0){
    console.log("Ex4" +positiveOrNegative + " é positivo");
}
    if(positiveOrNegative<0){
     console.log("Ex4" +positiveOrNegative + " é negativo");
}
else{
    console.log("Ex4 é 0");
}

//Exercicio 5 

const angulo1 = 10;
const angulo2 = 60;
const angulo3 = 60;
const triangulo = (angulo1 + angulo2 + angulo3) <= 180;

if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    console.log("Nenhum angulo pode ser menor do que 0");
}
{console.log("EX5 é " +triangulo)
}

//Exercicio 6

let chessPiece = "cAvalo";

switch (chessPiece.toLowerCase()){
    case "peao":
    console.log("EX6 Mova 1 à frente, 2 se for seu primeiro movimento; o movimento não pode ser completado se houver outra peça no caminho; você pode comer peças rivais  à um espaço na diagonal");
    break;

    case "torre":
    console.log("EX6 mova a quantidade de casas que quiser ortogonalmente, pare uma casa antes de suas peças ou coma a peça inimiga tomando seu lugar");
    break;

    case "cavalo":
    console.log("EX6 mova um espaço ortogonalmente e um na diagonal, o movimento ortogonal ignora outras peças, o segundo só pode ser realizado caso esteja desocupado ou ocupado por uma peça rival, caso esteja ocupado por um rival coma-a e tome seu lugar");
    break;

    case "bispo":
    console.log("EX6 move quantas casas estiverem disponíveis na diagonal, obedece a regra de interposição de peças"); 
    break;

    case "rainha":
    console.log("EX6 move diagonalmente e ortogonalmente quantos espaços estiverem disponíveis; obedece a regra de interposição de peças");
    break

    case "rei":
    console.log("EX6 move diagonalmente e ortogonalmente, porém apenas um espaço; obedece a regra de interposição de peças; não pode se mover para um espaço onde seu inimigo possa come-la em seu próximo turno; caso não haja movimentos disponíveis você perdeu o jogo. Checkmate!");
    break
}
// .toLowerCase was learned thanks to gomakething.com link: "https://gomakethings.com/converting-strings-to-uppercase-and-lowercase-with-vanilla-javascript/"


//Exercicio 7

let porcentagem = 65

if(porcentagem >=90 && porcentagem < 100 ){
    console.log("Ex7 A")
}
if(porcentagem >= 80 && porcentagem < 90 ){
    console.log("Ex7 B")
}
if(porcentagem >= 70 && porcentagem < 80 ){
    console.log("Ex7 C")
}
if(porcentagem >= 60 && porcentagem < 70 ){
    console.log("Ex7 D")
}
if(porcentagem >= 50 && porcentagem <60 ){
    console.log("Ex7 E")
}
if(porcentagem >=0 && porcentagem < 50 ){
    console.log("Ex7 F")
}
if(porcentagem<0 || porcentagem>100){
    console.log("Ex7 Erro: notas devem estar entre 0 e 100%")
}

//Exercicio 8
const x = 1;
const y = 2;
const z = 2;

if(x % 2==0 || y % 2 ==0 ||z % 2 ==0){
    console.log("Ex8 é "+true);
}
else{
    console.log("Ex8 é "+false);
}

//Exercicio 9 

if(x % 2!=0 || y % 2 !=0 ||z % 2 !=0){
    console.log("Ex9 é "+true);
}
else{
    console.log("Ex9 é "+false);
}

//Exercicio 10

const custo = 30;
const preço = 20;
const lucro = (preço-custo) *.8

if(lucro>0){
    console.log("Ex10 seu lucro é de "+ lucro +" reais")
}
else{
    console.log("você está tendo prejuízo")
}

//Exercicio 11

const salarioBruto = 3000;
let INSS 
let IR 

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
let salarioLiquido = salarioBase -IR

console.log("EX11 com um salario bruto de "+salarioBruto +"você terá o salário liquido de:"+salarioLiquido)

//Have a nice day

