let multiplicacao = (valor1, valor2) => {
  let soma = 0;

  if (valor1 < 0 || valor2 < 0) {
    return "Não aceita números negativos!";
  }

  for (let i = 1; i <= valor2; i++) {
    soma = soma + valor1;
  }

  return soma;
};

console.log(multiplicacao(6, 6));

/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação */
