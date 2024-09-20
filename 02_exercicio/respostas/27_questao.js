let inverter = (objeto) => {
  let objetoInvertido = {};

  for (let chave in objeto) {
    objetoInvertido[objeto[chave]] = chave;
  }

  return objetoInvertido;
};

console.log(inverter({ nome: "Ana", idade: 20, profissao: "Professora" }));

/* Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao o objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas */
