const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let receberPrimeiroEUltimoElemento = (lista) => {
  if (lista.length === 0) {
    return [];
  } else {
    return [lista[0], lista[lista.length - 1]];
  }
};

console.log(receberPrimeiroEUltimoElemento(lista));

/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array */
