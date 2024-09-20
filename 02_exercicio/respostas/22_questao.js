let funcaoDaSorte = (valor) => {
  let min = 1;
  let max = 10;

  let valorSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

  if (valor == valorSorteado) {
    return `Parabéns! O número sorteado foi ${valorSorteado}`;
  } else {
    return `Que pena! O número sorteado foi ${valorSorteado}`;
  }
};

console.log(funcaoDaSorte(10));

/* Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado */
