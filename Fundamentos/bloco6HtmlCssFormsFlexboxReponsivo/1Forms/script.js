function submitButtonFunction(event){
    event.preventDefault();
}
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click",submitButtonFunction);

const formElements = document.querySelectorAll("input");
let textArea = document.querySelector("textarea");

function clearAll(){
    for(let i = 0; i <formElements.length; i++){
        formElements[i].value = "";
    }
    textArea.value = ""
}
const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clearAll);