// Practice Examples 1

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList);
console.log(tasksList.length);
tasksList.push('Fazer exercícios da Trybe');
tasksList.unshift('Acordar');
console.log(tasksList);
tasksList.pop();
tasksList.shift();
console.log(tasksList);
console.log("EX1_________________________________________");
// EX1 Obtain "serviços"

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

console.log("EX2__________________________________________");
//EX2 Look for "Portfólio inside menu[]"

let indexOfPortfolio = menu.indexOf("Portfólio", [0]);
//indexOfPortfolio was learned thanks to developer.mozilla.org. Link : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
console.log(indexOfPortfolio);

console.log("EX3__________________________________________");
// EX3 Add Contato to the end of menu[]

 menu.push("Contato");
 console.log(menu);

 console.log("Ex4__________________________________________");
//Ex4 use for to print every alement in the following array: 
 let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

 for(let groceryListIndex = 0; groceryListIndex < groceryList.length; groceryListIndex++){
     console.log(groceryList[groceryListIndex])
 }
 console.log("Ex5__________________________________________");
//  Ex5 - print the array on the console using for/ of
 
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

 for(let name of names){
     console.log(name)
 }