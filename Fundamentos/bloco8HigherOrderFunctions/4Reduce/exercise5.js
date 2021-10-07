// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    return names.reduce((acc, string) => 
        acc + string.toLowerCase().split('').reduce((counter, letter) => {
        if(letter === 'a') return counter +1;
        return counter
    }, 0),0);
  }
  console.log(containsA());
  