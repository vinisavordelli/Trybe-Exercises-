// console.log(document.getElementById("page-title").innerText = "batata");
// // Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
// // Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
// // Por fim, recupere o subtítulo e altere-o também. 
// document.getElementById("second-paragraph").style.backgroundColor = "#E1C699";
// document.getElementById("second-paragraph").innerText = "Agora tenho cor de batata";
// document.getElementById("subtitle").innerText = "batatas são muito versáteis";
// // Adicione uma classe igual para os dois parágrafos.
// // Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
// // Altere algum estilo do primeiro deles.
// // Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .
// // Por fim, há uma função única que você pode usar para fazer todos esses acessos, a querySelector .

// document.getElementsByClassName("potatinho")[0].style.backgroundColor = "purple";
// document.getElementsByTagName("h2")[0].style.color= "red"

// Para praticar, substitua todas as funções que você usou no exercício anterior por querySelector e/ou querySelectorAll .

document.querySelector("#second-paragraph").innerText = "Agora tenho cor de batata";
document.querySelector("#subtitle").innerText = "batatas são muito versáteis";
document.querySelector("h2").style.color= "red"
document.querySelector(".potatinho").style.backgroundColor = "purple";
