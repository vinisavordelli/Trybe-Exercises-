const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const simpsonsFamily = simpsons.filter(simpson => simpson.id < 5);

await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

createSimpsonsFamily();