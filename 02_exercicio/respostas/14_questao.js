let objetoExemplo = {
  nome: "Ana",
  idade: 30,
  profissao: "Professora",
};

let objetoParaArray = (lista) => {
  let arrayDeArray = [];
  for (const [chave, valor] of Object.entries(lista)) {
    arrayDeArray.push([chave, valor]);
  }

  return arrayDeArray;
};

console.log(objetoParaArray(objetoExemplo));

/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto */
