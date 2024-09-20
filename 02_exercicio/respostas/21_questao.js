let menorNumero = (lista) => {
  let menor = lista[0];
  lista.forEach((element) => {
    if (element < menor) {
      menor = element;
    }
  });

  return menor;
};

console.log(menorNumero([10, 2, 5, 8, 1, 0]));

/* Criar uma função que receba um array de números e retorne o menor número desse array */
