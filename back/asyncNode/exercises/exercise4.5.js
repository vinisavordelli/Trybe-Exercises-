const fs = require('fs').promises;

async function addNelsonToFamily() {
    const simpsons = await fs
      .readFile('./simpsons.json', 'utf-8')
      .then((fileContent) => JSON.parse(fileContent));
  
    const simpsonsFamily = simpsons.filter(simpson => simpson.id < 5);
    simpsonsFamily[simpsonsFamily.length -1] = { "id": "8","name": "Nelson Muntz" }
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  }

addNelsonToFamily();