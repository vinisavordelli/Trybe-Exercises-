/*Crie um código JavaScript com a seguinte especificação:
Não se esqueça de usar template literals
Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"
Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ... #goTrybe".*/
var skills = ["cozinhar" , "programar", "ser da hora", "falar das minhas skills", "chegar em 5 skills"]
const characterReplacement = (str, par) => {
    let string = str.split("")
    for(let i = 0; i < string.length; i++){
        string[i] = (string[i] !== "x") ? string[i] : par
    }
    return `Quer saber de uma coisa? ${string.join("")}!`
}

console.log(characterReplacement("batata é muito x", "top"))

const showingOffMyskills = (str, par) => `${characterReplacement(str, par)}
minhas cinco principais habilidades são:

${skills.join('\r\n')}

#goTrybe`

console.log(showingOffMyskills("batata é muito x", "top"));