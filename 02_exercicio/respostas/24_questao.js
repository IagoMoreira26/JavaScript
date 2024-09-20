let contarCaractere = (caractere, frase) => {
  let contador = 0;

  frase.split("").forEach((letra) => {
    if (letra == caractere) {
      contador++;
    }
  });

  return contador;
};

console.log(contarCaractere("e", "Eu estou ficando extremamente biluteteia"));

/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas */
