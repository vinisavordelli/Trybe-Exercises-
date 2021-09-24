/*Crie uma página que contenha:
Um botão ao qual será associado um event listener ;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.*/botaoLindoDeDeus = document.querySelector("#such-a-handsome-button");
let numberOfGorgeousClicks = 0;
let mostAwesomeCounter = document.querySelector("#incredible-counter")
botaoLindoDeDeus.addEventListener("click", _ => {
 numberOfGorgeousClicks++; 
 mostAwesomeCounter.innerHTML = `${numberOfGorgeousClicks} majestic clicks`
})

const characterLookUp = (str, par) => {
    for(let i = 0; i < str.length; i++){
        str[i] = (str[i] !== x) ? str[i] : par
    }
    return str
}

characterLookUp("batata é muito x", top)