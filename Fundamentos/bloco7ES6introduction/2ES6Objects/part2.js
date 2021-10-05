const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  /*Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adi
  cionada e o valor dela. */
const nightshift = (lesson) => {
    lesson.turno = "noite"
}
nightshift (lesson2);
console.log(lesson2)
  
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = object => Object.keys(object);
// Crie uma função para mostrar o tamanho de um objeto.
const objectLength = object => {
        var size = 0;
        for (key in object) {
          if (object.hasOwnProperty(key)) size++;
        }
        return size;
};
console.log(objectLength(lesson1))
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = object => Object.values(object);
console.log(listValues(lesson2))
// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte: 

let allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const countStudents = (object) => {
  let total = 0;
  const keys = Object.keys(object);
  for (i in keys){
    total += object[keys[i]].numeroEstudantes
  }
  return total;
}
console.log(countStudents(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(allLessons,2));

const checkKeyValue = (obj, key, value) =>{
  const objectallObjects  = Object.entries(obj);
  let check = `O conjunto chave ${key} e valor ${value} não existe dentro do objeto`;
  for (let i in objectallObjects ) {
    if(objectallObjects [i][0] === key && objectallObjects [i][1] === value) check = `O conjunto chave ${key} e valor ${value} existe dentro do objeto`;
}
return check
};
console.log(checkKeyValue(lesson2,'professor','Carlos'));

const countMathStudents = (object) => {
  let total = 0;
  const keys = Object.keys(object);
  for (i in keys){
    if(object[keys[i]].materia === 'Matemática') {
      total += object[keys[i]].numeroEstudantes;
    }
  }
  return total;
}

console.log(countMathStudents(allLessons));

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const reportLog = (obj, name) => {
  const lessonsAmmount = [];
  let studentAmmount = 0;
  const allObjects = Object.values(obj);
  for (i in allObjects ) {
    if (allObjects [i].professor === name) {
      lessonsAmmount.push(allObjects [i].materia)
      studentAmmount += allObjects [i].numeroEstudantes;
    }
  }
  return { lessons: lessonsAmmount, estudantes: studentAmmount };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, reportLog(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
