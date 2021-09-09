function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
//   Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
  function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dayList = document.querySelector('#days')
    for(let i = 0; i < dezDaysList.length; i++){
          const days = dezDaysList[i];
          const dayListItem = document.createElement("li");
          dayListItem.innerHTML = days;
          dayList.appendChild(dayListItem);
          dayListItem.className ="day"
          if(days == 24 || days == 25 || days == 31){
              dayListItem.classList.add("holiday")
          }
          if(days == 4 || days == 11 || days == 18 || days == 25){
              dayListItem.classList.add('friday')
          }
      }
  }
// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
  createDays();
  function newHolidayButton(buttonName){
  let buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  let buttonId = "btn-holiday";

  button.innerHTML = buttonName;
  button.id = buttonId;
  buttonContainer.appendChild(button);

  }

  newHolidayButton('feriados');
//   Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
  let holidayButton = document.querySelector("#btn-holiday");
  let holidays = document.querySelectorAll(".holiday")
  let newColor = "cyan"
  let standardColor = "rgb(238,238,238)"
  holidayButton.addEventListener('click', function(){
      for(i = 0; i < holidays.length; i++){
          if(holidays[i].style.backgroundColor === newColor){
              holidays[i].style.backgroundColor = standardColor;
            } else{
                holidays[i].style.backgroundColor = newColor;
            }

      }
  })

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function newFridayButton(buttonName){
    let buttonContainer = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    let buttonId = "btn-friday";
  
    button.innerHTML = buttonName;
    button.id = buttonId;
    buttonContainer.appendChild(button);
  
    }
  
    newFridayButton("friday");

/* Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

let fridayButton = document.querySelector("#btn-friday");
let fridays = document.querySelectorAll(".friday")
let newFridayColor = "purple"
let fridayStandardColor = "rgb(238,238,238)"
fridayButton.addEventListener('click', function(){
    for(i = 0; i < fridays.length; i++){
        if(fridays[i].style.backgroundColor === newFridayColor){
            fridays[i].style.backgroundColor = fridayStandardColor;
          } else{
              fridays[i].style.backgroundColor = newFridayColor;
          }

    }
})

/*
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
*/

days.addEventListener("mouseover", function(event){
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "800"
})
days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200"
})

/* Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function addNewTask(taskName){
    let newTask = document.createElement("span");
    let myTasks = document.querySelector(".my-tasks");
    newTask.innerHTML = taskName;
    myTasks.appendChild(newTask)
}
addNewTask("Estudar");

/*Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function newTasksColor(color){
    let newTaskColor = document.createElement("div");
    let myTasks = document.querySelector(".my-tasks");
    newTaskColor.style.backgroundColor = color;
    myTasks.appendChild(newTaskColor);
    newTaskColor.classList.add('task');
}
newTasksColor("red");
/*
Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada. */
function changeTaskClass(){
    let task = document.querySelector(".task");
    let changedTask = document.getElementsByClassName("task selected");
    task.addEventListener('click', function(event){
        if (changedTask.length === 0){
            event.target.className = 'task selected'
        }
        else{
            event.target.className = "task"
        }
    })
}
changeTaskClass();

function addTaskToDays(){

}
addTaskToDays()
/*Exercício 10:
Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
 */
function setDayColor() {
    let changedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskColor = document.querySelector(".task").style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let currentColor = event.target.style.color;
      if (changedTask.length > 0 && currentColor !== taskColor) {
        let color = changedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (currentColor === taskColor && changedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();

  /*Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
Dica - Propriedade: keyCode . */















