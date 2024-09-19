let arrayExemplo = [1, "Ana", 2, "Bia", 3, "Carlos", 4, "Daniel", 5];

let filtrarNumeros = (lista) => {
  let arrayDeNumeros = [];

  for (let i = 0; i < lista.length; i++) {
    if (typeof lista[i] === "number") {
      arrayDeNumeros.push(lista[i]);
    }
  }

  return arrayDeNumeros;
};

console.log(filtrarNumeros(arrayExemplo));

/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro */
