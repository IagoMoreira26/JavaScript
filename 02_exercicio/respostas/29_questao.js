let segundoMaior = (lista) => {
  let maior = lista[0];
  let segundoMaior = lista[0];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > maior) {
      segundoMaior = maior;
      maior = lista[i];
    } else if (lista[i] > segundoMaior && segundoMaior !== maior) {
      segundoMaior = lista[i];
    }
  }

  return segundoMaior;
};

console.log(segundoMaior([1, 2, 3, 4, 5]));

/* Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array */
