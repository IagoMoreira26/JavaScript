let repetir = (a, b) => {
  let i = 1;
  let array = [];

  while (i <= b) {
    array.push(a);
    i++;
  }

  return array;
};

console.log(repetir(2, 10));

/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado */
