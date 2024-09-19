let arrayExemplo = [10, 10, 10];

let somarNumeros = (lista) => {
  let soma = 0;

  for (let i = 0; i < lista.length; i++) {
    soma = soma + lista[i];
  }

  return soma;
};

console.log(somarNumeros(arrayExemplo));

/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array */
