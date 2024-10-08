let buscarPalavrasSemelhantes = (palavra, lista) => {
  return lista.filter((item) => item.includes(palavra));
};

let palavras = [
  "cachorro",
  "gato",
  "elefante",
  "cachorrinho",
  "gato preto",
  "pássaro",
];
let resultado = buscarPalavrasSemelhantes("cach", palavras);

console.log(resultado);

/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes. Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro */
