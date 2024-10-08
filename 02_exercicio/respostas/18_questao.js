let despesasTotais = (lista) => {
  return lista.reduce((contador, objeto) => {
    return contador + objeto.preco;
  }, 0);
};

console.log(
  despesasTotais([
    { nome: "Jornal Online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 },
  ])
);

/* Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas. Crie uma função que receba um array de produtos e retorne o total das despesas */
