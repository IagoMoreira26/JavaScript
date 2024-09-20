let removerVogais = (palavra) => {
  const vogais = "aeiouAEIOU";
  let resultado = "";

  for (let i = 0; i < palavra.length; i++) {
    let caractere = palavra[i];

    if (!vogais.includes(caractere)) {
      resultado += caractere;
    }
  }

  return resultado;
};

console.log(removerVogais("javascript"));

/* Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais */
