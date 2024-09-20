let contarPalavras = (frase) => {
  frase = frase.trim();
  let palavras = frase.split(" ");
  return palavras.filter((p) => p !== "").length;
};

console.log(contarPalavras("A sociedade é horrível e o mundo é cruel"));

/* Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela */
