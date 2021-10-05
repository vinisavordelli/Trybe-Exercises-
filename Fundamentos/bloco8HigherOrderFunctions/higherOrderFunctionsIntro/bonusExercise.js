//  - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDmg = (strength) => {
    const minDmg = 15;
    const attackDmg = Math.round(Math.random() * strength);
    result = (attackDmg < minDmg) ? minDmg : attackDmg;
    return result;
}
// 2 - Crie uma função que reotorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDMG = (warriorStats) => {
    const minDmg = warriorStats.strength;
    const weaponDMG = warriorStats.weaponDMG;
    const maxDmg = minDmg * weaponDMG;
    const attackDmg = Math.round(Math.random()*(maxDmg));
    const result = (attackDmg < minDmg) ? minDmg : attackDmg;
    return result;
}
// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageDMG = (mageStats) => {
    const mana = mageStats.mana;
    const minDmg = mageStats.inteligence;
    const maxDmg = minDmg*2;
    
    const turnStats = {
        manaSpent: 0,
        damageDealt: 'Not enough mana, use a potion, rest or flee',
    };
    if (mana >= 15) {
        const attackDMG = Math.round(Math.random()*maxDmg);
        const result = (attackDMG < minDmg) ? minDmg : attackDMG;
        turnStats.manaSpent = 15;
        turnStats.damageDealt = result;
        return turnStats;
    }
    return turnStats;
}

/*1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .*/
 
const gameActions = {
    warriorTurn: warriorDMG => {
        const warriorDamage = warriorDMG(warriorStats);
        warriorStats.damage = warriorDamage;
        dragon.hp -= warriorDamage;
    },
    mageTurn: (mageDMG) => {
        const mageTurnStats = mageDMG(mageStats);
        const mageDamage = mageTurnStats.damageDealt;
        const { manaSpent } = mageTurnStats;
        mage.damage = mageDamage;
        mage.mana -= manaSpent;
        dragon.hp -= mageDamage;
},
    dragonTurn: (dragonDmg) => {
    const dragonDamage = dragonDmg(strength);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDMG);
gameActions.mageTurn(mageDMG);
gameActions.dragonTurn(dragonDmg);
console.log(gameActions.turnResults());